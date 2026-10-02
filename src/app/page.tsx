import AboutUs from "@/components/aboutUs/aboutUs";
import FAQ from "@/components/faq/Faq";
import Hero from "@/components/hero/hero";
import News from "@/components/news/news";
import ProminentEcosystems from "@/components/staking/ProminentEcosystems";
import SuccessStories from "@/components/successStories/SuccessStories";
import { Metadata } from "next";
import InstitutionalOverview from "@/components/institutional/InstitutionalOverview";

export const metadata: Metadata = {
  title: "Institutional Blockchain Infrastructure | Ruby Nodes",
  description:
    "Dedicated validator, RPC and protocol infrastructure with multi-region deployment, continuous monitoring and service-level commitments.",
};

export default function Home() {
  return (
    <div className=" bg-c-bg text-c-text">
      <Hero />
      <InstitutionalOverview />
      <SuccessStories />
      <ProminentEcosystems />
      <FAQ />
      <AboutUs />
      <News />
    </div>
  );
}
