import { memo }  from "react";
import type { FC,ReactNode,HTMLAttributes } from "react";

interface MyProps extends HTMLAttributes<HTMLElement>{
    children? : ReactNode
}
const My: FC<MyProps> = memo(() => {
    return(
        <div>My</div>
    )
})

export default My
