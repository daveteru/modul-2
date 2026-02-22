import type { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  addTodo: () => void;
}

export default function Todoinput({ value, setValue, addTodo }: Props) {
  return (
    <div className="border-b border-b-gray-300 flex items-center h-[70px] w-full px-5">
      <input
        type="text"
        className={`h-full w-full  focus:outline-0`}
        placeholder="Search item here"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
      />
    </div>
  );
}
