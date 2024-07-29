import { useState } from "react";
import { uniqueID } from "../../utils/helpers";
import { MAX_CHAR } from "../../utils/constants";
import { useGeneralContext } from "../../hooks/hooks";

export default function TodoForm() {
  const { handleAddTodo } = useGeneralContext();
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.length) return;
    const newTodo = {
      id: uniqueID(),
      title: title,
      completed: false,
    };
    handleAddTodo(newTodo);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form className="flex flex-col pt-4" onSubmit={handleSubmit}>
      <label htmlFor="title" className="block ">
        <span className="block text-sm font-medium text-slate-700">Title</span>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitle}
          className="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
        />
        <span className="block text-xs font-medium  text-right text-red-600">
          {MAX_CHAR - title.length} char left
        </span>
      </label>

      <div className="mt-6">
        <button
          type="submit"
          disabled={!title.length}
          className={`bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white ${
            !title.length ? "disabled:hover:bg-red-500 disabled:bg-red-700" : ""
          }`}
        >
          Add 🫡{title.length}
        </button>
      </div>
    </form>
  );
}
