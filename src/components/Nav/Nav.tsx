import React from "react";
import css from "./index.module.css";
import NavCard from "~components/NavCard/NavCard";
import imageUrl from "~/common/image";
const navList = [
    {
        title: "首页",
        icon: imageUrl.nav.index,
    },
    {
        title:"关注",
        icon:imageUrl.nav.follow
    },
    {
        title:"热门",
        icon:imageUrl.nav.hot
    },
    {
        title:"游戏",
        icon:imageUrl.nav.game
    }
]
export default function Nav() {
  return (
    <div className={css.nav}>
      {
        navList.map((item,index)=>{
          return <NavCard key={index} title={item.title} icon={item.icon}></NavCard>
        })
      }
    </div>
  );
}
