"use client";

import Link from "next/link";
import Paragraph from "../common/Paragraph";
import { twMerge } from "tailwind-merge";
import { LinkProps } from "@/data/types";

type NavigationProps = {
  items: LinkProps[];
  className?: string;
  small?: boolean;
  onClickLink?: () => void;
};

export default function Navigation({
  items,
  className,
  small = false,
  onClickLink,
}: NavigationProps) {
  return (
    <nav
      className={twMerge(
        "flex gap-12 text-center flex-col lg:flex-row",
        className
      )}
    >
      {items.map((item) => (
        <Link href={item.href} key={item.label} onClick={onClickLink}>
          <Paragraph
            text={item.label}
            className={twMerge(
              "hover:text-c-text-inactive transition-colors duration-300 ease-in-out  lg:text-sm",
              small ? "text-sm" : "text-md"
            )}
          />
        </Link>
      ))}
    </nav>
  );
}
