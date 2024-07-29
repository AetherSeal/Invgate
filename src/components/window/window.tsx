import TodoList from "../todolist/todolist";
import TodoForm from "../todoform/todoform";

import { urlId } from "../../utils/helpers";
import Controls from "../controls/controls";
import { useTodoStore } from "../../store/todoStore";

export default function Window() {
  const sortBy = useTodoStore((state) => state.sortBy);

  const id = urlId();
  return (
    <section className="flex-grow">
      <div className="bg-white m-4 p-4  rounded-lg shadow-lg">
        <h1 className="w-full font-semibold text-2xl">
          List ID: <span className="text-sky-500">{`${id}`}</span>
        </h1>
        <div className="flex ">
          <div className="w-3/4 m-4 p-4 ">
            <div className="m-4 flex justify-between">
              <button
                className=" py-2 px-5 bg-blue-400 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-75"
                onClick={() => {
                  sortBy("all");
                }}
              >
                All🤔
              </button>
              <button
                className=" py-2 px-5 bg-blue-400 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-75"
                onClick={() => {
                  sortBy("checked");
                }}
              >
                checked🤩
              </button>
              <button
                className=" py-2 px-5 bg-blue-400 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-75"
                onClick={() => {
                  sortBy("unchecked");
                }}
              >
                unchecked😫
              </button>
            </div>
            <TodoList />
          </div>
          <div className="w-1/4 m-4 p-4 border-l-2  border-l-gray-300 ">
            <Controls />
            <TodoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
