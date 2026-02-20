import { useState } from "react";
import Todoinput from "./Todoinput";
import Input from "./Input";

export default function Todo() {
  const [todos, setTodos] = useState<{id:number , text:string , done:boolean}[]>([]);
  const [value, setValue] = useState("");

  function addTodo(){
    if ( value.trim() === "") return;
    else setTodos([...todos,{id: todos.length, text:value , done: false}]);
    setValue("");
  }

  return (
    <div className="h-[1100px] w-[540px] rounded-4xl gap-[24px] flex flex-col text-center">
      <div className="justify-between flex align-center">
        <h1 className="text-white text-[40px] tracking-wider font-bold">TO DO</h1>
        <img src="../img/Combined Shape.svg"></img>
      </div>
      <div className="h-[64px] mt-[16px] bg-white w-full rounded-md flex items-center overflow-hidden">
        <Todoinput value={value} setValue={setValue} addTodo={addTodo}/>
      </div>
      <div className="h-[440px] mb-[25px] bg-white w-full rounded-md shadow-xl overflow-hidden">
       <div className="h-[89%] w-full over overflow-y-scroll"> {todos.map((todo) => (<Input key={todo.id} text={todo.text} done={todo.done}/>))}</div>
        <div className=" w-full h-[20%] mt-2" >Filter & Sort | Search | Edit</div>
      </div>
      <span className="text-gray-400">Drag and drop to reorder the list.</span>
    </div>
  );
}
