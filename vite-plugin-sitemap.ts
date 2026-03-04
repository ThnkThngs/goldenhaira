import type { Plugin } from "vite";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

interface SitemapRoute {
  path: string;
  changefreq?: string;
  priority?: number;
  excludeFromSitemap?: boolean;
}

export function sitemapPlugin(siteUrl: string, routes: SitemapRoute[]): Plugin {
  return {
    name: "vite-plugin-sitemap",
    closeBundle() {
      const today = new Date().toISOString().split("T")[0];
      const entries = routes
        .filter((r) => !r.excludeFromSitemap)
        .map(
          (r) => `  <url>
    <loc>${siteUrl}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq ?? "weekly"}</changefreq>
    <priority>${r.priority ?? 0.5}</priority>
  </url>`
        )
        .join("\n");

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
      const outDir = path.resolve(process.cwd(), "dist");
      mkdirSync(outDir, { recursive: true });
      writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf-8");
      console.log("[sitemap] Generated sitemap.xml");
    },
  };
}
