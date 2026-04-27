import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIndustryPage, getAllIndustryPageSlugs } from "@/lib/industry-data";
import JsonLd, { serviceSchema, breadcrumbSchema } from "@/components/JsonLd";
import ContentWithCandidates from "@/components/ContentWithCandidates";
import { industrySlugToCategoryMap } from "@/components/CandidatePreview";

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

  const category = industrySlugToCategoryMap[page.slug];

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

      {/* Industry pages split at hero → candidates → rest of content */}
      <article className="zt-blog-content">
        <ContentWithCandidates
          htmlContent={page.content}
          slug={page.slug}
          pageType="industry"
          category={category}
        />
      </article>
    </main>
  );
}
