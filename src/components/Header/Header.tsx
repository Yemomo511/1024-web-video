import  { useCallback, useMemo, useRef} from "react";
import imageUrl from "~/common/image";
import css from "./index.module.less";
import Input, { InputRef } from "antd/es/input";
import ConfigProvider from "antd/es/config-provider";
import Icon from "~components/Icon/Icon";
import IconCard from "~components/IconCard/IconCard";
import poster from "~assets/poster/poster.jpg";
import { Avatar, Tooltip  } from "antd";
import { useModelStore, modelType } from "~/store/store";
import Notice from "~components/Notice/Notice";
import UserCard from "~components/UserCard/UserCard";
import {useLoginStore} from "~store/user.ts";
import { usePopup } from "~hooks/usePopup.tsx";
import Login from "~components/Login";


export default function Header() {
  console.log("Header")
  const inputRef = useRef<InputRef>(null);
  const setModel = useModelStore((state) => state.setModel);
  const { isLogin } = useLoginStore()
    const { popup, show, hide }= usePopup({
        initVisible: false,
        children:<Login hide={()=>hide()}/>,
        position:'center'
    })
  const SearchIcon = useCallback((onClick: () => void) => {
    return (
      <button className={css.iconBox} onClick={onClick}>
        <Icon src={imageUrl.header.search}></Icon>
        <div className={css.iconText}>搜索</div>
      </button>
    );
  }, []);
  const Search = useMemo(() => {
    return (
      <ConfigProvider
        theme={{
          components: {
            Input: {
              paddingInline: 20,
              hoverBorderColor: "#403C56",
              activeBorderColor: "#E2DEEF",
              colorBgContainer: "transparent",
              colorTextPlaceholder: "#565365",
              colorText: "white",
            },
          },
        }}
      >
        <Input
          ref={inputRef}
          className={css.input}
          placeholder="搜索看看🥬"
          suffix={SearchIcon(() => {
            if (inputRef.current) {
              inputRef.current.blur();
            }
          })}
        ></Input>
      </ConfigProvider>
    );
  }, []);
  const optionListComponent = useMemo(() => {
    return (
      <div className={css.optionBox}>
        <div className={css.optionIconBox}>
          <IconCard title={"更多"} icon={imageUrl.header.list} ></IconCard>
        </div>
        <Tooltip title={<Notice></Notice>} placement="bottom">
          <div className={css.optionIconBox}>
            <IconCard title={"消息"} icon={imageUrl.header.notice}></IconCard>
          </div>
        </Tooltip>

        <div
          className={css.optionIconBox}
          onClick={() => {
            setModel(modelType.UPLOAD);
          }}
        >
          <IconCard title={"投稿"} icon={imageUrl.header.passVideo}></IconCard>
        </div>
        <Tooltip
            title={
            isLogin?
            <UserCard userId="111"></UserCard>
            :<p>请先登录</p>}
            placement="bottom"
            className="cursor-pointer"
        >
            {isLogin
                ?( <Avatar src={poster} style={{ width: 40, height: 40}} /> )
                :( <><img src={ imageUrl.header.noLoginAvatar } className="w-8 h-8" alt="" onClick={show}/></>)
            }
        </Tooltip>
      </div>
    );
  }, []);
  return (
    <>
        <div className={css.box}>
            <div className={css.logoBox}>
                <img src={imageUrl.logo} className={css.logo} alt=""></img>
                <div className={css.logoText}>生菜视频</div>
            </div>
            {Search}
            {optionListComponent}
        </div>
        {popup}
    </>
  );
}
