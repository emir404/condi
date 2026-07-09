"use client";

import SubpageShell from "@/components/subpage/SubpageShell";
import FeatureGrid, { type Feature } from "@/components/subpage/FeatureGrid";
import InfoBand, { type Fact as BandFact } from "@/components/subpage/InfoBand";
import CrossLinks from "@/components/subpage/CrossLinks";
import ContactActions from "@/components/subpage/ContactActions";
import Emphasize from "@/components/text/Emphasize";
import { iconFor } from "@/components/menu/MenuIcons";
import type { MitnehmenData, Fact, FeatureItem } from "@/lib/pages";

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

export default function MitnehmenContent({ data }: { data: MitnehmenData }) {
  return (
    <SubpageShell
      eyebrow={data.hero.eyebrow}
      title={<Emphasize text={data.hero.title} className="italic text-cs-red" />}
      lede={data.hero.lede}
      images={[data.hero.primary, data.hero.secondary]}
      actions={<ContactActions tone="light" secondaryLabel="Per DM anfragen" />}
    >
      <FeatureGrid
        eyebrow={data.vitrine.eyebrow}
        heading={<Emphasize text={data.vitrine.heading} className="italic text-cs-red" />}
        intro={data.vitrine.intro}
        items={toFeatures(data.vitrine.items)}
        columns={4}
      />

      <InfoBand
        tone="espresso"
        eyebrow={data.infoBand.eyebrow}
        heading={<Emphasize text={data.infoBand.heading} className="italic" />}
        body={data.infoBand.body}
        facts={toBandFacts(data.infoBand.facts)}
        actions={<ContactActions tone="dark" secondaryLabel="Per DM anfragen" />}
      />

      <CrossLinks current="mitnehmen" />
    </SubpageShell>
  );
}
