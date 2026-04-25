/**
 * Cross-linking map: connects hire pages ↔ case studies ↔ blog posts ↔ industry pages.
 *
 * Provides functions to look up related content for any page type,
 * enabling bidirectional linking across all content pillars.
 */

import { case_study_content_data } from "./case-study-data";
import { blogPosts } from "./blog-data";
import { hirePages } from "./hire-data";

/* ─── Types ─── */
export type ContentLink = {
  title: string;
  href: string;
  /** Short result metric or description for card display */
  snippet?: string;
};

/* ─── Hire Page → Case Studies ─── */
const hireToCaseStudies: Record<string, string[]> = {
  /* Software Engineering */
  "full-stack-developer": ["remote-software-developers", "remote-it-support-teams"],
  "hire-react-developer": ["remote-software-developers"],
  "hire-frontend-developer": ["remote-software-developers"],
  "hire-nodejs-developer": ["remote-software-developers"],
  "hire-python-developer": ["remote-software-developers", "remote-data-analysis"],
  "hire-php-developer": ["remote-software-developers"],
  "hire-java-developer": ["remote-software-developers"],
  "hire-dotnet-developer": ["remote-software-developers"],
  "hire-laravel-developer": ["remote-software-developers"],
  "hire-wordpress-developer": ["remote-software-developers"],
  "hire-vuejs-developer": ["remote-software-developers"],
  "hire-angular-developer": ["remote-software-developers"],
  "quality-assurance-and-testing": ["remote-software-developers"],

  /* Mobile */
  "hire-mobile-app-developer": ["remote-software-developers"],
  "hire-ios-developer": ["remote-software-developers"],
  "hire-android-developer": ["remote-software-developers"],
  "hire-flutter-developer": ["remote-software-developers"],

  /* AI, Data & Cloud */
  "hire-ai-ml-engineer": ["remote-software-developers", "remote-data-analysis"],
  "hire-data-scientist": ["remote-data-analysis", "remote-research-analytics"],
  "devops-engineers": ["remote-software-developers", "remote-it-support-teams"],
  "cyber-security-expert": ["remote-cybersecurity-experts", "remote-it-support-teams"],
  "hire-salesforce-developer": ["remote-software-developers"],
  "hire-remote-research-analytics-staff": ["remote-research-analytics", "remote-data-analysis"],

  /* eCommerce */
  "hire-shopify-developer": ["remote-operations-support-staff", "remote-fashion-brand-staffing"],
  "hire-magento-developer": ["remote-operations-support-staff"],
  "hire-ecommerce-developer": ["remote-operations-support-staff", "remote-fashion-brand-staffing"],

  /* Design */
  "hire-web-designer": ["media-remote-staffing", "remote-fashion-brand-staffing"],
  "graphic-designer": ["media-remote-staffing", "remote-fashion-brand-staffing"],
  "content-writer": ["remote-marketing-teams-for-seo-content", "media-remote-staffing"],

  /* Marketing */
  "digital-marketer": ["remote-marketing-teams", "remote-marketing-teams-for-seo-content"],
  "seo-specialist": ["remote-marketing-teams-for-seo-content", "remote-marketing-teams"],
  "hire-ppc-specialist": ["remote-marketing-teams", "remote-marketing-teams-for-seo-content"],
  "hire-email-marketing-specialist": ["remote-marketing-teams", "remote-fashion-brand-staffing"],
  "social-media-manager": ["remote-marketing-teams", "media-remote-staffing"],

  /* Finance */
  "virtual-assistant-for-bookkeeping": ["remote-finance-accounting-staff", "scaling-a-boutique-investment-firm-with-remote-financial-talent"],
  "hire-accountant": ["remote-finance-accounting-staff", "scaling-a-boutique-investment-firm-with-remote-financial-talent"],
  "hire-tax-preparer": ["remote-finance-accounting-staff"],
  "hire-quickbooks-expert": ["remote-finance-accounting-staff"],

  /* Business Support */
  "virtual-assistants": ["remote-customer-service-agents", "remote-hospitality-support-staff"],
  "customer-support-representative": ["remote-customer-support", "remote-customer-service-agents"],
  "hire-project-manager": ["remote-software-developers", "remote-operations-support-staff"],
  "virtual-legal-staff": ["remote-legal-staff", "remote-legal-experts", "remote-paralegals-for-case-preparation"],
  "revenue-cycle-management-staff": ["remote-medical-billing-coding-staff", "virtual-healthcare-assistants", "remote-healthcare-compliance"],
  "hire-remote-hr-and-recruitment-staff": ["remote-hr-recruitment"],
  "data-entry-assistant": ["remote-customer-service-agents", "remote-operations-support-staff"],
  "sales-and-business-development": ["remote-customer-support", "remote-operations-support-staff"],
  "architecture-engineering": ["remote-drafting-teams", "remote-structural-engineering", "remote-staffing-solution-for-geotechnical-consultancy"],
  "hire-remote-it-staff": ["remote-it-support-teams", "remote-cybersecurity-experts"],
  "hire-remote-medical-staff": ["remote-medical-billing-coding-staff", "virtual-healthcare-assistants", "remote-healthcare-compliance"],
  "remote-employees-for-your-business": ["remote-customer-service-agents", "remote-operations-support-staff"],
};

