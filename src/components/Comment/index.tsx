import {memo} from "react";
import type {FC, ReactNode, HTMLAttributes} from "react";
import {animated, useSpring} from "@react-spring/web";
import {useShowCommentStore} from "~store/showComment.ts";
import {Card, Avatar} from "antd";
import {fakeComment} from "./fakeComment.ts";
import {commentType} from "~types/type";

interface MyProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode
}

const {Meta} = Card

const CommentItem = ({data}: { data: commentType }) => {
    return (
        <div className="w-full flex flex-col mt-5 overflow-auto">
            <Card>
                <Meta
                    avatar={<Avatar src={data.avatar}/>}
                    title={data.userId}
                    description={data.content}
                />
            </Card>
        </div>
    )
}

const Comment: FC<MyProps> = memo(() => {
    const {commentVisible} = useShowCommentStore()
    const sidebarAnimation = useSpring({
        transform: commentVisible ? 'translateX(0%)' : 'translateX(100%)'
    });
    return (
        <animated.div
            style={sidebarAnimation}
            className='h-full w-96 bg-[#00000050] flex flex-col rounded-r-3xl items-center '
        >
            <div className="flex border-solid border-b-2 border-red-600 text-white text-xl mt-2 font-bold">评论</div>
            <div className='mx-5'>
                <div className="text-white text-[12px] mr-auto ml-2 mt-2">全部评论(30条)</div>
                <div className="commentScroll h-[calc(100vh-156px)] overflow-y-auto mb-52">
                    {fakeComment.map(item => <CommentItem data={item}/>)}
                </div>
            </div>
        </animated.div>
    )
})

export default Comment
