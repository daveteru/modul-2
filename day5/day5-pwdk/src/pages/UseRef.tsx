import { useRef } from "react";

export default function UseRef() {
const inputRef = useRef<HTMLInputElement>(null);

const handleSubmit = () => {
    alert(inputRef.current?.value)
}


  return <div>
    <h1>useRef</h1>
    <hr />
    <input type="text" ref={inputRef} />
    <button onClick={handleSubmit}>submit</button>
  </div>;
}
