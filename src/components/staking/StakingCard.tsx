import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from "next/image";
import Paragraph from "../common/Paragraph";
import Link from "next/link";
import Button from "../common/Button";
import { transition } from "@/lib/common";

export type StakingCardProps = {
  project: {
    img: {
      src: StaticImageData;
      alt: string;
    };
    href: string;
  };
  description: string;
  className?: string;
  button: {
    label: string;
    href: string;
  };
};

export default function StakingCard({
  project: { img, href },
  description,
  className,
  button,
}: StakingCardProps) {
  return (
    <article
      className={twMerge(
        "bg-c-container rounded-md text-sm ~p-[0.94rem]/[1.88rem] ",
        className,
        transition,
        "hover:scale-[103%]"
      )}
    >
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <Link href={href}>
            <Image height={29} src={img.src} alt={img.alt} />
          </Link>
          <hr className="border-c-primary border" />
          <Paragraph text={description} />
        </div>
        <Link href={button.href}>
          <Button label={button.label} variant="secondary" className="w-full" />
        </Link>
      </div>
    </article>
  );
}
