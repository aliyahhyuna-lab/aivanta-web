import type { MetadataRoute } from "next";
import { legalPages, site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.SITE_URL, changeFrequency: "monthly", priority: 1 }, ...legalPages.map((p) => ({ url: `${site.SITE_URL}/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.3 }))];
}
