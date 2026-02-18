import { useMemo, useState } from "react";

export default function UseMemo() {
    const [number,setNumber] = useState<number>(0);
    const [count,setCount] = useState<number>(0)
    const isNumberEven = useMemo(() => {
            let i= 0
            while (i<100_000_000){
                i++
            }
    return number % 2 === 0;
  },[number]);

  return <div>
    <h1>UseMemo</h1>
    <p>{number}</p>
        <p>{isNumberEven}</p>
        <button onClick={()=> setNumber(number+1)}>increment</button>
            <hr />
    <p>{count}</p>
    <button onClick={()=> setCount(count+1)}>count increment</button>
    </div>;


}
