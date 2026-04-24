import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getBlogPost,
  getAllBlogSlugs,
  getRelatedPosts,
  categoryLabels,
} from "@/lib/blog-data";
import JsonLd, { articleSchema } from "@/components/JsonLd";
import { Breadcrumb, FAQ, CTASection } from "@/components/ui";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.focusKeyword,
    alternates: {
      canonical: `https://zedtreeo.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://zedtreeo.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Zedtreeo"],
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          url: `https://zedtreeo.com/blog/${post.slug}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          image: post.image
            ? `https://zedtreeo.com${post.image}`
            : undefined,
        })}
      />

      {/* Article Header */}
      <section className="bg-zt-primary text-white py-16 px-6">
        <div className="max-w-zt-narrow mx-auto">
          <Breadcrumb items={breadcrumbItems} className="mb-8 opacity-70" />

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-zt-accent bg-zt-accent/20 px-3 py-1 rounded-full">
              {categoryLabels[post.category]}
            </span>
            <span className="text-xs text-white/60">{post.readTime} read</span>
          </div>

          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-gray-300 mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>
              Published{" "}
              {new Date(post.datePublished).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            {post.dateModified !== post.datePublished && (
              <span>
                Updated{" "}
                {new Date(post.dateModified).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
            <span>By Zedtreeo</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          {/* Featured image */}
          {post.image && (
            <div className="w-full rounded-zt overflow-hidden mb-10 -mt-10 shadow-zt-card-hover">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Article body */}
          <article
            className="zt-blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-zt-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-zt-headings mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-zt-near-white text-xs text-zt-body font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Box */}
          <div className="mt-10 p-6 rounded-zt bg-zt-near-white flex gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-zt-primary flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h4 className="text-base font-semibold text-zt-headings !mt-0 mb-1">
                Zedtreeo Team
              </h4>
              <p className="text-sm text-zt-body mb-0">
                Practical insights on remote staffing, outsourcing, and building
                distributed teams. Written by industry practitioners with
                hands-on experience placing 500+ remote professionals globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-zt-light-bg py-zt-section px-6">
          <div className="max-w-zt-content mx-auto">
            <h2 className="text-center mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline overflow-hidden"
                >
                  {rp.image ? (
                    <div className="w-full h-40 overflow-hidden bg-zt-near-white">
                      <img
                        src={rp.image}
                        alt={rp.imageAlt || rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-40 bg-gradient-to-br from-zt-primary to-zt-dark-gradient flex items-center justify-center">
                      <span className="text-white/30 text-4xl font-bold">Z</span>
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-xs font-semibold text-zt-accent">
                      {categoryLabels[rp.category]}
                    </span>
                    <h3 className="text-base font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-1 mb-0 leading-snug">
                      {rp.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Remote Team?"
        description="Get matched with pre-vetted talent in 48 hours. Start with a free trial — no commitment."
      />
    </main>
  );
}
