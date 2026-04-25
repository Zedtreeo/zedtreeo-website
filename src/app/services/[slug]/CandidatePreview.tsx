"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  candidates,
  type CandidateCategory,
} from "@/lib/candidates-data";

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

export default function CandidatePreview({ slug }: { slug: string }) {
  const category = slugToCategoryMap[slug];

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

  if (previewCandidates.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-white/15">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-zt-accent font-semibold uppercase tracking-wider mb-1">
            Available Candidates
          </p>
          <p className="text-sm text-gray-400 mb-0">
            Pre-vetted professionals ready to start
          </p>
        </div>
        <Link
          href={`/candidates?category=${category}`}
          className="text-xs text-zt-accent font-semibold hover:text-white transition-colors no-underline hidden sm:block"
        >
          View all candidates &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {previewCandidates.map((candidate) => (
          <Link
            key={candidate.id}
            href={`/candidates?category=${category}`}
            className="group flex items-center gap-3 p-3 rounded-lg bg-white/8 hover:bg-white/14 border border-white/10 hover:border-zt-accent/40 transition-all no-underline"
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-zt-accent/20 flex items-center justify-center shrink-0">
              <span className="text-zt-accent font-bold text-xs">
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
              <p className="text-xs text-gray-400 truncate mb-0">
                {candidate.role}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-zt-accent font-semibold">
                  {candidate.rate}
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

      <div className="mt-4 sm:hidden">
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
