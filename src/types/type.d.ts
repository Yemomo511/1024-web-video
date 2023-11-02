export interface commentType{
    id:string,
    userId:string,
    avatar:string
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
    comments:commentType[]
}

export interface userType{
    id:string,
    name:string,
    avatar:string,
    upOnVideo:videoType[],
    starVideo:videoType[],
    likeVideo:videoType[],
}