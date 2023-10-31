import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import css from "./index.module.less";
import DPlayer, { DPlayerEvents } from "dplayer";
import Slider from "~components/Slider/Slider";
import { stringWithTime } from "~/utils/api/common";
import imageUrl from "~/common/image";
import Icon from "~components/Icon/Icon";
import { Popover, Slider as SliderAntd, Tooltip } from "antd";
import TextWithSwitch from "~components/TextWithSwitch/TextWithSwitch";
import TextMenu from "~components/Controller/TextMenu/TextMenu";
import useVideoConfig from "~/hooks/useVideoConfig";
import { useFullScreenStore } from "~/store/store";
import DammuInput from "~components/DammuInput/DammuInput";
import SliderIcon from "~components/SliderIcon/SliderIcon";
import poster from "~assets/poster/poster.jpg";

//playerRef 为 Ref current为Dplayer实例，
const Bottom = forwardRef(function Bottom(
  { playerRef }: { playerRef: DPlayer | null },
  ref: any
) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const volumeRef = useRef<HTMLDivElement>(null);
  const { setIsFull, isFull } = useFullScreenStore((state) => state);
  useEffect(() => {
    if (playerRef) {
      playerRef.video.muted = true;
      playerRef.video.muted = false;
    }
  }, [playerRef, isPause]);

  const allTimeState = useMemo(() => {
    if (playerRef) {
      if (Number.isNaN(playerRef.video.duration)) {
        return 0;
      }
      let duration = Math.floor(+playerRef.video.duration);
      return duration;
    } else {
      return 0;
    }
  }, [playerRef, isPause, currentTime]);
  const { speedConfig, qualityConfig } = useVideoConfig(playerRef);
  let timer: number;
  //开启监听，轮询持续时间进行刷新
  useEffect(() => {
    if (playerRef) {
      console.log(playerRef);
      //忽视错误 ts注释存在问题 考虑后续打个patch
      // @ts-ignore
      playerRef.on("play", () => {
        setIsPause(false);
        timer = setInterval(() => {
          if (playerRef) {
            let duration = Math.floor(playerRef.video.currentTime);
            setCurrentTime(duration);
          }
        }, 1000);
      });
      // @ts-ignore
      playerRef.on("pause", () => {
        setIsPause(true);
        clearInterval(timer);
      });
    }
  }, [playerRef]);
  useEffect(() => {
    if (playerRef) {
      if (isPause) {
        if (!playerRef.video.paused) {
          playerRef.pause();
        }
      } else {
        if (playerRef.video.paused) {
          playerRef.play();
        }
      }
    }
  }, [isPause, playerRef]);

  useEffect(() => {
    if (playerRef) {
      let duration = Math.floor(playerRef.video.currentTime);
      setCurrentTime(duration);
    }
  }, [playerRef, isPause]);

  //子组件
  const sliderVertical = useMemo(() => {
    return (
      <div
        className={css.sliderVerticalBox}
        style={{
          display: "flex",
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
  }, []);

  return (
    <div className={css.box}>
      <div className={css.sliderBar}>
        <SliderIcon avatar={poster} username="叶墨沫"></SliderIcon>
      </div>
      <div className={css.bottomBox} ref={ref}>
        <div className={css.progressBar}>
          <div className={css.sliderBox}>
            <Slider
              changeTime={(time: number) => {
                setCurrentTime(time);
              }}
              isPause={isPause}
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
              <Tooltip placement="top" title={sliderVertical}>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Icon src={imageUrl.video.volume}></Icon>
                </div>
              </Tooltip>
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
    </div>
  );
});
export default Bottom;
