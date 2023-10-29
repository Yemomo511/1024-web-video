import React from 'react'
import imageUrl from '~/common/image'
import css from "./index.module.css"
export default function Header() {
  return (
    <div className={css.box}>
      <img src={imageUrl.header.logo} className={css.logo}></img>
    </div>
  )
}
