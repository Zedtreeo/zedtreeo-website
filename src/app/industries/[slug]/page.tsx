import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getIndustryPage, getAllIndustryPageSlugs } from "@/lib/industry-data";
import JsonLd, { serviceSchema, breadcrumbSchema } from "@/components/JsonLd";
import { Breadcrumb, CTASection, TrustBar } from "@/components/ui";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllIndustryPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.focusKeyword,
    alternates: {
      canonical: `https://zedtreeo.com/industries/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://zedtreeo.com/industries/${page.slug}`,
      siteName: "Zedtreeo",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: page.title, href: `/industries/${page.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={serviceSchema({
          name: `Remote Staffing for ${page.title}`,
          description: page.metaDescription,
          url: `https://zedtreeo.com/industries/${page.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema(
          breadcrumbItems.map((item) => ({
            name: item.label,
            url: `https://zedtreeo.com${item.href}`,
          }))
        )}
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
          <Breadcrumb items={breadcrumbItems} className="mb-8 opacity-70" />
          <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Starting from {page.startingRate} &middot; Free 5-Day Trial
          </p>
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4">
            {page.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{page.metaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/get-started" className="zt-btn no-underline">
              Get Started Free
            </Link>
            <Link
              href="/candidates"
              className="inline-flex items-center justify-center px-6 py-3 rounded-zt-pill border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Browse Candidates
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Content */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          <article
            className="zt-blog-content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Remote Team?"
        description={`Get matched with pre-vetted talent for your industry in 48 hours. Start with a free trial — no commitment.`}
        buttonText="Get Started Free"
      />
    </main>
  );
}
