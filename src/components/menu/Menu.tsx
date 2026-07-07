"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  BreadIcon,
  CakeIcon,
  CupcakeIcon,
  CoffeeIcon,
  type MenuIconProps,
} from "./MenuIcons";

type MenuCard = {
  title: string;
  image: string;
  alt: string;
  Icon: (props: MenuIconProps) => React.ReactElement;
};

const CARDS: MenuCard[] = [
  {
    title: "Torten",
    image: "/images/menu/torten.jpg",
    alt: "Torte aus eigener Herstellung mit Schokolade und Kirschen",
    Icon: CakeIcon,
  },
  {
    title: "Kleingebäck & Confiserie",
    image: "/images/menu/confiserie.jpg",
    alt: "Himbeer-Baiser-Törtchen aus der Konditorei",
    Icon: CupcakeIcon,
  },
  {
    title: "Kuchen & Kaffee",
    image: "/images/menu/kuchen.jpg",
    alt: "Baiser-Kuchen mit frischen Erdbeeren, dazu Kaffee",
    Icon: CoffeeIcon,
  },
  {
    title: "Belegte Brötchen",
    image: "/images/menu/broetchen.jpg",
    alt: "Platte mit reich belegten Brötchen im Café Steinhusen",
    Icon: BreadIcon,
  },
];

export default function Menu() {
  const reduceMotion = useReducedMotion();

  const grid: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  };

  const card: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 32, clipPath: "inset(0% 0% 100% 0% round 8px)" },
    visible: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0% round 8px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (
    <section
      id="angebot"
      aria-labelledby="angebot-heading"
      className="flex w-full justify-center bg-background px-[clamp(16px,4vw,64px)] py-[clamp(32px,5vw,64px)]"
    >
      <div className="w-full max-w-[1440px]">
        <h2 id="angebot-heading" className="sr-only">
          Unser Angebot
        </h2>
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-[clamp(16px,1.6vw,24px)] sm:grid-cols-2"
        >
          {CARDS.map(({ title, image, alt, Icon }) => (
            <motion.div
              key={title}
              variants={card}
              className="group relative block aspect-[16/10] overflow-hidden rounded-[8px] outline-none sm:aspect-[653/360]"
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1440px) 50vw, 720px"
                  className="object-cover"
                />
              </motion.div>

              {/* Espresso overlay — lightens on hover */}
              <div className="pointer-events-none absolute inset-0 bg-[rgba(42,30,23,0.72)] transition-colors duration-500 group-hover:bg-[rgba(42,30,23,0.55)]" />

              {/* Icon */}
              <div className="absolute left-[clamp(20px,2vw,32px)] top-[clamp(20px,2vw,32px)] text-cs-gold transition-transform duration-500 group-hover:-translate-y-0.5">
                <Icon className="size-9" />
              </div>

              {/* Title */}
              <h3 className="absolute bottom-[clamp(20px,2vw,32px)] left-[clamp(20px,2vw,32px)] right-[clamp(20px,2vw,32px)] font-serif text-[clamp(28px,3vw,40px)] font-bold leading-none tracking-[-0.4px] text-cs-gold transition-transform duration-500 group-hover:-translate-y-0.5">
                {title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
