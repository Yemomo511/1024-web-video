import React, { ReactElement, RefObject, useEffect, useRef } from 'react'
import style from "./index.module.css"
import mp4 from "~assets/video/loli.mp4"
import poster from "~assets/poster/poster.jpg"
import useDraw from './hook/useDraw'


//得用canvas播放视频
export default function Video() {
  const canvasRef = useRef() as RefObject<HTMLCanvasElement>
  const videoRef = useRef() as RefObject<HTMLVideoElement>
  useDraw(canvasRef,videoRef,mp4,poster)
  return (
    <div className={style.allBox}>
      <div className={style.canvasBox}>
        <canvas 
        className={style.canvas}
        ref={canvasRef} width="1920" height="1080"></canvas>
        <video src={mp4} 
        preload='metadata'
        autoPlay={true}
        ref={videoRef} 
        className={style.video}></video>
      </div>
      
    </div>
  )
}
