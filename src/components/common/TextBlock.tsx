import Link from "next/link";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";

export type TextBlockProps = {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export default function TextBlock({ title, description, cta }: TextBlockProps) {
  return (
    <div className="text-c-text">
      <Subheading title={title} className="text-start" />
      <Paragraph text={description} className="mt-4" />
      <Link href={cta.href}>
        <Button label={cta.label} className="mt-[1.88rem]" />
      </Link>
    </div>
  );
}
