import {create} from "zustand"
interface fullScreenType{
    isFull:boolean,
    setIsFull:(isFull:boolean)=>void,
}
const useFullScreenStore = create<fullScreenType>((set) => ({
    isFull:true,
    setIsFull: (isFull:boolean) => set({isFull}),
}))

export {useFullScreenStore}