import type { Metadata } from "next";
import CafeContent from "./content";

export const metadata: Metadata = {
  title: "Café & Frühstück — das Wiener Caféhaus | Café Steinhusen Lübeck",
  description:
    "Frühstück, Kaffeespezialitäten und über 30 Tortensorten im Wintergarten des Café Steinhusen — das norddeutsche Wiener Caféhaus in den historischen Räumen von 1899. Café mit Service ab 14 Uhr.",
};

export default function CafePage() {
  return <CafeContent />;
}
