"use client";

import Link from "next/link";
import Paragraph from "../common/Paragraph";
import { twMerge } from "tailwind-merge";
import { LinkProps } from "@/data/types";
import { useState } from "react";

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav
      className={twMerge(
        "flex gap-12 text-center flex-col lg:flex-row",
        className
      )}
    >
      {items.map((item) => {
        if (item.dropdown) {
          return (
            <div
              key={item.label}
              className="relative lg:group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                className={twMerge(
                  "hover:text-c-text-inactive transition-colors duration-300 ease-in-out lg:text-sm cursor-pointer",
                  small ? "text-sm" : "text-md"
                )}
              >
                <Paragraph text={item.label} className="text-c-text" />
              </button>
              
              {/* Dropdown menu */}
              <div className={twMerge(
                "lg:absolute left-0 mt-2 w-56 bg-c-container border border-c-menu-border rounded-md shadow-lg transition-all duration-200 z-50",
                "hidden lg:group-hover:block lg:mt-2",
                "before:content-[''] before:absolute before:left-0 before:right-0 before:-top-2 before:h-2 before:bg-transparent",
                openDropdown === item.label ? "block lg:block" : "hidden lg:hidden lg:group-hover:block"
              )}>
                <div className="py-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      onClick={onClickLink}
                      className="block px-4 py-3 hover:bg-c-container-accent transition-colors"
                    >
                      <Paragraph
                        text={dropdownItem.label}
                        className="text-sm text-c-text hover:text-c-text-inactive"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link href={item.href} key={item.label} onClick={onClickLink}>
            <Paragraph
              text={item.label}
              className={twMerge(
                "hover:text-c-text-inactive transition-colors duration-300 ease-in-out  lg:text-sm",
                small ? "text-sm" : "text-md"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
