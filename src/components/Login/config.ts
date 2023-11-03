import { ForwardRefExoticComponent } from "react";
import { LockOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { AntdIconProps } from "@ant-design/icons/es/components/AntdIcon";
interface loginConfig {
    login: loginType[]
    register: registerType[]
}
interface publicType  {
    placeholder: string
    prefix: ForwardRefExoticComponent<Pick<AntdIconProps,any>>
    styles?: string
}
export interface loginType extends publicType{
    name: "PhoneNumber" | "Passwd"
}
export interface registerType extends publicType{
    name: "PhoneNumber" | "Passwd" | 'Name'
}
const login: loginType[] = [
    {
        name:'PhoneNumber',
        placeholder:'手机号',
        styles:'mb-4',
        prefix: PhoneOutlined
    },
    {
        name: 'Passwd',
        placeholder: '密码',
        prefix: LockOutlined
    }
]
const register: registerType[] = [
    {
        name: 'Name',
        placeholder: '呢称',
        styles:'mb-5',
        prefix:UserOutlined
    },
    ...login
]
export const config: loginConfig = {
    login,
    register
}
