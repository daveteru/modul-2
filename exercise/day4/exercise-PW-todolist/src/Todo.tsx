import Todoinput from "./Todoinput";

export default function Todo() {
  return (
    <div className="h-[1100px] w-[540px] rounded-4xl gap-[24px] flex flex-col text-center">
      <div className="justify-between flex align-center">
        <h1 className="text-white text-[40px] tracking-wider font-bold">TO DO</h1>
        <img src="../img/Combined Shape.svg"></img>
      </div>
      <div className="h-[64px] mt-[16px] bg-white w-full rounded-md flex items-center overflow-hidden">
        <Todoinput/>
      </div>
      <div className="h-[440px] mb-[25px] bg-white w-full rounded-md shadow-xl">
        <Todoinput/>
        <Todoinput/>
        <Todoinput/>
        <Todoinput/>
        <Todoinput/>
      </div>
      <span className="text-gray-400">Drag and drop to reorder the list.</span>
    </div>
  );
}
