"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

export type Step = { number: string; title: string; text: string };

type StepsProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  steps: Step[];
};

/** A numbered, evenly-spaced process row (e.g. "So bestellen Sie"). */
export default function Steps({ eyebrow, heading, steps }: StepsProps) {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <section className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] py-[clamp(32px,5vw,72px)]">
      <div className="w-full max-w-[1440px]">
        {(eyebrow || heading) && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-[56ch]"
          >
            {eyebrow && (
              <motion.p
                variants={item}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50"
              >
                {eyebrow}
              </motion.p>
            )}
            {heading && (
              <motion.h2
                variants={item}
                className="mt-4 font-serif text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-cs-espresso"
              >
                {heading}
              </motion.h2>
            )}
          </motion.div>
        )}

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-[clamp(24px,3.5vw,48px)] grid grid-cols-1 gap-[clamp(20px,2.5vw,40px)] sm:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.li key={step.number} variants={item} className="flex flex-col border-t-2 border-cs-espresso/12 pt-5">
              <span className="font-serif text-[clamp(32px,3.2vw,48px)] font-bold italic leading-none text-cs-red">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-[clamp(20px,1.9vw,26px)] font-bold tracking-[-0.01em] text-cs-espresso">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[clamp(14px,1.05vw,16px)] font-medium leading-[1.55] text-foreground/75">
                {step.text}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
