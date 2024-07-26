import { TTodoItem } from "../../types/general";
type TTodoItemProps = {
  item: TTodoItem;
  onCheck: () => void;
};
export default function TodoItem({ item, onCheck, onDelete }: TTodoItemProps) {
  return (
    <div>
      <div key={item.id}>
        <p>{item.description}</p>
        <p>{item.isDone ? "Done" : "Not Done"}</p>
        <label htmlFor={item.id.toString()}>{item.title}</label>
        <input
          type="checkbox"
          name={item.id.toString()}
          id={item.id.toString()}
          checked={item.isDone}
          onChange={onCheck}
        />
        <button onClick={onDelete}>❌</button>
      </div>
    </div>
  );
}
