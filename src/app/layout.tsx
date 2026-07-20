import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans, IBM_Plex_Mono, Merriweather } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "NEBCO Nepal | Construction, Real Estate Consulting & Development",
  description:
    "NEBCO provides construction, real estate development consulting, project management and selective development partnerships in Nepal—from land to landmark.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlex.variable} ${ibmMono.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory-light text-arch-black">
        <Header />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
