"use client";

import { useEffect, useState } from "react";
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

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflowY = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
      document.documentElement.style.overflowX = "hidden";
    }
  }, [open]);

  return (
    <>
      <header className="bg-c-bg border-b border-c-menu-border fixed top-0 z-50 inset-x-0">
        <Container className="flex justify-between items-center h-[84px]">
          <Logo />
          <div
            className={twMerge(
              "fixed xl:justify-between flex justify-center items-center gap-[3.75rem] flex-col xl:flex-row xl:static xl:h-auto top-[84px] transition-all h-[calc(100vh-84px)] bg-c-bg z-10 w-full xl:w-auto",
              open ? "left-0" : "left-[100%]"
            )}
          >
            <Navigation items={navigation} onClickLink={closeMenu} />
            <Link href={cta.href} target="_blank" rel="noopener noreferrer" className="w-full xl:w-auto">
              <Container>
                <Button
                  label={
                    <span className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      {cta.label}
                    </span>
                  }
                  variant="primary"
                  onClick={closeMenu}
                  className="w-full xl:w-auto"
                />
              </Container>
            </Link>
            <Socials links={links} />
            <div className="p-8 xl:hidden" />
          </div>
          <Hamburger open={open} setOpen={setOpen} className="xl:hidden" />
        </Container>
      </header>
      <div className="h-[84px]" />
    </>
  );
}
