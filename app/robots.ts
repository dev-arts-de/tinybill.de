import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/links";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
        host: SITE_URL,
    };
}
