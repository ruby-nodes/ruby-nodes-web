import Ruby from "@/assets/rubys/01.png";
import BgImage from "@/assets/hero-bg.svg";
import Image from "next/image";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Link from "next/link";
import Container from "../common/Container";
import React from "react";

export type HeroProps = {
  title: React.ReactNode;
  description: string;
  cta: {
    title: string;
    href: string;
  };
};

export default function Hero({ title, description, cta }: HeroProps) {
  return (
    <Container>
      <section className="bg-c-bg relative overflow-hidden min-h-screen flex items-center w-full justify-center pb-28">
        <div className="flex flex-col items-center z-0">
          <figure className="relative max-w-[1116px] w-full flex justify-center ">
            <Image src={Ruby} alt="Ruby" className="relative z-20" />
            <Image
              src={BgImage}
              alt="Hero Background"
              className="absolute z-10 -top-[326px] min-w-[1100px]"
              width={1116}
              height={1116}
            />
          </figure>
          <div className="z-30 flex flex-col items-center">
            <h1 className="~text-2xl-clamped/2xl  font-rubik font-bold text-c-text max-w-[700px] text-center leading-[1.2]">
              {title}
            </h1>
            <Paragraph text={description} className="max-w-[500px] mt-2.5" />
            <Link href={cta.href}>
              <Button label={cta.title} className="~mt-7/11" />
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}