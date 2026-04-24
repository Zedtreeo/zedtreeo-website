import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { Breadcrumb, SectionHeading, CTASection, TrustBar } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Zedtreeo — Remote Staffing Built Different",
  description:
    "Zedtreeo connects global businesses with pre-vetted, AI-trained remote employees from India. Learn about our mission, vetting process, and why 200+ companies trust us.",
  alternates: { canonical: "https://zedtreeo.com/about" },
  openGraph: {
    title: "About Zedtreeo — Remote Staffing Built Different",
    description:
      "Pre-vetted, AI-trained remote talent. Learn why 200+ companies trust Zedtreeo for dedicated remote employees.",
    url: "https://zedtreeo.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Zedtreeo",
          description: metadata.description,
          url: "https://zedtreeo.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "Zedtreeo",
            url: "https://zedtreeo.com",
            foundingDate: "2023",
            description:
              "Zedtreeo provides pre-vetted dedicated remote employees from India starting at $5/hour across software, finance, marketing, legal, and healthcare.",
          },
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
              { label: "About", href: "/about" },
            ]}
            className="mb-8 opacity-70"
          />
          <div className="max-w-3xl">
            <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
              About Zedtreeo
            </p>
            <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
              Remote Staffing,
              <br />
              <span className="text-zt-accent">Built Different.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We don&apos;t send you a list of resumes and disappear. We build
              dedicated remote teams that work as a true extension of your
              business &mdash; pre-vetted, AI-trained, timezone-matched, and
              supported from day one.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Mission */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-zt-accent/15 text-zt-primary text-xs font-bold uppercase tracking-wider mb-4">
                Our Mission
              </span>
              <h2 className="mb-6">
                Make World-Class Talent Accessible to Every Business
              </h2>
              <p className="text-zt-body leading-relaxed mb-4">
                The best talent shouldn&apos;t only be available to companies
                with the biggest budgets. India produces millions of highly
                skilled professionals every year &mdash; developers, accountants,
                marketers, legal experts, healthcare specialists &mdash; many of
                whom are priced out of global opportunities by geography alone.
              </p>
              <p className="text-zt-body leading-relaxed">
                Zedtreeo bridges that gap. We rigorously vet, train on modern AI
                tools, and match dedicated remote employees to businesses
                worldwide. The result: companies get enterprise-grade talent at a
                fraction of local hiring costs, and professionals get careers
                with global teams that value their skills.
              </p>
            </div>
            <div>
              <div className="relative rounded-zt overflow-hidden mb-6">
                <Image
                  src="/images/about/professional-team.webp"
                  alt="Zedtreeo remote staffing team collaborating in a modern office"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-zt"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {missionStats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-zt bg-zt-near-white text-center">
                    <div className="text-2xl font-bold text-zt-accent mb-1">{stat.value}</div>
                    <div className="text-xs text-zt-body uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="How We're Different"
            subtitle="Most staffing agencies match resumes. We build teams."
            badge="Why Zedtreeo"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div key={i} className="p-6 rounded-zt bg-white shadow-zt-card">
                <div className="w-12 h-12 rounded-full bg-zt-accent/15 flex items-center justify-center mb-4 text-2xl">
                  {d.icon}
                </div>
                <h3 className="text-lg font-semibold text-zt-headings mb-2 !mt-0">{d.title}</h3>
                <p className="text-sm text-zt-body mb-0 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Our 6-Stage Vetting Process"
            subtitle="Only the top 5% of applicants make it through. Here's how we get there."
            badge="Quality"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vettingSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zt-accent text-zt-headings font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zt-headings mb-1 !mt-0">{step.title}</h3>
                  <p className="text-sm text-zt-body mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-zt-primary text-white py-zt-section px-6">
        <div className="max-w-zt-content mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zt-accent/20 text-zt-accent text-xs font-bold uppercase tracking-wider mb-4">
            Trust & Security
          </span>
          <h2 className="text-white mb-4">Enterprise-Grade Security & Compliance</h2>
          <p className="text-white/70 max-w-2xl mb-12" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Your data, your IP, and your operations are protected by industry-leading certifications and protocols.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="p-6 rounded-zt bg-white/10 backdrop-blur-sm">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2 !mt-0">{cert.title}</h3>
                <p className="text-sm text-white/60 mb-0">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto text-center">
          <SectionHeading
            title="Serving Businesses Globally"
            subtitle="Our remote employees work with companies across every major market."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {regions.map((region) => (
              <span
                key={region}
                className="px-5 py-2.5 rounded-full bg-zt-near-white text-zt-headings text-sm font-medium"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Meet Our Leadership"
            subtitle="The people behind 500+ successful remote placements."
            badge="Our Team"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-zt-card">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-zt-headings mb-1 !mt-0">{member.name}</h3>
                <p className="text-sm text-zt-accent font-medium mb-2">{member.role}</p>
                <p className="text-xs text-zt-body mb-0 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Remote Team?"
        description="Get matched with pre-vetted talent in 48 hours. Start with a free trial — no commitment, no risk."
      />
    </main>
  );
}

const missionStats = [
  { value: "200+", label: "Companies Served" },
  { value: "500+", label: "Professionals Placed" },
  { value: "50+", label: "Role Categories" },
  { value: "4.8/5", label: "Trustpilot Rating" },
];

const differentiators = [
  {
    icon: "\uD83E\uDDE0",
    title: "AI-Trained Workforce",
    description:
      "Every employee is trained on modern AI tools relevant to their role — GitHub Copilot for developers, ChatGPT for VAs, Jasper for marketers. This isn't a gimmick; it's a 2\u20133x productivity multiplier.",
  },
  {
    icon: "\u23F0",
    title: "Timezone-Matched Teams",
    description:
      "Your remote employees work your business hours — not the other way around. Real-time collaboration, same-day responses, no waiting for the next morning.",
  },
  {
    icon: "\uD83D\uDD0D",
    title: "Top 5% Talent Only",
    description:
      "Six-stage vetting process covering technical skills, English proficiency, AI tool certification, and cultural fit. We reject 95% of applicants so you don't have to.",
  },
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "Enterprise Security",
    description:
      "ISO 27001 certified, CMMI Level 3, GDPR compliant. Every employee signs NDAs and works on secure, encrypted infrastructure.",
  },
  {
    icon: "\uD83E\uDD1D",
    title: "Dedicated, Not Shared",
    description:
      "Your employee works exclusively for you — not split across multiple clients. Full-time commitment, full-time results.",
  },
  {
    icon: "\uD83D\uDCB0",
    title: "Transparent Pricing",
    description:
      "Starting from $5/hour. No recruitment fees, no hidden markups, no long-term contracts. Pay only for the hours worked.",
  },
];

