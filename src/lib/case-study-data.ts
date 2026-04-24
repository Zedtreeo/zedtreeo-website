import { readFileSync } from "fs";
import { join } from "path";

export type CaseStudyPage = {
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
    const filePath = join(process.cwd(), "src/lib/case-study-content", `${slug}.html`);
    return readFileSync(filePath, "utf-8");
  } catch {
    return `<p>Content for ${slug} is being prepared.</p>`;
  }
}

export const case_study_content_data: CaseStudyPage[] = [
  {
    slug: "media-remote-staffing",
    title: "70% Lower Creative Staffing Cost and 3× Content Output With a Remote Media Team",
    metaTitle: "70% Lower Creative Staffing Cost and 3× Content Output W | Z",
    metaDescription: "70% Lower Creative Staffing Cost and 3× Content Output With a Remote Media Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "70% Lower Creative Staffing Cost and 3× Content Output With ",
    startingRate: "$5/hr",
    content: loadContent("media-remote-staffing"),
  },
  {
    slug: "remote-3d-rendering-experts",
    title: "2× Rendering Throughput and 80% Lower Visualization Cost in One Quarter",
    metaTitle: "2× Rendering Throughput and 80% Lower Visualization Cost | Z",
    metaDescription: "2× Rendering Throughput and 80% Lower Visualization Cost in One Quarter. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "2× Rendering Throughput and 80% Lower Visualization Cost in ",
    startingRate: "$5/hr",
    content: loadContent("remote-3d-rendering-experts"),
  },
  {
    slug: "remote-compliance-support",
    title: "81% Fewer SLA Breaches and 75% Lower Compliance Cost With a Remote Compliance Pod",
    metaTitle: "81% Fewer SLA Breaches and 75% Lower Compliance Cost Wit | Z",
    metaDescription: "81% Fewer SLA Breaches and 75% Lower Compliance Cost With a Remote Compliance Pod. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "81% Fewer SLA Breaches and 75% Lower Compliance Cost With a ",
    startingRate: "$5/hr",
    content: loadContent("remote-compliance-support"),
  },
  {
    slug: "remote-crop-monitoring",
    title: "60% Lower Field Reporting Cost and 2.5× Seasonal Scaling With a Remote Agri-Data Team",
    metaTitle: "60% Lower Field Reporting Cost and 2.5× Seasonal Scaling | Z",
    metaDescription: "60% Lower Field Reporting Cost and 2.5× Seasonal Scaling With a Remote Agri-Data Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "60% Lower Field Reporting Cost and 2.5× Seasonal Scaling Wit",
    startingRate: "$5/hr",
    content: loadContent("remote-crop-monitoring"),
  },
  {
    slug: "remote-customer-service-agents",
    title: "45% Lower Wait Times and 85% Support Cost Reduction With a Remote Customer Service Team",
    metaTitle: "45% Lower Wait Times and 85% Support Cost Reduction With | Z",
    metaDescription: "45% Lower Wait Times and 85% Support Cost Reduction With a Remote Customer Service Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "45% Lower Wait Times and 85% Support Cost Reduction With a R",
    startingRate: "$5/hr",
    content: loadContent("remote-customer-service-agents"),
  },
  {
    slug: "remote-customer-support",
    title: "CSAT +24 Points and 59% Lower Ticket Cost With a Remote CX Team",
    metaTitle: "CSAT +24 Points and 59% Lower Ticket Cost With a Remote  | Z",
    metaDescription: "CSAT +24 Points and 59% Lower Ticket Cost With a Remote CX Team. Starting from $35/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "CSAT +24 Points and 59% Lower Ticket Cost With a Remote CX T",
    startingRate: "$35/hr",
    content: loadContent("remote-customer-support"),
  },
  {
    slug: "remote-cybersecurity-experts",
    title: "24/7 SOC Coverage and 68% Lower MTTR With a Remote Cybersecurity Team",
    metaTitle: "24/7 SOC Coverage and 68% Lower MTTR With a Remote Cyber | Z",
    metaDescription: "24/7 SOC Coverage and 68% Lower MTTR With a Remote Cybersecurity Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "24/7 SOC Coverage and 68% Lower MTTR With a Remote Cybersecu",
    startingRate: "$5/hr",
    content: loadContent("remote-cybersecurity-experts"),
  },
  {
    slug: "remote-data-analysis",
    title: "3× Reporting Velocity and 64% Lower Analytics Cost",
    metaTitle: "3× Reporting Velocity and 64% Lower Analytics Cost | Zedtree",
    metaDescription: "3× Reporting Velocity and 64% Lower Analytics Cost. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "3× Reporting Velocity and 64% Lower Analytics Cost",
    startingRate: "$5/hr",
    content: loadContent("remote-data-analysis"),
  },
  {
    slug: "remote-drafting-teams",
    title: "40% Faster Drawings and 85% Drafting Cost Savings With a Remote Architecture Drafting Team",
    metaTitle: "40% Faster Drawings and 85% Drafting Cost Savings With a | Z",
    metaDescription: "40% Faster Drawings and 85% Drafting Cost Savings With a Remote Architecture Drafting Team. Starting from $145/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "40% Faster Drawings and 85% Drafting Cost Savings With a Rem",
    startingRate: "$145/hr",
    content: loadContent("remote-drafting-teams"),
  },
  {
    slug: "remote-fashion-brand-staffing",
    title: "3× Faster Campaign Launches and 80% Lower Staffing Costs With a Remote Fashion Brand Team",
    metaTitle: "3× Faster Campaign Launches and 80% Lower Staffing Costs | Z",
    metaDescription: "3× Faster Campaign Launches and 80% Lower Staffing Costs With a Remote Fashion Brand Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "3× Faster Campaign Launches and 80% Lower Staffing Costs Wit",
    startingRate: "$5/hr",
    content: loadContent("remote-fashion-brand-staffing"),
  },
  {
    slug: "remote-finance-accounting-staff",
    title: "Month-End Close Compressed From 12 Days to 4 With a Remote Finance Team",
    metaTitle: "Month-End Close Compressed From 12 Days to 4 With a Remo | Z",
    metaDescription: "Month-End Close Compressed From 12 Days to 4 With a Remote Finance Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "Month-End Close Compressed From 12 Days to 4 With a Remote F",
    startingRate: "$5/hr",
    content: loadContent("remote-finance-accounting-staff"),
  },
  {
    slug: "remote-healthcare-compliance",
    title: "70% Faster HIPAA Compliance Turnaround With a Dedicated Remote Healthcare Team",
    metaTitle: "70% Faster HIPAA Compliance Turnaround With a Dedicated  | Z",
    metaDescription: "70% Faster HIPAA Compliance Turnaround With a Dedicated Remote Healthcare Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "70% Faster HIPAA Compliance Turnaround With a Dedicated Remo",
    startingRate: "$5/hr",
    content: loadContent("remote-healthcare-compliance"),
  },
  {
    slug: "remote-hospitality-support-staff",
    title: "40% Faster Booking Resolution and +28 NPS With a Remote Hospitality Ops Team",
    metaTitle: "40% Faster Booking Resolution and +28 NPS With a Remote  | Z",
    metaDescription: "40% Faster Booking Resolution and +28 NPS With a Remote Hospitality Ops Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "40% Faster Booking Resolution and +28 NPS With a Remote Hosp",
    startingRate: "$5/hr",
    content: loadContent("remote-hospitality-support-staff"),
  },
  {
    slug: "remote-hr-recruitment",
    title: "55% Shorter Time-to-Fill and 3x Candidate Pipeline With a Remote HR & Recruitment Team",
    metaTitle: "55% Shorter Time-to-Fill and 3x Candidate Pipeline With  | Z",
    metaDescription: "55% Shorter Time-to-Fill and 3x Candidate Pipeline With a Remote HR & Recruitment Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "55% Shorter Time-to-Fill and 3x Candidate Pipeline With a Re",
    startingRate: "$5/hr",
    content: loadContent("remote-hr-recruitment"),
  },
  {
    slug: "remote-it-support-teams",
    title: "24/7 IT Support Coverage With 71% Lower Operating Cost",
    metaTitle: "24/7 IT Support Coverage With 71% Lower Operating Cost | Zed",
    metaDescription: "24/7 IT Support Coverage With 71% Lower Operating Cost. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "24/7 IT Support Coverage With 71% Lower Operating Cost",
    startingRate: "$5/hr",
    content: loadContent("remote-it-support-teams"),
  },
  {
    slug: "remote-legal-experts",
    title: "3× Matter Throughput and 40% Lower Partner Non-Billable Hours",
    metaTitle: "3× Matter Throughput and 40% Lower Partner Non-Billable  | Z",
    metaDescription: "3× Matter Throughput and 40% Lower Partner Non-Billable Hours. Starting from $650/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "3× Matter Throughput and 40% Lower Partner Non-Billable Hour",
    startingRate: "$650/hr",
    content: loadContent("remote-legal-experts"),
  },
  {
    slug: "remote-legal-staff",
    title: "62% Faster Contract Review and 40% More Billable Hours With a Remote Legal Support Team",
    metaTitle: "62% Faster Contract Review and 40% More Billable Hours W | Z",
    metaDescription: "62% Faster Contract Review and 40% More Billable Hours With a Remote Legal Support Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "62% Faster Contract Review and 40% More Billable Hours With ",
    startingRate: "$5/hr",
    content: loadContent("remote-legal-staff"),
  },
  {
    slug: "remote-marketing-teams-for-seo-content",
    title: "Organic Leads Up 214% With a Dedicated Remote SEO & Content Team",
    metaTitle: "Organic Leads Up 214% With a Dedicated Remote SEO & Cont | Z",
    metaDescription: "Organic Leads Up 214% With a Dedicated Remote SEO & Content Team. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "Organic Leads Up 214% With a Dedicated Remote SEO & Content ",
    startingRate: "$5/hr",
    content: loadContent("remote-marketing-teams-for-seo-content"),
  },
  {
    slug: "remote-marketing-teams",
    title: "4× Campaign Throughput and 63% Lower Creative-Production Cost",
    metaTitle: "4× Campaign Throughput and 63% Lower Creative-Production | Z",
    metaDescription: "4× Campaign Throughput and 63% Lower Creative-Production Cost. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "4× Campaign Throughput and 63% Lower Creative-Production Cos",
    startingRate: "$5/hr",
    content: loadContent("remote-marketing-teams"),
  },
  {
    slug: "remote-medical-billing-coding-staff",
    title: "First-Pass Denial Rate Cut 45% and AR Turnover 22 Days Faster",
    metaTitle: "First-Pass Denial Rate Cut 45% and AR Turnover 22 Days F | Z",
    metaDescription: "First-Pass Denial Rate Cut 45% and AR Turnover 22 Days Faster. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "First-Pass Denial Rate Cut 45% and AR Turnover 22 Days Faste",
    startingRate: "$5/hr",
    content: loadContent("remote-medical-billing-coding-staff"),
  },
  {
    slug: "remote-moderation-compliance",
    title: "94% Harmful Content Removed Within SLA and 83% Cost Savings With a Remote Content Moderation Pod",
    metaTitle: "94% Harmful Content Removed Within SLA and 83% Cost Savi | Z",
    metaDescription: "94% Harmful Content Removed Within SLA and 83% Cost Savings With a Remote Content Moderation Pod. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "94% Harmful Content Removed Within SLA and 83% Cost Savings ",
    startingRate: "$5/hr",
    content: loadContent("remote-moderation-compliance"),
  },
  {
    slug: "remote-operations-support-staff",
    title: "35% Fewer Fulfillment Errors and 79% Cost Savings With a Remote E-Commerce Operations Pod",
    metaTitle: "35% Fewer Fulfillment Errors and 79% Cost Savings With a | Z",
    metaDescription: "35% Fewer Fulfillment Errors and 79% Cost Savings With a Remote E-Commerce Operations Pod. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "35% Fewer Fulfillment Errors and 79% Cost Savings With a Rem",
    startingRate: "$5/hr",
    content: loadContent("remote-operations-support-staff"),
  },
  {
    slug: "remote-paralegals-for-case-preparation",
    title: "Case Prep Cycle Cut 62% With a Remote Paralegal Team",
    metaTitle: "Case Prep Cycle Cut 62% With a Remote Paralegal Team | Zedtr",
    metaDescription: "Case Prep Cycle Cut 62% With a Remote Paralegal Team. Starting from $120/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "Case Prep Cycle Cut 62% With a Remote Paralegal Team",
    startingRate: "$120/hr",
    content: loadContent("remote-paralegals-for-case-preparation"),
  },
  {
    slug: "remote-research-analytics",
    title: "3x Research Throughput and 76% Cost Savings With a Remote Consulting Research & Analytics Pod",
    metaTitle: "3x Research Throughput and 76% Cost Savings With a Remot | Z",
    metaDescription: "3x Research Throughput and 76% Cost Savings With a Remote Consulting Research & Analytics Pod. Starting from $185/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "3x Research Throughput and 76% Cost Savings With a Remote Co",
    startingRate: "$185/hr",
    content: loadContent("remote-research-analytics"),
  },
  {
    slug: "remote-software-developers",
    title: "2.4× Engineering Velocity Without Inflating Burn",
    metaTitle: "2.4× Engineering Velocity Without Inflating Burn | Zedtreeo",
    metaDescription: "2.4× Engineering Velocity Without Inflating Burn. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "2.4× Engineering Velocity Without Inflating Burn",
    startingRate: "$5/hr",
    content: loadContent("remote-software-developers"),
  },
  {
    slug: "remote-staffing-solution-for-geotechnical-consultancy",
    title: "50% Faster Report Turnaround and 3x Project Throughput With a Remote Geotechnical Analysis Pod",
    metaTitle: "50% Faster Report Turnaround and 3x Project Throughput W | Z",
    metaDescription: "50% Faster Report Turnaround and 3x Project Throughput With a Remote Geotechnical Analysis Pod. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "50% Faster Report Turnaround and 3x Project Throughput With ",
    startingRate: "$5/hr",
    content: loadContent("remote-staffing-solution-for-geotechnical-consultancy"),
  },
  {
    slug: "remote-staffing-solutions-for-education",
    title: "2x Course Launch Velocity and 22-Point NPS Improvement With a Remote Education Operations Pod",
    metaTitle: "2x Course Launch Velocity and 22-Point NPS Improvement W | Z",
    metaDescription: "2x Course Launch Velocity and 22-Point NPS Improvement With a Remote Education Operations Pod. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "2x Course Launch Velocity and 22-Point NPS Improvement With ",
    startingRate: "$5/hr",
    content: loadContent("remote-staffing-solutions-for-education"),
  },
  {
    slug: "remote-structural-engineering",
    title: "45% Faster Drawing Delivery and 97% First-Submission Pass Rate With a Remote Structural Engineering Pod",
    metaTitle: "45% Faster Drawing Delivery and 97% First-Submission Pas | Z",
    metaDescription: "45% Faster Drawing Delivery and 97% First-Submission Pass Rate With a Remote Structural Engineering Pod. Starting from $5/hr. Pre-vetted talent, free 5-day",
    focusKeyword: "45% Faster Drawing Delivery and 97% First-Submission Pass Ra",
    startingRate: "$5/hr",
    content: loadContent("remote-structural-engineering"),
  },
  {
    slug: "scaling-a-boutique-investment-firm-with-remote-financial-talent",
    title: "3x Deal Screening Throughput and 74% Cost Savings With a Remote Investment Operations Pod",
    metaTitle: "3x Deal Screening Throughput and 74% Cost Savings With a | Z",
    metaDescription: "3x Deal Screening Throughput and 74% Cost Savings With a Remote Investment Operations Pod. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "3x Deal Screening Throughput and 74% Cost Savings With a Rem",
    startingRate: "$5/hr",
    content: loadContent("scaling-a-boutique-investment-firm-with-remote-financial-talent"),
  },
  {
    slug: "virtual-healthcare-assistants",
    title: "40% Shorter Patient Wait Times and 92% Verification Accuracy With a Remote Healthcare Admin Pod",
    metaTitle: "40% Shorter Patient Wait Times and 92% Verification Accu | Z",
    metaDescription: "40% Shorter Patient Wait Times and 92% Verification Accuracy With a Remote Healthcare Admin Pod. Starting from $5/hr. Pre-vetted talent, free 5-day trial.",
    focusKeyword: "40% Shorter Patient Wait Times and 92% Verification Accuracy",
    startingRate: "$5/hr",
    content: loadContent("virtual-healthcare-assistants"),
  },
];

export function getCaseStudyPage(slug: string): CaseStudyPage | undefined {
  return case_study_content_data.find((p) => p.slug === slug);
}

export function getAllCaseStudyPageSlugs(): string[] {
  return case_study_content_data.map((p) => p.slug);
}
