import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getHirePageData, getAllHireSlugs } from "@/lib/hire-data";
import { getServicePage, getAllServicePageSlugs } from "@/lib/service-data";
import JsonLd, { serviceSchema, breadcrumbSchema } from "@/components/JsonLd";
import { Breadcrumb, FAQ, TrustBar, Button, SectionHeading, CTASection, ScrollReveal, AnimatedCounter, SkillPills } from "@/components/ui";
import CandidatePreview from "./CandidatePreview";
import { getRelatedCaseStudies, getRelatedBlogs } from "@/lib/content-links";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const hireSlugs = getAllHireSlugs().map((slug) => ({ slug }));
  const serviceSlugs = getAllServicePageSlugs().map((slug) => ({ slug }));
  return [...hireSlugs, ...serviceSlugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  /* Check hire-data first (rich pages), then service-data (HTML pages) */
  const hireData = getHirePageData(slug);
  if (hireData) {
    return {
      title: hireData.metaTitle,
      description: hireData.metaDescription,
      keywords: hireData.focusKeyword,
      alternates: { canonical: `https://zedtreeo.com/services/${hireData.slug}` },
      openGraph: {
        title: hireData.metaTitle,
        description: hireData.metaDescription,
        url: `https://zedtreeo.com/services/${hireData.slug}`,
        siteName: "Zedtreeo",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: hireData.metaTitle,
        description: hireData.metaDescription,
      },
    };
  }

  const page = getServicePage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.focusKeyword,
    alternates: { canonical: `https://zedtreeo.com/services/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://zedtreeo.com/services/${page.slug}`,
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

/* ───── Process steps (shared by all hire pages) ───── */
const processSteps = [
  { title: "Share Your Requirements", desc: "Tell us the role, skills, and experience level you need." },
  { title: "We Match & Vet", desc: "Shortlisted pre-vetted candidates delivered within 48 hours." },
  { title: "Interview", desc: "Review profiles and interview your top candidates." },
  { title: "Free Trial", desc: "5-day no-cost trial to evaluate fit and performance." },
  { title: "Onboard & Scale", desc: "Your dedicated hire integrates with your team seamlessly." },
];

const pricingStats = [
  { value: "70–90%", label: "Cost Savings" },
  { value: "<7 Days", label: "Time to Hire" },
  { value: "500+", label: "Companies Served" },
  { value: "4.8/5", label: "Trustpilot Rating" },
];

/* ───── Rich hire page layout ───── */
function HirePageLayout({ data }: { data: NonNullable<ReturnType<typeof getHirePageData>> }) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: data.title, href: `/services/${data.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={serviceSchema({
          name: `Hire Remote ${data.title}`,
          description: data.metaDescription,
          url: `https://zedtreeo.com/services/${data.slug}`,
        })}
      />

      {/* Hero */}
      <section className="relative bg-zt-primary text-white py-zt-section px-6 overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
                Starting from {data.startingRate} &middot; Free 5-Day Trial
              </p>
              <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
                {data.h1}
                <br />
                <span className="text-zt-accent">{data.h1Accent}</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {data.heroSubtitle}
              </p>
              <ul className="space-y-3 mb-8 list-none p-0 m-0">
                {data.heroBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <svg className="w-5 h-5 text-zt-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/get-started">Hire {data.title} Now</Button>
                <Button href="/candidates" variant="outline">Browse Candidates</Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-md rounded-zt overflow-hidden">
                <Image
                  src={data.heroImage}
                  alt={`Hire Remote ${data.title}`}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Candidate Preview Strip */}
          <CandidatePreview slug={data.slug} />
        </div>
      </section>

      {/* Placement Metrics */}
      {data.placementMetrics && data.placementMetrics.length > 0 && (
        <section className="bg-white border-b border-zt-border py-8 px-6">
          <div className="max-w-zt-content mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {data.placementMetrics.map((metric) => (
                <div key={metric.label}>
                  <AnimatedCounter
                    value={metric.value}
                    className="text-2xl md:text-3xl font-bold text-zt-primary block"
                  />
                  <div className="text-xs text-zt-body uppercase tracking-wider mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TrustBar />

      {/* Benefits */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <ScrollReveal>
            <SectionHeading
              title={`Why Hire Remote ${data.title} with Zedtreeo`}
              subtitle={`Every ${data.title.toLowerCase()} is pre-vetted, AI-trained, and matched to your timezone. Here's what sets them apart.`}
              badge="Benefits"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-6 rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all h-full">
                  <div className="w-12 h-12 rounded-full bg-zt-accent/15 flex items-center justify-center mb-4 text-2xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zt-headings mb-2 !mt-0">{benefit.title}</h3>
                  <p className="text-sm text-zt-body mb-0 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <ScrollReveal>
            <SectionHeading
              title="Skills & Tools"
              subtitle={`Our ${data.title.toLowerCase()} are proficient across the technologies and tools that matter most.`}
              badge="Expertise"
            />
          </ScrollReveal>
          <SkillPills skills={data.skills} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <ScrollReveal>
            <SectionHeading
              title="How It Works"
              subtitle="From first conversation to a fully onboarded team member — in as little as 7 days."
              badge="Process"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-zt-accent text-zt-headings font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-zt-headings mb-2 !mt-0">{step.title}</h3>
                  <p className="text-sm text-zt-body mb-0">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-zt-primary text-white py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-zt-accent/20 text-zt-accent text-xs font-bold uppercase tracking-wider mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-white mb-4">Simple, Transparent Rates</h2>
            <p className="text-white/70 max-w-2xl" style={{ marginLeft: "auto", marginRight: "auto" }}>
              No hidden fees, no recruitment charges, no long-term contracts. Start with a free 5-day trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-zt p-8 ${
                  i === 1
                    ? "bg-zt-accent text-zt-headings ring-2 ring-zt-accent"
                    : "bg-white/10 backdrop-blur-sm"
                }`}
              >
                <h3 className={`text-lg font-semibold mb-2 !mt-0 ${i === 1 ? "text-zt-headings" : "text-white"}`}>
                  {tier.tier}
                </h3>
                <div className={`text-3xl font-bold mb-4 ${i === 1 ? "text-zt-primary" : "text-zt-accent"}`}>
                  {tier.rate}
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${i === 1 ? "text-zt-body" : "text-white/70"}`}>
                  {tier.includes}
                </p>
                <Button
                  href="/get-started"
                  variant={i === 1 ? "primary" : "outline"}
                  size="sm"
                  className="w-full justify-center"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-12 border-t border-white/10">
            {pricingStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  className="text-3xl md:text-4xl font-bold text-zt-accent block"
                />
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          <ScrollReveal>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle={`Common questions about hiring remote ${data.title.toLowerCase()} through Zedtreeo.`}
              badge="FAQs"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <FAQ items={data.faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Case Studies */}
      <RelatedCaseStudies slug={data.slug} title={data.title} />

      {/* Related Articles */}
      <RelatedArticles slug={data.slug} title={data.title} />

      {/* Related Roles */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <ScrollReveal>
            <SectionHeading
              title="Explore Related Roles"
              subtitle="Build a complete remote team across every function."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.relatedPages.map((page, i) => (
              <ScrollReveal key={page.href} delay={i * 100}>
                <Link
                  href={page.href}
                  className="group block p-6 rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline text-center h-full"
                >
                  <h3 className="text-base font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-0 mb-1">
                    {page.title}
                  </h3>
                  <span className="text-sm text-zt-accent font-medium">
                    Learn more &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Hire Remote ${data.title}?`}
        description={`Get matched with pre-vetted ${data.title.toLowerCase()} in 48 hours. Start with a free trial — no commitment, no risk.`}
        buttonText={`Hire ${data.title} Now`}
      />
    </main>
  );
}

/* ───── HTML content service page layout ───── */
function ServicePageLayout({ page }: { page: NonNullable<ReturnType<typeof getServicePage>> }) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: page.title, href: `/services/${page.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={serviceSchema({
          name: page.title,
          description: page.metaDescription,
          url: `https://zedtreeo.com/services/${page.slug}`,
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
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4">{page.title}</h1>
          <p className="text-lg text-gray-300 max-w-3xl">{page.metaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/get-started" className="zt-btn no-underline">Get Started Free</Link>
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

      <section className="py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          <article
            className="zt-blog-content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Remote Team?"
        description="Get matched with pre-vetted remote talent in 48 hours. Start with a free trial — no commitment, no risk."
        buttonText="Get Started Free"
      />
    </main>
  );
}

/* ───── Related Case Studies section ───── */
function RelatedCaseStudies({ slug, title }: { slug: string; title: string }) {
  const studies = getRelatedCaseStudies(slug);
  if (studies.length === 0) return null;

  return (
    <section className="py-zt-section px-6 bg-zt-near-white">
      <div className="max-w-zt-content mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Real Results From Real Teams"
            subtitle={`See how companies achieved measurable outcomes by hiring remote ${title.toLowerCase()} through Zedtreeo.`}
            badge="Case Studies"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study, i) => (
            <ScrollReveal key={study.href} delay={i * 100}>
              <Link
                href={study.href}
                className="group flex flex-col p-6 rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline h-full"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-zt-accent/10 text-zt-primary text-xs font-bold uppercase tracking-wider mb-3 self-start">
                  Case Study
                </span>
                <h3 className="text-base font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-0 mb-2 leading-snug">
                  {study.title}
                </h3>
                {study.snippet && (
                  <p className="text-sm text-zt-accent font-medium mt-auto mb-0">
                    {study.snippet} &rarr;
                  </p>
                )}
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/case-studies"
            className="text-sm text-zt-primary font-semibold hover:text-zt-accent transition-colors"
          >
            View all case studies &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───── Related Articles section ───── */
function RelatedArticles({ slug, title }: { slug: string; title: string }) {
  const articles = getRelatedBlogs(slug);
  if (articles.length === 0) return null;

  return (
    <section className="py-zt-section px-6">
      <div className="max-w-zt-content mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Related Articles"
            subtitle={`Guides, strategies, and insights related to hiring remote ${title.toLowerCase()}.`}
            badge="Resources"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.slice(0, 4).map((article, i) => (
            <ScrollReveal key={article.href} delay={i * 100}>
              <Link
                href={article.href}
                className="group block p-5 rounded-zt bg-white border border-zt-border hover:border-zt-accent hover:shadow-zt-card transition-all no-underline h-full"
              >
                <span className="text-xs text-zt-accent font-semibold uppercase tracking-wider">
                  Article
                </span>
                <h3 className="text-sm font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-2 mb-0 leading-snug">
                  {article.title}
                </h3>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="text-sm text-zt-primary font-semibold hover:text-zt-accent transition-colors"
          >
            Browse all articles &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───── Main page component — delegates to correct layout ───── */
export default async function ServiceSlugPage({ params }: PageProps) {
  const { slug } = await params;

  /* Hire-data pages get the rich structured layout */
  const hireData = getHirePageData(slug);
  if (hireData) return <HirePageLayout data={hireData} />;

  /* Service-data pages get the HTML content layout */
  const servicePage = getServicePage(slug);
  if (servicePage) return <ServicePageLayout page={servicePage} />;

  notFound();
}
