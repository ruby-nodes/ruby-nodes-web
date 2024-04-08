import Link from "next/link";
import Paragraph from "../common/Paragraph";
import { twMerge } from "tailwind-merge";

type NavigationProps = {
  items: {
    title: string;
    href: string;
  }[];
  className?: string;
};

export default function Navigation({ items, className }: NavigationProps) {
  return (
    <nav
      className={twMerge(
        "flex gap-12 text-center flex-col lg:flex-row",
        className
      )}
    >
      {items.map((item) => (
        <Link href={item} key={item.title}>
          <Paragraph
            text={item.title}
            className="hover:text-c-text-inactive transition-colors"
          />
        </Link>
      ))}
    </nav>
  );
}
