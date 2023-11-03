
interface registerDataType{
    PhoneNumber: string,
    Passwd: string,
    name: string,
    avatar?: string
}
interface loginDataType{
    PhoneNumber:string,
    passwd:string,
}
interface registerResponse {
    Code: string;
    Msg: string;
    Token: string;
}
interface loginResponse {
    Code: string;
    Msg: string;
}
