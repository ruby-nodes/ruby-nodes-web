"use client";

import { useState } from "react";
import StakingCards from "./StakingCards";
import Container from "../common/Container";
import indexData from "@/data";
import Button from "../common/Button";

// Custom type for validator services page
type ValidatorChain = "EVM" | "Sui" | "Substrate" | "Others";
const validatorChains: ValidatorChain[] = ["EVM", "Sui", "Substrate", "Others"];

// Filter the staking data for validator services
const getFilteredItems = () => {
  const allItems = indexData.staking.items;
  
  return {
    // EVM: Ethereum, Pharos, Sonic, 0G
    EVM: allItems.EVM.filter(item => 
      ["Ethereum", "Pharos", "Sonic", "0g"].includes(item.project.img.alt)
    ),
    // Sui: Sui, Walrus, Ika, Seal
    Sui: allItems["Non-EVM"].filter(item => 
      ["Sui", "Walrus", "IKA", "Seal"].includes(item.project.img.alt)
    ),
    // Substrate: Polkadot, Hydration, Acurast, Energy Web, peaq, Avail, zkVerify
    Substrate: [
      ...allItems.Polkadot.filter(item => 
        ["Polkadot", "Hydration", "Acurast", "Energy Web", "peaq", "Avail", "zkVerify"].includes(item.project.img.alt)
      ),
      ...allItems.Substrate.filter(item => 
        ["Hydration", "Acurast", "peaq", "Avail", "zkVerify"].includes(item.project.img.alt)
      )
    ],
    // Others: Canton, Espresso
    Others: allItems.Others
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
