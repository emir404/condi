import type { Metadata } from "next";
import { Manrope, Cormorant, Grenze_Gotisch } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { getCms } from "@/lib/cms";
import * as defaults from "@/lib/defaults";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Heading serif: Cormorant — a high-contrast Garamond display cut. Light,
// sharp and unmistakably Viennese next to the blackletter wordmark, where a
// chunky slab would fight it.
const cormorant = Cormorant({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Wordmark face: the café's storefront still carries its historic red
// blackletter-script channel letters. Grenze Gotisch is that Konditorei
// lettering reimagined as a contemporary variable fraktur — warm, upright,
// unmistakably German without tipping into Bierkeller pastiche.
const grenzeGotisch = Grenze_Gotisch({
  variable: "--font-logo",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getCms();
  const settings = await payload.findGlobal({ slug: "site-settings" });
  return {
    title: settings.meta?.title ?? defaults.settings.meta.title,
    description: settings.meta?.description ?? defaults.settings.meta.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${cormorant.variable} ${grenzeGotisch.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
