import { FooterData, MenuData, SocialsData } from "./types";

const socialsData = {
  links: {
    x: "https://x.com/RubyNodes",
    telegram: "https://t.me/pmensik",
    discord: "https://discord.com",
  },
} satisfies SocialsData;

const menuData = {
  navigation: [
    { label: "News", href: "/news" },
    { label: "Ecosystems", href: "/#staking" },
    { label: "Success Stories", href: "/#success-stories" },
    { label: "FAQ", href: "/#faq" },
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
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} satisfies FooterData;

const commonData = {
  socials: socialsData,
  menu: menuData,
  footer: footerData,
};

export default commonData;
