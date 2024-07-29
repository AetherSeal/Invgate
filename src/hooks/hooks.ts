import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../contexts/generalContext";
import { ListContext } from "../contexts/listContext";
import { PopupContext } from "../contexts/popupContext";

export function useGeneralContext() {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error(
      "useGeneralContext must be used within GeneralContextProvider"
    );
  }
  return context;
}
export function useListContext() {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within ListContextProvider");
  }
  return context;
}
export function usePopupContext() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopupContext must be used within PopupContextProvider");
  }
  return context;
}
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(initialValue)
    );
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
export const useRandomList = () => {
  const [randomList, setRandomList] = useState([]);
  useEffect(() => {
    const todolist = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("HTTP error! status: " + response.status);
        }
        const data = await response.json();
        setRandomList(data);
      } catch (error) {
        console.error(error);
      }
    };
    todolist();
  }, []);
  return randomList;
};
