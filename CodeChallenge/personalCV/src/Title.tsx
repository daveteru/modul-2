export default function Title() {
  return (
    <div className="fixed top-5 left-5 z-15 h-fit w-fit pointer-events-none mix-blend-difference">
      <h1 className="text-6xl flex flex-wrap h-fit w-[50px] ">
        DAVID <span >'TERU'</span> SUDIONO
      </h1>
      <p className="h-fit w-[300px] flex flex-wrap text-white">
        INDEPENDENT UI DESIGNER & FULL STACK DEVELOPER SPECIALIZING IN
        INTERACTIVE DIGITAL EXPERIENCES
      </p>
      <nav className="mt-5 relative z-1 flex flex-col text-white">
        <a
          href="mailto:daveteru@gmail.com"
          className="mb-4 w-fit pointer-events-auto hover:text-blue-600 hover:bg-white "
        >
          <button className="underline">DAVETERU@GMAIL.COM</button>
        </a>
        <ul className="w-fit pointer-events-none gap-1 flex flex-col">
          <li>
            <a>CONTACT//</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/daveteru"
              className="hover:text-blue-600 hover:bg-white pointer-events-auto"
            >
              INSTAGRAM
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+6281285338235"
              className="hover:text-blue-600 hover:bg-white pointer-events-auto"
            >
              WHATSAPP
            </a>
          </li>
          <li>
            <a
              href="https://github.com/daveteru"
              className="hover:text-blue-600 hover:bg-white pointer-events-auto"
            >
              GITHUB
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
