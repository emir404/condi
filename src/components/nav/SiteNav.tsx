"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

type NavItem = { label: string; href: string };

/** Primary navigation across the site. Order mirrors the customer journey. */
const NAV_ITEMS: NavItem[] = [
  { label: "Start", href: "/" },
  { label: "Zum Mitnehmen", href: "/mitnehmen" },
  { label: "Café", href: "/cafe" },
  { label: "Torten bestellen", href: "/bestellen" },
  { label: "Kontakt", href: "/#kontakt" },
];

/**
 * Shared espresso nav pill. Render it inside a page's `max-w-[1440px]`
 * container so it lines up with the section content beneath it.
 */
export default function SiteNav() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Only the real routes carry an active state (the "/#kontakt" jump link never
  // matches a pathname, so it stays neutral).
  const isActive = (href: string) => href.startsWith("/") && !href.includes("#") && pathname === href;

  const navContainer: Variants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 18,
        staggerChildren: reduceMotion ? 0 : 0.07,
        delayChildren: 0.1,
      },
    },
  };
  const navItem: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="visible"
      className="relative flex w-full items-center justify-between gap-x-[clamp(14px,2vw,32px)] rounded-[6px] bg-cs-espresso px-[clamp(16px,3vw,32px)] py-[clamp(14px,1.4vw,17px)] text-[clamp(12px,1.05vw,15px)] font-semibold tracking-[-0.01em] text-cs-cream sm:justify-center"
    >
      {/* Brand — mobile only, keeps the pill balanced next to the toggle */}
      <motion.div variants={navItem} className="sm:hidden">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="font-logo text-[22px] font-medium leading-none tracking-[0.015em]"
        >
          Café Steinhusen
        </Link>
      </motion.div>

      {/* Desktop links */}
      <div className="hidden items-center gap-x-[clamp(14px,2vw,32px)] sm:flex">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <motion.div
              key={item.href}
              variants={navItem}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative"
            >
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap transition-opacity duration-200 ${
                  active ? "text-cs-cream" : "text-cs-cream/70 hover:text-cs-cream"
                }`}
              >
                {item.label}
              </Link>
              {active && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 right-0 mx-auto h-[2px] w-4 rounded-full bg-cs-gold"
                />
              )}
            </motion.div>
          );
        })}
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
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-[clamp(16px,3vw,32px)] py-3 transition-colors duration-200 hover:bg-cs-cream/10 ${
                    active ? "text-cs-cream" : "text-cs-cream/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