/* ─── Hire Page → Blog Posts ─── */
const hireToBlogs: Record<string, string[]> = {
  /* Software */
  "full-stack-developer": ["hire-remote-developers-guide", "ai-vs-outsourcing"],
  "hire-react-developer": ["hire-remote-developers-guide", "outsourcing-costs"],
  "hire-frontend-developer": ["hire-remote-developers-guide"],
  "hire-nodejs-developer": ["hire-remote-developers-guide", "outsourcing-costs"],
  "hire-python-developer": ["hire-remote-developers-guide", "ai-vs-outsourcing"],
  "hire-php-developer": ["hire-remote-developers-guide", "outsourcing-costs"],
  "hire-java-developer": ["hire-remote-developers-guide", "outsourcing-costs"],
  "hire-dotnet-developer": ["hire-remote-developers-guide"],
  "hire-laravel-developer": ["hire-remote-developers-guide"],
  "hire-wordpress-developer": ["hire-remote-developers-guide"],
  "hire-vuejs-developer": ["hire-remote-developers-guide"],
  "hire-angular-developer": ["hire-remote-developers-guide"],
  "quality-assurance-and-testing": ["hire-remote-developers-guide", "best-practices-hiring-remote-staff"],

  /* Mobile */
  "hire-mobile-app-developer": ["hire-remote-developers-guide", "outsourcing-costs"],
  "hire-ios-developer": ["hire-remote-developers-guide"],
  "hire-android-developer": ["hire-remote-developers-guide"],
  "hire-flutter-developer": ["hire-remote-developers-guide"],

  /* AI, Data & Cloud */
  "hire-ai-ml-engineer": ["ai-vs-outsourcing", "ai-integrated-virtual-staffing", "ai-vs-human-talent"],
  "hire-data-scientist": ["ai-vs-outsourcing", "ai-integrated-virtual-staffing"],
  "devops-engineers": ["hire-remote-developers-guide", "outsourcing-costs"],
  "cyber-security-expert": ["remote-work-cybersecurity", "hire-remote-developers-guide"],
  "hire-salesforce-developer": ["hire-remote-developers-guide", "outsourcing-costs"],
  "hire-remote-research-analytics-staff": ["ai-vs-outsourcing", "best-practices-hiring-remote-staff"],

  /* eCommerce */
  "hire-shopify-developer": ["hire-remote-developers-guide", "outsourcing-costs"],
  "hire-magento-developer": ["hire-remote-developers-guide", "outsourcing-costs"],
  "hire-ecommerce-developer": ["hire-remote-developers-guide", "outsourcing-costs"],

  /* Design */
  "hire-web-designer": ["outsourcing-costs", "best-practices-hiring-remote-staff"],
  "graphic-designer": ["outsourcing-costs", "best-practices-hiring-remote-staff"],
  "content-writer": ["outsourcing-costs", "best-practices-hiring-remote-staff"],

  /* Marketing */
  "digital-marketer": ["outsourcing-costs", "best-remote-staffing-agencies"],
  "seo-specialist": ["outsourcing-costs", "best-remote-staffing-agencies"],
  "hire-ppc-specialist": ["outsourcing-costs", "best-remote-staffing-agencies"],
  "hire-email-marketing-specialist": ["outsourcing-costs", "best-remote-staffing-agencies"],
  "social-media-manager": ["outsourcing-costs", "best-remote-staffing-agencies"],

  /* Finance */
  "virtual-assistant-for-bookkeeping": ["freelance-bookkeeper-rates", "hire-bookkeeper-quickbooks-guide", "outsource-bookkeeping-india", "virtual-bookkeeping-services"],
  "hire-accountant": ["why-startups-smes-should-outsource-accounting", "freelance-bookkeeper-rates", "cost-benefit-remote-staffing-finance"],
  "hire-tax-preparer": ["why-startups-smes-should-outsource-accounting", "cost-benefit-remote-staffing-finance"],
  "hire-quickbooks-expert": ["hire-bookkeeper-quickbooks-guide", "virtual-bookkeeping-services", "freelance-bookkeeper-rates"],

  /* Business Support */
  "virtual-assistants": ["virtual-assistant-pricing", "best-remote-staffing-agencies", "how-remote-staffing-reduces-hiring-costs"],
  "customer-support-representative": ["outsourcing-costs", "bpo-services", "how-remote-staffing-reduces-hiring-costs"],
  "hire-project-manager": ["remote-team-management-guide", "best-practices-hiring-remote-staff"],
  "virtual-legal-staff": ["contract-paralegal-guide", "virtual-paralegal-services"],
  "revenue-cycle-management-staff": ["medical-billing-virtual-assistant", "managing-remote-healthcare-teams"],
  "hire-remote-hr-and-recruitment-staff": ["best-practices-hiring-remote-staff", "best-remote-staffing-agencies"],
  "data-entry-assistant": ["virtual-assistant-pricing", "data-entry-outsourcing-guide"],
  "sales-and-business-development": ["bpo-services", "outsourcing-costs"],
  "architecture-engineering": ["outsourcing-costs", "best-practices-hiring-remote-staff"],
  "hire-remote-it-staff": ["hire-remote-developers-guide", "remote-work-cybersecurity"],
  "hire-remote-medical-staff": ["medical-billing-virtual-assistant", "managing-remote-healthcare-teams"],
  "remote-employees-for-your-business": ["best-remote-staffing-agencies", "how-remote-staffing-reduces-hiring-costs", "outsourcing-costs"],
};

