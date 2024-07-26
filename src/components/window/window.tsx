import TodoList from "../todolist/todolist";
import TodoForm from "../todoform/todoform";
import { useState } from "react";
import { TTodoItem } from "../../types/general";

export default function Window() {
  const [listOfTodo, setListOfTodo] = useState<TTodoItem[]>([]);
  const [sortBy, setSortBy] = useState("all");

  const handleListBySort = () => {
    if (sortBy === "all") return listOfTodo;
    if (sortBy === "checked") return listOfTodo.filter((todo) => todo.isDone);
    if (sortBy === "unchecked")
      return listOfTodo.filter((todo) => !todo.isDone);
  };
  return (
    <main>
      <section>
        <button onClick={() => setSortBy("all")}>All🔃</button>
        <button onClick={() => setSortBy("checked")}>checked✅</button>
        <button onClick={() => setSortBy("unchecked")}>unchecked❎</button>
        <TodoList list={handleListBySort()} setListOfTodo={setListOfTodo} />
      </section>
      <section>
        <TodoForm setListOfTodo={setListOfTodo} />
      </section>
    </main>
  );
}
