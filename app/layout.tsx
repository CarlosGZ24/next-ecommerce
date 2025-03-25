import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Menu from "./components/ui/Header";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "A single product ecommerce store made in Next",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.className} tracking-[-0.04em] antialiased`}
    >
      <body>
        <header>
          <Menu />
        </header>
        {children}
      </body>
    </html>
  );
}
