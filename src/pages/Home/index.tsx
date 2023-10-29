import { memo } from "react";
import type { FC, ReactNode, HTMLAttributes } from "react";
import css from "./index.module.css";
import Video from "~components/Video/Video";
import Header from "~components/Header/Header";
import Nav from "~components/Nav/Nav";
interface MyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
const Home: FC<MyProps> = memo(function Home(prop) {
  return (
    <div className={css.box}>
      <div className={css.header}>
        <Header></Header>
      </div>
      <div className={css.content}>
        <div className={css.nav}>
            <Nav></Nav>
        </div>
       
        <div className={css.video}>
          <Video></Video>
        </div>
      </div>
    </div>
  );
});
export default Home;
