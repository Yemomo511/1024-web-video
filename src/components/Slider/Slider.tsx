import React, { useCallback, useRef } from 'react'
import { Slider as SliderAntd } from 'antd'
import { stringWithTime } from '~/utils/api/common'
import DPlayer from 'dplayer'
import "./index.css"
function Slider({
    changeTime,
    playerRef,
    currentTime,
    allTime,
}:{
    changeTime:(time:number)=>void,
    playerRef: DPlayer,
    currentTime:number,
    allTime:number
}){
    
    const sliderRef = useRef<any>()
    const notice = useCallback((state?:number|undefined)=>{
        if (state){
            return stringWithTime(state)
        }else{
            return "00:00"
        }
      
    },[])
    const handleChange = useCallback((state:number)=>{
        changeTime(state)
        if (playerRef){
            playerRef.video.currentTime = state
        }
    },[playerRef])
  return (
     <SliderAntd
        className='css-slider-video'
        ref={sliderRef}
        value={currentTime}
        styles={{
            track:{
                //白到粉的渐变色
                background: "linear-gradient(to right, #fff, #FED0EA)",
            },
            rail:{
                background:"rgba(255,255,255,0.6)"
            }
        }}
        style={{
            height:"20px",
        }}
        min={0}
        max={allTime}
        onChange={
            handleChange
        }
        tooltip={{
            formatter:notice
        }}
        ></SliderAntd> 
  )
}
export default React.forwardRef(Slider)