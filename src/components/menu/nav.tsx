import Link from "next/link";
import Paragraph from "../common/Paragraph";
import { twMerge } from "tailwind-merge";
import { LinkProps } from "@/data/types";

type NavigationProps = {
  items: LinkProps[];
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
        <Link href={item.href} key={item.label}>
          <Paragraph
            text={item.label}
            className="hover:text-c-text-inactive transition-colors duration-300 ease-in-out"
          />
        </Link>
      ))}
    </nav>
  );
}
