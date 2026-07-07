import type { Metadata } from "next";
import { Manrope, Fraunces, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

// Elegant high-contrast serif for the Café Steinhusen wordmark.
const playfair = Playfair_Display({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
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
      className={`${manrope.variable} ${fraunces.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
