"use client";

import { useState } from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import Hamburger from "./hamburgerIcon";
import Logo from "./logo";
import Navigation from "./nav";
import Socials from "./socials";
import { twMerge } from "tailwind-merge";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-c-bg border-b border-c-menu-border sticky top-0">
      <Container className="flex justify-between items-center h-[84px]">
        <Logo />
        <div
          className={twMerge(
            "fixed lg:justify-between flex justify-center items-center gap-12 flex-col lg:flex-row lg:static lg:h-auto top-[84px] transition-all h-[calc(100vh-84px)] bg-c-bg z-10 w-full lg:w-auto",
            open ? "left-0" : "left-[100%]"
          )}
        >
          <Navigation
            items={[
              { title: "Home", href: "/" },
              { title: "About", href: "/about" },
              { title: "Contact", href: "/contact" },
            ]}
          />
          <Button label="Login" variant="primary" />
          <Socials
            links={{
              x: "https://x.com",
              discord: "https://discord.com",
              telegram: "https://telegram.com",
            }}
          />
          <div className="p-8 lg:hidden" />
        </div>
        <Hamburger open={open} setOpen={setOpen} className="lg:hidden" />
      </Container>
    </header>
  );
}
