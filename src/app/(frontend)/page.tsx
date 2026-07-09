import Hero from "@/components/hero/Hero";
import OfferingsHub, { type Offering } from "@/components/home/OfferingsHub";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { getCms, toImg, toImgs, type Img } from "@/lib/cms";
import * as defaults from "@/lib/defaults";

// Re-render at most every 60s so CMS edits go live without a rebuild.
export const revalidate = 60;

export default async function Home() {
  const payload = await getCms();

  const [homepage, settings] = await Promise.all([
    payload.findGlobal({ slug: "homepage", depth: 2 }),
    payload.findGlobal({ slug: "site-settings" }),
  ]);

  // --- Hero ---
  const heroColumns = homepage.hero?.columns?.length
    ? homepage.hero.columns.map((c) => ({
        label: c.label,
        value: c.value,
        href: c.href ?? undefined,
        wide: c.wide ?? undefined,
      }))
    : defaults.heroColumns;
  const cmsHeroImages = toImgs(homepage.hero?.images);
  const heroImages = cmsHeroImages.length ? cmsHeroImages : defaults.heroImages;

  // --- Offerings ---
  const cmsOfferings: Offering[] = (homepage.offerings?.cards ?? []).flatMap((card) => {
    const image = toImg(card.image, card.title);
    return image
      ? [
          {
            number: card.number,
            title: card.title,
            description: card.description,
            href: card.href,
            cta: card.cta,
            image,
            icon: card.icon,
          },
        ]
      : [];
  });
  const offerings = cmsOfferings.length ? cmsOfferings : defaults.offerings.cards;

  // --- About ---
  const aboutCards = (() => {
    const cards = toImgs(homepage.about?.gallery);
    return cards.length ? cards : defaults.about.gallery;
  })();

  // --- Contact / settings ---
  const addressLines: [string, string] = settings.contact?.street
    ? [settings.contact.street, settings.contact.city]
    : defaults.settings.addressLines;
  const hours: [string, string][] = settings.hours?.length
    ? settings.hours.map((row) => [row.label, row.value] as [string, string])
    : defaults.settings.hours;
  const contactImage: Img = toImg(homepage.contact?.image) ?? defaults.contact.image;
  const umgebung = homepage.contact?.umgebung?.length
    ? homepage.contact.umgebung.map((u) => u.text)
    : defaults.contact.umgebung;

  const phoneDisplay = settings.contact?.phoneDisplay ?? defaults.settings.contact.phoneDisplay;
  const phoneNumber = settings.contact?.phoneNumber ?? defaults.settings.contact.phoneNumber;
  const instagramHandle = settings.contact?.instagramHandle ?? defaults.settings.contact.instagramHandle;
  const instagramUrl = settings.contact?.instagramUrl ?? defaults.settings.contact.instagramUrl;

  return (
    <>
      <Hero columns={heroColumns} images={heroImages} />
      <OfferingsHub
        eyebrow={homepage.offerings?.eyebrow ?? defaults.offerings.eyebrow}
        heading={homepage.offerings?.heading ?? defaults.offerings.heading}
        intro={homepage.offerings?.intro ?? defaults.offerings.intro}
        offerings={offerings}
      />
      <About
        eyebrow={homepage.about?.eyebrow ?? defaults.about.eyebrow}
        quote={homepage.about?.quote ?? defaults.about.quote}
        paragraph1={homepage.about?.paragraph1 ?? defaults.about.paragraph1}
        paragraph2={homepage.about?.paragraph2 ?? defaults.about.paragraph2}
        closing={homepage.about?.closing ?? defaults.about.closing}
        cards={aboutCards}
      />
      <Contact
        eyebrow={homepage.contact?.eyebrow ?? defaults.contact.eyebrow}
        heading={homepage.contact?.heading ?? defaults.contact.heading}
        text={homepage.contact?.text ?? defaults.contact.text}
        image={contactImage}
        umgebung={umgebung}
        addressLines={addressLines}
        hours={hours}
        phoneDisplay={phoneDisplay}
        phoneHref={`tel:${phoneNumber}`}
        faxDisplay={settings.contact?.faxDisplay ?? defaults.settings.contact.faxDisplay}
        instagramHandle={instagramHandle}
        instagramUrl={instagramUrl}
        mapsLink={settings.contact?.mapsLink ?? defaults.settings.contact.mapsLink}
        mapsEmbedSrc={settings.contact?.mapsEmbedSrc ?? defaults.settings.contact.mapsEmbedSrc}
      />
      <Footer
        quote={settings.quote ?? defaults.settings.quote}
        tagline={settings.tagline ?? defaults.settings.tagline}
        addressLines={addressLines}
        hours={hours}
        phoneDisplay={phoneDisplay}
        phoneHref={`tel:${phoneNumber}`}
        instagramHandle={instagramHandle}
        instagramUrl={instagramUrl}
        mapsUrl={settings.contact?.mapsLink ?? defaults.settings.contact.mapsLink}
        companyName={settings.companyName ?? defaults.settings.companyName}
      />
    </>
  );
}
