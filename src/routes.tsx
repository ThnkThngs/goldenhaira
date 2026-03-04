import { lazy } from "react";

export const siteUrl = "https://golden-haira.lovable.app";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType>;
  changefreq?: string;
  priority?: number;
  /** If true, excluded from sitemap (e.g. 404) */
  excludeFromSitemap?: boolean;
}

export const routes: RouteConfig[] = [
  { path: "/", component: Index, changefreq: "weekly", priority: 1.0 },
  { path: "*", component: NotFound, excludeFromSitemap: true },
];
