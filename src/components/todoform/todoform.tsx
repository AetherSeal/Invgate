import { useState } from "react";
import { TTodoItem } from "../../types/general";
import { uniqueID } from "../../utils/helpers";

type TTodoFormProps = {
  setListOfTodo: React.Dispatch<React.SetStateAction<TTodoItem[]>>;
};

export default function TodoForm({ setListOfTodo }: TTodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setListOfTodo((prev: TTodoItem[]) => {
      return [
        ...prev,
        {
          id: uniqueID(),
          title: title,
          description: description,
          isDone: false,
        },
      ];
    });
  };
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleTitle}
      />
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={handleDescription}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
