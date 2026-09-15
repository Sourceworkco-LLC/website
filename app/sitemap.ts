import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "",
  "/solutions",
  "/government",
  "/rfq",
  "/suppliers",
  "/teaming",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/government" || route === "/rfq" ? 0.9 : 0.8,
  }));
}
