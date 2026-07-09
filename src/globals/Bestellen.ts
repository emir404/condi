import type { GlobalConfig } from "payload";
import {
  EMPHASIS_HINT,
  featureItemsField,
  heroFields,
  uploadField,
} from "./fields";

/** "Torten auf Bestellung" — the custom-cakes & Teeraum events subpage. */
export const Bestellen: GlobalConfig = {
  slug: "bestellen-page",
  label: "Seite: Torten auf Bestellung",
  access: { read: () => true },
  fields: [
    {
      type: "tabs",
      tabs: [
        { label: "Hero", name: "hero", description: EMPHASIS_HINT, fields: heroFields },
        {
          label: "Ablauf",
          name: "steps",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "heading", label: "Überschrift (mit *Akzent*)", type: "text", required: true },
            {
              name: "items",
              label: "Schritte",
              type: "array",
              fields: [
                { name: "number", label: "Nummer (z.B. 01)", type: "text", required: true },
                { name: "title", label: "Titel", type: "text", required: true },
                { name: "text", label: "Text", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "Anlässe",
          name: "occasions",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "heading", label: "Überschrift (mit *Akzent*)", type: "text", required: true },
            { name: "intro", label: "Einleitung", type: "textarea" },
            featureItemsField,
          ],
        },
        {
          label: "Teeraum",
          name: "teeraum",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "heading", label: "Überschrift (mit *Akzent*)", type: "text", required: true },
            { name: "body", label: "Text", type: "textarea", required: true },
            uploadField("image", "Bild"),
            {
              name: "facts",
              label: "Fakten",
              type: "array",
              fields: [
                { name: "heading", label: "Überschrift", type: "text", required: true },
                {
                  name: "lines",
                  label: "Text (Zeilen per Enter trennen)",
                  type: "textarea",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
