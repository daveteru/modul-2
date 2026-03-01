import About from "./About";
import Gridbg from "./Gridbg";
import Title from "./Title";

export default function Home() {
  return (
    <div className="relative w-screen h-auto bg-black px-5 py-5">
      <Title />
      <Gridbg />
      <About/>
    </div>
  );
}
