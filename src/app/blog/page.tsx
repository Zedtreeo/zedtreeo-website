import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { blogPosts, categoryLabels, type BlogCategory } from "@/lib/blog-data";
import { Breadcrumb, SectionHeading, CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog — Remote Staffing Insights & Hiring Guides",
  description:
    "Expert insights on remote staffing, outsourcing, hiring guides, and industry trends. Practical advice for businesses building remote teams.",
  alternates: { canonical: "https://zedtreeo.com/blog" },
  openGraph: {
    title: "Zedtreeo Blog — Remote Staffing Insights & Guides",
    description:
      "Expert insights on remote staffing, outsourcing costs, hiring strategies, and building high-performance remote teams.",
    url: "https://zedtreeo.com/blog",
  },
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const recent = blogPosts.slice(0, 12);
  const categories = Object.entries(categoryLabels) as [BlogCategory, string][];

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Zedtreeo Blog",
          description: "Expert insights on remote staffing, outsourcing, and building remote teams.",
          url: "https://zedtreeo.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Zedtreeo",
            url: "https://zedtreeo.com",
          },
        }}
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
              { label: "Blog", href: "/blog" },
            ]}
            className="mb-6 opacity-70"
          />
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4">
            Insights & <span className="text-zt-accent">Guides</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Practical advice on remote staffing, outsourcing strategies, hiring
            best practices, and building high-performance distributed teams.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-zt-border sticky top-[72px] z-30">
        <div className="max-w-zt-content mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-zt-primary text-white text-xs font-semibold cursor-pointer">
              All Posts
            </span>
            {categories.map(([key, label]) => (
              <span
                key={key}
                className="px-4 py-2 rounded-full bg-zt-near-white text-zt-body text-xs font-medium hover:bg-zt-accent/15 hover:text-zt-primary cursor-pointer transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-zt-content mx-auto">
            <SectionHeading
              title="Featured Articles"
              badge="Editor's Picks"
              className="!mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading title="Latest Articles" className="!mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Remote Team?"
        description="Get matched with pre-vetted talent in 48 hours. Start with a free trial — no commitment."
      />
    </main>
  );
}

/* ─── Blog Card Component ─── */

function BlogCard({
  post,
}: {
  post: (typeof blogPosts)[0];
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline overflow-hidden"
    >
      {post.image && (
        <div className="relative w-full h-48 overflow-hidden bg-zt-near-white">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      {!post.image && (
        <div className="w-full h-48 bg-gradient-to-br from-zt-primary to-zt-dark-gradient flex items-center justify-center">
          <span className="text-white/30 text-5xl font-bold">Z</span>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-zt-accent bg-zt-accent/10 px-2.5 py-1 rounded-full">
            {categoryLabels[post.category]}
          </span>
          <span className="text-xs text-zt-body">{post.readTime} read</span>
        </div>
        <h3 className="text-lg font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-0 mb-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-zt-body mb-3 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-zt-body">
            {new Date(post.datePublished).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-sm text-zt-accent font-semibold group-hover:translate-x-1 transition-transform inline-block">
            Read &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
