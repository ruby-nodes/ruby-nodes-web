import ScrollAnchor from "../common/ScrollAnchor";
import TextBlock from "../common/TextBlock";
import AboutUsBanner from "./aboutUsBanner";

export default function AboutUs() {
  return (
    <section className="relative">
      <ScrollAnchor id="#about-us" />
      <div className="flex flex-col lg:flex-row">
        <AboutUsBanner />
        <TextBlock
          className="pt-[300px]"
          title="About us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis et nulla et imperdiet. Sed vitae tincidunt elit, pulvinar laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra,"
          cta={{
            href: "#",
            label: "Contact Us",
          }}
        />
      </div>
    </section>
  );
}
