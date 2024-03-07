import Header from "@/components/Header";
import "@/styles/globals.scss";
import type { Metadata, Viewport } from "next";
import {
  Montserrat_Alternates,
  Roboto_Mono,
  Space_Grotesk,
} from "next/font/google";

const AlternatesItalic = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: "italic",
  variable: "--font-alternates",
});

const openSans = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-openSans",
});

const titleFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-titleFont",
});

export const metadata: Metadata = {
  title: "Thibault Dilman Portfolio",
  description: "Generated with Next.Js",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${titleFont.variable} ${AlternatesItalic.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
