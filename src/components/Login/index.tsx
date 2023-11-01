import React, { memo, useState } from "react";
import type { FC, ReactNode, HTMLAttributes } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import welcome from "~assets/welcome.png";
import Input from "antd/es/input/Input";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Checkbox, ConfigProvider } from "antd";
import { lightColors } from "~/common/color";

interface MyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  hide: () => void;
}

type UserInputs = {
  userName: string;
  password: string;
};

const Login: FC<MyProps> = memo(({ hide }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<UserInputs>({
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<UserInputs> = (data) => {
    if (!checked) {
      toast.error("请勾选下方同意协议!");
      return;
    }
    if (!data.userName || !data.password) {
      toast.error("请填写完整信息!");
      return;
    }
    //  等待后端登录接口
    setTimeout(() => {
      console.log(data);
      toast.success("登录成功!");
      hide();
    }, 2000);
  };
  return (
    <div className="flex flrex-row w-[25rem] h-[25rem]">
      <div className="flex flex-1 flex-col px-5 gap-5 bg-[#ffffff] rounded-[8px] rounded-l-3xl">
        <CloseOutlined className="absolute right-5 top-5" onClick={hide} />
        <p className="font-bold text-xl mt-5">登录</p>
        <p className="text-xs -mt-4 mb-5">登录收藏更多精彩视频</p>
        <ConfigProvider
          theme={{
            token: {},
          }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="昵称"
                  className="mb-4"
                  {...field}
                />
              )}
            />
            {/*  能用但 IDE 爆红     */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password
                  placeholder="密码"
                  size="large"
                  iconRender={(visible: boolean) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  prefix={<LockOutlined />}
                  {...field}
                />
              )}
            />
            <div className="flex flex-row justify-between items-center">
              <Checkbox
                className="text-xs"
                onChange={(e) => setChecked(e.target.checked)}
              >
                点击即同意《生菜协议》
              </Checkbox>
              <div>
                <p 
                onClick={()=>{
                    
                }}
                className="text-xs text-blue-400 cursor-pointer hover:underline">
                    点我注册
                </p>
              </div>
            </div>

            <button
              className="bg-blue-400 text-white w-full flex justify-center rounded-md mt-2 cursor-pointer focus:outline-none"
              type="submit"
            >
              登录
            </button>
          </form>
        </ConfigProvider>
      </div>
    </div>
  );
});

export default Login;
