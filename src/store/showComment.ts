import {stateFactory} from "~store/factory.ts";

interface ShowCommentState {
    commentVisible: boolean

}
interface SetCommentState {
    setCommentVisible: (commentVisible: boolean) => void
}
export const useShowCommentStore = stateFactory<ShowCommentState,SetCommentState>({commentVisible: false}, (set) => ({
    setCommentVisible: (commentVisible: boolean) => set({commentVisible})
}))
