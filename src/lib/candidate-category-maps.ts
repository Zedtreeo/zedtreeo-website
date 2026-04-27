/**
 * Slug → CandidateCategory mappings for all page types.
 *
 * Separated from the client component (CandidatePreview) so that
 * server components (page.tsx files) can import these plain objects
 * without crossing the "use client" boundary.
 */
import type { CandidateCategory } from "@/lib/candidates-data";

/** Map hire/service page slugs → candidate category */
export const serviceSlugToCategoryMap: Record<string, CandidateCategory> = {
  /* Software Engineering */
  "full-stack-developer": "software-development",
  "hire-react-developer": "software-development",
  "hire-frontend-developer": "software-development",
  "hire-nodejs-developer": "software-development",
  "hire-python-developer": "software-development",
  "hire-php-developer": "software-development",
  "hire-java-developer": "software-development",
  "hire-dotnet-developer": "software-development",
  "hire-laravel-developer": "software-development",
  "hire-wordpress-developer": "software-development",
  "hire-vuejs-developer": "software-development",
  "hire-angular-developer": "software-development",
  "quality-assurance-and-testing": "software-development",
  "hire-remote-it-staff": "software-development",
  /* Mobile */
  "hire-mobile-app-developer": "software-development",
  "hire-ios-developer": "software-development",
  "hire-android-developer": "software-development",
  "hire-flutter-developer": "software-development",
  /* AI, Data & Cloud */
  "hire-ai-ml-engineer": "software-development",
  "hire-data-scientist": "software-development",
  "devops-engineers": "software-development",
  "cyber-security-expert": "cybersecurity",
  "hire-salesforce-developer": "software-development",
  "hire-remote-research-analytics-staff": "software-development",
  /* eCommerce */
  "hire-shopify-developer": "software-development",
  "hire-magento-developer": "software-development",
  "hire-ecommerce-developer": "software-development",
  /* Design */
  "hire-web-designer": "design",
  "graphic-designer": "design",
  "content-writer": "content-seo",
  /* Marketing */
  "digital-marketer": "digital-marketing",
  "seo-specialist": "digital-marketing",
  "hire-ppc-specialist": "digital-marketing",
  "hire-email-marketing-specialist": "digital-marketing",
  "social-media-manager": "digital-marketing",
  /* Finance */
  "virtual-assistant-for-bookkeeping": "finance-accounting",
  "hire-accountant": "finance-accounting",
  "hire-tax-preparer": "finance-accounting",
  "hire-quickbooks-expert": "finance-accounting",
  /* Business Support */
  "virtual-assistants": "virtual-assistant",
  "customer-support-representative": "customer-support",
  "hire-project-manager": "virtual-assistant",
  "virtual-legal-staff": "legal-compliance",
  "revenue-cycle-management-staff": "healthcare-rcm",
  "hire-remote-hr-and-recruitment-staff": "virtual-assistant",
  "data-entry-assistant": "virtual-assistant",
  "sales-and-business-development": "virtual-assistant",
  "architecture-engineering": "design",
  "hire-remote-medical-staff": "healthcare-rcm",
  "remote-employees-for-your-business": "virtual-assistant",
  /* Probate / legal variants */
  "hire-remote-probate-specialists": "legal-compliance",
  /* Service-data HTML pages (category-level landing pages) */
  "hire-remote-administrative-and-assistant": "virtual-assistant",
  "hire-remote-customer-support": "customer-support",
  "hire-remote-designers": "design",
  "hire-remote-digital-marketing-staff": "digital-marketing",
  "hire-remote-finance-accounting-staff": "finance-accounting",
  "hire-remote-legal-staff": "legal-compliance",
};

/** Map industry page slugs → candidate category */
export const industrySlugToCategoryMap: Record<string, CandidateCategory> = {
  "agriculture-and-agtech": "virtual-assistant",
  "architecture-and-engineering": "design",
  "automotive-and-transportation": "virtual-assistant",
  "construction-and-contracting": "virtual-assistant",
  "digital-marketing-and-content-creation": "digital-marketing",
  "e-commerce-and-retail": "software-development",
  "education-e-learning": "virtual-assistant",
  "fashion-beauty": "design",
  "finance-and-accounting": "finance-accounting",
  "healthcare-and-telemedicine": "healthcare-rcm",
  "hospitality-tourism": "customer-support",
  "human-resources-and-recruitment": "virtual-assistant",
  "information-technology": "software-development",
  "insurance": "finance-accounting",
  "law": "legal-compliance",
  "logistics-supply-chain-and-freight": "virtual-assistant",
  "manufacturing-and-industrial": "virtual-assistant",
  "marketing-advertising": "digital-marketing",
  "marketing-and-advertising": "digital-marketing",
  "media-entertainment-and-publishing": "content-seo",
  "nonprofit-and-ngo": "virtual-assistant",
  "real-estate-and-property-management": "virtual-assistant",
  "saas-and-technology": "software-development",
  "startups-and-venture-backed": "software-development",
  "telecom-and-utilities": "software-development",
};

/** Map case study slugs → candidate category */
export const caseStudySlugToCategoryMap: Record<string, CandidateCategory> = {
  "media-remote-staffing": "content-seo",
  "remote-3d-rendering-experts": "design",
  "remote-compliance-support": "legal-compliance",
  "remote-crop-monitoring": "virtual-assistant",
  "remote-customer-service-agents": "customer-support",
  "remote-customer-support": "customer-support",
  "remote-cybersecurity-experts": "cybersecurity",
  "remote-data-analysis": "software-development",
  "remote-drafting-teams": "design",
  "remote-fashion-brand-staffing": "design",
  "remote-finance-accounting-staff": "finance-accounting",
  "remote-healthcare-compliance": "healthcare-rcm",
  "remote-hospitality-support-staff": "customer-support",
  "remote-hr-recruitment": "virtual-assistant",
  "remote-it-support-teams": "software-development",
  "remote-legal-experts": "legal-compliance",
  "remote-legal-staff": "legal-compliance",
  "remote-marketing-teams-for-seo-content": "digital-marketing",
  "remote-marketing-teams": "digital-marketing",
  "remote-medical-billing-coding-staff": "healthcare-rcm",
  "remote-moderation-compliance": "content-seo",
  "remote-operations-support-staff": "virtual-assistant",
  "remote-paralegals-for-case-preparation": "legal-compliance",
  "remote-research-analytics": "software-development",
  "remote-software-developers": "software-development",
  "remote-staffing-solution-for-geotechnical-consultancy": "design",
  "remote-staffing-solutions-for-education": "virtual-assistant",
  "remote-structural-engineering": "design",
  "scaling-a-boutique-investment-firm-with-remote-financial-talent": "finance-accounting",
  "virtual-healthcare-assistants": "healthcare-rcm",
};

/** Map blog categories → candidate categories */
export const blogCategoryToCandidateMap: Record<string, CandidateCategory> = {
  "remote-staffing": "virtual-assistant",
  outsourcing: "software-development",
  "hiring-guides": "software-development",
  "finance-accounting": "finance-accounting",
  technology: "software-development",
  "industry-insights": "virtual-assistant",
  "case-studies": "customer-support",
};
