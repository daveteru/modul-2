import { useCounter } from "../stores/UseCounter";
import { Link } from "react-router";

export default function Counter2(){
    const { count, decrement, increment} = useCounter();

    return(
        <div>
            <h1>Counter1</h1>
            <Link to="/counter-1">Counter 1</Link>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}