import { FooterData, MenuData, SocialsData } from "./types";

const socialsData = {
  links: {
    x: "https://x.com",
    telegram: "https://t.me",
    discord: "https://discord.com",
  },
} satisfies SocialsData;

const menuData = {
  navigation: [
    { label: "FAQ", href: "/#faq" },
    { label: "News", href: "/news" },
    { label: "About Us", href: "/#about-us" },
  ],
  cta: { label: "Stake with us", href: "/#staking" },
} satisfies MenuData;

const footerData = {
  navigation: [
    { label: "Staking", href: "/#staking" },
    { label: "FAQ", href: "/#faq" },
    { label: "News", href: "/news" },
    { label: "About Us", href: "/#about-us" },
  ],
} satisfies FooterData;

const commonData = {
  socials: socialsData,
  menu: menuData,
  footer: footerData,
};

export default commonData;
