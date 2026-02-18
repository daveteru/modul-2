import { useReducer } from "react";

interface CounterState{
    count: number;
}
interface CounterAction{
    type: "increment" | "decrement" ;
    payload : number
}

function reducer(state : CounterState , action : CounterAction){
    switch(action.type){
        case "increment":
        return {count: state.count + action.payload}
        case "decrement":
        return {count: state.count - action.payload}
        default:
            return {count : state.count}
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, {count : 0})
  return <div><h1>UseReducer</h1>
   <button onClick={() => dispatch({ type:"decrement" , payload:1})}>decrement</button>
   <p>{state.count}</p>
   <button onClick={() => dispatch({ type:"increment" , payload:1})}>increment</button>
   </div>;
}
