"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { useEffect, useState, useRef } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  AutoCheckRow,
  FeatureCard,
  GrowthCard,
  StepCard,
  FaqItem,
  SectionHeader,
  PageShell,
} from "@/components/marketing";

type NavStyle = "light" | "muted";

const SECTION_ORDER = [
  "hero",
  "product",
  "features",
  "einvoice",
  "automation",
  "growth",
  "flow",
  "personas",
  "comparison",
  "details",
  "security",
  "vision",
  "future",
  "pricing",
  "faq",
] as const;

type DemoSlide = {
  title: string;
  text: string;
  image: string;
};

const DEMO_SLIDES: DemoSlide[] = [
  {
    title: "Projekt-Rechnung",
    text: "Einmalige Leistung für ein abgeschlossenes Projekt – ideal für Design, Development, Consulting.",
    image: "/screens/demo-project.png",
  },
  {
    title: "Wiederkehrende Leistung",
    text: "Monatliche Pauschale oder Retainer – für laufende Betreuung und Services.",
    image: "/screens/demo-recurring.png",
  },
  {
    title: "Kleine Einzelposition",
    text: "Schnelle Rechnung für eine einzelne Leistung oder einen kleinen Auftrag.",
    image: "/screens/demo-single.png",
  },
];

export default function HomePage() {
  const [activeSection, setActiveSection] =
      useState<(typeof SECTION_ORDER)[number]>("hero");
  const [navStyle, setNavStyle] = useState<NavStyle>("light");
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    const sectionElements = SECTION_ORDER.map((id) =>
        document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
              .filter((e) => e.isIntersecting)
              .sort(
                  (a, b) =>
                      (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
              );

          if (visible.length > 0) {
            const id = visible[0].target.id as (typeof SECTION_ORDER)[number];
            setActiveSection(id);
          }
        },
        {
          threshold: [0.25, 0.4, 0.6],
        },
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mutedSections: (typeof SECTION_ORDER)[number][] = [
      "product",
      "automation",
      "comparison",
      "details",
      "security",
      "pricing",
    ];
    if (mutedSections.includes(activeSection)) {
      setNavStyle("muted");
    } else {
      setNavStyle("light");
    }
  }, [activeSection]);

  const isHero = activeSection === "hero";

  const navBgClass =
      navStyle === "light"
          ? isHero
              ? "bg-white/5 backdrop-blur-xl"
              : "bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
          : isHero
              ? "bg-slate-50/10 backdrop-blur-xl"
              : "bg-slate-50/80 backdrop-blur-xl shadow-[0_8px_24px_rgba(15,23,42,0.06)]";

  const linkBase = "text-sm transition-colors hover:text-slate-900";
  const linkMuted = "text-slate-500";

  const handlePrev = () => {
    setActiveDemo((prev) =>
        prev === 0 ? DEMO_SLIDES.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveDemo((prev) =>
        prev === DEMO_SLIDES.length - 1 ? 0 : prev + 1,
    );
  };

  const activeSlide = DEMO_SLIDES[activeDemo];

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current === null || touchEndX.current === null) return;

    const delta = touchStartX.current - touchEndX.current;
    const threshold = 40; // horizontal swipe distance in px

    if (Math.abs(delta) < threshold) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }

    if (delta > 0) {
      handleNext(); // swipe left → nächste Demo
    } else {
      handlePrev(); // swipe right → vorherige Demo
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
      <PageShell>
        {/* Sticky Navbar */}
        <SiteHeader />

        {/* Hero */}
        <section
            id="hero"
            className="border-b border-dashed border-slate-200 bg-white"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-10 lg:flex-row lg:items-center lg:justify-between">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Rechnungen ohne Kopfzerbrechen.
                </div>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  TinyBill schreibt deine Rechnungen fast von selbst.
                </h1>

                <p className="max-w-xl text-base text-slate-600 sm:text-lg">
                  Gib nur ein, was wirklich zählt – TinyBill kümmert sich um
                  Pflichtangaben, Summen, E-Rechnung und saubere PDFs.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                      href="https://app.tinybill.de"
                      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
                  >
                    Jetzt Rechnung erstellen
                  </a>
                  <button
                      type="button"
                      onClick={() => setDemoOpen(true)}
                      className="inline-flex items-center justify-center rounded-full border border-dashed border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    Demo-Rechnungen ansehen
                  </button>
                </div>

                <p className="text-xs text-slate-500">
                  Keine Kreditkarte nötig. In wenigen Minuten zur ersten
                  Rechnung.
                </p>
              </div>
            </FadeIn>

            {/* Hero – Vorschau */}
            <FadeIn delay={0.05}>
              <div className="relative mt-4 w-full max-w-md lg:mt-0">
                <div className="absolute inset-0 -translate-y-4 translate-x-4 rounded-3xl bg-blue-100 opacity-70 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-dashed border-slate-200 bg-white shadow-xl">
                  <div className="flex items-center justify-between border-b border-dashed border-slate-100 px-4 py-3 text-xs text-slate-500">
                  <span className="font-medium text-slate-700">
                    Rechnung · #2025-017
                  </span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    Fehlerfrei geprüft
                  </span>
                  </div>

                  <div className="border-b border-dashed border-slate-100 bg-slate-50 px-4 py-3 text-[11px] text-slate-600">
                    <div className="flex justify-between gap-6">
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase text-slate-400">
                          Von
                        </div>
                        <div className="font-medium text-slate-800">
                          Studio Nord
                        </div>
                        <div>Hamburg</div>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="text-[10px] uppercase text-slate-400">
                          An
                        </div>
                        <div className="font-medium text-slate-800">
                          Nordlicht Media GmbH
                        </div>
                        <div>Berlin</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-4 text-xs text-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase text-slate-400">
                          Datum
                        </div>
                        <div className="rounded-md border border-dashed border-slate-200 bg-slate-50 px-2 py-1">
                          24.11.2025
                        </div>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="text-[10px] uppercase text-slate-400">
                          Zahlungsziel
                        </div>
                        <div className="rounded-md border border-dashed border-slate-200 bg-slate-50 px-2 py-1">
                          14 Tage netto
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-3">
                      <div className="flex items-center justify-between text-[10px] font-medium text-slate-500">
                        <span>Leistung</span>
                        <span className="flex gap-6">
                        <span>Menge</span>
                        <span>Betrag</span>
                      </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[11px]">
                        <div className="max-w-[60%] text-slate-700">
                          Konzeption, Design & Umsetzung Microsite für
                          Produktlaunch.
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-slate-500">1,0</span>
                          <span className="font-medium text-slate-800">
                          4.200,00 €
                        </span>
                        </div>
                      </div>
                      <div className="mt-2 rounded-full bg-emerald-50 px-3 py-1 text-[10px] text-emerald-700">
                        Positionstext automatisch aus vergangenen Rechnungen
                        vorgeschlagen.
                      </div>
                    </div>

                    <div className="space-y-1 text-[11px]">
                      <div className="flex justify-end gap-4 text-slate-600">
                        <span>Zwischensumme</span>
                        <span className="w-24 text-right">4.200,00 €</span>
                      </div>
                      <div className="flex justify-end gap-4 text-slate-600">
                        <span>19 % MwSt</span>
                        <span className="w-24 text-right">798,00 €</span>
                      </div>
                      <div className="flex justify-end gap-4 border-t border-dashed border-slate-200 pt-2 font-medium text-slate-900">
                        <span>Gesamtbetrag</span>
                        <span className="w-24 text-right">4.998,00 €</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-[11px]">
                      <div className="text-slate-500">
                        IBAN, QR-Zahlung & E-Rechnung vorbereitet.
                      </div>
                      <div className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium text-white">
                        Versandbereit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Produkt-Sektion mit echtem Screenshot */}
        <section
            id="product"
            className="border-b border-dashed border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="Produkt"
                  title="So sieht TinyBill in echt aus."
                  description="Nicht nur Konzept – hier siehst du echte TinyBill-Rechnungen. Transparent, sauber und bereit für deine Kunden."
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center">
                <div className="relative order-2 md:order-1">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-blue-100 opacity-70 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-dashed border-slate-200 bg-slate-50 shadow-xl">
                    <div className="flex items-center gap-1 border-b border-dashed border-slate-200 bg-slate-100 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="ml-3 text-[11px] text-slate-500">
                      app.tinybill.de · Rechnung erstellen
                    </span>
                    </div>
                    <div className="relative aspect-[16/9] bg-slate-200">
                      <Image
                          src="/screens/tinybill-app-example.png"
                          alt="TinyBill Rechnungsoberfläche"
                          fill
                          className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="order-1 space-y-3 md:order-2">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    Klar aufgebaut – vom ersten Feld bis zum Versand.
                  </h3>
                  <p className="text-sm text-slate-600">
                    In der Mitte die wichtigen Inhalte, links und rechts nur
                    das, was du wirklich brauchst. TinyBill zeigt dir live, ob
                    alle Pflichtangaben korrekt sind und wie die finale
                    Rechnung aussehen wird.
                  </p>
                  <p className="text-sm text-slate-600">
                    Du kannst später mehrere Screenshot-Varianten einbinden:
                    klassische Projektrechnung, wiederkehrende Leistung,
                    Pauschalen, Tagessätze – alles nachvollziehbar.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section
            id="features"
            className="border-b border-dashed border-slate-200 bg-slate-50 py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="Funktionen"
                  title="Alles, was du für professionelle Rechnungen brauchst."
                  description="TinyBill bündelt moderne Rechnungsstellung in einem klaren Flow: von Stammdaten über Beträge bis zum Export."
              />
            </FadeIn>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FadeIn delay={0.05}>
                <FeatureCard
                    title="E-Rechnung & PDF"
                    description="Erzeuge mit einem Klick rechtssichere PDFs und E-Rechnungen – optimiert für Kunden und Buchhaltung."
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <FeatureCard
                    title="IBAN- & Adress-Checks"
                    description="Eingaben werden live geprüft. TinyBill schützt dich vor Zahlendrehern und fehlenden Pflichtangaben."
                />
              </FadeIn>
              <FadeIn delay={0.15}>
                <FeatureCard
                    title="Ghostwriting für Texte"
                    description="Lass dir Positionen, Beschreibungen und Hinweise vorschlagen – orientiert an deiner bisherigen Nutzung."
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <FeatureCard
                    title="Wiederkehrende Kunden"
                    description="TinyBill merkt sich Kunden, Bankdaten und typische Positionen. Folge-Rechnungen dauern nur noch Sekunden."
                />
              </FadeIn>
              <FadeIn delay={0.25}>
                <FeatureCard
                    title="QR-Zahlung & Zahlungsinfos"
                    description="Zahlungsdetails werden sauber vorbereitet – inklusive QR-Zahlung, wo unterstützt."
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <FeatureCard
                    title="Plausibilitäts-Checks"
                    description="Wenn etwas fehlt oder nicht passt, meldet sich TinyBill bevor die Rechnung rausgeht."
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* E-Rechnung / Strukturierte Formate */}
        <section
            id="einvoice"
            className="border-b border-dashed border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="E-Rechnungen"
                  title="TinyBill sorgt dafür, dass deine Rechnungen überall ankommen."
                  description="Nicht nur schöne PDFs: TinyBill unterstützt strukturierte E-Rechnungen, die in Buchhaltungssystemen und Portalen verstanden werden."
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm">
                  <h4 className="text-sm font-semibold text-slate-900">
                    XRechnung für Deutschland
                  </h4>
                  <p className="mt-2 text-xs text-slate-600">
                    TinyBill erzeugt E-Rechnungen nach aktuellem XRechnungs-Standard –
                    mit den Angaben, die öffentliche Auftraggeber und viele Unternehmen erwarten.
                  </p>
                  <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
                    <li>• Leitweg-ID und Referenzen abbildbar</li>
                    <li>• Saubere Steuer- und Betragsstruktur</li>
                    <li>• Perfekt für öffentliche Auftraggeber</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Hybrid: PDF + strukturierte Daten
                  </h4>
                  <p className="mt-2 text-xs text-slate-600">
                    Deine Kunden sehen ein sauberes PDF, die Buchhaltung bekommt strukturierte Daten.
                    Ideal für Steuerkanzleien und Tools, die mehr als nur ein PDF wollen.
                  </p>
                  <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
                    <li>• Lesbares Dokument für Menschen</li>
                    <li>• Maschinell lesbare Inhalte im Hintergrund</li>
                    <li>• Weniger Rückfragen in der Buchhaltung</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Vorbereitung auf Peppol & Portale
                  </h4>
                  <p className="mt-2 text-xs text-slate-600">
                    TinyBill denkt Richtung Peppol-Anbindung und gängige E-Rechnungsportale.
                    Ziel: Du exportierst einmal, der Rest fügt sich in den Prozess deines Kunden ein.
                  </p>
                  <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
                    <li>• Kompatibilität mit gängigen Standards im Fokus</li>
                    <li>• Weniger manuelle Uploads in Portale</li>
                    <li>• E-Rechnung als normaler Teil deines Flows</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Automation integriert */}
        <section
            id="automation"
            className="border-b border-dashed border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
              <FadeIn>
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Automation integriert
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    Rechnet dir Arbeit ab.
                  </h3>
                  <p className="text-sm text-slate-600">
                    TinyBill denkt mit, während du tippst: Inhalte werden
                    vervollständigt, geprüft und mit deinen bisherigen
                    Rechnungen abgeglichen. Du musst dich nicht um jede
                    Formalität kümmern.
                  </p>
                  <p className="text-sm text-slate-600">
                    Die Automatisierung bleibt dabei unaufdringlich – du
                    behältst immer die Kontrolle, TinyBill kümmert sich um die
                    Details.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    <li>• Auto-Vervollständigung für Kunden, Texte und Bankdaten</li>
                    <li>• Live-Checks auf Pflichtangaben und Beträge</li>
                    <li>• Vorschläge basierend auf deinen letzten Rechnungen</li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.05}>
                <div className="space-y-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    Automatische Checks
                  </span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    4 Hinweise behoben
                  </span>
                  </div>
                  <div className="space-y-2">
                    <AutoCheckRow text="IBAN gültig" status="ok" />
                    <AutoCheckRow text="Steuer-ID vorhanden" status="ok" />
                    <AutoCheckRow text="Rechnungsnummer eindeutig" status="ok" />
                    <AutoCheckRow text="Zahlungsziel gesetzt" status="ok" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Wächst mit dir */}
        <section
            id="growth"
            className="border-b border-dashed border-slate-200 bg-slate-50 py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center">
              <FadeIn>
                <div className="order-2 space-y-4 md:order-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Wächst mit dir
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    Bleibt leicht, egal wie groß du wirst.
                  </h3>
                  <p className="text-sm text-slate-600">
                    Egal ob du als Einzelperson startest oder später ein kleines
                    Team aufbaust – TinyBill skaliert mit, ohne schwerfällig
                    zu werden.
                  </p>
                  <p className="text-sm text-slate-600">
                    Du musst nicht das Tool wechseln, nur weil du erfolgreicher
                    wirst. TinyBill begleitet dich von den ersten Rechnungen
                    bis zu stabilen wiederkehrenden Umsätzen.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.05}>
                <div className="order-1 space-y-4 md:order-2">
                  <div className="grid gap-4 md:grid-cols-3">
                    <GrowthCard
                        label="Freelancer"
                        title="Erste Kunden"
                        text="Schnell loslegen, einfach Rechnungen schreiben und bezahlt werden."
                    />
                    <GrowthCard
                        label="Studios & Teams"
                        title="Mehr Projekte"
                        text="Mehr Kunden, mehr Rechnungen – TinyBill bleibt klar und schnell."
                    />
                    <GrowthCard
                        label="Unternehmen"
                        title="Wiederkehrende Abläufe"
                        text="Wiederkehrende Leistungen, feste Kunden, planbare Umsätze."
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Flow */}
        <section
            id="flow"
            className="border-b border-dashed border-slate-200 bg-white py-20"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row">
            <FadeIn>
              <div className="md:sticky md:top-24 md:h-fit md:w-1/3">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Flow
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Einmal verstanden, nie wieder nachdenken.
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Während du nach unten scrollst, siehst du den Weg einer
                  Rechnung – von der Idee bis zum Geld auf deinem Konto.
                </p>
              </div>
            </FadeIn>

            <div className="flex-1 space-y-8">
              <FadeIn delay={0.05}>
                <FlowStep
                    title="1 · Auftrag ist fertig"
                    text="Du schließt ein Projekt ab oder hast eine wiederkehrende Leistung erbracht. TinyBill erinnert sich an vergangene Rechnungen und macht dir Vorschläge."
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <FlowStep
                    title="2 · Daten kurz prüfen"
                    text="Kunde wählen, Position anpassen, Zahlungsziel setzen – der Rest ist vorbereitet. Pflichtfelder werden live geprüft."
                />
              </FadeIn>
              <FadeIn delay={0.15}>
                <FlowStep
                    title="3 · Smart Checks laufen im Hintergrund"
                    text="TinyBill prüft Nummernkreise, Steuerlogik und Pflichtfelder und markiert alles, was noch fehlt – bevor du exportierst."
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <FlowStep
                    title="4 · Export & Versand"
                    text="Ein Klick für PDF, ein Klick für E-Rechnung. Speichern, verschicken oder direkt an die Buchhaltung weitergeben."
                />
              </FadeIn>
              <FadeIn delay={0.25}>
                <FlowStep
                    title="5 · Kunde erhält eine klare Rechnung"
                    text="Deine Kunden sehen eine saubere, verständliche Rechnung ohne kryptische Posten – das reduziert Rückfragen."
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <FlowStep
                    title="6 · Zahlungseingang markieren"
                    text="Sobald die Zahlung eingeht, kannst du sie in deiner Übersicht abgehakt halten – so verlierst du nichts aus dem Blick."
                />
              </FadeIn>
              <FadeIn delay={0.35}>
                <FlowStep
                    title="7 · Überblick behalten"
                    text="Nach und nach entsteht eine klare Historie über deine Projekte, Kunden und Umsätze – ohne, dass du extra Reports bauen musst."
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Personas */}
        <section
            id="personas"
            className="border-b border-dashed border-slate-200 bg-slate-50 py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="Für wen?"
                  title="TinyBill passt zu dir, wenn du Rechnungen nicht lieben musst – nur bezahlt werden willst."
                  description="Ein Tool, das sich leicht anfühlt und trotzdem professionell arbeitet."
              />
            </FadeIn>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.05}>
                <PersonaCard
                    label="Freelancer"
                    title="Design, Dev, Consulting"
                    text="Du willst deine Zeit in deine Arbeit stecken, nicht in Rechnungsdokumente."
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <PersonaCard
                    label="Kleine Studios"
                    title="Agenturen & Kreativteams"
                    text="Mehrere Projekte parallel, klare Rechnungen, zufriedene Kunden."
                />
              </FadeIn>
              <FadeIn delay={0.15}>
                <PersonaCard
                    label="Solo-Business"
                    title="Creator & Coaches"
                    text="Du brauchst ein System, das einfach funktioniert und gut aussieht."
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Vergleich */}
        <section
            id="comparison"
            className="border-b border-dashed border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="Vergleich"
                  title="Warum nicht einfach Word, Excel oder eine 08/15-Vorlage?"
                  description="TinyBill ist mehr als ein schönes Formular – es denkt für dich mit."
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Word/Excel & statische Vorlagen
                  </h4>
                  <ul className="mt-2 space-y-1 text-xs text-slate-600">
                    <li>– Du musst alles selbst wissen und prüfen</li>
                    <li>– Fehlerhafte Nummernkreise & kopierte Alt-Daten</li>
                    <li>– Keine Hinweise bei fehlenden Pflichtfeldern</li>
                    <li>– Unübersichtliche Versionen auf dem Desktop</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4 text-sm shadow-sm">
                  <h4 className="text-sm font-semibold text-slate-900">
                    TinyBill
                  </h4>
                  <ul className="mt-2 space-y-1 text-xs text-slate-600">
                    <li>+ Geführter Prozess, der dich nichts vergessen lässt</li>
                    <li>+ Nummernkreise, Kunden & Positionen automatisch im Griff</li>
                    <li>+ Live-Checks für Pflichtangaben und Beträge</li>
                    <li>+ Einheitliches Layout für alle Rechnungen</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Details */}
        <section
            id="details"
            className="border-b border-dashed border-slate-200 bg-slate-50 py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="Details"
                  title="Kleine Dinge, die im Alltag einen großen Unterschied machen."
                  description="Viele Features merkst du erst, wenn du sie nicht mehr missen willst."
              />
            </FadeIn>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.05}>
                <FeatureCard
                    title="Intelligente Defaults"
                    description="Standard-Steuersätze, Zahlungsziele und Texte sind sinnvoll vorbelegt und passen sich deiner Nutzung an."
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <FeatureCard
                    title="Saubere Nummernkreise"
                    description="Rechnungsnummern bleiben konsistent und nachvollziehbar – auch wenn du mehrere Projekte parallel hast."
                />
              </FadeIn>
              <FadeIn delay={0.15}>
                <FeatureCard
                    title="Hinweise statt Fehlermeldungen"
                    description="TinyBill gibt dir hilfreiche Hinweise, statt dich mit technischen Meldungen zu erschlagen."
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Security / Hosting */}
        <section
            id="security"
            className="border-b border-dashed border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="Sicherheit"
                  title="Deine Rechnungsdaten sind vertraulich."
                  description="TinyBill ist als Tool gedacht, dem du sensible Kundendaten anvertrauen kannst."
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Europäische Infrastruktur
                  </h4>
                  <p className="mt-2">
                    Hosting auf europäischer Infrastruktur (z.&nbsp;B.
                    Deutschland/EU), damit deine Daten nicht quer über den
                    Globus verteilt sind.
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Verschlüsselte Übertragung
                  </h4>
                  <p className="mt-2">
                    Sämtliche Kommunikation erfolgt über TLS-verschlüsselte
                    Verbindungen, damit Rechnungs- und Kundendaten geschützt
                    bleiben.
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Fokus auf Datenschutz
                  </h4>
                  <p className="mt-2">
                    TinyBill sammelt nur die Daten, die wirklich nötig sind, um
                    Rechnungen zu erstellen – nicht mehr und nicht weniger.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Vision */}
        <section
            id="vision"
            className="border-b border-dashed border-slate-200 bg-slate-50 py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="Vision"
                  title="Rechnungen sollen sich wie ein Nebengeräusch anfühlen."
                  description="TinyBill soll dir das Gefühl geben, dass deine Rechnungen einfach passieren – ohne, dass du dafür einen Nachmittag verlierst."
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-6 text-sm text-slate-600">
                <p>
                  Langfristig kann TinyBill mehr als nur Rechnungen erzeugen:
                  von smarten Erinnerungen über Zahlungseingänge bis zu
                  Auswertungen, die dir zeigen, welche Kunden und Leistungen
                  sich besonders lohnen.
                </p>
                <p className="mt-3">
                  Der Fokus bleibt dabei immer gleich: eine Oberfläche, die
                  klar wirkt, sich leicht anfühlt und dich trotzdem wie ein
                  professionelles Unternehmen auftreten lässt.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Zukunft / Roadmap */}
        <section
            id="future"
            className="border-b border-dashed border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <SectionHeader
                  eyebrow="Zukunft"
                  title="Wohin TinyBill sich entwickelt."
                  description="TinyBill soll dein zentraler Ort für Rechnungen werden – vom Schreiben bis zum Archiv, von E-Rechnung bis Abo-Modell."
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-sm">
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Rechnungsarchiv & Empfang
                  </h4>
                  <p className="mt-2 text-xs text-slate-600">
                    Eingehende und ausgehende Rechnungen an einem Ort – inklusive
                    strukturierter E-Rechnungen. So behältst du den Überblick, ohne
                    Ordner zu pflegen.
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Wiederkehrende Rechnungen & Abos
                  </h4>
                  <p className="mt-2 text-xs text-slate-600">
                    Monatliche Pauschalen, Retainer oder Wartungsverträge laufen
                    automatisch weiter – TinyBill bereitet die Rechnungen vor, du
                    gibst nur noch frei.
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    KI-Unterstützung im Alltag
                  </h4>
                  <p className="mt-2 text-xs text-slate-600">
                    Vorschläge für Positionstexte, Beträge, Zahlungsziele und
                    Hinweise auf Unstimmigkeiten – orientiert an deinen Kunden und
                    Projekten.
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    E-Rechnung als Hub
                  </h4>
                  <p className="mt-2 text-xs text-slate-600">
                    TinyBill als Drehscheibe für E-Rechnungen: Versand an
                    Portale, Empfang über eine zentrale Adresse, Übergabe an
                    Buchhaltung und Steuerberatung.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pricing */}
        <section
            id="pricing"
            className="border-b border-dashed border-slate-200 bg-slate-50 py-16"
        >
          <div className="mx-auto max-w-4xl px-4 text-center">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Preise
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Starte kostenlos – zahle erst, wenn TinyBill dir wirklich hilft.
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Perfekt, um TinyBill mit echten Projekten zu testen, bevor du
                dich für ein dauerhaftes Modell entscheidest.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-8 inline-flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-200 bg-white px-8 py-8 sm:flex-row sm:items-end sm:gap-8">
                <div className="text-left">
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Launch-Phase
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold">Kostenlos</span>
                    <span className="text-sm text-slate-500">zum Start</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Erstelle deine ersten Rechnungen und prüfe, wie TinyBill
                    sich in deinen Alltag einfügt.
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-slate-600">
                    <li>• Alle Kernfunktionen enthalten</li>
                    <li>• E-Rechnung & PDF-Export</li>
                    <li>• Ideal für Freelancer & Solo-Business</li>
                  </ul>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <a
                      href="https://app.tinybill.de"
                      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
                  >
                    Kostenlos starten
                  </a>
                  <span className="text-[11px] text-slate-500">
                  Kein Risiko. Du kannst jederzeit aussteigen.
                </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4">
            <FadeIn>
              <div className="space-y-3 text-center">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  FAQ
                </h2>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Häufige Fragen zu TinyBill.
                </h3>
              </div>
            </FadeIn>

            <div className="mt-8 space-y-4">
              <FadeIn delay={0.05}>
                <FaqItem
                    question="Wie funktionieren die Demo-Rechnungen?"
                    answer="Du kannst dir Beispielrechnungen direkt hier auf der Seite ansehen. Später kannst du dieselben Strukturen in der App nachbauen – TinyBill führt dich Schritt für Schritt durch alle Felder."
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <FaqItem
                    question="Für wen ist TinyBill gedacht?"
                    answer="TinyBill ist für alle, die Rechnungen schreiben müssen, sie aber nicht lieben: Freelancer, Selbstständige, Agenturen, Creator und kleine Unternehmen."
                />
              </FadeIn>
              <FadeIn delay={0.15}>
                <FaqItem
                    question="Brauche ich Buchhaltungswissen?"
                    answer="Nein. TinyBill zeigt dir, welche Felder wichtig sind, prüft Beträge und gibt dir Hinweise, wenn etwas fehlt."
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <FaqItem
                    question="Unterstützt TinyBill E-Rechnungen?"
                    answer="Ja. Du kannst klassische PDFs und E-Rechnungen erzeugen, damit deine Kunden, Steuerberatung und Buchhaltungssysteme sauber mit deinen Daten arbeiten können."
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />

        {/* Demo-Rechnungen Dialog – hell, mit dashed-Linien */}
        {demoOpen && (
            <div
                className="fixed inset-0 z-40 flex items-stretch justify-center bg-slate-900/40 px-2 py-4 sm:items-center sm:px-4"
                onClick={() => setDemoOpen(false)}
            >
              <div
                  className="relative flex max-h-[100vh] w-full max-w-lg flex-col overflow-y-auto rounded-3xl border border-dashed border-slate-200 bg-white text-slate-900 shadow-xl sm:max-w-5xl"
                  onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex flex-col gap-3 border-b border-dashed border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                      Demo-Rechnungen
                    </p>
                    <p className="text-xs text-slate-600 sm:text-sm">
                      Blättere durch verschiedene Beispielszenarien – von Projekt bis Retainer.
                    </p>
                  </div>
                  <button
                      type="button"
                      onClick={() => setDemoOpen(false)}
                      className="self-start rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 hover:bg-slate-50 sm:self-auto"
                  >
                    Schließen
                  </button>
                </div>

                {/* Inhalt */}
                <div className="grid gap-5 border-t border-dashed border-slate-200 bg-slate-50 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                  {/* Carousel – Preview */}
                  <div className="flex flex-col items-center md:items-stretch">
                    <div
                        className="relative w-full max-w-xs rounded-2xl border border-dashed border-slate-200 bg-white p-3 shadow-md sm:max-w-[380px]"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                      <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <Image
                            src={activeSlide.image}
                            alt={activeSlide.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, 380px"
                        />
                      </div>

                      {/* Prev / Next (Desktop/Tablets – Mobile swiped über Touch) */}
                      <button
                          type="button"
                          onClick={handlePrev}
                          className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-300 bg-white/90 px-2 py-1 text-xs text-slate-700 hover:bg-slate-50 sm:inline-flex"
                      >
                        ‹
                      </button>
                      <button
                          type="button"
                          onClick={handleNext}
                          className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-300 bg-white/90 px-2 py-1 text-xs text-slate-700 hover:bg-slate-50 sm:inline-flex"
                      >
                        ›
                      </button>
                    </div>

                    {/* Dots */}
                    <div className="mt-3 flex items-center justify-center gap-2">
                      {DEMO_SLIDES.map((slide, index) => (
                          <button
                              key={slide.title}
                              type="button"
                              onClick={() => setActiveDemo(index)}
                              className={`h-2.5 w-2.5 rounded-full transition ${
                                  index === activeDemo
                                      ? "bg-blue-500"
                                      : "bg-slate-300 hover:bg-slate-400"
                              }`}
                              aria-label={slide.title}
                          />
                      ))}
                    </div>
                  </div>

                  {/* Text / Beschreibung */}
                  <div className="mt-2 flex flex-col justify-between md:mt-0">
                    <div className="space-y-3">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-blue-700">
                        {activeSlide.title}
                      </p>
                      <p className="text-xs text-slate-700">{activeSlide.text}</p>

                      <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
                        {activeDemo === 0 && (
                            <>
                              <li>• Mehrere Positionen, klares Projekt-Setup</li>
                              <li>• Ideal für Design-, Dev- oder Beratungs-Projekte</li>
                              <li>• Saubere Summen- und Steuerdarstellung</li>
                            </>
                        )}
                        {activeDemo === 1 && (
                            <>
                              <li>• Monatlicher Retainer für laufende Betreuung</li>
                              <li>• Wiederkehrende Beträge mit eindeutigem Zeitraum</li>
                              <li>• Perfekt für Agenturen und Social-Media-Services</li>
                            </>
                        )}
                        {activeDemo === 2 && (
                            <>
                              <li>• Kleine, klare Rechnung für Einzelleistung</li>
                              <li>• Ideal für Coaching, Workshops oder Sparring</li>
                              <li>• Konzentriert sich auf eine Position</li>
                            </>
                        )}
                      </ul>
                    </div>

                    <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-white p-3 text-[11px] text-slate-600">
                      <p>
                        Diese Beispiele sind echte TinyBill-Rechnungen. In der App kannst du sie mit
                        wenigen Klicks nachbauen: Absender wählen, Kunde auswählen, Positionen
                        hinzufügen – TinyBill kümmert sich um Layout, Pflichtangaben und Export.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer-Zeile */}
                <div className="border-t border-dashed border-slate-200 bg-white px-4 py-3 text-[11px] text-slate-500 sm:px-5">
                  Später kannst du diese Beispiele exakt nachbauen: sag TinyBill, von wem an wen,
                  was berechnet werden soll und welches Zahlungsziel du brauchst – der Rest ergibt
                  sich fast von selbst.
                </div>
              </div>
            </div>
        )}
      </PageShell>
  );
}

function FlowStep({ title, text }: { title: string; text: string }) {
  return (
      <div className="relative rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
        <div className="absolute left-4 top-0 h-1 w-16 -translate-y-1/2 rounded-full bg-blue-500/80" />
        <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
        <p className="mt-2 text-xs text-slate-600">{text}</p>
      </div>
  );
}

function PersonaCard({
                       label,
                       title,
                       text,
                     }: {
  label: string;
  title: string;
  text: string;
}) {
  return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4">
        <div className="text-[11px] font-medium uppercase tracking-wide text-blue-700">
          {label}
        </div>
        <div className="mt-1 text-sm font-semibold text-slate-900">
          {title}
        </div>
        <p className="mt-2 text-xs text-slate-600">{text}</p>
      </div>
  );
}