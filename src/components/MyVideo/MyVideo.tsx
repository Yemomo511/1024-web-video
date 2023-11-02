import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import css from "./index.module.css";
import { lightColors } from "~common/color";
import VideoList from "./VideoList/VideoList";
const itemTabs: TabsProps["items"] = [
  {
    key: "1",
    label: "作品",
    children: <VideoList type="myself"></VideoList>,
  },
  {
    key: "2",
    label: "喜欢",
    children: <VideoList type="like"></VideoList>,
  },
  {
    key: "3",
    label: "收藏",
    children: <VideoList type="star"></VideoList>,
  },
];
export default function MyVideo() {
  return (
    <div className={css.box}>
      <ConfigProvider theme={{
        components:{
          Tabs:{
            cardBg:"transparent",
            cardGutter:20,
            itemColor:lightColors.lightGray,
            itemHoverColor:lightColors.white,
            itemSelectedColor:lightColors.white,
            itemActiveColor:lightColors.white,
            inkBarColor:lightColors.red,
            titleFontSizeLG:20,
            cardHeight:100,
            colorBorder:"transparent"
          },
        },
        token:{
          colorPrimary:lightColors.primary,
        }
      }}>
        <Tabs
          className={`${css.tabBox} css-my-video-tab`}
          size="large"
          defaultActiveKey="1"
          items={itemTabs}
          onChange={(key: string) => console.log(key)}
        ></Tabs>
      </ConfigProvider>
    </div>
  );
}
