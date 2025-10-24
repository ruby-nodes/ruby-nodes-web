"use client";

import { useState } from "react";
import StakingCards from "./StakingCards";
import Container from "../common/Container";
import indexData from "@/data";
import Button from "../common/Button";

// Custom type for validator services page
type ValidatorChain = "EVM" | "Sui" | "Substrate";
const validatorChains: ValidatorChain[] = ["EVM", "Sui", "Substrate"];

// Filter the staking data for validator services
const getFilteredItems = () => {
  const allItems = indexData.staking.items;
  
  return {
    // EVM: Ethereum, Sonic, 0G, Centrifuge, Somnia, Moonbeam
    EVM: allItems.EVM.filter(item => 
      ["Ethereum", "Sonic", "0g", "Somnia", "Moonbeam"].includes(item.project.img.alt)
    ).concat(
      allItems.Polkadot.filter(item => 
        ["Centrifuge"].includes(item.project.img.alt)
      )
    ).sort((a, b) => {
      // Sort to put Ethereum first
      const order = ["Ethereum", "Sonic", "0g", "Centrifuge", "Somnia", "Moonbeam"];
      return order.indexOf(a.project.img.alt) - order.indexOf(b.project.img.alt);
    }),
    // Sui: Sui, Seal, Walrus, IKA
    Sui: allItems["Non-EVM"].filter(item => 
      ["Sui", "Seal", "Walrus", "IKA"].includes(item.project.img.alt)
    ),
    // Substrate: Polkadot, Peaq, Hydration, Energy Web X, Acurast, zkVerify, Avail
    Substrate: [
      ...allItems.Polkadot.filter(item => 
        ["Polkadot", "Hydration", "Acurast", "Peaq"].includes(item.project.img.alt)
      ),
      ...allItems.EVM.filter(item => 
        ["Energy Web X"].includes(item.project.img.alt)
      ),
      ...allItems.Substrate.filter(item => 
        ["zkVerify", "Avail"].includes(item.project.img.alt)
      )
    ]
  };
};

const filteredItems = getFilteredItems();

export default function ValidatorStaking() {
  const [selected, setSelected] = useState<ValidatorChain>("EVM");
  
  return (
    <div className="bg-c-bg relative">
      <Container className="flex flex-col gap-[3.8rem]">
        <h2 className="text-c-text font-bold text-xl">
          Ecosystems we support
        </h2>
        <div className="bg-c-container text-c-text rounded-md ~py-3.5/4 font-inter w-full ~px-3.5/8">
          <div className="flex gap-5 flex-wrap">
            {validatorChains.map((chain) => (
              <Button
                key={chain}
                label={chain}
                variant="primary"
                size="small"
                className={chain === selected ? "pointer-events-none" : ""}
                active={chain === selected}
                onClick={() => setSelected(chain)}
              />
            ))}
          </div>
        </div>
        <StakingCards cards={filteredItems[selected]} />
      </Container>
    </div>
  );
}
