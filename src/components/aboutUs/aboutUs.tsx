import indexData from "@/data";
import Container from "../common/Container";
import ScrollAnchor from "../common/ScrollAnchor";
import TextBlock from "../common/TextBlock";
import AboutUsBanner from "./aboutUsBanner";

const { aboutUs } = indexData;

export default function AboutUs() {
  return (
    <section className="relative">
      <Container>
        <ScrollAnchor id="about-us" />
        <div className="flex flex-col lg:flex-row ">
          <AboutUsBanner />
          <TextBlock
            className="pt-16 lg:~pt-[0rem]/[14.75rem] lg:max-w-[50%]"
            {...aboutUs}
          />
        </div>
      </Container>
    </section>
  );
}
