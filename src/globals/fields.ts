import type { Field } from "payload";

export const EMPHASIS_HINT =
  "Tipp: Markiere einen kursiven Akzent mit *Sternchen*, z.B. „Frisch aus der *Vitrine*“.";

/** An image upload with an accompanying default label. */
export const uploadField = (name = "image", label = "Bild", required = true): Field => ({
  name,
  label,
  type: "upload",
  relationTo: "media",
  required,
});

/** A row of "facts" (heading + one or more optionally-linked lines). */
export const factsField: Field = {
  name: "facts",
  label: "Fakten",
  type: "array",
  fields: [
    { name: "heading", label: "Überschrift", type: "text", required: true },
    {
      name: "lines",
      label: "Zeilen",
      type: "array",
      minRows: 1,
      fields: [
        { name: "text", label: "Text", type: "text", required: true },
        {
          name: "href",
          label: "Link (optional, z.B. tel:… oder https://…)",
          type: "text",
        },
      ],
    },
  ],
};

/** A grid of image feature cards (title, caption, image, optional icon). */
export const featureItemsField: Field = {
  name: "items",
  label: "Karten",
  type: "array",
  fields: [
    { name: "title", label: "Titel", type: "text", required: true },
    { name: "text", label: "Beschreibung", type: "textarea" },
    uploadField(),
    {
      name: "icon",
      label: "Icon (optional)",
      type: "select",
      options: [
        { label: "Kein Icon", value: "none" },
        { label: "Torte", value: "cake" },
        { label: "Kaffee", value: "coffee" },
        { label: "Törtchen", value: "cupcake" },
        { label: "Brot", value: "bread" },
      ],
      defaultValue: "none",
    },
  ],
};

/** The shared subpage hero (eyebrow, title, lede, image duo). */
export const heroFields: Field[] = [
  { name: "eyebrow", label: "Überzeile", type: "text", required: true },
  {
    name: "title",
    label: "Titel (mit *kursivem* Akzent)",
    type: "text",
    required: true,
  },
  { name: "lede", label: "Einleitung", type: "textarea", required: true },
  uploadField("primaryImage", "Hauptbild"),
  uploadField("secondaryImage", "Akzentbild (optional)", false),
];
