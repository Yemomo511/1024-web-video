import React from "react";
import { videoType } from "~types/type";
import css from "./index.module.less";
import like from "~assets/icon/VideoCard/videoLike.svg";
export default function VideoCard({ data }: { data: videoType }) {
    console.log(data);
  return (
    <div className={css.box}>
      <div className={css.posterBox}>
        <img className={css.poster} src={data.poster}></img>
        <div className={css.infoBox}>
          <div className={css.likeBox}>
            <img className={css.like} src={like}></img>
            <div className={css.likeNumber}>{data.liked}</div>
          </div>
        </div>
        
      </div>
      <div className={css.userBox}>
             <p className={css.title}>
                {data.name}
            </p>
            <div className={css.userName}>
                {"叶墨沫"}
            </div>
          </div>
    </div>
  );
}
