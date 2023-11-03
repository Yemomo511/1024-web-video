import { memo }  from "react";
import type { FC,ReactNode, HTMLAttributes } from "react";
import {videoType} from "~types/type";
import {nanoid} from "nanoid";
import monkey from "~assets/poster/Monkey.jpg";
import game1 from "~assets/video/game1.mp4";
import game2 from "~assets/video/game2.mp4";
import game3 from "~assets/video/game3.mp4";

interface MyProps extends HTMLAttributes<HTMLElement>{
    children? : ReactNode
}

const videoData: videoType[] = [
    {
        id: nanoid(),
        poster: monkey,
        url: game1,
        name: "原神1",
        userId: "1",
        stared: 12,
        liked: 12,
        comments: [],
    },
    {
        id: nanoid(),
        poster: monkey,
        url: game2,
        name: "原神2",
        userId: "1",
        stared: 12,
        liked: 12,
        comments: [],
    },
    {
        id: nanoid(),
        poster: monkey,
        url: game3,
        name: "原神3",
        userId: "1",
        stared: 12,
        liked: 12,
        comments: [],
    }
];

const Game: FC<MyProps> = memo(() => {
    return(
        <div>Game</div>
    )
})

export default Game
