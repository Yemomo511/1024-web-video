import  { memo }  from "react";
import type { FC,ReactNode,HTMLAttributes } from "react";

interface MyProps extends HTMLAttributes<HTMLElement>{
    children? : ReactNode
}
const Home: FC<MyProps> = memo(() => {
    return(
        <div>Home</div>
    )
})

export default Home
