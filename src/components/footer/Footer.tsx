"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import SteinhusenMark from "@/components/hero/SteinhusenMark";
import * as defaults from "@/lib/defaults";

type LinkItem = { label: string; href: string };

const NAV_LINKS: LinkItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Zum Mitnehmen", href: "/mitnehmen" },
  { label: "Café & Frühstück", href: "/cafe" },
  { label: "Torten auf Bestellung", href: "/bestellen" },
  { label: "Kontakt", href: "/#kontakt" },
];

const LEGAL_LINKS: LinkItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "/datenschutz" },
];

type FooterProps = {
  quote?: string;
  tagline?: string;
  addressLines?: [string, string];
  hours?: [string, string][];
  phoneDisplay?: string;
  phoneHref?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  mapsUrl?: string;
  companyName?: string;
};

export default function Footer(props: FooterProps = {}) {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const quote = props.quote ?? defaults.settings.quote;
  const addressLines = props.addressLines ?? defaults.settings.addressLines;
  const HOURS = props.hours ?? defaults.settings.hours;
  const PHONE_DISPLAY = props.phoneDisplay ?? defaults.settings.contact.phoneDisplay;
  const PHONE_HREF = props.phoneHref ?? `tel:${defaults.settings.contact.phoneNumber}`;
  const INSTAGRAM_HANDLE = props.instagramHandle ?? defaults.settings.contact.instagramHandle;
  const INSTAGRAM_URL = props.instagramUrl ?? defaults.settings.contact.instagramUrl;
  const MAPS_URL = props.mapsUrl ?? defaults.settings.contact.mapsLink;
  const companyName = props.companyName ?? defaults.settings.companyName;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <footer className="w-full bg-cs-espresso text-cs-cream">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex w-full max-w-[1440px] flex-col px-[clamp(16px,4vw,64px)] py-[clamp(40px,6vw,80px)]"
      >
        {/* Top: brand + link columns */}
        <div className="grid gap-x-[clamp(24px,3vw,48px)] gap-y-[clamp(32px,4vw,48px)] sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <motion.div variants={item} className="flex flex-col gap-5">
            <Link
              href="/"
              aria-label="Zur Startseite"
              className="w-fit transition-opacity duration-300 hover:opacity-75 focus-visible:opacity-75 focus-visible:outline-none"
            >
              <SteinhusenMark
                animate={false}
                light
                className="w-[clamp(170px,20vw,230px)]"
              />
            </Link>
            <p className="max-w-[34ch] font-serif text-[clamp(13px,1vw,15px)] italic leading-[1.55] text-cs-cream/80">
              {quote}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav variants={item} aria-label="Footer" className="flex flex-col gap-4">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Kontakt */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <FooterHeading>Kontakt</FooterHeading>
            <address className="flex flex-col gap-2.5 text-[clamp(13px,1vw,15px)] not-italic leading-[1.5] text-cs-cream/85">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit underline decoration-cs-cream/40 underline-offset-4 transition-colors duration-300 hover:text-cs-cream hover:decoration-cs-cream focus-visible:text-cs-cream focus-visible:outline-none"
              >
                {addressLines[0]}
                <br />
                {addressLines[1]}
              </a>
              <a
                href={PHONE_HREF}
                className="w-fit underline decoration-cs-cream/40 underline-offset-4 transition-colors duration-300 hover:text-cs-cream hover:decoration-cs-cream focus-visible:text-cs-cream focus-visible:outline-none"
              >
                Tel. {PHONE_DISPLAY}
              </a>
              <FooterLink href={INSTAGRAM_URL}>{INSTAGRAM_HANDLE}</FooterLink>
            </address>
          </motion.div>

          {/* Öffnungszeiten */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <FooterHeading>Öffnungszeiten</FooterHeading>
            <dl className="flex flex-col gap-2.5 text-[clamp(13px,1vw,15px)] leading-[1.5] text-cs-cream/85">
              {HOURS.map(([day, time]) => (
                <div key={day} className="flex flex-col">
                  <dt className="font-semibold text-cs-cream">{day}</dt>
                  <dd className="text-cs-cream/75">{time}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-[clamp(28px,4vw,48px)] h-px w-full bg-cs-cream/15" />

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="flex flex-col gap-4 text-[12px] leading-[1.5] text-cs-cream/70 md:flex-row md:items-center md:justify-between"
        >
          <p suppressHydrationWarning>
            © {year} {companyName} · Alle Rechte vorbehalten.
          </p>

          <nav aria-label="Rechtliches" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </nav>
        </motion.div>

        <p className="mt-4 text-[11px] leading-[1.5] text-cs-cream/45">
          {companyName} · {addressLines.join(", ")}
        </p>
      </motion.div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cs-cream/55">
      {children}
    </h2>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  const className =
    "w-fit text-[clamp(13px,1vw,15px)] text-cs-cream/85 underline-offset-4 transition-colors duration-300 hover:text-cs-cream hover:underline focus-visible:text-cs-cream focus-visible:underline focus-visible:outline-none";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
