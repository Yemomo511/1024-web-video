import React, { useEffect, useMemo, useRef, useState } from "react";
import css from "./index.module.css";
import Slider from "~components/Slider/Slider";
import { stringWithTime } from "~/utils/api/common";
import pause from "~assets/icon/slider/pause.svg";
import volume from "~assets/icon/slider/volume.svg";
import dammu from "~assets/icon/slider/dammu.svg";
import dammuConfig from "~assets/icon/slider/dammuConfig.svg";
import Icon from "~components/Icon/Icon";
import { Button } from "antd";
import TextWithSwitch from "~components/TextWithSwitch/TextWithSwitch";
export default function Bottom({ playerRef }: { playerRef: any }) {
  const [currentTime, setCurrentTime] = useState(0);
  const allTimeState = useMemo(() => {
    console.log(playerRef.current);
    if (playerRef.current) {
      let duration = Math.floor(playerRef.current.video.duration);
      console.log(duration);
      return duration;
    } else {
      return 0;
    }
  }, [playerRef, playerRef.current]);

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
          <Icon src={pause} onPress={() => {}}></Icon>
          <p className={css.progressText}>
            {stringWithTime(currentTime)}/{stringWithTime(allTimeState)}
          </p>
          <Icon src={volume} onPress={() => {}}></Icon>
          <div className={css.dammuBox}>
            <Icon src={dammu} onPress={() => {}}></Icon>
            <Icon src={dammuConfig} onPress={() => {}}></Icon>
            <p className={css.split}>|</p>
            <div className={css.dammuInputBox}>
              <input className={css.dammu} placeholder="发送一个弹幕吧"  ></input>
            </div>
          </div>
        </div>
        <div className={css.control}>
            <TextWithSwitch>自动播放</TextWithSwitch>
            <p>倍速</p>
            <p>画质</p>
        </div>
      </div>
    </div>
  );
}
