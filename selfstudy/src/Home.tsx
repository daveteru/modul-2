import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center ">
      <div className="h-100 w-75 bg-gray-50 rounded-xl shadow-xl flex justify-center items-center">
        <div className="flex  flex-col justify-center items-center gap-3">
          <h1 className="text-2xl">Counter</h1>
          <h1 className="text-4xl">{counter}</h1>
          <div className="flex gap-2">
            <button
              className="h-fit w-fit p-2 bg-amber-300 rounded-xl"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              {" "}
              Increment{" "}
            </button>
            <button
              className="h-fit w-fit p-2 bg-amber-300 rounded-xl"
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              {" "}
              Decrement{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
