"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { MenuIconProps } from "@/components/menu/MenuIcons";

export type Feature = {
  title: string;
  text?: string;
  image: string;
  alt: string;
  Icon?: (props: MenuIconProps) => React.ReactElement;
};

type FeatureGridProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  intro?: string;
  items: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const COLS: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/** A responsive grid of image cards with a title and short caption. */
export default function FeatureGrid({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
  className,
}: FeatureGridProps) {
  const reduceMotion = useReducedMotion();

  const head: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  };
  const headItem: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  const grid: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
  };
  const card: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 28, clipPath: "inset(0% 0% 100% 0% round 8px)" },
    visible: reduceMotion
      ? { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 8px)" }
      : {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0% round 8px)",
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (
    <section
      className={`flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] py-[clamp(32px,5vw,72px)] ${className ?? ""}`}
    >
      <div className="w-full max-w-[1440px]">
        {(eyebrow || heading || intro) && (
          <motion.div
            variants={head}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-[60ch]"
          >
            {eyebrow && (
              <motion.p
                variants={headItem}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50"
              >
                {eyebrow}
              </motion.p>
            )}
            {heading && (
              <motion.h2
                variants={headItem}
                className="mt-4 font-serif text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-cs-espresso"
              >
                {heading}
              </motion.h2>
            )}
            {intro && (
              <motion.p
                variants={headItem}
                className="mt-5 text-[clamp(15px,1.3vw,18px)] font-medium leading-[1.6] text-foreground/80"
              >
                {intro}
              </motion.p>
            )}
          </motion.div>
        )}

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className={`mt-[clamp(24px,3.5vw,48px)] grid grid-cols-1 gap-[clamp(16px,1.6vw,24px)] ${COLS[columns]}`}
        >
          {items.map(({ title, text, image, alt, Icon }) => (
            <motion.div
              key={title}
              variants={card}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[8px]"
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(42,30,23,0.9)] via-[rgba(42,30,23,0.28)] to-transparent" />

              {Icon && (
                <div className="absolute left-[clamp(16px,1.6vw,24px)] top-[clamp(16px,1.6vw,24px)] text-cs-gold transition-transform duration-500 group-hover:-translate-y-0.5">
                  <Icon className="size-8" />
                </div>
              )}

              <div className="relative p-[clamp(18px,1.8vw,26px)]">
                <h3 className="font-serif text-[clamp(20px,1.9vw,26px)] font-bold leading-[1.1] tracking-[-0.01em] text-cs-cream">
                  {title}
                </h3>
                {text && (
                  <p className="mt-2 text-[clamp(12px,0.95vw,14px)] font-medium leading-[1.5] text-cs-cream/85">
                    {text}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
