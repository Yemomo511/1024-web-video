import React from "react";
import css from "./index.module.less";
import NavCard from "~components/IconCard/IconCard";
import imageUrl from "~/common/image";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();

  const navList = [
    {
      title: "首页",
      icon: imageUrl.nav.index,
      onClick: () => navigate("/home"),
    },
    {
      title: "我的",
      icon: imageUrl.nav.follow,
      onClick: () => navigate("/home/my-home/123"),
    },
    {
      title: "热门",
      icon: imageUrl.nav.hot,
      onClick: () => {navigate("/home/hot")},
    },
    {
      title: "游戏",
      icon: imageUrl.nav.game,
      onClick: () => {navigate("/home/game")},
    },
  ];
  return (
    <div className={css.nav}>
      {navList.map((item, index) => {
        return (
          <NavCard
            onClick={item.onClick}
            key={index}
            title={item.title}
            icon={item.icon}
          ></NavCard>
        );
      })}
    </div>
  );
}
