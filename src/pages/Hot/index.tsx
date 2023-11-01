import { memo }  from "react";
import type { FC,ReactNode, HTMLAttributes } from "react";

interface MyProps extends HTMLAttributes<HTMLElement>{
    children? : ReactNode
}

const Hot: FC<MyProps> = memo(() => {
    return(
        <div>Hot</div>
    )
})

export default Hot
