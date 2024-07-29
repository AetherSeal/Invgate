import { createContext, useState } from "react";

type TChildren = { children: React.ReactNode };

type TPopupContextProps = {
  isOpen: boolean;
  message: string;
  currentId: number | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleCurrentId: (id: number) => void;
};

export const PopupContext = createContext<TPopupContextProps | null>(null);

export default function PopupContextProvider({ children }: TChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [currentId, setCurrentId] = useState<number | null>(null);
  const handleCurrentId = (id: number) => {
    setCurrentId(id);
  };
  return (
    <PopupContext.Provider
      value={{
        isOpen,
        message,
        currentId,
        setIsOpen,
        setMessage,
        handleCurrentId,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
