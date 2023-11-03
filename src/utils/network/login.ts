import axios from "axios"

class LoginApi{
    private http = axios.create({
        baseURL: "",
    })
    private url = {
        register: "/user",
        login: "/user/login"
    }
    //avatar没设置后端定义吧
    fetchRegister = async ({Avatar="",...data}:registerDataType)=>{
        const res = await this.http.post<registerResponse>(this.url.register, {...data,Avatar})
        return res
    }
    fetchLogin = async (data:loginDataType)=>{
        const res = await this.http.post<loginResponse>(this.url.login, data)
        return res
    }
}

const loginApi = new LoginApi();
export default loginApi;
