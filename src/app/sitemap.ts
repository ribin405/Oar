import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import {
  getAllIndustries,
  getAllInsights,
  getAllServices,
  getVerifiedPorts,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/ports",
    "/why-oar",
    "/insights",
    "/contact",
    "/request-a-quote",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = getAllServices().map((doc) => ({
    url: `${siteConfig.url}/services/${doc.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = getAllIndustries().map((doc) => ({
    url: `${siteConfig.url}/industries/${doc.slug}`,
    lastModified: new Date(),
  }));

  const portRoutes = getVerifiedPorts().map((doc) => ({
    url: `${siteConfig.url}/ports/${doc.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = getAllInsights().map((doc) => ({
    url: `${siteConfig.url}/insights/${doc.slug}`,
    lastModified: new Date(doc.frontmatter.publishedAt),
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...portRoutes,
    ...insightRoutes,
  ];
}
