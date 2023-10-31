import { Switch } from "@mui/material";
import React from "react";
import css from "./index.module.less";
export default function TextWithSwitch({
  children,
}: {
  props?: any;
  children?: any;
}) {
  return (
    <div className={css.box}>
      <Switch></Switch>
      <p>{children}</p>
    </div>
  );
}
