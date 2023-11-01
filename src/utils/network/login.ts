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
    fetchRegister = async ({avatar="",...data}:registerDataType)=>{
        const res = await this.http.post(this.url.register, {...data,avatar})
        return res
    }
    fetchLogin = async (data:loginDataType)=>{
        const res = await this.http.post(this.url.login, data)
        return res
    }
}

const loginApi = new LoginApi();
export default loginApi;