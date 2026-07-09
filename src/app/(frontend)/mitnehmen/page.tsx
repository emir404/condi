import type { Metadata } from "next";
import MitnehmenContent from "./content";
import { resolveMitnehmen } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Zum Mitnehmen — Konditorei | Café Steinhusen Lübeck",
  description:
    "Über 30 Tortensorten, Confiserie, Kleingebäck und Eis aus eigener Herstellung — frisch aus der Vitrine zum Mitnehmen. Café Steinhusen, Am Burgfeld 3, 23568 Lübeck.",
};

export const revalidate = 60;

export default async function MitnehmenPage() {
  const data = await resolveMitnehmen();
  return <MitnehmenContent data={data} />;
}
