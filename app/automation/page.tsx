"use client";

import {
    PageShell,
    SectionHeader,
    FeatureCard,
    AutoCheckRow,
    StepCard,
} from "@/components/marketing";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export default function AutomationPage() {
    return (
        <PageShell>
            <SiteHeader />

            <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
                {/* Hero / Intro */}
                <section className="border-b border-dashed border-slate-200 pb-12">
                    <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                Automation
                            </div>

                            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                TinyBill automatisiert, ohne dir die Kontrolle zu nehmen.
                            </h1>

                            <p className="text-sm text-slate-600 sm:text-base">
                                Ghostwriting für Positionstexte, IBAN- und Adressvorschläge,
                                Plausibilitätsprüfungen, Steuerlogik, QR-Zahlung und
                                E-Rechnung im Hintergrund – TinyBill nimmt dir Routinearbeit ab,
                                damit du dich auf deine Arbeit konzentrieren kannst.
                            </p>

                            <p className="text-sm text-slate-600">
                                Automation bedeutet hier nicht „Blackbox“, sondern
                                unterstützende Assistent:innen: TinyBill schlägt vor, prüft,
                                erinnert und berechnet – du bestätigst und entscheidest.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                <a
                                    href="https://app.tinybill.de"
                                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
                                >
                                    Automation live testen
                                </a>
                                <p className="text-xs text-slate-500">
                                    Starte mit einer echten Rechnung und sieh, wie viele Schritte
                                    TinyBill dir abnimmt.
                                </p>
                            </div>
                        </div>

                        {/* Automation Preview Card */}
                        <div className="relative">
                            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-blue-100 opacity-70 blur-2xl" />
                            <div className="relative overflow-hidden rounded-3xl border border-dashed border-slate-200 bg-white shadow-xl">
                                <div className="flex items-center justify-between border-b border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
                  <span className="font-medium text-slate-700">
                    Automatisierungs-Assistenz
                  </span>
                                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    6 Vorschläge aktiv
                  </span>
                                </div>

                                <div className="grid gap-4 p-4 text-[11px] text-slate-700 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
                                            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                                Ghostwriting Position
                                            </div>
                                            <p className="mt-1">
                                                „Konzeption, Design & Umsetzung Microsite für
                                                Produktlaunch“ – vorgeschlagen auf Basis früherer
                                                Rechnungen.
                                            </p>
                                        </div>
                                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
                                            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                                Smart Defaults
                                            </div>
                                            <p className="mt-1">
                                                Zahlungsziel 14 Tage, Standard-Steuersatz, letzte
                                                Bankverbindung – alles sinnvoll vorbelegt.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
                                            <div className="flex items-center justify-between text-[10px] font-medium text-slate-500">
                                                <span>Plausibilitätschecks</span>
                                                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                          4 OK · 1 Hinweis
                        </span>
                                            </div>
                                            <div className="mt-2 space-y-1.5">
                                                <AutoCheckRow text="Adresse vollständig" status="ok" />
                                                <AutoCheckRow text="IBAN gültig" status="ok" />
                                                <AutoCheckRow text="Steuer-ID vorhanden" status="ok" />
                                                <AutoCheckRow
                                                    text="Leistungszeitraum eingetragen"
                                                    status="ok"
                                                />
                                                <AutoCheckRow
                                                    text="Hinweis für Kleinunternehmer fehlt"
                                                    status="warn"
                                                />
                                            </div>
                                        </div>

                                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
                                            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                                E-Rechnung & QR-Code
                                            </div>
                                            <p className="mt-1">
                                                Strukturierte E-Rechnung wird vorbereitet, QR-Code für
                                                Überweisung ist generiert – du musst nur noch exportieren.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Was Automation in TinyBill bedeutet */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Grundidee"
                        title="Automation heißt: weniger tippen, weniger Fehler, klarere Rechnungen."
                        description="TinyBill automatisiert genau dort, wo sich Muster wiederholen: bei Kundendaten, Bankverbindungen, Positionstexten, Steuerlogik und Qualitätschecks. Alles andere bleibt bewusst in deiner Hand."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] md:items-start">
                        <div className="space-y-4 text-sm text-slate-700">
                            <h3 className="text-base font-semibold text-slate-900">
                                Drei Arten von Automation
                            </h3>
                            <ul className="ml-4 list-disc space-y-2">
                                <li>
                                    <span className="font-semibold">Vorschlags-Automation:</span>{" "}
                                    TinyBill schlägt dir Inhalte vor – z.&nbsp;B. Positionstexte,
                                    Kunden, IBANs oder Zahlungsziele – auf Basis deiner bisherigen
                                    Nutzung.
                                </li>
                                <li>
                  <span className="font-semibold">
                    Check- & Prüf-Automation:
                  </span>{" "}
                                    Pflichtangaben, Steuersätze, Beträge und Nummernkreise werden
                                    im Hintergrund geprüft, bevor etwas exportiert wird.
                                </li>
                                <li>
                                    <span className="font-semibold">Struktur-Automation:</span>{" "}
                                    E-Rechnung, QR-Codes und saubere Layouts entstehen automatisch
                                    aus deinen Eingaben.
                                </li>
                            </ul>

                            <p className="mt-4">
                                Du entscheidest dabei immer selbst: Vorschläge können
                                übernommen, angepasst oder ignoriert werden. TinyBill bleibt ein
                                Assistent, kein Autopilot.
                            </p>
                        </div>

                        <div className="space-y-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
                            <h4 className="text-sm font-semibold text-slate-900">
                                Beispiele aus dem Alltag
                            </h4>
                            <ul className="ml-4 mt-2 list-disc space-y-1">
                                <li>
                                    Du tippst den Namen eines Kunden – TinyBill schlägt vollständige
                                    Adresse und Steuersetting vor.
                                </li>
                                <li>
                                    Du gibst eine Position ähnlich wie früher ein – TinyBill erkennt
                                    das Muster und schlägt den restlichen Text automatisch vor.
                                </li>
                                <li>
                                    Du wechselst von 19&nbsp;% auf 0&nbsp;% Steuer – TinyBill erinnert
                                    dich an den Kleinunternehmer-Hinweis.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Ghostwriting & intelligente Eingaben */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Eingaben"
                        title="Ghostwriting, Autocomplete und intelligente Defaults."
                        description="TinyBill hilft dir beim Formulieren, Vervollständigen und Wiederverwenden von Inhalten – vom Positionstext bis zur Bankverbindung."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
                        <div className="space-y-6 text-sm text-slate-700">
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Ghostwriting für Positionstexte
                                </h3>
                                <p className="mt-1">
                                    Statt jede Beschreibung neu zu schreiben, kann TinyBill
                                    Vorschläge machen: von der Formulierung über den Kontext bis
                                    zur Struktur deiner Leistungen.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>
                                        Vorschläge auf Basis deiner bisherigen Rechnungen und typischer
                                        Services.
                                    </li>
                                    <li>
                                        Klar strukturierte Texte mit Leistungsumfang, Zeitraum und
                                        Ergebnis.
                                    </li>
                                    <li>
                                        Du kannst Vorschläge anpassen, verwerfen oder als neuen Standard
                                        speichern.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Autocomplete für Kunden, Adressen und IBAN
                                </h3>
                                <p className="mt-1">
                                    Wiederkehrende Kunden, Bankdaten und wichtige Angaben musst
                                    du nur einmal sauber erfassen – danach schlägt TinyBill sie dir
                                    vor, sobald du anfängst zu tippen.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>
                                        Kundenliste mit Autocomplete direkt im Rechnungsformular.
                                    </li>
                                    <li>
                                        IBAN- und BIC-Vervollständigung mit Strukturcheck im Hintergrund.
                                    </li>
                                    <li>
                                        Adressen werden inkl. Firmennamen, Ansprechpartner und Land
                                        wiederverwendet.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Intelligente Standardwerte
                                </h3>
                                <p className="mt-1">
                                    Zahlungsziele, Steuerprofile, Nummernkreise und
                                    Layout-Einstellungen wachsen mit dir mit – TinyBill merkt sich,
                                    wie du arbeitest.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>
                                        Standard-Zahlungsziel (z.&nbsp;B. 14 Tage), das du jederzeit
                                        überschreiben kannst.
                                    </li>
                                    <li>
                                        Vorbelegung als Kleinunternehmer:in oder mit regulären
                                        Steuersätzen.
                                    </li>
                                    <li>
                                        Automatisch fortlaufende Rechnungsnummern, die nichts doppelt
                                        vergeben.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs">
                                <h4 className="text-sm font-semibold text-slate-900">
                                    Automatisierte Eingaben im Mini-Flow
                                </h4>
                                <div className="mt-3 space-y-2">
                                    <StepCard
                                        step="1"
                                        title="Du fängst an zu tippen"
                                        text="Kundenname, Leistungsart oder IBAN – TinyBill erkennt Muster und blendet passende Vorschläge ein."
                                    />
                                    <StepCard
                                        step="2"
                                        title="Du bestätigst oder passt an"
                                        text="Mit einem Klick Vorschlag übernehmen oder leicht verändern. TinyBill drängt sich nicht auf."
                                    />
                                    <StepCard
                                        step="3"
                                        title="TinyBill lernt mit"
                                        text="Je häufiger du ähnliche Rechnungen schreibst, desto besser werden die Vorschläge."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Plausibilitätsprüfungen & Qualität */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Qualität"
                        title="Plausibilitätsprüfungen, bevor etwas rausgeht."
                        description="TinyBill prüft deine Rechnung auf formale Fehler, fehlende Pflichtangaben und unlogische Kombinationen – noch bevor du ein PDF oder eine E-Rechnung erzeugst."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-start">
                        <div className="space-y-6 text-sm text-slate-700">
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Checks im Hintergrund
                                </h3>
                                <p className="mt-1">
                                    Während du editierst, laufen Validierungen im Hintergrund und
                                    sammeln Hinweise. Du musst nicht aktiv „prüfen“ klicken, TinyBill
                                    meldet sich, wenn etwas wichtig ist.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>Vollständigkeit von Rechnungs- und Leistungsdaten.</li>
                                    <li>Format und Plausibilität von IBAN, Steuernummern & Co.</li>
                                    <li>
                                        Konsistenz von Summen, Steuersätzen und Währung über die ganze
                                        Rechnung.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Warnungen statt Blockaden
                                </h3>
                                <p className="mt-1">
                                    TinyBill versucht, dich nicht zu blockieren, sondern sinnvoll zu
                                    warnen. Du siehst klar, was kritisch ist und was nur ein Hinweis
                                    ist.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>
                                        „Hard Errors“ nur bei wirklich fehlenden Pflichtangaben, die
                                        rechtlich relevant sind.
                                    </li>
                                    <li>
                                        „Soft Hints“ für kosmetische oder Komfortthemen (z.&nbsp;B.
                                        fehlender Verwendungszweck).
                                    </li>
                                    <li>
                                        Übersicht vor dem Export: Welche Punkte sind geprüft, welche
                                        solltest du dir ansehen?
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
                                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    Aktuelle Prüfung
                  </span>
                                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    7 OK · 2 Hinweise
                  </span>
                                </div>

                                <div className="mt-3 space-y-2">
                                    <AutoCheckRow text="Kundenadresse vollständig" status="ok" />
                                    <AutoCheckRow text="IBAN gültig" status="ok" />
                                    <AutoCheckRow text="Steuerprofil gesetzt" status="ok" />
                                    <AutoCheckRow text="Rechnungsnummer eindeutig" status="ok" />
                                    <AutoCheckRow text="Leistungsdatum vorhanden" status="ok" />
                                    <AutoCheckRow
                                        text="Kleinunternehmer-Hinweis empfohlen"
                                        status="warn"
                                    />
                                    <AutoCheckRow
                                        text="Verwendungszweck im Zahlungsbereich ergänzen"
                                        status="warn"
                                    />
                                </div>

                                <p className="mt-3 text-[11px] text-slate-600">
                                    Vor dem Export zeigt TinyBill dir eine kompakte Übersicht
                                    dieser Checks – du kannst Hinweise annehmen, anpassen oder
                                    bewusst ignorieren, wenn sie für deinen Fall nicht relevant
                                    sind.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wiederkehrende Abläufe & Sammelrechnungen */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Abläufe"
                        title="Automation für wiederkehrende Kunden und Sammelrechnungen."
                        description="Viele Automatisierungen entfalten ihre Stärke erst, wenn du Kund:innen regelmäßig berechnest – TinyBill unterstützt dich dabei, aus wiederkehrenden Mustern saubere Prozesse zu machen."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-start">
                        <div className="space-y-6 text-sm text-slate-700">
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Wiederkehrende Kunden & Positionen
                                </h3>
                                <p className="mt-1">
                                    Sobald du Kund:innen mehrfach abrechnest, kannst du stark von
                                    TinyBills Automation profitieren – vom schnellen Kundengriff bis
                                    zu vorbereiteten Positionen.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>
                                        Kunden mit allen relevanten Daten (Adresse, Bank, Steuerprofil)
                                        stehen per Autocomplete bereit.
                                    </li>
                                    <li>
                                        Positionen wie „Monatliche Betreuung“, „Wartungspaket“ oder
                                        „Retainer“ können als Vorlagen dienen.
                                    </li>
                                    <li>
                                        TinyBill kennt deine typischen Kombinationen aus Kunde,
                                        Leistungszeitraum und Betrag.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Sammelrechnungen & Angebote
                                </h3>
                                <p className="mt-1">
                                    Mehrere Leistungen für einen Kunden? TinyBill hilft dir, daraus
                                    eine strukturierte Sammelrechnung oder ein klares Angebot zu
                                    machen.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>
                                        Mehrere Teilprojekte als getrennte Blöcke innerhalb einer
                                        Sammelrechnung.
                                    </li>
                                    <li>
                                        Angebote im Rechnungs-Layout, die später in Rechnungen
                                        überführt werden können.
                                    </li>
                                    <li>
                                        Klarer Leistungszeitraum pro Block, eindeutige Summen und
                                        Steuerdarstellung.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs">
                            <h4 className="text-sm font-semibold text-slate-900">
                                Typischer Automations-Flow für Stammkund:innen
                            </h4>
                            <div className="mt-3 space-y-2">
                                <StepCard
                                    step="1"
                                    title="Kunde auswählen"
                                    text="Du wählst einen bekannten Kunden – TinyBill zieht Adresse, Steuerprofil und Bankdaten nach."
                                />
                                <StepCard
                                    step="2"
                                    title="Leistungen ergänzen"
                                    text="Standardpositionen werden vorgeschlagen: monatliche Pauschale, Stundenpakete oder Wartung."
                                />
                                <StepCard
                                    step="3"
                                    title="Zeitraum & Versand"
                                    text="Leistungszeitraum wählen, Plausibilitätschecks bestätigen, PDF/E-Rechnung erzeugen und direkt versenden."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kontrolle & Transparenz */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Kontrolle"
                        title="Automation, aber transparent und jederzeit abschaltbar."
                        description="TinyBill soll dir Arbeit abnehmen, nicht Entscheidungen. Alles, was automatisiert passiert, ist sichtbar, nachvollziehbar und kann angepasst werden."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-2 md:items-start">
                        <div className="space-y-4 text-sm text-slate-700">
                            <h3 className="text-base font-semibold text-slate-900">
                                Du siehst immer, was automatisch passiert
                            </h3>
                            <p>
                                Vorschläge werden als solche gekennzeichnet, Checks sind
                                einsehbar, Hinweise erklären, warum TinyBill etwas meldet.
                            </p>
                            <ul className="ml-4 mt-2 list-disc space-y-1">
                                <li>
                                    Markierungen für automatisch gesetzte Werte (z.&nbsp;B.
                                    Zahlungsziel).
                                </li>
                                <li>Erklärungen zu Steuerlogik und Hinweisen.</li>
                                <li>
                                    Klare Trennung zwischen Pflicht und Komfort – du erkennst, was
                                    möglich und was nötig ist.
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4 text-sm text-slate-700">
                            <h3 className="text-base font-semibold text-slate-900">
                                Automation passt sich dir an – nicht umgekehrt
                            </h3>
                            <p>
                                Wenn du andere Defaults, Texte oder Abläufe bevorzugst, kannst
                                du TinyBill im Laufe der Zeit an deine Arbeitsweise anpassen.
                            </p>
                            <ul className="ml-4 mt-2 list-disc space-y-1">
                                <li>
                                    Eigene Textbausteine für Leistungen und Zahlungsbedingungen.
                                </li>
                                <li>Eigene Nummernlogik und Reihenfolgen.</li>
                                <li>
                                    Möglichkeit, Hinweise zu ignorieren, wenn sie bewusst so
                                    gewollt sind.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Abschluss / CTA */}
                <section className="pb-8">
                    <SectionHeader
                        eyebrow="Nächster Schritt"
                        title="Lass TinyBill die Routinearbeit übernehmen."
                        description="Automation in TinyBill bedeutet: weniger Klicks, weniger Fehler, weniger Grübeln über Formalitäten – und mehr Fokus auf deine eigentliche Arbeit."
                        align="left"
                    />

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                        <a
                            href="https://app.tinybill.de"
                            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
                        >
                            Jetzt mit Automation starten
                        </a>
                        <p className="text-xs text-slate-500">
                            Leg eine Beispielrechnung an und schau, welche Schritte TinyBill
                            bereits automatisch für dich übernimmt.
                        </p>
                    </div>
                </section>
            </div>

            <SiteFooter />
        </PageShell>
    );
}