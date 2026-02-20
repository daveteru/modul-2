import ComponentsA from "../components/ComponentsA";
import { UserContext } from "../context/UserContext";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default function Home() {
  const name:string = 'Budi'
  
  return (
    <UserContext.Provider value = {{name:name, job : 'software engineer'}}>
   <div>
    <Counter1/>
  </div>;
  </UserContext.Provider>
  );
}
