"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: "Start", href: "/" },
    { label: "Funktionen", href: "/funktionen" },
    { label: "Automation", href: "/automation" },
    { label: "Preise", href: "/preise" },
    { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="TinyBill"
                                width={130}
                                height={32}
                                priority
                            />
                        </Link>
                    </div>

                    <nav className="hidden items-center gap-6 text-sm md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-slate-600 transition-colors hover:text-slate-900"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <a
                            href="https://app.tinybill.de"
                            className="rounded-full border border-slate-200 bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-slate-800"
                        >
                            Zur App
                        </a>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((open) => !open)}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
                        aria-label="Navigation öffnen"
                        aria-expanded={mobileOpen}
                    >
                        <span className="mr-1">Menü</span>
                        <span className="flex flex-col gap-0.5">
              <span className="block h-[2px] w-4 rounded bg-slate-700" />
              <span className="block h-[2px] w-4 rounded bg-slate-700" />
            </span>
                    </button>
                </div>

                {mobileOpen && (
                    <div className="border-t border-slate-200 bg-white md:hidden">
                        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-full px-3 py-1.5 text-slate-700 hover:bg-slate-50"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            {/* Fixed mobile CTA */}
            <a
                href="https://app.tinybill.de"
                className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/25 hover:bg-slate-800 md:hidden"
            >
                Zur App
            </a>
        </>
    );
}

export function SiteFooter() {
    return (
        <footer className="border-t border-dashed border-slate-200 bg-slate-50">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="TinyBill" width={130} height={32} />
                    <span>
            © {new Date().getFullYear()} TinyBill. Alle Rechte vorbehalten.
          </span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/impressum" className="hover:text-slate-700">
                        Impressum
                    </Link>
                    <Link href="/datenschutz" className="hover:text-slate-700">
                        Datenschutz
                    </Link>
                </div>
            </div>
        </footer>
    );
}