/* ─── Case Study Snippets (result metric for card display) ─── */
const caseStudySnippets: Record<string, string> = {
  "remote-software-developers": "2.4× engineering velocity without inflating burn",
  "remote-it-support-teams": "24/7 IT support with 71% lower operating cost",
  "remote-cybersecurity-experts": "24/7 SOC coverage and 68% lower MTTR",
  "remote-data-analysis": "3× reporting velocity and 64% lower analytics cost",
  "remote-research-analytics": "3× research throughput and 76% cost savings",
  "remote-operations-support-staff": "35% fewer fulfillment errors and 79% cost savings",
  "remote-fashion-brand-staffing": "3× faster campaign launches and 80% lower staffing costs",
  "media-remote-staffing": "70% lower creative staffing cost and 3× content output",
  "remote-marketing-teams": "4× campaign throughput and 63% lower creative cost",
  "remote-marketing-teams-for-seo-content": "Organic leads up 214% with dedicated SEO team",
  "remote-finance-accounting-staff": "Month-end close compressed from 12 days to 4",
  "scaling-a-boutique-investment-firm-with-remote-financial-talent": "3× deal screening throughput and 74% cost savings",
  "remote-customer-support": "CSAT +24 points and 59% lower ticket cost",
  "remote-customer-service-agents": "45% lower wait times and 85% support cost reduction",
  "remote-legal-staff": "62% faster contract review and 40% more billable hours",
  "remote-legal-experts": "3× matter throughput and 40% lower non-billable hours",
  "remote-paralegals-for-case-preparation": "Case prep cycle cut 62% with remote paralegal team",
  "remote-medical-billing-coding-staff": "First-pass denial rate cut 45%, AR turnover 22 days faster",
  "virtual-healthcare-assistants": "40% shorter patient wait times, 92% verification accuracy",
  "remote-healthcare-compliance": "70% faster HIPAA compliance turnaround",
  "remote-hr-recruitment": "55% shorter time-to-fill and 3× candidate pipeline",
  "remote-drafting-teams": "40% faster drawings and 85% drafting cost savings",
  "remote-structural-engineering": "45% faster drawing delivery, 97% first-submission pass rate",
  "remote-staffing-solution-for-geotechnical-consultancy": "50% faster report turnaround and 3× project throughput",
  "remote-hospitality-support-staff": "40% faster booking resolution and +28 NPS",
  "remote-3d-rendering-experts": "2× rendering throughput and 80% lower visualization cost",
  "remote-compliance-support": "81% fewer SLA breaches and 75% lower compliance cost",
  "remote-crop-monitoring": "60% lower field reporting cost and 2.5× seasonal scaling",
  "remote-moderation-compliance": "94% harmful content removed within SLA, 83% cost savings",
  "remote-staffing-solutions-for-education": "2× course launch velocity and 22-point NPS improvement",
};

