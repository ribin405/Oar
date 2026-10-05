export type ServiceFrontmatter = {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  heroHeadline: string;
  order: number;
  relatedIndustries: string[]; // industry slugs
  relatedServices: string[]; // service slugs
  whatWeHandle: string[];
  process: { step: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export type IndustryFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  heroHeadline: string;
  order: number;
  painPoints: string[];
  relatedServices: string[]; // service slugs
  ctaLabel: string;
};

export type PortFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  heroHeadline: string;
  order: number;
  verified: boolean; // only true once the client confirms real operational coverage
  servicesAvailable: string[]; // service slugs
};

export type InsightFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  publishedAt: string; // ISO date
  readingTime?: string;
};

export type ContentDoc<TFrontmatter> = {
  frontmatter: TFrontmatter;
  content: string; // raw MDX body
  slug: string;
};
