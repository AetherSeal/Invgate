import { usePopupStore } from "../../store/popupStore";
import { useTodoStore } from "../../store/todoStore";
import { TTodoItem } from "../../types/general";
type TTodoItemProps = {
  item: TTodoItem;
};
export default function TodoItem({ item }: TTodoItemProps) {
  const checkTodo = useTodoStore((state) => state.checkTodo);
  const { toggleIsOpen, changeMessage, changeCurrentTodoId } = usePopupStore();

  const onCheck = () => {
    checkTodo(item.id);
  };

  return (
    <div className="group block max-w-xs mx-auto rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3  hover:bg-slate-100">
      <div className="grid grid-cols-[1fr_24px] items-center gap-6">
        <label
          htmlFor={item.id.toString()}
          className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2"
        >
          <input
            type="checkbox"
            name={item.id.toString()}
            id={item.id.toString()}
            checked={item.completed}
            onChange={onCheck}
            className="peer size-3.5 appearance-none rounded-sm border checked:appearance-auto"
          />
          <span className="select-none text-slate-700 peer-checked:text-slate-400 peer-checked:line-through">
            {item.title}
          </span>
        </label>
        <button
          className="hover:bg-red-50 hover:text-red-500 peer-has-[:checked]:hidden"
          onClick={() => {
            toggleIsOpen();
            changeCurrentTodoId(item.id);
            changeMessage(
              `Are you sure you want to delete this item? [${item.title}]`
            );
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
}
