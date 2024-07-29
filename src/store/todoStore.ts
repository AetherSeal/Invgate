import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TTodoItem } from "../types/general";
import { urlId } from "../utils/helpers";

export type TTodoState = {
  listId: number;
  list: TTodoItem[];
  sort: "all" | "checked" | "unchecked";
  sortBy: (sort: "all" | "checked" | "unchecked") => void;
  addTodo: (newTodo: TTodoItem) => void;
  deleteTodo: (id: number) => void;
  checkTodo: (id: number) => void;
};

const listId = urlId();

export const useTodoStore = create<TTodoState>()(
  persist(
    (set) => ({
      listId: listId,
      list: [],
      sort: "all",
      sortBy: (sort: "all" | "checked" | "unchecked") => {
        set(() => {
          return { sort: sort };
        });
      },
      addTodo: (newTodo: TTodoItem) => {
        set((state: TTodoState) => {
          return { list: [...state.list, newTodo] };
        });
      },
      deleteTodo: (id: number) => {
        set((state: TTodoState) => ({
          list: state.list.filter((todo: TTodoItem) => todo.id !== id),
        }));
      },
      checkTodo: (id: number) => {
        set((state: TTodoState) => {
          const newList = state.list.map((checkItem: TTodoItem) => {
            if (checkItem.id === id) {
              checkItem.completed = !checkItem.completed;
            }
            return checkItem;
          });
          return {
            list: newList,
          };
        });
      },
    }),
    {
      name: `invgate-todo-${listId}`,
    }
  )
);
