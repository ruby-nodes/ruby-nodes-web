import "@fontsource-variable/rubik";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";

import { siteOrigin, siteUrl, organizationId, isPreview } from "@/lib/seo";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  ...(isPreview ? { robots: { index: false, follow: true } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="overflow-x-hidden scroll-auto lg:scroll-smooth overscroll-none"
    >
      <body className="bg-c-bg font-rubik text-c-text overflow-x-hidden">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: "Ruby Nodes",
                url: siteOrigin,
                sameAs: ["https://x.com/RubyNodes"],
              },
              {
                "@type": "WebSite",
                "@id": siteUrl("/#website"),
                name: "Ruby Nodes",
                url: siteOrigin,
                publisher: { "@id": organizationId },
                inLanguage: "en",
              },
            ],
          }}
        />
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