const vettingSteps = [
  { title: "Application Screening", desc: "Resume review, experience verification, and initial qualification check." },
  { title: "Skills Assessment", desc: "Domain-specific technical tests and practical task evaluation." },
  { title: "English Proficiency", desc: "Written and verbal communication assessment for professional fluency." },
  { title: "AI Tool Certification", desc: "Hands-on evaluation of relevant AI tools and automation proficiency." },
  { title: "Mock Project", desc: "Real-world task simulation to assess quality, speed, and problem-solving." },
  { title: "Reference & Background", desc: "Employment verification, reference checks, and background screening." },
];

const certifications = [
  { icon: "\uD83D\uDEE1\uFE0F", title: "ISO 27001", desc: "Information security management system certification." },
  { icon: "\u2B50", title: "CMMI Level 3", desc: "Defined and managed process maturity across the organization." },
  { icon: "\uD83C\uDF10", title: "GDPR Compliant", desc: "Full compliance with EU data protection regulations." },
  { icon: "\uD83D\uDD12", title: "NDA-Backed", desc: "Every employee signs comprehensive NDAs before access." },
];

const teamMembers = [
  {
    name: "Manish",
    role: "Founder & CEO",
    image: "/images/team/manish.webp",
    bio: "Founded Zedtreeo to bridge the global talent gap. Leads company vision, growth strategy, and the AI-first approach to remote staffing.",
  },
  {
    name: "Shalini",
    role: "Head of Operations",
    image: "/images/team/shalini.webp",
    bio: "Leads end-to-end staffing operations, overseeing vetting, onboarding, and client success across 50+ role categories.",
  },
  {
    name: "Rashmi",
    role: "Head of Client Success",
    image: "/images/team/rashmi.webp",
    bio: "Manages ongoing client relationships and retention. Ensures remote teams deliver measurable results from day one.",
  },
  {
    name: "Deepali",
    role: "Head of Talent Acquisition",
    image: "/images/team/deepali.webp",
    bio: "Oversees sourcing and screening pipelines. Responsible for maintaining the top-5% acceptance rate across all disciplines.",
  },
];

const regions = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "New Zealand",
  "Germany",
  "Netherlands",
  "UAE & Middle East",
  "Singapore",
  "Europe",
];
