/**
 * Server-only blog content loading.
 * Uses Node.js fs — NEVER import this from client components.
 */
import { readFileSync } from "fs";
import { join } from "path";
import { blogPosts, type BlogPost } from "./blog-data";

function loadBlogContent(slug: string): string {
  try {
    const filePath = join(process.cwd(), "src/lib/blog-content", `${slug}.html`);
    return readFileSync(filePath, "utf-8");
  } catch {
    return `<p>Content for ${slug} is being prepared.</p>`;
  }
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const meta = blogPosts.find((p) => p.slug === slug);
  if (!meta) return undefined;
  return { ...meta, content: loadBlogContent(slug) };
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
