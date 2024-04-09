import Container from "@/components/common/Container";
import ReleaseDate from "@/components/news/releaseDate";
import { fetchArticles } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsLayout({
  children,
  params: { index },
}: Readonly<{
  children: React.ReactNode;
  params: { index: string };
}>) {
  const articles = await fetchArticles();
  const article = articles.data.find(
    (article) => article.index === parseInt(index, 10)
  );

  if (!article) {
    return notFound();
  }

  return (
    <Container className="mx-auto max-w-[700px]">
      <div className="flex flex-col gap-4">
        <Image
          src={article.imgSrc}
          alt={article.title}
          width={700}
          height={290}
          className="object-cover rounded-md mt-20"
        />
        <div>
          <ReleaseDate date={article.date} />
          <h1 className="~text-xl/xl-clamped font-bold  leading-[1.2]">
            {article.title}
          </h1>
          <p className="text-md font-inter ">{article.description}</p>
        </div>
        <div className="h-[1px] w-full bg-c-primary" />
        <div className="h-[1px]" />
      </div>
      <article className="prose prose-invert font-inter prose-headings: lg:prose-lg min-h-screen w-full">
        {children}
      </article>
    </Container>
  );
}
