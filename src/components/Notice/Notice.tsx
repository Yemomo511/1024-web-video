import { Avatar } from "antd";
import { FC, useCallback, useMemo } from "react";
import css from "./index.module.less";
import imageUrl from "~/common/image";
import avatar from "~assets/poster/poster.jpg"
import { lightColors } from "~/common/color";
interface NoticeDataType{
    name:string,
    avatar:string,
    noticeType:string
}
const data = [] as NoticeDataType[]
for (let i = 0; i < 10; i++) {
    data.push({
        name: '叶墨沫',
        avatar: avatar,
        noticeType: '点赞了你的说说'
    })
}
const Card = ({ 
    name,
    avatar,
    noticeType=""
    }:{
        name:string,
        avatar:string,
        //待定配置
        noticeType?:string
    })=>{
    return (
<div className={css.card}>
            <Avatar src={avatar} size={30}></Avatar>
            <div className={css.cardContent}>
                <p style={{
                    color:lightColors.white,
                    fontSize:16
                }}>{name}</p>
                <p style={{
                    color:lightColors.gray,
                    fontSize:12,
                }}>点赞了你的说说</p>
                <p style={{
                    color:lightColors.gray,
                    fontSize:12,
                }}>11-01 21:31</p>
            </div>
        </div>
    )
}

interface Props {}
const Notice: FC<Props> = () => {
  return (
    <div className={css.box}>
      <div className="text-white text-1xl self-start">互动消息</div>

      <div className={css.noticeScroll}>
        {data.map((item,index)=>{
            return <Card key={index} {...item}></Card>
        })}
      </div>
    </div>
  );
};
export default Notice;
