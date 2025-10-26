import indexData from "@/data";
import Subheading from "../common/Subheading";
import SuccessStoryCard from "./SuccessStoryCard";
import ScrollAnchor from "../common/ScrollAnchor";

export default function SuccessStories() {
  return (
    <section className="bg-c-container text-c-text mt-20 mx-auto pb-12 relative">
      <ScrollAnchor id="success-stories" />
      <div className="container mx-auto px-4">
        <h2 className="text-c-text font-bold text-xl text-center mb-8 pt-4">Success stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {indexData.successStories.map((story) => (
            <SuccessStoryCard key={story.title} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}
