import type { GlobalConfig } from "payload";
import {
  EMPHASIS_HINT,
  factsField,
  featureItemsField,
  heroFields,
} from "./fields";

/** "Zum Mitnehmen" — the takeaway / Konditorei subpage. */
export const Mitnehmen: GlobalConfig = {
  slug: "mitnehmen-page",
  label: "Seite: Zum Mitnehmen",
  access: { read: () => true },
  fields: [
    {
      type: "tabs",
      tabs: [
        { label: "Hero", name: "hero", description: EMPHASIS_HINT, fields: heroFields },
        {
          label: "Vitrine",
          name: "vitrine",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "heading", label: "Überschrift (mit *Akzent*)", type: "text", required: true },
            { name: "intro", label: "Einleitung", type: "textarea" },
            featureItemsField,
          ],
        },
        {
          label: "Info-Band",
          name: "infoBand",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "heading", label: "Überschrift (mit *Akzent*)", type: "text", required: true },
            { name: "body", label: "Text", type: "textarea" },
            factsField,
          ],
        },
      ],
    },
  ],
};
