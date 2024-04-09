"use client";

import { useState } from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import Hamburger from "./hamburgerIcon";
import Logo from "./logo";
import Navigation from "./nav";
import Socials from "./socials";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import commonData from "@/data/common";

const {
  menu: { navigation, cta },
  socials: { links },
} = commonData;

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-c-bg border-b border-c-menu-border sticky top-0 z-50">
      <Container className="flex justify-between items-center h-[84px]">
        <Logo />
        <div
          className={twMerge(
            "fixed lg:justify-between flex justify-center items-center gap-12 flex-col lg:flex-row lg:static lg:h-auto top-[84px] transition-all h-[calc(100vh-84px)] bg-c-bg z-10 w-full lg:w-auto",
            open ? "left-0" : "left-[100%]"
          )}
        >
          <Navigation items={navigation} />
          <Link href={cta.href}>
            <Button label={cta.label} variant="primary" />
          </Link>
          <Socials links={links} />
          <div className="p-8 lg:hidden" />
        </div>
        <Hamburger open={open} setOpen={setOpen} className="lg:hidden" />
      </Container>
    </header>
  );
}
