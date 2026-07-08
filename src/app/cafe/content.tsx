"use client";

import SubpageShell from "@/components/subpage/SubpageShell";
import FeatureGrid, { type Feature } from "@/components/subpage/FeatureGrid";
import Gallery, { type GalleryImage } from "@/components/subpage/Gallery";
import InfoBand from "@/components/subpage/InfoBand";
import CrossLinks from "@/components/subpage/CrossLinks";
import ContactActions from "@/components/subpage/ContactActions";
import { BreadIcon, CakeIcon, CoffeeIcon } from "@/components/menu/MenuIcons";
import { MAPS_URL } from "@/lib/site";

const EXPERIENCE: Feature[] = [
  {
    title: "Frühstück",
    text: "Herzhaft in den Tag — mit belegten Brötchen und mehr.",
    image: "/images/menu/broetchen.jpg",
    alt: "Platte mit reich belegten Brötchen im Café Steinhusen",
    Icon: BreadIcon,
  },
  {
    title: "Kaffee & Kuchen",
    text: "Kaffeespezialitäten und ein Stück Kuchen am Nachmittag.",
    image: "/images/menu/kuchen.jpg",
    alt: "Baiser-Kuchen mit frischen Erdbeeren, dazu Kaffee",
    Icon: CoffeeIcon,
  },
  {
    title: "Über 30 Torten",
    text: "Die ganze Vitrine — auch zum Hierbleiben und Genießen.",
    image: "/images/menu/torten.jpg",
    alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
    Icon: CakeIcon,
  },
  {
    title: "Café mit Service",
    text: "Bedienung am Tisch im Wintergarten — ab 14 Uhr.",
    image: "/images/about/cafe-02.jpg",
    alt: "Gemütliche Sitzecke im Café Steinhusen",
  },
];

const ROOMS: GalleryImage[] = [
  { src: "/images/about/cafe-00.jpg", alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen" },
  { src: "/images/about/cafe-01.jpg", alt: "Wintergarten mit warmem Licht und Lüstern im Café Steinhusen" },
  { src: "/images/contact/innenraum.jpg", alt: "Gastraum im Café Steinhusen mit warmem Licht und Lüstern" },
  { src: "/images/hero/saal.jpg", alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen" },
  { src: "/images/about/cafe-02.jpg", alt: "Gemütliche Sitzecke im Café Steinhusen" },
  { src: "/images/hero/cafe.jpg", alt: "Lichtdurchfluteter Wintergarten mit warmem Licht im Café Steinhusen" },
  { src: "/images/about/cafe-03.jpg", alt: "Torte aus eigener Herstellung im Café Steinhusen" },
  { src: "/images/about/cafe-05.jpg", alt: "Baiser-Kuchen mit frischen Erdbeeren" },
];

export default function CafeContent() {
  return (
    <SubpageShell
      eyebrow="Wiener Caféhaus · Setzen Sie sich"
      title={
        <>
          Verweilen im <em className="italic text-cs-red">Wintergarten</em>
        </>
      }
      lede="Frühstück am Morgen, Kaffee und ein Stück Torte am Nachmittag — in den historischen Räumen von 1899. Das norddeutsche Wiener Caféhaus."
      images={[
        {
          src: "/images/hero/cafe.jpg",
          alt: "Lichtdurchfluteter Wintergarten mit warmem Licht im Café Steinhusen",
        },
        {
          src: "/images/hero/saal.jpg",
          alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen",
        },
      ]}
      actions={<ContactActions tone="light" secondaryLabel="Folgen & anfragen" />}
    >
      <FeatureGrid
        eyebrow="Was Sie erwartet"
        heading={
          <>
            Vom Frühstück bis zum <em className="italic text-cs-red">Nachmittag</em>
          </>
        }
        intro="Ob kurz auf einen Kaffee oder für einen ganzen Nachmittag — bei uns nehmen Sie sich Zeit."
        items={EXPERIENCE}
        columns={4}
      />

      <Gallery
        eyebrow="Unsere Räume"
        heading={
          <>
            Ein Haus, das über die Jahre <em className="italic text-cs-red">gewachsen</em> ist
          </>
        }
        images={ROOMS}
      />

      <InfoBand
        tone="gold"
        eyebrow="Öffnungszeiten & Anfahrt"
        heading={
          <>
            Mitten in <em className="italic">Lübeck</em>, seit 1972
          </>
        }
        body="Am Burgfeld, nur wenige Schritte vom Burgtor und der Altstadt entfernt. Kommen Sie vorbei — ein Tisch findet sich fast immer."
        facts={[
          { heading: "Di – Fr", lines: ["10:00 – 17:30 Uhr"] },
          { heading: "Sa & So", lines: ["9:00 – 17:30 Uhr", "Café mit Service ab 14 Uhr"] },
          {
            heading: "Adresse",
            lines: [{ text: "Am Burgfeld 3, 23568 Lübeck", href: MAPS_URL }],
          },
        ]}
        actions={<ContactActions tone="gold" secondaryLabel="Auf Instagram" />}
      />

      <CrossLinks current="cafe" />
    </SubpageShell>
  );
}
