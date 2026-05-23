import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "TinyBill – Rechnungen in Minuten statt Stunden";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
    return renderOgImage({
        title: "Rechnungen in Minuten statt Stunden.",
        tagline:
            "TinyBill schreibt deine Rechnungen fast von selbst – inklusive E-Rechnung und smarter Checks.",
    });
}
