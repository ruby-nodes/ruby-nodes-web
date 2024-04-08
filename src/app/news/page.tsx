import Container from "@/components/common/Container";
import NewsCard from "@/components/news/newsCard";
import { getNewsMetadata } from "@/lib/news";

export default function NewsPage() {
  const news = getNewsMetadata();
  return (
    <Container className="bg-c-bg min-h-screen">
      <h1 className="font-rubik ~text-xl-clamped/xl font-bold pt-20 pb-8 text-center w-full">
        News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((news) => (
          <NewsCard key={news.title} {...news} />
        ))}
      </div>
    </Container>
  );
}
