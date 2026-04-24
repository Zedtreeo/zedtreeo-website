export type CandidateCategory =
  | "software-development"
  | "virtual-assistant"
  | "finance-accounting"
  | "digital-marketing"
  | "legal-compliance"
  | "healthcare-rcm"
  | "customer-support"
  | "cybersecurity"
  | "design"
  | "content-seo";

export type Candidate = {
  id: string;
  name: string;
  role: string;
  category: CandidateCategory;
  experience: string;
  rate: string;
  skills: string[];
  timezone: string;
  availability: "immediate" | "1-week" | "2-weeks";
  highlights: string;
  aiTools: string[];
};

export const candidateCategoryLabels: Record<CandidateCategory, string> = {
  "software-development": "Software Development",
  "virtual-assistant": "Virtual Assistant",
  "finance-accounting": "Finance & Accounting",
  "digital-marketing": "Digital Marketing",
  "legal-compliance": "Legal & Compliance",
  "healthcare-rcm": "Healthcare & RCM",
  "customer-support": "Customer Support",
  cybersecurity: "Cybersecurity & IT",
  design: "Graphic Design",
  "content-seo": "Content & SEO",
};

/* ─── Sample candidate profiles (anonymized) ─── */
export const candidates: Candidate[] = [
  {
    id: "dev-001",
    name: "Arjun S.",
    role: "Senior Full-Stack Developer",
    category: "software-development",
    experience: "7 years",
    rate: "$12/hr",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    timezone: "EST / GMT flexible",
    availability: "immediate",
    highlights: "Built SaaS platforms for 3 US startups. Expert in React + Node.js with CI/CD and cloud architecture. Led a 4-person dev team.",
    aiTools: ["GitHub Copilot", "Claude", "Cursor"],
  },
  {
    id: "dev-002",
    name: "Priya M.",
    role: "Mid-Level Full-Stack Developer",
    category: "software-development",
    experience: "4 years",
    rate: "$9/hr",
    skills: ["Next.js", "Python", "Django", "MongoDB", "Tailwind CSS", "Git"],
    timezone: "GMT / AEST flexible",
    availability: "immediate",
    highlights: "Specialized in Next.js + Python backends. Built 2 e-commerce platforms and a healthcare portal. Strong in API design.",
    aiTools: ["GitHub Copilot", "ChatGPT"],
  },
  {
    id: "dev-003",
    name: "Rahul K.",
    role: "DevOps Engineer",
    category: "software-development",
    experience: "5 years",
    rate: "$10/hr",
    skills: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "Linux"],
    timezone: "EST / GMT flexible",
    availability: "1-week",
    highlights: "AWS Solutions Architect certified. Managed infrastructure for 3 SaaS products. Reduced cloud costs by 35% for a fintech client.",
    aiTools: ["GitHub Copilot", "ChatGPT"],
  },
  {
    id: "va-001",
    name: "Sneha R.",
    role: "Executive Virtual Assistant",
    category: "virtual-assistant",
    experience: "5 years",
    rate: "$7/hr",
    skills: ["Calendar Management", "Email Management", "Travel Booking", "CRM", "Presentation Design", "Research"],
    timezone: "EST / PST flexible",
    availability: "immediate",
    highlights: "Supported 3 C-suite executives at US companies. Expert in Notion, Slack, and Google Workspace. Manages complex multi-timezone calendars.",
    aiTools: ["ChatGPT", "Claude", "Notion AI"],
  },
  {
    id: "va-002",
    name: "Kavitha P.",
    role: "General Virtual Assistant",
    category: "virtual-assistant",
    experience: "3 years",
    rate: "$5/hr",
    skills: ["Data Entry", "Email Support", "Social Media", "Google Workspace", "Spreadsheets", "Customer Follow-ups"],
    timezone: "Any timezone",
    availability: "immediate",
    highlights: "Handled admin operations for a US real estate agency and an e-commerce brand. Fast, accurate, and highly organized.",
    aiTools: ["ChatGPT", "Canva"],
  },
  {
    id: "fin-001",
    name: "Deepak V.",
    role: "Senior Bookkeeper / Accountant",
    category: "finance-accounting",
    experience: "8 years",
    rate: "$9/hr",
    skills: ["QuickBooks Online", "Xero", "Payroll", "Tax Prep", "AP/AR", "Financial Reporting"],
    timezone: "EST / GMT flexible",
    availability: "immediate",
    highlights: "Managed books for 15+ US small businesses. Expert in QuickBooks and Xero. Handled full-cycle accounting including month-end close and tax prep.",
    aiTools: ["ChatGPT", "Dext AI"],
  },
  {
    id: "fin-002",
    name: "Meera T.",
    role: "Bookkeeper",
    category: "finance-accounting",
    experience: "3 years",
    rate: "$6/hr",
    skills: ["QuickBooks Desktop", "Bank Reconciliation", "Invoice Processing", "Data Entry", "Bill.com", "Gusto"],
    timezone: "EST / CST flexible",
    availability: "1-week",
    highlights: "Specialized in QuickBooks for small businesses. Accurate reconciliation, AP/AR management, and payroll processing via Gusto.",
    aiTools: ["ChatGPT"],
  },
  {
    id: "mkt-001",
    name: "Vikram J.",
    role: "Senior Digital Marketer",
    category: "digital-marketing",
    experience: "6 years",
    rate: "$10/hr",
    skills: ["SEO", "Google Ads", "Facebook Ads", "Content Strategy", "Analytics", "Email Marketing"],
    timezone: "EST / GMT flexible",
    availability: "immediate",
    highlights: "Grew organic traffic 4x for a B2B SaaS company. Managed $50K+/month ad spend across Google and Meta. HubSpot certified.",
    aiTools: ["ChatGPT", "Jasper", "Surfer SEO"],
  },
  {
    id: "mkt-002",
    name: "Ananya D.",
    role: "Social Media Manager",
    category: "digital-marketing",
    experience: "4 years",
    rate: "$7/hr",
    skills: ["Instagram", "LinkedIn", "Content Creation", "Canva", "Hootsuite", "Community Management"],
    timezone: "Any timezone",
    availability: "immediate",
    highlights: "Managed social accounts for 8 brands across LinkedIn, Instagram, and Facebook. Grew a B2B LinkedIn page from 2K to 25K followers.",
    aiTools: ["ChatGPT", "Canva AI", "CapCut"],
  },
  {
    id: "leg-001",
    name: "Shalini N.",
    role: "Senior Paralegal",
    category: "legal-compliance",
    experience: "6 years",
    rate: "$9/hr",
    skills: ["Legal Research", "Contract Review", "E-Discovery", "Clio", "Westlaw", "Corporate Compliance"],
    timezone: "EST / PST flexible",
    availability: "1-week",
    highlights: "Supported 4 US law firms across corporate, real estate, and IP matters. Proficient in Clio, Westlaw, and LexisNexis.",
    aiTools: ["ChatGPT", "Claude"],
  },
  {
    id: "hc-001",
    name: "Rekha S.",
    role: "Medical Coder (CPC Certified)",
    category: "healthcare-rcm",
    experience: "5 years",
    rate: "$8/hr",
    skills: ["ICD-10", "CPT Coding", "Denial Management", "Epic", "Claims Submission", "HIPAA"],
    timezone: "EST / CST flexible",
    availability: "2-weeks",
    highlights: "CPC certified. Maintained 97% clean claim rate across cardiology and internal medicine. Experienced with Epic and Athenahealth.",
    aiTools: ["ChatGPT"],
  },
  {
    id: "cs-001",
    name: "Ravi L.",
    role: "Customer Support Specialist",
    category: "customer-support",
    experience: "4 years",
    rate: "$6/hr",
    skills: ["Zendesk", "Live Chat", "Phone Support", "Email Support", "Shopify", "Returns Processing"],
    timezone: "EST / GMT / AEST",
    availability: "immediate",
    highlights: "Handled 80+ tickets/day for a Shopify brand. CSAT score consistently above 95%. Proficient in Zendesk and Intercom.",
    aiTools: ["ChatGPT", "Zendesk AI"],
  },
  {
    id: "des-001",
    name: "Pooja G.",
    role: "Mid-Level Graphic Designer",
    category: "design",
    experience: "4 years",
    rate: "$7/hr",
    skills: ["Figma", "Photoshop", "Illustrator", "Brand Identity", "Social Media Graphics", "UI Design"],
    timezone: "EST / GMT flexible",
    availability: "immediate",
    highlights: "Created brand identities for 5 startups. Specializes in Figma-based UI design and social media content. Strong in brand systems.",
    aiTools: ["Midjourney", "Canva AI", "Adobe Firefly"],
  },
  {
    id: "seo-001",
    name: "Aditya B.",
    role: "SEO Specialist",
    category: "content-seo",
    experience: "5 years",
    rate: "$8/hr",
    skills: ["Technical SEO", "Ahrefs", "Surfer SEO", "Link Building", "Content Strategy", "Google Analytics 4"],
    timezone: "EST / GMT flexible",
    availability: "immediate",
    highlights: "Grew organic traffic from 5K to 80K/month for a SaaS client. Expert in technical audits, content strategy, and white-hat link building.",
    aiTools: ["ChatGPT", "Surfer SEO", "Clearscope"],
  },
  {
    id: "cw-001",
    name: "Nisha K.",
    role: "SEO Content Writer",
    category: "content-seo",
    experience: "4 years",
    rate: "$6/hr",
    skills: ["SEO Blogs", "Landing Pages", "Case Studies", "Email Copy", "WordPress", "Surfer SEO"],
    timezone: "Any timezone",
    availability: "immediate",
    highlights: "Produced 200+ SEO articles across B2B SaaS, fintech, and healthcare. Average 1,800-word articles ranking in top 10 within 3 months.",
    aiTools: ["ChatGPT", "Jasper", "Grammarly"],
  },
];

/* ─── Helpers ─── */

export function getCandidatesByCategory(category?: CandidateCategory): Candidate[] {
  if (!category) return candidates;
  return candidates.filter((c) => c.category === category);
}

export function searchCandidates(query: string): Candidate[] {
  const q = query.toLowerCase();
  return candidates.filter(
    (c) =>
      c.role.toLowerCase().includes(q) ||
      c.skills.some((s) => s.toLowerCase().includes(q)) ||
      c.highlights.toLowerCase().includes(q)
  );
}
