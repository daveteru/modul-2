import { Accordion, AccordionItem } from "@heroui/accordion";
import Project1 from "./Project1";

export default function Portfolio() {
  return (
    <div className="relative z-20">
      <section className="relative z-20 flex flex-col w-full h-fit text-right text-white mix-blend-difference pointer-events-none mb-10 mt-5">
        <p className="ml-auto">
          <hr className="w-5"></hr>03
        </p>
        <span className="text-9xl font-extralight mb-4">PORTFOLIO</span>
        <div className="w-full relative z-5 text-right flex gap-2 flex-row flex-end pointer-events-auto">
          <Accordion selectionMode="multiple">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={<>E-COMMERCE WEBSITE FOR <span className="font-[Cardo] italic">Masshiro & Co.</span></>}
              classNames={{
                trigger: "flex-row-reverse",
                title:
                  "text-left text-5xl font-light font-[Inter] items-center my-3",
                indicator: "data-[open=true]:rotate-270 transition-transform",
              }}
            >
             <Project1/>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 1"
              title={<><span className="font-[Cardo] italic">Pt.Arundaya</span> COMPANY PROFILE UPDATE</>}
              classNames={{
                trigger: "flex-row-reverse",
                title:
                  "text-left text-5xl font-light items-center my-3",
                indicator: "data-[open=true]:rotate-270 transition-transform",
              }}
            >
             <Project1/>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 1"
              title={<>INTERACTIVE USER ONBOARDING @ <span className="font-[Cardo] italic">Grab Indonesia</span></>}
              classNames={{
                trigger: "flex-row-reverse",
                title:
                  "text-left text-5xl font-light font-[inter] items-center my-3",
                indicator: "data-[open=true]:rotate-270 transition-transform",
              }}
            >
             <Project1/>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 1"
              title="DYNAMIC 3D GLOBE"
              classNames={{
                trigger: "flex-row-reverse",
                title:
                  "text-left text-5xl font-light font-[inter] items-center my-3",
                indicator: "data-[open=true]:rotate-270 transition-transform",
              }}
            >
             <Project1/>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <hr className="relative z-10 w-full border-t border-gray-500  mix-blend-difference" />
    </div>
  );
}
