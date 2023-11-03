import {memo, useState} from "react";
import type {FC, ReactNode, HTMLAttributes} from "react";
import { SubmitHandler, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {CloseOutlined,} from "@ant-design/icons";
import {Checkbox, ConfigProvider} from "antd";
import loginApi from "~/utils/network/login";
import { config } from './config.ts'
import {useLoginStore} from "~store/user.ts";
import ControlInput from "~components/ControlInput";


interface MyProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    hide: () => void;
}


const Login: FC<MyProps> = memo(({hide}) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [loginState, setLoginState] = useState<'register' | 'login'>('login')
    const {handleSubmit, control} = useForm<loginDataType | registerDataType>({
        defaultValues: {
            PhoneNumber: '',
            Passwd: '',
            Name: ''
        }
    });
    const { setIsLogin } = useLoginStore()
    const onSubmit: SubmitHandler<loginDataType | registerDataType> = (data) => {
        const { Name,...loginData} = data as registerDataType
        const flag = loginState === 'login'
            ? !data.PhoneNumber.trim() || !data.Passwd.trim()
            : !data.PhoneNumber.trim() || !data.Passwd.trim() || !(data as registerDataType).Name.trim()
        if (flag) {
            toast.error("请填写完整信息!");
            return;
        }
        if (!checked) {
            toast.error("请勾选下方同意协议!");
            return;
        }
        if (loginState === 'login'){
            toast.promise(loginApi.fetchLogin(loginData), {
                loading: "登录中...",
                success: (data) => {
                    //一些其他处理
                    setIsLogin(true)
                    return "登录成功"
                },
                error: (err) => "登录失败"
            })
        }else {
            toast.promise(loginApi.fetchRegister(data as registerDataType), {
                loading: "注册中...",
                success: (data) => {
                    //一些其他处理
                    setLoginState('login')
                    return "注册成功"
                },
                error: (err) => "注册失败"
            })
        }
        // const fetchData: loginDataType = {
        //     PhoneNumber: "17773638721",
        //     Passwd: data.Passwd,
        // }
    }
    return (
        <div className="flex flrex-row w-[25rem] mb-10">
            <div className="flex flex-1 flex-col px-5 gap-5 bg-[#ffffff] rounded-[8px] rounded-l-3xl">
                <CloseOutlined className="absolute right-5 top-5" onClick={hide}/>
                <p className="font-bold text-xl mt-5">登录</p>
                <p className="text-xs -mt-4 mb-3">登录收藏更多精彩视频</p>
                <ConfigProvider
                    theme={{
                        token: {},
                        components: {
                            Input: {
                                activeBg: "none",
                            }
                        }
                    }
                    }
                >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-5"
                    >
                        {
                            loginState === 'login' ? (
                                config.login.map(item => {
                                    return <ControlInput item={item} control={control} key={item.name}/>
                                })
                            ) : (
                                config.register.map(item => {
                                    return <ControlInput item={item} control={control} key={item.name}/>
                                })
                            )
                        }
                        {loginState==='register' && <p className="text-xs">
                            密码规则: 至少包含一个字母(大小写不限)至少包含一个数字,至少包含一个特殊字符(如 @、$、!、%、*、#、? 或 &),
                            包含大小写字母数字和特殊字符中的任意字符,长度至少为 8。
                        </p>}
                        <div className="flex flex-row justify-between items-center">
                            <Checkbox
                                className="text-xs"
                                onChange={(e) => setChecked(e.target.checked)}
                            >
                                点击即同意《生菜协议》
                            </Checkbox>
                            <div>
                                <p
                                    onClick={() => setLoginState(prevState=> prevState === 'login'? 'register' :'login')}
                                    className="text-xs text-blue-400 cursor-pointer hover:underline">
                                    {loginState === 'login' ? '没有账号？点击注册' : '已有账号？点击登录'}
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

// const onSubmit: SubmitHandler<loginDataType | registerDataType> = (data) => {
//   if (!data.PhoneNumber.trim() || !data.passwd.trim()) {
//     toast.error("请填写完整信息!");
//     return;
//   }
//   if (!checked) {
//     toast.error("请勾选下方同意协议!");
//     return;
//   }
//   const fetchData: loginDataType={
//       PhoneNumber:"17773638721",
//       passwd:data.passwd,
//   }
//   //  等待后端登录接口
//   toast.promise(loginApi.fetchLogin(fetchData),{
//       loading:"登录中...",
//       success:(data)=>{
//         //一些其他处理
//         return "登录成功"
//       },
//       error:(err)=>"登录失败"
//   })
// };
