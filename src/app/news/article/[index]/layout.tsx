import Container from "@/components/common/Container";
import NewsControls from "@/components/news/controls";
import ReleaseDate from "@/components/news/releaseDate";
import { FetchArticlesResponse, fetchArticles } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function findArticles(articles: FetchArticlesResponse, index: number) {
  return {
    current: articles.data.find((article) => article.index === index),
    previous: articles.data.find((article) => article.index === index - 1),
    next: articles.data.find((article) => article.index === index + 1),
  };
}

export default async function NewsLayout({
  children,
  params: { index },
}: Readonly<{
  children: React.ReactNode;
  params: { index: string };
}>) {
  const articles = await fetchArticles();

  const { current, previous, next } = findArticles(
    articles,
    parseInt(index, 10)
  );

  if (!current) {
    return notFound();
  }

  return (
    <Container className="mx-auto max-w-[700px]">
      <div className="flex flex-col gap-4">
        <Image
          src={current.imgSrc}
          alt={current.title}
          width={700}
          height={290}
          className="object-cover rounded-md mt-20"
        />
        <div>
          <ReleaseDate date={current.date} />
          <h1 className="~text-xl/xl-clamped font-bold  leading-[1.2]">
            {current.title}
          </h1>
          <p className="text-md font-inter ">{current.description}</p>
        </div>
      </div>
      <Divider />
      <article className=" min-h-screen w-full">
        <div className="prose prose-invert font-inter prose-p:font-inter lg:prose-lg">
          {children}
        </div>
        <Divider />
        <NewsControls previous={previous} next={next} />
      </article>
    </Container>
  );
}

function Divider() {
  return (
    <>
      <div className="h-[1rem]" />
      <div className="h-[1px] w-full bg-c-primary" />
      <div className="h-[1rem]" />
    </>
  );
}
