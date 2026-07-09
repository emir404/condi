"use client";

import SubpageShell from "@/components/subpage/SubpageShell";
import Steps from "@/components/subpage/Steps";
import FeatureGrid, { type Feature } from "@/components/subpage/FeatureGrid";
import CrossLinks from "@/components/subpage/CrossLinks";
import ContactActions from "@/components/subpage/ContactActions";
import SundayBreakfast from "@/components/sunday/SundayBreakfast";
import Emphasize from "@/components/text/Emphasize";
import { iconFor } from "@/components/menu/MenuIcons";
import type { BestellenData, FeatureItem } from "@/lib/pages";

const toFeatures = (items: FeatureItem[]): Feature[] =>
  items.map((it) => ({
    title: it.title,
    text: it.text,
    image: it.image.src,
    alt: it.image.alt,
    Icon: iconFor(it.icon),
  }));

export default function BestellenContent({ data }: { data: BestellenData }) {
  return (
    <SubpageShell
      eyebrow={data.hero.eyebrow}
      title={<Emphasize text={data.hero.title} className="italic text-cs-red" />}
      lede={data.hero.lede}
      images={[data.hero.primary, data.hero.secondary]}
      actions={<ContactActions tone="light" secondaryLabel="Anfrage per DM" />}
    >
      <Steps
        eyebrow={data.steps.eyebrow}
        heading={<Emphasize text={data.steps.heading} className="italic text-cs-red" />}
        steps={data.steps.items}
      />

      <FeatureGrid
        eyebrow={data.occasions.eyebrow}
        heading={<Emphasize text={data.occasions.heading} className="italic text-cs-red" />}
        intro={data.occasions.intro}
        items={toFeatures(data.occasions.items)}
        columns={3}
      />

      {/* Der Teeraum — Veranstaltungen für bis zu 45 Gäste */}
      <SundayBreakfast
        eyebrow={data.teeraum.eyebrow}
        heading={data.teeraum.heading}
        body={data.teeraum.body}
        image={data.teeraum.image}
        facts={data.teeraum.facts}
      />

      <CrossLinks current="bestellen" />
    </SubpageShell>
  );
}
