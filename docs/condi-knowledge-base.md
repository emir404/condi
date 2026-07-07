# Café Steinhusen — Content Knowledge Base

> Source of truth for real content scraped from the live site **https://www.condi.de/**
> (Café Steinhusen GmbH, Lübeck). All text below is **verbatim German** from the site.
>
> Purpose: the current codebase ships with a placeholder "Klein&Fein" cafe template.
> This document captures the **real** business content and image assets so we can
> replace the template **without hallucinating** any facts. Anything not listed here
> was **not** found on the live site and must not be invented.
>
> Scraped: 2026-07-07. Live site is a legacy image-based site (text is often baked
> into images), so most `<img>` tags have empty `alt` text — image purpose is inferred
> from page context and dimensions.

---

## 1. Business Identity

| Field | Value |
| --- | --- |
| Business name | **Café Steinhusen** (legal: **Cafe Steinhusen GmbH**) |
| Domain | https://www.condi.de/ |
| Positioning | „das norddeutsche Wiener Caféhaus" (the North German Viennese coffee house) |
| Motto (recurring on every page) | „There is beauty in timeless things" |
| Geschäftsführer (managing director) | Marcus Steinhusen |
| Register | Sitz und Amtsgericht Lübeck, HRB 22669 HL |
| Copyright line (footer, every page) | Copyright Cafe Steinhusen GmbH. |

### Contact
| Channel | Value |
| --- | --- |
| Address | Am Burgfeld 3, 23568 Lübeck, Deutschland |
| Telefon | 0451 35285 (intl: +49 451 35285) |
| Fax | 0451 3844828 |
| E-Mail (general / kontakt) | contact@condi.de |
| E-Mail (Impressum / questions) | fragen@steinhusen.com |
| E-Mail (jobs) | bewerbung@steinhusen.com |
| E-Mail (data protection) | datenschutz@steinhusen.com |
| Instagram | https://www.instagram.com/cafe_konditorei/ |

### Opening hours
Two slightly different phrasings appear on the site — both recorded verbatim; **resolve with the client before using**:

**Home page (Startseite):**
```
Dienstag bis Freitag   10:00 bis 17:30
Samstags und Sonntags  9:00 bis 17:30
Cafe ab 14:00 geöffnet
bis zum 10.08.2026 haben wir Montags Ruhetag
```

**Kontakt page (Öffnungszeiten):**
```
Mo bis Fr        10:00 - 17:30
Sa und Sonntag   9:00 - 17:30
```

> ⚠️ Discrepancy: Home says "Dienstag bis Freitag" + "Montags Ruhetag until 10.08.2026", Kontakt says "Mo bis Fr". Flag for clarification.

---

## 2. Site Structure (live navigation)

Legacy static `.htm` pages (site appears to be exported from a site builder; assets live under `/index_htm_files/`).

| Nav label | URL | Purpose |
| --- | --- | --- |
| Home | https://www.condi.de/ | Landing / intro, hours, offering highlights, Lübeck teaser |
| Laden | https://www.condi.de/laden.htm | The shop — cakes, pastries, ice cream, confiserie |
| Bestellung | https://www.condi.de/bestellung.htm | Pre-ordering info + cake photo gallery + order form PDF |
| Cafe | https://www.condi.de/cafe.htm | The café — history, breakfast, tea room |
| Kontakt | https://www.condi.de/kontakt.htm | Address, hours, phone, surroundings/sights |
| Jobs | https://www.condi.de/bewerbung.htm | Apprenticeships / job openings |
| Impressum | https://www.condi.de/impressum.htm | Legal imprint |
| Datenschutz | https://www.condi.de/datenschutz.htm | Privacy policy (boilerplate) |

---

## 3. Page Content (verbatim)

### 3.1 Home (`/`)
Offering highlights block:
```
über 30 Tortensorten für jeden Geschmack
Eis aus eigener Herstellung
traditonelle Rezepte und Herstellung mit besten Zutaten
das norddeutsche Wiener Caféhaus
```
Teegebäck block:
```
Teegebäck
mit Liebe von unseren Konditoren aus erlesenen Zutaten kreiert
```
Lübeck block:
```
Lübeck
genießen Sie Lübeck die Königin der Hanse mit ihren vielen
Sehenswürdigkeiten und einer ganz besonderen Lebensqualität
```
(plus hours block — see §1)

