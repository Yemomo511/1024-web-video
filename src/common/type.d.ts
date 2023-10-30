
export interface commentType{
    id:string,
    userId:string,
    content:string,
}
export interface videoType{
    url:string,
    poster:string,
    name:string,
    id:string,
    userId:string,
    stared:number,
    liked:number,
    comments:contentType[]
}
export interface userType{
    id:string,
    name:string,
    avatar:string,
    upOnVideo:videoType[],
    starVideo:videoType[],
    likeVideo:videoType[],
}

//定义module暴露
declare module '@type/videoData'{
    export = videoDataType;
}