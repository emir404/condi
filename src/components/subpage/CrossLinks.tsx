"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";

export type LineSlug = "mitnehmen" | "cafe" | "bestellen";

const LINES: Record<
  LineSlug,
  { href: string; label: string; blurb: string; image: string; alt: string }
> = {
  mitnehmen: {
    href: "/mitnehmen",
    label: "Zum Mitnehmen",
    blurb: "Über 30 Torten, Confiserie & Eis frisch aus der Vitrine.",
    image: "/images/menu/torten.jpg",
    alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
  },
  cafe: {
    href: "/cafe",
    label: "Café & Frühstück",
    blurb: "Frühstück, Kaffee und Kuchen im Wiener Caféhaus.",
    image: "/images/hero/cafe.jpg",
    alt: "Lichtdurchfluteter Wintergarten im Café Steinhusen",
  },
  bestellen: {
    href: "/bestellen",
    label: "Torten auf Bestellung",
    blurb: "Festtagstorten und der Teeraum für bis zu 45 Gäste.",
    image: "/images/teeraum/saal.jpg",
    alt: "Lange festlich gedeckte Tafel im Teeraum des Café Steinhusen",
  },
};

const ORDER: LineSlug[] = ["mitnehmen", "cafe", "bestellen"];

/** Bottom-of-page links to the other two lines of business. */
export default function CrossLinks({ current }: { current: LineSlug }) {
  const reduceMotion = useReducedMotion();
  const others = ORDER.filter((slug) => slug !== current);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <section className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] pb-[clamp(40px,6vw,88px)] pt-[clamp(24px,4vw,48px)]">
      <div className="w-full max-w-[1440px]">
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50"
        >
          Auch bei Steinhusen
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-5 grid grid-cols-1 gap-[clamp(16px,1.6vw,24px)] sm:grid-cols-2"
        >
          {others.map((slug) => {
            const line = LINES[slug];
            return (
              <motion.div key={slug} variants={item}>
                <Link
                  href={line.href}
                  className="group relative flex aspect-[16/9] flex-col justify-end overflow-hidden rounded-[8px] outline-none focus-visible:ring-2 focus-visible:ring-cs-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  >
                    <Image
                      src={line.image}
                      alt={line.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(42,30,23,0.9)] via-[rgba(42,30,23,0.3)] to-transparent" />
                  <div className="relative p-[clamp(20px,2.4vw,36px)]">
                    <h3 className="font-serif text-[clamp(24px,2.6vw,38px)] font-bold leading-[1.05] tracking-[-0.01em] text-cs-cream">
                      {line.label}
                    </h3>
                    <p className="mt-2 max-w-[38ch] text-[clamp(13px,1vw,15px)] font-medium leading-[1.5] text-cs-cream/85">
                      {line.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[clamp(13px,1vw,15px)] font-semibold text-cs-cream">
                      Ansehen
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
