import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  ContentDoc,
  IndustryFrontmatter,
  InsightFrontmatter,
  PortFrontmatter,
  ServiceFrontmatter,
} from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

function readCollection<T>(collection: string): ContentDoc<T>[] {
  const dir = path.join(CONTENT_ROOT, collection);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    return { frontmatter: data as T, content, slug };
  });
}

function sortByOrder<T extends { order?: number }>(
  docs: ContentDoc<T>[],
): ContentDoc<T>[] {
  return [...docs].sort(
    (a, b) => (a.frontmatter.order ?? 0) - (b.frontmatter.order ?? 0),
  );
}

// --- Services ---------------------------------------------------------

export function getAllServices(): ContentDoc<ServiceFrontmatter>[] {
  return sortByOrder(readCollection<ServiceFrontmatter>("services"));
}

export function getServiceBySlug(
  slug: string,
): ContentDoc<ServiceFrontmatter> | undefined {
  return getAllServices().find((doc) => doc.slug === slug);
}

// --- Industries ---------------------------------------------------------

export function getAllIndustries(): ContentDoc<IndustryFrontmatter>[] {
  return sortByOrder(readCollection<IndustryFrontmatter>("industries"));
}

export function getIndustryBySlug(
  slug: string,
): ContentDoc<IndustryFrontmatter> | undefined {
  return getAllIndustries().find((doc) => doc.slug === slug);
}

// --- Ports ---------------------------------------------------------
// Only populated once the client confirms genuine operational coverage —
// see Part 11 of the strategy doc on avoiding thin location pages.

export function getAllPorts(): ContentDoc<PortFrontmatter>[] {
  return sortByOrder(readCollection<PortFrontmatter>("ports"));
}

export function getVerifiedPorts(): ContentDoc<PortFrontmatter>[] {
  return getAllPorts().filter((doc) => doc.frontmatter.verified);
}

export function getPortBySlug(
  slug: string,
): ContentDoc<PortFrontmatter> | undefined {
  return getAllPorts().find((doc) => doc.slug === slug);
}

// --- Insights ---------------------------------------------------------

export function getAllInsights(): ContentDoc<InsightFrontmatter>[] {
  const docs = readCollection<InsightFrontmatter>("insights");
  return [...docs].sort(
    (a, b) =>
      new Date(b.frontmatter.publishedAt).getTime() -
      new Date(a.frontmatter.publishedAt).getTime(),
  );
}

export function getInsightBySlug(
  slug: string,
): ContentDoc<InsightFrontmatter> | undefined {
  return getAllInsights().find((doc) => doc.slug === slug);
}

// --- Cross-references ---------------------------------------------------------

export function getServicesBySlugs(
  slugs: string[],
): ContentDoc<ServiceFrontmatter>[] {
  const all = getAllServices();
  return slugs
    .map((slug) => all.find((doc) => doc.slug === slug))
    .filter((doc): doc is ContentDoc<ServiceFrontmatter> => Boolean(doc));
}

export function getIndustriesBySlugs(
  slugs: string[],
): ContentDoc<IndustryFrontmatter>[] {
  const all = getAllIndustries();
  return slugs
    .map((slug) => all.find((doc) => doc.slug === slug))
    .filter((doc): doc is ContentDoc<IndustryFrontmatter> => Boolean(doc));
}
