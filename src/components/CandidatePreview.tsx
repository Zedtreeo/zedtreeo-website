"use client";

import { useMemo, useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  candidates,
  type Candidate,
  type CandidateCategory,
} from "@/lib/candidates-data";
import { getCategoryCardTint } from "@/lib/skill-colors";
import CandidateInquiryPanel from "@/components/CandidateInquiryPanel";

/* ─── Slug → Category maps ─── */

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

/* ─── Helpers ─── */

const availabilityColors: Record<string, string> = {
  immediate: "bg-green-500/20 text-green-300",
  "1-week": "bg-yellow-500/20 text-yellow-300",
  "2-weeks": "bg-orange-500/20 text-orange-300",
};

const availabilityLabels: Record<string, string> = {
  immediate: "Available Now",
  "1-week": "1 Week",
  "2-weeks": "2 Weeks",
};

function getMonthlyRate(rate: string): string {
  const match = rate.match(/\$(\d+)/);
  if (!match) return "";
  const hourly = parseInt(match[1], 10);
  return `$${(hourly * 160).toLocaleString()}/mo`;
}

/* ─── Variant: dark (hero sections) vs light (content sections) ─── */
type Variant = "dark" | "light";

/* ─── Component ─── */

type Props = {
  slug: string;
  pageType?: "service" | "industry" | "case-study" | "blog";
  variant?: Variant;
  /** Pass category directly (e.g. for blog posts that use category-level mapping) */
  directCategory?: CandidateCategory;
};

export default function CandidatePreview({
  slug,
  pageType = "service",
  variant = "dark",
  directCategory,
}: Props) {
  const categoryMap =
    pageType === "industry"
      ? industrySlugToCategoryMap
      : pageType === "case-study"
        ? caseStudySlugToCategoryMap
        : serviceSlugToCategoryMap;

  const category = directCategory || categoryMap[slug];
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const previewCandidates = useMemo(() => {
    if (!category) return [];
    const matched = candidates.filter((c) => c.category === category);
    return matched
      .sort((a, b) => {
        const order = { immediate: 0, "1-week": 1, "2-weeks": 2 };
        return order[a.availability] - order[b.availability];
      })
      .slice(0, 4);
  }, [category]);

  /* Staggered slide-in animation on scroll */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-candidate-card]");
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(16px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {
            card.style.transition = `opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 120}ms, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 120}ms`;
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [previewCandidates]);

  const handleClose = useCallback(() => setSelectedCandidate(null), []);

  if (previewCandidates.length === 0) return null;

  const tint = getCategoryCardTint(category!);
  const isDark = variant === "dark";

  return (
    <>
      <div
        className={
          isDark
            ? "mt-10 pt-8 border-t border-white/15"
            : "py-12 px-6"
        }
        style={
          isDark
            ? undefined
            : { backgroundColor: "#f7f7f7" }
        }
      >
        <div className={isDark ? "" : "max-w-[1180px] mx-auto"}>
          <div className="text-center mb-5">
            <p
              className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                isDark ? "text-zt-accent" : "text-[#374B47]"
              }`}
            >
              Available Candidates
            </p>
            <p
              className={`text-sm mb-0 ${
                isDark ? "text-gray-400" : "text-[#5F6567]"
              }`}
            >
              Pre-vetted professionals ready to start
            </p>
          </div>

          <div ref={containerRef} className="flex flex-wrap justify-center gap-3">
            {previewCandidates.map((candidate) => (
              <button
                key={candidate.id}
                data-candidate-card
                onClick={() => setSelectedCandidate(candidate)}
                className={`group flex items-center gap-3 p-3.5 rounded-lg transition-all text-left w-full sm:w-[calc(50%-6px)] lg:w-[calc(25%-9px)] hover:-translate-y-0.5 cursor-pointer ${
                  isDark ? "" : "shadow-sm hover:shadow-md"
                }`}
                style={{
                  backgroundColor: isDark ? tint.bg : "#fff",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: isDark ? tint.border : "#e5e7eb",
                  backdropFilter: isDark ? "blur(8px)" : undefined,
                }}
              >
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: isDark ? tint.avatar : tint.bg,
                    border: isDark ? undefined : `2px solid ${tint.accent}`,
                  }}
                >
                  <span
                    className="font-bold text-xs"
                    style={{ color: tint.accent }}
                  >
                    {candidate.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-semibold truncate mb-0 ${
                      isDark ? "text-white" : "text-[#161616]"
                    }`}
                  >
                    {candidate.name}
                  </p>
                  <p
                    className="text-xs truncate mb-0"
                    style={{ color: isDark ? tint.role : "#5F6567" }}
                  >
                    {candidate.role}
                  </p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: tint.accent }}
                    >
                      {candidate.rate}
                      <span
                        className="font-normal"
                        style={{ color: isDark ? tint.role : "#5F6567" }}
                      >
                        {" "}&middot; {getMonthlyRate(candidate.rate)}
                      </span>
                    </span>
                    {isDark ? (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          availabilityColors[candidate.availability]
                        }`}
                      >
                        {availabilityLabels[candidate.availability]}
                      </span>
                    ) : (
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor:
                            candidate.availability === "immediate"
                              ? "rgba(34,197,94,0.12)"
                              : candidate.availability === "1-week"
                                ? "rgba(234,179,8,0.12)"
                                : "rgba(249,115,22,0.12)",
                          color:
                            candidate.availability === "immediate"
                              ? "#15803d"
                              : candidate.availability === "1-week"
                                ? "#a16207"
                                : "#c2410c",
                        }}
                      >
                        {availabilityLabels[candidate.availability]}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              href={`/candidates?category=${category}`}
              className={`text-xs font-semibold transition-colors no-underline ${
                isDark
                  ? "text-zt-accent hover:text-white"
                  : "text-[#374B47] hover:text-[#8FD299]"
              }`}
            >
              View all candidates &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Slide-out inquiry panel */}
      <CandidateInquiryPanel
        candidate={selectedCandidate}
        tint={selectedCandidate ? tint : null}
        sourcePage={`/${pageType === "service" ? "services" : pageType === "industry" ? "industries" : "case-studies"}/${slug}`}
        onClose={handleClose}
      />
    </>
  );
}
