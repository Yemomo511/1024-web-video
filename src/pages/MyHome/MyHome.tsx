import React from 'react'
import {useQuery} from "react-query"
import css from "./index.module.less"
import { Avatar } from 'antd'
import avatar from "~assets/avatar.png"
import MyVideo from '~components/MyVideo/MyVideo'
export default function MyHome() {
  // const {userInfo} = useQuery("",()=>{

  // })
  return (
    <div className={css.box}>
      <div className={css.userInfoBox}>
        <Avatar size={100} src={avatar}></Avatar>
        <div className={css.userInfoTextBox}>
          <div className={css.userName}>
              叶墨沫
          </div>
          <div className={css.userInfoNumber}>
            <div className={css.userInfoNumberItem}>
            <div className={css.userInfoNumberItemTitle}>关注:</div>
              <div className={css.userInfoNumberItemNumber}>0</div>
            </div>
            <div className={css.userInfoNumberItem}>
            <div className={css.userInfoNumberItemTitle}>粉丝:</div>
              <div className={css.userInfoNumberItemNumber}>0</div>
            </div>
            <div className={css.userInfoNumberItem}>
            <div className={css.userInfoNumberItemTitle}>获赞</div>
              <div className={css.userInfoNumberItemNumber}>0</div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.myVideoBox}>
        <MyVideo></MyVideo>
      </div>
     
    </div>
  )
}
