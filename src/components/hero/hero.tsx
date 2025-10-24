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
        <div className="bg-c-bg relative min-h-screen flex flex-col items-center w-full ~pb-56/40">
          {/* two-column layout: text (left) and image (right) */}
          <div className="w-full max-w-[1116px] mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="z-30 flex flex-col items-start md:w-1/2">
              <h1 className="~text-2xl-clamped/2xl font-bold text-c-text max-w-[700px] text-left leading-[1.2]">
                <>Ruby Toughness,<br />Node Preccision</>
              </h1>
              <Paragraph text={description} className="max-w-[500px] mt-2.5 text-left" />
            </div>

            {/* Right column: main ruby, aligned to the right of the page on md+ */}
            <div className="hidden md:flex md:w-1/2 items-center justify-end z-20">
              <Image src={Ruby} alt="Ruby" width={520} height={520} className="max-w-[420px] w-full h-auto" />
            </div>
          </div>

          {/* Services table - full width below hero text */}
          <div className="w-full max-w-[1116px] mx-auto px-4 mt-12 z-30">
            <div className="bg-c-container rounded-md overflow-hidden border border-c-menu-border">
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-c-menu-border">
                <Link 
                  href="/validator-services" 
                  className="p-8 hover:bg-c-container-accent transition-colors"
                >
                  <div className="text-c-text font-semibold text-md mb-1">Validator Services</div>
                  <div className="text-c-text-inactive text-sm">Run & maintain validators with SLAs</div>
                </Link>
                
                <Link 
                  href="/protocol-services" 
                  className="p-8 hover:bg-c-container-accent transition-colors"
                >
                  <div className="text-c-text font-semibold text-md mb-1">Protocol Services</div>
                  <div className="text-c-text-inactive text-sm">Integration, staking and protocol ops</div>
                </Link>
                
                <Link 
                  href="/private-infrastructure" 
                  className="p-8 hover:bg-c-container-accent transition-colors"
                >
                  <div className="text-c-text font-semibold text-md mb-1">Private Infrastructure</div>
                  <div className="text-c-text-inactive text-sm">Dedicated servers & private networks</div>
                </Link>
                
                <Link 
                  href="/apps-and-tooling" 
                  className="p-8 hover:bg-c-container-accent transition-colors"
                >
                  <div className="text-c-text font-semibold text-md mb-1">Apps & Tooling</div>
                  <div className="text-c-text-inactive text-sm">Developer tools, monitoring & SDKs</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Logos row */}
          <div className="w-full max-w-[1116px] mx-auto px-4 mt-6 z-30">
            <div className="flex items-center gap-8 w-full flex-nowrap -ml-16">
              <div className="flex-shrink-0 w-[130px] flex items-center justify-center">
                <Image src={LogoSui} alt="logo-sui" width={130} height={65} className="w-auto object-contain" />
              </div>
              <div className="flex-shrink-0 w-[130px] flex items-center justify-center">
                <Image src={LogoWalrus} alt="logo-walrus" width={130} height={65} className="w-auto object-contain" />
              </div>
              <div className="flex-shrink-0 w-[130px] flex items-center justify-center">
                <Image src={Logo0g} alt="logo-0g" width={130} height={65} className="w-auto object-contain" />
              </div>
              <div className="flex-shrink-0 w-[130px] flex items-center justify-center">
                <Image src={LogoBase} alt="logo-base" width={130} height={65} className="w-auto object-contain" />
              </div>
              <div className="flex-shrink-0 w-[80px] flex items-center justify-center">
                <Image src={LogoBNB} alt="logo-bnb" width={80} height={40} className="w-auto object-contain" />
              </div>
              <div className="flex-shrink-0 w-[130px] flex items-center justify-center">
                <Image src={LogoPeaq} alt="logo-peaq" width={130} height={65} className="w-auto object-contain" />
              </div>
              <div className="flex-shrink-0 w-[130px] flex items-center justify-center">
                <Image src={LogoSolana} alt="logo-solana" width={130} height={65} className="w-auto object-contain" />
              </div>
              <div className="flex-shrink-0 w-[130px] flex items-center justify-center">
                <Image src={LogoSomnia} alt="logo-somnia" width={130} height={65} className="w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Metrics table */}
          <div className="w-full max-w-[1116px] mx-auto px-4 mt-8 z-30">
            <div className="bg-c-container rounded-md overflow-hidden border border-c-menu-border">
              <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-c-menu-border">
                <div className="p-6 text-center">
                  <div className="text-c-primary font-bold text-xl mb-1">99.99%</div>
                  <div className="text-c-text-inactive text-sm">Uptime</div>
                </div>
                
                <div className="p-6 text-center">
                  <div className="text-c-primary font-bold text-xl mb-1">$100M</div>
                  <div className="text-c-text-inactive text-sm">Secured Value</div>
                </div>
                
                <div className="p-6 text-center">
                  <div className="text-c-primary font-bold text-xl mb-1">25+</div>
                  <div className="text-c-text-inactive text-sm">Active Validators</div>
                </div>
                
                <div className="p-6 text-center">
                  <div className="text-c-primary font-bold text-xl mb-1">60 TB</div>
                  <div className="text-c-text-inactive text-sm">Data Served</div>
                </div>
                
                <div className="p-6 text-center">
                  <div className="text-c-primary font-bold text-xl mb-1">10M/mo</div>
                  <div className="text-c-text-inactive text-sm">RPC Requests Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
