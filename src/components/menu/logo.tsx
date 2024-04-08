import RubyLogo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={RubyLogo}
        alt="Ruby Logo"
        width={226}
        height={43}
        className={className}
      />
    </Link>
  );
}
