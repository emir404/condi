import type { Metadata } from "next";
import BestellenContent from "./content";

export const metadata: Metadata = {
  title: "Torten auf Bestellung & Feiern im Teeraum | Café Steinhusen Lübeck",
  description:
    "Motiv- und Festtagstorten auf Bestellung für Ihre große Runde — vom Geburtstag bis zur Hochzeit. Plus der separate Teeraum für Feiern mit bis zu 45 Gästen. Café Steinhusen, Lübeck.",
};

export default function BestellenPage() {
  return <BestellenContent />;
}
