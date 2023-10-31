import {stateFactory} from "./factory.ts";

interface loginState {
    isLogin: boolean
}
interface SetLoginState {
    setIsLogin: (isLogin: boolean) => void
}
export const useLoginStore = stateFactory<loginState,SetLoginState>({isLogin:false},( set ) => ({
    setIsLogin: ( isLogin: boolean ) => set({ isLogin })
}))
