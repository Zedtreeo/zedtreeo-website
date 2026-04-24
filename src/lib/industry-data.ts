import { readFileSync } from "fs";
import { join } from "path";

export type IndustryPage = {
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
    const filePath = join(process.cwd(), "src/lib/industry-content", `${slug}.html`);
    return readFileSync(filePath, "utf-8");
  } catch {
    return `<p>Content for ${slug} is being prepared.</p>`;
  }
}

export const industry_content_data: IndustryPage[] = [
  {
    slug: "agriculture-and-agtech",
    title: "Remote Staffing for Agriculture & AgTech — From $5/hour",
    metaTitle: "Remote Staffing for Agriculture & AgTech — From $5/hour | Ze",
    metaDescription: "Dedicated GIS analysts, agronomy admins, crop data annotation specialists, compliance coordinators, farm operations support and AgTech customer success sta",
    focusKeyword: "Remote Staffing for Agriculture & AgTech — From $5/hour",
    startingRate: "$5/hr",
    content: loadContent("agriculture-and-agtech"),
  },
  {
    slug: "architecture-and-engineering",
    title: "Remote Staffing for Architecture & Engineering — From $7/hour",
    metaTitle: "Remote Staffing for Architecture & Engineering — From $7 | Z",
    metaDescription: "Dedicated CAD drafters, Revit BIM modelers, structural and MEP engineers, construction document specialists and estimators embedded with your firm — starti",
    focusKeyword: "Remote Staffing for Architecture & Engineering — From $7/hou",
    startingRate: "$7/hr",
    content: loadContent("architecture-and-engineering"),
  },
  {
    slug: "automotive-and-transportation",
    title: "Remote Staffing for Automotive & Transportation — From $6/hour",
    metaTitle: "Remote Staffing for Automotive & Transportation — From $ | Z",
    metaDescription: "Dedicated fleet operations, dispatch coordinators, parts specialists, dealership back-office staff and logistics support embedded with your team — starting",
    focusKeyword: "Remote Staffing for Automotive & Transportation — From $6/ho",
    startingRate: "$6/hr",
    content: loadContent("automotive-and-transportation"),
  },
  {
    slug: "construction-and-contracting",
    title: "Remote Staffing for Construction & Contracting — From $7/hour",
    metaTitle: "Remote Staffing for Construction & Contracting — From $7 | Z",
    metaDescription: "Dedicated estimators, project management support, submittal & RFI coordinators, schedulers, document controllers, change order specialists and BIM coor",
    focusKeyword: "Remote Staffing for Construction & Contracting — From $7/hou",
    startingRate: "$7/hr",
    content: loadContent("construction-and-contracting"),
  },
  {
    slug: "digital-marketing-and-content-creation",
    title: "Remote Staffing for Digital Marketing Agencies & Content Teams — From $6/hour",
    metaTitle: "Remote Staffing for Digital Marketing Agencies & Content | Z",
    metaDescription: "Dedicated SEO writers, PPC managers, paid social specialists, video editors, graphic designers, CRO analysts and full-stack content pods embedded with your",
    focusKeyword: "Remote Staffing for Digital Marketing Agencies & Content Tea",
    startingRate: "$6/hr",
    content: loadContent("digital-marketing-and-content-creation"),
  },
  {
    slug: "e-commerce-and-retail",
    title: "Remote Staffing for E-Commerce & Retail — From $5/hour",
    metaTitle: "Remote Staffing for E-Commerce & Retail — From $5/hour | Zed",
    metaDescription: "Dedicated listing and catalog managers, Shopify and Amazon specialists, customer service agents, returns and order ops staff embedded with your e-commerce ",
    focusKeyword: "Remote Staffing for E-Commerce & Retail — From $5/hour",
    startingRate: "$5/hr",
    content: loadContent("e-commerce-and-retail"),
  },
  {
    slug: "education-e-learning",
    title: "Remote Staffing for Education & E-Learning — From $5/hour",
    metaTitle: "Remote Staffing for Education & E-Learning — From $5/hou | Z",
    metaDescription: "Dedicated instructional designers, LMS administrators, online tutors, course content writers, enrollment VAs and student support staff embedded with your i",
    focusKeyword: "Remote Staffing for Education & E-Learning — From $5/hour",
    startingRate: "$5/hr",
    content: loadContent("education-e-learning"),
  },
  {
    slug: "fashion-beauty",
    title: "Remote Staffing for Fashion & Beauty Brands — From $5/hour",
    metaTitle: "Remote Staffing for Fashion & Beauty Brands — From $5/ho | Z",
    metaDescription: "Dedicated product listing staff, catalog managers, merchandisers, tech pack designers, photo retouchers, customer experience agents and influencer coordina",
    focusKeyword: "Remote Staffing for Fashion & Beauty Brands — From $5/hour",
    startingRate: "$5/hr",
    content: loadContent("fashion-beauty"),
  },
  {
    slug: "finance-and-accounting",
    title: "Remote Staffing for Finance & Accounting — From $7/hour",
    metaTitle: "Remote Staffing for Finance & Accounting — From $7/hour | Ze",
    metaDescription: "Dedicated bookkeepers, AR/AP specialists, staff accountants, controllers, financial analysts and FP&A support embedded with your finance team — startin",
    focusKeyword: "Remote Staffing for Finance & Accounting — From $7/hour",
    startingRate: "$7/hr",
    content: loadContent("finance-and-accounting"),
  },
  {
    slug: "healthcare-and-telemedicine",
    title: "Remote Staffing for Healthcare & Telemedicine — From $6/hour",
    metaTitle: "Remote Staffing for Healthcare & Telemedicine — From $6/ | Z",
    metaDescription: "HIPAA-trained medical virtual assistants, coders, billers, RCM specialists and telehealth support staff embedded with your practice — starting from $6 per ",
    focusKeyword: "Remote Staffing for Healthcare & Telemedicine — From $6/hour",
    startingRate: "$6/hr",
    content: loadContent("healthcare-and-telemedicine"),
  },
  {
    slug: "hospitality-tourism",
    title: "Remote Staffing for Hospitality & Tourism — From $5/hour",
    metaTitle: "Remote Staffing for Hospitality & Tourism — From $5/hour | Z",
    metaDescription: "Dedicated reservations agents, guest services staff, revenue management analysts, OTA specialists, concierge VAs and corporate travel coordinators embedded",
    focusKeyword: "Remote Staffing for Hospitality & Tourism — From $5/hour",
    startingRate: "$5/hr",
    content: loadContent("hospitality-tourism"),
  },
  {
    slug: "human-resources-and-recruitment",
    title: "Remote Staffing for HR & Recruitment Firms — From $6/hour",
    metaTitle: "Remote Staffing for HR & Recruitment Firms — From $6/hou | Z",
    metaDescription: "Dedicated recruiters, candidate sourcers, HR generalists, payroll and benefits admin, onboarding specialists and HRIS coordinators embedded with your staff",
    focusKeyword: "Remote Staffing for HR & Recruitment Firms — From $6/hour",
    startingRate: "$6/hr",
    content: loadContent("human-resources-and-recruitment"),
  },
  {
    slug: "information-technology",
    title: "Remote Staffing for Information Technology — From $8/hour",
    metaTitle: "Remote Staffing for Information Technology — From $8/hou | Z",
    metaDescription: "Dedicated IT support engineers, sysadmins, junior and mid-level developers, DevOps, cloud, cybersecurity and QA staff embedded with your technology team — ",
    focusKeyword: "Remote Staffing for Information Technology — From $8/hour",
    startingRate: "$8/hr",
    content: loadContent("information-technology"),
  },
  {
    slug: "insurance",
    title: "Remote Staffing for Insurance — From $7/hour",
    metaTitle: "Remote Staffing for Insurance — From $7/hour | Zedtreeo",
    metaDescription: "Dedicated underwriting assistants, claims processors, policy admin staff, agency CSRs, compliance analysts and actuarial support embedded with your carrier",
    focusKeyword: "Remote Staffing for Insurance — From $7/hour",
    startingRate: "$7/hr",
    content: loadContent("insurance"),
  },
  {
    slug: "law",
    title: "Remote Staffing for Law Firms — Paralegals & Legal VAs From $7/hour",
    metaTitle: "Remote Staffing for Law Firms — Paralegals & Legal VAs F | Z",
    metaDescription: "Dedicated paralegals, legal virtual assistants, probate specialists, case prep researchers and document review support embedded with your firm — starting f",
    focusKeyword: "Remote Staffing for Law Firms — Paralegals & Legal VAs From ",
    startingRate: "$7/hr",
    content: loadContent("law"),
  },
  {
    slug: "logistics-supply-chain-and-freight",
    title: "Remote Staffing for Logistics, Supply Chain & Freight — From $6/hour",
    metaTitle: "Remote Staffing for Logistics, Supply Chain & Freight —  | Z",
    metaDescription: "Dedicated dispatchers, freight brokers, 3PL operations coordinators, track-and-trace specialists, customs & import/export admins, warehouse admin and s",
    focusKeyword: "Remote Staffing for Logistics, Supply Chain & Freight — From",
    startingRate: "$6/hr",
    content: loadContent("logistics-supply-chain-and-freight"),
  },
  {
    slug: "manufacturing-and-industrial",
    title: "Remote Staffing for Manufacturing & Industrial — From $6/hour",
    metaTitle: "Remote Staffing for Manufacturing & Industrial — From $6 | Z",
    metaDescription: "Dedicated supply chain analysts, production admins, QA/QC documentation specialists, purchasing assistants, ERP operators and industrial engineers embedded",
    focusKeyword: "Remote Staffing for Manufacturing & Industrial — From $6/hou",
    startingRate: "$6/hr",
    content: loadContent("manufacturing-and-industrial"),
  },
  {
    slug: "marketing-advertising",
    title: "Scale Your Marketing & Advertising Team Without Scaling Your Payroll",
    metaTitle: "Scale Your Marketing & Advertising Team Without Scaling  | Z",
    metaDescription: "Scale Your Marketing & Advertising Team Without Scaling Your Payroll. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "Scale Your Marketing & Advertising Team Without Scaling Your",
    startingRate: "$5/hr",
    content: loadContent("marketing-advertising"),
  },
  {
    slug: "marketing-and-advertising",
    title: "Remote Staffing for Marketing & Advertising — From $5/hour",
    metaTitle: "Remote Staffing for Marketing & Advertising — From $5/ho | Z",
    metaDescription: "Dedicated content writers, SEO specialists, PPC managers, social media executives, email marketers and creative designers embedded with your marketing team",
    focusKeyword: "Remote Staffing for Marketing & Advertising — From $5/hour",
    startingRate: "$5/hr",
    content: loadContent("marketing-and-advertising"),
  },
  {
    slug: "media-entertainment-and-publishing",
    title: "Remote Staffing for Media, Entertainment & Publishing — From $6/hour",
    metaTitle: "Remote Staffing for Media, Entertainment & Publishing —  | Z",
    metaDescription: "Dedicated video editors, post-production coordinators, rights & clearances staff, editorial assistants, content ops, subtitlers and trafficking admin e",
    focusKeyword: "Remote Staffing for Media, Entertainment & Publishing — From",
    startingRate: "$6/hr",
    content: loadContent("media-entertainment-and-publishing"),
  },
  {
    slug: "nonprofit-and-ngo",
    title: "Remote Staffing for Nonprofits & NGOs — From $5/hour",
    metaTitle: "Remote Staffing for Nonprofits & NGOs — From $5/hour | Zedtr",
    metaDescription: "Dedicated grant writers, donor operations specialists, program admins, fundraising coordinators, communications staff and volunteer managers embedded with ",
    focusKeyword: "Remote Staffing for Nonprofits & NGOs — From $5/hour",
    startingRate: "$5/hr",
    content: loadContent("nonprofit-and-ngo"),
  },
  {
    slug: "real-estate-and-property-management",
    title: "Remote Staffing for Real Estate & Property Management — From $5/hour",
    metaTitle: "Remote Staffing for Real Estate & Property Management —  | Z",
    metaDescription: "Dedicated leasing admins, listing coordinators, transaction coordinators, property management back-office and tenant support staff embedded with your team ",
    focusKeyword: "Remote Staffing for Real Estate & Property Management — From",
    startingRate: "$5/hr",
    content: loadContent("real-estate-and-property-management"),
  },
  {
    slug: "saas-and-technology",
    title: "Remote Staffing for SaaS & Technology Companies — From $8/hour",
    metaTitle: "Remote Staffing for SaaS & Technology Companies — From $ | Z",
    metaDescription: "Dedicated customer success managers, customer support reps, onboarding specialists, SDRs, BDRs, RevOps analysts, implementation consultants and DevOps supp",
    focusKeyword: "Remote Staffing for SaaS & Technology Companies — From $8/ho",
    startingRate: "$8/hr",
    content: loadContent("saas-and-technology"),
  },
  {
    slug: "startups-and-venture-backed",
    title: "Remote Staffing for Startups & Venture-Backed Companies — From $6/hour",
    metaTitle: "Remote Staffing for Startups & Venture-Backed Companies  | Z",
    metaDescription: "Dedicated full-stack operators, executive assistants, customer support, SDRs, marketing ops, finance admin and GTM generalists embedded with your pre-seed ",
    focusKeyword: "Remote Staffing for Startups & Venture-Backed Companies — Fr",
    startingRate: "$6/hr",
    content: loadContent("startups-and-venture-backed"),
  },
  {
    slug: "telecom-and-utilities",
    title: "Remote Staffing for Telecom & Utilities — From $6/hour",
    metaTitle: "Remote Staffing for Telecom & Utilities — From $6/hour | Zed",
    metaDescription: "Dedicated BSS/OSS admins, customer ops reps, NOC tier 1–2 support, field dispatchers, billing analysts and regulatory compliance staff embedded with your M",
    focusKeyword: "Remote Staffing for Telecom & Utilities — From $6/hour",
    startingRate: "$6/hr",
    content: loadContent("telecom-and-utilities"),
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industry_content_data.find((p) => p.slug === slug);
}

export function getAllIndustryPageSlugs(): string[] {
  return industry_content_data.map((p) => p.slug);
}
