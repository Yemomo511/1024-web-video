import type { FC, ReactNode, HTMLAttributes } from "react";
import css from "./index.module.css";
import Header from "~components/Header/Header";
import Nav from "~components/Nav/Nav";
import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";

interface MyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
const Home: FC<MyProps> = function Home() {
  console.log("home")
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
