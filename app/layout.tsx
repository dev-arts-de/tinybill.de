import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "TinyBill – Rechnungen in Minuten statt Stunden",
    description:
        "Rechnungen, die sich fast von selbst schreiben – mit TinyBill. Intelligente Automatisierung, E-Rechnung und smarte Checks.",
    icons: {
        icon: "/fav.ico",          // Haupt-Favicon
        shortcut: "/fav.ico"
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
            <body className="min-h-screen bg-slate-50 text-slate-900">
                {children}
            </body>
        </html>
    );
}