import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Breadcrumb, FAQ, CTASection } from "@/components/ui";
import CandidateBrowser from "./CandidateBrowser";

export const metadata: Metadata = {
  title: "Browse Pre-Vetted Remote Candidates — Hire from $5/hr | Zedtreeo",
  description:
    "Browse 500+ pre-vetted remote professionals across 28 categories. Software developers, accountants, marketers, legal staff & more. Hire from $5/hr with a free trial.",
  alternates: { canonical: "https://zedtreeo.com/candidates" },
  openGraph: {
    title: "Browse Pre-Vetted Remote Candidates — Hire from $5/hr",
    description:
      "Explore Zedtreeo's roster of dedicated remote employees. 28+ categories, AI-trained, 6-stage vetted. Start with a free 5-day trial.",
    url: "https://zedtreeo.com/candidates",
  },
};

/* ─── Schema data ─── */
const categorySchemaItems = [
  { name: "Software Development", url: "/services/full-stack-developer" },
  { name: "Virtual Assistants", url: "/services/virtual-assistants" },
  { name: "Finance & Accounting", url: "/services/virtual-assistant-for-bookkeeping" },
  { name: "Digital Marketing", url: "/services/digital-marketer" },
  { name: "Legal & Compliance", url: "/services/virtual-legal-staff" },
  { name: "Healthcare & RCM", url: "/services/revenue-cycle-management-staff" },
  { name: "Customer Support", url: "/services/customer-support-representative" },
  { name: "Cybersecurity & IT", url: "/services/cyber-security-expert" },
  { name: "Graphic & UI/UX Design", url: "/services/graphic-designer" },
  { name: "Content & SEO", url: "/services/digital-marketer" },
];

const faqs = [
  {
    question: "How does Zedtreeo vet remote candidates?",
    answer:
      "Every candidate passes our 6-stage vetting process: resume screening, skills assessment, technical evaluation, behavioral interview, reference verification, and a paid trial project. Only 3.2% of applicants make it through — ensuring you get top-tier talent.",
  },
  {
    question: "What roles can I hire through Zedtreeo?",
    answer:
      "We provide talent across 28+ categories: software development, finance & accounting, virtual assistants, digital marketing, legal & compliance, healthcare & RCM, cybersecurity, customer support, design, data science, project management, content writing, and more.",
  },
  {
    question: "How much does it cost to hire a remote candidate?",
    answer:
      "Rates start from $5/hour with no recruitment fees, setup costs, or long-term contracts. Virtual assistants: $5–6/hr. Bookkeepers and marketers: $6–8/hr. Developers and technical specialists: $8–10/hr. All pricing is transparent with no hidden charges.",
  },
  {
    question: "Can I try a candidate before committing?",
    answer:
      "Yes. Every hire starts with a free 5-day trial. Work directly with the candidate, evaluate their output, and decide if they're the right fit. If not, we replace them at no cost. You only pay once you're fully satisfied.",
  },
  {
    question: "Are these candidates shared across multiple clients?",
    answer:
      "No. Every Zedtreeo candidate works as a full-time, dedicated employee exclusively for your company. They follow your processes, use your tools, and attend your meetings — just like an in-house team member working remotely.",
  },
  {
    question: "What time zones do candidates work in?",
    answer:
      "Our talent is based in India but works across all global time zones. Most candidates offer 4–8 hours of overlap with US, UK, Australian, and Middle Eastern business hours. Timezone preferences are matched during the screening process.",
  },
  {
    question: "How quickly can I get matched with candidates?",
    answer:
      "Within 48 hours of submitting your requirements, you'll receive a shortlist of 3–5 pre-vetted candidates matched to your role, skills, and timezone needs. Interview and select your preferred hire, then start with a free trial in under 7 days.",
  },
  {
    question: "What happens if a candidate doesn't work out?",
    answer:
      "We offer a free replacement guarantee. If a candidate isn't meeting expectations after the trial period or at any point during the engagement, we replace them at no additional cost. Your dedicated account manager handles the transition.",
  },
];

