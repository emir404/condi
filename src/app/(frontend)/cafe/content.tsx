"use client";

import SubpageShell from "@/components/subpage/SubpageShell";
import FeatureGrid, { type Feature } from "@/components/subpage/FeatureGrid";
import Gallery from "@/components/subpage/Gallery";
import InfoBand, { type Fact as BandFact } from "@/components/subpage/InfoBand";
import CrossLinks from "@/components/subpage/CrossLinks";
import ContactActions from "@/components/subpage/ContactActions";
import Emphasize from "@/components/text/Emphasize";
import { iconFor } from "@/components/menu/MenuIcons";
import type { CafeData, Fact, FeatureItem } from "@/lib/pages";

const toFeatures = (items: FeatureItem[]): Feature[] =>
  items.map((it) => ({
    title: it.title,
    text: it.text,
    image: it.image.src,
    alt: it.image.alt,
    Icon: iconFor(it.icon),
  }));

const toBandFacts = (facts: Fact[]): BandFact[] =>
  facts.map((f) => ({
    heading: f.heading,
    lines: f.lines.map((l) => (l.href ? { text: l.text, href: l.href } : l.text)),
  }));

export default function CafeContent({ data }: { data: CafeData }) {
  return (
    <SubpageShell
      eyebrow={data.hero.eyebrow}
      title={<Emphasize text={data.hero.title} className="italic text-cs-red" />}
      lede={data.hero.lede}
      images={[data.hero.primary, data.hero.secondary]}
      actions={<ContactActions tone="light" secondaryLabel="Folgen & anfragen" />}
    >
      <FeatureGrid
        eyebrow={data.experience.eyebrow}
        heading={<Emphasize text={data.experience.heading} className="italic text-cs-red" />}
        intro={data.experience.intro}
        items={toFeatures(data.experience.items)}
        columns={4}
      />

      <Gallery
        eyebrow={data.rooms.eyebrow}
        heading={<Emphasize text={data.rooms.heading} className="italic text-cs-red" />}
        images={data.rooms.images}
      />

      <InfoBand
        tone="gold"
        eyebrow={data.infoBand.eyebrow}
        heading={<Emphasize text={data.infoBand.heading} className="italic" />}
        body={data.infoBand.body}
        facts={toBandFacts(data.infoBand.facts)}
        actions={<ContactActions tone="gold" secondaryLabel="Auf Instagram" />}
      />

      <CrossLinks current="cafe" />
    </SubpageShell>
  );
}
