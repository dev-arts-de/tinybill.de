"use client";

import {
    PageShell,
    SectionHeader,
    FaqItem,
} from "@/components/marketing";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export default function FaqPage() {
    return (
        <PageShell>
            <SiteHeader />

            <div className="mx-auto max-w-4xl px-4 py-12 space-y-16">
                {/* Hero / Intro */}
                <section className="border-b border-dashed border-slate-200 pb-10">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            FAQ
                        </div>

                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            Häufige Fragen zu TinyBill.
                        </h1>

                        <p className="text-sm text-slate-600 sm:text-base">
                            Hier findest du Antworten auf typische Fragen zu Funktionen,
                            E-Rechnung, Preisen und Datenverarbeitung. Wenn etwas offen
                            bleibt, kannst du TinyBill einfach selbst ausprobieren und
                            schauen, wie es sich im Alltag anfühlt.
                        </p>
                    </div>
                </section>

                {/* Allgemeines */}
                <section className="space-y-6 border-b border-dashed border-slate-200 pb-10">
                    <SectionHeader
                        eyebrow="Allgemeines"
                        title="Was TinyBill eigentlich macht."
                        description="Einordnen, wofür TinyBill gedacht ist, wer es nutzen kann und wie sich der Flow anfühlt."
                        align="left"
                    />

                    <div className="space-y-4">
                        <FaqItem
                            question="Was ist TinyBill?"
                            answer="TinyBill ist ein schlankes Tool zum Schreiben von Rechnungen und Angeboten – mit Fokus auf Klarheit, E-Rechnung im Hintergrund und hilfreiche Automatisierung. Du gibst die relevanten Daten ein, TinyBill kümmert sich um Struktur, Summen, Steuerlogik und Export."
                        />
                        <FaqItem
                            question="Für wen ist TinyBill gedacht?"
                            answer="TinyBill richtet sich vor allem an Freelancer, Selbstständige, kleine Studios, Agenturen, Creator und Coaches, die regelmäßig Rechnungen schreiben müssen, ohne sich tief in Buchhaltungssoftware einarbeiten zu wollen."
                        />
                        <FaqItem
                            question="Brauche ich Buchhaltungswissen, um TinyBill nutzen zu können?"
                            answer="Nein. TinyBill führt dich durch die wichtigsten Felder, prüft Plausibilitäten und unterstützt bei Steuerlogik und Pflichtangaben. Grundsätzlich schadet es nie, steuerliche Grundlagen zu kennen – TinyBill möchte dir aber die typische Formular-Angst nehmen."
                        />
                        <FaqItem
                            question="Kann ich TinyBill parallel zu meiner bisherigen Lösung nutzen?"
                            answer="Ja. Du kannst TinyBill erst einmal für ausgewählte Projekte oder Kund:innen verwenden, während du deine bisherige Lösung weiterlaufen lässt. So merkst du, ob sich der Flow für dich richtig anfühlt, bevor du umsteigst."
                        />
                    </div>
                </section>

                {/* Funktionen & Alltag */}
                <section className="space-y-6 border-b border-dashed border-slate-200 pb-10">
                    <SectionHeader
                        eyebrow="Funktionen"
                        title="Fragen zur täglichen Nutzung."
                        description="Wie TinyBill mit Local Storage, Validierungen, Steuerlogik, Logos und QR-Zahlung umgeht."
                        align="left"
                    />

                    <div className="space-y-4">
                        <FaqItem
                            question="Speichert TinyBill meine Entwürfe automatisch?"
                            answer="Ja. TinyBill nutzt Local Storage im Browser, um deine aktuellen Entwürfe und häufige Eingaben zu speichern. Wenn der Tab versehentlich geschlossen wird oder du kurz weg musst, bleibt dein Entwurf erhalten, bis du ihn bewusst zurücksetzt."
                        />
                        <FaqItem
                            question="Wie hilft TinyBill bei Adressen und IBANs?"
                            answer="TinyBill prüft, ob Adressen vollständig und plausibel sind, und unterstützt bei Bankverbindungen mit Formatierung und IBAN-Prüfung. Du erhältst Hinweise, wenn wichtige Angaben fehlen oder etwas nicht stimmig wirkt."
                        />
                        <FaqItem
                            question="Werden Steuern automatisch berechnet?"
                            answer="Ja. Du kannst pro Position einen Steuersatz wählen, TinyBill berechnet daraus Netto, Steuerbetrag und Brutto. Wenn du als Kleinunternehmer:in abrechnest, unterstützt TinyBill dich bei 0 %-Rechnungen und den passenden Hinweisen im Dokument."
                        />
                        <FaqItem
                            question="Kann ich ein eigenes Logo verwenden?"
                            answer="Ja. Du kannst ein Logo hinterlegen, das in all deinen Rechnungen verwendet wird. TinyBill achtet darauf, dass das Logo sinnvoll platziert wird und der eigentliche Inhalt gut lesbar bleibt."
                        />
                        <FaqItem
                            question="Unterstützt TinyBill QR-Zahlungscodes?"
                            answer="Für geeignete Bankverbindungen kann TinyBill einen QR-Zahlungscode vorbereiten, damit deine Kund:innen Rechnungen per Banking-App scannen und übernehmen können. Betrag, Verwendungszweck und Empfänger werden automatisiert befüllt."
                        />
                        <FaqItem
                            question="Welche Dokumente kann ich mit TinyBill erstellen?"
                            answer="TinyBill fokussiert sich auf saubere Einzelrechnungen, Sammelrechnungen für einen Kunden und Angebote, die sich später in Rechnungen überführen lassen. Die Idee: wenige, aber im Alltag relevante Dokumenttypen, statt einer unübersichtlichen Liste."
                        />
                    </div>
                </section>

                {/* E-Rechnung & Technik */}
                <section className="space-y-6 border-b border-dashed border-slate-200 pb-10">
                    <SectionHeader
                        eyebrow="E-Rechnung & Technik"
                        title="Wie TinyBill mit E-Rechnungen umgeht."
                        description="PDF für Menschen, strukturierte Daten im Hintergrund – und eine Vorbereitung darauf, dass E-Rechnungen wichtiger werden."
                        align="left"
                    />

                    <div className="space-y-4">
                        <FaqItem
                            question="Unterstützt TinyBill E-Rechnungen?"
                            answer="Ja. Neben klassischen PDFs kann TinyBill strukturierte E-Rechnungen erzeugen. Während du eine normal lesbare Rechnung siehst, baut TinyBill im Hintergrund eine maschinenlesbare Struktur auf, die sich für Buchhaltungssysteme und Portale eignet."
                        />
                        <FaqItem
                            question="Warum ist E-Rechnung überhaupt wichtig?"
                            answer="Viele Unternehmen und öffentliche Auftraggeber erwarten zunehmend strukturierte Rechnungsdaten. E-Rechnungen lassen sich automatisiert verarbeiten, was Rückfragen reduziert und Prozesse beschleunigt. TinyBill bereitet dich darauf vor, ohne dass du dich selbst mit technischen Formaten beschäftigen musst."
                        />
                        <FaqItem
                            question="Kann ich PDF und E-Rechnung gleichzeitig exportieren?"
                            answer="Ziel ist, dass du eine visuell klare PDF-Rechnung erhältst und parallel eine E-Rechnungsdatei exportieren kannst, damit sowohl deine Kund:innen als auch deren Buchhaltung gut damit arbeiten können."
                        />
                        <FaqItem
                            question="Ist TinyBill eine komplette Buchhaltungssoftware?"
                            answer="Nein. TinyBill konzentriert sich bewusst auf Rechnungen, Angebote und die dazugehörige Logik. Es will dir den Schritt zwischen erbrachter Leistung und sauberer Rechnung erleichtern – nicht eine vollumfängliche Buchhaltung ersetzen."
                        />
                    </div>
                </section>

                {/* Preise & Launch-Phase */}
                <section className="space-y-6 border-b border-dashed border-slate-200 pb-10">
                    <SectionHeader
                        eyebrow="Preise"
                        title="Fragen zu Kosten und Launch-Phase."
                        description="Wie die aktuelle kostenlose Nutzung funktioniert und was perspektivisch geplant ist."
                        align="left"
                    />

                    <div className="space-y-4">
                        <FaqItem
                            question="Kostet TinyBill derzeit etwas?"
                            answer="In der aktuellen Launch-Phase kannst du TinyBill kostenlos nutzen – ohne Abo und ohne Eingabe von Zahlungsdaten. Ziel ist, echtes Feedback zu sammeln und das Produkt unter realen Bedingungen zu testen."
                        />
                        <FaqItem
                            question="Werde ich automatisch zahlungspflichtig, wenn später Tarife kommen?"
                            answer="Nein. Wenn TinyBill kostenpflichtige Pläne einführt, wirst du vorher informiert und kannst bewusst entscheiden, ob du einen Plan buchen möchtest. Es gibt keine stillen Umstellungen von kostenlos auf kostenpflichtig."
                        />
                        <FaqItem
                            question="Kann ich TinyBill auch nur für ein einzelnes Projekt testen?"
                            answer="Ja. Du kannst TinyBill problemlos für wenige Rechnungen oder ein konkretes Projekt verwenden und schauen, ob der Flow für dich passt. Wenn nicht, musst du nichts kündigen."
                        />
                        <FaqItem
                            question="Wo finde ich Details zu künftigen Preisen?"
                            answer="Auf der Seite „Preise“ findest du, wie die aktuelle Launch-Phase funktioniert und welche Modelle perspektivisch denkbar sind. Konkrete Beträge werden erst dann kommuniziert, wenn TinyBill bereit für stabile Pläne ist."
                        />
                    </div>
                </section>

                {/* Daten, Hosting & Datenschutz (Kurzfassung) */}
                <section className="space-y-6 pb-8">
                    <SectionHeader
                        eyebrow="Daten & Hosting"
                        title="Fragen zu Speicherung, Hosting und Datenschutz."
                        description="Eine kurze Einordnung dazu, wo TinyBill läuft und wie mit Daten umgegangen wird. Die rechtlich verbindlichen Details findest du in der Datenschutzerklärung."
                        align="left"
                    />

                    <div className="space-y-4">
                        <FaqItem
                            question="Wo wird TinyBill gehostet?"
                            answer="Die App selbst wird auf Infrastruktur von Hetzner in Europa gehostet, die Landingpage über Vercel ausgeliefert. Ziel ist, deine Daten nicht unnötig quer über den Globus zu verteilen."
                        />
                        <FaqItem
                            question="Welche Daten speichert TinyBill lokal im Browser?"
                            answer="TinyBill nutzt Local Storage, um Entwürfe, häufige Eingaben und Komfortfunktionen bereitzustellen. Diese Daten liegen zunächst in deinem Browser und helfen, deinen Arbeitsfluss zu erleichtern."
                        />
                        <FaqItem
                            question="Verwendet TinyBill Cookies oder Analyse-Tools?"
                            answer="Ja, es kommen Cookies, Local Storage, Google Analytics und Google Fonts sowie übliche CDN-Dienste zum Einsatz. Genaue Informationen zu Umfang, Zweck und Rechtsgrundlagen findest du in der Datenschutzerklärung."
                        />
                        <FaqItem
                            question="Wo finde ich die vollständige Datenschutzerklärung?"
                            answer="Die vollständigen Informationen zu Datenverarbeitung, Dienstleistern und deinen Rechten findest du auf der Seite „Datenschutz“. Die dortigen Angaben sind rechtlich maßgeblich."
                        />
                    </div>
                </section>
            </div>

            <SiteFooter />
        </PageShell>
    );
}