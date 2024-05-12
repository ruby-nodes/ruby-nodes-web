import AboutUs from "@/components/aboutUs/aboutUs";
import FAQ from "@/components/faq/Faq";
import Hero from "@/components/hero/hero";
import News from "@/components/news/news";
import Staking from "@/components/staking/Staking";
import SuccessStories from "@/components/successStories/SuccessStories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruby Nodes",
  description:
    "Ruby Nodes is a community of validators and delegators that are building the future of Web3.0. Stake with us to earn rewards and support the networks.",
};

export default function Home() {
  return (
    <div className=" bg-c-bg text-c-text">
      <Hero />
      <Staking />
      <FAQ />
      <News />
      <AboutUs />
      <SuccessStories />
    </div>
  );
}
