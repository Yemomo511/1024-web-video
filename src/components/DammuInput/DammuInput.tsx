import React, { useEffect, useRef } from 'react'
import css from "./index.module.less"
import imageUrl from '~/common/image'
import Icon from '~components/Icon/Icon'
export default function DammuInput({playerRef}:{
    playerRef:any
}) {
    const inputRef = useRef<HTMLInputElement>(null)
    //开始时监听
    useEffect(()=>{
        if(inputRef.current && playerRef){
            window.addEventListener("keydown",(e)=>{
                if(e.keyCode === 13 && inputRef.current){
                    playerRef.danmaku.draw({
                        text:inputRef.current.value,
                        //随机颜色
                        color: Math.floor(Math.random() * 16777215).toString(16),
                        type:"right"
                    },()=>{})
                    inputRef.current.value = ""
                }
            })
        }
    },[inputRef,playerRef])
  return (
    <div className={css.dammuBox}>
    <Icon src={imageUrl.video.dammu} onPress={() => {}}></Icon>
    <Icon src={imageUrl.video.dammuConfig} onPress={() => {}}></Icon>
    <p className={css.split}>|</p>
    <div className={css.dammuInputBox}>
      <input ref={inputRef} className={css.dammu} placeholder="发送一个弹幕吧"></input>
    </div>
  </div>
  )
}
