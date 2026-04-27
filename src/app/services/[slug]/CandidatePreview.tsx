"use client";

import { useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  candidates,
  type CandidateCategory,
} from "@/lib/candidates-data";
import { getCategoryCardTint } from "@/lib/skill-colors";

/* Map hire page slugs → candidate category for relevance matching */
const slugToCategoryMap: Record<string, CandidateCategory> = {
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

/** Parse "$9/hr" → 9 → monthly = 9 × 160 */
function getMonthlyRate(rate: string): string {
  const match = rate.match(/\$(\d+)/);
  if (!match) return "";
  const hourly = parseInt(match[1], 10);
  return `$${(hourly * 160).toLocaleString()}/mo`;
}

export default function CandidatePreview({ slug }: { slug: string }) {
  const category = slugToCategoryMap[slug];
  const containerRef = useRef<HTMLDivElement>(null);

  const previewCandidates = useMemo(() => {
    if (!category) return [];
    const matched = candidates.filter((c) => c.category === category);
    /* Show up to 4 candidates, prioritize "immediate" availability */
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

  if (previewCandidates.length === 0) return null;

  const tint = getCategoryCardTint(category!);

  return (
    <div className="mt-10 pt-8 border-t border-white/15">
      <div className="text-center mb-5">
        <p className="text-xs text-zt-accent font-semibold uppercase tracking-wider mb-1">
          Available Candidates
        </p>
        <p className="text-sm text-gray-400 mb-0">
          Pre-vetted professionals ready to start
        </p>
      </div>

      <div ref={containerRef} className="flex flex-wrap justify-center gap-3">
        {previewCandidates.map((candidate) => (
          <Link
            key={candidate.id}
            data-candidate-card
            href={`/candidates?category=${category}`}
            className="group flex items-center gap-3 p-3.5 rounded-lg transition-all no-underline w-full sm:w-[calc(50%-6px)] lg:w-[calc(25%-9px)] hover:-translate-y-0.5"
            style={{
              backgroundColor: tint.bg,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: tint.border,
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Avatar */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: tint.avatar }}
            >
              <span className="font-bold text-xs" style={{ color: tint.accent }}>
                {candidate.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            {/* Info */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate mb-0">
                {candidate.name}
              </p>
              <p className="text-xs truncate mb-0" style={{ color: tint.role }}>
                {candidate.role}
              </p>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-xs font-semibold" style={{ color: tint.accent }}>
                  {candidate.rate}
                  <span className="font-normal" style={{ color: tint.role }}>
                    {" "}&middot; {getMonthlyRate(candidate.rate)}
                  </span>
                </span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    availabilityColors[candidate.availability]
                  }`}
                >
                  {availabilityLabels[candidate.availability]}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link
          href={`/candidates?category=${category}`}
          className="text-xs text-zt-accent font-semibold hover:text-white transition-colors no-underline"
        >
          View all candidates &rarr;
        </Link>
      </div>
    </div>
  );
}
