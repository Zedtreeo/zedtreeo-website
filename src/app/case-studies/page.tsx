import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { case_study_content_data } from "@/lib/case-study-data";
import { Breadcrumb, SectionHeading, CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies — Remote Staffing Success Stories",
  description:
    "Real results from businesses that hired remote employees through Zedtreeo. See how companies cut costs 70-90% while scaling operations across 25+ industries.",
  alternates: { canonical: "https://zedtreeo.com/case-studies" },
  openGraph: {
    title: "Case Studies — Remote Staffing Success Stories | Zedtreeo",
    description:
      "Real results: 70-90% cost savings, 2-3× productivity gains. See how businesses scale with dedicated remote employees.",
    url: "https://zedtreeo.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zedtreeo.com" },
          { name: "Case Studies", url: "https://zedtreeo.com/case-studies" },
        ])}
      />

      {/* Hero */}
      <section className="relative bg-zt-primary text-white py-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/zedtreeo-hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-zt-content mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
            ]}
            className="mb-6 opacity-70"
          />
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4">
            Success <span className="text-zt-accent">Stories</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Real results from real businesses. See how companies across 25+ industries
            cut costs, scaled operations, and gained competitive advantage with Zedtreeo.
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Browse Case Studies"
            subtitle="Every case study shows measurable ROI — cost savings, efficiency gains, and scaling results from real engagements."
            badge="30+ Case Studies"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {case_study_content_data.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline overflow-hidden border border-zt-border hover:border-zt-accent"
              >
                <div className="w-full h-3 bg-gradient-to-r from-zt-primary to-zt-accent" />
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-zt-accent/10 text-zt-accent text-xs font-semibold mb-3">
                    Case Study
                  </span>
                  <h3 className="text-base font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-0 mb-2 leading-snug line-clamp-3">
                    {study.title}
                  </h3>
                  <p className="text-sm text-zt-body mb-4 line-clamp-2">
                    {study.metaDescription}
                  </p>
                  <span className="text-sm text-zt-accent font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Read case study &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Be Our Next Success Story?"
        description="Get matched with pre-vetted remote talent in 48 hours. Start with a free 5-day trial — no commitment."
        buttonText="Start Your Free Trial"
      />
    </main>
  );
}
