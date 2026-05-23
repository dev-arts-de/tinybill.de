import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/links";

const ROUTES: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/funktionen", changeFrequency: "monthly", priority: 0.8 },
    { path: "/automation", changeFrequency: "monthly", priority: 0.8 },
    { path: "/preise", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/impressum", changeFrequency: "yearly", priority: 0.2 },
    { path: "/datenschutz", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return ROUTES.map(({ path, changeFrequency, priority }) => ({
        url: new URL(path, SITE_URL).toString(),
        lastModified,
        changeFrequency,
        priority,
    }));
}
