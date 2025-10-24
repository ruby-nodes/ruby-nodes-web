"use client";

import Container from "../common/Container";
import ScrollAnchor from "../common/ScrollAnchor";
import StakingCard from "./StakingCard";
import SuiLogo from "@/assets/logos/sui.svg";
import SonicIcon from "@/assets/staking/sonic.svg";
import PolkadotIcon from "@/assets/staking/polkadot.svg";
import ZerogIcon from "@/assets/staking/zerog.png";
import WalrusIcon from "@/assets/staking/walrus.svg";
import PeaqIcon from "@/assets/staking/peaq.svg";

const ecosystems = [
  {
    project: {
      img: {
        src: SuiLogo,
        alt: "Sui",
      },
      href: "https://sui.io/",
    },
    description:
      "Sui is a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move.",
    button: {
      label: "Learn more",
      href: "https://sui.io/",
    },
  },
  {
    project: {
      img: {
        src: SonicIcon,
        alt: "Sonic",
      },
      href: "https://soniclabs.com/",
    },
    description:
      "Sonic, previously Fantom, is a highest-performing EVM L1 blockchain platform with low transaction costs. It offers DeFi, NFTs, and GameFi applications.",
    button: {
      label: "Learn more",
      href: "https://soniclabs.com/",
    },
  },
  {
    project: {
      img: {
        src: PolkadotIcon,
        alt: "Polkadot",
      },
      href: "https://polkadot.com/",
    },
    description:
      "Polkadot is the first layer-0 (L0) blockchain that provides shared security and secure interoperability to layer-1 (L1) blockchains.",
    button: {
      label: "Learn more",
      href: "https://polkadot.com/",
    },
  },
  {
    project: {
      img: {
        src: ZerogIcon,
        alt: "0G",
      },
      href: "https://0g.ai/",
    },
    description:
      "0G, the largest AI L1 chain, is an infinitely scalable, fully composable, and purpose-built modular blockchain for decentralized AI applications.",
    button: {
      label: "Learn more",
      href: "https://0g.ai/",
    },
  },
  {
    project: {
      img: {
        src: WalrusIcon,
        alt: "Walrus",
      },
      href: "https://wal.app/",
    },
    description:
      "Walrus is a high-performance decentralized storage network built on Sui, designed for fast reads, instant writes, and onchain verification.",
    button: {
      label: "Learn more",
      href: "https://wal.app/",
    },
  },
  {
    project: {
      img: {
        src: PeaqIcon,
        alt: "Peaq",
      },
      href: "https://peaq.network/",
    },
    description:
      "Peaq Network is a layer-1 blockchain specifically built to support Decentralized Physical Infrastructure Networks (DePINs) and the broader Economy of Things (EoT).",
    button: {
      label: "Learn more",
      href: "https://peaq.network/",
    },
  },
];

export default function ProminentEcosystems() {
  return (
    <section className="bg-c-bg ~pb-56/40 relative">
      <ScrollAnchor id="staking" />
      <Container className="flex flex-col gap-[3.8rem]">
        <h2 className="text-c-text font-bold text-xl text-center">
          Prominent ecosystems we support
        </h2>
        <div className="grid grid-cols-1 ~gap-7/14 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystems.map((ecosystem, index) => (
            <StakingCard key={index} {...ecosystem} />
          ))}
        </div>
      </Container>
    </section>
  );
}
