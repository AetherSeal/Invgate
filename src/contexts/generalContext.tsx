import { createContext, useMemo, useState } from "react";
import { TTodoItem } from "../types/general";
import { useListContext } from "../hooks/hooks";

type TChildren = { children: React.ReactNode };

type TGeneralContextProps = {
  handleAddTodo: (newTodo: TTodoItem) => void;
  handleDeleteTodo: (id: number) => void;
  handleCheckTodo: (id: number) => void;
  handleSortUnchecked: () => void;
  handleSortChecked: () => void;
  handleSortAll: () => void;
  listOfTodo: TTodoItem[];
};
export const GeneralContext = createContext<TGeneralContextProps | null>(null);

export default function GeneralContextProvider({ children }: TChildren) {
  const { currentList, setCurrentList } = useListContext();
  const [listOfTodo, setListOfTodo] = useState<TTodoItem[]>(currentList);
  const [sortBy, setSortBy] = useState<"all" | "checked" | "unchecked">("all");

  // list of todo
  const handleSortListOfTodo = useMemo((): TTodoItem[] => {
    if (sortBy === "checked")
      return listOfTodo.filter((todo) => todo.completed);
    if (sortBy === "unchecked")
      return listOfTodo.filter((todo) => !todo.completed);
    return listOfTodo;
  }, [listOfTodo, sortBy]);
  const handleAddTodo = (newTodo: TTodoItem) => {
    const newList = [...listOfTodo, newTodo];
    setListOfTodo(newList);
    setCurrentList(newList);
  };
  const handleDeleteTodo = (id: number) => {
    const newList = listOfTodo.filter((todo) => todo.id !== id);
    setListOfTodo(newList);
    setCurrentList(newList);
  };
  const handleCheckTodo = (id: number) => {
    const newList = listOfTodo.map((checkItem) => {
      if (checkItem.id === id) {
        checkItem.completed = !checkItem.completed;
      }
      return checkItem;
    });
    setListOfTodo(newList);
    setCurrentList(newList);
  };
  const handleSortAll = () => {
    setSortBy("all");
  };
  const handleSortChecked = () => {
    setSortBy("checked");
  };
  const handleSortUnchecked = () => {
    setSortBy("unchecked");
  };
  return (
    <GeneralContext.Provider
      value={{
        handleAddTodo,
        handleDeleteTodo,
        handleCheckTodo,
        handleSortAll,
        handleSortChecked,
        handleSortUnchecked,
        listOfTodo: handleSortListOfTodo,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
