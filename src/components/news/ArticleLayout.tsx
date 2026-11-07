import Container from "@/components/common/Container";
import NewsControls from "@/components/news/controls";
import ReleaseDate from "@/components/news/releaseDate";
import { fetchArticles } from "@/lib/news";
import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import { pageMetadata, siteUrl, organizationId } from "@/lib/seo";
import JsonLd from "@/components/common/JsonLd";

export async function articleMetadata(slug: string) {
  const current = (await fetchArticles()).data.find(
    (article) => article.slug === slug,
  );
  if (!current) notFound();
  return pageMetadata(current.href, current.title, current.description, {
    image: current.imgSrc,
    publishedTime: current.date.toISOString(),
  });
}

export async function ArticleLayout({
  children,
  slug,
  params,
}: {
  children: React.ReactNode;
  slug: string;
  params: Promise<{ index: string }>;
}) {
  const { index } = await params;
  const articles = await fetchArticles();

  const current = articles.data.find((article) => article.slug === slug);
  if (!current) notFound();
  if (index !== "1") permanentRedirect(current.href);
  const position = articles.data.indexOf(current);
  const previous = articles.data[position - 1];
  const next = articles.data[position + 1];

  return (
    <Container className="mx-auto max-w-[700px]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": siteUrl(current.href + "#article"),
          headline: current.title,
          description: current.description,
          datePublished: current.date.toISOString(),
          image: siteUrl(current.imgSrc),
          mainEntityOfPage: siteUrl(current.href),
          publisher: { "@id": organizationId },
        }}
      />
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
