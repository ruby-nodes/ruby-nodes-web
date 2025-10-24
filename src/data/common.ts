import { FooterData, MenuData, SocialsData } from "./types";

const socialsData = {
  links: {
    x: "https://x.com/RubyNodes",
    telegram: "https://t.me/pmensik",
  },
} satisfies SocialsData;

const menuData = {
  navigation: [
    { label: "News", href: "/news" },
    { 
      label: "Services", 
      href: "#services",
      dropdown: [
        { label: "Validator Services", href: "/validator-services" },
        { label: "Protocol Services", href: "/protocol-services" },
        { label: "Private Infrastructure", href: "/private-infrastructure" },
        { label: "Apps & Tooling", href: "/apps-and-tooling" },
      ]
    },
    { label: "Success Stories", href: "/#success-stories" },
    { label: "FAQ", href: "/#faq" },
    { label: "About Us", href: "/#about-us" },
  ],
  cta: { label: "Node status", href: "https://status.rubynodes.io" },
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
