import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type HamburgerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
};

export default function Hamburger({
  open,
  setOpen,
  className,
}: HamburgerProps) {
  const commonStyles =
    "w-full h-0.5 bg-c-text absolute transition-all duration-300 ";
  const topBarStyles = `${commonStyles} ${
    open ? "top-1/2 transform -rotate-45 -translate-y-1/2" : "top-0"
  }`;
  const middleBarStyles = `${commonStyles} ${
    open ? "opacity-0" : "top-1/2 -translate-y-1/2"
  }`;
  const bottomBarStyles = `${commonStyles} ${
    open
      ? "top-1/2 -translate-y-1/2 transform rotate-45 "
      : "bottom-0 translate-y-0"
  }`;

  return (
    <button
      className={twMerge(className, "relative h-5 w-8 cursor-pointer ")}
      onClick={() => setOpen(!open)}
    >
      <div className={topBarStyles}></div>
      <div className={middleBarStyles}></div>
      <div className={bottomBarStyles}></div>
    </button>
  );
}
