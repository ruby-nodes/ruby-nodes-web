import { twMerge } from "tailwind-merge";
import PolkadotLogo from "../../assets/polkadot.png";
import Image from "next/image";
import Paragraph from "../common/Paragraph";
import Link from "next/link";
import Button from "../common/Button";
import { Chain } from "@/lib/common";

export type StakingCardProps = {
  chain: Chain;
  description: string;
  className?: string;
  button: {
    label: string;
    href: string;
  };
};

export default function StakingCard({
  chain,
  description,
  className,
  button,
}: StakingCardProps) {
  return (
    <article
      className={twMerge(
        "bg-c-container rounded-md text-sm p-[1.88rem] ",
        className
      )}
    >
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <Image height={29} src={PolkadotLogo} alt="Polkadot logo" />
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
