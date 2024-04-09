import indexData from "@/data";
import Subheading from "../common/Subheading";
import Accordion from "../common/Accordion";
import ScrollAnchor from "../common/ScrollAnchor";

const { title, items } = indexData.faq;

export default function FAQ() {
  return (
    <section className="flex flex-col gap-16 bg-gradient-to-b from-c-bg to-c-primary pb-[7.5rem] relative">
      <ScrollAnchor id="faq" />
      <div className="container mx-auto flex flex-col gap-16">
        <Subheading title={title} />
        <div className="flex flex-col gap-5 max-w-[900px] mx-auto w-full">
          {items.map(({ question, answer }, index) => {
            return (
              <Accordion
                title={question}
                content={answer}
                collapsibleShouldTakeSpace={index === items.length - 1}
                key={question}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
