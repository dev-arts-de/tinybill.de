import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SITE_URL } from "@/lib/links";
import { JsonLd } from "@/components/json-ld";
import { organizationLd, websiteLd } from "@/lib/json-ld";

const DEFAULT_TITLE = "TinyBill – Rechnungen in Minuten statt Stunden";
const DEFAULT_DESCRIPTION =
    "Rechnungen, die sich fast von selbst schreiben – mit TinyBill. Intelligente Automatisierung, E-Rechnung und smarte Checks.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: DEFAULT_TITLE,
        template: "%s · TinyBill",
    },
    description: DEFAULT_DESCRIPTION,
    applicationName: "TinyBill",
    keywords: [
        "Rechnung schreiben",
        "E-Rechnung",
        "XRechnung",
        "ZUGFeRD",
        "Freelancer Rechnung",
        "Rechnungssoftware",
        "Rechnung Tool",
    ],
    authors: [{ name: "Shopitech – Arthur Schimpf" }],
    creator: "Shopitech",
    publisher: "Shopitech",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "de_DE",
        url: "/",
        siteName: "TinyBill",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
    },
    twitter: {
        card: "summary_large_image",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/fav.ico",
        shortcut: "/fav.ico",
    },
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
            <SpeedInsights />
            <Analytics />
            <body className="min-h-screen bg-slate-50 text-slate-900">
                <JsonLd
                    data={[organizationLd(), websiteLd()]}
                    id="ld-org"
                />
                {children}
            </body>
        </html>
    );
}