### 3.2 Laden (`/laden.htm`) — The Shop
```
das Ladengeschäft

Lübecker Apfelstrudel
warm oder kalt
mit einem klassischem Strudelteig
dazu hausgemachte Vanilleeis und Sahne

Torten, Torten, Torten und Kleingebäck
8 Meter Tortentresen,
je nach Saison bis zu 32 Tortensorten,
Kleingebäck und unser Eis aus eigener Herstellung
```
Feature list (from image alt text `13311@2x.png`):
```
30 Tortensorten aus eigener Herstellung
eine große Auswahl an Tee- und Kleingebäcksorten
eigene Eisherstellung
Marzipan, Schokoladen und andere Confisserieartikel
```

### 3.3 Bestellung (`/bestellung.htm`) — Pre-order
```
Bestellen Sie gerne vor, damit Sie sich die von Ihnen gewünschten
Süßigkeiten sichern!

telefonisch unter 0451-35285
bis 16:00 am Vortag der Bestellung

oder Gerne mit unserem Bestellformular!
per Fax 0451-3844828
oder per Email
bis 5:00 morgens am Abholtag

Vielen Dank!
```
Order form (PDF): https://www.condi.de/index_htm_files/Tortenbestellung2.pdf
This page is primarily a **gallery of cake / product photos** (see image inventory §4).

### 3.4 Cafe (`/cafe.htm`) — The Café
```
Das Café
der Versuch des Wiener Cafés in norddeutscher Moderne

belegte Brötchen
verschiedene Sorten
auch zum Mitnehmen
```
History / facts:
```
historische Räumlichkeiten von 1899
einst als Ferienhaus gebaut vor den Toren Lübecks
1972 mit 40 Plätzen gestartet
mehrmals umgebaut und erweitert, nie stehen geblieben
```
Service note:
```
SEIEN SIE UNSER GAST - BE OUR GUEST

Zurzeit haben wir in der Woche Selbstbedienung. Sie bekommen bei uns
morgens belegte Brötchen und vieles mehr.
Am Wochenende öffnen wir unser Café um 14:00h wie gewohnt mit Service.
```
Tea room (from image alt `13241@2x.png` / `13381@2x.png`):
```
der Teeraum
Veranstaltungen im separaten Raum für bis zu 45 Personen
```
Page title of this page: **"Frühstücks Karte"** (breakfast menu).

### 3.5 Kontakt (`/kontakt.htm`)
```
Kontaktieren Sie uns unter:
0451 35285
oder per Fax
0451 3844828
oder per [E-Mail: contact@condi.de]

Reservieren Sie unter:
0451 35285

Cafe Steinhusen
Am Burgfeld 3
D-23568 Lübeck
```
**Umgebung (nearby sights)** — verbatim distances:
```
das Burgtor (500 m)
Hansemuseum (700 m)
Hanseschiff Lisa von Lübeck (1,8 km)
Heilige Geist Hospital (750 m)
Jakobi Kirche (900 m)
Marienkirche (1,4m)
Buddenbrookhaus (1,3km)
Rathaus (1,4km)
Holstentor (1,9 km)
Lübecker Dom (2,1 km)
```

### 3.6 Jobs / Bewerbung (`/bewerbung.htm`)
```
Ausbildung im Café Steinhusen

Wir bilden Konditoren/innen (m/w/d) und Fachverkäufer/innen im
Lebensmittelhandwerk mit Schwerpunkt Konditorei (m/w/d) aus.

Ausbildungsbeginn ist August 2026

Für 2026 haben wir nur noch eine Stelle als Fachverkäufer/in und zwei
Stellen als Konditor (m/w/d) zu vergeben!

Einfach per E-Mail bewerben und einen persönlichen Vorstellungstermin
vereinbaren.

Schreiben sie uns einfach eine Mail oder rufen Sie uns unter 0451-35285 an.
Dienstags - Freitag von 10:00 bis 12:00
```
Application e-mail: bewerbung@steinhusen.com

### 3.7 Datenschutz (`/datenschutz.htm`)
Standard German privacy-policy boilerplate (generated via "Datenschutz Generator", slashtechnik.de). Key facts only:
- Responsible-party contact e-mail: datenschutz@steinhusen.com
- Third parties referenced: Google Fonts, Google Analytics, Facebook, Instagram.
- The repo already ships its own Datenschutz/Impressum pages; only reuse the real contact facts above.

---

## 4. Image Inventory

All under `https://www.condi.de/index_htm_files/`. Dimensions are natural (2x) pixels.
Navigation-button images (`131xx`/`132xx` PNGs like Home/Laden/Cafe/Kontakt/Jobs) are UI chrome and omitted.
`9209@2x.jpg` (2232×400) is a shared banner/strip appearing on multiple pages.

