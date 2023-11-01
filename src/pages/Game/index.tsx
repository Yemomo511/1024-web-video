import { memo }  from "react";
import type { FC,ReactNode, HTMLAttributes } from "react";

interface MyProps extends HTMLAttributes<HTMLElement>{
    children? : ReactNode
}

const Game: FC<MyProps> = memo(() => {
    return(
        <div>Game</div>
    )
})

export default Game
