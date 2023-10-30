import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { FC, ReactNode, HTMLAttributes, CSSProperties } from "react";
import css from "./index.module.css";
import Video from "~components/Video/Video";
import Header from "~components/Header/Header";
import Nav from "~components/Nav/Nav";
import {
  AnimatedProps,
  animated,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import { videoType } from "~/common/type";
import mp4 from "~assets/video/loli.mp4";
import musicMp4 from "~assets/video/music.mp4"
import poster from "~assets/poster/poster.jpg";
import poster2 from "~assets/poster/poster2.jpeg";
import { nanoid } from "nanoid";
import { useVideoIndexStore } from "~/store/store";

const videoData: videoType[] = [
  {
    id: nanoid(),
    poster: poster,
    url: mp4,
    name: "萝莉www",
    userId: "1",
    stared: 12,
    liked: 12,
    comments: [],
  },
  {
    id: nanoid(),
    poster: poster2,
    url: musicMp4,
    name: "萝莉www",
    userId: "1",
    stared: 12,
    liked: 12,
    comments: [],
  },
  {
    id: nanoid(),
    poster: poster,
    url: mp4,
    name: "萝莉www",
    userId: "1",
    stared: 12,
    liked: 12,
    comments: [],
  },
  {
    id: nanoid(),
    poster: poster2,
    url: musicMp4,
    name: "萝莉www",
    userId: "1",
    stared: 12,
    liked: 12,
    comments: [],
  },
];
const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = videoData.map((item) => {
  return ({ style }) => {
    return (
      <animated.div
        style={{
          ...style,
          width: "100%",
          height: "100%",
        }}
        className={css.transCard}
      >
        <Video videoData={item}></Video>
      </animated.div>
    );
  };
});

interface MyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  videoData: videoType[];
}
const Home: FC<MyProps> = function Home() {
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);
  const [direct, setDirect] = useState(true);
  const transRef = useSpringRef();
  const transition = useTransition(index, {
    ref: transRef,
    keys: null,
    from: {
      opacity: 0,
      transform: `translate3d(0,${direct ? 100 : -100}%,0)`,
    },
    enter: {
      opacity: 1,
      transform: `translate3d(0,0,0)`,
    },
    leave: {
      opacity: 0,
      transform: `translate3d(0,${direct ? -100 : 100}%,0)`,
    },
  });
  const turnUpVideo = useCallback(() => {
      const upState = () => {
        setDirect(true);
        setIndex((state: number) => {
          console.log(state, "state");
          if (state === videoData.length - 1) {
            return 0;
          } else {
            return state + 1;
          }
        });
      }
      upState()
  }, [index]);
  const turnDownVideo = useCallback(() => {
      const upState = () => {
        setDirect(false);
        setIndex((state: number) => {
          console.log(state, "state");
          if (state === 0) {
            return videoData.length - 1;
          } else {
            return state - 1;
          }
        });
      };
      upState()
  }, [index, videoData]);
  let timer = useRef<number | null>(null);
  useEffect(() => {
    if (videoBoxRef.current) {
      videoBoxRef.current.addEventListener("wheel", (e) => {
        if (timer.current) {
          clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
          console.log("inner")
          if (e.deltaY > 0) {
            console.log("inner")
            turnUpVideo();
          } else if (e.deltaY < -0) {
            turnDownVideo();
          }
        }, 100);
         
      });
    }
  },[]);
  useEffect(() => {
    transRef.start();
  }, [index]);
  return (
    <div className={css.box}>
      <div className={css.header}>
        <Header></Header>
      </div>
      <div className={css.content}>
        <div className={css.nav}>
          <Nav></Nav>
        </div>
        <div className={css.video} ref={videoBoxRef}>
          <div className={css.transBox}>
            {transition((style, item) => {
              const Page = pages[item];
              return <Page style={style}></Page>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
