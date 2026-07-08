/** Single source of truth for the café's contact details. */
export const PHONE_DISPLAY = "0451 35285";
export const PHONE_HREF = "tel:+4945135285";
export const FAX_DISPLAY = "0451 3844828";

export const INSTAGRAM_URL = "https://www.instagram.com/cafe_konditorei/";
export const INSTAGRAM_HANDLE = "@cafe_konditorei";

export const ADDRESS_LINES = ["Am Burgfeld 3", "23568 Lübeck"] as const;

/** Google-Maps link for the address — every clickable address points here. */
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Steinhusen%20Am%20Burgfeld%203%2023568%20L%C3%BCbeck";

export const HOURS: readonly [string, string][] = [
  ["Dienstag – Freitag", "10:00 – 17:30 Uhr"],
  ["Samstag & Sonntag", "9:00 – 17:30 Uhr"],
  ["Café mit Service", "ab 14:00 Uhr"],
];
