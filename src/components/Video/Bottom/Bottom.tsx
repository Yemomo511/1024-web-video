import React, { useEffect, useMemo, useRef, useState } from "react";
import css from "./index.module.css";
import DPlayer ,{DPlayerEvents}from "dplayer";
import Slider from "~components/Slider/Slider";
import { stringWithTime } from "~/utils/api/common";
import imageUrl from "~/common/image";
import Icon from "~components/Icon/Icon";
import { Slider as SliderAntd } from "antd";
import TextWithSwitch from "~components/TextWithSwitch/TextWithSwitch";
import TextMenu from "~components/Controler/TextMenu/TextMenu";
import useVideoConfig from "~/hooks/useVideoConfig";
import { useFullScreenStore } from "~/store/store";
import DammuInput from "~components/DammuInput/DammuInput";
import SliderIcon from "~components/SliderIcon/SliderIcon";
import poster from "~assets/poster/poster.jpg";

//playerRef 为 Ref current为Dplayer实例，
export default function Bottom({ playerRef }: { playerRef: DPlayer | null}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [volumeMenu, setVolumeMenu] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const volumeRef = useRef<HTMLDivElement>(null);
  const { setIsFull, isFull } = useFullScreenStore((state) => state);
  useEffect(() => {
    if (playerRef){
      playerRef.video.muted = true;
      playerRef.video.muted = false
    }
  }, [playerRef]);

  const allTimeState = useMemo(() => {
  
    if (playerRef) {
      if (Number.isNaN(playerRef.video.duration)){
        return 0;
      }
      let duration = Math.floor(+playerRef.video.duration);
      return duration;
    } else {
      return 0;
    }
  }, [playerRef,isPause]);
  const { speedConfig, qualityConfig } = useVideoConfig(playerRef);

  //开启监听
  useEffect(() => {
    if (playerRef) {
      console.log(playerRef)
      //忽视错误 ts注释存在问题 考虑后续打个patch
      // @ts-ignore
      playerRef.on("play", () => {
        setIsPause(false);
      });
      // @ts-ignore
      playerRef.on("pause", () => {
        setIsPause(true);
      });
    }
  }, [playerRef]);
  useEffect(() => {
    if (playerRef) {
      if (isPause) {
        playerRef.pause();
      } else {
        playerRef.play();
      }
    }
  }, [isPause, playerRef]);

  useEffect(() => {
    //轮询
    if (playerRef) {
      let duration = Math.floor(playerRef.video.currentTime);
      setCurrentTime(duration);
      const timer = setInterval(() => {
        if (playerRef) {
          let duration = Math.floor(playerRef.video.currentTime);
          console.log(duration);
          setCurrentTime(duration);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [playerRef,isPause]);
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
            if (playerRef) {
              playerRef.video.volume = state;
            }
          }}
        ></SliderAntd>
      </div>
    );
  }, [volumeMenu]);

  return (
    <div className={css.box}>
      <div className={css.sliderBar}>
         <SliderIcon
         avatar={poster}
         username="叶墨沫"></SliderIcon>
      </div>
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
          <DammuInput playerRef={playerRef}></DammuInput>
        </div>
        <div className={css.control}>
          <TextWithSwitch>自动播放</TextWithSwitch>
          <TextMenu title="倍数" menuConfig={speedConfig}></TextMenu>
          <TextMenu title="画质" menuConfig={qualityConfig}></TextMenu>
          <Icon
            src={imageUrl.video.FullScreen}
            onPress={() => {
              setIsFull(!isFull);
            }}
          ></Icon>
        </div>
      </div>
    </div>
  );
}
