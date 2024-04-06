import {
  AccordionContent,
  AccordionItem,
  Accordion as AccordionSCN,
  AccordionTrigger,
} from "../ui/accordion";

type Props = {
  title: string;
};

export default function Accordion({ title }: Props) {
  return (
    <AccordionSCN title={title} type="multiple" className="w-full">
      <AccordionItem className="border-b-primary" value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </AccordionSCN>
  );
}
