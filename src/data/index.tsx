import React from "react";
import { AboutUsData, FaqData, HeroData, StakingData } from "./types";
import PolkadotIcon from "@/assets/polkadot.png";

const heroData = {
  title: (
    <span>
      Ruby Toughness,
      <br />
      Node Precision
    </span>
  ),
  description:
    "Carved in the depths of bear market, Ruby Nodes is one of the most solid and experienced infrastructure providers that you can find in the space. We operate our own hardware on multiple continents while running over 30 various blockchains at the moment. Our skills range from running validators up to the L2 sequencers, RPCs, bootnodes or bridge relayers.",
  cta: {
    label: "Stake with us",
    href: "#staking",
  },
} satisfies HeroData;

const aboutUsData = {
  title: "About us",
  description: `
  In 2020, we kicked off our journey at a crypto-themed pub, accepting Bitcoin and Litecoin. Initially focused on content and events, we soon identified a niche for robust node infrastructure. Leveraging Pavel's deep crypto knowledge and Petr's backend expertise, we evolved from cloud services to our own high-efficiency bare metal servers, becoming leading node providers for multiple blockchains. Our expansion continued, and the rest is history.
  `,
  cta: {
    label: "Get Started",
    href: "#",
  },
} satisfies AboutUsData;

const stakingData = {
  title: "Staking",
  tabFilter: {
    label: "Projects:",
  },
  items: {
    Polkadot: [
      {
        project: {
          img: {
            src: PolkadotIcon,
            alt: "Hyperbridge",
          },
          href: "https://hyperbridge.network/",
        },
        description:
          "Hyperbridge is a cryptographically secure cross-chain interoperability tool secured by Polkadot and powered by zero-knowledge cryptography.",
        button: {
          label: "Learn more",
          href: "https://hyperbridge.network/",
        },
      },
      {
        project: {
          img: {
            src: PolkadotIcon,
            alt: "Joystream",
          },
          href: "https://www.joystream.org/",
        },
        description:
          "Joystream is a video platform that uses blockchain technology to empower creators to earn money through NFTs and creator tokens.",
        button: {
          label: "Learn more",
          href: "https://www.joystream.org/",
        },
      },
    ],
    Cosmos: [
      {
        project: {
          img: {
            src: PolkadotIcon,
            alt: "Swisstronik",
          },
          href: "https://swisstronik.com/",
        },
        description:
          "Swisstronik is a blockchain ecosystem for building compliant and privacy-focused decentralized applications.",
        button: {
          label: "Learn more",
          href: "https://swisstronik.com/",
        },
      },
    ],
    Fantom: [
      {
        project: {
          img: {
            src: PolkadotIcon,
            alt: "Fantom",
          },
          href: "https://fantom.foundation/",
        },
        description:
          "Fantom is a high-performance blockchain platform with low transaction costs. It offers DeFi, NFTs, and GameFi applications.",
        button: {
          label: "Learn more",
          href: "https://fantom.foundation/",
        },
      },
    ],
  },
} satisfies StakingData;

const faqData = {
  title: "FAQ",
  items: [
    {
      question: "What is staking?",
      answer:
        "Staking is a process of locking your tokens (be it DOT, KSM or GLMR) and receiving rewards for doing so. At the same time, staking boost the security of the underlying network.",
    },
    {
      question: "Do Ruby Nodes take any custody of user's funds?",
      answer:
        "No, all of our service are fully non-custodial and we can't touch delegator's funds at any point of time.",
    },
    {
      question: "Why should you trust Ruby Nodes as a node operator?",
      answer:
        "We started in as early as 2020 in the Polkadot ecosystem - since then we have built a huge community, became validators on almost all parachains and joined various validator DAOs. This is what we love and we are here to stay!",
    },
    {
      question: "How do you ensure a quality of your service?",
      answer:
        "We run all the validators on the best hardware possible, we also employ backups and strict monitoring that ensures maximum uptime. Ruby Nodes also optimize heavily for performance, therefore you will usually find us among the nodes with highest APR.",
    },
    {
      question: "What do you do with the staking rewards?",
      answer:
        "We heavily invest into the community activities like organizing conferences, publishing educational articles or promoting the Polkadot ecosystem. Quit recently, we started to offset our carbon emissions with RM Terra.",
    },
    {
      question: "Why should you support Ruby Nodes as a validator?",
      answer:
        "On one hand, we bring the high-quality of service together with one of the highest APR on our validators in the ecosystem. On the other, you will also help to decentralize Polkadot and its ecocystem by supporting a community validator - which, in turn, will support the ecosystem itself. We are proud to support Polkadot from the early days and we definitely want to give something back in return.",
    },
  ],
} satisfies FaqData;

const indexData = {
  staking: stakingData,
  faq: faqData,
  hero: heroData,
  aboutUs: aboutUsData,
};

export default indexData;
