import About from "./About";
import Contact from "./Contact";
import Exp from "./Exp";
import Gridbg from "./Gridbg";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import Title from "./Title";

export default function Home() {
  return (
    <div className="relative w-screen h-auto bg-black px-5 box-border cursor-crosshair">
      <Title />
      <Gridbg />
      <div className="overflow-y-auto">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Exp />
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}
