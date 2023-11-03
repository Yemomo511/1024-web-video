import { memo }  from "react";
import type { FC,ReactNode, HTMLAttributes } from "react";
import Recommend from "~pages/Recommend/Recommend.tsx";
import {videoType} from "~types/type";
import {nanoid} from "nanoid";
import monkey from "~assets/poster/Monkey.jpg";
import cuteCat from "~assets/video/cute-cat.mp4.mp4";
import music from "~assets/video/music-hot.mp4";
import spiderMan from '~assets/video/spide-man.mp4'

interface MyProps extends HTMLAttributes<HTMLElement>{
    children? : ReactNode
}

const videoData: videoType[] = [
    {
        id: nanoid(),
        poster: monkey,
        url: cuteCat,
        name: "可爱猫猫",
        userId: "1",
        stared: 12,
        liked: 12,
        comments: [],
    },
    {
        id: nanoid(),
        poster: monkey,
        url: music,
        name: "赏乐~",
        userId: "1",
        stared: 12,
        liked: 12,
        comments: [],
    },
    {
        id: nanoid(),
        poster: monkey,
        url: spiderMan,
        name: "超燃混剪",
        userId: "1",
        stared: 12,
        liked: 12,
        comments: [],
    }
];

const Hot: FC<MyProps> = memo(() => {
    return(
        <Recommend />
    )
})

export default Hot
