"use client";

import Image from "next/image";
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

type Tone = "light" | "gold" | "dark";

type ContactActionsProps = {
  tone?: Tone;
  /** Label for the primary (phone) button. */
  primaryLabel?: string;
  /** Label for the secondary (Instagram) button. */
  secondaryLabel?: string;
  className?: string;
};

const PRIMARY: Record<Tone, string> = {
  light:
    "bg-cs-espresso text-cs-cream hover:bg-[#3a2a20] hover:text-white focus-visible:ring-cs-espresso focus-visible:ring-offset-background",
  gold:
    "bg-cs-espresso text-cs-cream hover:bg-[#3a2a20] hover:text-white focus-visible:ring-cs-espresso focus-visible:ring-offset-cs-gold",
  dark:
    "bg-cs-cream text-cs-espresso hover:bg-white focus-visible:ring-cs-cream focus-visible:ring-offset-cs-espresso",
};

const SECONDARY: Record<Tone, string> = {
  light:
    "border-2 border-cs-espresso/35 text-cs-espresso hover:border-cs-espresso hover:bg-cs-espresso/5 focus-visible:ring-cs-espresso focus-visible:ring-offset-background",
  gold:
    "border-2 border-cs-espresso/35 text-cs-espresso hover:border-cs-espresso hover:bg-cs-espresso/5 focus-visible:ring-cs-espresso focus-visible:ring-offset-cs-gold",
  dark:
    "border-2 border-cs-cream/35 text-cs-cream hover:border-cs-cream hover:bg-cs-cream/10 focus-visible:ring-cs-cream focus-visible:ring-offset-cs-espresso",
};

/** The recurring phone + Instagram-DM call to action, tuned per surface. */
export default function ContactActions({
  tone = "light",
  primaryLabel = PHONE_DISPLAY,
  secondaryLabel = "Anfrage per DM",
  className,
}: ContactActionsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      <a
        href={PHONE_HREF}
        className={`group inline-flex items-center gap-2.5 rounded-full px-[clamp(20px,2vw,28px)] py-[clamp(12px,1.2vw,16px)] text-[clamp(14px,1.1vw,16px)] font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${PRIMARY[tone]}`}
      >
        {primaryLabel}
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 rounded-full px-[clamp(20px,2vw,28px)] py-[clamp(10px,1.1vw,14px)] text-[clamp(14px,1.1vw,16px)] font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${SECONDARY[tone]}`}
      >
        <Image
          src="/icons/instagram.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="size-[1.2em] shrink-0"
        />
        {secondaryLabel}
      </a>
    </div>
  );
}
