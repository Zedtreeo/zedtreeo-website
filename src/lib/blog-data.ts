export type BlogCategory =
  | "remote-staffing"
  | "outsourcing"
  | "hiring-guides"
  | "industry-insights"
  | "technology"
  | "finance-accounting"
  | "case-studies";

export type Author = {
  name: string;
  slug: string;
  role: string;
  bio: string;
  credentials: string[];
  linkedin?: string;
  image?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  focusKeyword: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  author?: string; // author slug — defaults to "anita-singh"
  /** HTML content — injected via dangerouslySetInnerHTML with zt-blog-content class */
  content: string;
};

/* ─── Authors ─── */
export const authors: Record<string, Author> = {
  "anita-singh": {
    name: "Anita Singh",
    slug: "anita-singh",
    role: "Senior Digital Marketing Strategist",
    bio: "Anita has 16+ years of experience in remote staffing and outsourcing operations. She has guided hiring strategy for 500+ remote placements across software development, finance, marketing, legal, and healthcare verticals. Her expertise covers workforce cost modeling, vendor evaluation frameworks, and scaling distributed teams for businesses in the US, Europe, and Australia.",
    credentials: [
      "16+ years in remote staffing operations",
      "500+ remote placements guided",
      "Workforce cost modeling specialist",
      "Published in HR.com, Staffing Industry Analysts",
    ],
    linkedin: "https://www.linkedin.com/in/anita-zedtreeo/",
  },
  "zedtreeo-team": {
    name: "Zedtreeo Team",
    slug: "zedtreeo-team",
    role: "Remote Staffing Experts",
    bio: "The Zedtreeo editorial team brings deep operational experience across remote staffing, outsourcing, and distributed workforce management. Our content is informed by real placement data from 500+ engagements and vetted by industry practitioners.",
    credentials: [
      "500+ remote professionals placed",
      "200+ companies served globally",
      "Operations across 50+ role categories",
    ],
  },
};

export function getAuthor(slug?: string): Author {
  return authors[slug || "anita-singh"] || authors["anita-singh"];
}

export const categoryLabels: Record<BlogCategory, string> = {
  "remote-staffing": "Remote Staffing",
  outsourcing: "Outsourcing",
  "hiring-guides": "Hiring Guides",
  "industry-insights": "Industry Insights",
  technology: "Technology",
  "finance-accounting": "Finance & Accounting",
  "case-studies": "Case Studies",
};

/* ─── Published Track 2 articles ─── */
import { readFileSync } from "fs";
import { join } from "path";

