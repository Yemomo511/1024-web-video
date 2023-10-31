import React from 'react'
import css from "./index.module.less"
export default function Icon({
    src,
    onPress=()=>{},
    IconStyle={}
}:{
    src:string,
    onPress?:()=>void,
    IconStyle?:React.CSSProperties
}) {
  return (
    <>
     <img src={src} 
     style={IconStyle}
     onClick={onPress} alt="" className={css.icon}></img> 
    </>
  )
}
