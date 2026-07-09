import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Impressum — Café Steinhusen Lübeck",
  description:
    "Impressum der Café Steinhusen GmbH, Am Burgfeld 3, 23568 Lübeck. Angaben gemäß § 5 Telemediengesetz.",
};

export default function ImpressumPage() {
  return (
    <>
      <LegalShell
        eyebrow="Rechtliches"
        title="Impressum"
        note="Angaben gemäß § 5 Telemediengesetz"
      >
        <h2>Name und Anschrift</h2>
        <p>
          Café Steinhusen GmbH
          <br />
          Am Burgfeld 3
          <br />
          23568 Lübeck
          <br />
          Deutschland
        </p>

        <h2>Vertreten durch</h2>
        <p>Geschäftsführer: Marcus Steinhusen</p>

        <h2>Registereintrag</h2>
        <p>
          Sitz und Amtsgericht Lübeck
          <br />
          Handelsregisternummer: HRB 22669 HL
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4945135285">+49 451 35285</a>
        </p>
        <p>Telefax: 0451 3844828</p>
        <p>
          E-Mail-Adresse:{" "}
          <a href="mailto:fragen@steinhusen.com">fragen@steinhusen.com</a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/cafe_konditorei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cafe_konditorei
          </a>
        </p>
      </LegalShell>
      <Footer />
    </>
  );
}
