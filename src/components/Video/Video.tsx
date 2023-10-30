import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import style from "./index.module.css";
import FlvJs from "flv.js";
import DPlayer from "dplayer";
import mp4 from "~assets/video/loli.mp4";
import poster from "~assets/poster/poster.jpg";
import Buttom from "~components/Video/Bottom/Bottom";
import { useFullScreenStore } from "~/store/store";
import { ConfigProvider } from "antd";
import { nanoid } from "nanoid";
import SliderIcon from "~components/SliderIcon/SliderIcon";
//得用canvas播放视频
export default function Video() {
  const [playerRef,setPlayerRef] = useState<DPlayer | null>(()=>{
    return null
  })
  
  const maskRef = useRef<HTMLDivElement>(null)
  const playerBoxRef = useRef<HTMLDivElement>(null)
  const isFull = useFullScreenStore((state) => state.isFull);
  useEffect(() => {
    //开启一系列事件监听
    setPlayerRef(new DPlayer({
      container: document.getElementById("player"),
      video: {
        url: mp4,
        //视频封面
        pic: poster,
      },
      playbackSpeed: [1, 1.25, 1.5, 2],
      preload: "metadata",
      volume: 0,
      //支持airplay
      airplay: true,
      contextmenu: [
        {
          text: "视频名称",
          click: () => {},
        },
        {
          text: "视频作者",
          click: () => {},
        },
      ],
      danmaku: {
        id:"1",
        api:""
      },
    }))
  }, []);
  //判断是否需要全屏
  useEffect(() => {
    const component = document.getElementById("playercomponent");
    if (component) {
      if (isFull) {
        component.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }, [isFull]);
  return (
    <div className={style.allBox} id="playercomponent">
      <div className={style.canvasBox}>
        <div id="player" className={style.video} ref={
          playerBoxRef
        }>

        </div>
      </div>
      <div className={style.mask} id="playermask" ref={maskRef}>
        <ConfigProvider
            theme={{
              token: {
                colorBgElevated: "#363741",
                colorText: "white",
              },
            }}
          >
            <Buttom playerRef={playerRef}></Buttom>
        </ConfigProvider>
      </div>
     
    </div>
  );
}
