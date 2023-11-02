import { stateFactory } from "./factory";

export const useFullScreenStore = stateFactory(
  {
    isFull: false,
  },
  (set) => ({
    setIsFull: (isFull: boolean) => set({ isFull }),
  })
);
export const useVideoIndexStore = stateFactory(
  {
    index: 0,
  },
  (set) => ({
    setIndex: (index: number) => {
      //@ts-ignore
      set((state) => {
        state.index = index;
      });
    },
  })
);
export enum modelType {
  DEFAULT = "default",
  UPLOAD = "upload",
}
export const useModelStore = stateFactory(
  { model: modelType.DEFAULT },
  (set) => ({
    setModel: (model: modelType) => set({ model }),
  })
);
