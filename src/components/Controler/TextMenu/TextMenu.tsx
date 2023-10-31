import { Popover, Tooltip } from "antd";
import React, { useMemo, useState } from "react";
import css from "./index.module.less";
interface menuConfigType {
  text: string;
  click: () => void;
}
export default function TextMenu({
  title,
  menuConfig,
}: {
  title: string;
  menuConfig: menuConfigType[];
}) {
  const menu = useMemo(() => {
    return (
      <div className={css.menuBox}>
        {menuConfig.map((item, index) => {
          return (
            <div className={css.menuItemBox} key={index}>
              <div className={css.menuItem} onClick={item.click}>
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [menuConfig]);
  return (
    <div className={css.backgroundColorox}>
      <Tooltip title={menu}>
        <p className={css.text}>{title}</p>
      </Tooltip>
    </div>
  );
}
