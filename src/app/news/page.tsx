import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import NewsCard from "@/components/news/newsCard";
import { fetchArticles } from "@/lib/news";
import Link from "next/link";

type NewsPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const limit = parseInt(searchParams["limit"] || "9", 10);
  const { data, total } = await fetchArticles({ limit });

  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-center w-full">
      <h1 className="font-rubik ~text-xl-clamped/xl font-bold pt-20 pb-8 text-center w-full">
        News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {data.map((news) => (
          <NewsCard key={news.title} {...news} />
        ))}
      </div>
      {total > limit && (
        <Link href={`/news?limit=${limit + 6}`} scroll={false}>
          <Button variant="secondary" label="Load more" className="mt-12" />
        </Link>
      )}
    </Container>
  );
}
