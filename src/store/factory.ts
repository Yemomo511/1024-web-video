import { StoreApi, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const stateFactory = <T extends object, K extends object>(
  state: T,
  event: (set: StoreApi<T>["setState"]) => K
) => {
  return create(
    immer<T & K>((set) => ({
      ...state,
      //@ts-ignore
      ...event(set),
    }))
  );
};
//持续化存储的工厂
export const persistFactory = <T extends object, K extends object>(
  name: string,
  state: T,
  event: (set: StoreApi<T>["setState"]) => K
) => {
  const immerState = immer<T & K>((set) => ({
    ...state,
    //@ts-ignore
    ...event(set),
  }));
  return persist(create(immerState), {
    name,
    storage: createJSONStorage(() => localStorage),
  });
};
