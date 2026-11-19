# tinybill.de

Quellcode der Landing Page von [TinyBill](https://tinybill.de), einem Werkzeug zum Schreiben von Rechnungen im Browser.

## Worum es geht

Die Seite stellt TinyBill vor und verlinkt auf die App unter [app.tinybill.de](https://app.tinybill.de). Sie wird von
Shopitech betrieben. Der Code der App selbst liegt nicht in diesem Repository.

## Seiten

| Pfad | Inhalt |
|---|---|
| `/` | Startseite |
| `/funktionen` | Funktionsübersicht |
| `/automation` | Automatisierungen und Prüfungen in der App |
| `/preise` | Preise |
| `/faq` | Häufige Fragen (Inhalte in `lib/faq-data.ts`) |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutzerklärung |

Dazu kommen `sitemap.xml` und `robots.txt` (`app/sitemap.ts`, `app/robots.ts`), automatisch erzeugte OpenGraph- und
Twitter-Vorschaubilder (`app/opengraph-image.tsx`, `app/twitter-image.tsx`) sowie strukturierte Daten als JSON-LD für
Organisation, Website, Produkt und FAQ.

## Technik

- Next.js 16.0.4 (App Router), React 19.2.0, TypeScript 5
- Tailwind CSS 4 über `@tailwindcss/postcss`
- Einblend-Animationen mit IntersectionObserver und CSS, ohne Animationsbibliothek
- `@vercel/analytics` und `@vercel/speed-insights` für Reichweiten- und Performance-Messung
- ESLint 9 mit `eslint-config-next` (Core Web Vitals und TypeScript)

## Projektstruktur

```
app/          Seiten, Layout, Metadaten, Sitemap, robots, OG-Bilder, globals.css
components/   Header und Footer (site-chrome), Marketing-Bausteine, JSON-LD, FadeIn
lib/          Links und Basis-URLs, FAQ-Inhalte, JSON-LD-Builder, OG-Bild-Renderer, Swipe-Hook
public/       Logo, Favicon und Screenshots der App
```

Die Basis-URLs der Seite und der App stehen zentral in `lib/links.ts`.

## Lokal starten

Voraussetzung: Node.js und npm.

```bash
npm install
npm run dev      # Entwicklungsserver auf http://localhost:3000
```

Weitere Skripte aus `package.json`:

```bash
npm run build    # Produktions-Build
npm run start    # Produktions-Build lokal ausliefern
npm run lint     # ESLint
```

## Konfiguration

Es werden keine Umgebungsvariablen benötigt.

## Lizenz

Für dieses Repository ist keine Lizenzdatei hinterlegt.
