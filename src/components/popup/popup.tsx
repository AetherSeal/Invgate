import { usePopupStore } from "../../store/popupStore";
import { useTodoStore } from "../../store/todoStore";

export default function Popup() {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const { message, isOpen, currentTodoId, toggleIsOpen } = usePopupStore();

  const renderPopup = () => {
    if (!isOpen) {
      return null;
    }
    return (
      <section
        className={`w-screen h-screen fixed bg-slate-800 top-0 left-0 z-50 m-0	flex justify-center items-center `}
      >
        <div className="bg-white rounded-md py-12 px-8 relative">
          <h1>{message}</h1>
          <div className="flex justify-center pt-6">
            <button
              onClick={() => {
                if (!currentTodoId) {
                  return;
                }
                deleteTodo(currentTodoId);
                toggleIsOpen();
              }}
              className={`bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white`}
            >
              ok
            </button>
            <button
              className="absolute top-2 right-2"
              onClick={() => {
                toggleIsOpen();
              }}
            >
              ❌
            </button>
          </div>
        </div>
      </section>
    );
  };
  return renderPopup();
}
