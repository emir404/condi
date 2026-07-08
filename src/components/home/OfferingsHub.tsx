"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  CakeIcon,
  CoffeeIcon,
  CupcakeIcon,
  type MenuIconProps,
} from "@/components/menu/MenuIcons";

type Offering = {
  number: string;
  title: string;
  titleItalic?: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  alt: string;
  Icon: (props: MenuIconProps) => React.ReactElement;
};

/** The three lines of business, in the order of the customer journey. */
const OFFERINGS: Offering[] = [
  {
    number: "01",
    title: "Zum",
    titleItalic: "Mitnehmen",
    description:
      "Über 30 Tortensorten, Confiserie, Kleingebäck und Eis aus eigener Herstellung — frisch aus der Vitrine für zu Hause.",
    href: "/mitnehmen",
    cta: "Vitrine ansehen",
    image: "/images/menu/torten.jpg",
    alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
    Icon: CakeIcon,
  },
  {
    number: "02",
    title: "Café &",
    titleItalic: "Frühstück",
    description:
      "Setzen Sie sich: Frühstück, Kaffee und ein Stück Torte im lichten Wintergarten unseres Wiener Caféhauses.",
    href: "/cafe",
    cta: "Ins Café",
    image: "/images/hero/cafe.jpg",
    alt: "Lichtdurchfluteter Wintergarten mit warmem Licht im Café Steinhusen",
    Icon: CoffeeIcon,
  },
  {
    number: "03",
    title: "Torten auf",
    titleItalic: "Bestellung",
    description:
      "Motiv- und Festtagstorten für Ihre große Runde — und der Teeraum für Feiern mit bis zu 45 Gästen.",
    href: "/bestellen",
    cta: "Torte bestellen",
    image: "/images/teeraum/saal.jpg",
    alt: "Lange festlich gedeckte Tafel im separaten Teeraum des Café Steinhusen",
    Icon: CupcakeIcon,
  },
];

export default function OfferingsHub() {
  const reduceMotion = useReducedMotion();

  const intro: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
  };
  const introItem: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  const grid: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };
  const card: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 32, clipPath: "inset(0% 0% 100% 0% round 8px)" },
    visible: reduceMotion
      ? { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 8px)" }
      : {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0% round 8px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (
    <section
      id="angebot"
      aria-labelledby="angebot-heading"
      className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] py-[clamp(40px,6vw,88px)]"
    >
      <div className="w-full max-w-[1440px]">
        {/* Intro */}
        <motion.div
          variants={intro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-[62ch]"
        >
          <motion.p
            variants={introItem}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50"
          >
            Unser Angebot · seit 1972
          </motion.p>
          <motion.h2
            id="angebot-heading"
            variants={introItem}
            className="mt-4 font-serif text-[clamp(32px,4.6vw,60px)] font-bold leading-[1.05] tracking-[-0.02em] text-cs-espresso"
          >
            Ein Haus, <em className="italic text-cs-red">drei Wege</em>
          </motion.h2>
          <motion.p
            variants={introItem}
            className="mt-5 text-[clamp(15px,1.4vw,19px)] font-medium leading-[1.6] tracking-[-0.01em] text-foreground/80"
          >
            Konditorei zum Mitnehmen, Wiener Caféhaus zum Verweilen und
            Festtagstorten auf Bestellung — Café Steinhusen ist größer, als es
            die Vitrine verrät.
          </motion.p>
        </motion.div>

        {/* Three entry cards */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-[clamp(28px,4vw,56px)] grid grid-cols-1 gap-[clamp(16px,1.6vw,24px)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {OFFERINGS.map(({ number, title, titleItalic, description, href, cta, image, alt, Icon }) => (
            <motion.div key={href} variants={card}>
              <Link
                href={href}
                className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-[8px] outline-none focus-visible:ring-2 focus-visible:ring-cs-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:aspect-[3/4]"
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 26 }}
                >
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Espresso gradient — deep at the base for legible copy, lifts on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(42,30,23,0.9)] via-[rgba(42,30,23,0.35)] to-[rgba(42,30,23,0.15)] transition-opacity duration-500 group-hover:opacity-90" />

                {/* Number + icon, top */}
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-[clamp(20px,2vw,32px)] text-cs-gold">
                  <span className="font-serif text-[clamp(14px,1.1vw,16px)] font-semibold tracking-[0.1em]">
                    {number}
                  </span>
                  <Icon className="size-8 transition-transform duration-500 group-hover:-translate-y-0.5" />
                </div>

                {/* Title + copy, bottom */}
                <div className="relative p-[clamp(20px,2vw,32px)]">
                  <h3 className="font-serif text-[clamp(26px,2.6vw,38px)] font-bold leading-[1.02] tracking-[-0.01em] text-cs-cream">
                    {title}{" "}
                    <em className="italic text-cs-gold">{titleItalic}</em>
                  </h3>
                  <p className="mt-3 max-w-[32ch] text-[clamp(13px,1vw,15px)] font-medium leading-[1.5] text-cs-cream/85">
                    {description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[clamp(13px,1vw,15px)] font-semibold text-cs-cream">
                    {cta}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
