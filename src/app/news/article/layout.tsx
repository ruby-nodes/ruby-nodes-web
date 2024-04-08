import Container from "@/components/common/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <article className="prose prose-invert font-inter prose-headings:font-rubik lg:prose-lg min-h-screen mt-8 w-full mx-auto max-w-[900px]">
        {children}
      </article>
    </Container>
  );
}