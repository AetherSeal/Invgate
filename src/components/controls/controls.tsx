import { uniqueID } from "../../utils/helpers";

export default function Controls() {
  return (
    <div className=" border-b-2  border-b-gray-300">
      <a
        href={`${uniqueID()}`}
        className="text-center block m-4 mt-0 bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
      >
        New Task
      </a>
    </div>
  );
}
