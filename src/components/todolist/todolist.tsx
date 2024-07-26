import { TTodoItem } from "../../types/general";
import TodoItem from "./todoitem";
type TTodoListProps = {
  list: TTodoItem[];
  setListOfTodo: React.Dispatch<React.SetStateAction<TTodoItem[]>>;
};
export default function TodoList({ list, setListOfTodo }: TTodoListProps) {
  const handleCheck = (itemId: number) => {
    const newList = list.map((checkItem) => {
      if (checkItem.id === itemId) {
        checkItem.isDone = !checkItem.isDone;
      }
      return checkItem;
    });
    setListOfTodo(newList);
  };
  const handleDelete = (itemId: number) => {
    const newList = list.filter((checkItem) => {
      return checkItem.id !== itemId;
    });
    setListOfTodo(newList);
  };
  const renderItems = () => {
    return list.map((item) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          onCheck={() => {
            handleCheck(item.id);
          }}
          onDelete={() => {
            handleDelete(item.id);
          }}
        />
      );
    });
  };
  return <div>{renderItems()}</div>;
}
