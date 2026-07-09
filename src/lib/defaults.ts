import type { Img } from "./cms";

/**
 * Fallback content used when the CMS has no data yet (e.g. a freshly migrated
 * production database before seeding). Images point at the static files in
 * `public/images`, so the site always renders. Once the CMS globals are
 * populated, the live data takes over.
 */

export type IconName = "cake" | "coffee" | "cupcake" | "bread";
export type FactLine = { text: string; href?: string };
export type Fact = { heading: string; lines: FactLine[] };
export type FeatureItem = { title: string; text?: string; image: Img; icon?: IconName };

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Steinhusen%20Am%20Burgfeld%203%2023568%20L%C3%BCbeck";

/* ---------------------------------- Settings --------------------------------- */

export const settings = {
  meta: {
    title: "Café Steinhusen — das norddeutsche Wiener Caféhaus | Lübeck",
    description:
      "Café Steinhusen in Lübeck: über 30 Tortensorten aus eigener Herstellung, Kleingebäck, Confiserie, Eis aus eigener Herstellung und belegte Brötchen. Am Burgfeld 3, 23568 Lübeck.",
  },
  contact: {
    street: "Am Burgfeld 3",
    city: "23568 Lübeck",
    phoneDisplay: "0451 35285",
    phoneNumber: "+4945135285",
    faxDisplay: "0451 3844828",
    instagramHandle: "@cafe_konditorei",
    instagramUrl: "https://www.instagram.com/cafe_konditorei/",
    mapsLink: MAPS_URL,
    mapsEmbedSrc:
      "https://maps.google.de/maps?hl=de&q=Caf%C3%A9%20Steinhusen%20Am%20Burgfeld%203%20L%C3%BCbeck&t=&z=15&ie=utf8&iwloc=b&output=embed",
  },
  addressLines: ["Am Burgfeld 3", "23568 Lübeck"] as [string, string],
  hours: [
    ["Dienstag – Freitag", "10:00 – 17:30 Uhr"],
    ["Samstag & Sonntag", "9:00 – 17:30 Uhr"],
    ["Café mit Service", "ab 14:00 Uhr"],
  ] as [string, string][],
  tagline: "Das norddeutsche Wiener Caféhaus · Lübeck",
  quote: "„There is beauty in timeless things.“",
  companyName: "Café Steinhusen GmbH",
};

/* ---------------------------------- Homepage --------------------------------- */

export const heroColumns: {
  label: string;
  value: string;
  href?: string;
  wide?: boolean;
}[] = [
  { label: "Öffnungszeiten", value: "Di–Fr · 10–17:30 Uhr" },
  { label: "Wochenende", value: "Sa & So · 9–17:30 Uhr" },
  { label: "Café mit Service", value: "ab 14:00 Uhr" },
  { label: "Adresse", value: "Am Burgfeld 3, 23568 Lübeck", href: MAPS_URL },
  {
    label: "Das norddeutsche Wiener Caféhaus",
    value: "Seit 1972 in Lübeck",
    wide: true,
  },
];

export const heroImages: Img[] = [
  {
    src: "/images/hero/storefront.jpg",
    alt: "Das Café Steinhusen am Burgfeld 3 in Lübeck mit dem historischen Schriftzug über dem Eingang",
  },
  {
    src: "/images/hero/cafe.jpg",
    alt: "Lichtdurchfluteter Wintergarten mit warmem Licht im Café Steinhusen",
  },
  {
    src: "/images/hero/saal.jpg",
    alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen",
  },
];

export const offerings = {
  eyebrow: "Unser Angebot · seit 1972",
  heading: "Ein Haus, *drei Wege*",
  intro:
    "Konditorei zum Mitnehmen, Wiener Caféhaus zum Verweilen und Festtagstorten auf Bestellung — Café Steinhusen ist größer, als es die Vitrine verrät.",
  cards: [
    {
      number: "01",
      title: "Zum *Mitnehmen*",
      description:
        "Über 30 Tortensorten, Confiserie, Kleingebäck und Eis aus eigener Herstellung — frisch aus der Vitrine für zu Hause.",
      href: "/mitnehmen",
      cta: "Vitrine ansehen",
      image: {
        src: "/images/menu/torten.jpg",
        alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
      },
      icon: "cake" as IconName,
    },
    {
      number: "02",
      title: "Café & *Frühstück*",
      description:
        "Setzen Sie sich: Frühstück, Kaffee und ein Stück Torte im lichten Wintergarten unseres Wiener Caféhauses.",
      href: "/cafe",
      cta: "Ins Café",
      image: {
        src: "/images/hero/cafe.jpg",
        alt: "Lichtdurchfluteter Wintergarten mit warmem Licht im Café Steinhusen",
      },
      icon: "coffee" as IconName,
    },
    {
      number: "03",
      title: "Torten auf *Bestellung*",
      description:
        "Motiv- und Festtagstorten für Ihre große Runde — und der Teeraum für Feiern mit bis zu 45 Gästen.",
      href: "/bestellen",
      cta: "Torte bestellen",
      image: {
        src: "/images/teeraum/saal.jpg",
        alt: "Lange festlich gedeckte Tafel im separaten Teeraum des Café Steinhusen",
      },
      icon: "cupcake" as IconName,
    },
  ],
};

