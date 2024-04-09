import { Rubik } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={twMerge(
          rubik.className,
          "bg-c-bg text-c-text overflow-x-hidden"
        )}
      >
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
