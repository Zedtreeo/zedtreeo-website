"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { type BlogPostMeta, categoryLabels, type BlogCategory } from "@/lib/blog-data";

const allCategories = Object.entries(categoryLabels) as [BlogCategory, string][];

export default function BlogBrowser({ posts }: { posts: BlogPostMeta[] }) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = posts;
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.focusKeyword.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, selectedCategory, searchQuery]);

  const featured = useMemo(
    () => (selectedCategory === "all" && !searchQuery.trim() ? posts.filter((p) => p.featured) : []),
    [posts, selectedCategory, searchQuery]
  );

  return (
    <>
      {/* Category Filter — sticky bar */}
      <section className="bg-white border-b border-zt-border sticky top-[72px] z-30">
        <div className="max-w-zt-content mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="relative mr-2">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zt-body"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="pl-9 pr-3 py-2 rounded-full bg-zt-near-white text-sm text-zt-headings w-48 focus:w-64 transition-all focus:outline-none focus:ring-2 focus:ring-zt-accent"
              />
            </div>

            {/* Category buttons */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer border-none transition-colors ${
                selectedCategory === "all"
                  ? "bg-zt-primary text-white"
                  : "bg-zt-near-white text-zt-body hover:bg-zt-accent/15 hover:text-zt-primary"
              }`}
            >
              All ({posts.length})
            </button>
            {allCategories.map(([key, label]) => {
              const count = posts.filter((p) => p.category === key).length;
              if (count === 0) return null;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer border-none transition-colors ${
                    selectedCategory === key
                      ? "bg-zt-primary text-white"
                      : "bg-zt-near-white text-zt-body hover:bg-zt-accent/15 hover:text-zt-primary"
                  }`}
                >
                  {label} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts — only shown when "All" + no search */}
      {featured.length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-zt-content mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-zt-accent/15 text-zt-primary text-xs font-semibold">
                Editor&apos;s Picks
              </span>
              <h2 className="text-2xl font-bold text-zt-headings !mt-0 !mb-0">
                Featured Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtered Results */}
      <section className="bg-zt-light-bg py-12 px-6 min-h-[50vh]">
        <div className="max-w-zt-content mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zt-headings !mt-0 !mb-0">
              {selectedCategory === "all" && !searchQuery.trim()
                ? "Latest Articles"
                : searchQuery.trim()
                ? "Search Results"
                : categoryLabels[selectedCategory as BlogCategory]}
            </h2>
            <p className="text-sm text-zt-body mb-0">
              <strong className="text-zt-headings">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "article" : "articles"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">&#128269;</div>
              <h3 className="text-lg font-semibold text-zt-headings mb-2">
                No articles found
              </h3>
              <p className="text-sm text-zt-body mb-4">
                Try adjusting your search or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="zt-btn border-none cursor-pointer text-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ─── Blog Card ─── */

function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline overflow-hidden"
    >
      {post.image ? (
        <div className="relative w-full h-48 overflow-hidden bg-zt-near-white">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
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
