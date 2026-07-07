"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { BreadIcon } from "@/components/menu/MenuIcons";

const INSTAGRAM_URL = "https://www.instagram.com/cafe_konditorei/";
const PHONE_DISPLAY = "0451 35285";
const PHONE_HREF = "tel:+4945135285";

const FACTS: { heading: string; lines: string[] }[] = [
  {
    heading: "Wann",
    lines: ["Auf Anfrage,", "nach Absprache"],
  },
  {
    heading: "Für wen",
    lines: ["Bis zu", "45 Personen"],
  },
  {
    heading: "Was Sie erwartet",
    lines: ["Separater", "Raum"],
  },
];

/** Rotating stamp: circular text ring around the bread icon. */
function SundayBadge({
  reduceMotion,
  className,
}: {
  reduceMotion: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative aspect-square rounded-full bg-cs-espresso text-cs-gold shadow-[0_16px_40px_rgba(42,30,23,0.35)] ${className ?? ""}`}
    >
      <motion.svg
        viewBox="0 0 120 120"
        className="absolute inset-0 size-full"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
      >
        <defs>
          <path
            id="sunday-badge-arc"
            d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
            fill="none"
          />
        </defs>
        {/* textLength ≈ circle circumference (2π·45) so the ring closes evenly. */}
        <text fill="currentColor" fontSize="10" fontWeight="700">
          <textPath
            href="#sunday-badge-arc"
            startOffset="0"
            textLength="282"
            lengthAdjust="spacing"
          >
            DER TEERAUM · BIS ZU 45 PERSONEN ·
          </textPath>
        </text>
      </motion.svg>
      <BreadIcon className="absolute left-1/2 top-1/2 size-[32%] -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

export default function SundayBreakfast() {
  const reduceMotion = useReducedMotion() ?? false;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.09 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };
  const rule: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0 : 1 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const image: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 1.08, clipPath: "inset(0% 0% 100% 0%)" },
    visible: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
        },
  };
  const badge: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.5, rotate: -16 },
    visible: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { type: "spring", stiffness: 180, damping: 16, delay: 0.4 },
        },
  };

  return (
    <section
      id="teeraum"
      aria-labelledby="teeraum-heading"
      className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] pb-[clamp(24px,4vw,48px)] pt-[clamp(48px,6vw,88px)]"
    >
      <div className="w-full max-w-[1440px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative grid w-full rounded-[8px] bg-cs-gold lg:grid-cols-[1.15fr_1fr]"
        >
          {/* Rotating stamp — overhangs the top edge of the gold card */}
          <motion.div
            variants={badge}
            className="absolute -top-[clamp(28px,4vw,52px)] right-[clamp(20px,4vw,56px)] z-10 w-[clamp(96px,12vw,148px)]"
          >
            <SundayBadge reduceMotion={reduceMotion} className="size-full" />
          </motion.div>

          {/* Copy side */}
          <div className="flex flex-col justify-between gap-[clamp(36px,4.5vw,64px)] px-[clamp(24px,4vw,72px)] py-[clamp(36px,4.5vw,72px)] text-cs-espresso">
            <div className="flex flex-col items-start">
              {/* Right padding below lg keeps the eyebrow clear of the overhanging badge. */}
              <motion.p
                variants={item}
                className="pr-[clamp(96px,28vw,148px)] text-[11px] font-semibold uppercase tracking-[0.16em] text-cs-espresso/60 lg:pr-0"
              >
                Der Teeraum · Veranstaltungen
              </motion.p>

              <motion.h2
                id="teeraum-heading"
                variants={item}
                className="mt-4 max-w-[16ch] font-serif text-[clamp(34px,4.6vw,68px)] font-bold leading-[1.04] tracking-[-0.02em]"
              >
                Feiern Sie{" "}
                <em className="italic">im Teeraum</em>
              </motion.h2>

              <motion.p
                variants={item}
                className="mt-6 max-w-[46ch] text-[clamp(15px,1.2vw,18px)] font-medium leading-[1.6] text-cs-espresso/85"
              >
                In unserem separaten Teeraum feiern Sie ganz ungestört: Wir
                richten Ihre Veranstaltung für bis zu 45 Personen aus — vom
                Familienfest bis zur Feier mit Freunden. Sprechen Sie uns
                einfach an.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-[clamp(24px,3vw,40px)] flex flex-wrap items-center gap-3"
              >
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-cs-espresso px-[clamp(20px,2vw,28px)] py-[clamp(12px,1.2vw,16px)] text-[clamp(14px,1.1vw,16px)] font-semibold text-cs-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a2a20] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cs-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-cs-gold"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="size-[1.2em] shrink-0"
                  />
                  Anfrage per DM
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-cs-espresso/35 px-[clamp(20px,2vw,28px)] py-[clamp(10px,1.1vw,14px)] text-[clamp(14px,1.1vw,16px)] font-semibold text-cs-espresso transition-all duration-300 hover:-translate-y-0.5 hover:border-cs-espresso hover:bg-cs-espresso/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cs-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-cs-gold"
                >
                  {PHONE_DISPLAY}
                </a>
              </motion.div>
            </div>

            <div className="flex flex-col gap-[clamp(20px,2.5vw,32px)]">
              <motion.div
                variants={rule}
                className="h-px w-full origin-left bg-cs-espresso/20"
              />
              <div className="grid grid-cols-1 gap-x-[clamp(16px,2vw,32px)] gap-y-6 sm:grid-cols-3">
                {FACTS.map((fact) => (
                  <motion.div key={fact.heading} variants={item}>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cs-espresso/60">
                      {fact.heading}
                    </h3>
                    <p className="mt-2.5 text-[clamp(13px,1vw,15px)] font-semibold leading-[1.55] text-cs-espresso/90">
                      {fact.lines.map((line, i) => (
                        <span key={line}>
                          {i > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Image side */}
          <motion.div
            variants={image}
            className="group relative min-h-[clamp(280px,40vw,420px)] overflow-hidden rounded-b-[8px] lg:min-h-0 lg:rounded-bl-none lg:rounded-tr-[8px]"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={reduceMotion ? undefined : { scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
            >
              <Image
                src="/images/teeraum/saal.jpg"
                alt="Lange festlich gedeckte Tafel im separaten Teeraum des Café Steinhusen"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-[rgba(42,30,23,0.18)] transition-colors duration-500 group-hover:bg-[rgba(42,30,23,0.04)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
