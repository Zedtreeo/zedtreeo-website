import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudyPage, getAllCaseStudyPageSlugs } from "@/lib/case-study-data";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { Breadcrumb, CTASection, TrustBar } from "@/components/ui";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudyPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCaseStudyPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.focusKeyword,
    alternates: {
      canonical: `https://zedtreeo.com/case-studies/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://zedtreeo.com/case-studies/${page.slug}`,
      siteName: "Zedtreeo",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getCaseStudyPage(slug);
  if (!page) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: page.title, href: `/case-studies/${page.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          description: page.metaDescription,
          url: `https://zedtreeo.com/case-studies/${page.slug}`,
          publisher: {
            "@type": "Organization",
            name: "Zedtreeo",
            url: "https://zedtreeo.com",
          },
        }}
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-zt-accent/20 text-zt-accent text-xs font-bold uppercase tracking-wider mb-4">
            Case Study
          </span>
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4 leading-tight">
            {page.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{page.metaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/get-started" className="zt-btn no-underline">
              Get Similar Results
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 rounded-zt-pill border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              View All Case Studies
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
        title="Ready to See These Results?"
        description="Get matched with pre-vetted remote talent in 48 hours. Start with a free 5-day trial — no commitment, no risk."
        buttonText="Start Your Free Trial"
      />
    </main>
  );
}
