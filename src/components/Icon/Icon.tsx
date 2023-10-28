import React from 'react'
import css from "./index.module.css"
export default function Icon({
    src,
    onPress=()=>{}
}:{
    src:string,
    onPress?:()=>void
}) {
  return (
    <>
     <img src={src} onClick={onPress} alt="" className={css.icon}></img> 
    </>
  )
}
