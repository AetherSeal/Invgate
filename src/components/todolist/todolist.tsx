import { useGeneralContext } from "../../hooks/hooks";
import Popup from "../popup/popup";
import TodoItem from "./todoitem";

export default function TodoList() {
  const { listOfTodo } = useGeneralContext();

  const renderItems = () => {
    return listOfTodo.map((item) => {
      return <TodoItem key={item.id} item={item} />;
    });
  };
  return (
    <>
      <Popup />
      <div className="space-y-2">{renderItems()}</div>
    </>
  );
}
