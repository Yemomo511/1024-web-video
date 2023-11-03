
interface registerDataType{
    PhoneNumber: string,
    Passwd: string,
    Name: string,
    Avatar?: string
}
interface loginDataType{
    PhoneNumber:string,
    Passwd:string,
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
