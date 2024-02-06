import BackgroundImage from "@/components/BackgroundImage";
import Header from "@/components/Header";
import "@/styles/global.scss";
import type { Metadata } from "next";
import { Fira_Sans, Montserrat_Alternates } from "next/font/google";
import localFont from "next/font/local";

const AlternatesItalic = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500"],
  style: "italic",
  variable: "--font-alternates",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira",
});

const foobarPro = localFont({
  src: "../styles/fonts/foobar_pro/FoobarPro-Regular.ttf.woff",
  weight: "400",
  style: "normal",
  variable: "--font-foobar",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${foobarPro.variable} ${AlternatesItalic.variable}`}
      >
        <Header />
        {children}
        <BackgroundImage />
      </body>
    </html>
  );
}
