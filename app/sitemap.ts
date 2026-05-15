import type { MetadataRoute } from "next";
import { getIndexablePaths } from "@/lib/site-content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getIndexablePaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/quote-generator" || path === "/pricing"
          ? 0.95
          : path === "/quote"
            ? 0.8
            : path.startsWith("/locations/")
              ? 0.7
              : 0.85,
  }));
}
