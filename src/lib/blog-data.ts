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

export type BlogPostMeta = {
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
};

export type BlogPost = BlogPostMeta & {
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

export const blogPosts: BlogPostMeta[] = [
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
    image: "/images/blog/outsourcing-costs.webp",
    imageAlt: "Outsourcing costs comparison chart showing pricing by role and region in 2026",
    author: "anita-singh",
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
    image: "/images/blog/hire-remote-developers.webp",
    imageAlt: "Guide to hiring remote developers in 2026",
    author: "anita-singh",
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
    image: "/images/blog/virtual-assistant-pricing.webp",
    imageAlt: "Virtual assistant pricing comparison in 2026",
    author: "anita-singh",
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
    image: "/images/blog/ai-vs-outsourcing.webp",
    imageAlt: "AI vs outsourcing decision framework",
    author: "anita-singh",
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
    image: "/images/blog/outsource-payroll.webp",
    imageAlt: "Guide to outsourcing payroll services",
    author: "anita-singh",
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
    image: "/images/blog/bpo-services.webp",
    imageAlt: "BPO services guide for 2026",
    author: "anita-singh",
  },
  {
    slug: "offshore-vs-outsourcing",
    title: "Offshore vs Outsourcing: What's the Difference and Which Is Right for You?",
    metaTitle: "Offshore vs Outsourcing: Key Differences & How to Choose",
    metaDescription:
      "Offshore vs outsourcing explained. Compare BPO, offshore staffing, nearshore, and freelancing models with pricing, pros/cons, and a decision framework.",
    excerpt:
      "Clarifying the confusion between offshore and outsourcing — with a practical framework for choosing the right model for your business.",
    category: "outsourcing",
    tags: ["offshore vs outsourcing", "outsourcing models", "offshore staffing", "BPO comparison"],
    focusKeyword: "offshore vs outsourcing",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTime: "9 min",
    author: "anita-singh",
  },
  {
    slug: "staff-augmentation-services",
    title: "Staff Augmentation Services in 2026: Models, Costs & How to Choose",
    metaTitle: "Staff Augmentation Services 2026: Models, Costs & Guide",
    metaDescription:
      "What are staff augmentation services? Compare models, costs by role, and learn when to choose staff augmentation vs outsourcing. From $5/hr.",
    excerpt:
      "A complete guide to staff augmentation — types, pricing, provider selection, and when it beats traditional outsourcing.",
    category: "outsourcing",
    tags: ["staff augmentation", "staff augmentation services", "outsourcing vs augmentation", "2026"],
    focusKeyword: "staff augmentation services",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTime: "10 min",
    author: "anita-singh",
  },
  {
    slug: "how-remote-staffing-reduces-hiring-costs",
    title: "How Remote Staffing Reduces Hiring Costs by 70–90%: A Data-Backed Guide",
    metaTitle: "How Remote Staffing Reduces Hiring Costs by 70-90%",
    metaDescription:
      "See the real math behind remote staffing savings. Compare US hiring costs vs offshore talent by role with data-backed cost breakdowns.",
    excerpt:
      "A data-driven breakdown of US hiring costs vs remote staffing — with role-by-role savings calculations and total cost comparisons.",
    category: "remote-staffing",
    tags: ["remote staffing costs", "hiring cost savings", "cost reduction", "remote hiring ROI"],
    focusKeyword: "remote staffing cost savings",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTime: "11 min",
    author: "anita-singh",
  },
  {
    slug: "cost-benefit-remote-staffing-finance",
    title: "Cost-Benefit Analysis: Remote Staffing for Finance & Accounting Teams",
    metaTitle: "Remote Staffing for Finance & Accounting: Cost-Benefit Analysis",
    metaDescription:
      "Is remote staffing worth it for finance teams? Full cost-benefit analysis comparing in-house vs offshore accountants, bookkeepers, and payroll staff.",
    excerpt:
      "A detailed ROI analysis of remote staffing for finance and accounting teams — covering bookkeeping, payroll, tax prep, and financial reporting.",
    category: "finance-accounting",
    tags: ["remote accounting", "finance outsourcing", "bookkeeping costs", "accounting ROI"],
    focusKeyword: "remote staffing finance accounting",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTime: "10 min",
    author: "anita-singh",
  },
  {
    slug: "reduce-business-costs-remote-staffing",
    title: "7 Proven Ways to Reduce Business Costs with Remote Staffing in 2026",
    metaTitle: "7 Ways to Reduce Business Costs with Remote Staffing",
    metaDescription:
      "Cut business costs 70-90% with remote staffing. 7 proven strategies covering hiring, office, recruitment, and turnover savings with real dollar amounts.",
    excerpt:
      "Seven actionable strategies to cut business costs through remote staffing — with specific dollar savings for each approach.",
    category: "outsourcing",
    tags: ["reduce business costs", "remote staffing savings", "cost reduction strategies", "2026"],
    focusKeyword: "reduce business costs remote staffing",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTime: "9 min",
    author: "anita-singh",
  },
  {
    slug: "best-practices-hiring-remote-staff",
    title: "Best Practices for Hiring Remote Staff in 2026: A Complete Framework",
    metaTitle: "Best Practices for Hiring Remote Staff in 2026",
    metaDescription:
      "A proven framework for hiring remote staff: role definition, sourcing, vetting, interviewing, trials, and onboarding. Avoid the 6 most common mistakes.",
    excerpt:
      "The complete hiring framework for remote staff — from defining the role to running a paid trial and onboarding.",
    category: "hiring-guides",
    tags: ["hiring remote staff", "remote hiring best practices", "vetting remote employees", "2026"],
    focusKeyword: "hiring remote staff best practices",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    readTime: "10 min",
    author: "anita-singh",
  },
  {
    slug: "h1b-visa-remote-staffing-alternative",
    title: "H-1B Visa Crisis: Why Remote Staffing Is the Smart Alternative in 2026",
    metaTitle: "H-1B Visa Crisis: Remote Staffing as Smart Alternative",
    metaDescription:
      "H-1B visa costs $10K–$50K with no guarantee. Remote staffing gives you the same talent from $5/hr with a free trial. Compare both channels side by side.",
    excerpt:
      "How remote staffing bypasses H-1B bottlenecks — same quality talent without immigration overhead, starting at $5/hr.",
    category: "hiring-guides",
    tags: ["H-1B visa alternative", "remote staffing", "tech hiring", "visa crisis 2026"],
    focusKeyword: "H-1B visa alternative remote staffing",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    readTime: "11 min",
    author: "anita-singh",
  },
  {
    slug: "remote-work-pros-cons-employers",
    title: "Remote Work Pros and Cons for Employers: An Honest 2026 Assessment",
    metaTitle: "Remote Work Pros and Cons for Employers in 2026",
    metaDescription:
      "Honest assessment of remote work pros and cons for employers. 6 advantages, 5 challenges, and how to mitigate each with the right staffing partner.",
    excerpt:
      "A balanced look at remote work from the employer's perspective — what works, what doesn't, and how to solve the gaps.",
    category: "remote-staffing",
    tags: ["remote work pros cons", "employer remote work", "remote team challenges", "2026"],
    focusKeyword: "remote work pros and cons employers",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    readTime: "10 min",
    author: "anita-singh",
  },
  {
    slug: "hybrid-staffing-models",
    title: "Hybrid Staffing Models: How to Blend In-House and Remote Teams in 2026",
    metaTitle: "Hybrid Staffing Models: Blend In-House & Remote Teams",
    metaDescription:
      "4 hybrid staffing models for blending local and remote teams. Compare core-shell, function-split, project-based, and timezone-chaining with cost data.",
    excerpt:
      "How to combine in-house and remote staff effectively — four proven models with cost comparisons and implementation guides.",
    category: "remote-staffing",
    tags: ["hybrid staffing", "hybrid teams", "remote local blend", "staffing models 2026"],
    focusKeyword: "hybrid staffing models",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    readTime: "11 min",
    author: "anita-singh",
  },
  {
    slug: "remote-team-management-guide",
    title: "Complete Guide to Remote Team Management in 2026",
    metaTitle: "Remote Team Management Guide 2026: Complete Playbook",
    metaDescription:
      "Manage remote teams effectively with this complete guide. Communication frameworks, performance tracking, tools, culture building, and onboarding processes.",
    excerpt:
      "A comprehensive remote team management playbook — communication, performance, tools, culture, and onboarding.",
    category: "remote-staffing",
    tags: ["remote team management", "managing remote employees", "remote leadership", "2026"],
    focusKeyword: "remote team management",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    readTime: "12 min",
    author: "anita-singh",
  },
  {
    slug: "managing-time-zones-remote-work",
    title: "Managing Time Zones in Remote Work: Strategies That Actually Work",
    metaTitle: "Managing Time Zones in Remote Work: Practical Strategies",
    metaDescription:
      "How to manage timezone differences with remote teams. Overlap calculators, async communication, follow-the-sun model, and scheduling frameworks that work.",
    excerpt:
      "Practical timezone management strategies for remote teams — overlap calculations, async protocols, and scheduling frameworks.",
    category: "remote-staffing",
    tags: ["time zone management", "remote work timezones", "async communication", "distributed teams"],
    focusKeyword: "managing time zones remote work",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    readTime: "9 min",
    author: "anita-singh",
  },
  {
    slug: "remote-work-setup-guide",
    title: "Remote Work Setup Guide 2026: Tools, Processes & Infrastructure",
    metaTitle: "Remote Work Setup Guide 2026: Tools & Infrastructure",
    metaDescription:
      "Set up for remote work success. Essential tools, security protocols, hardware requirements, onboarding checklists, and legal compliance frameworks.",
    excerpt:
      "Everything you need to set up remote work infrastructure — tools, security, hardware, onboarding, and compliance.",
    category: "remote-staffing",
    tags: ["remote work setup", "remote tools", "remote infrastructure", "work from home guide"],
    focusKeyword: "remote work setup guide",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    readTime: "10 min",
    author: "anita-singh",
  },
  {
    slug: "remote-staffing-success-factors",
    title: "Key Success Factors for Remote Staffing: What Separates Winners from Failures",
    metaTitle: "Remote Staffing Success Factors: What Winners Do Differently",
    metaDescription:
      "7 critical success factors for remote staffing. Learn what separates companies that thrive with remote teams from those that fail, with real-world examples.",
    excerpt:
      "Why some companies succeed with remote staffing and others fail — the 7 critical factors that make the difference.",
    category: "remote-staffing",
    tags: ["remote staffing success", "remote team success factors", "distributed team management"],
    focusKeyword: "remote staffing success factors",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    readTime: "11 min",
    author: "anita-singh",
  },
  {
    slug: "remote-work-agile-practices",
    title: "Remote Work and Agile Practices: Running Scrum with Distributed Teams",
    metaTitle: "Remote Agile: Running Scrum with Distributed Teams",
    metaDescription:
      "How to run agile/scrum with remote teams. Adapt standups, sprint planning, retros for distributed work. Tool comparisons and timezone strategies included.",
    excerpt:
      "Adapting agile ceremonies for remote teams — daily standups, sprint planning, retrospectives, and demos in a distributed context.",
    category: "technology",
    tags: ["remote agile", "distributed scrum", "remote sprint planning", "agile remote teams"],
    focusKeyword: "remote work agile practices",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    readTime: "10 min",
    author: "anita-singh",
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
    image: "/images/blog/best-staffing-agencies.webp",
    imageAlt: "Best remote staffing agencies comparison 2026",
    author: "anita-singh",
  },
];

/* ─── Helpers ─── */

export function getBlogPost(slug: string): BlogPost | undefined {
  const meta = blogPosts.find((p) => p.slug === slug);
  if (!meta) return undefined;
  return { ...meta, content: loadBlogContent(slug) };
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getFeaturedPosts(): BlogPostMeta[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPostMeta[] {
  const current = getBlogPost(currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
