import { useCounter } from "../stores/UseCounter";
import { Link } from "react-router";

export default function Counter1(){
    const { count, decrement, increment} = useCounter();

    return(
        <div>
            <h1>Counter1</h1>
            <Link to="/counter-2">Counter 2</Link>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}