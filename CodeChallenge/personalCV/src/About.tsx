export default function About() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full h-fit text-right text-white mix-blend-difference pointer-events-none">
        <span className="text-9xl font-extralight">ABOUT</span>
        <div className="flex gap-4">
          <div className="flex flex-col items-end gap-3 ">
            <h1 className="uppercase max-w-[400px]">
              I design with intent and build with craft // visual designer
              turned engineer. Still obsessed with the details
            </h1>
            <hr className="relative z-10 w-20 border-t border-white mix-blend-normal" />
            <p>BASED IN JAKARTA, INDONESIA</p>
            <button className="bg-white w-fit py-1 px-3 rounded-full text-black hover:bg-blue-700 hover:text-white pointer-events-auto">
              GET IN TOUCH
            </button>
          </div>
          <p className="max-w-[600px] min-w-[200px] h-fit mb-5 font-light text-[12px] tracking-wide leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            suscipit reiciendis magni molestias provident enim earum error!
            Optio expedita eveniet veniam corporis nemo. Quis facilis modi
            laudantium sit sapiente ullam dolor incidunt nemo dolorum rem
            ratione atque expedita enim dolorem quae accusamus amet labore,
            nihil accusantium facere tenetur nam sunt adipisci eligendi.
            Explicabo aspernatur quod fuga nobis nihil. Blanditiis provident
            iste corrupti doloribus. Nobis magnam quae temporibus nihil ex
            dolores officiis quas rem vel veritatis. Repudiandae voluptas natus
            fuga hic, tenetur ut laboriosam saepe, sunt molestias nemo
            laudantium excepturi iste! Nemo, architecto necessitatibus quidem
            doloremque soluta accusamus dolore ab, nostrum quam minus delectus
            totam adipisci quis voluptate, consequatur fugit quia!
          </p>
        </div>
      </div>
      <hr className="relative z-10 w-full border-t border-white mix-blend-normal" />
    </div>
  );
}
