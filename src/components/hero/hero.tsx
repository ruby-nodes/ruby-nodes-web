import Ruby from "@/assets/rubys/01.png";
import BgImage from "@/assets/hero-bg.svg";
import Image from "next/image";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Link from "next/link";
import Container from "../common/Container";
import React from "react";
import indexData from "@/data";
import RubyLeft from "@/assets/rubys/02.png";
import RubyRight from "@/assets/rubys/03.png";

const { cta, description, title } = indexData.hero;

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute ~left-[-18.5rem]/[-11rem] ~bottom-[-9.5rem]/[1rem] z-10 ~w-[31.3rem]/[28.25rem] ~h-[40.025rem]/[36.688rem]">
        <Image src={RubyLeft} alt="Ruby Left" className="w-full h-full" />
      </div>
      <div className="absolute ~right-[-9rem]/[-10rem] ~bottom-[0rem]/[1rem] z-10 ~w-[20rem]/[28.25rem] ~h-[25rem]/[36.688rem]">
        <Image src={RubyRight} alt="Ruby Right" className="w-full h-full" />
      </div>
      <Container className="overflow-hidden ">
        <div className="bg-c-bg relative min-h-screen flex items-center w-full justify-center ~pb-56/40">
          <div className="flex flex-col items-center">
            <figure className="relative max-w-[1116px] w-full flex justify-center">
              <Image
                loading="eager"
                src={Ruby}
                alt="Ruby"
                className="relative z-20"
              />
              <Image
                src={BgImage}
                alt="Hero Background"
                className="absolute z-0 -top-[326px] min-w-[1100px]"
                width={1116}
                height={1116}
              />
            </figure>
            <div className="z-30 flex flex-col items-center">
              <h1 className="~text-2xl-clamped/2xl  font-bold text-c-text max-w-[700px] text-center leading-[1.2]">
                {title}
              </h1>
              <Paragraph
                text={description}
                className="max-w-[500px] mt-2.5 text-center"
              />
              <Link href={cta.href} className="w-full md:w-auto">
                <Button label={cta.label} className="mt-8 w-full md:w-auto" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
