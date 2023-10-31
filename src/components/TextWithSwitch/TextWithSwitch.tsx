import { Switch } from "antd";
import React from "react";
import css from "./index.module.less";
import { ConfigProvider } from "antd";
import { lightColors } from "~/common/color";
export default function TextWithSwitch({
  children,
}: {
  props?: any;
  children?: any;
}) {
  return (
    <div className={css.box}>
      <ConfigProvider theme={{
        components:{
          Switch:{
            handleSizeSM:12,
            handleBg:lightColors.white,
            colorPrimaryBorder:"white",
            colorPrimary:lightColors.red,
            colorPrimaryHover:lightColors.red,
            handleShadow:"0px 0px 4px rgba(255,255,255,0.1)"
          }
        }
      }}>
        <Switch 
        
        size="small"></Switch>
      </ConfigProvider>

      <p>{children}</p>
    </div>
  );
}
