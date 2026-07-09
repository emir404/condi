import type { Metadata } from "next";
import CafeContent from "./content";
import { resolveCafe } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Café & Frühstück — das Wiener Caféhaus | Café Steinhusen Lübeck",
  description:
    "Frühstück, Kaffeespezialitäten und über 30 Tortensorten im Wintergarten des Café Steinhusen — das norddeutsche Wiener Caféhaus in den historischen Räumen von 1899. Café mit Service ab 14 Uhr.",
};

export const revalidate = 60;

export default async function CafePage() {
  const data = await resolveCafe();
  return <CafeContent data={data} />;
}
