"use client";

import StakingCards from "./StakingCards";
import Container from "../common/Container";
import indexData from "@/data";
import Link from "next/link";

// Filter the staking data for RPCs
const getFilteredItems = () => {
  const allItems = indexData.staking.items;
  
  // RPCs: Ethereum, Solana, BNB Chain, Hyperliquid, Base, Arbitrum, Optimism, Polkadot, Peaq, 0g
  return allItems.RPCs.filter(item => 
    ["Ethereum", "Solana", "BNB Chain", "Hyperliquid", "Base", "Arbitrum", "Optimism", "Polkadot", "Peaq", "0g"].includes(item.project.img.alt)
  );
};

const filteredItems = getFilteredItems();

export default function RPCStaking() {
  return (
    <div className="bg-c-bg relative">
      <Container className="flex flex-col gap-[3.8rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-c-text font-bold text-xl">
            RPCs we support
          </h2>
          <Link 
            href="/peaq-rpc" 
            className="text-c-primary hover:underline text-sm font-semibold"
          >
            Show more →
          </Link>
        </div>
        <StakingCards cards={filteredItems} />
      </Container>
    </div>
  );
}
