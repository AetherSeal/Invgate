export type TTodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

export type TTodoList = {
  id: number;
  todoList: TTodoItem[];
};

export type TGeneralContext = {
  handleAddTodo: (newTodo: TTodoItem) => void;
  handleDeleteTodo: (id: number) => void;
  handleCheckTodo: (id: number) => void;
  handleSortUnchecked: () => void;
  handleSortChecked: () => void;
  handleSortAll: () => void;
  listOfTodo: TTodoItem[];
};

export type TChildren = {
  children: React.ReactNode;
};
