"use client";

import { motion, useReducedMotion } from "motion/react";

type SteinhusenMarkProps = {
  className?: string;
  /** Delay (seconds) before the reveal begins, to sequence after the nav. */
  startDelay?: number;
  /** Set to false for a static wordmark (no entrance reveal). */
  animate?: boolean;
  /** Render a light version of the wordmark, for dark backgrounds. */
  light?: boolean;
};

/**
 * Typographic "Café Steinhusen" wordmark rendered as SVG text so it scales to
 * whatever width the caller sets (matching the old image-based mark's API).
 */
export default function SteinhusenMark({
  className,
  startDelay = 0,
  animate = true,
  light = false,
}: SteinhusenMarkProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animate && !reduceMotion;

  const primary = light ? "var(--cs-cream)" : "var(--cs-espresso)";
  const accent = light ? "var(--cs-cream)" : "var(--cs-red)";

  const reveal = (delay: number) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: {
            delay: startDelay + delay,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        }
      : {};

  return (
    <svg
      className={className}
      viewBox="0 0 300 120"
      role="img"
      aria-label="Café Steinhusen — das norddeutsche Wiener Caféhaus"
      style={{ width: "100%", height: "auto", overflow: "visible" }}
    >
      <motion.text
        x="150"
        y="52"
        textAnchor="middle"
        fill={accent}
        style={{
          fontFamily: "var(--font-logo), serif",
          fontSize: 58,
          fontStyle: "italic",
          fontWeight: 600,
          letterSpacing: "0.005em",
        }}
        {...reveal(0)}
      >
        Café
      </motion.text>
      <motion.text
        x="150"
        y="102"
        textAnchor="middle"
        fill={primary}
        style={{
          fontFamily: "var(--font-logo), serif",
          fontSize: 37,
          fontWeight: 600,
          letterSpacing: "0.07em",
        }}
        {...reveal(0.12)}
      >
        Steinhusen
      </motion.text>
    </svg>
  );
}
