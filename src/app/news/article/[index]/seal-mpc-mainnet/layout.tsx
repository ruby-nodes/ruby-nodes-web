import {
  ArticleLayout,
  articleMetadata,
} from "@/components/news/ArticleLayout";

export function generateMetadata() {
  return articleMetadata("seal-mpc-mainnet");
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ index: string }>;
}) {
  return (
    <ArticleLayout slug="seal-mpc-mainnet" params={params}>
      {children}
    </ArticleLayout>
  );
}
