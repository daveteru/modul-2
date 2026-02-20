import type { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  addTodo: ()=>void;
}

export default function Todoinput({ value, setValue ,addTodo }: Props) {

  function clear() {
    setValue("");
  }

  return <div className="border-b-1 border-b-gray-300 flex items-center h-[70px] w-full">
    <input type="checkbox" className="h-[20px] w-[40px] rounded-full"></input>
    <input
      type="text"
      className={`h-full w-full ${value ? "text-black" : "text-gray-400"}`}
      placeholder="Create a new to do..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e)=> { if (e.key === "Enter") addTodo()}}
    />
  </div>;
}
