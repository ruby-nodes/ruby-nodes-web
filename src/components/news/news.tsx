import Link from "next/link";
import Container from "../common/Container";
import Subheading from "../common/Subheading";
import NewsCard from "./newsCard";
import { getArticles } from "@/lib/news";
import Button from "../common/Button";

export default async function News() {
  const { data } = getArticles({ limit: 3 });

  return (
    <section className="bg-c-bg pt-[8.4rem] pb-10">
      <Container className="flex flex-col gap-[3.8rem] items-center">
        <Subheading title={"News"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7 w-full">
          {data.map((news) => (
            <NewsCard key={news.title} {...news} />
          ))}
        </div>
        <Link href="/news">
          <Button
            variant="secondary"
            label="View All"
            className="mt-0 lg:mt-8"
          />
        </Link>
      </Container>
    </section>
  );
}
