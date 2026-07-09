import type { GlobalConfig } from "payload";

const EMPHASIS_HINT =
  "Tipp: Markiere einen kursiven Akzent mit *Sternchen*, z.B. „Ein Haus, *drei Wege*“.";

/** All editable content of the homepage, grouped by section. */
export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Startseite",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          name: "hero",
          fields: [
            {
              name: "columns",
              label: "Info-Spalten",
              type: "array",
              maxRows: 6,
              fields: [
                { name: "label", label: "Überzeile", type: "text", required: true },
                { name: "value", label: "Wert", type: "text", required: true },
                {
                  name: "href",
                  label: "Link (optional, z.B. Google Maps)",
                  type: "text",
                },
                {
                  name: "wide",
                  label: "Breite Spalte (volle Zeile auf Mobil)",
                  type: "checkbox",
                },
              ],
            },
            {
              name: "images",
              label: "Hero-Bilder (3 empfohlen)",
              type: "array",
              maxRows: 4,
              fields: [
                {
                  name: "image",
                  label: "Bild",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: "Angebot",
          name: "offerings",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "heading", label: "Überschrift", type: "text", required: true },
            { name: "intro", label: "Einleitung", type: "textarea", required: true },
            {
              name: "cards",
              label: "Karten",
              type: "array",
              maxRows: 3,
              fields: [
                { name: "number", label: "Nummer (z.B. 01)", type: "text", required: true },
                {
                  name: "title",
                  label: "Titel (mit *kursivem* Akzent)",
                  type: "text",
                  required: true,
                },
                {
                  name: "description",
                  label: "Beschreibung",
                  type: "textarea",
                  required: true,
                },
                { name: "href", label: "Link (z.B. /mitnehmen)", type: "text", required: true },
                { name: "cta", label: "Button-Text", type: "text", required: true },
                {
                  name: "image",
                  label: "Bild",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "icon",
                  label: "Icon",
                  type: "select",
                  required: true,
                  options: [
                    { label: "Torte", value: "cake" },
                    { label: "Kaffee", value: "coffee" },
                    { label: "Törtchen", value: "cupcake" },
                    { label: "Brot", value: "bread" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Das Café",
          name: "about",
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            { name: "quote", label: "Zitat", type: "text", required: true },
            { name: "paragraph1", label: "Absatz 1", type: "textarea", required: true },
            { name: "paragraph2", label: "Absatz 2", type: "textarea", required: true },
            { name: "closing", label: "Schlusszeile (kursiv)", type: "text", required: true },
            {
              name: "gallery",
              label: "Foto-Kaskade (6 Bilder)",
              type: "array",
              maxRows: 8,
              fields: [
                {
                  name: "image",
                  label: "Bild",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: "Kontakt",
          name: "contact",
          description: EMPHASIS_HINT,
          fields: [
            { name: "eyebrow", label: "Überzeile", type: "text", required: true },
            {
              name: "heading",
              label: "Überschrift (mit *kursivem* Akzent)",
              type: "text",
              required: true,
            },
            { name: "text", label: "Text", type: "textarea", required: true },
            {
              name: "image",
              label: "Bild",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "umgebung",
              label: "In der Nähe (Sehenswürdigkeiten mit Entfernung)",
              type: "array",
              fields: [
                { name: "text", label: "Eintrag (z.B. Burgtor · 500 m)", type: "text", required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
};
