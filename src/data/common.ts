import { FooterData, MenuData, SocialsData } from "./types";

const socialsData = {
  links: {
    x: "https://x.com/RubyNodes",
    telegram: "https://t.me/pmensik",
  },
} satisfies SocialsData;

const menuData = {
  navigation: [
    { label: "Institutions", href: "/institutional" },
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
    { label: "Security", href: "/security" },
    { label: "Company", href: "/#about-us" },
  ],
  cta: { label: "Talk to us", href: "mailto:peter@rubynodes.io?subject=Infrastructure%20enquiry" },
} satisfies MenuData;

const footerData = {
  navigation: [
    { label: "Staking", href: "/#staking" },
    { label: "FAQ", href: "/#faq" },
    { label: "News", href: "/news" },
    { label: "About Us", href: "/#about-us" },
    { label: "Security", href: "/security" },
    { label: "System Status", href: "https://status.rubynodes.io" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} satisfies FooterData;

const commonData = {
  socials: socialsData,
  menu: menuData,
  footer: footerData,
};

export default commonData;
