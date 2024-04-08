import Image from "next/image";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Link from "next/link";

type BlogProps = {
  title: string;
  description: string;
  date: Date;
  href: string;
  imgSrc: string;
};

function formatDate(date: Date) {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export default function NewsCard({
  title,
  imgSrc,
  description,
  date,
  href,
}: BlogProps) {
  return (
    <article className="flex flex-col w-full rounded-md bg-c-container text-c-text">
      <figure className="relative h-[204px] rounded-t-md overflow-hidden">
        <Image src={imgSrc} alt={title} fill className="object-cover" />
      </figure>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold font-rubik text-md">{title}</h3>
          <p className="text-sm text-c-primary">{formatDate(date)}</p>
        </div>
        <Paragraph text={description} className="mt-2.5" />
        <Link href={href}>
          <Button label="Read" className="mt-7" variant="secondary" />
        </Link>
      </div>
    </article>
  );
}
