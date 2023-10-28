import React, { useEffect, useMemo, useRef, useState } from "react";
import css from "./index.module.css";
import Slider from "~components/Slider/Slider";
import { stringWithTime } from "~/utils/api/common";
import imageUrl from "~/common/image";
import Icon from "~components/Icon/Icon";
import { Slider as SliderAntd } from "antd";
import TextWithSwitch from "~components/TextWithSwitch/TextWithSwitch";
import TextMenu from "~components/Controler/TextMenu/TextMenu";
import useVideoConfig from "~/hooks/useVideoConfig";
import { useFullScreenStore } from "~/store/store";


export default function Bottom({ playerRef }: { playerRef: any }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [volumeMenu, setVolumeMenu] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const volumeRef = useRef<HTMLDivElement>(null);
  const {setIsFull,isFull} = useFullScreenStore((state) => state);
  const allTimeState = useMemo(() => {
    if (playerRef.current) {
      let duration = Math.floor(playerRef.current.video.duration);
      console.log(duration);
      return duration;
    } else {
      return 0;
    }
  }, [playerRef, playerRef.current]);
  const {speedConfig,qualityConfig} = useVideoConfig(playerRef)
  
  //开启监听
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.on("play", () => {
        setIsPause(false);
      });
      playerRef.current.on("pause", () => {
        setIsPause(true);
      });
    }
  }, [playerRef.current]);
  useEffect(() => {
    if (playerRef.current) {
      if (isPause) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
    }
  }, [isPause, playerRef.current]);

  useEffect(() => {
    //轮询
    if (playerRef.current) {
      let duration = Math.floor(playerRef.current.video.currentTime);
      setCurrentTime(duration);
      const timer = setInterval(() => {
        let duration = Math.floor(playerRef.current.video.currentTime);
        setCurrentTime(duration);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [playerRef]);
  useEffect(() => {
    if (volumeRef.current) {
      //鼠标进入
      volumeRef.current.addEventListener("click", () => {
        setVolumeMenu((state: boolean) => {
          return !state;
        });
      });
    }
  }, [volumeRef]);

  //子组件
  const sliderVertical = useMemo(() => {
    return (
      <div
        className={css.sliderVerticalBox}
        style={{
          display: volumeMenu ? "flex" : "none",
        }}
      >
        <SliderAntd
          className={css.sliderVertical}
          styles={{
            track: {
              backgroundColor: "",
            },
          }}
          defaultValue={0.7}
          max={1}
          min={0}
          step={0.01}
          vertical
          onChange={(state: number) => {
            if (playerRef.current) {
              playerRef.current.video.volume = state;
            }
          }}
        ></SliderAntd>
      </div>
    );
  }, [volumeMenu]);

  return (
    <div className={css.box}>
      <div className={css.progressBar}>
        <div className={css.sliderBox}>
          <Slider
            changeTime={(time: number) => {
              setCurrentTime(time);
            }}
            playerRef={playerRef}
            allTime={allTimeState}
            currentTime={currentTime}
          ></Slider>
        </div>
      </div>
      <div className={css.controlBox}>
        <div className={css.control}>
          <Icon
            src={isPause ? imageUrl.video.play : imageUrl.video.pause}
            onPress={() => {
              setIsPause((state: boolean) => {
                return !state;
              });
            }}
          ></Icon>
          <p className={css.progressText}>
            {stringWithTime(currentTime)}/{stringWithTime(allTimeState)}
          </p>
          <div className={css.volumeBox} ref={volumeRef}>
            {sliderVertical}
            <div
              style={{
                width: "30px",
                height: "30px",
              }}
            >
              <Icon
                src={imageUrl.video.volume}
                onPress={() => {
                  setVolumeMenu((state: boolean) => {
                    return !state;
                  });
                }}
              ></Icon>
            </div>
          </div>

          <div className={css.dammuBox}>
            <Icon src={imageUrl.video.dammu} onPress={() => {}}></Icon>
            <Icon src={imageUrl.video.dammuConfig} onPress={() => {}}></Icon>
            <p className={css.split}>|</p>
            <div className={css.dammuInputBox}>
              <input className={css.dammu} placeholder="发送一个弹幕吧"></input>
            </div>
          </div>
        </div>
        <div className={css.control}>
          <TextWithSwitch>自动播放</TextWithSwitch>
          <TextMenu title="倍数" menuConfig={speedConfig}></TextMenu>
          <TextMenu title="画质" menuConfig={qualityConfig}></TextMenu>
          <Icon src={imageUrl.video.FullScreen} onPress={()=>{
            setIsFull(!isFull)
          }}></Icon>
        </div>
      </div>
    </div>
  );
}
