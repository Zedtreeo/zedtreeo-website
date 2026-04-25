import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Breadcrumb, SectionHeading, CTASection, TrustBar, FAQ } from "@/components/ui";

export const metadata: Metadata = {
  title: "Remote Staffing Pricing — Transparent Rates from $5/hr | Zedtreeo",
  description:
    "Zedtreeo remote staffing pricing: hire dedicated employees from $5/hr. Compare rates by role, experience tier, and engagement model. No hidden fees.",
  alternates: { canonical: "https://zedtreeo.com/pricing" },
  openGraph: {
    title: "Remote Staffing Pricing — Transparent Rates from $5/hr",
    description:
      "Compare remote staffing rates by role and tier. Starting at $5/hr with no recruitment fees, no contracts.",
    url: "https://zedtreeo.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Zedtreeo Pricing",
          description: metadata.description,
          url: "https://zedtreeo.com/pricing",
          mainEntity: {
            "@type": "ItemList",
            name: "Remote Staffing Pricing Tiers",
            numberOfItems: rolePricing.length,
            itemListElement: rolePricing.map((role, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: role.role,
              url: `https://zedtreeo.com${role.href}`,
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
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing", href: "/pricing" },
            ]}
            className="mb-8 opacity-70"
          />
          <div className="max-w-3xl">
            <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Transparent Pricing
            </p>
            <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
              Simple, Honest Rates.
              <br />
              <span className="text-zt-accent">No Hidden Fees.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hire dedicated remote employees starting from $5/hour. No
              recruitment fees, no long-term contracts, no markup surprises.
              Pay only for the hours worked.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Pricing Tiers Overview */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Three Simple Tiers"
            subtitle="Every role falls into one of three pricing tiers based on skill complexity. No negotiation needed."
            badge="How It Works"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`rounded-zt p-8 text-center ${
                  i === 1
                    ? "bg-zt-primary text-white ring-2 ring-zt-accent"
                    : "bg-white shadow-zt-card"
                }`}
              >
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                    i === 1
                      ? "bg-zt-accent/20 text-zt-accent"
                      : "bg-zt-accent/15 text-zt-primary"
                  }`}
                >
                  {tier.badge}
                </span>
                <h3
                  className={`text-xl font-semibold mb-2 !mt-0 ${
                    i === 1 ? "text-white" : "text-zt-headings"
                  }`}
                >
                  {tier.name}
                </h3>
                <div
                  className={`text-4xl font-bold mb-2 ${
                    i === 1 ? "text-zt-accent" : "text-zt-primary"
                  }`}
                >
                  {tier.rate}
                </div>
                <p
                  className={`text-sm mb-1 ${
                    i === 1 ? "text-white/60" : "text-zt-body"
                  }`}
                >
                  {tier.monthly}
                </p>
                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    i === 1 ? "text-white/70" : "text-zt-body"
                  }`}
                >
                  {tier.description}
                </p>
                <ul className={`text-sm text-left space-y-2 mb-8 ${i === 1 ? "text-white/80" : "text-zt-body"}`}>
                  {tier.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-zt-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-started"
                  className={`inline-block w-full py-3 rounded-zt-pill text-sm font-bold text-center no-underline transition-colors ${
                    i === 1
                      ? "bg-zt-accent text-zt-headings hover:bg-zt-accent-hover"
                      : "border border-zt-primary text-zt-primary hover:bg-zt-primary hover:text-white"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Pricing Table */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Pricing by Role"
            subtitle="Exact rates depend on experience level, but here's what each role category starts at."
            badge="Rate Card"
          />
          <div className="overflow-x-auto rounded-zt shadow-zt-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zt-primary text-white">
                  <th className="text-left px-6 py-4 font-semibold">Role</th>
                  <th className="text-left px-6 py-4 font-semibold">Starting Rate</th>
                  <th className="text-left px-6 py-4 font-semibold">Monthly (Full-Time)</th>
                  <th className="text-left px-6 py-4 font-semibold">US Equivalent</th>
                  <th className="text-left px-6 py-4 font-semibold">Savings</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {rolePricing.map((role, i) => (
                  <tr
                    key={role.role}
                    className={`border-b border-zt-border ${
                      i % 2 === 0 ? "bg-white" : "bg-zt-near-white"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-zt-headings">
                      {role.role}
                    </td>
                    <td className="px-6 py-4 text-zt-primary font-bold">
                      {role.startingRate}
                    </td>
                    <td className="px-6 py-4 text-zt-body">{role.monthly}</td>
                    <td className="px-6 py-4 text-zt-body line-through opacity-60">
                      {role.usEquivalent}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-zt-accent/15 text-zt-primary text-xs font-bold">
                        {role.savings}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={role.href}
                        className="text-zt-accent font-semibold text-xs no-underline hover:underline"
                      >
                        View Details &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zt-body mt-4 text-center">
            All rates are starting prices. Actual rates depend on experience level, specialization, and engagement scope.
            US equivalents based on Glassdoor median salaries (2026).
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="What's Included in Every Hire"
            subtitle="No add-ons, no upsells. Every engagement includes these at no extra cost."
            badge="Included"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item, i) => (
              <div key={i} className="p-6 rounded-zt bg-white shadow-zt-card">
                <div className="w-12 h-12 rounded-full bg-zt-accent/15 flex items-center justify-center mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-zt-headings mb-2 !mt-0">
                  {item.title}
                </h3>
                <p className="text-sm text-zt-body mb-0 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-zt-primary text-white py-zt-section px-6">
        <div className="max-w-zt-content mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zt-accent/20 text-zt-accent text-xs font-bold uppercase tracking-wider mb-4">
            Cost Comparison
          </span>
          <h2 className="text-white mb-4">
            Zedtreeo vs. Local Hiring vs. Freelancers
          </h2>
          <p className="text-white/70 max-w-2xl mb-12" style={{ marginLeft: "auto", marginRight: "auto" }}>
            See how dedicated remote employees compare to other hiring models on cost, quality, and commitment.
          </p>
          <div className="overflow-x-auto rounded-zt">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-6 py-4 text-white/60 font-semibold">Factor</th>
                  <th className="px-6 py-4 text-zt-accent font-bold">Zedtreeo</th>
                  <th className="px-6 py-4 text-white/60 font-semibold">Local Hire (US)</th>
                  <th className="px-6 py-4 text-white/60 font-semibold">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="px-6 py-4 text-white/80 font-medium">{row.factor}</td>
                    <td className="px-6 py-4 text-zt-accent font-semibold">{row.zedtreeo}</td>
                    <td className="px-6 py-4 text-white/60">{row.local}</td>
                    <td className="px-6 py-4 text-white/60">{row.freelancer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          <SectionHeading
            title="Pricing FAQs"
            subtitle="Common questions about how our pricing works."
            badge="FAQs"
          />
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to See Your Savings?"
        description="Get a custom quote based on your roles and team size. Start with a free 5-day trial — no commitment, no risk."
        buttonText="Get Started Free"
      />
    </main>
  );
}

/* ─── Data ─── */

const tiers = [
  {
    name: "Non-Skilled",
    badge: "Tier 1",
    rate: "$5–$6/hr",
    monthly: "$800–$960/mo (full-time)",
    description:
      "Admin support, data entry, basic research, scheduling, and general virtual assistance.",
    includes: [
      "Virtual assistants",
      "Data entry operators",
      "Admin & scheduling support",
      "Basic research tasks",
      "Document formatting",
    ],
  },
  {
    name: "Mid-Skill",
    badge: "Most Popular",
    rate: "$6–$8/hr",
    monthly: "$960–$1,280/mo (full-time)",
    description:
      "Bookkeepers, digital marketers, designers, content writers, and HR professionals.",
    includes: [
      "Bookkeepers & accountants",
      "Digital marketing specialists",
      "Graphic & UI/UX designers",
      "Content writers & copywriters",
      "HR & recruitment staff",
    ],
  },
  {
    name: "Technical",
    badge: "Tier 3",
    rate: "$8–$10/hr",
    monthly: "$1,280–$1,600/mo (full-time)",
    description:
      "Full-stack developers, DevOps engineers, cybersecurity experts, and legal professionals.",
    includes: [
      "Full-stack developers",
      "DevOps & cloud engineers",
      "Cybersecurity specialists",
      "Legal & compliance staff",
      "Healthcare & RCM specialists",
    ],
  },
];

const rolePricing = [
  { role: "Virtual Assistant", startingRate: "$5/hr", monthly: "$800/mo", usEquivalent: "$3,500/mo", savings: "77% savings", href: "/services/virtual-assistants" },
  { role: "Data Entry Specialist", startingRate: "$5/hr", monthly: "$800/mo", usEquivalent: "$3,200/mo", savings: "75% savings", href: "/services/data-entry-assistant" },
  { role: "Bookkeeper / Accountant", startingRate: "$5/hr", monthly: "$800/mo", usEquivalent: "$4,500/mo", savings: "82% savings", href: "/services/virtual-assistant-for-bookkeeping" },
  { role: "Digital Marketer", startingRate: "$7/hr", monthly: "$1,120/mo", usEquivalent: "$5,500/mo", savings: "80% savings", href: "/services/digital-marketer" },
  { role: "Content Writer", startingRate: "$6/hr", monthly: "$960/mo", usEquivalent: "$4,200/mo", savings: "77% savings", href: "/services/content-writer" },
  { role: "Graphic Designer", startingRate: "$6/hr", monthly: "$960/mo", usEquivalent: "$4,800/mo", savings: "80% savings", href: "/services/graphic-designer" },
  { role: "Full-Stack Developer", startingRate: "$8/hr", monthly: "$1,280/mo", usEquivalent: "$8,500/mo", savings: "85% savings", href: "/services/full-stack-developer" },
  { role: "DevOps Engineer", startingRate: "$9/hr", monthly: "$1,440/mo", usEquivalent: "$9,500/mo", savings: "85% savings", href: "/services/devops-engineers" },
  { role: "Cybersecurity Expert", startingRate: "$9/hr", monthly: "$1,440/mo", usEquivalent: "$10,000/mo", savings: "86% savings", href: "/services/cyber-security-expert" },
  { role: "Legal / Paralegal", startingRate: "$7/hr", monthly: "$1,120/mo", usEquivalent: "$5,500/mo", savings: "80% savings", href: "/services/virtual-legal-staff" },
  { role: "Healthcare & RCM", startingRate: "$7/hr", monthly: "$1,120/mo", usEquivalent: "$5,200/mo", savings: "78% savings", href: "/services/revenue-cycle-management-staff" },
  { role: "SEO Specialist", startingRate: "$7/hr", monthly: "$1,120/mo", usEquivalent: "$5,800/mo", savings: "81% savings", href: "/services/seo-specialist" },
  { role: "Customer Support", startingRate: "$5/hr", monthly: "$800/mo", usEquivalent: "$3,500/mo", savings: "77% savings", href: "/services/customer-support-representative" },
  { role: "Social Media Manager", startingRate: "$6/hr", monthly: "$960/mo", usEquivalent: "$4,500/mo", savings: "79% savings", href: "/services/social-media-manager" },
];

const included = [
  {
    icon: "✅",
    title: "5-Day Free Trial",
    description: "Evaluate your hire on real tasks before you pay a single dollar. No credit card required.",
  },
  {
    icon: "🔒",
    title: "NDA & IP Protection",
    description: "Every employee signs comprehensive NDAs. ISO 27001 certified infrastructure. GDPR compliant.",
  },
  {
    icon: "📋",
    title: "Dedicated Account Manager",
    description: "A single point of contact manages onboarding, performance tracking, and any issues that arise.",
  },
  {
    icon: "🧠",
    title: "AI Tool Training",
    description: "Every hire is trained on relevant AI tools — GitHub Copilot, ChatGPT, Jasper, Surfer SEO — at no extra cost.",
  },
  {
    icon: "⏰",
    title: "Timezone Matching",
    description: "Your employee works your business hours. EST, GMT, AEST — any timezone, any schedule.",
  },
  {
    icon: "🔄",
    title: "Free Replacement",
    description: "If your hire isn't the right fit, we provide a replacement within 48 hours at no additional cost.",
  },
  {
    icon: "📊",
    title: "Performance Reports",
    description: "Weekly and monthly productivity reports so you always know what's getting done.",
  },
  {
    icon: "❌",
    title: "No Lock-In Contracts",
    description: "Month-to-month engagement. Scale up, scale down, or pause anytime with 15-day notice.",
  },
];

const comparison = [
  { factor: "Monthly Cost (Developer)", zedtreeo: "$1,280/mo", local: "$8,500/mo", freelancer: "$4,000–$8,000/mo" },
  { factor: "Recruitment Fee", zedtreeo: "$0", local: "$5,000–$15,000", freelancer: "$0–$500" },
  { factor: "Time to Hire", zedtreeo: "48 hours", local: "4–8 weeks", freelancer: "1–2 weeks" },
  { factor: "Dedication", zedtreeo: "Full-time, exclusive", local: "Full-time, exclusive", freelancer: "Shared, project-based" },
  { factor: "Vetting", zedtreeo: "6-stage, top 5%", local: "Your responsibility", freelancer: "Portfolio review" },
  { factor: "AI Training", zedtreeo: "Included", local: "Not included", freelancer: "Not included" },
  { factor: "Free Trial", zedtreeo: "5 days, no cost", local: "Not available", freelancer: "Not available" },
  { factor: "Replacement Guarantee", zedtreeo: "48-hour free", local: "Restart hiring", freelancer: "Find new freelancer" },
];

const faqs = [
  {
    question: "What does 'starting from $5/hour' mean?",
    answer: "It means the lowest rate for our most affordable roles (virtual assistants, data entry) begins at $5/hour. Actual rates depend on the role complexity, experience level, and specialization required. Technical roles like developers start higher, typically $8–$10/hour.",
  },
  {
    question: "Are there any hidden fees or setup costs?",
    answer: "No. Zero recruitment fees, zero setup costs, zero platform fees. You pay only the hourly rate for hours worked. The 5-day free trial is genuinely free — no credit card required to start.",
  },
  {
    question: "How does the monthly pricing work?",
    answer: "Monthly rates are calculated as hourly rate multiplied by 160 hours (standard full-time). So $5/hour equals $800/month full-time. You can also hire part-time — minimum 4 hours per day — and pay only for hours worked.",
  },
  {
    question: "Can I hire part-time instead of full-time?",
    answer: "Yes. Many clients start with part-time (20–30 hours/week) and scale to full-time as needed. There's no minimum contract duration — month-to-month with 15-day notice to adjust.",
  },
  {
    question: "What's included in the hourly rate?",
    answer: "Everything. AI tool training, dedicated account management, NDA/IP protection, timezone matching, performance reports, and replacement guarantee are all included at no extra cost. There are no add-on fees.",
  },
  {
    question: "How do I pay?",
    answer: "We invoice monthly based on hours worked. Payment via wire transfer, PayPal, or credit card. Net-15 terms are standard; custom billing cycles are available for enterprise clients.",
  },
  {
    question: "What if I need to scale up or down?",
    answer: "Scaling is flexible. Add team members with 48-hour notice. Scale down or pause with 15-day notice. No penalties, no long-term commitments.",
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes. For teams of 5+ dedicated employees, we offer custom pricing with volume discounts. Contact us for a tailored quote based on your team composition and engagement scope.",
  },
];
