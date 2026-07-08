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
 * Typographic "Café Steinhusen" wordmark, rendered as SVG so it scales to
 * whatever width the caller sets via `className`.
 *
 * The lockup reimagines the storefront: one flowing line of red
 * blackletter-script (Grenze Gotisch), exactly like the historic channel
 * letters over the door — grounded by a hairline rule with a centred diamond
 * and a tracked caps subline.
 */
export default function SteinhusenMark({
  className,
  startDelay = 0,
  animate = true,
  light = false,
}: SteinhusenMarkProps) {
  const reduceMotion = useReducedMotion();

  const primary = light ? "var(--cs-cream)" : "var(--cs-espresso)";
  const accent = light ? "var(--cs-cream)" : "var(--cs-red)";
  const hairline = light ? "var(--cs-cream)" : "var(--cs-espresso)";

  // Initial/animate stay identical on server and client so hydration always
  // matches; reduced motion only zeroes the transition (instant reveal).
  const reveal = (delay: number) =>
    animate
      ? {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: reduceMotion
            ? { duration: 0 }
            : {
                delay: startDelay + delay,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as const,
              },
        }
      : {};

  const ornamentReveal = animate
    ? {
        initial: { opacity: 0, scaleX: 0.4 },
        animate: { opacity: 1, scaleX: 1 },
        transition: reduceMotion
          ? { duration: 0 }
          : {
              delay: startDelay + 0.12,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
            },
      }
    : {};

  return (
    <svg
      className={className}
      viewBox="0 0 560 172"
      role="img"
      aria-label="Café Steinhusen — das norddeutsche Wiener Caféhaus"
      style={{ height: "auto", display: "block", overflow: "visible" }}
    >
      {/* One flowing blackletter line, like the sign over the door */}
      <motion.text
        x="280"
        y="102"
        textAnchor="middle"
        fill={accent}
        style={{
          fontFamily: "var(--font-logo), serif",
          fontSize: 84,
          fontWeight: 560,
          letterSpacing: "0.01em",
        }}
        {...reveal(0)}
      >
        Café Steinhusen
      </motion.text>

      {/* Hairline rule with a centred diamond — the caféhaus divider */}
      <motion.g
        style={{ transformOrigin: "280px 133px" }}
        stroke={hairline}
        {...ornamentReveal}
      >
        <line x1="96" y1="133" x2="252" y2="133" strokeWidth="1" opacity={light ? 0.55 : 0.4} />
        <line x1="308" y1="133" x2="464" y2="133" strokeWidth="1" opacity={light ? 0.55 : 0.4} />
        <rect
          x="275.5"
          y="128.5"
          width="9"
          height="9"
          transform="rotate(45 280 133)"
          fill={accent}
          stroke="none"
        />
      </motion.g>

      {/* Tracked caps subline — steady, modern counterpoint */}
      <motion.text
        x="280"
        y="164"
        textAnchor="middle"
        fill={primary}
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: 17,
          fontWeight: 600,
          letterSpacing: "0.18em",
        }}
        {...reveal(0.2)}
      >
        KONDITOREI · SEIT 1972 · LÜBECK
      </motion.text>
    </svg>
  );
}
