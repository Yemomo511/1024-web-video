import React, {RefObject, useCallback, useEffect, useMemo, useRef, useState} from "react";
import imageUrl from "~/common/image";
import css from "./index.module.less";
import Input, { InputProps, InputRef } from "antd/es/input/Input";
import ConfigProvider from "antd/es/config-provider";
import Icon from "~components/Icon/Icon";
import IconCard from "~components/IconCard/IconCard";
import poster from "~assets/poster/poster.jpg";
import { Avatar, Popover, Tooltip, Checkbox  } from "antd";
import { useModelStore, modelType } from "~/store/store";
import Notice from "~components/Notice/Notice";
import UserCard from "~components/UserCard/UserCard";
import {useLoginStore} from "~store/user.ts";
import {usePopup} from "~hooks/usePopup.tsx";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import welcome from '~/assets/welcome.png'

export default function Header() {
  const inputRef = useRef<InputRef>(null);
  const setModel = useModelStore((state) => state.setModel);
  const { isLogin } = useLoginStore()

    const Login = () => {
      const [ checked, setChecked ] = useState<boolean>(false)
        useEffect(() => {
            console.log(checked);
        }, [checked]);
        return(
          <div className="flex flrex-row w-[50rem] h-[25rem]">
            <img src={welcome} alt='' className="w-[60%] h-full bg-contain"/>
              <div className="flex flex-1 flex-col ml-5 px-5 gap-5 bg-[#00bfff20] rounded-tr-[8px] rounded-l-3xl">
                  <p className="font-bold text-xl mt-5">登录</p>
                  <p className="text-xs -mt-4 mb-5">登录收藏更多精彩视频</p>
                  <Input
                      size="large"
                      prefix={<UserOutlined />}
                      placeholder="账号"
                      className="mb-4"
                  />
                  {/*  能用但 IDE 爆红     */}
                  <Input.Password
                      placeholder="密码"
                      size="large"
                      prefix={<LockOutlined />}
                      iconRender={(visible:boolean) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                  />
                  <Checkbox
                      className="text-xs"
                      onChange={(e)=>setChecked(e.target.checked)}
                  >
                      点击即同意《生菜协议》
                  </Checkbox>
                  <p className="bg-blue-400 text-white flex justify-center rounded-md mt-2 cursor-pointer">登录</p>
              </div>
          </div>
      )
    }

    const { popup, show }= usePopup({
        initVisible: false,
        children:<Login />,
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
          <IconCard title={"更多"} icon={imageUrl.header.list}></IconCard>
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
            title={<UserCard userId="111"></UserCard>}
            placement="bottom"
            open={isLogin}
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
                <img src={imageUrl.logo} className={css.logo}></img>
                <div className={css.logoText}>生菜视频</div>
            </div>
            {Search}
            {optionListComponent}
        </div>
        {popup}
    </>
  );
}
