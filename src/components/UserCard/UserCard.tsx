import React from "react";
import css from "./index.module.less";
import { lightColors } from "~/common/color";
import IconCard from "~components/IconCard/IconCard";
import myLike from "~assets/icon/userFunc/myLike.svg";
import myStar from "~assets/icon/userFunc/myStar.svg";
import myVideo from "~assets/icon/userFunc/myVideo.svg";
const FuncIconCard = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <IconCard
      icon={icon}
      title={title}
      flexStyle={{
        flexDirection: "column",
      }}
    ></IconCard>
  );
};
export default function UserCard({ userId }: { userId: string }) {
  //根据userId获取信息

  return (
    <div className={css.box}>
      <div
      style={{
        fontSize: 20,
        fontWeight: 400,
        color: lightColors.white,
      }}
      className={css.name}>叶墨沫</div>
      <div
        style={{
          fontSize: 16,
          color: lightColors.gray,
        }}
      >
        {`id:${1231312443}`}
      </div>
      <div className={css.funcBox}>
      <FuncIconCard title="我的视频" icon={myVideo}></FuncIconCard>
        <FuncIconCard title="我的喜欢" icon={myLike}></FuncIconCard>
        <FuncIconCard title="我的收藏" icon={myStar}></FuncIconCard>
      </div>
      <div className={css.unlogin}>
        退出登录
      </div>
    </div>
  );
}
