import React from "react";
import { AboutUsData, FaqData, HeroData, StakingData } from "./types";
import FantomIcon from "@/assets/staking/fantom.svg";
import SonicIcon from "@/assets/staking/sonic.svg";
import JoystreamIcon from "@/assets/staking/joystream.svg";
import SwisstronikIcon from "@/assets/staking/swisstronik.svg";
import HyperbridgeIcon from "@/assets/staking/hyperbridge.svg";
import AcurastIcon from "@/assets/staking/acurast.svg";
import BifrostIcon from "@/assets/staking/bifrost.svg";
import CentrifugeIcon from "@/assets/staking/centrifuge.svg";
import HydrationIcon from "@/assets/staking/hydration.svg";
import InterlayIcon from "@/assets/staking/interlay.svg";
import KusamaIcon from "@/assets/staking/kusama.svg";
import MoonbeamIcon from "@/assets/staking/moonbeam.svg";
import PolkadotIcon from "@/assets/staking/polkadot.svg";
import ZeitgeistIcon from "@/assets/staking/zeitgeist.svg";
import EquitoIcon from "@/assets/staking/equito.png";
import KiltIcon from "@/assets/staking/kilt.png";
import AvailIcon from "@/assets/staking/avail.svg";
import VaraIcon from "@/assets/staking/vara.png";
import SoraIcon from "@/assets/staking/sora.png";
import ReefIcon from "@/assets/staking/reef.png";
import NeutaroIcon from "@/assets/staking/neutaro.png";
import CardanoIcon from "@/assets/staking/cardano.png";
import IkaIcon from "@/assets/staking/IKA.svg";
import EthereumIcon from "@/assets/staking/ethereum.png";
import BaseIcon from "@/assets/staking/base.png";
import ArbitrumIcon from "@/assets/staking/arbitrum.png";
import OptimismIcon from "@/assets/staking/optimism.png";
import EnergyWebIcon from "@/assets/staking/energyweb.png";
import PeaqIcon from "@/assets/staking/peaq.svg";
import WalrusIcon from "@/assets/staking/walrus.svg";
import FuelIcon from "@/assets/staking/fuel.png";
import SealIcon from "@/assets/staking/seal.svg";
import SomniaIcon from "@/assets/staking/somnia.svg";
import ZerogIcon from "@/assets/staking/zerog.png";
import zkVerifyIcon from "@/assets/staking/zkVerify.svg";
import BSCIcon from "@/assets/staking/BNB_chain.png";
import RootIcon from "@/assets/staking/Root_network.svg";
import HyperliquidIcon from "@/assets/staking/hyperliquid.svg";
import SolanaIcon from "@/assets/logos/solana.svg";
import BNBIcon from "@/assets/logos/bnb-chain.svg";
import SuiIcon from "@/assets/logos/sui.svg";

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
    label: "Status",
    href: "https://status.rubynodes.io",
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
    "Non-EVM": [
      {
        project: {
          img: {
            src: SuiIcon,
            alt: "Sui",
          },
          href: "https://sui.io/",
        },
        description:
          "Sui is a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move. It offers horizontal scaling and sub-second finality, making it ideal for on-chain use cases like DeFi, gaming, and real-world asset tokenization.",
        button: {
          label: "Learn more",
          href: "https://sui.io/",
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
          "Walrus is a high-performance decentralized storage network built on Sui, designed for fast reads, instant writes, and onchain verification. It enables AI, DeFi, and gaming applications to store and access data efficiently, outperforming traditional Web2 and Web3 storage solutions.",
        button: {
          label: "Learn more",
          href: "https://wal.app/",
        },
      },
      {
        project: {
          img: {
            src: IkaIcon,
            alt: "IKA",
          },
          href: "https://ika.xyz/",
        },
        description:
          "Ika is a sub-second multi-party computation network that enables secure, zero-trust cross-chain coordination on Sui. By leveraging breakthrough 2PC-MPC cryptography, Ika powers native asset control, decentralized custody, and instant interoperability across Bitcoin, Ethereum, and modern blockchains.",
        button: {
          label: "Learn more",
          href: "https://ika.xyz/",
        },
      },
      {
        project: {
          img: {
            src: SealIcon,
            alt: "Seal",
          },
          href: "https://seal.mystenlabs.com/",
        },
        description:
          "Seal is a decentralized secrets management and privacy protocol for Sui. Using on-chain policy-enforced threshold encryption, Seal enables secure storage, flexible access control, and privacy-preserving data sharing—empowering next-gen Web3 applications with true programmable privacy.",
        button: {
          label: "Learn more",
          href: "https://seal.mystenlabs.com/",
        },
      },
        {
          project: {
            img: {
              src: CardanoIcon,
              alt: "Cardano",
            },
            href: "https://cardano.org/",
          },
          description:
            "Cardano is a proof-of-stake blockchain platform that utilizes the UTXO model for secure and scalable transactions, aiming to power a range of decentralized applications.",
          button: {
            label: "Learn more",
            href: "https://cardano.org/",
          },
      },
    ],
    EVM: [
      {
        project: {
          img: {
            src: EthereumIcon,
            alt: "Ethereum",
          },
          href: "https://ethereum.org/",
        },
        description:
          "Ethereum is the most popular decentralized open-source blockchain platform with smart contract functionality.",
        button: {
          label: "Learn more",
          href: "https://ethereum.org/",
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
            src: MoonbeamIcon,
            alt: "Moonbeam",
          },
          href: "https://moonbeam.network/",
        },
        description:
          "Moonbeam is a Polkadot EVM-compatibile smart contract platform that makes it easy to build natively interoperable blockchain applications.",
        button: {
          label: "Learn more",
          href: "https://moonbeam.network/",
        },
      },
      {
        project: {
          img: {
            src: FuelIcon,
            alt: "Fuel",
          },
          href: "https://fuel.network/",
        },
        description:
          "Fuel Ignition is a high-performance Ethereum layer-2 rollup, designed for maximum speed and flexible throughput via its FuelVM, enabling home verification and scalable dApps.",
        button: {
          label: "Learn more",
          href: "https://fuel.network/",
        },
      },
      {
        project: {
          img: {
            src: SomniaIcon,
            alt: "Somnia",
          },
          href: "https://somnia.network/",
        },
        description:
          "Somnia is a high-performance EVM-compatibile Layer-1 blockchain designed for real-time, large-scale dApps. With 1 million TPS, sub-second finality, and ultra-low fees, Somnia unlocks mass adoption for gaming, DeFi, social, and AI applications.",
        button: {
          label: "Learn more",
          href: "https://somnia.network/",
        },
      },
      {
        project: {
          img: {
            src: ZerogIcon,
            alt: "0g",
          },
          href: "https://0g.ai/",
        },
        description:
          "0G, the largest AI L1 chain, is an infinitely scalable, fully composable, and purpose-built modular blockchain for decentralized AI applications, recently solidified by the launch of the Aristotle Mainnet, the world's first Decentralized AI Operating System (dAIOS).",
        button: {
          label: "Learn more",
          href: "https://0g.ai/",
        },
      },
    ],
    Polkadot: [
      {
        project: {
          img: {
            src: PolkadotIcon,
            alt: "Polkadot",
          },
          href: "https://polkadot.com/",
        },
        description:
          "Polkadot is the first layer-0 (L0) blockchain that provides shared security and secure interoperability to layer-1 (L1) blockchains. Those L1 blockchain attached to Polkadot are also called parachains as their transactions are processed in parallel by Polkadot.",
        button: {
          label: "Learn more",
          href: "https://polkadot.com/",
        },
      },
      {
        project: {
          img: {
            src: KusamaIcon,
            alt: "Kusama",
          },
          href: "https://kusama.network/",
        },
        description:
          "Kusama is a scalable network of specialized blockchains built using Substrate and nearly the same codebase as Polkadot. The network is an experimental development environment for teams who want to move fast and innovate on Kusama, or prepare for deployment on Polkadot.",
        button: {
          label: "Learn more",
          href: "https://kusama.network/",
        },
      },
      {
        project: {
          img: {
            src: CentrifugeIcon,
            alt: "Centrifuge",
          },
          href: "https://centrifuge.io/",
        },
        description:
          "Centrifuge is the infrastructure that facilitates the decentralized financing of real-world assets natively on-chain, creating a fully transparent market which allows borrowers and lenders to transact without unnecessary intermediaries.",
        button: {
          label: "Learn more",
          href: "https://centrifuge.io/",
        },
      },
      {
        project: {
          img: {
            src: HydrationIcon,
            alt: "Hydration",
          },
          href: "https://hydration.net/",
        },
        description:
          "Hydration is a cross-chain liquidity protocol and money market built on Substrate. Hydration unites swaps, lending and the Hollar stablecoin under the roof of a scalable appchain.",
        button: {
          label: "Learn more",
          href: "https://hydration.net/",
        },
      },
      {
        project: {
          img: {
            src: BifrostIcon,
            alt: "Bifrost",
          },
          href: "https://bifrost.app/",
        },
        description:
          "Bifrost is a liquid staking derivatives protocol that provides decentralized cross-chain liquidity for staked assets. By leveraging on the cross-consensus message (XCM) it can provide cross-chain liquid staking services for multiple chains.",
        button: {
          label: "Learn more",
          href: "https://bifrost.app/",
        },
      },
      {
        project: {
          img: {
            src: KiltIcon,
            alt: "Kilt",
          },
          href: "https://kilt.io/",
        },
        description:
          "KILT is a protocol for self-sovereign data and interoperability built on top of the permissionless KILT blockchain. The core component of KILT is a digital identity protocol for 1. generating and managing decentralized identifiers (DIDs), and 2. issuing and presenting digital verifiable credentials (VCs).",
        button: {
          label: "Learn more",
          href: "https://kilt.io/",
        },
      },
      {
        project: {
          img: {
            src: MoonbeamIcon,
            alt: "Kusama",
          },
          href: "https://moonbeam.network/",
        },
        description:
          "Moonbeam is a new Polkadot smart contract platform that makes it easy to build natively interoperable blockchain applications.",
        button: {
          label: "Learn more",
          href: "https://moonbeam.network/",
        },
      },
      {
        project: {
          img: {
            src: InterlayIcon,
            alt: "Interlay",
          },
          href: "https://interlay.io/",
        },
        description:
          "Interlay is a bridge between Bitcoin and other blockchains, allowing you to use your Bitcoin in DeFi applications without giving up control.",
        button: {
          label: "Learn more",
          href: "https://interlay.io/",
        },
      },
      {
        project: {
          img: {
            src: HyperbridgeIcon,
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
            src: AcurastIcon,
            alt: "Acurast",
          },
          href: "https://acurast.com/",
        },
        description:
          "Acurast is a permissionless, decentralized blockchain that acts as a serverless cloud for developers, enabling secure and scalable computations.",
        button: {
          label: "Learn more",
          href: "https://acurast.com/",
        },
      },

      {
        project: {
          img: {
            src: ZeitgeistIcon,
            alt: "Zeitgeist",
          },
          href: "https://zeitgeist.pm/",
        },
        description:
          "Zeitgeist is a blockchain designed for prediction markets, allowing users to bet on the outcomes of events and potentially profit from their foresight.",
        button: {
          label: "Learn more",
          href: "https://zeitgeist.pm/",
        },
      },
 {
        project: {
          img: {
            src: EnergyWebIcon,
            alt: "Energy Web X",
          },
          href: "https://energywebx.com/",
        },
        description:
          "Energy Web, a leader in blockchain for sustainability, offers a software-as-a-service platform acting as a secure marketplace for hundreds of clean energy applications.",
        button: {
          label: "Learn more",
          href: "https://www.energywebx.com/",
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
    ],
    Substrate: [
      {
        project: {
          img: {
            src: AvailIcon,
            alt: "Avail"
          },
          href: "https://www.availproject.org/"
        },
        description: "Avail is a blockchain project that offers a data availability (DA) solution, allowing secure and scalable verification for other blockchains.",
        button: {
          label: "Learn more",
          href: "https://www.availproject.org/"
        }
      },
      {
        project: {
          img: {
            src: VaraIcon,
            alt: "Vara",
          },
          href: "https://www.vara.network/",
        },
        description:
          "Vara is a blockchain built on Gear Protocol, enabling developers to create and deploy fast and scalable dApps.",
        button: {
          label: "Learn more",
          href: "https://www.vara.network/",
        },
      },
      {
        project: {
          img: {
            src: JoystreamIcon,
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
      {
        project: {
          img: {
            src: SoraIcon,
            alt: "Sora",
          },
          href: "https://www.sora.org/",
        },
        description:
          "Sora is an adaptive, non-debt based monetary framework designed to enable economic monetary stability for financially vulnerable countries with a focus on DeFi.",
        button: {
          label: "Learn more",
          href: "https://www.sora.org/",
        },
      },
      {
        project: {
          img: {
            src: ReefIcon,
            alt: "Reef",
          },
          href: "https://www.reef.io/",
        },
        description:
          "Reef is a fast, scalable blockchain for DeFi built with EVM compatibility, allowing easy porting of existing DeFi applications.",
        button: {
          label: "Learn more",
          href: "https://www.reef.io/",
        },
      },
      {
        project: {
          img: {
            src: zkVerifyIcon,
            alt: "zkVerify",
          },
          href: "https://zkverify.io/",
        },
        description:
          "zkVerify is the universal and ultra-fast verification layer designed to efficiently verify any zero-knowledge proofs at scale across all ecosystems with minimal latency and dramatically reduced cost.",
        button: {
          label: "Learn more",
          href: "https://zkverify.io/",
        },
      },
      {
project: {
img: {
src: RootIcon,
alt: "Root network",
},
href: "https://www.therootnetwork.com/",
},
description:
"Root Network is a core blockchain infrastructure designed for the open metaverse, prioritizing user-friendly onboarding and interoperability through a unified NFT runtime and an efficient multi-token economy.",
button: {
label: "Learn more",
href: "https://www.therootnetwork.com/",
},
},
    ],
    Cosmos: [
      {
        project: {
          img: {
            src: SwisstronikIcon,
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
      {
        project: {
          img: {
            src: NeutaroIcon,
            alt: "Neutaro"
          },
          href: "https://neutaro.com/",
        },
        description:
          "Neutaro aims to be a leader in ethical Web3 by crafting a comprehensive set of standards for blockchain technology.",
        button: {
          label: "Learn more",
          href: "https://neutaro.com/",
        },
      },
    ],
    Bridges: [
      {
        project: {
          img: {
            src: HyperbridgeIcon,
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
            src: EquitoIcon,
            alt: "Equito",
          },
          href: "https://equito.network/",
        },
        description:
          "Equito is a cross-chain messaging protocol for institutions and Web3 ecosystems to interoperate approaching real-time.",
        button: {
          label: "Learn more",
          href: "https://equito.network/",
        },
      },
    ],
    RPCs: [
      {
        project: {
          img: {
            src: EthereumIcon,
            alt: "Ethereum",
          },
          href: "https://ethereum.org/",
        },
        description:
          "Ethereum is the most popular decentralized open-source blockchain platform with smart contract functionality.",
        button: {
          label: "Learn more",
          href: "https://ethereum.org/",
        },
      },
      {
        project: {
          img: {
            src: SolanaIcon,
            alt: "Solana",
          },
          href: "https://solana.com/",
        },
        description:
          "Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale.",
        button: {
          label: "Learn more",
          href: "https://solana.com/",
        },
      },
      {
        project: {
          img: {
            src: BNBIcon,
            alt: "BNB Chain",
          },
          href: "https://www.bnbchain.org/",
        },
        description:
          "BNB Chain is a blockchain platform for building decentralized applications with high throughput and low transaction costs.",
        button: {
          label: "Learn more",
          href: "https://www.bnbchain.org/",
        },
      },
      {
        project: {
          img: {
            src: HyperliquidIcon,
            alt: "Hyperliquid",
          },
          href: "https://hyperliquid.xyz/",
        },
        description:
          "Hyperliquid is a high-performance L1 blockchain built from the ground up, designed for decentralized perpetual trading with an on-chain order book and native matching engine.",
        button: {
          label: "Learn more",
          href: "https://hyperliquid.xyz/",
        },
      },
      {
        project: {
          img: {
            src: BaseIcon,
            alt: "Base",
          },
          href: "https://base.org/",
        },
        description:
          "Base is an Ethereum L2 blockchain built for speed and affordability, focusing on Coinbase products and an open developer ecosystem.",
        button: {
          label: "Learn more",
          href: "https://base.org/",
        },
      },
      {
        project: {
          img: {
            src: BSCIcon,
            alt: "BSC chain",
          },
          href: "https://www.bnbchain.org/",
        },
        description:
          "BNB Chain is a high-performance ecosystem for dApps, DeFi, and Web3, developed by Binance for faster, lower-cost transactions.",
        button: {
          label: "Learn more",
          href: "https://www.bnbchain.org/",
        },
      },
      {
        project: {
          img: {
            src: FuelIcon,
            alt: "Fuel",
            src: ArbitrumIcon,
            alt: "Arbitrum",
          },
          href: "https://arbitrum.foundation/",
        },
        description:
          "Arbitrum is a L2 scaling solution for Ethereum, aiming to boost transaction speed and cut costs while maintaining Ethereum's security.",
        button: {
          label: "Learn more",
          href: "https://arbitrum.foundation/",
        },
      },
      {
        project: {
          img: {
            src: OptimismIcon,
            alt: "Optimism",
          },
          href: "https://optimism.io/",
        },
        description:
          "Optimism is an Ethereum L2 scaling solution using optimistic rollups for faster and cheaper transactions.",
        button: {
          label: "Learn more",
          href: "https://optimism.io/",
        },
      },
      {
        project: {
          img: {
            src: PolkadotIcon,
            alt: "Polkadot",
          },
          href: "https://polkadot.network/",
        },
        description:
          "Polkadot and its system chains such as AssetHub, BridgeHub or Collectives.",
        button: {
          label: "Learn more",
          href: "https://polkadot.network/",
        },
      },
    ]
  },
} satisfies StakingData;

const faqData = {
  title: "FAQ",
  items: [
    {
      question: "What is staking?",
      answer:
        "Staking is a process of locking your tokens (be it ADA, DOT or FTM) and receiving rewards for doing so. At the same time, staking boost the security of the underlying network.",
    },
    {
      question: "Do Ruby Nodes take any custody of user's funds?",
      answer:
        "No, all of our service are fully non-custodial and we can't touch delegator's funds at any point of time.",
    },
    {
      question: "Why should you trust Ruby Nodes as a node operator?",
      answer:
        "We started in as early as 2020 in the Polkadot ecosystem - since then we have built a huge community, became validators on almost all parachains and joined various validator DAOs. Since then, we have expanded to other ecosystems like Ethereum, Cardano or Fantom. This is what we love and we are here to stay!",
    },
    {
      question: "How do you ensure a quality of your service?",
      answer:
        "We run all the validators on the best hardware possible, we also employ backups and strict monitoring that ensures maximum uptime. Ruby Nodes also optimize heavily for performance, therefore you will usually find us among the nodes with highest APR.",
    },
    {
      question: "What do you do with the staking rewards?",
      answer:
        "We heavily invest into the community activities like organizing conferences, publishing educational articles or promoting the cryptocurrency world. We believe that validators are a firm part of crypto community and we should do our best to help the projects we operate on to thrive!",
    },
    {
      question: "Why should you support Ruby Nodes as a validator?",
      answer:
        "On one hand, we bring the high-quality of service together with one of the highest APR on our validators in the ecosystem. On the other, you will also help to decentralize projects we support and their ecocystem by supporting a community validator - which, in turn, will support the ecosystem itself. We are proud to support Polkadot and other ecosystems from the early days and we definitely want to give something back in return.",
    },
  ],
} satisfies FaqData;

const successStoriesData = [
  {
    title: "IBP RPC infrastructure",
    description: `Infrastructure Builders Programme is an initiative that aims to ultimately decentralize Polkadot network\`s infrastructure (mainly RPCs and bootnodes) by using dedicated HW owned by community members. Currently we have two bare metal machines housed in New Zealand that are serving Oceania region and hosting 34 load-balanced RPC nodes together with 17 bootnodes.
      We run on AMD EPYC 9554 64-core machines with 512 GB of RAM 4x 3.84 NVMe SSD drives.
      Thanks to this setup, IBP is the fastest RPC provider  (with latency 50ms at most) while being the only one which is truly global, decentralized and geo-distributed.`,
  },
  {
    title: "Avail genesis validator and RPC provider",
    description: "Thanks to our efforts during Goldberg testnet and Clash of Nodes campaign, we became one of the partners of Avail. We helped the project with technical issues, promoted it on our media and we were also one of the RPC providers during the testnet which translated into running mainnet RPC as well due to our performance. We are proud to become one of the genesis operators and firm partners of the Avail project.",
  },
];

const indexData = {
  staking: stakingData,
  faq: faqData,
  hero: heroData,
  aboutUs: aboutUsData,
  successStories: successStoriesData,
};

export default indexData;
