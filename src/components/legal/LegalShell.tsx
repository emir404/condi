"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import SteinhusenMark from "@/components/hero/SteinhusenMark";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  /** Optional note shown under the title, e.g. "Stand: 27. Februar 2023". */
  note?: string;
  children: React.ReactNode;
};

export default function LegalShell({
  eyebrow,
  title,
  note,
  children,
}: LegalShellProps) {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
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

  return (
    <main className="flex w-full flex-1 justify-center bg-background px-[clamp(16px,4vw,64px)] py-[clamp(24px,4vw,40px)]">
      <div className="flex w-full max-w-[1440px] flex-col">
        {/* Top bar */}
        <motion.nav
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="flex w-full items-center justify-between gap-4 rounded-[6px] bg-cs-espresso px-[clamp(16px,3vw,32px)] py-[clamp(12px,1.2vw,15px)] text-cs-cream"
        >
          <Link
            href="/"
            aria-label="Zur Startseite"
            className="transition-opacity duration-300 hover:opacity-75 focus-visible:opacity-75 focus-visible:outline-none"
          >
            <SteinhusenMark
              animate={false}
              light
              className="w-[clamp(120px,14vw,168px)]"
            />
          </Link>
          <Link
            href="/"
            className="whitespace-nowrap text-[clamp(12px,1.15vw,16px)] font-semibold tracking-[-0.01em] transition-opacity duration-300 hover:opacity-75 focus-visible:opacity-75 focus-visible:outline-none"
          >
            ← Startseite
          </Link>
        </motion.nav>

        {/* Content */}
        <motion.article
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-[clamp(40px,6vw,88px)] flex w-full max-w-[76ch] flex-col pb-[clamp(40px,6vw,88px)]"
        >
          <motion.p
            variants={item}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 text-[clamp(36px,5vw,72px)] font-bold leading-[1.05] tracking-[-0.03em] text-cs-espresso"
          >
            {title}
          </motion.h1>
          {note && (
            <motion.p
              variants={item}
              className="mt-4 text-[clamp(13px,1vw,15px)] text-foreground/60"
            >
              {note}
            </motion.p>
          )}
          <motion.div
            variants={item}
            className="mt-[clamp(28px,3vw,44px)] h-px w-full bg-cs-espresso/15"
          />
          <motion.div variants={item} className="legal-prose mt-[clamp(28px,3vw,44px)]">
            {children}
          </motion.div>
        </motion.article>
      </div>
    </main>
  );
}
