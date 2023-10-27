import React, { RefObject, useEffect } from 'react'

export default function useDraw(
    draw:RefObject<HTMLCanvasElement>,
    video:RefObject<HTMLVideoElement>,
    src:string,
    poster:string
) {
  useEffect(()=>{
    console.log("inner",draw)
    if (draw.current && video.current) {
        const ctx = draw.current.getContext("2d")
        //创建video标签，并给予canvas标签
        const videoRef = video.current
        videoRef.addEventListener("play",()=>{
            const play = ()=>{
                ctx?.drawImage(videoRef,0,0)
                //根据帧变化进行刷新
                requestAnimationFrame(play)
            }
            play()
        })
        const image = new Image()
        image.src = poster
        image.onload = ()=>{
            ctx?.drawImage(image,0,0)
        }
        draw.current.addEventListener("click",()=>{
            videoRef.play()
            //清除当前绘画
            ctx?.clearRect(0,0,draw.current.width,draw.current.height)
        })
    }else{
        console.log('draw is null')
    }

    
  },[draw,src,video])
}
