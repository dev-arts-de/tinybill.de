"use client";

import Image from "next/image";
import {
    PageShell,
    SectionHeader,
    FeatureCard,
    AutoCheckRow,
    StepCard,
} from "@/components/marketing";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export default function FunktionenPage() {
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
                                Funktionen
                            </div>

                            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                Alle Funktionen von TinyBill im Detail.
                            </h1>

                            <p className="text-sm text-slate-600 sm:text-base">
                                TinyBill ist bewusst schlank im Interface, aber stark im
                                Hintergrund: Lokale Speicherung, Validierungen, Steuerlogik,
                                E-Rechnung und QR-Zahlungsdaten greifen ineinander, damit deine
                                Rechnungen sauber, nachvollziehbar und steuerrechtlich
                                einwandfrei sind.
                            </p>

                            <p className="text-sm text-slate-600">
                                Hier findest du einen Überblick über die wichtigsten
                                Bausteine&nbsp;– von der ersten Adresse über IBAN-Autocomplete
                                bis zur Sammelrechnung für Stammkund:innen.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-blue-100 opacity-70 blur-2xl" />
                            <div className="relative overflow-hidden rounded-3xl border border-dashed border-slate-200 bg-white shadow-xl">
                                <div className="flex items-center justify-between border-b border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
                  <span className="font-medium text-slate-700">
                    TinyBill · Rechnungsentwurf
                  </span>
                                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    Plausibilität geprüft
                  </span>
                                </div>
                                <div className="grid gap-4 p-4 text-[11px] text-slate-700 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
                                            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                                Stammdaten
                                            </div>
                                            <p className="mt-1 text-[11px]">
                                                Adresse, Steuerstatus, Logo – einmal sauber gepflegt,
                                                danach immer wiederverwendbar.
                                            </p>
                                        </div>
                                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
                                            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                                Local Storage
                                            </div>
                                            <p className="mt-1 text-[11px]">
                                                Entwürfe bleiben im Browser, selbst wenn du Tabs
                                                schließt. TinyBill erinnert sich an dich.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
                                            <div className="flex items-center justify-between text-[10px] font-medium text-slate-500">
                                                <span>Plausibilitätschecks</span>
                                                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                          5 OK
                        </span>
                                            </div>
                                            <div className="mt-2 space-y-1.5">
                                                <AutoCheckRow text="Adresse gültig" status="ok" />
                                                <AutoCheckRow text="IBAN geprüft" status="ok" />
                                                <AutoCheckRow text="Steuerlogik konsistent" status="ok" />
                                            </div>
                                        </div>
                                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
                                            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                                E-Rechnung im Hintergrund
                                            </div>
                                            <p className="mt-1 text-[11px]">
                                                Während du ein PDF siehst, erzeugt TinyBill bereits eine
                                                E-Rechnung, die steuerrechtlich sauber aufgebaut ist.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Layout & Local Storage */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Arbeitsoberfläche"
                        title="Aufgeräumtes Layout mit Local-Storage-Gedächtnis."
                        description="TinyBill merkt sich deine Eingaben lokal im Browser, ohne dass du ständig auf „Speichern“ achten musst. Gleichzeitig bleibt das Interface schlank – alles Wesentliche im Blick, nichts im Weg."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
                        <div className="space-y-4 text-sm text-slate-700">
                            <h3 className="text-base font-semibold text-slate-900">
                                Local-Storage-Speicherung
                            </h3>
                            <p>
                                TinyBill nutzt Local Storage, um deine aktuellen Entwürfe und
                                häufige Eingaben direkt im Browser zu speichern. Wenn du den
                                Tab schließt, den Laptop zuklappst oder kurz etwas anderes
                                machen musst, bleibt deine Arbeit erhalten.
                            </p>
                            <ul className="ml-4 list-disc space-y-1">
                                <li>Entwürfe werden automatisch im Hintergrund gesichert.</li>
                                <li>
                                    Häufig genutzte Daten wie Absender, Bankverbindung oder
                                    Standardtexte werden wieder vorgeschlagen.
                                </li>
                                <li>
                                    Du kannst jederzeit bewusst „zurücksetzen“, wenn du eine
                                    komplett frische Rechnung starten willst.
                                </li>
                            </ul>

                            <h3 className="mt-6 text-base font-semibold text-slate-900">
                                Klarer Aufbau statt Überforderung
                            </h3>
                            <p>
                                Die Oberfläche trennt bewusst zwischen Pflichtangaben,
                                Komfortfunktionen und Zusatzoptionen. Das reduziert
                                Fehlbedienungen und macht deine ersten Rechnungen schneller,
                                ohne auf Professionalität zu verzichten.
                            </p>
                            <ul className="ml-4 list-disc space-y-1">
                                <li>Absender- und Kundendaten klar getrennt.</li>
                                <li>Positionen zentral im Fokus.</li>
                                <li>Zusatzinfos wie Logo, Hinweise und Steuerdetails gruppiert.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs">
                                <h4 className="text-sm font-semibold text-slate-900">
                                    Highlights im Alltag
                                </h4>
                                <div className="mt-3 grid gap-3 md:grid-cols-2">
                                    <FeatureCard
                                        title="Keine Angst vor Tab-Verlust"
                                        description="TinyBill hält deinen Entwurf im Local Storage – ein versehentlich geschlossener Tab kostet dich nicht die ganze Rechnung."
                                    />
                                    <FeatureCard
                                        title="Intelligente Vorschläge"
                                        description="Oft genutzte Kunden und Texte stehen dir schneller zur Verfügung, ohne dass du alles neu eintippen musst."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Adressvalidierung & IBAN */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Datenqualität"
                        title="Adressvalidierung, IBAN-Autocomplete und Plausibilitätsprüfungen."
                        description="TinyBill hilft dir aktiv dabei, saubere Daten zu verwenden – von der Adresse bis zur Bankverbindung. Weniger Rückläufer, weniger Nachfragen, weniger Fehler."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-6 text-sm text-slate-700">
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Adressvalidierung für Kunden
                                </h3>
                                <p className="mt-1">
                                    Kundendaten sind die Grundlage jeder Rechnung. TinyBill
                                    prüft Adressen auf Vollständigkeit und Plausibilität, bevor
                                    eine Rechnung final erstellt wird.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>Hinweise bei fehlender PLZ, Ort oder Straße.</li>
                                    <li>
                                        Deutliche Hinweise, wenn Firmen- und Personendaten
                                        gemischt wirken.
                                    </li>
                                    <li>
                                        Erinnerung an Pflichtangaben, die für die Buchhaltung
                                        wichtig sind.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    IBAN-Autocomplete und Prüfung
                                </h3>
                                <p className="mt-1">
                                    Bankdaten müssen fehlerfrei sein, damit deine Kund:innen
                                    dich bezahlen können. TinyBill unterstützt dich durch
                                    Autocomplete und Validierung der IBAN.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>
                                        Formateingaben werden automatisch in ein sauberes IBAN-Format
                                        überführt (z.&nbsp;B. ohne Leerzeichen).
                                    </li>
                                    <li>Mod-97-Prüfung der IBAN-Struktur (Plausibilität).</li>
                                    <li>Hinweise bei offenkundig falschen oder unvollständigen IBANs.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
                                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    Live-Plausibilitätschecks
                  </span>
                                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    Läuft im Hintergrund
                  </span>
                                </div>

                                <div className="mt-3 space-y-2">
                                    <AutoCheckRow text="Kundenadresse vollständig" status="ok" />
                                    <AutoCheckRow text="IBAN formal gültig" status="ok" />
                                    <AutoCheckRow
                                        text="Rechnungsnummer nicht doppelt verwendet"
                                        status="ok"
                                    />
                                    <AutoCheckRow
                                        text="Währung, Steuersätze und Beträge konsistent"
                                        status="ok"
                                    />
                                </div>

                                <p className="mt-3 text-[11px] text-slate-600">
                                    Die Checks greifen, bevor du exportierst oder versendest – so
                                    werden viele typische Fehlerquellen abgefangen, ohne dass du
                                    jedes Detail manuell kontrollieren musst.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Steuern, 0%-Hinweise & Positionen */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Steuern & Rechtssicherheit"
                        title="Automatische Berechnungen mit klarer Steuerlogik pro Position."
                        description="TinyBill nimmt dir die Rechenarbeit ab, sorgt für nachvollziehbare Steuerdarstellung und erinnert an wichtige Hinweise – insbesondere für Kleinunternehmer:innen."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
                        <div className="space-y-6 text-sm text-slate-700">
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Steuer pro Position statt nur auf Gesamtsumme
                                </h3>
                                <p className="mt-1">
                                    Jede Position kann mit dem passenden Steuersatz versehen
                                    werden. TinyBill berechnet daraus sauber die Zwischen- und
                                    Gesamtsummen.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>Steuersätze pro Position definierbar.</li>
                                    <li>Zwischensummen nach Steuerarten möglich.</li>
                                    <li>Summe Netto, Steuerbetrag und Brutto immer im Blick.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Hinweise für Kleinunternehmer:innen (0&nbsp;%)
                                </h3>
                                <p className="mt-1">
                                    Wenn du als Kleinunternehmer nach § 19 UStG abrechnest,
                                    brauchst du andere Hinweise und eine andere Steuerlogik.
                                    TinyBill unterstützt dich dabei.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>0&nbsp;% Steuer pro Position mit klarer Kennzeichnung.</li>
                                    <li>
                                        Hinweis auf der Rechnung, dass keine Umsatzsteuer
                                        ausgewiesen wird (Kleinunternehmerregelung).
                                    </li>
                                    <li>
                                        Plausibilitätscheck, ob Steuersätze und Hinweise
                                        zusammenpassen.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Leistungs- und Zahlungshinweise sauber formatiert
                                </h3>
                                <p className="mt-1">
                                    Leistungszeitraum, Zahlungsziel, Bankdaten und
                                    zusätzliche Hinweise werden einheitlich formatiert, damit
                                    deine Kunden schnell verstehen, was zu tun ist.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>Standardtexte für Zahlungsziele, die du anpassen kannst.</li>
                                    <li>
                                        Leistungszeitpunkt oder -zeitraum wird klar dargestellt.
                                    </li>
                                    <li>
                                        Individuelle Hinweise (z.&nbsp;B. „Nur Überweisung, kein
                                        Barverkauf“) lassen sich ergänzen.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs">
                                <h4 className="text-sm font-semibold text-slate-900">
                                    Automatische Berechnung im Überblick
                                </h4>

                                <div className="mt-3 space-y-2">
                                    <StepCard
                                        step="1"
                                        title="Positionen anlegen"
                                        text="Du trägst Leistungen, Mengen und Einzelpreise ein. Pro Position kannst du den passenden Steuersatz wählen."
                                    />
                                    <StepCard
                                        step="2"
                                        title="Steuerlogik prüfen"
                                        text="TinyBill prüft, ob die Steuersätze zum gewählten Profil passen (z.B. Kleinunternehmer:in mit 0 %)."
                                    />
                                    <StepCard
                                        step="3"
                                        title="Summen & Hinweise"
                                        text="Netto, Steuerbetrag, Brutto und erforderliche Hinweise werden automatisch berechnet und sauber dargestellt."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Logo, QR-Code & Zahlung */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Präsentation & Zahlung"
                        title="Logo-Upload, QR-Zahlungscode und klare Zahlungsinfos."
                        description="TinyBill sorgt dafür, dass deine Rechnungen nicht nur korrekt, sondern auch professionell wirken – inklusive Logo, sauberer Typografie und optionalem QR-Zahlungscode."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-2 md:items-start">
                        <div className="space-y-6 text-sm text-slate-700">
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    Logo-Upload in der Rechnung
                                </h3>
                                <p className="mt-1">
                                    Du kannst ein eigenes Logo hinterlegen, das automatisch in
                                    deinen Rechnungen verwendet wird. TinyBill achtet dabei auf
                                    eine sinnvolle Größe und Position, damit der Inhalt im
                                    Vordergrund bleibt.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>Upload eines Logos direkt in der App.</li>
                                    <li>
                                        Konsistente Darstellung auf allen Rechnungen – kein
                                        Copy/Paste in Word-Vorlagen mehr.
                                    </li>
                                    <li>
                                        Klare Trennung von Branding-Bereich und eigentlichem
                                        Rechnungsteil.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    QR-Zahlungscode für schnelle Überweisungen
                                </h3>
                                <p className="mt-1">
                                    TinyBill kann für passende Konten einen QR-Zahlungscode
                                    vorbereiten, damit deine Kund:innen Rechnungen einfach per
                                    Banking-App scannen und übernehmen können.
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1">
                                    <li>
                                        Beträge, Verwendungszweck und Empfänger werden automatisch
                                        gefüllt.
                                    </li>
                                    <li>Keine Tippfehler bei IBAN oder Betrag auf Kundenseite.</li>
                                    <li>Optionaler Einsatz je nach Zielgruppe und Bankumfeld.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs">
                                <h4 className="text-sm font-semibold text-slate-900">
                                    Wie Zahlungsinformationen auf der Rechnung wirken
                                </h4>
                                <p className="mt-2 text-[11px] text-slate-700">
                                    Zahlungsinformationen werden bewusst ruhig und klar
                                    dargestellt:
                                </p>
                                <ul className="ml-4 mt-2 list-disc space-y-1 text-[11px] text-slate-700">
                                    <li>IBAN und BIC lesbar formatiert.</li>
                                    <li>Zahlungsziel deutlich hervorgehoben.</li>
                                    <li>Optionaler QR-Code als Ergänzung, nicht als Pflicht.</li>
                                    <li>
                                        Auf Wunsch kurze, einheitliche Zahlungsnotiz
                                        (z.&nbsp;B. „Bitte überweisen Sie den Betrag innerhalb von
                                        14 Tagen ohne Abzug.“).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dokumenttypen: Rechnung, Sammelrechnung, Angebot, Versand */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Dokumenttypen"
                        title="Einzelrechnungen, Sammelrechnungen und Angebote – alles im selben Flow."
                        description="TinyBill konzentriert sich auf das, was du im Alltag brauchst: saubere Rechnungen für einen Auftrag, Sammelrechnungen für wiederkehrende Kund:innen und Angebote, die sich später in Rechnungen verwandeln lassen."
                        align="left"
                    />

                    <div className="grid gap-6 md:grid-cols-3">
                        <FeatureCard
                            title="Einzelrechnungen"
                            description="Für abgeschlossene Aufträge oder einmalige Leistungen – ideal für Projekte, Beratungen, Workshops oder kleinere Jobs."
                        />
                        <FeatureCard
                            title="Sammelrechnungen für einen Kunden"
                            description="Bündele mehrere Leistungen oder Teilprojekte für einen Kunden in einer Sammelrechnung. Weniger Rechnungen, klarere Übersicht."
                        />
                        <FeatureCard
                            title="Angebote, die zu Rechnungen werden"
                            description="Erstelle Angebote im gleichen Layout wie deine Rechnungen. Wenn der Auftrag kommt, kannst du sie in eine Rechnung überführen."
                        />
                    </div>

                    <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center">
                        <div className="space-y-4 text-sm text-slate-700">
                            <h3 className="text-base font-semibold text-slate-900">
                                Direkter Versand an deine Kund:innen
                            </h3>
                            <p>
                                Dokumente sollen nicht nur erstellt, sondern auch verschickt
                                werden. TinyBill denkt den Versand direkt mit, damit du nicht
                                zwischen Tools springen musst.
                            </p>
                            <ul className="ml-4 mt-2 list-disc space-y-1">
                                <li>Download der Rechnung als PDF.</li>
                                <li>
                                    Vorbereitung für den Versand per E-Mail (Betreff- und
                                    Textvorschläge, falls integriert).
                                </li>
                                <li>
                                    E-Rechnungsdatei mit exportierbar, damit die Buchhaltung deines
                                    Kunden sie verarbeiten kann.
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
                            <h4 className="text-sm font-semibold text-slate-900">
                                Typische Workflows
                            </h4>
                            <ul className="ml-4 mt-2 list-disc space-y-1">
                                <li>
                                    Mehrere kleine Leistungen auf einem Projekt sammeln und als
                                    monatliche Sammelrechnung stellen.
                                </li>
                                <li>
                                    Angebot schreiben, Kund:in zusagen lassen, Angebot in
                                    Rechnung überführen.
                                </li>
                                <li>
                                    Laufende Retainer-Leistungen als wiederkehrende
                                    Sammelrechnungen anlegen.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* E-Rechnung im Hintergrund */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="E-Rechnung"
                        title="E-Rechnung im Hintergrund – steuerrechtlich sauber vorbereitet."
                        description="Während du eine klassische Rechnung mit Logo und Positionen siehst, baut TinyBill im Hintergrund eine strukturierte E-Rechnung auf, die den Anforderungen moderner Buchhaltungssysteme gerecht wird."
                        align="left"
                    />

                    <div className="grid gap-8 md:grid-cols-2 md:items-start">
                        <div className="space-y-4 text-sm text-slate-700">
                            <h3 className="text-base font-semibold text-slate-900">
                                Menschlich lesbar, maschinenlesbar im Hintergrund
                            </h3>
                            <p>
                                TinyBill trennt Darstellung und Struktur: Das PDF bleibt
                                lesbar und verständlich, die E-Rechnung enthält alle
                                strukturierten Informationen für Buchhaltungssoftware und
                                Portale.
                            </p>
                            <ul className="ml-4 mt-2 list-disc space-y-1">
                                <li>Klare Zuordnung von Beträgen, Steuersätzen und Positionen.</li>
                                <li>
                                    Aufbau der E-Rechnung nach den gängigen steuerlichen
                                    Anforderungen.
                                </li>
                                <li>
                                    Ziel: Weniger Rückfragen der Steuerberatung und schnellere
                                    Verarbeitung.
                                </li>
                            </ul>

                            <p className="mt-2">
                                So kannst du dich auf Inhalte und Kunden konzentrieren, während
                                TinyBill sich um Formalitäten im Hintergrund kümmert.
                            </p>
                        </div>

                        <div className="space-y-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
                            <h4 className="text-sm font-semibold text-slate-900">
                                Warum das für dich wichtig ist
                            </h4>
                            <ul className="ml-4 mt-2 list-disc space-y-1">
                                <li>
                                    Du bist vorbereitet, wenn E-Rechnungen zur Pflicht werden
                                    oder stärker gefordert sind.
                                </li>
                                <li>
                                    Deine Kund:innen können Rechnungen in Buchhaltungssysteme
                                    übernehmen, statt sie nur zu scannen.
                                </li>
                                <li>
                                    Du reduzierst das Risiko formaler Fehler in steuerlichen
                                    Prozessen.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Zusammenfassung */}
                <section className="pb-8">
                    <SectionHeader
                        eyebrow="Zusammenfassung"
                        title="TinyBill kümmert sich um die Details – du um deine Arbeit."
                        description="Local Storage, Validierungen, Steuerlogik, Logo-Branding, QR-Zahlungscodes, Sammelrechnungen und E-Rechnungen greifen in TinyBill ineinander. Das Ziel: Rechnungen, die sich leicht anfühlen und professionell wirken."
                        align="left"
                    />

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                        <a
                            href="https://app.tinybill.de"
                            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
                        >
                            TinyBill ausprobieren
                        </a>
                        <p className="text-xs text-slate-500">
                            Starte mit echten Projekten und sieh, wie sich die Funktionen in
                            deinem Alltag anfühlen.
                        </p>
                    </div>
                </section>
            </div>

            <SiteFooter />
        </PageShell>
    );
}