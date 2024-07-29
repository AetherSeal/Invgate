import { createContext } from "react";
import { TTodoItem } from "../types/general";
import { useLocalStorage } from "../hooks/hooks";
import { urlId } from "../utils/helpers";

type TChildren = { children: React.ReactNode };

type TListContextProps = {
  currentList: TTodoItem[];
  setCurrentList: React.Dispatch<React.SetStateAction<TTodoItem[]>>;
};
export const ListContext = createContext<TListContextProps | null>(null);

export default function ListContextProvider({ children }: TChildren) {
  const id = urlId();
  const [currentList, setCurrentList] = useLocalStorage<TTodoItem[]>(
    `todoList-${id}`,
    []
  );

  return (
    <ListContext.Provider
      value={{
        currentList,
        setCurrentList: setCurrentList as React.Dispatch<
          React.SetStateAction<TTodoItem[]>
        >,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
