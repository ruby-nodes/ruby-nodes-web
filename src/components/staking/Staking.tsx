"use client";

import { useState } from "react";
import Subheading from "../common/Subheading";
import TabFilter from "./TabFilter";
import { Chain } from "@/lib/common";
import data from "@/data/data";
import StakingCards from "./StakingCards";
import Container from "../common/Container";
import ScrollAnchor from "../common/ScrollAnchor";

const { title, tabFilter, items } = data.staking;

export default function Staking() {
  const [selected, setSelected] = useState<Chain>("Polkadot");
  return (
    <section className="bg-c-bg pb-40 relative">
      <ScrollAnchor id="staking" />
      <Container className="flex flex-col gap-[3.8rem]">
        <Subheading title={title} />
        <TabFilter
          label={tabFilter.label}
          selected={selected}
          setSelected={setSelected}
        />
        <StakingCards cards={items[selected]} />
      </Container>
    </section>
  );
}
