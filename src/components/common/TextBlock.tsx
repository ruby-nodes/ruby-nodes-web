import Link from "next/link";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";
import { twMerge } from "tailwind-merge";

export type TextBlockProps = {
  title: string;
  className?: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export default function TextBlock({
  title,
  description,
  cta,
  className,
}: TextBlockProps) {
  return (
    <div className={twMerge("text-c-text", className)}>
      <Subheading title={title} className="text-start" />
      <Paragraph text={description} className="mt-1" />
      <Link href={cta.href} className="w-full md:w-auto">
        <Button label={cta.label} className="mt-[2.4rem] w-full md:w-auto" />
      </Link>
    </div>
  );
}
