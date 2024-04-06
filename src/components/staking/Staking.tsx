"use client";

import { useState } from "react";
import Subheading from "../common/Subheading";
import TabFilter from "./TabFilter";
import { Chain } from "@/lib/common";
import data from "@/data/data";
import StakingCards from "./StakingCards";

const { title, tabFilter, items } = data.staking;

export default function Staking() {
  const [selected, setSelected] = useState<Chain>("Polkadot");
  return (
    <section className="flex flex-col bg-c-bg gap-[3.8rem]">
      <Subheading title={title} />
      <TabFilter
        label={tabFilter.label}
        selected={selected}
        setSelected={setSelected}
      />
      <StakingCards cards={items[selected]} />
    </section>
  );
}
