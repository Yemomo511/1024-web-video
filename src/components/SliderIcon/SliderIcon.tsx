import { useEffect, useState } from "react";
import css from "./index.module.css";

import {
  Fit,
  Layout,
  useRive,
  Alignment,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import imageUrl from "~/common/image";
import likeRiv from "~assets/rive/likd.riv";
import Icon from "~components/Icon/Icon";
import { Avatar, Popover } from "antd";
export default function SliderIcon({
  username,
  avatar
}:{
  username:string
  avatar:string
}) {
  const [isLiked, setIsLiked] = useState(true);
  const [isPop,setIsPop] = useState(false)
  const { rive: likeRive, RiveComponent: LikeComponent } = useRive({
    src: likeRiv,
    stateMachines: "State",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });
  const onInput = useStateMachineInput(likeRive, "State", "Turn on");
  const offInput = useStateMachineInput(likeRive, "State", "Turn off");
  const animeInput = useStateMachineInput(likeRive, "State", "Turn on_anim");
  useEffect(() => {
    if (isLiked) {
      offInput?.fire();
    } else {
      animeInput && animeInput.fire();
      onInput && onInput.fire();
    }
  }, [isLiked, onInput]);
  return (
    <div className={css.box}>

      <Popover 
      open={isPop}
      placement="left"
      className={css.avatar}
      content={<div>{username}</div>}
      >
        <div onMouseEnter={()=>{
          setIsPop(true)
        }} onMouseLeave={()=>{
          setIsPop(false)
        }}>
          <Avatar size={50} src={avatar}></Avatar>
        </div>
      </Popover>
  
      <div
        className={css.likeBox}
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      >
        <LikeComponent
          //设置大小
          className={css.icon}
          //进入重头开始播放
        />
      </div>
      <div className={css.otherIconBox}>
        <div className={css.iconBox}>
          <Icon src={imageUrl.check.comment}></Icon>
        </div>
        <div className={css.iconBox}>
          <Icon src={imageUrl.check.star}></Icon>
        </div>
        <div className={css.iconBox}>
          <Icon src={imageUrl.check.share}></Icon>
        </div>
      </div>
    </div>
  );
}
