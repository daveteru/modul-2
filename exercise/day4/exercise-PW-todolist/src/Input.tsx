interface Props{
  text : string;
  done : boolean;
}

export default function Input({text, done}:Props) {
  return <div className="border-b-1 border-b-gray-300 flex items-center h-[70px] w-full">
    <input type="checkbox" className="h-[20px] w-[40px]"></input><span>{text}</span>
  </div>;
}
