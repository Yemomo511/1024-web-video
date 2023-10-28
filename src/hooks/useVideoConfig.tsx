import React, { useMemo } from "react";

export default function useVideoConfig( playerRef : any) {
  const speedConfig = useMemo(() => {
    return [
      {
        text: "1.0x",
        click: () => {
          if (playerRef.current) {
            playerRef.current.speed(1);
          }
        },
      },
      {
        text: "1.25x",
        click: () => {
          if (playerRef.current) {
            playerRef.current.speed(1.25);
          }
        },
      },
      {
        text: "1.5x",
        click: () => {
          if (playerRef.current) {
            playerRef.current.speed(1.5);
          }
        },
      },
      {
        text: "2.0x",
        click: () => {
          if (playerRef.current) {
            console.log(playerRef.current);
            playerRef.current.speed(2);
          }
        },
      },
    ];
  }, [playerRef.current]);

  const qualityConfig = useMemo(()=>{
    return [
        {
          text: "1080P 高清",
          click: () => {
            
          },
        },
        {
          text: "720P 高清",
          click: () => {
            if (playerRef.current) {
              playerRef.current.speed(1.25);
            }
          },
        },
        {
          text: "480P 清晰",
          click: () => {
            
          },
        },
        {
          text: "360P 流畅",
          click: () => {
            if (playerRef.current) {
              console.log(playerRef.current);
              playerRef.current.speed(2);
            }
          },
        },
      ];
  },[playerRef.current])
  return {speedConfig,qualityConfig}
}
