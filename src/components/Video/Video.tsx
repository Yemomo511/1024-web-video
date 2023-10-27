import React from 'react'
import style from "./index.module.css"
import FlvJs from 'flv.js'
import DPlayer from "dplayer"
import mp4 from "~assets/video/loli.mp4"
import poster from "~assets/poster/poster.jpg"

//得用canvas播放视频
export default function Video() {
  useEffect(()=>{
    //初始化
  },[])
  return (
    <div className={style.allBox}>
      <div className={style.canvasBox}>

      </div>
      
    </div>
  )
}
