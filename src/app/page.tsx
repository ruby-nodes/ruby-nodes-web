import AboutUs from "@/components/aboutUs/aboutUs";
import FAQ from "@/components/faq/Faq";
import Hero from "@/components/hero/hero";
import News from "@/components/news/news";
import Staking from "@/components/staking/Staking";

export default function Home() {
  return (
    <div className=" bg-c-bg text-c-text">
      {/* {allMetadata.map((metadata) => (
        <article key={metadata.title} className="mb-12">
          <h2 className="text-2xl font-bold">{metadata.title}</h2>
          <p className="text-c-text-inactive">{metadata.date.toDateString()}</p>
          <p>{metadata.description}</p>
        </article>
      ))} */}
      <Hero
        title={
          <span>
            Boundless Networks,
            <br />
            Flawless Rubies
          </span>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis et nulla et imperdiet. Sed vitae tincidunt elit, pulvinar laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra,"
        cta={{
          href: "#",
          title: "Get Started",
        }}
      />
      <Staking />
      <FAQ />
      <News />
      <AboutUs />
    </div>
  );
}
