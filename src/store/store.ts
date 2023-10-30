import { create } from "zustand";
import { stateFactory } from "./factory";

interface fullScreenType {
  isFull: boolean;
  setIsFull: (isFull: boolean) => void;
}
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
