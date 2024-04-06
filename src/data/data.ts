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

const data = {
  staking: stakingData,
};

export default data;
