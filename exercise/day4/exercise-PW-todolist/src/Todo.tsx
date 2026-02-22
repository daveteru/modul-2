import { useState } from "react";
import Todoinput from "./Todoinput";
import Input from "./Input";

export default function Todo() {
  const [todos, setTodos] = useState<
    { id: number; text: string; done: boolean }[]
  >([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");

  const filteredToDo = todos.filter((todo) => {
    const matchFilter =
      filter === "active"
        ? todo.done === false
        : filter === "done"
          ? todo.done === true
          : true;

    const matchSearch = todo.text.toLowerCase().includes(value.toLowerCase());
    return matchFilter && matchSearch;
  });

  console.table(todos)

  function addTodo() {
    if (value.trim() === "") return;
    else setTodos([...todos, { id: todos.length, text: value, done: false }]);
    setValue("");
  }

  return (
    <div className="h-[1100px] w-[540px] rounded-4xl gap-[24px] flex flex-col text-center">
      <div className="justify-between flex items-center ">
        <h1 className="text-white text-[40px] tracking-wider font-bold">
          TO DO
        </h1>
        <img className="h-[40px] " src="../img/Combined Shape.svg"></img>
      </div>
      <div className="h-[64px] mt-[16px] bg-white w-full rounded-md flex items-center overflow-hidden">
        <Todoinput value={value} setValue={setValue} addTodo={addTodo} />
      </div>
      <div className="h-[440px] mb-[25px] bg-white w-full rounded-md shadow-xl flex justify-between flex-col">
        <div className="h-[80%] w-full over overflow-y-scroll">
          {filteredToDo.map((todo) => (
            <Input
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
        <div className=" w-full h-[20%] flex gap-2 justify-center items-center">
          <button
            onClick={() => setFilter("all")}
            className=" cursor-pointer w-fit h-fit p-2 rounded-3xl hover:text-gray-300 transition-colors"
          >
            <span className={`${filter === "all" ? "text-red-400" : "text-black"}`} >All</span>
          </button>
          |
          <button
            onClick={() => setFilter("active")}
            className=" cursor-pointer w-fit h-fit p-2 rounded-3xl  hover:text-gray-300 transition-colors"
          >
            <span className={`${filter === "active" ? "text-red-400" : "text-black"}`} >Active</span>
          </button>
          |
          <button
            onClick={() => setFilter("done")}
            className=" cursor-pointer w-fit h-fit p-2 rounded-3xl hover:text-gray-300 transition-colors"
          >
            <span className={`${filter === "done" ? "text-red-400" : "text-black"}`} >Done</span>
          </button>
        </div>
      </div>
    </div>
  );
}
