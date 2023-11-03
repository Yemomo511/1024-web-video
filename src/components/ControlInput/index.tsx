import {loginType, registerType} from "~components/Login/config.ts";
import {Control, Controller} from "react-hook-form";
import {FC} from "react";
import Input from "antd/es/input";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

interface InputsProps {
    item: loginType | registerType
    control: Control<loginDataType | registerDataType, any>
}

const ControlInput: FC<InputsProps> = ({item, control}) => {
    return (
        <Controller
            key={item.name}
            name={item.name}
            control={control}
            render={({field}) => (
                item.name === 'Passwd' ? <Input.Password
                    size="large"
                    prefix={<item.prefix/>}
                    placeholder={item.placeholder}
                    iconRender={(visible: boolean) =>
                        visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>
                    }
                    {...field}
                /> : <Input
                    size="large"
                    prefix={<item.prefix/>}
                    placeholder={item.placeholder}
                    className={item.styles}
                    {...field}
                />

            )}
        />
    )
}
export default ControlInput
