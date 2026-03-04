export const siteUrl = "https://golden-haira.lovable.app";

export interface SitemapRoute {
  path: string;
  changefreq?: string;
  priority?: number;
  excludeFromSitemap?: boolean;
}

export const sitemapRoutes: SitemapRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "*", excludeFromSitemap: true },
];
