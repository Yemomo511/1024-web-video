import React, { useEffect, useReducer, useRef } from 'react'
import style from "./index.module.css"
import FlvJs from 'flv.js'
import DPlayer from "dplayer"
import mp4 from "~assets/video/loli.mp4"
import poster from "~assets/poster/poster.jpg"
import Buttom from "~components/Bottom/Bottom"
//得用canvas播放视频
export default function Video() {
  const playerRef = useRef()
  useEffect(()=>{
    //初始化
    playerRef.current = new DPlayer({
      container:document.getElementById("player"),
      video:{
        url:mp4,
        //视频封面
        pic:poster,
      },
      preload:"metadata",
      volume:0,
      //支持airplay
      airplay:true,
      contextmenu:[
        {
          text:"视频名称",
          click:()=>{

          }
        },
        {
          text:"视频作者",
          click:()=>{

          }        
        }
      ],
      highlight:[
        {
          time:20,
          text:"高潮"
        }
      ]
      
    })
  },[])
  useEffect(()=>{
    //开启一系列事件监听
    if (playerRef.current){
      playerRef.current.on("progress",()=>{
        console.log("change")
      })
    }
  },[playerRef])
  return (
    <div className={style.allBox}>
      <div className={style.canvasBox}>
        <div id="player" className={style.video}></div>
      </div>
      <Buttom playerRef={playerRef}></Buttom>
    </div>
  )
}
