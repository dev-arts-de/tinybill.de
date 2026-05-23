import type { FaqEntry } from "@/lib/json-ld";

export type FaqGroup = {
    eyebrow: string;
    title: string;
    description: string;
    entries: ReadonlyArray<FaqEntry>;
};

export const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
    {
        eyebrow: "Allgemeines",
        title: "Was TinyBill eigentlich macht.",
        description:
            "Einordnen, wofür TinyBill gedacht ist, wer es nutzen kann und wie sich der Flow anfühlt.",
        entries: [
            {
                question: "Was ist TinyBill?",
                answer:
                    "TinyBill ist ein schlankes Tool zum Schreiben von Rechnungen und Angeboten – mit Fokus auf Klarheit, E-Rechnung im Hintergrund und hilfreiche Automatisierung. Du gibst die relevanten Daten ein, TinyBill kümmert sich um Struktur, Summen, Steuerlogik und Export.",
            },
            {
                question: "Für wen ist TinyBill gedacht?",
                answer:
                    "TinyBill richtet sich vor allem an Freelancer, Selbstständige, kleine Studios, Agenturen, Creator und Coaches, die regelmäßig Rechnungen schreiben müssen, ohne sich tief in Buchhaltungssoftware einarbeiten zu wollen.",
            },
            {
                question:
                    "Brauche ich Buchhaltungswissen, um TinyBill nutzen zu können?",
                answer:
                    "Nein. TinyBill führt dich durch die wichtigsten Felder, prüft Plausibilitäten und unterstützt bei Steuerlogik und Pflichtangaben. Grundsätzlich schadet es nie, steuerliche Grundlagen zu kennen – TinyBill möchte dir aber die typische Formular-Angst nehmen.",
            },
            {
                question:
                    "Kann ich TinyBill parallel zu meiner bisherigen Lösung nutzen?",
                answer:
                    "Ja. Du kannst TinyBill erst einmal für ausgewählte Projekte oder Kund:innen verwenden, während du deine bisherige Lösung weiterlaufen lässt. So merkst du, ob sich der Flow für dich richtig anfühlt, bevor du umsteigst.",
            },
        ],
    },
    {
        eyebrow: "Funktionen",
        title: "Fragen zur täglichen Nutzung.",
        description:
            "Wie TinyBill mit Local Storage, Validierungen, Steuerlogik, Logos und QR-Zahlung umgeht.",
        entries: [
            {
                question: "Speichert TinyBill meine Entwürfe automatisch?",
                answer:
                    "Ja. TinyBill nutzt Local Storage im Browser, um deine aktuellen Entwürfe und häufige Eingaben zu speichern. Wenn der Tab versehentlich geschlossen wird oder du kurz weg musst, bleibt dein Entwurf erhalten, bis du ihn bewusst zurücksetzt.",
            },
            {
                question: "Wie hilft TinyBill bei Adressen und IBANs?",
                answer:
                    "TinyBill prüft, ob Adressen vollständig und plausibel sind, und unterstützt bei Bankverbindungen mit Formatierung und IBAN-Prüfung. Du erhältst Hinweise, wenn wichtige Angaben fehlen oder etwas nicht stimmig wirkt.",
            },
            {
                question: "Werden Steuern automatisch berechnet?",
                answer:
                    "Ja. Du kannst pro Position einen Steuersatz wählen, TinyBill berechnet daraus Netto, Steuerbetrag und Brutto. Wenn du als Kleinunternehmer:in abrechnest, unterstützt TinyBill dich bei 0 %-Rechnungen und den passenden Hinweisen im Dokument.",
            },
            {
                question: "Kann ich ein eigenes Logo verwenden?",
                answer:
                    "Ja. Du kannst ein Logo hinterlegen, das in all deinen Rechnungen verwendet wird. TinyBill achtet darauf, dass das Logo sinnvoll platziert wird und der eigentliche Inhalt gut lesbar bleibt.",
            },
            {
                question: "Unterstützt TinyBill QR-Zahlungscodes?",
                answer:
                    "Für geeignete Bankverbindungen kann TinyBill einen QR-Zahlungscode vorbereiten, damit deine Kund:innen Rechnungen per Banking-App scannen und übernehmen können. Betrag, Verwendungszweck und Empfänger werden automatisiert befüllt.",
            },
            {
                question: "Welche Dokumente kann ich mit TinyBill erstellen?",
                answer:
                    "TinyBill fokussiert sich auf saubere Einzelrechnungen, Sammelrechnungen für einen Kunden und Angebote, die sich später in Rechnungen überführen lassen. Die Idee: wenige, aber im Alltag relevante Dokumenttypen, statt einer unübersichtlichen Liste.",
            },
        ],
    },
    {
        eyebrow: "E-Rechnung & Technik",
        title: "Wie TinyBill mit E-Rechnungen umgeht.",
        description:
            "PDF für Menschen, strukturierte Daten im Hintergrund – und eine Vorbereitung darauf, dass E-Rechnungen wichtiger werden.",
        entries: [
            {
                question: "Unterstützt TinyBill E-Rechnungen?",
                answer:
                    "Ja. Neben klassischen PDFs kann TinyBill strukturierte E-Rechnungen erzeugen. Während du eine normal lesbare Rechnung siehst, baut TinyBill im Hintergrund eine maschinenlesbare Struktur auf, die sich für Buchhaltungssysteme und Portale eignet.",
            },
            {
                question: "Warum ist E-Rechnung überhaupt wichtig?",
                answer:
                    "Viele Unternehmen und öffentliche Auftraggeber erwarten zunehmend strukturierte Rechnungsdaten. E-Rechnungen lassen sich automatisiert verarbeiten, was Rückfragen reduziert und Prozesse beschleunigt. TinyBill bereitet dich darauf vor, ohne dass du dich selbst mit technischen Formaten beschäftigen musst.",
            },
            {
                question: "Kann ich PDF und E-Rechnung gleichzeitig exportieren?",
                answer:
                    "Ziel ist, dass du eine visuell klare PDF-Rechnung erhältst und parallel eine E-Rechnungsdatei exportieren kannst, damit sowohl deine Kund:innen als auch deren Buchhaltung gut damit arbeiten können.",
            },
            {
                question: "Ist TinyBill eine komplette Buchhaltungssoftware?",
                answer:
                    "Nein. TinyBill konzentriert sich bewusst auf Rechnungen, Angebote und die dazugehörige Logik. Es will dir den Schritt zwischen erbrachter Leistung und sauberer Rechnung erleichtern – nicht eine vollumfängliche Buchhaltung ersetzen.",
            },
        ],
    },
    {
        eyebrow: "Preise",
        title: "Fragen zu Kosten und Launch-Phase.",
        description:
            "Wie die aktuelle kostenlose Nutzung funktioniert und was perspektivisch geplant ist.",
        entries: [
            {
                question: "Kostet TinyBill derzeit etwas?",
                answer:
                    "In der aktuellen Launch-Phase kannst du TinyBill kostenlos nutzen – ohne Abo und ohne Eingabe von Zahlungsdaten. Ziel ist, echtes Feedback zu sammeln und das Produkt unter realen Bedingungen zu testen.",
            },
            {
                question:
                    "Werde ich automatisch zahlungspflichtig, wenn später Tarife kommen?",
                answer:
                    "Nein. Wenn TinyBill kostenpflichtige Pläne einführt, wirst du vorher informiert und kannst bewusst entscheiden, ob du einen Plan buchen möchtest. Es gibt keine stillen Umstellungen von kostenlos auf kostenpflichtig.",
            },
            {
                question:
                    "Kann ich TinyBill auch nur für ein einzelnes Projekt testen?",
                answer:
                    "Ja. Du kannst TinyBill problemlos für wenige Rechnungen oder ein konkretes Projekt verwenden und schauen, ob der Flow für dich passt. Wenn nicht, musst du nichts kündigen.",
            },
            {
                question: "Wo finde ich Details zu künftigen Preisen?",
                answer:
                    "Auf der Seite „Preise“ findest du, wie die aktuelle Launch-Phase funktioniert und welche Modelle perspektivisch denkbar sind. Konkrete Beträge werden erst dann kommuniziert, wenn TinyBill bereit für stabile Pläne ist.",
            },
        ],
    },
    {
        eyebrow: "Daten & Hosting",
        title: "Fragen zu Speicherung, Hosting und Datenschutz.",
        description:
            "Eine kurze Einordnung dazu, wo TinyBill läuft und wie mit Daten umgegangen wird. Die rechtlich verbindlichen Details findest du in der Datenschutzerklärung.",
        entries: [
            {
                question: "Wo wird TinyBill gehostet?",
                answer:
                    "Die App selbst wird auf Infrastruktur von Hetzner in Europa gehostet, die Landingpage über Vercel ausgeliefert. Ziel ist, deine Daten nicht unnötig quer über den Globus zu verteilen.",
            },
            {
                question:
                    "Welche Daten speichert TinyBill lokal im Browser?",
                answer:
                    "TinyBill nutzt Local Storage, um Entwürfe, häufige Eingaben und Komfortfunktionen bereitzustellen. Diese Daten liegen zunächst in deinem Browser und helfen, deinen Arbeitsfluss zu erleichtern.",
            },
            {
                question:
                    "Verwendet TinyBill Cookies oder Analyse-Tools?",
                answer:
                    "Auf der Landingpage werden keine Marketing-Cookies gesetzt. Zur Reichweitenmessung kommen Vercel Analytics und Vercel Speed Insights zum Einsatz – beide arbeiten ohne Cookies und ohne dauerhaftes Wiedererkennen einzelner Personen. In der App selbst werden nur technisch notwendige Cookies und Local Storage für Entwürfe und Einstellungen genutzt. Details findest du in der Datenschutzerklärung.",
            },
            {
                question:
                    "Wo finde ich die vollständige Datenschutzerklärung?",
                answer:
                    "Die vollständigen Informationen zu Datenverarbeitung, Dienstleistern und deinen Rechten findest du auf der Seite „Datenschutz“. Die dortigen Angaben sind rechtlich maßgeblich.",
            },
        ],
    },
];

export function allFaqEntries(): ReadonlyArray<FaqEntry> {
    return FAQ_GROUPS.flatMap((group) => group.entries);
}
