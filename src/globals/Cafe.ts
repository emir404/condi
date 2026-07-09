import type { GlobalConfig } from "payload";
import {
  EMPHASIS_HINT,
  factsField,
  featureItemsField,
  heroFields,
  uploadField,
} from "./fields";

/** "Café & Frühstück" — the Wiener Caféhaus subpage. */
export const Cafe: GlobalConfig = {
  slug: "cafe-page",
  label: "Seite: Café & Frühstück",
  access: { read: () => true },
  fields: [
    {
      type: "tabs",
      tabs: [
        { label: "Hero", name: "hero", description: EMPHASIS_HINT, fields: heroFields },
        {
          label: "Angebot",
          name: "experience",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "heading", label: "Überschrift (mit *Akzent*)", type: "text", required: true },
            { name: "intro", label: "Einleitung", type: "textarea" },
            featureItemsField,
          ],
        },
        {
          label: "Räume (Galerie)",
          name: "rooms",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "heading", label: "Überschrift (mit *Akzent*)", type: "text", required: true },
            {
              name: "images",
              label: "Bilder",
              type: "array",
              fields: [uploadField()],
            },
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
