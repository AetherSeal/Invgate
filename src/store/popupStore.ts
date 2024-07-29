import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TPopupStore = {
  isOpen: boolean;
  message: string;
  currentTodoId: number | null;
  toggleIsOpen: () => void;
  changeMessage: (message: string) => void;
  changeCurrentTodoId: (currentTodoId: number) => void;
};

export const usePopupStore = create<TPopupStore>()(
  persist(
    (set) => ({
      isOpen: false,
      message: "",
      currentTodoId: null,
      toggleIsOpen: () => {
        set((state: TPopupStore) => ({ isOpen: !state.isOpen }));
      },
      changeMessage: (message: string) => {
        set(() => ({ message }));
      },
      changeCurrentTodoId: (currentTodoId: number) => {
        set(() => ({ currentTodoId }));
      },
    }),
    {
      name: "invgate-popup",
    }
  )
);