/* ─── Reverse index: Case Study → Hire Pages ─── */
function buildReverseMap(forward: Record<string, string[]>): Record<string, string[]> {
  const reverse: Record<string, string[]> = {};
  for (const [hireSlug, contentSlugs] of Object.entries(forward)) {
    for (const contentSlug of contentSlugs) {
      if (!reverse[contentSlug]) reverse[contentSlug] = [];
      if (!reverse[contentSlug].includes(hireSlug)) {
        reverse[contentSlug].push(hireSlug);
      }
    }
  }
  return reverse;
}

const caseStudyToHire = buildReverseMap(hireToCaseStudies);
const blogToHire = buildReverseMap(hireToBlogs);

/* ─── Title lookups ─── */
function getCaseStudyTitle(slug: string): string {
  const cs = case_study_content_data.find((c) => c.slug === slug);
  return cs?.title || slug.replace(/-/g, " ");
}

function getBlogTitle(slug: string): string {
  const post = blogPosts.find((p) => p.slug === slug);
  return post?.title || slug.replace(/-/g, " ");
}

function getHireTitle(slug: string): string {
  const page = hirePages[slug];
  return page ? `Hire ${page.title}` : slug.replace(/^hire-/, "").replace(/-/g, " ");
}

/* ─── Public API ─── */

/** Get related case studies for a hire page slug */
export function getRelatedCaseStudies(hireSlug: string): ContentLink[] {
  const slugs = hireToCaseStudies[hireSlug] || [];
  return slugs.map((slug) => ({
    title: getCaseStudyTitle(slug),
    href: `/case-studies/${slug}`,
    snippet: caseStudySnippets[slug],
  }));
}

/** Get related blog posts for a hire page slug */
export function getRelatedBlogs(hireSlug: string): ContentLink[] {
  const slugs = hireToBlogs[hireSlug] || [];
  return slugs.map((slug) => ({
    title: getBlogTitle(slug),
    href: `/blog/${slug}`,
  }));
}

/** Get related hire pages for a case study slug */
export function getRelatedHirePages(caseStudySlug: string): ContentLink[] {
  const slugs = caseStudyToHire[caseStudySlug] || [];
  return slugs.slice(0, 4).map((slug) => ({
    title: getHireTitle(slug),
    href: `/services/${slug}`,
  }));
}

/** Get related hire pages for a blog post slug */
export function getRelatedHirePagesFromBlog(blogSlug: string): ContentLink[] {
  const slugs = blogToHire[blogSlug] || [];
  return slugs.slice(0, 4).map((slug) => ({
    title: getHireTitle(slug),
    href: `/services/${slug}`,
  }));
}
