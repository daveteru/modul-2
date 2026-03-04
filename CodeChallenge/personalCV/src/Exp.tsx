import Expcontent1 from "./Expcontent1";

export default function Exp() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full h-fit text-right text-white mix-blend-difference pointer-events-none mb-10 mt-5">
        <p>
          <hr></hr>04
        </p>
        <span className="text-9xl font-extralight mb-4">EXPERIENCE</span>
        <section className="grid grid-cols-2 w-[75%] h-fit gap-4">
          <Expcontent1 />
          <Expcontent1 />
          <Expcontent1 />
          <Expcontent1 />
          <Expcontent1 />
          <Expcontent1 />
        </section>
      </div>
      <hr className="relative z-1 w-full border-t border-gray-500  mix-blend-difference" />
    </div>
  );
}
