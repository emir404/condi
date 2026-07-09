import { getCms, toImg, toImgs, type Img } from "@/lib/cms";
import * as defaults from "@/lib/defaults";
import type { Media } from "@/payload-types";

export type FeatureItem = {
  title: string;
  text?: string;
  image: Img;
  icon?: string | null;
};
export type FactLine = { text: string; href?: string };
export type Fact = { heading: string; lines: FactLine[] };
export type SubHero = {
  eyebrow: string;
  title: string;
  lede: string;
  primary: Img;
  secondary?: Img;
};

type CmsImage = number | Media | null | undefined;

/** Resolve a required image with a guaranteed fallback. */
function img(value: CmsImage, fallback: Img): Img {
  return toImg(value) ?? fallback;
}

/** Resolve a CMS feature-card list, falling back to defaults when empty. */
function items(
  cmsItems:
    | { title: string; text?: string | null; image: number | Media; icon?: string | null }[]
    | null
    | undefined,
  fallback: FeatureItem[],
): FeatureItem[] {
  const resolved = (cmsItems ?? []).flatMap((it) => {
    const image = toImg(it.image, it.title);
    return image
      ? [{ title: it.title, text: it.text ?? undefined, image, icon: it.icon }]
      : [];
  });
  return resolved.length ? resolved : fallback;
}

/** Resolve CMS facts (heading + optionally-linked lines) with a fallback. */
function facts(
  cmsFacts:
    | {
        heading: string;
        lines?: { text: string; href?: string | null }[] | null;
      }[]
    | null
    | undefined,
  fallback: Fact[],
): Fact[] {
  const resolved = (cmsFacts ?? []).map((f) => ({
    heading: f.heading,
    lines: (f.lines ?? []).map((l) => ({ text: l.text, href: l.href ?? undefined })),
  }));
  return resolved.length ? resolved : fallback;
}

export type MitnehmenData = {
  hero: SubHero;
  vitrine: { eyebrow: string; heading: string; intro?: string; items: FeatureItem[] };
  infoBand: { eyebrow: string; heading: string; body?: string; facts: Fact[] };
};

export async function resolveMitnehmen(): Promise<MitnehmenData> {
  const payload = await getCms();
  const p = await payload.findGlobal({ slug: "mitnehmen-page", depth: 2 });
  const d = defaults.mitnehmen;
  return {
    hero: {
      eyebrow: p.hero?.eyebrow ?? d.hero.eyebrow,
      title: p.hero?.title ?? d.hero.title,
      lede: p.hero?.lede ?? d.hero.lede,
      primary: img(p.hero?.primaryImage, d.hero.primaryImage),
      secondary: toImg(p.hero?.secondaryImage) ?? d.hero.secondaryImage ?? undefined,
    },
    vitrine: {
      eyebrow: p.vitrine?.eyebrow ?? d.vitrine.eyebrow,
      heading: p.vitrine?.heading ?? d.vitrine.heading,
      intro: p.vitrine?.intro ?? d.vitrine.intro,
      items: items(p.vitrine?.items, d.vitrine.items),
    },
    infoBand: {
      eyebrow: p.infoBand?.eyebrow ?? d.infoBand.eyebrow,
      heading: p.infoBand?.heading ?? d.infoBand.heading,
      body: p.infoBand?.body ?? d.infoBand.body,
      facts: facts(p.infoBand?.facts, d.infoBand.facts),
    },
  };
}

export type CafeData = {
  hero: SubHero;
  experience: { eyebrow: string; heading: string; intro?: string; items: FeatureItem[] };
  rooms: { eyebrow: string; heading: string; images: Img[] };
  infoBand: { eyebrow: string; heading: string; body?: string; facts: Fact[] };
};

export async function resolveCafe(): Promise<CafeData> {
  const payload = await getCms();
  const p = await payload.findGlobal({ slug: "cafe-page", depth: 2 });
  const d = defaults.cafe;
  const rooms = toImgs(p.rooms?.images);
  return {
    hero: {
      eyebrow: p.hero?.eyebrow ?? d.hero.eyebrow,
      title: p.hero?.title ?? d.hero.title,
      lede: p.hero?.lede ?? d.hero.lede,
      primary: img(p.hero?.primaryImage, d.hero.primaryImage),
      secondary: toImg(p.hero?.secondaryImage) ?? d.hero.secondaryImage ?? undefined,
    },
    experience: {
      eyebrow: p.experience?.eyebrow ?? d.experience.eyebrow,
      heading: p.experience?.heading ?? d.experience.heading,
      intro: p.experience?.intro ?? d.experience.intro,
      items: items(p.experience?.items, d.experience.items),
    },
    rooms: {
      eyebrow: p.rooms?.eyebrow ?? d.rooms.eyebrow,
      heading: p.rooms?.heading ?? d.rooms.heading,
      images: rooms.length ? rooms : d.rooms.images,
    },
    infoBand: {
      eyebrow: p.infoBand?.eyebrow ?? d.infoBand.eyebrow,
      heading: p.infoBand?.heading ?? d.infoBand.heading,
      body: p.infoBand?.body ?? d.infoBand.body,
      facts: facts(p.infoBand?.facts, d.infoBand.facts),
    },
  };
}

export type BestellenData = {
  hero: SubHero;
  steps: { eyebrow: string; heading: string; items: { number: string; title: string; text: string }[] };
  occasions: { eyebrow: string; heading: string; intro?: string; items: FeatureItem[] };
  teeraum: {
    eyebrow: string;
    heading: string;
    body: string;
    image: Img;
    facts: { heading: string; lines: string[] }[];
  };
};

export async function resolveBestellen(): Promise<BestellenData> {
  const payload = await getCms();
  const p = await payload.findGlobal({ slug: "bestellen-page", depth: 2 });
  const d = defaults.bestellen;
  const cmsSteps = p.steps?.items ?? [];
  const cmsTeeraumFacts = (p.teeraum?.facts ?? []).map((f) => ({
    heading: f.heading,
    lines: f.lines.split("\n").filter(Boolean),
  }));
  return {
    hero: {
      eyebrow: p.hero?.eyebrow ?? d.hero.eyebrow,
      title: p.hero?.title ?? d.hero.title,
      lede: p.hero?.lede ?? d.hero.lede,
      primary: img(p.hero?.primaryImage, d.hero.primaryImage),
      secondary: toImg(p.hero?.secondaryImage) ?? d.hero.secondaryImage ?? undefined,
    },
    steps: {
      eyebrow: p.steps?.eyebrow ?? d.steps.eyebrow,
      heading: p.steps?.heading ?? d.steps.heading,
      items: cmsSteps.length
        ? cmsSteps.map((s) => ({ number: s.number, title: s.title, text: s.text }))
        : d.steps.items,
    },
    occasions: {
      eyebrow: p.occasions?.eyebrow ?? d.occasions.eyebrow,
      heading: p.occasions?.heading ?? d.occasions.heading,
      intro: p.occasions?.intro ?? d.occasions.intro,
      items: items(p.occasions?.items, d.occasions.items),
    },
    teeraum: {
      eyebrow: p.teeraum?.eyebrow ?? d.teeraum.eyebrow,
      heading: p.teeraum?.heading ?? d.teeraum.heading,
      body: p.teeraum?.body ?? d.teeraum.body,
      image: img(p.teeraum?.image, d.teeraum.image),
      facts: cmsTeeraumFacts.length ? cmsTeeraumFacts : d.teeraum.facts,
    },
  };
}
