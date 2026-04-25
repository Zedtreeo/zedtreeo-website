import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAuthor, categoryLabels } from "@/lib/blog-data";
import { getBlogPost, getAllBlogSlugs, getRelatedPosts } from "@/lib/blog-content";
import JsonLd, { articleSchema } from "@/components/JsonLd";
import { Breadcrumb, CTASection, SectionHeading } from "@/components/ui";
import { getRelatedHirePagesFromBlog } from "@/lib/content-links";

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
          authorName: getAuthor(post.author).name,
          authorRole: getAuthor(post.author).role,
          authorUrl: getAuthor(post.author).linkedin || "https://zedtreeo.com/about",
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
            <span>By {getAuthor(post.author).name}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          {/* Featured image */}
          {post.image && (
            <div className="relative w-full aspect-[16/9] rounded-zt overflow-hidden mb-10 -mt-10 shadow-zt-card-hover">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                sizes="(max-width: 860px) 100vw, 860px"
                priority
                className="object-cover"
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

          {/* Author Box — EEAT */}
          {(() => {
            const author = getAuthor(post.author);
            return (
              <div className="mt-10 p-7 rounded-zt border border-zt-border bg-zt-near-white">
                <div className="flex gap-5 items-start">
                  <div className="w-16 h-16 rounded-full bg-zt-primary flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">
                      {author.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-zt-headings !mt-0 mb-0.5">
                      {author.name}
                    </h4>
                    <p className="text-sm text-zt-accent font-medium mb-2">
                      {author.role}, Zedtreeo
                    </p>
                    <p className="text-sm text-zt-body mb-3 leading-relaxed">
                      {author.bio}
                    </p>
                    {author.credentials && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {author.credentials.map((cred) => (
                          <span
                            key={cred}
                            className="px-2.5 py-1 rounded bg-white text-xs text-zt-headings font-medium border border-zt-border"
                          >
                            {cred}
                          </span>
                        ))}
                      </div>
                    )}
                    {author.linkedin && (
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-zt-primary font-semibold hover:text-zt-accent transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
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
                    <div className="relative w-full h-40 overflow-hidden bg-zt-near-white">
                      <Image
                        src={rp.image}
                        alt={rp.imageAlt || rp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* Related Hire Pages */}
      <RelatedHireServices blogSlug={post.slug} />

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Remote Team?"
        description="Get matched with pre-vetted talent in 48 hours. Start with a free trial — no commitment."
      />
    </main>
  );
}

/* ───── Related hire services (bidirectional link from blog → hire pages) ───── */
function RelatedHireServices({ blogSlug }: { blogSlug: string }) {
  const services = getRelatedHirePagesFromBlog(blogSlug);
  if (services.length === 0) return null;

  return (
    <section className="py-zt-section px-6 bg-zt-near-white">
      <div className="max-w-zt-content mx-auto">
        <SectionHeading
          title="Hire Remote Talent"
          subtitle="Ready to put these insights into action? Explore our staffing services."
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
                From $5/hr &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
