"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import SteinhusenMark from "./SteinhusenMark";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Startseite", href: "#startseite" },
  { label: "Unser Angebot", href: "#angebot" },
  { label: "Das Café", href: "#cafe" },
  { label: "Kontakt", href: "#kontakt" },
];

const COLUMNS: [string, string][] = [
  ["ÖFFNUNGSZEITEN", "DI–FR 10–17:30 UHR"],
  ["SA & SO", "9–17:30 UHR"],
  ["CAFÉ MIT SERVICE", "AB 14:00 UHR"],
  ["AM BURGFELD 3", "23568 LÜBECK"],
  ["DAS NORDDEUTSCHE", "WIENER CAFÉHAUS"],
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
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const logoParallax = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70]);
  const imagesParallax = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 48]);

  const navContainer: Variants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 18,
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };
  const navItem: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : -10 },
    visible: { opacity: 1, y: 0 },
  };

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
    visible: reduceMotion
      ? { opacity: 1 }
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
        {/* Nav pill */}
        <motion.nav
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="relative flex w-full items-center justify-between gap-x-[clamp(16px,2.5vw,36px)] rounded-[6px] bg-cs-espresso px-[clamp(16px,3vw,32px)] py-[clamp(14px,1.4vw,17px)] text-[clamp(12px,1.15vw,16px)] font-semibold tracking-[-0.01em] text-cs-cream sm:justify-center"
        >
          {/* Brand — mobile only, keeps the pill balanced next to the toggle */}
          <motion.a
            href="#startseite"
            variants={navItem}
            onClick={() => setMenuOpen(false)}
            className="font-logo text-[19px] italic leading-none tracking-[0.01em] sm:hidden"
          >
            Café Steinhusen
          </motion.a>

          {/* Desktop links */}
          <div className="hidden items-center gap-x-[clamp(16px,2.5vw,36px)] sm:flex">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={navItem}
                whileHover={reduceMotion ? undefined : { y: -2, opacity: 0.75 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="whitespace-nowrap"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <motion.button
            type="button"
            variants={navItem}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="-mr-1 flex size-9 items-center justify-center rounded-[4px] text-cs-cream transition-colors duration-200 hover:bg-cs-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cs-cream/60 sm:hidden"
          >
            <span className="relative block h-4 w-6" aria-hidden>
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-0 top-0 block h-0.5 w-full rounded-full bg-current"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute bottom-0 left-0 block h-0.5 w-full rounded-full bg-current"
              />
            </span>
          </motion.button>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-nav"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-[6px] bg-cs-espresso py-2 shadow-[0_16px_40px_rgba(42,30,23,0.35)] sm:hidden"
              >
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-[clamp(16px,3vw,32px)] py-3 text-cs-cream transition-colors duration-200 hover:bg-cs-cream/10"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Café Steinhusen wordmark */}
        <motion.div
          style={{ y: logoParallax }}
          className="mt-[clamp(20px,3vw,44px)] flex w-full justify-center"
        >
          <SteinhusenMark
            startDelay={0.3}
            className="w-[clamp(280px,52vw,620px)]"
          />
        </motion.div>

        {/* Info columns */}
        <motion.div
          variants={columnsContainer}
          initial="hidden"
          animate="visible"
          className="mt-[clamp(28px,4.5vw,58px)] grid grid-cols-2 gap-x-[clamp(16px,2vw,24px)] gap-y-6 sm:grid-cols-3 lg:grid-cols-5"
        >
          {COLUMNS.map(([line1, line2]) => (
            <motion.p
              key={line1}
              variants={columnItem}
              className="text-[clamp(12px,1vw,16px)] font-semibold leading-[1.3] tracking-[-0.01em] text-foreground"
            >
              {line1}
              <br />
              {line2}
            </motion.p>
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
