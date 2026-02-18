import { useEffect, useState } from "react";

export default function UseEffect() {
    const [count,setCount] = useState<number>(0);
    const [number,setNumber] = useState<number>(0)
    // mode 1: bakalan run setiap ada perubahan pada state atau props
    useEffect(()=>{
        console.log("use effect mode 1")
    })
    // mode 2 :bakalan run sekali saja saat react first render
       useEffect(()=>{
        console.log("use effect mode 2")
    }, [])
    // mode 3 :sama spt mode 2 , jika ada perubahan di dependency akan jalan ulang
     useEffect(()=>{
        console.log("use effect mode 3")
    }, [number])
    return <div>
        <h1>Use Effect</h1>
        <p>{count}</p>
        <button onClick={()=> setCount(count+1)}>count</button>
        <button onClick={()=> setNumber(number+1)}>number</button>
    </div>;
}
