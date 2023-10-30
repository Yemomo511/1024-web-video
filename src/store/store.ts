import {create} from "zustand"
import { stateFactory } from "./factory"
interface fullScreenType{
    isFull:boolean,
    setIsFull:(isFull:boolean)=>void,
}
const useFullScreenStore = stateFactory({
    isFull:false
},(set)=>({
    setIsFull:(isFull:boolean)=>set({isFull})
}))

export {useFullScreenStore}