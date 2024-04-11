import { Article } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import LeftArrow from "@/assets/arrow-left.svg";
import { twMerge } from "tailwind-merge";
import { transition } from "@/lib/common";

type Props = {
  previous: Article | undefined;
  next: Article | undefined;
};

export default function NewsControls({ previous, next }: Props) {
  return (
    <div className="flex justify-between items-start gap-4 ">
      <Control article={previous} direction="left" />
      <Control article={next} direction="right" />
    </div>
  );
}

function Control({
  article,
  direction,
}: {
  article: Article | undefined;
  direction: "left" | "right";
}) {
  return article ? (
    <Link
      href={article.href}
      className={twMerge(
        "flex gap-2 items-baseline cursor-pointer flex-1 group",
        direction === "left" ? "justify-start" : "justify-end"
      )}
    >
      {direction === "left" && <Arrow direction="left" />}
      <ControlText title={article.title} direction={direction} />
      {direction === "right" && <Arrow direction="right" />}
    </Link>
  ) : (
    <div />
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <Image
      src={LeftArrow}
      alt="Arrow"
      width={32}
      height={32}
      className={twMerge(
        direction === "right" ? "transform rotate-180" : "",
        "translate-y-2 group-hover:translate-y-4",
        transition
      )}
    />
  );
}

function ControlText({
  title,
  direction,
}: {
  title: string;
  direction: "left" | "right";
}) {
  return (
    <div>
      <h3 className="text-md font-bold group-hover:underline">{title}</h3>
      <p
        className={twMerge(
          "opacity-0 h-[1px] group-hover:h-auto group-hover:opacity-100 ",
          transition
        )}
      >
        {direction === "left" ? "Previous" : "Next"} Article
      </p>
    </div>
  );
}
