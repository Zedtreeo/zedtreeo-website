import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudyPage, getAllCaseStudyPageSlugs } from "@/lib/case-study-data";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { SectionHeading } from "@/components/ui";
import { getRelatedHirePages } from "@/lib/content-links";
import ContentWithCandidates from "@/components/ContentWithCandidates";
import { caseStudySlugToCategoryMap } from "@/components/CandidatePreview";

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

  const category = caseStudySlugToCategoryMap[page.slug];

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

      {/* Case study pages split at hero → candidates → rest of content */}
      <article className="zt-blog-content">
        <ContentWithCandidates
          htmlContent={page.content}
          slug={page.slug}
          pageType="case-study"
          category={category}
        />
      </article>

      {/* Related Hire Pages */}
      <RelatedServices caseStudySlug={page.slug} />
    </main>
  );
}

/* ───── Related Services (bidirectional link from case study → hire pages) ───── */
function RelatedServices({ caseStudySlug }: { caseStudySlug: string }) {
  const services = getRelatedHirePages(caseStudySlug);
  if (services.length === 0) return null;

  return (
    <section className="py-zt-section px-6 bg-zt-near-white">
      <div className="max-w-zt-content mx-auto">
        <SectionHeading
          title="Hire Similar Talent"
          subtitle="Explore the roles and services featured in this case study."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block p-6 rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline text-center"
            >
              <h3 className="text-base font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-0 mb-1 capitalize">
                {service.title}
              </h3>
              <span className="text-sm text-zt-accent font-medium">
                View pricing &amp; skills &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
