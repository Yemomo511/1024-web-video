import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import style from "./index.module.css";
import FlvJs from "flv.js";
import DPlayer from "dplayer";
import mp4 from "~assets/video/loli.mp4";
import poster from "~assets/poster/poster.jpg";
import Buttom from "~components/Video/Bottom/Bottom";
import { useFullScreenStore } from "~/store/store";
import { ConfigProvider } from "antd";
import { videoType } from "~/common/type";
import { useModelStore } from "~/store/store";
//定义渲染模式

//得用canvas播放视频
export default function Video({ videoData }: { videoData: videoType }) {
  const [playerRef, setPlayerRef] = useState<DPlayer | null>(() => {
    return null;
  });
  const maskRef = useRef<HTMLDivElement>(null);
  const playerBoxRef = useRef<HTMLDivElement>(null);
  const isFull = useFullScreenStore((state) => state.isFull);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //开启一系列事件监听
    setPlayerRef(
      new DPlayer({
        container: document.getElementById(`player-${videoData.id}`),
        video: {
          url: videoData.url,
          //视频封面
          pic: videoData.poster,
        },
        playbackSpeed: [1, 1.25, 1.5, 2],
        autoplay: true,
        preload: "metadata",
        volume: 0.7,
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
          id: "1",
          api: "",
        },
      })
    );
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
  const timer = useRef<number | null>(null);
  //监听设置底部状态栏的显示
  useEffect(() => {
    if (playerBoxRef.current && bottomRef.current) {
      playerBoxRef.current.addEventListener("mousemove", () => {
        if (timer.current) {
          clearTimeout(timer.current);
        }
        if (bottomRef.current) {
          bottomRef.current.style.opacity = "1";
        }
        timer.current = setTimeout(() => {
          if (bottomRef.current) {
            bottomRef.current.style.opacity = "0";
          }
        }, 4000);
      });
      //优先级更高一筹
      bottomRef.current.addEventListener("mousemove", () => {
        if (timer.current) {
          clearTimeout(timer.current);
        }
        if (bottomRef.current) {
          bottomRef.current.style.opacity = "1";
        }
      });
      bottomRef.current.addEventListener("mouseleave", () => {
        timer.current = setTimeout(() => {
          if (bottomRef.current) {
            bottomRef.current.style.opacity = "0";
          }
        }, 4000);
      });
    }
  }, [playerBoxRef]);
  return (
    //设置allBox类和.dplayer-controller类
    <div
      className={[style.allBox, "deplayer-controller"].join(" ")}
      id={`playercomponent-${videoData.id}`}
    >
      <div className={style.canvasBox}>
        <div
          id={`player-${videoData.id}`}
          className={style.video}
          ref={playerBoxRef}
        ></div>
      </div>
      <div className={style.mask} id="playermask" ref={maskRef}>
        <ConfigProvider
          theme={{
            token: {
              colorBgElevated: "#363741",
              colorText: "white",
            },
            components: {
              Tooltip: {
                colorBgSpotlight: "#363741",
              },
            },
          }}
        >
          <Buttom playerRef={playerRef} ref={bottomRef}></Buttom>
        </ConfigProvider>
      </div>
    </div>
  );
}
