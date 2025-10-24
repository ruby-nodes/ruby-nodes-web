import { StakingCardProps } from "@/components/staking/StakingCard";
import { Chain } from "@/lib/common";

export type StakingData = {
  title: string;
  tabFilter: {
    label: string;
  };
  items: {
    [key in Chain]: StakingCardProps[];
  };
};

export type FaqData = {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type LinkProps = {
  label: string;
  href: string;
  dropdown?: LinkProps[];
};

export type HeroData = {
  title: React.ReactNode;
  description: string;
  cta: LinkProps;
};

export type AboutUsData = {
  title: React.ReactNode;
  description: string;
  cta: LinkProps;
};

export type MenuData = {
  navigation: LinkProps[];
  cta: LinkProps;
};

export type SocialsData = {
  links: {
    x: string;
    telegram: string;
  };
};

export type FooterData = {
  navigation: LinkProps[];
};

export type SuccessStoriesData = {
  title: string;
  description: string;
}[];
