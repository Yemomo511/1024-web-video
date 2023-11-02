import { useCallback, useEffect, useRef, useState } from "react";
import type { FC, ReactNode, HTMLAttributes, CSSProperties } from "react";
import css from "./index.module.css";
import Video from "~components/Video/Video";
import Header from "~components/Header/Header";
import Nav from "~components/Nav/Nav";
import { videoType } from "~/types/type";
import { ConfigProvider } from "antd";
import MyFocus from "~pages/MyHome/MyHome";
import Recommend from "~pages/Recommend/Recommend";
import { Outlet } from "react-router-dom";

interface MyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
const Home: FC<MyProps> = function Home() {
  return (
    <div className={css.box}>
      <div className={css.header}>
        <ConfigProvider
          theme={{
            components: {
              Tooltip: {
                colorBgSpotlight: "transparent",
                boxShadowSecondary: "none",
              },
            },
          }}
        >
          <Header></Header>
        </ConfigProvider>
      </div>
      <div className={`${css.content} flex flex-row`}>
        <div className={css.nav}>
          <Nav></Nav>
        </div>
        <div className={`${css.contentBox}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Home;
