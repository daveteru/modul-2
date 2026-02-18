import { memo, useCallback, useState } from "react";

export default function UseCallback() {
  const [count,setCount] = useState<number>(0)
  const [theme, setTheme] = useState<string>("dark")
  
  const increment = useCallback(()=>{
    setCount(count+1)
  },[count])

  const toggleTheme = () =>{
    setTheme(theme === "dark"? "light" : "dark")
  }

    return (
    <div>
      <h1>UseCallBack</h1>
      <p>{count}</p>
      <ComponentChildren increment={increment}/>

      <hr/ >
      <p>{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
     </div>
  );
}

interface ComponenChildrenProps{
    increment: ()=>void;
}

const ComponentChildren = memo((props: ComponenChildrenProps) =>{
    console.log("component child render")
    return (
        <div>
            <button onClick={props.increment}>increment</button>
        </div>
    )
})