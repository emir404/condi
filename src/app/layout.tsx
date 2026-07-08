import type { Metadata } from "next";
import { Manrope, Cormorant, Grenze_Gotisch } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Café Steinhusen — das norddeutsche Wiener Caféhaus | Lübeck",
  description:
    "Café Steinhusen in Lübeck: über 30 Tortensorten aus eigener Herstellung, Kleingebäck, Confiserie, Eis aus eigener Herstellung und belegte Brötchen. Am Burgfeld 3, 23568 Lübeck.",
};

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
