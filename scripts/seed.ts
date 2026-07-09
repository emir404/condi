/**
 * One-time seed: migrates the previously hardcoded site content and the images
 * from public/images into Payload. Run with:
 *
 *   bun run seed
 *
 * Safe to re-run: skips the content seed if the homepage is already populated.
 */
import path from "path";
import { fileURLToPath } from "url";
import { getPayload } from "payload";
import config from "../src/payload.config";
import * as defaults from "../src/lib/defaults";
import type { Img } from "../src/lib/cms";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const ADMIN_EMAIL = "admin@cafe-steinhusen.de";
const ADMIN_PASSWORD = "steinhusen2026";

async function main() {
  const payload = await getPayload({ config });

  const existingUsers = await payload.find({ collection: "users", limit: 1 });
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: "users",
      data: { email: ADMIN_EMAIL, password: ADMIN_PASSWORD },
    });
    payload.logger.info(`Admin user created: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);
  }

  const existingMedia = await payload.find({ collection: "media", limit: 1 });
  if (existingMedia.totalDocs > 0) {
    payload.logger.info("Media already exists — skipping content seed.");
    return;
  }

  // Upload each image once, caching by its public src path.
  const cache = new Map<string, number>();
  const media = async ({ src, alt }: Img): Promise<number> => {
    if (cache.has(src)) return cache.get(src)!;
    const doc = await payload.create({
      collection: "media",
      data: { alt },
      filePath: path.join(root, "public", src.replace(/^\//, "")),
    });
    cache.set(src, doc.id);
    return doc.id;
  };

  const icon = (name?: string) => (name && name !== "none" ? name : "none") as
    | "none"
    | "cake"
    | "coffee"
    | "cupcake"
    | "bread";

  const featureItems = async (items: defaults.FeatureItem[]) =>
    Promise.all(
      items.map(async (it) => ({
        title: it.title,
        text: it.text,
        image: await media(it.image),
        icon: icon(it.icon),
      })),
    );

  const bandFacts = (facts: defaults.Fact[]) =>
    facts.map((f) => ({
      heading: f.heading,
      lines: f.lines.map((l) => ({ text: l.text, href: l.href })),
    }));

  // --- Homepage ---
  await payload.updateGlobal({
    slug: "homepage",
    data: {
      hero: {
        columns: defaults.heroColumns.map((c) => ({
          label: c.label,
          value: c.value,
          href: c.href,
          wide: c.wide ?? false,
        })),
        images: await Promise.all(
          defaults.heroImages.map(async (img) => ({ image: await media(img) })),
        ),
      },
      offerings: {
        eyebrow: defaults.offerings.eyebrow,
        heading: defaults.offerings.heading,
        intro: defaults.offerings.intro,
        cards: await Promise.all(
          defaults.offerings.cards.map(async (c) => ({
            number: c.number,
            title: c.title,
            description: c.description,
            href: c.href,
            cta: c.cta,
            image: await media(c.image),
            icon: c.icon,
          })),
        ),
      },
      about: {
        eyebrow: defaults.about.eyebrow,
        quote: defaults.about.quote,
        paragraph1: defaults.about.paragraph1,
        paragraph2: defaults.about.paragraph2,
        closing: defaults.about.closing,
        gallery: await Promise.all(
          defaults.about.gallery.map(async (img) => ({ image: await media(img) })),
        ),
      },
      contact: {
        eyebrow: defaults.contact.eyebrow,
        heading: defaults.contact.heading,
        text: defaults.contact.text,
        image: await media(defaults.contact.image),
        umgebung: defaults.contact.umgebung.map((text) => ({ text })),
      },
    },
  });
  payload.logger.info("Homepage seeded.");

  // --- Zum Mitnehmen ---
  const m = defaults.mitnehmen;
  await payload.updateGlobal({
    slug: "mitnehmen-page",
    data: {
      hero: {
        eyebrow: m.hero.eyebrow,
        title: m.hero.title,
        lede: m.hero.lede,
        primaryImage: await media(m.hero.primaryImage),
        secondaryImage: m.hero.secondaryImage ? await media(m.hero.secondaryImage) : null,
      },
      vitrine: {
        eyebrow: m.vitrine.eyebrow,
        heading: m.vitrine.heading,
        intro: m.vitrine.intro,
        items: await featureItems(m.vitrine.items),
      },
      infoBand: {
        eyebrow: m.infoBand.eyebrow,
        heading: m.infoBand.heading,
        body: m.infoBand.body,
        facts: bandFacts(m.infoBand.facts),
      },
    },
  });
  payload.logger.info("Zum Mitnehmen seeded.");

  // --- Café & Frühstück ---
  const c = defaults.cafe;
  await payload.updateGlobal({
    slug: "cafe-page",
    data: {
      hero: {
        eyebrow: c.hero.eyebrow,
        title: c.hero.title,
        lede: c.hero.lede,
        primaryImage: await media(c.hero.primaryImage),
        secondaryImage: c.hero.secondaryImage ? await media(c.hero.secondaryImage) : null,
      },
      experience: {
        eyebrow: c.experience.eyebrow,
        heading: c.experience.heading,
        intro: c.experience.intro,
        items: await featureItems(c.experience.items),
      },
      rooms: {
        eyebrow: c.rooms.eyebrow,
        heading: c.rooms.heading,
        images: await Promise.all(c.rooms.images.map(async (img) => ({ image: await media(img) }))),
      },
      infoBand: {
        eyebrow: c.infoBand.eyebrow,
        heading: c.infoBand.heading,
        body: c.infoBand.body,
        facts: bandFacts(c.infoBand.facts),
      },
    },
  });
  payload.logger.info("Café & Frühstück seeded.");

  // --- Torten auf Bestellung ---
  const b = defaults.bestellen;
  await payload.updateGlobal({
    slug: "bestellen-page",
    data: {
      hero: {
        eyebrow: b.hero.eyebrow,
        title: b.hero.title,
        lede: b.hero.lede,
        primaryImage: await media(b.hero.primaryImage),
        secondaryImage: b.hero.secondaryImage ? await media(b.hero.secondaryImage) : null,
      },
      steps: {
        eyebrow: b.steps.eyebrow,
        heading: b.steps.heading,
        items: b.steps.items.map((s) => ({ number: s.number, title: s.title, text: s.text })),
      },
      occasions: {
        eyebrow: b.occasions.eyebrow,
        heading: b.occasions.heading,
        intro: b.occasions.intro,
        items: await featureItems(b.occasions.items),
      },
      teeraum: {
        eyebrow: b.teeraum.eyebrow,
        heading: b.teeraum.heading,
        body: b.teeraum.body,
        image: await media(b.teeraum.image),
        facts: b.teeraum.facts.map((f) => ({ heading: f.heading, lines: f.lines.join("\n") })),
      },
    },
  });
  payload.logger.info("Torten auf Bestellung seeded.");

  // --- Site settings ---
  const s = defaults.settings;
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      meta: { title: s.meta.title, description: s.meta.description },
      contact: {
        street: s.contact.street,
        city: s.contact.city,
        phoneDisplay: s.contact.phoneDisplay,
        phoneNumber: s.contact.phoneNumber,
        faxDisplay: s.contact.faxDisplay,
        instagramHandle: s.contact.instagramHandle,
        instagramUrl: s.contact.instagramUrl,
        mapsLink: s.contact.mapsLink,
        mapsEmbedSrc: s.contact.mapsEmbedSrc,
      },
      hours: s.hours.map(([label, value]) => ({ label, value })),
      tagline: s.tagline,
      quote: s.quote,
      companyName: s.companyName,
    },
  });
  payload.logger.info("Site settings seeded.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
