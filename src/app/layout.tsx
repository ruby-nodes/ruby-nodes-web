import "@fontsource-variable/rubik";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";

const protocol = process.env.NEXT_PUBLIC_PROTOCOL ?? "https";
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
  ? `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden scroll-auto lg:scroll-smooth overscroll-none"
    >
      <body
        className="bg-c-bg font-rubik text-c-text overflow-x-hidden"
      >
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
