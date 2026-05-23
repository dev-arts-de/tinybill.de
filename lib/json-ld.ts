import { CONTACT_EMAIL, SITE_URL } from "@/lib/links";

type JsonLdValue =
    | string
    | number
    | boolean
    | null
    | JsonLdObject
    | JsonLdValue[];

export type JsonLdObject = {
    "@context"?: string;
    "@type": string;
    [key: string]: JsonLdValue | undefined;
};

export function organizationLd(): JsonLdObject {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "TinyBill",
        legalName: "Shopitech – Arthur Schimpf",
        url: SITE_URL,
        logo: new URL("/logo.png", SITE_URL).toString(),
        email: CONTACT_EMAIL,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Hans-Thoma-Str. 4",
            postalCode: "76351",
            addressLocality: "Linkenheim-Hochstetten",
            addressCountry: "DE",
        },
    };
}

export function websiteLd(): JsonLdObject {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "TinyBill",
        url: SITE_URL,
        inLanguage: "de-DE",
    };
}

export function softwareApplicationLd(): JsonLdObject {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "TinyBill",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description:
            "Rechnungen, die sich fast von selbst schreiben – mit TinyBill. Intelligente Automatisierung, E-Rechnung und smarte Checks.",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: new URL("/preise", SITE_URL).toString(),
        },
    };
}

export type FaqEntry = { question: string; answer: string };

export function faqPageLd(entries: ReadonlyArray<FaqEntry>): JsonLdObject {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: entries.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
                "@type": "Answer",
                text: answer,
            },
        })),
    };
}

export function breadcrumbLd(
    items: ReadonlyArray<{ name: string; path: string }>,
): JsonLdObject {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map(({ name, path }, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
            item: new URL(path, SITE_URL).toString(),
        })),
    };
}
