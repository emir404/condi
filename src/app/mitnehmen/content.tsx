"use client";

import SubpageShell from "@/components/subpage/SubpageShell";
import FeatureGrid, { type Feature } from "@/components/subpage/FeatureGrid";
import InfoBand from "@/components/subpage/InfoBand";
import CrossLinks from "@/components/subpage/CrossLinks";
import ContactActions from "@/components/subpage/ContactActions";
import {
  BreadIcon,
  CakeIcon,
  CoffeeIcon,
  CupcakeIcon,
} from "@/components/menu/MenuIcons";
import { MAPS_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const VITRINE: Feature[] = [
  {
    title: "Torten",
    text: "Über 30 Sorten, täglich frisch aus der eigenen Konditorei.",
    image: "/images/menu/torten.jpg",
    alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
    Icon: CakeIcon,
  },
  {
    title: "Confiserie & Kleingebäck",
    text: "Feine Pralinen, Baiser und Petits Fours zum Verschenken.",
    image: "/images/menu/confiserie.jpg",
    alt: "Himbeer-Baiser-Törtchen aus der Konditorei",
    Icon: CupcakeIcon,
  },
  {
    title: "Kuchen & Feingebäck",
    text: "Klassiker vom Blech — Stück für Stück eingepackt.",
    image: "/images/menu/kuchen.jpg",
    alt: "Baiser-Kuchen mit frischen Erdbeeren",
    Icon: CoffeeIcon,
  },
  {
    title: "Belegte Brötchen",
    text: "Herzhaft belegt — der schnelle Gruß für zwischendurch.",
    image: "/images/menu/broetchen.jpg",
    alt: "Platte mit reich belegten Brötchen im Café Steinhusen",
    Icon: BreadIcon,
  },
];

export default function MitnehmenContent() {
  return (
    <SubpageShell
      eyebrow="Konditorei · Zum Mitnehmen"
      title={
        <>
          Frisch aus der <em className="italic text-cs-red">Vitrine</em>
        </>
      }
      lede="Über 30 Tortensorten, feine Confiserie, Kleingebäck und Eis — alles aus eigener Herstellung. Aussuchen, einpacken lassen und zu Hause genießen."
      images={[
        {
          src: "/images/menu/torten.jpg",
          alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
        },
        {
          src: "/images/menu/confiserie.jpg",
          alt: "Himbeer-Baiser-Törtchen aus der Konditorei",
        },
      ]}
      actions={<ContactActions tone="light" secondaryLabel="Per DM anfragen" />}
    >
      <FeatureGrid
        eyebrow="Aus unserer Vitrine"
        heading={
          <>
            Was heute für Sie <em className="italic text-cs-red">bereitsteht</em>
          </>
        }
        intro="Alles aus eigener Herstellung — jeden Tag frisch. Ein Auszug aus dem, was in der Vitrine auf Sie wartet."
        items={VITRINE}
        columns={4}
      />

      <InfoBand
        tone="espresso"
        eyebrow="Gut zu wissen"
        heading={
          <>
            Ganze Torten gern <em className="italic">vorbestellen</em>
          </>
        }
        body="Für ganze Torten und größere Mengen empfehlen wir eine kurze Vorbestellung — dann steht Ihre Auswahl frisch und pünktlich für Sie bereit. Ein Anruf genügt."
        facts={[
          { heading: "Öffnungszeiten", lines: ["Di – Fr 10 – 17:30", "Sa & So 9 – 17:30"] },
          {
            heading: "Vorbestellung",
            lines: ["Telefonisch", { text: PHONE_DISPLAY, href: PHONE_HREF }],
          },
          {
            heading: "Adresse",
            lines: [{ text: "Am Burgfeld 3, 23568 Lübeck", href: MAPS_URL }],
          },
        ]}
        actions={<ContactActions tone="dark" secondaryLabel="Per DM anfragen" />}
      />

      <CrossLinks current="mitnehmen" />
    </SubpageShell>
  );
}
