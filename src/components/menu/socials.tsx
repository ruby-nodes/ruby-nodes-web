import Link from "next/link";
import TelegramIcon from "../../assets/socials/telegram.svg";
import XIcon from "../../assets/socials/x.svg";
import Image from "next/image";

type SocialsProps = {
  links: {
    x: string;
    telegram: string;
  };
};

export default function Socials({
  links: { x, telegram },
}: SocialsProps) {
  return (
    <div className="flex gap-5">
      <SocialsItem icon={XIcon} href={x} />
      <SocialsItem icon={TelegramIcon} href={telegram} />
    </div>
  );
}

type SocialsItemProps = {
  icon: {
    src: string;
    alt: string;
  };
  href: string;
};

function SocialsItem({ icon, href }: SocialsItemProps) {
  return (
    <Link href={href} target="_blank">
      <img src={icon.src} alt={icon.alt} className="h-4 w-auto" />
    </Link>
  );
}
