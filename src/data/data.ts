import { StakingCardProps } from "@/components/staking/StakingCard";
import { Chain } from "@/lib/common";

type StakingData = {
  title: string;
  tabFilter: {
    label: string;
  };
  items: {
    [key in Chain]: StakingCardProps[];
  };
};

type FaqData = {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

const stakingData = {
  title: "Staking",
  tabFilter: {
    label: "Projects:",
  },
  items: {
    Polkadot: [
      {
        chain: "Polkadot",
        description:
          "Polkadot is a heterogeneous multi-chain interchange and translation architecture which enables customised side-chains to connect with public blockchains.",
        button: {
          label: "Learn more",
          href: "https://polkadot.network",
        },
      },
      {
        chain: "Polkadot",
        description:
          "Polkadot is a heterogeneous multi-chain interchange and translation architecture which enables customised side-chains to connect with public blockchains.",
        button: {
          label: "Learn more",
          href: "https://polkadot.network",
        },
      },
      {
        chain: "Polkadot",
        description:
          "Polkadot is a heterogeneous multi-chain interchange and translation architecture which enables customised side-chains to connect with public blockchains.",
        button: {
          label: "Learn more",
          href: "https://polkadot.network",
        },
      },
    ],
    Cosmos: [
      {
        chain: "Cosmos",
        description:
          "Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint consensus.",
        button: {
          label: "Learn more",
          href: "https://cosmos.network",
        },
      },
    ],
    Algorand: [
      {
        chain: "Algorand",
        description:
          "Algorand is a permissionless, pure proof-of-stake blockchain that ensures full participation, protection, and speed within a truly decentralized network.",
        button: {
          label: "Learn more",
          href: "https://www.algorand.com",
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
        "Staking is the process of actively participating in transaction validation (similar to mining) on a proof-of-stake (PoS) blockchain.",
    },
    {
      question: "What is a validator?",
      answer:
        "A validator is a participant in a PoS blockchain that is chosen to create new blocks and validate transactions.",
    },
    {
      question: "What is a nominator?",
      answer:
        "A nominator is a participant in a PoS blockchain that selects validators to nominate their stake for.",
    },
    {
      question: "What is a nominating committee?",
      answer:
        "A nominating committee is a group of nominators that are chosen to nominate validators in a PoS blockchain.",
    },
    {
      question: "What is a nominating committee?",
      answer:
        "A nominating committee is a group of nominators that are chosen to nominate validators in a PoS blockchain.",
    },
    {
      question: "What is a nominating committee?",
      answer:
        "A nominating committee is a group of nominators that are chosen to nominate validators in a PoS blockchain.",
    },
    {
      question: "What is a nominating committee?",
      answer:
        "A nominating committee is a group of nominators that are chosen to nominate validators in a PoS blockchain.",
    },
  ],
} satisfies FaqData;

const data = {
  staking: stakingData,
  faq: faqData,
};

export default data;
