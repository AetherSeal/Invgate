import { useTodoStore } from "../../store/todoStore";
import { TTodoItem } from "../../types/general";
import Popup from "../popup/popup";
import TodoItem from "./todoitem";

export default function TodoList() {
  const { list, sort } = useTodoStore();

  const renderItems = () => {
    switch (sort) {
      case "checked":
        return list
          .filter((item: TTodoItem) => item.completed)
          .map((item: TTodoItem) => {
            return <TodoItem key={item.id} item={item} />;
          });
      case "unchecked":
        return list
          .filter((item: TTodoItem) => !item.completed)
          .map((item: TTodoItem) => {
            return <TodoItem key={item.id} item={item} />;
          });
      default:
        return list.map((item: TTodoItem) => {
          return <TodoItem key={item.id} item={item} />;
        });
    }
  };
  return (
    <>
      <Popup />
      <div className="space-y-2">{renderItems()}</div>
    </>
  );
}
