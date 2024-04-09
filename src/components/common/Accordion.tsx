"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Paragraph from "./Paragraph";
import Image from "next/image";
import DoubleArrow from "../../assets/double-arrow.svg";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  content: string;
  collapsibleShouldTakeSpace?: boolean;
};

export default function Accordion({
  title,
  content,
  collapsibleShouldTakeSpace = true,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className=" w-full text-c-text flex flex-col relative gap-5">
      <header className="flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" flex justify-between items-baseline w-full"
        >
          <h3 className="font-rubik text-lg font-medium text-left">{title}</h3>
          <Image
            src={DoubleArrow}
            width={22}
            height={22}
            alt="Arrow"
            className={twMerge(
              isOpen ? "transform rotate-90" : "",
              "transition-transform mt-1"
            )}
          />
        </button>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={
              collapsibleShouldTakeSpace
                ? "absolute w-full mt-[3.5rem]"
                : "w-full"
            }
          >
            <Paragraph text={content} />
          </motion.div>
        )}
      </AnimatePresence>
      <DottedLine />
    </article>
  );
}

function DottedLine() {
  return (
    <div
      className="h-[1px]"
      style={{
        background: `linear-gradient(to right, #8D1927 0%, #8D1927 40%, transparent 40%, transparent 100%) 0 0 / 20px 1px `,
      }}
    />
  );
}