function loadBlogContent(slug: string): string {
  try {
    const filePath = join(process.cwd(), "src/lib/blog-content", `${slug}.html`);
    return readFileSync(filePath, "utf-8");
  } catch {
    return `<p>Content for ${slug} is being prepared.</p>`;
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: "outsourcing-costs",
    title: "Outsourcing Costs in 2026: Complete Pricing Breakdown by Role & Region",
    metaTitle: "Outsourcing Costs in 2026: Complete Pricing Breakdown by Role & Region",
    metaDescription:
      "What does outsourcing actually cost in 2026? Compare outsourcing costs by role, region, and model. Real pricing data for developers, VAs, accountants & more.",
    excerpt:
      "A comprehensive guide to outsourcing costs across roles and regions in 2026, with real pricing data and cost comparison tables.",
    category: "outsourcing",
    tags: ["outsourcing costs", "pricing", "cost comparison", "2026"],
    focusKeyword: "outsourcing costs",
    datePublished: "2026-01-15",
    dateModified: "2026-04-10",
    readTime: "12 min",
    featured: true,
    image: "/images/blog/outsourcing-costs-2026.svg",
    imageAlt: "Outsourcing costs comparison chart showing pricing by role and region in 2026",
    author: "anita-singh",
    content: loadBlogContent("outsourcing-costs"),
  },
  {
    slug: "hire-remote-developers-guide",
    title: "How to Hire Remote Developers in 2026: The Definitive Guide",
    metaTitle: "How to Hire Remote Developers in 2026: The Definitive Guide",
    metaDescription:
      "Learn how to hire remote developers in 2026. Covers vetting, pricing, timezone management, contracts, and where to find top talent. Free trial available.",
    excerpt:
      "Everything you need to know about hiring remote developers — from sourcing and vetting to onboarding and long-term retention.",
    category: "hiring-guides",
    tags: ["hire remote developers", "developer hiring", "remote teams", "2026"],
    focusKeyword: "hire remote developers",
    datePublished: "2026-02-01",
    dateModified: "2026-04-10",
    readTime: "14 min",
    featured: true,
    image: "/images/blog/hire-remote-developers.svg",
    imageAlt: "Guide to hiring remote developers in 2026",
    author: "anita-singh",
    content: loadBlogContent("hire-remote-developers-guide"),
  },
  {
    slug: "virtual-assistant-pricing",
    title: "Virtual Assistant Pricing in 2026: What You Should Actually Pay",
    metaTitle: "Virtual Assistant Pricing in 2026: What You Should Actually Pay",
    metaDescription:
      "How much does a virtual assistant cost in 2026? Compare VA pricing by type, experience, and region. Includes real rate data and cost calculators.",
    excerpt:
      "Understand what virtual assistants actually cost in 2026 across different experience levels, specializations, and regions.",
    category: "outsourcing",
    tags: ["virtual assistant pricing", "VA costs", "hiring VA", "2026"],
    focusKeyword: "virtual assistant pricing",
    datePublished: "2026-02-15",
    dateModified: "2026-04-10",
    readTime: "10 min",
    image: "/images/blog/va-pricing-2026.svg",
    imageAlt: "Virtual assistant pricing comparison in 2026",
    author: "anita-singh",
    content: loadBlogContent("virtual-assistant-pricing"),
  },
  {
    slug: "ai-vs-outsourcing",
    title: "AI vs Outsourcing in 2026: When to Automate and When to Hire",
    metaTitle: "AI vs Outsourcing in 2026: When to Automate and When to Hire",
    metaDescription:
      "Should you use AI or outsource? Compare AI automation vs outsourcing by task type, cost, quality, and scalability. Decision framework included.",
    excerpt:
      "A practical framework for deciding when AI automation makes sense versus hiring dedicated remote talent.",
    category: "industry-insights",
    tags: ["AI vs outsourcing", "automation", "remote hiring", "2026"],
    focusKeyword: "ai vs outsourcing",
    datePublished: "2026-03-01",
    dateModified: "2026-04-10",
    readTime: "11 min",
    image: "/images/blog/ai-vs-outsourcing.svg",
    imageAlt: "AI vs outsourcing decision framework",
    author: "anita-singh",
    content: loadBlogContent("ai-vs-outsourcing"),
  },
  {
    slug: "outsource-payroll-services",
    title: "Outsource Payroll Services: Complete Guide for Growing Businesses",
    metaTitle: "Outsource Payroll Services: Complete Guide for Growing Businesses",
    metaDescription:
      "Should you outsource payroll? Compare in-house vs outsourced payroll costs, benefits, and risks. Includes vendor selection framework.",
    excerpt:
      "Everything businesses need to know about outsourcing payroll — costs, benefits, risks, and how to choose the right partner.",
    category: "finance-accounting",
    tags: ["outsource payroll", "payroll services", "accounting", "2026"],
    focusKeyword: "outsource payroll services",
    datePublished: "2026-03-15",
    dateModified: "2026-04-10",
    readTime: "9 min",
    image: "/images/blog/outsource-payroll.svg",
    imageAlt: "Guide to outsourcing payroll services",
    author: "anita-singh",
    content: loadBlogContent("outsource-payroll-services"),
  },
  {
    slug: "bpo-services",
    title: "BPO Services in 2026: What They Are, Types, and How to Choose",
    metaTitle: "BPO Services in 2026: What They Are, Types, and How to Choose",
    metaDescription:
      "What are BPO services? Comprehensive guide covering BPO types, pricing, benefits, and how to select the right BPO provider in 2026.",
    excerpt:
      "A definitive guide to business process outsourcing — types, pricing models, provider selection, and the state of BPO in 2026.",
    category: "outsourcing",
    tags: ["BPO services", "business process outsourcing", "outsourcing guide", "2026"],
    focusKeyword: "bpo services",
    datePublished: "2026-04-01",
    dateModified: "2026-04-15",
    readTime: "13 min",
    image: "/images/blog/bpo-services.svg",
    imageAlt: "BPO services guide for 2026",
    author: "anita-singh",
    content: loadBlogContent("bpo-services"),
  },
  {
    slug: "best-remote-staffing-agencies",
    title: "Best Remote Staffing Agencies in 2026: Honest Comparison",
    metaTitle: "Best Remote Staffing Agencies in 2026: Honest Comparison",
    metaDescription:
      "Compare the best remote staffing agencies in 2026. Honest reviews covering pricing, vetting quality, specializations, and client satisfaction.",
    excerpt:
      "An objective comparison of the top remote staffing agencies — pricing, specializations, vetting processes, and what makes each one different.",
    category: "remote-staffing",
    tags: ["remote staffing agencies", "staffing comparison", "best agencies", "2026"],
    focusKeyword: "best remote staffing agencies",
    datePublished: "2026-04-10",
    dateModified: "2026-04-20",
    readTime: "15 min",
    featured: true,
    image: "/images/blog/best-staffing-agencies.svg",
    imageAlt: "Best remote staffing agencies comparison 2026",
    author: "anita-singh",
    content: loadBlogContent("best-remote-staffing-agencies"),
  },
];

/* ─── Helpers ─── */

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
