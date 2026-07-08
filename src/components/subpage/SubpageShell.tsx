"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import SiteNav from "@/components/nav/SiteNav";
import Footer from "@/components/footer/Footer";

type HeroImage = { src: string; alt: string };

type SubpageShellProps = {
  eyebrow: string;
  /** The page's <h1>. May include an <em> for the italic serif accent. */
  title: React.ReactNode;
  lede: string;
  /** Primary image (always shown) + an optional offset accent image. */
  images: [HeroImage, HeroImage?];
  /** Call-to-action row rendered under the lede. */
  actions?: React.ReactNode;
  /** The rest of the page — full-bleed sections supplied by each route. */
  children: React.ReactNode;
};

/**
 * The frame shared by every business-line subpage: the espresso nav pill, an
 * editorial hero (copy beside an image duo), the page body, and the footer.
 */
export default function SubpageShell({
  eyebrow,
  title,
  lede,
  images,
  actions,
  children,
}: SubpageShellProps) {
  const reduceMotion = useReducedMotion();
  const [primary, secondary] = images;

  const copy: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: 0.15 } },
  };
  const copyItem: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };
  const imageReveal: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 1.06, clipPath: "inset(0% 0% 100% 0% round 8px)" },
    visible: reduceMotion
      ? { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 8px)" }
      : {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 8px)",
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
        },
  };
  const accentReveal: Variants = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.85, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 160, damping: 18, delay: 0.5 },
    },
  };

  return (
    <>
      <main className="flex w-full flex-1 flex-col">
        {/* Nav + hero */}
        <section className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] pb-[clamp(32px,5vw,72px)] pt-[clamp(24px,4vw,40px)]">
          <div className="w-full max-w-[1440px]">
            <SiteNav />

            <div className="mt-[clamp(36px,6vw,80px)] grid grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.05fr_1fr]">
              {/* Copy */}
              <motion.div
                variants={copy}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-start"
              >
                <motion.p
                  variants={copyItem}
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50"
                >
                  {eyebrow}
                </motion.p>
                <motion.h1
                  variants={copyItem}
                  className="mt-4 font-serif text-[clamp(38px,6vw,80px)] font-bold leading-[1.02] tracking-[-0.03em] text-cs-espresso"
                >
                  {title}
                </motion.h1>
                <motion.p
                  variants={copyItem}
                  className="mt-6 max-w-[46ch] text-[clamp(16px,1.5vw,21px)] font-medium leading-[1.55] tracking-[-0.01em] text-foreground/80"
                >
                  {lede}
                </motion.p>
                {actions && (
                  <motion.div variants={copyItem} className="mt-[clamp(24px,3vw,40px)]">
                    {actions}
                  </motion.div>
                )}
              </motion.div>

              {/* Image duo */}
              <motion.div
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <motion.div
                  variants={imageReveal}
                  className="group relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_20px_60px_rgba(42,30,23,0.18)]"
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  >
                    <Image
                      src={primary.src}
                      alt={primary.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-[rgba(42,30,23,0.1)] transition-colors duration-500 group-hover:bg-[rgba(42,30,23,0.02)]" />
                </motion.div>

                {secondary && (
                  <motion.div
                    variants={accentReveal}
                    className="absolute -bottom-[clamp(20px,3vw,44px)] -left-[clamp(12px,2vw,36px)] hidden aspect-[4/3] w-[42%] overflow-hidden rounded-[6px] shadow-[0_18px_44px_rgba(42,30,23,0.28)] ring-[6px] ring-background sm:block"
                  >
                    <Image
                      src={secondary.src}
                      alt={secondary.alt}
                      fill
                      sizes="(max-width: 1024px) 40vw, 20vw"
                      className="object-cover"
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </>
  );
}
