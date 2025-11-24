"use client";

import { PageShell } from "@/components/marketing";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export default function ImpressumPage() {
    return (
        <PageShell>
            <SiteHeader />

            <div className="mx-auto max-w-3xl px-4 py-12">
                <article
                    className="
            space-y-8
            text-sm
            leading-relaxed
            text-slate-700

            md:rounded-2xl
            md:border
            md:border-dashed
            md:border-slate-300
            md:bg-slate-50
            md:px-6
            md:py-6
          "
                >
                    <header className="space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Impressum
                        </h1>
                        <p className="text-xs text-slate-500">
                            Angaben gemäß § 5 TMG sowie § 18 Abs. 2 MStV.
                        </p>
                    </header>

                    <section className="space-y-1">
                        <h2 className="text-base font-semibold text-slate-900">
                            Diensteanbieter
                        </h2>
                        <p className="font-medium text-slate-900">Shopitech</p>
                        <p>Inhaber: Arthur Schimpf</p>
                        <p>Hans-Thoma-Str. 4</p>
                        <p>76351 Linkenheim-Hochstetten</p>
                        <p>Deutschland</p>
                    </section>

                    <section className="space-y-1">
                        <h2 className="text-base font-semibold text-slate-900">Kontakt</h2>
                        <p>
                            E-Mail:&nbsp;
                            <a
                                href="mailto:Kontakt@Shopitech.de"
                                className="text-blue-700 underline-offset-2 hover:underline"
                            >
                                Kontakt@Shopitech.de
                            </a>
                        </p>
                    </section>

                    <section className="space-y-1">
                        <h2 className="text-base font-semibold text-slate-900">
                            Steuerliche Angaben
                        </h2>
                        <p>Steuernummer: 34310/37667</p>
                        <p>Wirtschafts-Identifikationsnummer: 42 679 093 517</p>
                    </section>

                    <section className="space-y-1">
                        <h2 className="text-base font-semibold text-slate-900">
                            Verantwortlich für den Inhalt
                        </h2>
                        <p>nach § 18 Abs. 2 MStV:</p>
                        <p className="mt-1">Arthur Schimpf</p>
                        <p>Hans-Thoma-Str. 4</p>
                        <p>76351 Linkenheim-Hochstetten</p>
                        <p>Deutschland</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-slate-900">
                            Haftungsausschluss
                        </h2>

                        <div className="space-y-1">
                            <h3 className="text-sm font-semibold text-slate-900">
                                Haftung für Inhalte
                            </h3>
                            <p>
                                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                                Inhalte auf diesen Seiten verantwortlich. Nach §§ 8–10 TMG
                                besteht jedoch keine Verpflichtung, übermittelte oder
                                gespeicherte fremde Informationen zu überwachen oder nach
                                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                                hinweisen.
                            </p>
                            <p>
                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                                möglich. Bei Bekanntwerden von entsprechenden
                                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                            </p>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-sm font-semibold text-slate-900">
                                Haftung für Links
                            </h3>
                            <p>
                                Unser Angebot enthält Links zu externen Websites Dritter, auf
                                deren Inhalte wir keinen Einfluss haben. Für diese fremden
                                Inhalte übernehmen wir keine Gewähr. Für die Inhalte der
                                verlinkten Seiten ist stets der jeweilige Anbieter oder
                                Betreiber der Seiten verantwortlich.
                            </p>
                            <p>
                                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                                ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                                derartige Links umgehend entfernen.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-slate-900">
                            Urheberrecht
                        </h2>
                        <p>
                            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                            vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw.
                            Erstellers.
                        </p>
                        <p>
                            Downloads und Kopien dieser Seite sind nur für den privaten,
                            nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                            dieser Seite nicht vom Betreiber erstellt wurden, werden die
                            Urheberrechte Dritter beachtet und entsprechende Inhalte als
                            solche gekennzeichnet.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-slate-900">
                            Streitbeilegung
                        </h2>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur
                            Online-Streitbeilegung (OS) bereit:&nbsp;
                            <a
                                href="https://ec.europa.eu/consumers/odr/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-700 underline-offset-2 hover:underline"
                            >
                                https://ec.europa.eu/consumers/odr/
                            </a>
                            .
                        </p>
                        <p>
                            Wir sind weder verpflichtet noch bereit, an
                            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                            teilzunehmen.
                        </p>
                    </section>
                </article>
            </div>

            <SiteFooter />
        </PageShell>
    );
}