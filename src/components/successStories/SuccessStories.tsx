import indexData from "@/data";
import SuccessStoryCard from "./SuccessStoryCard";
import ScrollAnchor from "../common/ScrollAnchor";
import Container from "../common/Container";

export default function SuccessStories() {
  return (
    <section className="relative border-y border-c-menu-border bg-c-container py-20 text-c-text">
      <ScrollAnchor id="success-stories" />
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-c-primary-text">Selected engagements</p>
          <h2 className="mb-4 text-xl font-bold text-c-text">Infrastructure in production</h2>
          <p className="leading-6 text-c-text-inactive">Examples of the validator, RPC, storage and protocol infrastructure Ruby Nodes operates across production networks.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {indexData.successStories.map((story) => (
            <SuccessStoryCard key={story.title} {...story} />
          ))}
        </div>
      </Container>
    </section>
  );
}
