"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  type Variants,
} from "motion/react";
import SteinhusenMark from "@/components/hero/SteinhusenMark";

const QUOTE = "\u201EThere is beauty in timeless things.\u201C";

const PARAGRAPH_1 =
  "Das Café Steinhusen ist der Versuch des Wiener Cafés in norddeutscher Moderne — in historischen Räumlichkeiten von 1899, einst als Ferienhaus vor den Toren Lübecks gebaut.";

const PARAGRAPH_2 =
  "1972 mit 40 Plätzen gestartet, wurde das Haus mehrmals umgebaut und erweitert — und ist dabei doch nie stehen geblieben.";

const PARAGRAPH_3 = "Seien Sie unser Gast — be our guest.";

/** Zig-zag cascade (percentages of the photo column), following the Figma layout. */
const CARDS = [
  {
    src: "/images/about/cafe-00.jpg",
    alt: "Eleganter Gastraum mit langer gedeckter Tafel im Café Steinhusen",
    left: "58%",
    top: "0%",
  },
  {
    src: "/images/about/cafe-01.jpg",
    alt: "Wintergarten mit warmem Licht und Lüstern im Café Steinhusen",
    left: "36%",
    top: "12.5%",
  },
  {
    src: "/images/about/cafe-02.jpg",
    alt: "Gemütliche Sitzecke im Café Steinhusen",
    left: "16%",
    top: "27%",
  },
  {
    src: "/images/about/cafe-03.jpg",
    alt: "Torte aus eigener Herstellung im Café Steinhusen",
    left: "2%",
    top: "42%",
  },
  {
    src: "/images/about/cafe-04.jpg",
    alt: "Himbeer-Baiser-Törtchen aus der Konditorei",
    left: "12%",
    top: "57.5%",
  },
  {
    src: "/images/about/cafe-05.jpg",
    alt: "Baiser-Kuchen mit frischen Erdbeeren",
    left: "24%",
    top: "72%",
  },
];

/**
 * All scroll scrubbing is driven by a single CSS variable `--p` (section scroll
 * progress, 0..1) written once per frame. Words and cards derive their own
 * state from it with CSS math — one scroll subscriber instead of dozens.
 */

/** Word whose opacity scrubs from 0.14 to 1 across [start, end] of `--p`. */
function Word({ children, start, end }: { children: string; start: number; end: number }) {
  const inv = 1 / (end - start);
  return (
    <span
      style={{
        opacity: `clamp(0.14, calc(0.14 + (var(--p) - ${start}) * ${inv} * 0.86), 1)`,
      }}
    >
      {children}{" "}
    </span>
  );
}

/** Paragraph that reveals word by word across [start, end] of scroll progress. */
function RevealParagraph({
  text,
  start,
  end,
  className,
}: {
  text: string;
  start: number;
  end: number;
  className?: string;
}) {
  const words = text.split(" ");
  const step = (end - start) / words.length;
  return (
    <p className={className}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} start={start + i * step} end={start + i * step + step}>
          {word}
        </Word>
      ))}
    </p>
  );
}

/** Photo card that slides up, straightens and settles as `--p` advances. */
function CascadeCard({
  card,
  index,
  reduceMotion,
}: {
  card: (typeof CARDS)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const start = 0.14 + index * 0.1;
  const end = start + 0.2;
  const tilt = index % 2 === 0 ? 8 : -8;

  const style: CSSProperties = {
    left: card.left,
    top: card.top,
    // t: entrance progress (0..1), u: settle drift after entrance
    ["--t" as string]: `clamp(0, calc((var(--p) - ${start}) * ${1 / (end - start)}), 1)`,
    ["--u" as string]: `clamp(0, calc((var(--p) - ${end}) * ${1 / (1 - end)}), 1)`,
    opacity: "var(--t)",
    transform: `translate3d(0, calc((1 - var(--t)) * 180px - var(--u) * 24px), 0) rotate(calc(${tilt}deg * (1 - var(--t)))) scale(calc(0.88 + var(--t) * 0.12))`,
  };

  return (
    <div
      style={style}
      className="group absolute aspect-[193/226] w-[clamp(120px,38%,200px)] overflow-hidden rounded-[6px] shadow-[0_12px_32px_rgba(42,30,23,0.20)]"
    >
      <motion.div
        className="absolute inset-0"
        whileHover={reduceMotion ? undefined : { scale: 1.06 }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
      >
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(max-width: 1024px) 38vw, 200px"
          className="object-cover"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[rgba(42,30,23,0.12)] transition-colors duration-500 group-hover:bg-[rgba(42,30,23,0.02)]" />
    </div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion() ?? false;
  const wrapRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    wrapRef.current?.style.setProperty("--p", String(reduceMotion ? 1 : v));
  });

  const intro: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };
  const introContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.09 },
    },
  };

  return (
    <section
      ref={wrapRef}
      id="cafe"
      aria-labelledby="cafe-heading"
      style={{ ["--p" as string]: reduceMotion ? 1 : 0 }}
      className="relative h-[280vh] bg-background"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Lübeck map silhouette — drifts and rotates slowly behind everything */}
        <div
          aria-hidden
          style={{
            transform:
              "translateY(calc(60px - var(--p) * 150px)) rotate(calc(13deg + var(--p) * 8deg))",
          }}
          className="pointer-events-none absolute left-[48%] top-[-56%] h-[140vmin] w-[151vmin] opacity-[0.05]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/luebeck-map.svg" alt="" className="size-full" />
        </div>

        <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-1 content-center gap-y-[clamp(32px,5vh,56px)] px-[clamp(16px,4vw,64px)] py-[clamp(24px,4vw,40px)] lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-x-[clamp(32px,4vw,64px)]">
          {/* Copy side */}
          <motion.div
            variants={introContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col items-start"
          >
            <motion.p
              variants={intro}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50"
            >
              Das Café · das norddeutsche Wiener Caféhaus
            </motion.p>

            <motion.h2
              id="cafe-heading"
              variants={intro}
              className="mt-4"
            >
              <span className="sr-only">Café Steinhusen</span>
              <SteinhusenMark
                animate={false}
                className="w-[clamp(200px,28vw,340px)]"
              />
            </motion.h2>

            <div className="mt-[clamp(24px,3vw,44px)] flex flex-col gap-[clamp(16px,2vw,28px)] text-[clamp(16px,1.55vw,22px)] font-medium leading-[1.45] tracking-[-0.01em] text-foreground">
              <RevealParagraph text={QUOTE} start={0.03} end={0.13} className="font-serif italic" />
              <RevealParagraph text={PARAGRAPH_1} start={0.13} end={0.34} />
              <RevealParagraph text={PARAGRAPH_2} start={0.34} end={0.56} />
              <RevealParagraph text={PARAGRAPH_3} start={0.56} end={0.68} className="font-serif italic" />
            </div>
          </motion.div>

          {/* Cascading photo cards */}
          <div className="relative h-[min(52vh,460px)] lg:h-[min(78vh,700px)]">
            {CARDS.map((card, i) => (
              <CascadeCard key={card.src} card={card} index={i} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
