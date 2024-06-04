import indexData from "@/data";
import Subheading from "../common/Subheading";
import SuccessStoryCard from "./SuccessStoryCard";
import ScrollAnchor from "../common/ScrollAnchor";

export default function SuccessStories() {
  return (
    <section className="bg-c-container text-c-text mt-20  mx-auto pb-12 relative">
      <ScrollAnchor id="success-stories" />
      <div className="container flex justify-center items-center mx-auto">
        {indexData.successStories.map((story) => (
          <SuccessStoryCard key={story.title} {...story} />
        ))}
      </div>
    </section>
  );
}
