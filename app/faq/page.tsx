import type { Metadata } from "next";
import {
    PageShell,
    SectionHeader,
    FaqItem,
} from "@/components/marketing";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { JsonLd } from "@/components/json-ld";
import { faqPageLd } from "@/lib/json-ld";
import { FAQ_GROUPS, allFaqEntries } from "@/lib/faq-data";

export const metadata: Metadata = {
    title: "FAQ",
    description:
        "Häufige Fragen zu TinyBill: Funktionen, E-Rechnung, Preise und Datenverarbeitung – kompakt beantwortet.",
    alternates: { canonical: "/faq" },
    openGraph: {
        title: "FAQ · TinyBill",
        url: "/faq",
    },
};

export default function FaqPage() {
    return (
        <PageShell>
            <JsonLd data={faqPageLd(allFaqEntries())} id="ld-faq" />
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

                {FAQ_GROUPS.map((group, idx) => (
                    <section
                        key={group.eyebrow}
                        className={
                            idx === FAQ_GROUPS.length - 1
                                ? "space-y-6 pb-8"
                                : "space-y-6 border-b border-dashed border-slate-200 pb-10"
                        }
                    >
                        <SectionHeader
                            eyebrow={group.eyebrow}
                            title={group.title}
                            description={group.description}
                            align="left"
                        />

                        <div className="space-y-4">
                            {group.entries.map((entry) => (
                                <FaqItem
                                    key={entry.question}
                                    question={entry.question}
                                    answer={entry.answer}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <SiteFooter />
        </PageShell>
    );
}
