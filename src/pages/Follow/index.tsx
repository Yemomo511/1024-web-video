import { memo }  from "react";
import type { FC,ReactNode, HTMLAttributes } from "react";

interface MyProps extends HTMLAttributes<HTMLElement>{
    children? : ReactNode
}

const Follow: FC<MyProps> = memo(() => {
    return(
        <div>Follow</div>
    )
})

export default Follow
