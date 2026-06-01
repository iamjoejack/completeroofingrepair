import type { MetadataRoute } from "next";
import { BASE_URL, SERVICES, LOCATION_PAGES, POSTS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/about",
    "/service-area",
    "/reviews",
    "/contact",
    "/faqs",
    "/blog",
  ];

  const servicePaths = SERVICES.map((s) => `/services/${s.slug}`);
  const locationPaths = LOCATION_PAGES.map((l) => `/locations/${l.slug}`);
  const postPaths = POSTS.map((p) => `/blog/${p.slug}`);

  const all = [...staticPaths, ...servicePaths, ...locationPaths, ...postPaths];
  const now = new Date();

  return all.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
