import Container from "../common/Container";
import Subheading from "../common/Subheading";
import NewsCard from "./newsCard";
import { getNewsMetadata } from "@/lib/news";

export default function News() {
  const lastThreeNews = getNewsMetadata()
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);
  return (
    <section className="bg-c-bg pt-[8.4rem] pb-40">
      <Container className="flex flex-col gap-[3.8rem]">
        <Subheading title={"News"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lastThreeNews.map((news) => (
            <NewsCard key={news.title} {...news} />
          ))}
        </div>
      </Container>
    </section>
  );
}
