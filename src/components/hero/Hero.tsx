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
import SteinhusenMark from "./SteinhusenMark";
import SiteNav from "@/components/nav/SiteNav";
import { MAPS_URL } from "@/lib/site";

const COLUMNS: { label: string; value: string; href?: string; wide?: boolean }[] = [
  { label: "Öffnungszeiten", value: "Di–Fr · 10–17:30 Uhr" },
  { label: "Wochenende", value: "Sa & So · 9–17:30 Uhr" },
  { label: "Café mit Service", value: "ab 14:00 Uhr" },
  { label: "Adresse", value: "Am Burgfeld 3, 23568 Lübeck", href: MAPS_URL },
  { label: "Das norddeutsche Wiener Caféhaus", value: "Seit 1972 in Lübeck", wide: true },
];

const IMAGES = [
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

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const logoParallax = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70]);
  const imagesParallax = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 48]);

  const columnsContainer: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: 0.5, staggerChildren: reduceMotion ? 0 : 0.09 },
    },
  };
  const columnItem: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  const imagesContainer: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: 0.7, staggerChildren: reduceMotion ? 0 : 0.16 },
    },
  };
  const imageItem: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 1.08, clipPath: "inset(100% 0% 0% 0% round 6px)" },
    // The reduced branch still resets scale/clipPath: server HTML may carry the
    // full hidden state, and React leaves mismatched inline styles in place.
    visible: reduceMotion
      ? { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 6px)" }
      : {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 6px)",
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (
    <section
      ref={sectionRef}
      id="startseite"
      className="flex w-full flex-1 justify-center bg-background px-[clamp(16px,4vw,64px)] py-[clamp(24px,4vw,40px)]"
    >
      <div className="flex w-full max-w-[1440px] flex-col">
        {/* Shared nav pill */}
        <SiteNav />

        {/* Café Steinhusen wordmark */}
        <motion.div
          style={{ y: logoParallax }}
          className="mt-[clamp(20px,3vw,44px)] flex w-full justify-center"
        >
          <SteinhusenMark startDelay={0.3} className="w-full" />
        </motion.div>

        {/* Info columns */}
        <motion.div
          variants={columnsContainer}
          initial="hidden"
          animate="visible"
          className="mt-[clamp(28px,4.5vw,58px)] grid grid-cols-2 gap-x-[clamp(16px,2vw,24px)] gap-y-6 sm:grid-cols-3 lg:grid-cols-5"
        >
          {COLUMNS.map(({ label, value, href, wide }) => (
            <motion.div
              key={label}
              variants={columnItem}
              className={wide ? "col-span-2 sm:col-span-1" : undefined}
            >
              <p className="text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.14em] text-foreground/50">
                {label}
              </p>
              <p className="mt-1.5 text-[clamp(13px,1vw,15px)] font-semibold leading-[1.35] tracking-[-0.01em] text-foreground">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-foreground/30 underline-offset-4 transition-colors duration-300 hover:text-cs-red hover:decoration-cs-red/60 focus-visible:text-cs-red focus-visible:outline-none"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image row */}
        <motion.div
          variants={imagesContainer}
          initial="hidden"
          animate="visible"
          style={{ y: imagesParallax }}
          className="mt-[clamp(28px,5vw,64px)] grid grid-cols-1 gap-[clamp(12px,1.5vw,24px)] sm:grid-cols-3"
        >
          {IMAGES.map((img) => (
            <motion.div
              key={img.src}
              variants={imageItem}
              className="group relative aspect-[16/10] overflow-hidden rounded-[6px] sm:aspect-[0.66]"
            >
              <motion.div
                className="absolute inset-0"
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                transition={{ type: "spring", stiffness: 200, damping: 26 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-[rgba(42,30,23,0.12)] transition-colors duration-500 group-hover:bg-[rgba(42,30,23,0.02)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
