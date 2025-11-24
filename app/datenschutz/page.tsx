"use client";

import { PageShell } from "@/components/marketing";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export default function DatenschutzPage() {
    return (
        <PageShell>
            <SiteHeader />

            <div className="mx-auto max-w-3xl px-4 py-16">
                <div
                    className="
            space-y-8
            bg-white
            p-0
            shadow-none
            border-0

            md:p-8
            md:rounded-2xl
            md:shadow-sm
            md:border
            md:border-dashed
            md:border-slate-300
          "
                >
                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Datenschutzerklärung
                        </h1>
                        <p className="text-xs text-slate-500">
                            Mit den folgenden Hinweisen informieren wir dich über Art, Umfang und
                            Zwecke der Verarbeitung personenbezogener Daten im Zusammenhang mit
                            der Nutzung von TinyBill und dieser Website.
                        </p>
                    </div>

                    {/* Verantwortlicher */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            1. Verantwortlicher
                        </h2>
                        <p className="text-sm text-slate-700">
                            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                        </p>
                        <div className="mt-1 space-y-1 text-sm text-slate-700">
                            <p className="font-medium text-slate-900">Shopitech</p>
                            <p>Inhaber: Arthur Schimpf</p>
                            <p>Hans-Thoma-Str. 4</p>
                            <p>76351 Linkenheim-Hochstetten</p>
                            <p>Deutschland</p>
                        </div>
                        <p className="mt-2 text-sm text-slate-700">
                            E-Mail:&nbsp;
                            <a
                                href="mailto:Kontakt@Shopitech.de"
                                className="text-blue-700 underline-offset-2 hover:underline"
                            >
                                Kontakt@Shopitech.de
                            </a>
                        </p>
                    </section>

                    {/* Hosting */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            2. Hosting und Server-Logfiles
                        </h2>
                        <p className="text-sm text-slate-700">
                            Die Landingpage von TinyBill (z.&nbsp;B.{" "}
                            <span className="font-mono text-xs">tinybill.de</span>) wird bei Vercel
                            gehostet. Die Anwendung TinyBill (z.&nbsp;B.{" "}
                            <span className="font-mono text-xs">app.tinybill.de</span>) wird auf
                            Servern der Hetzner Online GmbH betrieben.
                        </p>
                        <p className="text-sm text-slate-700">
                            Beim Aufruf unserer Seiten werden automatisch bestimmte Informationen
                            verarbeitet, die dein Browser übermittelt (sogenannte Server-Logfiles).
                            Dazu gehören insbesondere:
                        </p>
                        <ul className="ml-4 list-disc space-y-1 text-sm text-slate-700">
                            <li>IP-Adresse (gekürzt oder pseudonymisiert, soweit möglich)</li>
                            <li>Datum und Uhrzeit der Anfrage</li>
                            <li>aufgerufene URL und Referrer-URL</li>
                            <li>verwendeter Browser und Betriebssystem</li>
                            <li>übertragene Datenmenge</li>
                        </ul>
                        <p className="text-sm text-slate-700">
                            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                            auf Basis unseres berechtigten Interesses an der technischen
                            Bereitstellung der Website, der Stabilität und der Sicherheit
                            (insbesondere zur Abwehr von Angriffen).
                        </p>
                    </section>

                    {/* Daten in der App */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            3. Nutzung von TinyBill (App) und verarbeitete Daten
                        </h2>
                        <p className="text-sm text-slate-700">
                            Bei der Nutzung der TinyBill-Anwendung verarbeiten wir – je nach
                            Funktionsumfang und Nutzung – insbesondere folgende Kategorien
                            personenbezogener Daten:
                        </p>
                        <ul className="ml-4 list-disc space-y-1 text-sm text-slate-700">
                            <li>
                                Stammdaten von Nutzerinnen und Nutzern (z.&nbsp;B. Name, E-Mail-Adresse,
                                Rechnungsadresse)
                            </li>
                            <li>
                                Kundendaten, die du in TinyBill erfasst (z.&nbsp;B. Name, Anschrift,
                                Kontaktdaten deiner Rechnungsempfänger)
                            </li>
                            <li>
                                Rechnungsdaten (z.&nbsp;B. Rechnungsnummer, Leistungsbeschreibung,
                                Beträge, Steuersätze, Zahlungsziele)
                            </li>
                            <li>
                                Zahlungs- und Bankdaten (z.&nbsp;B. IBAN, BIC, Bankverbindung des
                                Rechnungsausstellers)
                            </li>
                            <li>
                                Nutzungsdaten (z.&nbsp;B. Logins, Zeitpunkte, Änderungen an
                                Rechnungsentwürfen, Einstellungen)
                            </li>
                            <li>
                                Kommunikationsdaten (z.&nbsp;B. Inhalte von Supportanfragen per E-Mail)
                            </li>
                        </ul>
                        <p className="text-sm text-slate-700">
                            Die Verarbeitung dieser Daten erfolgt in der Regel zur Vorbereitung und
                            Erfüllung von Verträgen mit dir (Art. 6 Abs. 1 lit. b DSGVO), zur Erfüllung
                            gesetzlicher Pflichten (z.&nbsp;B. steuerrechtliche Aufbewahrungsfristen,
                            Art. 6 Abs. 1 lit. c DSGVO) sowie auf Grundlage berechtigter Interessen
                            (Art. 6 Abs. 1 lit. f DSGVO), etwa zur Missbrauchsvermeidung, zur
                            Weiterentwicklung von TinyBill oder zur Sicherstellung eines stabilen
                            Betriebs.
                        </p>
                    </section>

                    {/* Konto & Registrierung */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            4. Registrierung, Login und Nutzerkonto
                        </h2>
                        <p className="text-sm text-slate-700">
                            Wenn du ein Konto bei TinyBill anlegst, werden die von dir angegebenen
                            Daten (z.&nbsp;B. Name, E-Mail-Adresse, Passwort, Firmendaten) zur
                            Einrichtung und Verwaltung deines Accounts verarbeitet.
                        </p>
                        <p className="text-sm text-slate-700">
                            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                            (Vertragserfüllung). Wir speichern diese Daten so lange, wie dein Konto
                            besteht und darüber hinaus, soweit gesetzliche Aufbewahrungsfristen
                            bestehen oder berechtigte Interessen (z.&nbsp;B. Nachweis- und
                            Dokumentationspflichten) eine weitere Speicherung erfordern.
                        </p>
                    </section>

                    {/* Kontakt */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            5. Kontaktaufnahme
                        </h2>
                        <p className="text-sm text-slate-700">
                            Wenn du uns per E-Mail kontaktierst, werden die von dir übermittelten
                            Daten (z.&nbsp;B. Name, E-Mail-Adresse, Inhalt der Nachricht) zur
                            Bearbeitung deiner Anfrage verarbeitet.
                        </p>
                        <p className="text-sm text-slate-700">
                            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                            sofern die Anfrage mit der Erfüllung eines Vertrags zusammenhängt, und im
                            Übrigen auf Grundlage unseres berechtigten Interesses an der Bearbeitung
                            von Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                        </p>
                    </section>

                    {/* Cookies & Local Storage */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            6. Cookies und Local Storage
                        </h2>
                        <p className="text-sm text-slate-700">
                            TinyBill verwendet Cookies und Local-Storage-Technologien, um bestimmte
                            Funktionen bereitzustellen und die Nutzung zu erleichtern. Hierzu können
                            insbesondere gehören:
                        </p>
                        <ul className="ml-4 list-disc space-y-1 text-sm text-slate-700">
                            <li>technisch notwendige Cookies (z.&nbsp;B. Session- und Login-Cookies)</li>
                            <li>Einstellungen und Präferenzen im Local Storage</li>
                            <li>
                                gegebenenfalls Cookies für Analysezwecke (siehe Abschnitt zu Google
                                Analytics)
                            </li>
                        </ul>
                        <p className="text-sm text-slate-700">
                            Soweit Cookies technisch notwendig sind, erfolgt die Verarbeitung auf Basis
                            von Art. 6 Abs. 1 lit. f DSGVO. Soweit eine Einwilligung erforderlich ist,
                            erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
                        </p>
                        <p className="text-sm text-slate-700">
                            Du kannst deinen Browser so einstellen, dass Cookies eingeschränkt oder
                            blockiert werden. Die Deaktivierung technisch notwendiger Cookies kann
                            jedoch zu Funktionsbeeinträchtigungen von TinyBill führen.
                        </p>
                    </section>

                    {/* Google Analytics */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            7. Einsatz von Google Analytics
                        </h2>
                        <p className="text-sm text-slate-700">
                            Wir verwenden Google Analytics, einen Webanalysedienst der Google
                            Ireland Limited. Google Analytics nutzt Cookies und ähnliche
                            Technologien, um die Nutzung unserer Website auszuwerten und Berichte
                            über die Website-Aktivitäten zu erstellen.
                        </p>
                        <p className="text-sm text-slate-700">
                            Die durch Google Analytics erhobenen Informationen über deine Nutzung
                            dieser Website können an Server von Google übertragen und dort
                            verarbeitet werden. Wir achten darauf, dass IP-Adressen nur in
                            gekürzter Form verarbeitet werden, sodass ein Personenbezug nicht mehr
                            direkt hergestellt werden kann (IP-Anonymisierung, soweit verfügbar).
                        </p>
                        <p className="text-sm text-slate-700">
                            Die Nutzung von Google Analytics erfolgt in der Regel auf Grundlage
                            deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Du kannst deine
                            Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, etwa über
                            entsprechende Einstellungen in einem Consent-Tool oder durch Anpassung
                            deiner Browser-Einstellungen.
                        </p>
                        <p className="text-sm text-slate-700">
                            Zusätzlich kannst du die Erfassung durch Google Analytics verhindern,
                            indem du das von Google bereitgestellte Browser-Add-on zur
                            Deaktivierung installierst.
                        </p>
                    </section>

                    {/* Google Fonts */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            8. Google Fonts
                        </h2>
                        <p className="text-sm text-slate-700">
                            Zur einheitlichen Darstellung von Schriftarten können auf unseren Seiten
                            Google Fonts eingesetzt werden. Je nach Implementierung kann hierbei eine
                            Anfrage an Server von Google gesendet werden, um Schriftarten zu laden.
                        </p>
                        <p className="text-sm text-slate-700">
                            Die Nutzung von Google Fonts erfolgt im Interesse einer ansprechenden und
                            konsistenten Darstellung unserer Inhalte (Art. 6 Abs. 1 lit. f DSGVO). Wo
                            möglich, setzen wir auf lokal gehostete Schriftarten, um Datenübertragungen
                            an Dritte zu minimieren.
                        </p>
                    </section>

                    {/* CDN / Infrastruktur */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            9. Content Delivery und technische Infrastruktur
                        </h2>
                        <p className="text-sm text-slate-700">
                            Zur effizienten Auslieferung von Inhalten können Infrastruktur- und
                            Content-Delivery-Dienste der eingesetzten Hosting-Anbieter genutzt werden.
                            Hierbei werden technische Zugriffsdaten verarbeitet, um Inhalte schnell und
                            stabil bereitzustellen.
                        </p>
                        <p className="text-sm text-slate-700">
                            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO auf
                            Basis unseres berechtigten Interesses an einer sicheren und performanten
                            Bereitstellung der Website und der App.
                        </p>
                    </section>

                    {/* Auftragsverarbeitung */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            10. Auftragsverarbeitung und Weitergabe von Daten
                        </h2>
                        <p className="text-sm text-slate-700">
                            Für den Betrieb von TinyBill und der Website setzen wir Dienstleister als
                            sogenannte Auftragsverarbeiter ein (z.&nbsp;B. Hosting, Infrastruktur,
                            Analyse). Diese verarbeiten personenbezogene Daten ausschließlich nach
                            unserer Weisung und auf Grundlage von Auftragsverarbeitungsverträgen gemäß
                            Art. 28 DSGVO.
                        </p>
                        <p className="text-sm text-slate-700">
                            Eine Weitergabe an sonstige Dritte erfolgt nur, soweit dies gesetzlich
                            erlaubt oder vorgeschrieben ist, du eingewilligt hast oder es zur
                            Vertragserfüllung erforderlich ist (z.&nbsp;B. gegenüber Steuerberatung
                            oder buchhalterischen Dienstleistern, soweit eingebunden).
                        </p>
                    </section>

                    {/* Betroffenenrechte */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            11. Deine Rechte
                        </h2>
                        <p className="text-sm text-slate-700">
                            Dir stehen im Hinblick auf die Verarbeitung deiner personenbezogenen Daten
                            folgende Rechte zu:
                        </p>
                        <ul className="ml-4 list-disc space-y-1 text-sm text-slate-700">
                            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                            <li>
                                Recht auf Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)
                            </li>
                            <li>
                                Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft
                                (Art. 7 Abs. 3 DSGVO)
                            </li>
                        </ul>
                        <p className="text-sm text-slate-700">
                            Zur Ausübung deiner Rechte kannst du dich jederzeit an uns wenden, z.&nbsp;B.
                            per E-Mail an{" "}
                            <a
                                href="mailto:Kontakt@Shopitech.de"
                                className="text-blue-700 underline-offset-2 hover:underline"
                            >
                                Kontakt@Shopitech.de
                            </a>
                            .
                        </p>
                        <p className="text-sm text-slate-700">
                            Außerdem hast du das Recht, dich bei einer zuständigen
                            Datenschutzaufsichtsbehörde zu beschweren, wenn du der Ansicht bist, dass
                            die Verarbeitung deiner Daten gegen die DSGVO verstößt.
                        </p>
                    </section>

                    {/* Speicherdauer */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900">
                            12. Speicherdauer
                        </h2>
                        <p className="text-sm text-slate-700">
                            Wir speichern personenbezogene Daten nur so lange, wie es für die
                            jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen
                            bestehen (z.&nbsp;B. handels- und steuerrechtliche Pflichten). Danach
                            werden die Daten nach den gesetzlichen Vorgaben gelöscht oder anonymisiert.
                        </p>
                    </section>

                    {/* Stand */}
                    <section className="space-y-1">
                        <h2 className="text-base font-semibold text-slate-900">
                            13. Aktualität dieser Datenschutzerklärung
                        </h2>
                        <p className="text-sm text-slate-700">
                            Wir passen diese Datenschutzerklärung an, wenn sich rechtliche Vorgaben,
                            unser Angebot oder die zugrunde liegenden Verarbeitungen ändern.
                        </p>
                        <p className="text-xs text-slate-500">
                            Stand: {new Date().toLocaleDateString("de-DE")}
                        </p>
                    </section>
                </div>
            </div>

            <SiteFooter />
        </PageShell>
    );
}