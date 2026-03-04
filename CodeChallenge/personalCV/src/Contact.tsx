export default function Contact() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full h-fit text-right text-white mix-blend-difference pointer-events-none mb-10 mt-5">
        <p>
          <hr></hr>06
        </p>
        <span className="text-9xl font-extralight mb-4">CONTACT</span>
        <div className="flex gap-4">
          <div className="flex flex-col items-end gap-3 ">
            <h1 className="uppercase max-w-[400px] min-w-[300px]">
              I design with intent and build with craft // visual designer
              turned engineer. Still obsessed with the details
            </h1>
            <hr className="relative z-10 w-20 border-t border-white mix-blend-normal" />
            <p>BASED IN JAKARTA, INDONESIA</p>
            <button className="bg-white w-fit py-1 px-3 rounded-full text-black hover:bg-blue-700 hover:text-white pointer-events-auto">
              GET IN TOUCH
            </button>
          </div>
          <p className="max-w-[600px] min-w-[300px] h-fit mb-5 font-light text-[12px] tracking-wide leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            suscipit reiciendis magni molestias provident enim earum error!
            Optio expedita eveniet veniam corporis nemo. Quis facilis modi
            laudantium sit sapiente ullam dolor incidunt nemo dolorum rem
            ratione atque expedita enim dolorem quae accusamus amet labore,
            nihil accusantium facere tenetur nam sunt adipisci eligendi.
            Explicabo aspernatur quod fuga nobis nihil. Blanditiis provident
          </p>
        </div>
        <form>
          <fieldset className="flex flex-col items-end gap-2">
            <legend>SEND ME A MESSAGE:</legend>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-md h-10 w-100 pointer-events-auto"
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md h-10 w-100 pointer-events-auto"
            ></input>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="border rounded-md h-70 w-100 pointer-events-auto"
            ></textarea>
            <button className="bg-white w-fit py-1 px-3 rounded-full text-black hover:bg-blue-700 hover:text-white pointer-events-auto">
              SEND INQUIRY
            </button>
          </fieldset>
        </form>
      </div>
      <hr className="relative z-1 w-full border-t border-gray-500  mix-blend-difference" />
    </div>
  );
}