### Home (`/`)
| File | Size | Notes |
| --- | --- | --- |
| `9206@2x.jpg` | 2270×1144 | Hero banner |
| `9209@2x.jpg` | 2232×400 | Shared banner strip |
| `9216@2x.jpg` | 848×1000 | Feature photo |
| `9217@2x.jpg` | 1024×1000 | Feature photo |
| `9228@2x.jpg` | 974×1156 | Feature photo (Lübeck?) |
| `9229@2x.jpg` | 954×246 | Strip / caption image |
| `9236@2x.jpg` | 346×772 | Column photo |
| `9237@2x.jpg` | 448×778 | Column photo |

### Laden (`/laden.htm`)
| File | Size | Notes |
| --- | --- | --- |
| `9259@2x.jpg` | 2270×1144 | Hero banner |
| `9260@2x.png` | 888×994 | Product photo (Apfelstrudel?) |
| `9261@2x.png` | 866×1012 | Product photo |
| `13311@2x.png` | 746×738 | Text graphic: "30 Tortensorten aus eigener Herstellung / …" |
| `9264@2x.jpg` | 974×1144 | Photo |
| `9265@2x.jpg` | 938×230 | Strip |
| `9266@2x.png` | 384×1000 | Column photo |
| `9267@2x.png` | 372×1000 | Column photo |

### Bestellung (`/bestellung.htm`) — cake / product gallery
`9277, 9278, 9279, 9280, 9281, 9282, 9283, 9284, 9285, 9286, 9287, 9288, 9289, 9290, 9291, 9292, 9293, 9294, 9297, 9298` (all `@2x.jpg`), plus `11447@2x.jpg`.
These are the real **product/cake photographs** — the most reusable asset set for a menu/gallery section.
Order form PDF: `Tortenbestellung2.pdf`.

### Cafe (`/cafe.htm`)
| File | Size | Notes |
| --- | --- | --- |
| `9301@2x.jpg` | 2270×1144 | Hero banner |
| `9302@2x.jpg` | 640×1000 | Interior / café photo |
| `13241@2x.png` / `13381@2x.png` | — | Text graphic: "der Teeraum / Veranstaltungen im separaten Raum für bis zu 45 Personen" |
| `9304@2x.jpg` | 640×1000 | Interior photo |
| `9305@2x.jpg` | 640×1000 | Interior photo |
| `9306@2x.jpg` | 974×1144 | Photo |
| `9307@2x.jpg` | 944×236 | Strip |
| `9308@2x.jpg` | 274×1000 | Column photo |
| `9309@2x.jpg` | 274×1000 | Column photo |
| `9313@2x.jpg` | 274×1000 | Column photo |

### Kontakt (`/kontakt.htm`)
| File | Size | Notes |
| --- | --- | --- |
| `9319@2x.jpg` | 2234×348 | Banner |
| `9321@2x.png` | 474×664 | Photo / graphic |
| `9322@2x.jpg` | 252×252 | Small photo / logo |
| `9330@2x.jpg` | 932×208 | Strip |
| `9332@2x.png` | 322×450 | Photo / map graphic |

### Jobs (`/bewerbung.htm`)
| File | Size | Notes |
| --- | --- | --- |
| `9248@2x.png` | 276×386 | Photo |
| `9252@2x.png` | 276×390 | Photo |
| `9229@2x.jpg` | 954×246 | Shared strip (also on Home) |

---

## 5. Template → Real content mapping (for the rewrite phase)

The current repo uses fabricated "Klein&Fein" content. Replace as follows:

| Template (fake) | Real (Café Steinhusen) |
| --- | --- |
| Klein&Fein — Kaffee Brot Wein | Café Steinhusen — das norddeutsche Wiener Caféhaus |
| „Kaffee, Brot & Wein — klein, aber fein." | „There is beauty in timeless things" |
| Fleischhauerstraße 80, 23552 Lübeck | Am Burgfeld 3, 23568 Lübeck |
| Emma Goitum | Marcus Steinhusen (Geschäftsführer) |
| 0151 50802827 | 0451 35285 (Fax 0451 3844828) |
| emmagoitum@web.de | contact@condi.de / fragen@steinhusen.com |
| @kleinundfeincafe | @cafe_konditorei |
| Stullen / Flammkuchen / Wein & Drinks | Torten (30+), Kleingebäck, Eis (eigene Herstellung), Marzipan/Confiserie, belegte Brötchen, Lübecker Apfelstrudel |
| Sonntagsfrühstück for groups of 10 | der Teeraum: Veranstaltungen im separaten Raum für bis zu 45 Personen |
| Mo–So 09–17 / Sa bis 22 / Mi Ruhetag | see §1 opening hours (Di–Fr 10:00–17:30, Sa/So 9:00–17:30) |

> Not present on the live site (do **not** invent): wine bar, Flammkuchen, Stullen,
> Sunday group breakfast, any prices, any staff names other than Marcus Steinhusen.