export const about = {
  eyebrow: "Das Café · das norddeutsche Wiener Caféhaus",
  quote: "„There is beauty in timeless things.“",
  paragraph1:
    "Das Café Steinhusen ist der Versuch des Wiener Cafés in norddeutscher Moderne — in historischen Räumlichkeiten von 1899, einst als Ferienhaus vor den Toren Lübecks gebaut.",
  paragraph2:
    "1972 mit 40 Plätzen gestartet, wurde das Haus mehrmals umgebaut und erweitert — und ist dabei doch nie stehen geblieben.",
  closing: "Seien Sie unser Gast — be our guest.",
  gallery: [
    { src: "/images/about/cafe-00.jpg", alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen" },
    { src: "/images/about/cafe-01.jpg", alt: "Wintergarten mit warmem Licht und Lüstern im Café Steinhusen" },
    { src: "/images/about/cafe-02.jpg", alt: "Gemütliche Sitzecke im Café Steinhusen" },
    { src: "/images/about/cafe-03.jpg", alt: "Torte aus eigener Herstellung im Café Steinhusen" },
    { src: "/images/about/cafe-04.jpg", alt: "Himbeer-Baiser-Törtchen aus der Konditorei" },
    { src: "/images/about/cafe-05.jpg", alt: "Baiser-Kuchen mit frischen Erdbeeren" },
  ] as Img[],
};

export const contact = {
  eyebrow: "Kontakt & Besuch",
  heading: "Besuchen Sie *uns*",
  text: "Über 30 Tortensorten, Kleingebäck, Confiserie und Eis aus eigener Herstellung — mitten in Lübeck. Folgen Sie uns auch auf Instagram.",
  image: {
    src: "/images/contact/innenraum.jpg",
    alt: "Gastraum im Café Steinhusen mit warmem Licht und Lüstern",
  } as Img,
  umgebung: [
    "Burgtor · 500 m",
    "Hansemuseum · 700 m",
    "Heilige-Geist-Hospital · 750 m",
    "Jakobikirche · 900 m",
    "Buddenbrookhaus · 1,3 km",
    "Marienkirche · 1,4 km",
    "Rathaus · 1,4 km",
    "Lisa von Lübeck · 1,8 km",
    "Holstentor · 1,9 km",
    "Lübecker Dom · 2,1 km",
  ],
};

/* --------------------------------- Mitnehmen --------------------------------- */

export const mitnehmen = {
  hero: {
    eyebrow: "Konditorei · Zum Mitnehmen",
    title: "Frisch aus der *Vitrine*",
    lede: "Über 30 Tortensorten, feine Confiserie, Kleingebäck und Eis — alles aus eigener Herstellung. Aussuchen, einpacken lassen und zu Hause genießen.",
    primaryImage: {
      src: "/images/menu/torten.jpg",
      alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
    } as Img,
    secondaryImage: {
      src: "/images/menu/confiserie.jpg",
      alt: "Himbeer-Baiser-Törtchen aus der Konditorei",
    } as Img | null,
  },
  vitrine: {
    eyebrow: "Aus unserer Vitrine",
    heading: "Was heute für Sie *bereitsteht*",
    intro:
      "Alles aus eigener Herstellung — jeden Tag frisch. Ein Auszug aus dem, was in der Vitrine auf Sie wartet.",
    items: [
      { title: "Torten", text: "Über 30 Sorten, täglich frisch aus der eigenen Konditorei.", image: { src: "/images/menu/torten.jpg", alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen" }, icon: "cake" as IconName },
      { title: "Confiserie & Kleingebäck", text: "Feine Pralinen, Baiser und Petits Fours zum Verschenken.", image: { src: "/images/menu/confiserie.jpg", alt: "Himbeer-Baiser-Törtchen aus der Konditorei" }, icon: "cupcake" as IconName },
      { title: "Kuchen & Feingebäck", text: "Klassiker vom Blech — Stück für Stück eingepackt.", image: { src: "/images/menu/kuchen.jpg", alt: "Baiser-Kuchen mit frischen Erdbeeren" }, icon: "coffee" as IconName },
      { title: "Belegte Brötchen", text: "Herzhaft belegt — der schnelle Gruß für zwischendurch.", image: { src: "/images/menu/broetchen.jpg", alt: "Platte mit reich belegten Brötchen im Café Steinhusen" }, icon: "bread" as IconName },
    ] as FeatureItem[],
  },
  infoBand: {
    eyebrow: "Gut zu wissen",
    heading: "Ganze Torten gern *vorbestellen*",
    body: "Für ganze Torten und größere Mengen empfehlen wir eine kurze Vorbestellung — dann steht Ihre Auswahl frisch und pünktlich für Sie bereit. Ein Anruf genügt.",
    facts: [
      { heading: "Öffnungszeiten", lines: [{ text: "Di – Fr 10 – 17:30" }, { text: "Sa & So 9 – 17:30" }] },
      { heading: "Vorbestellung", lines: [{ text: "Telefonisch" }, { text: "0451 35285", href: "tel:+4945135285" }] },
      { heading: "Adresse", lines: [{ text: "Am Burgfeld 3, 23568 Lübeck", href: MAPS_URL }] },
    ] as Fact[],
  },
};

/* ------------------------------------ Café ----------------------------------- */

export const cafe = {
  hero: {
    eyebrow: "Wiener Caféhaus · Setzen Sie sich",
    title: "Verweilen im *Wintergarten*",
    lede: "Frühstück am Morgen, Kaffee und ein Stück Torte am Nachmittag — in den historischen Räumen von 1899. Das norddeutsche Wiener Caféhaus.",
    primaryImage: {
      src: "/images/hero/cafe.jpg",
      alt: "Lichtdurchfluteter Wintergarten mit warmem Licht im Café Steinhusen",
    } as Img,
    secondaryImage: {
      src: "/images/hero/saal.jpg",
      alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen",
    } as Img | null,
  },
  experience: {
    eyebrow: "Was Sie erwartet",
    heading: "Vom Frühstück bis zum *Nachmittag*",
    intro:
      "Ob kurz auf einen Kaffee oder für einen ganzen Nachmittag — bei uns nehmen Sie sich Zeit.",
    items: [
      { title: "Frühstück", text: "Herzhaft in den Tag — mit belegten Brötchen und mehr.", image: { src: "/images/menu/broetchen.jpg", alt: "Platte mit reich belegten Brötchen im Café Steinhusen" }, icon: "bread" as IconName },
      { title: "Kaffee & Kuchen", text: "Kaffeespezialitäten und ein Stück Kuchen am Nachmittag.", image: { src: "/images/menu/kuchen.jpg", alt: "Baiser-Kuchen mit frischen Erdbeeren, dazu Kaffee" }, icon: "coffee" as IconName },
      { title: "Über 30 Torten", text: "Die ganze Vitrine — auch zum Hierbleiben und Genießen.", image: { src: "/images/menu/torten.jpg", alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen" }, icon: "cake" as IconName },
      { title: "Café mit Service", text: "Bedienung am Tisch im Wintergarten — ab 14 Uhr.", image: { src: "/images/about/cafe-02.jpg", alt: "Gemütliche Sitzecke im Café Steinhusen" } },
    ] as FeatureItem[],
  },
  rooms: {
    eyebrow: "Unsere Räume",
    heading: "Ein Haus, das über die Jahre *gewachsen* ist",
    images: [
      { src: "/images/about/cafe-00.jpg", alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen" },
      { src: "/images/about/cafe-01.jpg", alt: "Wintergarten mit warmem Licht und Lüstern im Café Steinhusen" },
      { src: "/images/contact/innenraum.jpg", alt: "Gastraum im Café Steinhusen mit warmem Licht und Lüstern" },
      { src: "/images/hero/saal.jpg", alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen" },
      { src: "/images/about/cafe-02.jpg", alt: "Gemütliche Sitzecke im Café Steinhusen" },
      { src: "/images/hero/cafe.jpg", alt: "Lichtdurchfluteter Wintergarten mit warmem Licht im Café Steinhusen" },
      { src: "/images/about/cafe-03.jpg", alt: "Torte aus eigener Herstellung im Café Steinhusen" },
      { src: "/images/about/cafe-05.jpg", alt: "Baiser-Kuchen mit frischen Erdbeeren" },
    ] as Img[],
  },
  infoBand: {
    eyebrow: "Öffnungszeiten & Anfahrt",
    heading: "Mitten in *Lübeck*, seit 1972",
    body: "Am Burgfeld, nur wenige Schritte vom Burgtor und der Altstadt entfernt. Kommen Sie vorbei — ein Tisch findet sich fast immer.",
    facts: [
      { heading: "Di – Fr", lines: [{ text: "10:00 – 17:30 Uhr" }] },
      { heading: "Sa & So", lines: [{ text: "9:00 – 17:30 Uhr" }, { text: "Café mit Service ab 14 Uhr" }] },
      { heading: "Adresse", lines: [{ text: "Am Burgfeld 3, 23568 Lübeck", href: MAPS_URL }] },
    ] as Fact[],
  },
};

/* --------------------------------- Bestellen --------------------------------- */

export const bestellen = {
  hero: {
    eyebrow: "Feiern & Bestellen",
    title: "Torten für Ihre *große Runde*",
    lede: "Motiv- und Festtagstorten auf Bestellung — vom Geburtstag bis zur Hochzeit. Und für die Feier selbst: unser separater Teeraum für bis zu 45 Gäste.",
    primaryImage: {
      src: "/images/teeraum/saal.jpg",
      alt: "Lange festlich gedeckte Tafel im separaten Teeraum des Café Steinhusen",
    } as Img,
    secondaryImage: {
      src: "/images/menu/confiserie.jpg",
      alt: "Himbeer-Baiser-Törtchen aus der Konditorei",
    } as Img | null,
  },
  steps: {
    eyebrow: "So bestellen Sie",
    heading: "In drei Schritten zur *eigenen Torte*",
    items: [
      { number: "01", title: "Anfragen", text: "Rufen Sie uns an oder schreiben Sie per DM — mit Anlass, Termin und Personenzahl." },
      { number: "02", title: "Absprechen", text: "Wir beraten Sie zu Sorte, Größe und Motiv und halten alles für Sie fest." },
      { number: "03", title: "Abholen", text: "Ihre Torte wird frisch gefertigt und steht pünktlich zum Fest bereit." },
    ],
  },
  occasions: {
    eyebrow: "Für jeden Anlass",
    heading: "Ob Geburtstag, Jubiläum oder *Hochzeit*",
    intro: "",
    items: [
      { title: "Festtags- & Geburtstagstorten", text: "Der Mittelpunkt jeder Feier — in Ihrer Wunschgröße.", image: { src: "/images/menu/torten.jpg", alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen" }, icon: "cake" as IconName },
      { title: "Motivtorten nach Wunsch", text: "Persönlich gestaltet — erzählen Sie uns einfach Ihre Idee.", image: { src: "/images/menu/confiserie.jpg", alt: "Himbeer-Baiser-Törtchen aus der Konditorei" }, icon: "cupcake" as IconName },
      { title: "Kleingebäck in Menge", text: "Platten und Feingebäck für die ganze große Runde.", image: { src: "/images/menu/kuchen.jpg", alt: "Baiser-Kuchen mit frischen Erdbeeren" }, icon: "bread" as IconName },
    ] as FeatureItem[],
  },
  teeraum: {
    eyebrow: "Der Teeraum · Veranstaltungen",
    heading: "Feiern Sie *im Teeraum*",
    body: "In unserem separaten Teeraum feiern Sie ganz ungestört: Wir richten Ihre Veranstaltung für bis zu 45 Personen aus — vom Familienfest bis zur Feier mit Freunden. Sprechen Sie uns einfach an.",
    image: {
      src: "/images/teeraum/saal.jpg",
      alt: "Lange festlich gedeckte Tafel im separaten Teeraum des Café Steinhusen",
    } as Img,
    facts: [
      { heading: "Wann", lines: ["Auf Anfrage,", "nach Absprache"] },
      { heading: "Für wen", lines: ["Bis zu", "45 Personen"] },
      { heading: "Was Sie erwartet", lines: ["Separater", "Raum"] },
    ],
  },
};
