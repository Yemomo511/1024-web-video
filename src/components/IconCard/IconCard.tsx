import React, {
  FC,
  HTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
} from "react";
import css from "./index.module.less";
import Icon from "~components/Icon/Icon";
import {useLocation} from "react-router-dom";

interface MyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  icon: string;
  title: string;
  textStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  flexStyle?: React.CSSProperties;
  onClick?:()=>void
}
const IconCard: FC<MyProps> = memo((props) => {
  const { icon, title,textStyle={},iconStyle={},flexStyle={},onClick} = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation()
  useEffect(() => {
    // 待抽取整体布局 根据 pathname 处理 Nav 高亮
    console.log(pathname);
  }, [pathname]);
  useEffect(() => {
    //开启监听
    if (boxRef.current) {
      //鼠标进入
      boxRef.current.addEventListener("mouseenter", () => {
        if (textRef.current) {
          textRef.current.style.color = "white";

        }
        if (iconRef.current){
            iconRef.current.style.opacity = "1"
        }
      });
      //鼠标离开
      boxRef.current.addEventListener("mouseleave", () => {
        if (textRef.current) {
          textRef.current.style.color = "#585a5f";
        }
        if (iconRef.current){
            iconRef.current.style.opacity = "0.4"
        }
      });
    }
  }, [boxRef]);
  return (
    <div
    style={flexStyle}
    className={css.box}
    ref={boxRef}
    onClick={onClick}
    >
      <div ref={iconRef} style={{
        opacity:0.4
      }}>
        <Icon IconStyle={iconStyle} src={icon}></Icon>
      </div>

      <div
      style={textStyle}
      className={css.text} ref={textRef}>
        {title}
      </div>
    </div>
  );
});
export default IconCard;
