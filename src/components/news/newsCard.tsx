import Image from "next/image";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Link from "next/link";
import ReleaseDate from "./releaseDate";
import { twMerge } from "tailwind-merge";
import { transition } from "@/lib/common";

type BlogProps = {
  title: string;
  description: string;
  date: Date;
  href: string;
  imgSrc: string;
};

export default function NewsCard({
  title,
  imgSrc,
  description,
  date,
  href,
}: BlogProps) {
  return (
    <article
      className={twMerge(
        "flex flex-col w-full rounded-md bg-c-container text-c-text group"
      )}
    >
      <figure className="relative h-[204px] rounded-t-md overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className={twMerge(
            "object-cover",
            transition,
            "group-hover:scale-[103%]"
          )}
        />
      </figure>
      <div className="p-5 flex flex-col">
        <div className="flex items-baseline justify-between">
          <h3 className="font-bold  text-md">{title}</h3>
          <ReleaseDate date={date} />
        </div>
        <Paragraph text={description} className="mt-2.5" />
        <Link href={href}>
          <Button
            label="Read"
            className="mt-7 justify-self-end"
            variant="secondary"
          />
        </Link>
      </div>
    </article>
  );
}
