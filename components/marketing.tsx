import { ReactNode } from "react";

export type FeatureCardProps = {
    title: string;
    description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
            <p className="mt-2 text-xs text-slate-600">{description}</p>
        </div>
    );
}

export type AutoCheckRowProps = {
    text: string;
    status: "ok" | "warn";
};

export function AutoCheckRow({ text, status }: AutoCheckRowProps) {
    const isOk = status === "ok";
    return (
        <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
            <span className="text-[11px] text-slate-600">{text}</span>
            <span
                className={
                    isOk
                        ? "text-[11px] font-medium text-emerald-600"
                        : "text-[11px] font-medium text-amber-600"
                }
            >
        {isOk ? "OK" : "Hinweis"}
      </span>
        </div>
    );
}

export type GrowthCardProps = {
    label: string;
    title: string;
    text: string;
};

export function GrowthCard({ label, title, text }: GrowthCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                {label}
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-900">{title}</div>
            <p className="mt-2 text-xs text-slate-600">{text}</p>
        </div>
    );
}

export type StepCardProps = {
    step: string;
    title: string;
    text: string;
};

export function StepCard({ step, title, text }: StepCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                {step}
            </div>
            <div className="text-sm font-semibold text-slate-900">{title}</div>
            <p className="mt-2 text-xs text-slate-600">{text}</p>
        </div>
    );
}

export type FaqItemProps = {
    question: string;
    answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-semibold text-slate-900">{question}</div>
            <p className="mt-2 text-xs text-slate-600">{answer}</p>
        </div>
    );
}

export function SectionHeader({
                                  eyebrow,
                                  title,
                                  description,
                                  align,
                              }: {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}) {
    const alignment =
        align === "center"
            ? "text-center items-center mx-auto"
            : "text-left items-start";
    return (
        <div className={`flex flex-col gap-2 ${alignment} max-w-2xl`}>
            {eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {eyebrow}
                </p>
            ) : null}
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
            </h2>
            {description ? (
                <p className="text-sm text-slate-600">{description}</p>
            ) : null}
        </div>
    );
}

export function PageShell({
                              children,
                          }: {
    children: ReactNode;
}) {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {children}
        </main>
    );
}