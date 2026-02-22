import { useState } from "react";

interface Props {
  todo: { id: number; text: string; done: boolean };
  todos: {
    id: number;
    text: string;
    done: boolean;
  }[];
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        text: string;
        done: boolean;
      }[]
    >
  >;
}

export default function Input({ todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState(todo.text);
  const onCheck = (value: boolean) => {
    const temp = [...todos];
    const to = temp.find((t) => t.id === todo.id);
    if (!to) return;
    to.done = value;
    setTodos(temp);
  };
  const saveEdit = ()=>{
    const temp = [...todos];
    const to = temp.find((t) => t.id === todo.id);
    if (!to) return;
    to.text = editText;
    setTodos(temp);
    setEdit(false)
  }

  return (
    <div className="border-b-1 border-b-gray-300 flex items-center h-[70px] w-full pr-4">
      <input
        type="checkbox"
        className="h-[20px] w-[40px]"
        checked={todo.done}
        onChange={(e) => {
          onCheck(e.target.checked);
        }}
      ></input>
      { edit? <input 
      className="bg-amber-200 p-1 w-full"
      value={editText}
      onChange={(e)=>{
        setEditText(e.target.value)
      }}
      onKeyDown={(e) => {
          if (e.key === "Enter") saveEdit();
        }}
      /> : (<span
        className={
          todo.done
            ? "transition-normal line-through text-gray-300"
            : "text-black"
        }
        onDoubleClick={() => {
          setEdit(true);
        }}
      >
        {todo.text}
      </span>) }
      
    </div>
  );
}
