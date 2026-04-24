import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { Breadcrumb, SectionHeading, CTASection, TrustBar, FAQ } from "@/components/ui";

export const metadata: Metadata = {
  title: "How It Works — Hire Remote Employees in 5 Steps",
  description:
    "Hire dedicated remote employees through Zedtreeo in 5 simple steps: share requirements, get matched in 48 hours, interview, start a free 5-day trial, then onboard and scale.",
  alternates: { canonical: "https://zedtreeo.com/how-it-works" },
  openGraph: {
    title: "How It Works — Hire Remote Employees in 5 Steps | Zedtreeo",
    description:
      "From first conversation to a fully onboarded team member in as little as 7 days. Free 5-day trial included.",
    url: "https://zedtreeo.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zedtreeo.com" },
          { name: "How It Works", url: "https://zedtreeo.com/how-it-works" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Hire Remote Employees Through Zedtreeo",
          description:
            "Hire dedicated remote employees in 5 simple steps — from sharing requirements to a fully onboarded team member.",
          totalTime: "P7D",
          step: processSteps.map((step, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: step.title,
            text: step.detail,
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
              { label: "How It Works", href: "/how-it-works" },
            ]}
            className="mb-8 opacity-70"
          />
          <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
            5 Simple Steps
          </p>
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
            From First Call to
            <br />
            <span className="text-zt-accent">Fully Onboarded.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Hiring remote talent doesn&apos;t have to be complex. Our streamlined process
            gets you matched with pre-vetted professionals in 48 hours — with a free
            5-day trial before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/get-started" className="zt-btn no-underline">
              Get Started Free
            </Link>
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

      {/* Process Steps — Detailed */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Your Hiring Journey"
            subtitle="From first conversation to a fully integrated team member — in as little as 7 days."
            badge="Process"
          />
          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-zt-accent text-zt-headings font-bold text-2xl flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 p-8 rounded-zt bg-white shadow-zt-card border border-zt-border">
                  <h3 className="text-xl font-semibold text-zt-headings mb-3 !mt-0">
                    {step.title}
                  </h3>
                  <p className="text-zt-body mb-4 leading-relaxed">{step.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1.5 rounded-full bg-zt-near-white text-xs font-medium text-zt-headings border border-zt-border"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Stats */}
      <section className="bg-zt-primary text-white py-16 px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {timelineStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-zt-accent">{stat.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="What's Included"
            subtitle="Every hire comes with full support — no hidden fees, no surprises."
            badge="Inclusions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item) => (
              <div key={item.title} className="p-6 rounded-zt bg-white shadow-zt-card border border-zt-border">
                <div className="w-10 h-10 rounded-full bg-zt-accent/15 flex items-center justify-center mb-4 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-zt-headings !mt-0 mb-2">{item.title}</h3>
                <p className="text-sm text-zt-body mb-0 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about hiring through Zedtreeo."
            badge="FAQs"
          />
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Share your requirements and get matched with pre-vetted talent in 48 hours. Your first 5 days are free."
        buttonText="Start Your Free Trial"
      />
    </main>
  );
}

const processSteps = [
  {
    title: "Share Your Requirements",
    detail:
      "Tell us the role, skills, experience level, timezone, and any tools your hire needs to know. We'll help refine the brief if needed — most clients complete this in a 15-minute call or a quick form.",
    highlights: ["15-min call or form", "Role + skills + timezone", "No obligation"],
  },
  {
    title: "We Match & Vet Candidates",
    detail:
      "Our talent team searches our 500+ candidate pool and screens for technical skills, communication, and cultural fit. You receive 2-4 shortlisted profiles with video introductions within 48 hours.",
    highlights: ["48-hour turnaround", "2-4 shortlisted profiles", "Video intros included"],
  },
  {
    title: "Interview Your Top Picks",
    detail:
      "Review candidate profiles, watch video intros, and interview your favorites directly. We handle scheduling and can provide technical assessments if your role requires them.",
    highlights: ["Direct interviews", "Technical assessments available", "We handle scheduling"],
  },
  {
    title: "Start With a Free 5-Day Trial",
    detail:
      "Your chosen candidate works with your team for 5 days at zero cost. Evaluate their output, communication, and team fit before making any commitment. No credit card required.",
    highlights: ["5 days free", "No credit card", "Full working access"],
  },
  {
    title: "Onboard & Scale",
    detail:
      "Once you're satisfied, your hire transitions to a full engagement. We handle payroll, compliance, equipment, and ongoing HR. Scale up or down anytime — no long-term contracts.",
    highlights: ["No contracts", "We handle payroll", "Scale anytime"],
  },
];

const timelineStats = [
  { value: "<48hrs", label: "To First Shortlist" },
  { value: "5 Days", label: "Free Trial" },
  { value: "<7 Days", label: "Total Time to Hire" },
  { value: "92%", label: "Trial-to-Hire Rate" },
];

const inclusions = [
  { icon: "\u2705", title: "Dedicated Account Manager", desc: "A single point of contact who knows your team, roles, and preferences." },
  { icon: "\uD83D\uDCBB", title: "Equipment & Tools", desc: "We provide laptops, software licenses, and secure workspace infrastructure." },
  { icon: "\uD83D\uDCC8", title: "Performance Monitoring", desc: "Weekly reports, time tracking, and productivity dashboards included." },
  { icon: "\uD83D\uDD12", title: "Security & Compliance", desc: "NDAs, data security protocols, GDPR compliance, and ISO 27001 certification." },
  { icon: "\uD83D\uDD04", title: "Free Replacement", desc: "If a hire doesn't work out, we replace them at no extra cost within the first 30 days." },
  { icon: "\uD83D\uDCB0", title: "No Hidden Costs", desc: "One transparent hourly rate. No recruitment fees, no setup charges, no markups." },
];

const faqs = [
  {
    question: "How long does the hiring process take?",
    answer:
      "Most clients receive their first shortlisted candidates within 48 hours. Including the 5-day free trial, you can have a fully onboarded team member in under 2 weeks.",
  },
  {
    question: "Is the 5-day trial really free?",
    answer:
      "Yes — completely free with no credit card required. Your candidate works with your team for 5 full days so you can evaluate their skills, communication, and cultural fit before committing.",
  },
  {
    question: "What if I'm not happy with my hire?",
    answer:
      "We offer a free replacement within the first 30 days. If the hire isn't the right fit, we'll match you with a new candidate at no additional cost.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "No. All engagements are month-to-month. You can scale up, scale down, or end the engagement at any time with just 30 days' notice.",
  },
  {
    question: "What timezones do your employees work in?",
    answer:
      "We match candidates to your preferred timezone. Whether you need EST, GMT, AEST, or any other timezone — your remote employee works your hours.",
  },
  {
    question: "How do you vet candidates?",
    answer:
      "Every candidate goes through a 6-stage screening: resume review, skills assessment, technical test, communication evaluation, background check, and a trial project. Only the top 5% make it through.",
  },
];
