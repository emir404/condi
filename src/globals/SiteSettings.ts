import type { GlobalConfig } from "payload";

/**
 * Shared site data: SEO, address, hours, phone and social links. Used across
 * the Hero, Contact section, Footer and the subpage info bands.
 */
export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Einstellungen",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "group",
      name: "meta",
      label: "SEO & Metadaten",
      fields: [
        { name: "title", label: "Seitentitel", type: "text", required: true },
        {
          name: "description",
          label: "Beschreibung",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      type: "group",
      name: "contact",
      label: "Kontakt",
      fields: [
        { name: "street", label: "Straße", type: "text", required: true },
        { name: "city", label: "PLZ & Ort", type: "text", required: true },
        {
          name: "phoneDisplay",
          label: "Telefon (Anzeige)",
          type: "text",
          required: true,
        },
        {
          name: "phoneNumber",
          label: "Telefon (international, z.B. +4945135285)",
          type: "text",
          required: true,
        },
        { name: "faxDisplay", label: "Fax (Anzeige)", type: "text" },
        {
          name: "instagramHandle",
          label: "Instagram-Handle",
          type: "text",
          required: true,
        },
        {
          name: "instagramUrl",
          label: "Instagram-URL",
          type: "text",
          required: true,
        },
        {
          name: "mapsLink",
          label: "Google Maps Link (Route planen)",
          type: "text",
          required: true,
        },
        {
          name: "mapsEmbedSrc",
          label: "Google Maps Embed-URL",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "hours",
      label: "Öffnungszeiten",
      type: "array",
      minRows: 1,
      labels: { singular: "Zeile", plural: "Zeilen" },
      fields: [
        { name: "label", label: "Tage", type: "text", required: true },
        { name: "value", label: "Zeiten", type: "text", required: true },
      ],
    },
    {
      name: "tagline",
      label: "Tagline (z.B. Das norddeutsche Wiener Caféhaus · Lübeck)",
      type: "text",
      required: true,
    },
    {
      name: "quote",
      label: "Zitat (Footer)",
      type: "text",
      required: true,
    },
    {
      name: "companyName",
      label: "Firmenname (Footer / Impressum)",
      type: "text",
      required: true,
    },
  ],
};
