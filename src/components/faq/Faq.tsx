import indexData from "@/data";
import Subheading from "../common/Subheading";
import Accordion from "../common/Accordion";
import ScrollAnchor from "../common/ScrollAnchor";
import LeftRuby from "@/assets/rubys/04.png";
import RightRuby from "@/assets/rubys/05.png";
import Image from "next/image";

const { title, items } = indexData.faq;

export default function FAQ() {
  return (
    <section className="flex flex-col gap-16 bg-gradient-to-b from-c-bg to-c-primary ~pb-[11rem]/[7.5rem] relative">
      <div className="absolute left-[-9rem] xl:left-[-14rem] bottom-[-11rem] xl:bottom-[-10rem] z-10 w-[20rem] xl:w-[28.25rem] h-[25rem] xl:h-[36.688rem] rotate-[20deg] xl:rotate-0">
        <Image src={LeftRuby} alt="" className="w-full h-full" />
      </div>
      <div className="absolute right-[-6rem] xl:right-[-14rem] top-[-7rem] xl:top-[0rem] z-10 w-[13rem] xl:w-[29.55rem] h-[13.7rem] xl:h-[33.375rem]">
        <Image src={RightRuby} alt="" className="w-full h-full" />
      </div>
      <ScrollAnchor id="faq" />
      <div className="container mx-auto flex flex-col gap-16">
        <Subheading title={title} />
        <div className="flex flex-col gap-5 max-w-[900px] mx-auto w-full">
          {items.map(({ question, answer }, index) => {
            return (
              <Accordion title={question} content={answer} key={question} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
