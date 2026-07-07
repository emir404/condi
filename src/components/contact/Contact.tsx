"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";

const MAPS_EMBED_SRC =
  "https://maps.google.de/maps?hl=de&q=Caf%C3%A9%20Steinhusen%20Am%20Burgfeld%203%20L%C3%BCbeck&t=&z=15&ie=utf8&iwloc=b&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Steinhusen%20Am%20Burgfeld%203%2023568%20L%C3%BCbeck";

const INSTAGRAM_URL = "https://www.instagram.com/cafe_konditorei/";

const INFO_BLOCKS: { heading: string; lines: string[] }[] = [
  {
    heading: "Adresse",
    lines: ["Am Burgfeld 3", "23568 Lübeck"],
  },
  {
    heading: "Öffnungszeiten",
    lines: ["Di – Fr 10:00 – 17:30", "Sa & So 9:00 – 17:30 · Café ab 14:00"],
  },
  {
    heading: "Telefon",
    lines: ["Tel. 0451 35285", "Fax 0451 3844828"],
  },
];

/** Nearby Lübeck sights with walking distances (from the condi.de contact page). */
const UMGEBUNG: string[] = [
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
];

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -40],
  );

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
  const map: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, clipPath: "inset(100% 0% 0% 0% round 6px)" },
    visible: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0% round 6px)",
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        },
  };
  const mapCard: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20, delay: 0.35 },
    },
  };

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] pb-[clamp(24px,4vw,40px)] pt-[clamp(40px,6vw,88px)]"
    >
      <div className="flex w-full max-w-[1440px] flex-col gap-[clamp(12px,1.5vw,24px)]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid w-full overflow-hidden rounded-[6px] bg-cs-espresso lg:grid-cols-[1.15fr_1fr]"
      >
        {/* Copy side */}
        <div className="flex flex-col justify-between gap-[clamp(40px,5vw,72px)] px-[clamp(24px,4vw,72px)] py-[clamp(36px,4.5vw,72px)] text-cs-cream">
          <div className="flex flex-col items-start">
            <motion.p
              variants={item}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cs-cream/55"
            >
              Kontakt & Besuch
            </motion.p>

            <motion.h2
              variants={item}
              className="mt-4 text-[clamp(38px,5.5vw,84px)] font-bold leading-[1.02] tracking-[-0.03em]"
            >
              Besuchen
              <br />
              Sie uns
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-[36ch] text-[clamp(14px,1.1vw,17px)] leading-[1.55] text-cs-cream/80"
            >
              Über 30 Tortensorten, Kleingebäck, Confiserie und Eis aus
              eigener Herstellung — mitten in Lübeck. Folgen Sie uns auch
              auf Instagram.
            </motion.p>

            <motion.a
              variants={item}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-[clamp(24px,3vw,44px)] inline-block focus-visible:outline-none"
              aria-label="Instagram: @cafe_konditorei"
            >
              <motion.span
                className="flex items-center gap-[0.4em] whitespace-nowrap text-[clamp(22px,3.2vw,46px)] font-bold tracking-[-0.02em] text-cs-cream transition-colors duration-300 group-hover:text-white group-focus-visible:text-white"
                whileHover={reduceMotion ? undefined : { x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Image
                  src="/icons/instagram.svg"
                  alt=""
                  aria-hidden="true"
                  width={52}
                  height={52}
                  className="h-[0.9em] w-[0.9em] shrink-0"
                />
                @cafe_konditorei
              </motion.span>
              <span className="mt-1 block h-[3px] w-full origin-left scale-x-0 rounded-full bg-cs-cream/70 transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </motion.a>
          </div>

          <div className="flex flex-col gap-[clamp(20px,2.5vw,32px)]">
            <motion.div
              variants={rule}
              className="h-px w-full origin-left bg-cs-cream/15"
            />
            <div className="grid grid-cols-1 gap-x-[clamp(16px,2vw,32px)] gap-y-6 sm:grid-cols-3">
              {INFO_BLOCKS.map((block) => (
                <motion.div key={block.heading} variants={item}>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cs-cream/55">
                    {block.heading}
                  </h3>
                  <p className="mt-2.5 text-[clamp(13px,1vw,15px)] leading-[1.55] text-cs-cream/85">
                    {block.lines.map((line, i) => (
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
          className="group relative min-h-[clamp(280px,40vw,420px)] overflow-hidden lg:min-h-0"
        >
          <motion.div
            className="absolute -inset-y-12 inset-x-0"
            style={{ y: imageParallax }}
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
          >
            <Image
              src="/images/contact/innenraum.jpg"
              alt="Gastraum im Café Steinhusen mit warmem Licht und Lüstern"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-[rgba(42,30,23,0.22)] transition-colors duration-500 group-hover:bg-[rgba(42,30,23,0.08)]" />
        </motion.div>
      </motion.div>

      {/* Map */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative"
      >
        <motion.div
          variants={map}
          className="relative h-[clamp(320px,38vw,480px)] w-full overflow-hidden rounded-[6px]"
        >
          <iframe
            src={MAPS_EMBED_SRC}
            title="Café Steinhusen auf Google Maps — Am Burgfeld 3, 23568 Lübeck"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0 grayscale-[35%] sepia-[12%] transition-[filter] duration-700 hover:grayscale-0 hover:sepia-0"
          />
        </motion.div>

        {/* Floating address card */}
        <motion.div
          variants={mapCard}
          className="pointer-events-none absolute bottom-[clamp(12px,2vw,24px)] left-[clamp(12px,2vw,24px)] max-w-[calc(100%-clamp(24px,4vw,48px))]"
        >
          <div className="pointer-events-auto flex flex-col gap-1 rounded-[6px] bg-cs-espresso px-[clamp(18px,2vw,28px)] py-[clamp(14px,1.6vw,22px)] text-cs-cream shadow-[0_12px_40px_rgba(42,30,23,0.35)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cs-cream/55">
              Sie finden uns hier
            </p>
            <p className="text-[clamp(15px,1.3vw,19px)] font-bold tracking-[-0.01em]">
              Am Burgfeld 3 · 23568 Lübeck
            </p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-fit text-[clamp(12px,1vw,14px)] font-semibold text-cs-cream/85 underline underline-offset-4 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              Route planen
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Umgebung — nearby Lübeck sights */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="mt-[clamp(4px,1vw,12px)]"
      >
        <motion.p
          variants={item}
          className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50"
        >
          In der Nähe — die Königin der Hanse vor der Tür
        </motion.p>
        <motion.ul
          variants={item}
          className="mt-4 flex flex-wrap gap-x-3 gap-y-3"
        >
          {UMGEBUNG.map((sight) => (
            <li
              key={sight}
              className="rounded-full border border-cs-espresso/15 bg-cs-espresso/[0.04] px-[clamp(12px,1.2vw,18px)] py-[clamp(7px,0.7vw,10px)] text-[clamp(12px,0.95vw,14px)] font-semibold tracking-[-0.01em] text-foreground/80"
            >
              {sight}
            </li>
          ))}
        </motion.ul>
      </motion.div>
      </div>
    </section>
  );
}
