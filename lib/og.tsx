import { ImageResponse } from "next/og";

export const OG_SIZE = {
    width: 1200,
    height: 630,
} as const;

export const OG_CONTENT_TYPE = "image/png";

type RenderOgOptions = {
    eyebrow?: string;
    title: string;
    tagline?: string;
};

export function renderOgImage({
    eyebrow = "TinyBill",
    title,
    tagline,
}: RenderOgOptions) {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px",
                    background:
                        "linear-gradient(135deg, #f8fafc 0%, #eff6ff 60%, #dbeafe 100%)",
                    color: "#0f172a",
                    fontFamily:
                        "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        fontSize: 28,
                        color: "#1d4ed8",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "12px",
                            height: "12px",
                            borderRadius: "9999px",
                            background: "#3b82f6",
                        }}
                    />
                    <div style={{ display: "flex" }}>{eyebrow}</div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 84,
                            fontWeight: 600,
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            color: "#0f172a",
                            maxWidth: "920px",
                        }}
                    >
                        {title}
                    </div>
                    {tagline ? (
                        <div
                            style={{
                                fontSize: 32,
                                color: "#475569",
                                maxWidth: "880px",
                                lineHeight: 1.3,
                            }}
                        >
                            {tagline}
                        </div>
                    ) : null}
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: 24,
                        color: "#64748b",
                    }}
                >
                    <div style={{ display: "flex", fontWeight: 600, color: "#0f172a" }}>
                        tinybill.de
                    </div>
                    <div
                        style={{
                            display: "flex",
                            padding: "10px 20px",
                            borderRadius: "9999px",
                            background: "#2563eb",
                            color: "white",
                            fontWeight: 500,
                        }}
                    >
                        Jetzt Rechnung erstellen
                    </div>
                </div>
            </div>
        ),
        { ...OG_SIZE },
    );
}
