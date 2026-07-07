import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Café Steinhusen Lübeck",
  description:
    "Datenschutzerklärung der Café Steinhusen GmbH, Am Burgfeld 3, 23568 Lübeck.",
};

export default function DatenschutzPage() {
  return (
    <>
      <LegalShell
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        note="Stand: Juli 2026"
      >
        <h2>Inhaltsübersicht</h2>
        <ul>
          <li>Verantwortlicher</li>
          <li>Übersicht der Verarbeitungen</li>
          <li>Maßgebliche Rechtsgrundlagen</li>
          <li>Sicherheitsmaßnahmen</li>
          <li>Plugins und eingebettete Funktionen sowie Inhalte</li>
        </ul>

        <h2>Verantwortlicher</h2>
        <p>
          Café Steinhusen GmbH
          <br />
          Geschäftsführer: Marcus Steinhusen
          <br />
          Am Burgfeld 3
          <br />
          23568 Lübeck
        </p>
        <p>
          E-Mail-Adresse:{" "}
          <a href="mailto:datenschutz@steinhusen.com">
            datenschutz@steinhusen.com
          </a>
          <br />
          Telefon: <a href="tel:+4945135285">+49 451 35285</a>
        </p>

        <h2>Übersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
          und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen.
        </p>

        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Standortdaten.</li>
          <li>Nutzungsdaten.</li>
          <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
        </ul>

        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>Nutzer.</li>
        </ul>

        <h3>Zwecke der Verarbeitung</h3>
        <ul>
          <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
        </ul>

        <h3>Maßgebliche Rechtsgrundlagen</h3>
        <p>
          Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
          DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte
          nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
          nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
          Sitzland gelten können. Sollten ferner im Einzelfall speziellere
          Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
          Datenschutzerklärung mit.
        </p>
        <ul>
          <li>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) - Die
            Verarbeitung ist zur Wahrung der berechtigten Interessen des
            Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
            Interessen oder Grundrechte und Grundfreiheiten der betroffenen
            Person, die den Schutz personenbezogener Daten erfordern,
            überwiegen.
          </li>
        </ul>
        <p>
          Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale
          Regelungen zum Datenschutz in Deutschland. Hierzu gehört
          insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener
          Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG).
          Das BDSG enthält insbesondere Spezialregelungen zum Recht auf
          Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur
          Verarbeitung besonderer Kategorien personenbezogener Daten, zur
          Verarbeitung für andere Zwecke und zur Übermittlung sowie
          automatisierten Entscheidungsfindung im Einzelfall einschließlich
          Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke
          des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
          Hinblick auf die Begründung, Durchführung oder Beendigung von
          Beschäftigungsverhältnissen sowie die Einwilligung von
          Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen
          Bundesländer zur Anwendung gelangen.
        </p>

        <h2>Sicherheitsmaßnahmen</h2>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
          Berücksichtigung des Stands der Technik, der Implementierungskosten
          und der Art, des Umfangs, der Umstände und der Zwecke der
          Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten
          und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher
          Personen geeignete technische und organisatorische Maßnahmen, um ein
          dem Risiko angemessenes Schutzniveau zu gewährleisten.
        </p>
        <p>
          Zu den Maßnahmen gehören insbesondere die Sicherung der
          Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
          Kontrolle des physischen und elektronischen Zugangs zu den Daten als
          auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
          Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben
          wir Verfahren eingerichtet, die eine Wahrnehmung von
          Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
          Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den
          Schutz personenbezogener Daten bereits bei der Entwicklung bzw.
          Auswahl von Hardware, Software sowie Verfahren entsprechend dem
          Prinzip des Datenschutzes, durch Technikgestaltung und durch
          datenschutzfreundliche Voreinstellungen.
        </p>
        <p>
          TLS-Verschlüsselung (https): Um Ihre via unserem Online-Angebot
          übermittelten Daten zu schützen, nutzen wir eine
          TLS-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen
          an dem Präfix https:// in der Adresszeile Ihres Browsers.
        </p>

        <h2>Plugins und eingebettete Funktionen sowie Inhalte</h2>
        <p>
          Wir binden in unser Onlineangebot Funktions- und Inhaltselemente
          ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend
          bezeichnet als &bdquo;Drittanbieter&rdquo;) bezogen werden. Dabei
          kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne
          handeln (nachfolgend einheitlich bezeichnet als
          &bdquo;Inhalte&rdquo;).
        </p>
        <p>
          Die Einbindung setzt immer voraus, dass die Drittanbieter dieser
          Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne die
          IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die
          IP-Adresse ist damit für die Darstellung dieser Inhalte oder
          Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu
          verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur
          Auslieferung der Inhalte verwenden. Drittanbieter können ferner
          sogenannte Pixel-Tags (unsichtbare Grafiken, auch als &bdquo;Web
          Beacons&ldquo; bezeichnet) für statistische oder Marketingzwecke
          verwenden. Durch die &bdquo;Pixel-Tags&ldquo; können Informationen,
          wie der Besucherverkehr auf den Seiten dieser Webseite, ausgewertet
          werden. Die pseudonymen Informationen können ferner in Cookies auf
          dem Gerät der Nutzer gespeichert werden und unter anderem technische
          Informationen zum Browser und zum Betriebssystem, zu verweisenden
          Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres
          Onlineangebotes enthalten als auch mit solchen Informationen aus
          anderen Quellen verbunden werden.
        </p>
        <ul>
          <li>
            Verarbeitete Datenarten: Nutzungsdaten (z.B. besuchte Webseiten,
            Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und
            Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
            Identifikationsnummern, Einwilligungsstatus); Standortdaten
            (Angaben zur geografischen Position eines Gerätes oder einer
            Person).
          </li>
          <li>
            Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von
            Onlinediensten).
          </li>
          <li>
            Zwecke der Verarbeitung: Bereitstellung unseres Onlineangebotes
            und Nutzerfreundlichkeit.
          </li>
          <li>
            Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
            f) DSGVO).
          </li>
        </ul>
        <p>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </p>
        <ul>
          <li>
            Google Fonts (Bezug vom Google Server): Bezug von Schriften (und
            Symbolen) zum Zwecke einer technisch sicheren, wartungsfreien und
            effizienten Nutzung von Schriften und Symbolen im Hinblick auf
            Aktualität und Ladezeiten, deren einheitliche Darstellung und
            Berücksichtigung möglicher lizenzrechtlicher Beschränkungen. Dem
            Anbieter der Schriftarten wird die IP-Adresse des Nutzers
            mitgeteilt, damit die Schriftarten im Browser des Nutzers zur
            Verfügung gestellt werden können. Darüber hinaus werden technische
            Daten (Spracheinstellungen, Bildschirmauflösung, Betriebssystem,
            verwendete Hardware) übermittelt, die für die Bereitstellung der
            Schriften in Abhängigkeit von den verwendeten Geräten und der
            technischen Umgebung notwendig sind. Diese Daten können auf einem
            Server des Anbieters der Schriftarten in den USA verarbeitet
            werden - Beim Besuch unseres Onlineangebotes senden die Browser
            der Nutzer ihre Browser HTTP-Anfragen an die Google Fonts Web API
            (d.h. eine Softwareschnittstelle für den Abruf der Schriftarten).
            Die Google Fonts Web API stellt den Nutzern die Cascading Style
            Sheets (CSS) von Google Fonts und danach die in der CCS
            angegebenen Schriftarten zur Verfügung. Zu diesen HTTP-Anfragen
            gehören (1) die vom jeweiligen Nutzer für den Zugriff auf das
            Internet verwendete IP-Adresse, (2) die angeforderte URL auf dem
            Google-Server und (3) die HTTP-Header, einschließlich des
            User-Agents, der die Browser- und Betriebssystemversionen der
            Websitebesucher beschreibt, sowie die Verweis-URL (d.h. die
            Webseite, auf der die Google-Schriftart angezeigt werden soll).
            IP-Adressen werden weder auf Google-Servern protokolliert noch
            gespeichert und sie werden nicht analysiert. Die Google Fonts Web
            API protokolliert Details der HTTP-Anfragen (angeforderte URL,
            User-Agent und Verweis-URL). Der Zugriff auf diese Daten ist
            eingeschränkt und streng kontrolliert. Die angeforderte URL
            identifiziert die Schriftfamilien, für die der Nutzer Schriftarten
            laden möchte. Diese Daten werden protokolliert, damit Google
            bestimmen kann, wie oft eine bestimmte Schriftfamilie angefordert
            wird. Bei der Google Fonts Web API muss der User-Agent die
            Schriftart anpassen, die für den jeweiligen Browsertyp generiert
            wird. Der User-Agent wird in erster Linie zum Debugging
            protokolliert und verwendet, um aggregierte Nutzungsstatistiken zu
            generieren, mit denen die Beliebtheit von Schriftfamilien gemessen
            wird. Diese zusammengefassten Nutzungsstatistiken werden auf der
            Seite &bdquo;Analysen&ldquo; von Google Fonts veröffentlicht.
            Schließlich wird die Verweis-URL protokolliert, sodass die Daten
            für die Wartung der Produktion verwendet und ein aggregierter
            Bericht zu den Top-Integrationen basierend auf der Anzahl der
            Schriftartenanfragen generiert werden kann. Google verwendet laut
            eigener Auskunft keine der von Google Fonts erfassten
            Informationen, um Profile von Endnutzern zu erstellen oder
            zielgerichtete Anzeigen zu schalten; Dienstanbieter: Google
            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;
            Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
            f) DSGVO); Website:{" "}
            <a
              href="https://fonts.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://fonts.google.com/
            </a>
            ; Datenschutzerklärung:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
            ; Weitere Informationen:{" "}
            <a
              href="https://developers.google.com/fonts/faq/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.google.com/fonts/faq/privacy?hl=de
            </a>
            .
          </li>
          <li>
            Google Maps: Wir binden die Landkarten des Dienstes &bdquo;Google
            Maps&ldquo; des Anbieters Google ein. Zu den verarbeiteten Daten
            können insbesondere IP-Adressen und Standortdaten der Nutzer
            gehören; Dienstanbieter: Google Cloud EMEA Limited, 70 Sir John
            Rogerson&rsquo;s Quay, Dublin 2, Irland; Rechtsgrundlagen:
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
            Website:{" "}
            <a
              href="https://mapsplatform.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mapsplatform.google.com/
            </a>
            ; Datenschutzerklärung:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
            .
          </li>
        </ul>
        <p>
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
          Schwenke
        </p>
      </LegalShell>
      <Footer />
    </>
  );
}
