import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { blogPosts } from "@/lib/blog-data";
import { Breadcrumb, CTASection } from "@/components/ui";
import BlogBrowser from "./BlogBrowser";

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
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Zedtreeo Blog",
          description:
            "Expert insights on remote staffing, outsourcing, and building remote teams.",
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

      {/* Interactive Blog Browser — client component handles filter + search */}
      <BlogBrowser posts={blogPosts} />

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Remote Team?"
        description="Get matched with pre-vetted talent in 48 hours. Start with a free trial — no commitment."
      />
    </main>
  );
}
