import React, {
  FC,
  HTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
} from "react";
import css from "./index.module.css";
import Icon from "~components/Icon/Icon";

interface MyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  icon: string;
  title: string;
}
const IconCard: FC<MyProps> = memo((props) => {
  const { icon, title } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
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
    <div className={css.box} ref={boxRef}>
      <div ref={iconRef} style={{
        opacity:0.4
      }}>
        <Icon src={icon}></Icon>
      </div>

      <div className={css.text} ref={textRef}>
        {title}
      </div>
    </div>
  );
});
export default IconCard;
