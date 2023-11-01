import React from "react";
import css from "./index.module.less";
import NavCard from "~components/IconCard/IconCard";
import imageUrl from "~/common/image";
import {NavLink} from "react-router-dom";
const navList = [
    {
        title: "首页",
        path:'/home',
        icon: imageUrl.nav.index,
    },
    {
        title:"关注",
        path:'/follow',
        icon:imageUrl.nav.follow
    },
    {
        title:"热门",
        path:'/hot',
        icon:imageUrl.nav.hot
    },
    {
        title:"游戏",
        path:'/game',
        icon:imageUrl.nav.game
    }
]
export default function Nav() {
  return (
    <div className={css.nav}>
      {
        navList.map((item,index)=>{
          return (
              <NavLink to={item.path}>
                  <NavCard key={index} title={item.title} icon={item.icon}></NavCard>
              </NavLink>
          )
        })
      }
    </div>
  );
}