export default function CandidatesPage() {
  return (
    <main>
      {/* Schema: ItemList for candidate categories */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Browse Pre-Vetted Remote Candidates",
          description: metadata.description,
          url: "https://zedtreeo.com/candidates",
          mainEntity: {
            "@type": "ItemList",
            name: "Remote Candidate Categories",
            numberOfItems: categorySchemaItems.length,
            itemListElement: categorySchemaItems.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              url: `https://zedtreeo.com${item.url}`,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
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
              { label: "Candidates", href: "/candidates" },
            ]}
            className="mb-6 opacity-70"
          />
          <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
            500+ Pre-Vetted Professionals
          </p>
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4">
            Browse <span className="text-zt-accent">Pre-Vetted Talent</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            Explore our roster of available professionals across 28+ categories.
            Every candidate has passed our 6-stage vetting process, is trained on
            modern AI tools, and works as a dedicated full-time employee
            exclusively for your company.
          </p>

          {/* Interactive browser: search + filters + cards */}
          <Suspense fallback={<div className="text-gray-400 py-8">Loading candidates...</div>}>
            <CandidateBrowser />
          </Suspense>
        </div>
      </section>

      {/* How Our Vetting Works */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="text-center mb-12">
            <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Quality Guaranteed
            </p>
            <h2 className="mb-4">
              Our 6-Stage Vetting Process
            </h2>
            <p className="text-zt-body max-w-2xl mx-auto">
              Only 3.2% of applicants make it through our screening. Here&apos;s
              how we ensure every candidate meets enterprise-grade standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vettingSteps.map((step, i) => (
              <div
                key={step.title}
                className="p-6 rounded-zt border border-zt-border bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-zt-accent/15 text-zt-primary text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-zt-headings !mt-0 !mb-0">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-zt-body mb-0">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Breakdown */}
      <section className="py-zt-section px-6 bg-zt-near-white">
        <div className="max-w-zt-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">28+ Role Categories Available</h2>
            <p className="text-zt-body max-w-2xl mx-auto">
              From technical specialists to business support staff, we provide
              dedicated remote employees across every function your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryBreakdown.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group p-6 rounded-zt bg-white border border-zt-border hover:border-zt-accent hover:shadow-zt-card transition-all no-underline"
              >
                <h3 className="text-base font-semibold text-zt-headings !mt-0 mb-2 group-hover:text-zt-primary">
                  {cat.name}
                </h3>
                <p className="text-sm text-zt-body mb-3">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zt-accent font-semibold">
                    From {cat.rate}
                  </span>
                  <span className="text-xs text-zt-body group-hover:text-zt-accent transition-colors">
                    View roles &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Transparent Pricing by Skill Tier</h2>
            <p className="text-zt-body max-w-2xl mx-auto">
              No recruitment fees, no setup costs, no long-term contracts. Pay a
              simple hourly rate and scale up or down as needed.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-zt overflow-hidden shadow-sm">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 bg-zt-primary text-white text-sm font-semibold">
                    Tier
                  </th>
                  <th className="text-left px-6 py-4 bg-zt-primary text-white text-sm font-semibold">
                    Hourly Rate
                  </th>
                  <th className="text-left px-6 py-4 bg-zt-primary text-white text-sm font-semibold">
                    Monthly (FT)
                  </th>
                  <th className="text-left px-6 py-4 bg-zt-primary text-white text-sm font-semibold">
                    Example Roles
                  </th>
                  <th className="text-left px-6 py-4 bg-zt-primary text-white text-sm font-semibold">
                    US Equivalent
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier) => (
                  <tr key={tier.name} className="border-b border-zt-border">
                    <td className="px-6 py-4 text-sm font-semibold text-zt-headings">
                      {tier.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-zt-accent font-bold">
                      {tier.rate}
                    </td>
                    <td className="px-6 py-4 text-sm text-zt-headings">
                      {tier.monthly}
                    </td>
                    <td className="px-6 py-4 text-sm text-zt-body">
                      {tier.examples}
                    </td>
                    <td className="px-6 py-4 text-sm text-zt-body line-through opacity-60">
                      {tier.usEquiv}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center mt-6">
            <Link
              href="/pricing"
              className="text-sm text-zt-primary font-semibold hover:text-zt-accent transition-colors"
            >
              See full pricing breakdown by role &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-zt-section px-6 bg-zt-near-white">
        <div className="max-w-zt-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">What&apos;s Included With Every Hire</h2>
            <p className="text-zt-body max-w-2xl mx-auto">
              Beyond the candidate, you get a full support system designed to
              make remote staffing effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-zt bg-white border border-zt-border"
              >
                <div className="w-10 h-10 rounded-lg bg-zt-accent/10 flex items-center justify-center mb-3">
                  <span
                    className="text-zt-primary"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-zt-headings !mt-0 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-zt-body mb-0 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          <FAQ title="Frequently Asked Questions About Our Candidates" items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Hire Your Next Team Member?"
        description="Tell us what you need — we'll match you with pre-vetted candidates in 48 hours. Free 5-day trial, no contracts."
        buttonText="Start Hiring Today"
        buttonHref="/get-started"
      />
    </main>
  );
}

/* ─── Static Data ─── */

const vettingSteps = [
  {
    title: "Resume Screening",
    desc: "We review education, work history, and project portfolio against role-specific criteria. Only candidates with verified, relevant experience advance.",
  },
  {
    title: "Skills Assessment",
    desc: "Role-specific tests: coding challenges for developers, case studies for marketers, financial modeling for accountants. Scored against industry benchmarks.",
  },
  {
    title: "Technical Evaluation",
    desc: "Live technical interview with domain experts. We test problem-solving, tool proficiency, and ability to handle real-world scenarios from client projects.",
  },
  {
    title: "Behavioral Interview",
    desc: "Communication skills, cultural fit, work ethic, and remote readiness. We evaluate English proficiency, timezone flexibility, and collaboration style.",
  },
  {
    title: "Reference Verification",
    desc: "We contact previous employers and clients to verify performance claims, reliability, and professional conduct. Background checks included for sensitive roles.",
  },
  {
    title: "AI Tools Training",
    desc: "Every candidate completes our AI productivity program covering Claude, ChatGPT, GitHub Copilot, and role-specific AI tools — delivering 30–40% higher output.",
  },
];

const categoryBreakdown = [
  {
    name: "Software Development",
    desc: "Full-stack, frontend, backend, mobile, DevOps, QA — React, Node.js, Python, AWS, and more.",
    rate: "$8/hr",
    href: "/services/full-stack-developer",
  },
  {
    name: "Finance & Accounting",
    desc: "Bookkeeping, payroll, tax preparation, financial reporting, auditing, and accounts receivable/payable.",
    rate: "$6/hr",
    href: "/services/virtual-assistant-for-bookkeeping",
  },
  {
    name: "Virtual Assistants",
    desc: "Executive assistance, data entry, scheduling, email management, CRM updates, and admin support.",
    rate: "$5/hr",
    href: "/services/virtual-assistants",
  },
  {
    name: "Digital Marketing",
    desc: "SEO, PPC, social media, content marketing, email campaigns, analytics, and conversion optimization.",
    rate: "$6/hr",
    href: "/services/digital-marketer",
  },
  {
    name: "Legal & Compliance",
    desc: "Paralegals, contract review, compliance monitoring, legal research, probate specialists, and IP support.",
    rate: "$7/hr",
    href: "/services/virtual-legal-staff",
  },
  {
    name: "Healthcare & RCM",
    desc: "Medical billing, coding, revenue cycle management, claims processing, and healthcare admin support.",
    rate: "$7/hr",
    href: "/services/revenue-cycle-management-staff",
  },
  {
    name: "Cybersecurity & IT",
    desc: "Security analysis, penetration testing, network monitoring, IT support, cloud security, and compliance.",
    rate: "$8/hr",
    href: "/services/cyber-security-expert",
  },
  {
    name: "Customer Support",
    desc: "Phone, email, and chat support agents. Trained on CRM tools, SLAs, and multi-timezone coverage.",
    rate: "$5/hr",
    href: "/services/customer-support-representative",
  },
  {
    name: "Graphic & UI/UX Design",
    desc: "Brand design, web/app UI, marketing creatives, motion graphics, Figma, Adobe Suite, and prototyping.",
    rate: "$7/hr",
    href: "/services/graphic-designer",
  },
];

const pricingTiers = [
  {
    name: "Non-Skilled",
    rate: "$5–6/hr",
    monthly: "$800–960",
    examples: "Virtual Assistants, Data Entry, Customer Support",
    usEquiv: "$25–35/hr",
  },
  {
    name: "Mid-Skill",
    rate: "$6–8/hr",
    monthly: "$960–1,280",
    examples: "Bookkeepers, Marketers, Designers, Content Writers",
    usEquiv: "$35–55/hr",
  },
  {
    name: "Technical",
    rate: "$8–10/hr",
    monthly: "$1,280–1,600",
    examples: "Software Developers, DevOps, Cybersecurity, Legal",
    usEquiv: "$55–100+/hr",
  },
];

const inclusions = [
  {
    title: "Free 5-Day Trial",
    desc: "Test the candidate risk-free before committing. Replace at no cost if not satisfied.",
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  {
    title: "Dedicated Account Manager",
    desc: "A single point of contact handles onboarding, performance tracking, and any issues.",
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>',
  },
  {
    title: "NDA & IP Protection",
    desc: "Every candidate signs an NDA. Your code, data, and business information stay protected.",
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
  },
  {
    title: "AI Productivity Training",
    desc: "All candidates complete our AI tools program — Claude, Copilot, ChatGPT — boosting output 30–40%.",
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>',
  },
  {
    title: "Timezone Matching",
    desc: "We match candidates to your preferred working hours — 4–8 hours overlap guaranteed.",
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  {
    title: "Free Replacement",
    desc: "If a candidate isn't working out, we replace them at no additional cost. Zero risk.",
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/></svg>',
  },
  {
    title: "Performance Reports",
    desc: "Monthly performance reviews and productivity reports so you always know how your team is doing.",
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>',
  },
  {
    title: "No Lock-In Contracts",
    desc: "Month-to-month engagement. Scale up, scale down, or pause anytime — no penalties.",
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>',
  },
];
