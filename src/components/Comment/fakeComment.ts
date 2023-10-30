import {commentType} from "~common/type";

export const fakeComment : commentType[] = []

for (let i = 1; i <= 10; i++) {
    fakeComment.push({
        id: `comment${i}`,
        userId: `user${i}`,
        avatar: 'http://dummyimage.com/400×400',
        content: `这是数字${i}——这是数字${i}——这是数字${i}——这是数字${i}——这是数字${i}——这是数字${i}——这是数字${i}`,
    });
}

