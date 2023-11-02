import data from "./data";
import css from "./index.module.less";
import VideoCard from "../VideoCard/VideoCard";
export default function VideoList({type}:{
  type:"myself"|"star"|"like"
}) {
  //后期用mock进行获取
  return (
    <div className={css.box}>
      {data.map((item) => {
        return (
          <div className={css.cardItem}>
            <VideoCard data={item} key={item.id}></VideoCard>
          </div>
        );
      })}
    </div>
  );
}
