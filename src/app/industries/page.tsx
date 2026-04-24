import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { industry_content_data } from "@/lib/industry-data";
import { Breadcrumb, SectionHeading, CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries We Serve — Remote Staffing by Sector",
  description:
    "Zedtreeo provides dedicated remote employees across 25+ industries — healthcare, finance, legal, IT, e-commerce, construction, and more. Starting from $5/hour.",
  alternates: { canonical: "https://zedtreeo.com/industries" },
  openGraph: {
    title: "Industries We Serve — Remote Staffing by Sector | Zedtreeo",
    description:
      "Pre-vetted remote talent for 25+ industries. Healthcare, finance, legal, IT, e-commerce, construction, and more.",
    url: "https://zedtreeo.com/industries",
  },
};

export default function IndustriesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zedtreeo.com" },
          { name: "Industries", url: "https://zedtreeo.com/industries" },
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
              { label: "Industries", href: "/industries" },
            ]}
            className="mb-6 opacity-70"
          />
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4">
            Industries We <span className="text-zt-accent">Serve</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Dedicated remote employees trained for your industry — from healthcare
            compliance to SaaS customer success. 25+ sectors, one staffing partner.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Browse by Industry"
            subtitle="Select your industry to see available roles, pricing, and how we've helped similar companies scale."
            badge="25+ Industries"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry_content_data.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block p-6 rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline border border-zt-border hover:border-zt-accent"
              >
                <h3 className="text-base font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-0 mb-2 leading-snug">
                  {industry.title.replace(/— From \$\d+\/hour/i, "").replace(/— .+$/, "").trim()}
                </h3>
                <p className="text-sm text-zt-body mb-3 line-clamp-2">
                  {industry.metaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zt-accent bg-zt-accent/10 px-2.5 py-1 rounded-full">
                    From {industry.startingRate}
                  </span>
                  <span className="text-sm text-zt-accent font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Don't See Your Industry?"
        description="We staff across 28+ role categories. Tell us what you need — we'll match you with the right talent in 48 hours."
        buttonText="Get a Custom Quote"
      />
    </main>
  );
}
