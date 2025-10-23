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
import Logo0g from "@/assets/logos/0g.svg";
import LogoBase from "@/assets/logos/base.svg";
import LogoBNB from "@/assets/logos/bnb-chain.svg";
import LogoPeaq from "@/assets/logos/peaq.svg";
import LogoSolana from "@/assets/logos/solana.svg";
import LogoSomnia from "@/assets/logos/somnia.svg";
import LogoSui from "@/assets/logos/sui.svg";
import LogoWalrus from "@/assets/logos/walrus.svg";

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
        <div className="bg-c-bg relative min-h-screen flex items-center w-full ~pb-56/40">
          {/* two-column layout: text (left) and image (right) */}
          <div className="w-full max-w-[1116px] mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="z-30 flex flex-col items-start md:w-1/2">
              <h1 className="~text-2xl-clamped/2xl font-bold text-c-text max-w-[700px] text-left leading-[1.2]">
                {title}
              </h1>
              <Paragraph text={description} className="max-w-[500px] mt-2.5 text-left" />
              <div className="mt-8 w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <Link href={cta.href} className="w-full sm:w-auto">
                  <Button label={cta.label} className="w-full sm:w-auto" />
                </Link>
                <Link href="/private-infrastructure" className="w-full sm:w-auto">
                  <Button label="Private Infrastructure" variant="secondary" className="w-full sm:w-auto" />
                </Link>
              </div>

              {/* Logos row: single line, shrink-to-fit between decorative rubies */}
              <div className="mt-6 w-full">
                <div className="flex items-center gap-8 w-full flex-nowrap">
                  {[Logo0g, LogoBase, LogoBNB, LogoPeaq, LogoSolana, LogoSomnia, LogoSui, LogoWalrus].map((Src, i) => (
                    <div key={i} className="flex-shrink-0 w-[100px] flex items-center justify-center">
                      <Image src={Src} alt={`logo-${i}`} width={100} height={50} className="w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* logos removed from constrained container to render full-bleed below */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
