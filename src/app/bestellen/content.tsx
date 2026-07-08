"use client";

import SubpageShell from "@/components/subpage/SubpageShell";
import Steps, { type Step } from "@/components/subpage/Steps";
import FeatureGrid, { type Feature } from "@/components/subpage/FeatureGrid";
import CrossLinks from "@/components/subpage/CrossLinks";
import ContactActions from "@/components/subpage/ContactActions";
import SundayBreakfast from "@/components/sunday/SundayBreakfast";
import { BreadIcon, CakeIcon, CupcakeIcon } from "@/components/menu/MenuIcons";

const STEPS: Step[] = [
  {
    number: "01",
    title: "Anfragen",
    text: "Rufen Sie uns an oder schreiben Sie per DM — mit Anlass, Termin und Personenzahl.",
  },
  {
    number: "02",
    title: "Absprechen",
    text: "Wir beraten Sie zu Sorte, Größe und Motiv und halten alles für Sie fest.",
  },
  {
    number: "03",
    title: "Abholen",
    text: "Ihre Torte wird frisch gefertigt und steht pünktlich zum Fest bereit.",
  },
];

const OCCASIONS: Feature[] = [
  {
    title: "Festtags- & Geburtstagstorten",
    text: "Der Mittelpunkt jeder Feier — in Ihrer Wunschgröße.",
    image: "/images/menu/torten.jpg",
    alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
    Icon: CakeIcon,
  },
  {
    title: "Motivtorten nach Wunsch",
    text: "Persönlich gestaltet — erzählen Sie uns einfach Ihre Idee.",
    image: "/images/menu/confiserie.jpg",
    alt: "Himbeer-Baiser-Törtchen aus der Konditorei",
    Icon: CupcakeIcon,
  },
  {
    title: "Kleingebäck in Menge",
    text: "Platten und Feingebäck für die ganze große Runde.",
    image: "/images/menu/kuchen.jpg",
    alt: "Baiser-Kuchen mit frischen Erdbeeren",
    Icon: BreadIcon,
  },
];

export default function BestellenContent() {
  return (
    <SubpageShell
      eyebrow="Feiern & Bestellen"
      title={
        <>
          Torten für Ihre <em className="italic text-cs-red">große Runde</em>
        </>
      }
      lede="Motiv- und Festtagstorten auf Bestellung — vom Geburtstag bis zur Hochzeit. Und für die Feier selbst: unser separater Teeraum für bis zu 45 Gäste."
      images={[
        {
          src: "/images/teeraum/saal.jpg",
          alt: "Lange festlich gedeckte Tafel im separaten Teeraum des Café Steinhusen",
        },
        {
          src: "/images/menu/confiserie.jpg",
          alt: "Himbeer-Baiser-Törtchen aus der Konditorei",
        },
      ]}
      actions={<ContactActions tone="light" secondaryLabel="Anfrage per DM" />}
    >
      <Steps
        eyebrow="So bestellen Sie"
        heading={
          <>
            In drei Schritten zur <em className="italic text-cs-red">eigenen Torte</em>
          </>
        }
        steps={STEPS}
      />

      <FeatureGrid
        eyebrow="Für jeden Anlass"
        heading={
          <>
            Ob Geburtstag, Jubiläum oder <em className="italic text-cs-red">Hochzeit</em>
          </>
        }
        items={OCCASIONS}
        columns={3}
      />

      {/* Der Teeraum — Veranstaltungen für bis zu 45 Gäste */}
      <SundayBreakfast />

      <CrossLinks current="bestellen" />
    </SubpageShell>
  );
}
