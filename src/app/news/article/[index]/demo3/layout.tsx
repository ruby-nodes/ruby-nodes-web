import {
  ArticleLayout,
  articleMetadata,
} from "@/components/news/ArticleLayout";

export function generateMetadata() {
  return articleMetadata("demo3");
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ index: string }>;
}) {
  return (
    <ArticleLayout slug="demo3" params={params}>
      {children}
    </ArticleLayout>
  );
}
