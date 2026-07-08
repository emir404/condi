import type { Metadata } from "next";
import MitnehmenContent from "./content";

export const metadata: Metadata = {
  title: "Zum Mitnehmen — Konditorei | Café Steinhusen Lübeck",
  description:
    "Über 30 Tortensorten, Confiserie, Kleingebäck und Eis aus eigener Herstellung — frisch aus der Vitrine zum Mitnehmen. Café Steinhusen, Am Burgfeld 3, 23568 Lübeck.",
};

export default function MitnehmenPage() {
  return <MitnehmenContent />;
}
