import AboutUs from "@/components/aboutUs/aboutUs";
import FAQ from "@/components/faq/Faq";
import Hero from "@/components/hero/hero";
import News from "@/components/news/news";
import Staking from "@/components/staking/Staking";

export default function Home() {
  return (
    <div className=" bg-c-bg text-c-text">
      <Hero />
      <Staking />
      <FAQ />
      <News />
      <AboutUs />
    </div>
  );
}
