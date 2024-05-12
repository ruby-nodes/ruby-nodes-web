import indexData from "@/data";
import Subheading from "../common/Subheading";
import SuccessStoryCard from "./SuccessStoryCard";

export default function SuccessStories() {
  return (
    <section className="bg-c-bg text-c-text mt-20 container mx-auto pb-12">
      <Subheading title="Success Stories" />
      <div className="grid md:grid-cols-2 gap-8 mt-7">
        {indexData.successStories.map((story) => (
          <SuccessStoryCard key={story.title} {...story} />
        ))}
      </div>
    </section>
  );
}
