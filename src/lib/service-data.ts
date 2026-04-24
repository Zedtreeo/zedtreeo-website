import { readFileSync } from "fs";
import { join } from "path";

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  startingRate: string;
  content: string;
};

function loadContent(slug: string): string {
  try {
    const filePath = join(process.cwd(), "src/lib/service-content", `${slug}.html`);
    return readFileSync(filePath, "utf-8");
  } catch {
    return `<p>Content for ${slug} is being prepared.</p>`;
  }
}

export const service_content_data: ServicePage[] = [
  {
    slug: "architecture-engineering",
    title: "Hire Remote Architecture & Engineering Staff — Without the Overhead",
    metaTitle: "Hire Remote Architecture & Engineering Staff — Without t | Z",
    metaDescription: "Vetted CAD drafters, BIM modelers, structural engineers and MEP designers embedded with your firm — starting from $7 per hour, with a 48-hour shortlist and",
    focusKeyword: "Hire Remote Architecture & Engineering Staff — Without the O",
    startingRate: "$75/hr",
    content: loadContent("architecture-engineering"),
  },
  {
    slug: "hire-remote-administrative-and-assistant",
    title: "Hire Remote Virtual Assistants & Administrative Staff From $5/hr",
    metaTitle: "Hire Remote Virtual Assistants & Administrative Staff Fr | Z",
    metaDescription: "Vetted virtual assistants, executive assistants, admin coordinators and ops support embedded with your team — starting from $5 per hour, with a 48-hour sho",
    focusKeyword: "Hire Remote Virtual Assistants & Administrative Staff From $",
    startingRate: "$5/hr",
    content: loadContent("hire-remote-administrative-and-assistant"),
  },
  {
    slug: "hire-remote-customer-support",
    title: "Hire Remote Customer Support Staff — 24/7 Coverage From $5/hr",
    metaTitle: "Hire Remote Customer Support Staff — 24/7 Coverage From  | Z",
    metaDescription: "Vetted customer support agents, chat specialists, tier-1/tier-2 technical support and help desk staff embedded with your brand — starting from $5 per hour,",
    focusKeyword: "Hire Remote Customer Support Staff — 24/7 Coverage From $5/h",
    startingRate: "$5/hr",
    content: loadContent("hire-remote-customer-support"),
  },
  {
    slug: "hire-remote-designers",
    title: "Hire Remote Designers — UI/UX, Graphic & Motion From $6/hr",
    metaTitle: "Hire Remote Designers — UI/UX, Graphic & Motion From $6/ | Z",
    metaDescription: "Vetted UI/UX designers, brand and graphic designers, motion specialists and design-ops leads embedded with your team — starting from $6 per hour, with a 48",
    focusKeyword: "Hire Remote Designers — UI/UX, Graphic & Motion From $6/hr",
    startingRate: "$6/hr",
    content: loadContent("hire-remote-designers"),
  },
  {
    slug: "hire-remote-digital-marketing-staff",
    title: "Hire Remote Digital Marketing Staff — SEO, PPC, Content & Social From $6/hr",
    metaTitle: "Hire Remote Digital Marketing Staff — SEO, PPC, Content  | Z",
    metaDescription: "Vetted SEO specialists, PPC buyers, content writers, social managers and email marketers embedded with your brand — starting from $6 per hour, with a 48-ho",
    focusKeyword: "Hire Remote Digital Marketing Staff — SEO, PPC, Content & So",
    startingRate: "$6/hr",
    content: loadContent("hire-remote-digital-marketing-staff"),
  },
  {
    slug: "hire-remote-finance-accounting-staff",
    title: "Hire Remote Finance & Accounting Staff — Bookkeepers, AP/AR & Analysts From $7/hr",
    metaTitle: "Hire Remote Finance & Accounting Staff — Bookkeepers, AP | Z",
    metaDescription: "Vetted bookkeepers, AP/AR specialists, accountants, financial analysts and controllers embedded with your finance team — starting from $7 per hour, with a ",
    focusKeyword: "Hire Remote Finance & Accounting Staff — Bookkeepers, AP/AR ",
    startingRate: "$7/hr",
    content: loadContent("hire-remote-finance-accounting-staff"),
  },
  {
    slug: "hire-remote-hr-and-recruitment-staff",
    title: "Hire Remote HR & Recruitment Staff From $6/hr",
    metaTitle: "Hire Remote HR & Recruitment Staff From $6/hr | Zedtreeo",
    metaDescription: "Vetted recruiters, sourcers, HR operations specialists and onboarding coordinators embedded with your team — starting from $6 per hour, with a 48-hour shor",
    focusKeyword: "Hire Remote HR & Recruitment Staff From $6/hr",
    startingRate: "$6/hr",
    content: loadContent("hire-remote-hr-and-recruitment-staff"),
  },
  {
    slug: "hire-remote-it-staff",
    title: "Hire Remote IT Staff — Developers, DevOps & Cloud Engineers From $9/hr",
    metaTitle: "Hire Remote IT Staff — Developers, DevOps & Cloud Engine | Z",
    metaDescription: "Vetted full-stack developers, DevOps engineers, cloud architects and QA automation specialists embedded with your team — starting from $9 per hour, with a ",
    focusKeyword: "Hire Remote IT Staff — Developers, DevOps & Cloud Engineers ",
    startingRate: "$9/hr",
    content: loadContent("hire-remote-it-staff"),
  },
  {
    slug: "hire-remote-legal-staff",
    title: "Hire Remote Legal Staff — Paralegals, Contract Reviewers & Doc Review From $8/hr",
    metaTitle: "Hire Remote Legal Staff — Paralegals, Contract Reviewers | Z",
    metaDescription: "Vetted paralegals, legal assistants, contract reviewers, e-discovery and document review specialists embedded with your firm or in-house team — starting fr",
    focusKeyword: "Hire Remote Legal Staff — Paralegals, Contract Reviewers & D",
    startingRate: "$8/hr",
    content: loadContent("hire-remote-legal-staff"),
  },
  {
    slug: "hire-remote-medical-staff",
    title: "Hire Remote Medical Staff — Billers, Coders & Virtual Assistants From $7/hr",
    metaTitle: "Hire Remote Medical Staff — Billers, Coders & Virtual As | Z",
    metaDescription: "Vetted medical billers, coders, virtual medical assistants, prior authorization and claims specialists embedded with your practice — starting from $7 per h",
    focusKeyword: "Hire Remote Medical Staff — Billers, Coders & Virtual Assist",
    startingRate: "$7/hr",
    content: loadContent("hire-remote-medical-staff"),
  },
  {
    slug: "hire-remote-research-analytics-staff",
    title: "Hire Remote Research & Analytics Staff From $7/hr",
    metaTitle: "Hire Remote Research & Analytics Staff From $7/hr | Zedtreeo",
    metaDescription: "Vetted data analysts, BI engineers, market research analysts and insights specialists embedded with your team — starting from $7 per hour, with a 48-hour s",
    focusKeyword: "Hire Remote Research & Analytics Staff From $7/hr",
    startingRate: "$7/hr",
    content: loadContent("hire-remote-research-analytics-staff"),
  },
  {
    slug: "quality-assurance-and-testing",
    title: "Hire Remote QA & Testing Engineers From $8/hr",
    metaTitle: "Hire Remote QA & Testing Engineers From $8/hr | Zedtreeo",
    metaDescription: "Vetted QA automation engineers, manual testers, SDETs, performance engineers and test leads embedded with your team — starting from $8 per hour, with a 48-",
    focusKeyword: "Hire Remote QA & Testing Engineers From $8/hr",
    startingRate: "$8/hr",
    content: loadContent("quality-assurance-and-testing"),
  },
  {
    slug: "sales-and-business-development",
    title: "Hire Remote Sales & Business Development Staff From $6/hr",
    metaTitle: "Hire Remote Sales & Business Development Staff From $6/h | Z",
    metaDescription: "Vetted SDRs, BDRs, account managers, sales operations analysts and revenue support embedded with your GTM team — starting from $6 per hour, with a 48-hour ",
    focusKeyword: "Hire Remote Sales & Business Development Staff From $6/hr",
    startingRate: "$6/hr",
    content: loadContent("sales-and-business-development"),
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return service_content_data.find((p) => p.slug === slug);
}

export function getAllServicePageSlugs(): string[] {
  return service_content_data.map((p) => p.slug);
}
