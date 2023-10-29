import React, { useEffect, useState } from "react";
import css from "./index.module.css";
import { Fit, Layout, useRive, Alignment, useStateMachineInput } from "@rive-app/react-canvas";
import likeRiv from "~assets/rive/likd.riv";
export default function SliderIcon() {
const [isLiked, setIsLiked] = useState(true)
  const { rive, RiveComponent } = useRive({
    src: likeRiv,
    stateMachines:"State",
    autoplay:true,
    layout:new Layout({
        fit:Fit.Contain,
        alignment:Alignment.Center,
    }),
  });
  const onInput = useStateMachineInput(rive,"State","Turn on");
  const offInput = useStateMachineInput(rive,"State","Turn off");
  const animeInput = useStateMachineInput(rive,"State","Turn on_anim");
  useEffect(() => {
    if (isLiked){
        offInput?.fire()
    }else{
        console.log("inner")
        animeInput && animeInput.fire()
        onInput && onInput.fire()
    }
  },[isLiked,onInput])
  return (
    <div className={css.box}>
      <div className={css.likeBox}
      onClick={()=>{
        setIsLiked(!isLiked)
      }}>
        <RiveComponent
          //设置大小
          className={css.icon}
          //进入重头开始播放
        />
      </div>
    </div>
  );
}
