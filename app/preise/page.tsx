"use client";

import {
    PageShell,
    SectionHeader,
    FeatureCard,
    FaqItem,
} from "@/components/marketing";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export default function PreisePage() {
    return (
        <PageShell>
            <SiteHeader />

            <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
                {/* Hero / Launch-Phase */}
                <section className="border-b border-dashed border-slate-200 pb-12">
                    <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-end">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                Preise
                            </div>

                            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                Starte kostenlos – zahle erst, wenn TinyBill dir wirklich hilft.
                            </h1>

                            <p className="text-sm text-slate-600 sm:text-base">
                                In der aktuellen Launch-Phase kannst du TinyBill kostenlos für
                                echte Projekte nutzen. Du schreibst Rechnungen, testest
                                E-Rechnung, probierst Automation – ohne Abo, ohne Risiko.
                            </p>

                            <p className="text-sm text-slate-600">
                                Später werden voraussichtlich klare, einfache Bezahlpläne
                                hinzukommen. Bis dahin gilt: Fokus auf Produkt-Feedback und
                                Praxistauglichkeit, nicht auf Paywalls.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                <a
                                    href="https://app.tinybill.de"
                                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
                                >
                                    TinyBill kostenlos nutzen
                                </a>
                                <p className="text-xs text-slate-500">
                                    Keine Kreditkarte, keine Mindestlaufzeit. Du kannst jederzeit
                                    aufhören.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm shadow-sm">
                            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Aktuelle Phase
                            </div>
                            <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-slate-900">
                  0&nbsp;€
                </span>
                                <span className="text-sm text-slate-500">in der Launch-Phase</span>
                            </div>
                            <p className="mt-3 text-sm text-slate-600">
                                TinyBill soll sich im Alltag beweisen – deswegen steht zuerst
                                Produktqualität im Vordergrund, nicht ein Tarifdschungel.
                            </p>
                            <ul className="mt-4 space-y-1 text-xs text-slate-600">
                                <li>• Rechnungen mit PDF-Export</li>
                                <li>• E-Rechnungen im Hintergrund</li>
                                <li>• Plausibilitätschecks & Automation</li>
                                <li>• Local-Storage und Komfortfunktionen</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Warum zuerst kostenlos */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Launch-Phase"
                        title="Warum TinyBill aktuell kostenlos ist."
                        description="Bevor endgültige Preismodelle starten, soll TinyBill in echten Projekten zeigen, wie gut es funktioniert. Du profitierst von allen Kernfunktionen, während das Produkt weiter verfeinert wird."
                        align="left"
                    />

                    <div className="grid gap-6 md:grid-cols-3">
                        <FeatureCard
                            title="Echte Nutzung statt Demo"
                            description="Du testest TinyBill nicht in einer Demo, sondern mit echten Kund:innen, echten Rechnungen und echten Abläufen."
                        />
                        <FeatureCard
                            title="Feedback fließt ein"
                            description="Deine Rückmeldungen zu Funktionen, Flow und Automationen helfen, TinyBill in die richtige Richtung zu entwickeln."
                        />
                        <FeatureCard
                            title="Keine Hürden am Anfang"
                            description="Kein Abo-Abschluss, keine Zahlungsdaten. Du kannst einfach loslegen und später entscheiden, ob TinyBill bleiben darf."
                        />
                    </div>
                </section>

                {/* Geplante Preismodelle (ohne konkrete Beträge) */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Perspektive"
                        title="Wie künftige Preismodelle aussehen können."
                        description="Wenn TinyBill den Launch-Status verlässt, sind wenige, klar verständliche Pläne denkbar – orientiert daran, wie du arbeitest, nicht an Funktionschaos."
                        align="left"
                    />

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-5 text-sm">
                            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Möglicher Plan
                            </div>
                            <h3 className="mt-1 text-base font-semibold text-slate-900">
                                Solo / Freelancer
                            </h3>
                            <p className="mt-2 text-xs text-slate-600">
                                Für Einzelpersonen mit klaren, überschaubaren Projekten:
                                einfache Rechnungen, E-Rechnung, Automation im Alltag.
                            </p>
                            <ul className="mt-3 space-y-1 text-xs text-slate-600">
                                <li>• Kernfunktionen von TinyBill</li>
                                <li>• Fokus auf Einzelrechnungen</li>
                                <li>• Ideal für Design, Dev, Consulting</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-5 text-sm">
                            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Möglicher Plan
                            </div>
                            <h3 className="mt-1 text-base font-semibold text-slate-900">
                                Studio / Team
                            </h3>
                            <p className="mt-2 text-xs text-slate-600">
                                Für kleine Studios oder Agenturen mit mehreren Projekten und
                                wiederkehrenden Kund:innen.
                            </p>
                            <ul className="mt-3 space-y-1 text-xs text-slate-600">
                                <li>• Sammelrechnungen & Angebote</li>
                                <li>• Mehr Fokus auf Übersicht & Historie</li>
                                <li>• Automation für wiederkehrende Abläufe</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-5 text-sm">
                            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Möglicher Plan
                            </div>
                            <h3 className="mt-1 text-base font-semibold text-slate-900">
                                Business / Wachstum
                            </h3>
                            <p className="mt-2 text-xs text-slate-600">
                                Für Nutzer:innen, die TinyBill tief im Alltag verankern wollen:
                                mehr Automation, mehr Dokumenttypen, mehr Integrationen.
                            </p>
                            <ul className="mt-3 space-y-1 text-xs text-slate-600">
                                <li>• Erweitere Automation & E-Rechnung-Features</li>
                                <li>• Stärkerer Fokus auf Prozesse</li>
                                <li>• Perspektivisch Integrationen zu anderen Tools</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-xs text-slate-500">
                        Hinweis: Diese Modelle sind eine mögliche Perspektive und noch nicht
                        final. Aktuell gilt die kostenlose Launch-Phase ohne verbindliche
                        Tarifstruktur.
                    </p>
                </section>

                {/* Fairness & Transparenz */}
                <section className="space-y-10 border-b border-dashed border-slate-200 pb-12">
                    <SectionHeader
                        eyebrow="Grundsätze"
                        title="Preislogik: fair, klar, ohne Überraschungen."
                        description="Wenn TinyBill bezahlt wird, soll das Modell genauso klar sein wie die Oberfläche: wenige Stufen, verständliche Regeln, keine versteckten Haken."
                        align="left"
                    />

                    <div className="grid gap-6 md:grid-cols-3">
                        <FeatureCard
                            title="Keine dunklen Ecken"
                            description="Keine versteckten Gebühren, keine automatischen Verlängerungen ohne Transparenz – Preise sollen klar kommuniziert werden."
                        />
                        <FeatureCard
                            title="Wert statt Feature-Liste"
                            description="Preise orientieren sich daran, wie viel Arbeit TinyBill dir abnimmt – nicht daran, wie viele Buzzword-Funktionen in einer Tabelle stehen."
                        />
                        <FeatureCard
                            title="Mitwachsende Struktur"
                            description="Vom ersten Projekt bis zu wiederkehrenden Umsätzen – das Preismodell soll mit dir wachsen, ohne dich zu überfordern."
                        />
                    </div>
                </section>

                {/* FAQ Preise */}
                <section className="space-y-8 pb-8">
                    <SectionHeader
                        eyebrow="Fragen zu Preisen"
                        title="FAQ zu Kosten, Launch-Phase und späteren Plänen."
                        description="Die wichtigsten Fragen rund um Preise, Kostenfreiheit in der Launch-Phase und wie es danach weitergehen kann."
                        align="left"
                    />

                    <div className="space-y-4">
                        <FaqItem
                            question="Ist TinyBill aktuell wirklich komplett kostenlos?"
                            answer="Ja. In der Launch-Phase kannst du TinyBill ohne Abo und ohne Eingabe von Zahlungsdaten nutzen. Ziel ist es, echtes Feedback zu sammeln und TinyBill im Alltag zu testen."
                        />
                        <FaqItem
                            question="Wie lange dauert die kostenlose Launch-Phase?"
                            answer="Die Launch-Phase ist nicht auf einen festen Tag genau begrenzt, sondern endet, wenn TinyBill stabil genug ist, um klare Preismodelle zu tragen. Du wirst frühzeitig informiert, bevor sich etwas ändert."
                        />
                        <FaqItem
                            question="Muss ich später automatisch zahlen, wenn ein Preismodell kommt?"
                            answer="Nein. Bevor kostenpflichtige Pläne starten, wirst du informiert und kannst bewusst entscheiden, ob du einen Plan buchst oder TinyBill nicht weiter nutzt."
                        />
                        <FaqItem
                            question="Kann ich TinyBill auch nur für ein paar Rechnungen testen?"
                            answer="Ja. Du kannst TinyBill einfach für einzelne Projekte ausprobieren, Rechnungen schreiben und schauen, ob sich der Flow für dich richtig anfühlt – ohne Verpflichtung."
                        />
                    </div>
                </section>
            </div>

            <SiteFooter />
        </PageShell>
    );
}