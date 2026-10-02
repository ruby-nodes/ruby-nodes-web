import Link from "next/link";
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
      <Link
        href={cta.href}
        className="mt-[2.4rem] inline-block w-full rounded-lg bg-c-primary px-[3.75rem] py-4 text-center text-sm font-bold text-c-text transition-colors hover:bg-c-primary-hover md:w-auto"
      >
        {cta.label}
      </Link>
    </div>
  );
}
