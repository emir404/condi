"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

export type GalleryImage = { src: string; alt: string };

type GalleryProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  images: GalleryImage[];
};

/** An even, staggered photo grid — for showing off the rooms. */
export default function Gallery({ eyebrow, heading, images }: GalleryProps) {
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
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  };
  const tile: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 1.05, clipPath: "inset(0% 0% 100% 0% round 6px)" },
    visible: reduceMotion
      ? { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 6px)" }
      : {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 6px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (
    <section className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] py-[clamp(32px,5vw,72px)]">
      <div className="w-full max-w-[1440px]">
        {(eyebrow || heading) && (
          <motion.div
            variants={head}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-[clamp(24px,3.5vw,48px)] max-w-[56ch]"
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
          </motion.div>
        )}

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-[clamp(10px,1.4vw,20px)] md:grid-cols-3 lg:grid-cols-4"
        >
          {images.map((img) => (
            <motion.div
              key={img.src}
              variants={tile}
              className="group relative aspect-[4/5] overflow-hidden rounded-[6px]"
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
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-[rgba(42,30,23,0.1)] transition-colors duration-500 group-hover:bg-[rgba(42,30,23,0.0)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
