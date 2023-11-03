import React, {useEffect, useState} from "react";
import css from "./index.module.less";
import NavCard from "~components/IconCard/IconCard";
import imageUrl from "~/common/image";
import {NavLink, useNavigate} from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  const navList = [
    {
      title: "首页",
      icon: imageUrl.nav.index,
      path:'/home/recommend',
    },
    {
      title: "我的",
      icon: imageUrl.nav.follow,
      path:'/home/my-home/123',
    },
    {
      title: "热门",
      icon: imageUrl.nav.hot,
      path:'/home/hot',
    },
    {
      title: "游戏",
      icon: imageUrl.nav.game,
      path:'/home/game',
    },
  ];
  return (
    <div className={css.nav}>
      {navList.map((item, index) => {
        return (
          <NavLink to={item.path}>
            <NavCard
                key={index}
                title={item.title}
                icon={item.icon}
            ></NavCard>
          </NavLink>
        );
      })}
    </div>
  );
}
