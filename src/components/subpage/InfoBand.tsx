"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

export type FactLine = string | { text: string; href: string };

export type Fact = { heading: string; lines: FactLine[] };

type Tone = "espresso" | "gold";

type InfoBandProps = {
  tone?: Tone;
  eyebrow: string;
  heading: React.ReactNode;
  body?: string;
  facts?: Fact[];
  actions?: React.ReactNode;
  image?: { src: string; alt: string };
};

const TONE = {
  espresso: {
    band: "bg-cs-espresso",
    eyebrow: "text-cs-cream/55",
    heading: "text-cs-cream",
    body: "text-cs-cream/80",
    rule: "bg-cs-cream/15",
    factHeading: "text-cs-cream/55",
    factValue: "text-cs-cream/85",
    factLink:
      "underline decoration-cs-cream/40 underline-offset-4 transition-colors duration-300 hover:text-cs-cream hover:decoration-cs-cream focus-visible:text-cs-cream focus-visible:outline-none",
  },
  gold: {
    band: "bg-cs-gold",
    eyebrow: "text-cs-espresso/60",
    heading: "text-cs-espresso",
    body: "text-cs-espresso/85",
    rule: "bg-cs-espresso/20",
    factHeading: "text-cs-espresso/60",
    factValue: "text-cs-espresso/90",
    factLink:
      "underline decoration-cs-espresso/40 underline-offset-4 transition-colors duration-300 hover:decoration-cs-espresso focus-visible:outline-none",
  },
} as const;

/** A full-width feature band: eyebrow, heading, body, a facts row and actions. */
export default function InfoBand({
  tone = "espresso",
  eyebrow,
  heading,
  body,
  facts,
  actions,
  image,
}: InfoBandProps) {
  const reduceMotion = useReducedMotion();
  const t = TONE[tone];

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
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
  const imageReveal: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 1.08, clipPath: "inset(0% 0% 100% 0%)" },
    visible: reduceMotion
      ? { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }
      : {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
        },
  };

  return (
    <section className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] py-[clamp(24px,4vw,48px)]">
      <div className="w-full max-w-[1440px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={`grid w-full overflow-hidden rounded-[8px] ${t.band} ${
            image ? "lg:grid-cols-[1.15fr_1fr]" : ""
          }`}
        >
          <div className="flex flex-col justify-between gap-[clamp(32px,4.5vw,64px)] px-[clamp(24px,4vw,72px)] py-[clamp(36px,4.5vw,72px)]">
            <div className="flex flex-col items-start">
              <motion.p
                variants={item}
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${t.eyebrow}`}
              >
                {eyebrow}
              </motion.p>
              <motion.h2
                variants={item}
                className={`mt-4 max-w-[18ch] font-serif text-[clamp(30px,4vw,58px)] font-bold leading-[1.05] tracking-[-0.02em] ${t.heading}`}
              >
                {heading}
              </motion.h2>
              {body && (
                <motion.p
                  variants={item}
                  className={`mt-6 max-w-[48ch] text-[clamp(15px,1.2vw,18px)] font-medium leading-[1.6] ${t.body}`}
                >
                  {body}
                </motion.p>
              )}
              {actions && (
                <motion.div variants={item} className="mt-[clamp(24px,3vw,40px)]">
                  {actions}
                </motion.div>
              )}
            </div>

            {facts && facts.length > 0 && (
              <div className="flex flex-col gap-[clamp(20px,2.5vw,32px)]">
                <motion.div variants={rule} className={`h-px w-full origin-left ${t.rule}`} />
                <div className="grid grid-cols-1 gap-x-[clamp(16px,2vw,32px)] gap-y-6 sm:grid-cols-3">
                  {facts.map((fact) => (
                    <motion.div key={fact.heading} variants={item}>
                      <h3
                        className={`text-[12px] font-semibold uppercase tracking-[0.12em] ${t.factHeading}`}
                      >
                        {fact.heading}
                      </h3>
                      <p className={`mt-2.5 text-[clamp(14px,1vw,15px)] font-semibold leading-[1.55] ${t.factValue}`}>
                        {fact.lines.map((line, i) => {
                          const text = typeof line === "string" ? line : line.text;
                          return (
                            <span key={text}>
                              {i > 0 && <br />}
                              {typeof line === "string" ? (
                                line
                              ) : (
                                <a
                                  href={line.href}
                                  {...(line.href.startsWith("http")
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                                  className={t.factLink}
                                >
                                  {line.text}
                                </a>
                              )}
                            </span>
                          );
                        })}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {image && (
            <motion.div
              variants={imageReveal}
              className="group relative min-h-[clamp(280px,40vw,420px)] overflow-hidden lg:min-h-0"
            >
              <motion.div
                className="absolute inset-0"
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 26 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-[rgba(42,30,23,0.18)] transition-colors duration-500 group-hover:bg-[rgba(42,30,23,0.04)]" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
