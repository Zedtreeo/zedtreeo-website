import Image from "next/image";
import JsonLd from "@/components/JsonLd";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Remote Staffing Services by Zedtreeo",
  description:
    "Hire dedicated remote employees across software, finance, marketing, legal, healthcare, and more — starting at $5/hour.",
  url: "https://zedtreeo.com",
  numberOfItems: 9,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Software Development", url: "https://zedtreeo.com/hire/full-stack-developer" },
    { "@type": "ListItem", position: 2, name: "Finance & Accounting", url: "https://zedtreeo.com/hire/virtual-assistant-for-bookkeeping" },
    { "@type": "ListItem", position: 3, name: "Digital Marketing", url: "https://zedtreeo.com/hire/digital-marketer" },
    { "@type": "ListItem", position: 4, name: "Legal & Compliance", url: "https://zedtreeo.com/hire/virtual-legal-staff" },
    { "@type": "ListItem", position: 5, name: "Healthcare & RCM", url: "https://zedtreeo.com/hire/revenue-cycle-management-staff" },
    { "@type": "ListItem", position: 6, name: "Virtual Assistants", url: "https://zedtreeo.com/hire/virtual-assistants" },
    { "@type": "ListItem", position: 7, name: "E-Commerce & Retail", url: "https://zedtreeo.com/hire/remote-employees-for-your-business" },
    { "@type": "ListItem", position: 8, name: "Cybersecurity & IT", url: "https://zedtreeo.com/hire/cyber-security-expert" },
    { "@type": "ListItem", position: 9, name: "Real Estate & Operations", url: "https://zedtreeo.com/hire/remote-employees-for-your-business" },
  ],
};

const aggregateRatingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zedtreeo",
  url: "https://zedtreeo.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "127",
    reviewCount: "98",
  },
};

export default function HomePage() {
  return (
    <main>
      <JsonLd data={homeJsonLd} />
      <JsonLd data={aggregateRatingJsonLd} />
      {/* Hero Section */}
      <section className="relative bg-zt-primary text-white py-zt-section px-6 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('/zedtreeo-hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-zt-content mx-auto text-center">
          <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Pre-vetted &middot; AI-trained &middot; Timezone-matched
          </p>
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
            Hire Smarter Remote Talent
            <br />
            <span className="text-zt-accent">in 7 Days Flat.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center" style={{ maxWidth: "672px", marginLeft: "auto", marginRight: "auto" }}>
            Pre-vetted dedicated employees from India — software developers,
            accountants, marketers, legal staff, and more. Starting at $5/hour
            with a free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/get-started"
              className="zt-btn text-center no-underline"
            >
              Hire Your Team Now
            </a>
            <a
              href="/candidates"
              className="inline-block px-8 py-3 rounded-zt-pill border-2 border-zt-accent font-bold hover:bg-zt-accent hover:text-zt-headings transition-all text-center"
              style={{ color: "#8FD299", textDecoration: "none" }}
            >
              Browse Candidates
            </a>
          </div>
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zt-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-zt-near-white py-8 px-6">
        <div className="max-w-zt-content mx-auto flex flex-wrap items-center justify-center gap-8 text-zt-body text-sm">
          <span className="font-semibold">Trusted by 200+ companies globally</span>
          <span>•</span>
          <span>ISO 27001 Certified</span>
          <span>•</span>
          <span>CMMI Level 3</span>
          <span>•</span>
          <span>GDPR Compliant</span>
          <span>•</span>
          <span>&#11088; 4.8/5 on Trustpilot</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <h2 className="text-center mb-4">
            Remote Talent Across Every Function
          </h2>
          <p className="text-center text-zt-body max-w-2xl mx-auto mb-12">
            From software development to finance, marketing to legal — hire
            dedicated professionals who integrate seamlessly with your team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/hire/${service.slug}`}
                className="group block rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline overflow-hidden"
              >
                {service.image && (
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-zt-headings mb-2 group-hover:text-zt-accent transition-colors !mt-0">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zt-body mb-0">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <h2 className="text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-zt-body max-w-xl mx-auto mb-12">
            From first conversation to a fully onboarded remote team member —
            in as little as 7 days.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                {step.image ? (
                  <div className="relative w-full h-36 rounded-zt overflow-hidden mb-4">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-zt-accent text-zt-headings font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {i + 1}
                  </div>
                )}
                <div className="inline-block px-3 py-1 rounded-full bg-zt-accent/15 text-zt-primary text-xs font-bold mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-base font-semibold text-zt-headings mb-2 !mt-0">
                  {step.title}
                </h3>
                <p className="text-sm text-zt-body mb-0">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Social Proof / Testimonials ───── */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-zt-accent/10 text-zt-accent text-xs font-bold uppercase tracking-wider mb-4">
              Client Results
            </span>
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-zt-body max-w-2xl mx-auto">
              Real feedback from companies that hired remote employees through Zedtreeo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-zt bg-zt-near-white border border-zt-border">
                {/* Star rating */}
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-zt-body mb-4 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-zt-headings">{t.name}</div>
                  <div className="text-xs text-zt-body">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.trustpilot.com/review/zedtreeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zt-primary hover:text-zt-accent transition-colors no-underline"
            >
              See all reviews on Trustpilot
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Zedtreeo */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <h2 className="text-center mb-4">Why Companies Choose Zedtreeo</h2>
          <p className="text-center text-zt-body max-w-2xl mx-auto mb-12">
            We don&apos;t just match resumes — we build dedicated teams that work
            as an extension of your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="p-6 rounded-zt bg-zt-near-white text-center"
              >
                <div className="w-12 h-12 rounded-full bg-zt-accent/15 flex items-center justify-center mx-auto mb-4 text-xl">
                  {d.icon}
                </div>
                <h3 className="text-base font-semibold text-zt-headings mb-2 !mt-0">
                  {d.title}
                </h3>
                <p className="text-sm text-zt-body mb-0">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Founder Story — EEAT Trust Anchor ───── */}
      <section className="bg-zt-primary text-white py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-zt-accent/20 text-zt-accent text-xs font-bold uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="text-white mb-4">Built by Operators, Not Middlemen</h2>
          </div>
          <div className="space-y-5 text-white/80 leading-relaxed">
            <p>
              Zedtreeo was founded in 2023 by a team that spent over a decade building and managing
              remote teams across software, finance, marketing, legal, and healthcare. We saw the same
              problems everywhere: agencies charging 3&ndash;4x markups, inconsistent vetting, zero
              accountability after placement, and clients left managing people they never properly evaluated.
            </p>
            <p>
              We built Zedtreeo to fix that. Every professional on our platform goes through a multi-stage
              vetting process — technical assessments, communication screening, AI tool proficiency checks,
              and background verification. We don&apos;t just match resumes to job descriptions. We evaluate
              work quality, reliability, and timezone compatibility before you ever see a profile.
            </p>
            <p>
              That&apos;s why we offer a <strong className="text-white">free 5-day trial</strong> on every
              placement. We have skin in the game. If the hire doesn&apos;t work out, we replace them at
              no cost. Over <strong className="text-white">500+ placements</strong> across 200+ companies
              globally, our retention rate sits above 93%.
            </p>
            <p className="text-zt-accent font-medium">
              We&apos;re not a marketplace. We&apos;re your dedicated hiring partner — with the operational
              experience to back it up.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-zt-accent">500+</div>
              <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Professionals Placed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zt-accent">200+</div>
              <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zt-accent">93%+</div>
              <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zt-accent">28+</div>
              <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Role Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-narrow mx-auto">
          <div className="zt-cta">
            <h3>Ready to Build Your Remote Team?</h3>
            <p>
              Get matched with pre-vetted talent in 48 hours. Start with a free
              trial — no commitment, no risk.
            </p>
            <a href="/get-started" className="zt-btn no-underline">
              Start Hiring Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const heroStats = [
  { value: "70–90%", label: "Cost Savings" },
  { value: "<7 Days", label: "Time to Hire" },
  { value: "500+", label: "Professionals Placed" },
  { value: "4.8/5", label: "Trustpilot Rating" },
];

const services = [
  {
    image: "/images/services/service-software-development.svg",
    title: "Software Development",
    slug: "full-stack-developer",
    description: "Full-stack, frontend, backend, mobile, and DevOps engineers.",
  },
  {
    image: "/images/services/service-finance-accounting.svg",
    title: "Finance & Accounting",
    slug: "virtual-assistant-for-bookkeeping",
    description: "Bookkeepers, accountants, financial analysts, and RCM staff.",
  },
  {
    image: "/images/services/service-marketing.svg",
    title: "Digital Marketing",
    slug: "digital-marketer",
    description: "SEO specialists, content marketers, PPC managers, and social media experts.",
  },
  {
    image: "/images/services/service-legal.svg",
    title: "Legal & Compliance",
    slug: "virtual-legal-staff",
    description: "Paralegals, legal researchers, probate specialists, and compliance staff.",
  },
  {
    image: "/images/services/service-healthcare.svg",
    title: "Healthcare",
    slug: "revenue-cycle-management-staff",
    description: "Medical coders, RCM specialists, healthcare VAs, and billing staff.",
  },
  {
    image: "/images/services/service-virtual-assistants.svg",
    title: "AI & Virtual Assistants",
    slug: "virtual-assistants",
    description: "Executive assistants, admin support, data entry, and AI-powered roles.",
  },
  {
    image: "/images/services/service-ecommerce-retail.svg",
    title: "E-Commerce & Retail",
    slug: "remote-employees-for-your-business",
    description: "Store managers, product listers, customer support, and fulfillment staff.",
  },
  {
    image: "/images/services/service-logistics-operations.svg",
    title: "Cybersecurity & IT",
    slug: "cyber-security-expert",
    description: "Security analysts, IT support, network engineers, and DevSecOps.",
  },
  {
    image: "/images/services/service-real-estate.svg",
    title: "Real Estate & Operations",
    slug: "remote-employees-for-your-business",
    description: "Transaction coordinators, property managers, and operations staff.",
  },
];

const steps = [
  {
    image: "/images/process/process-step1-requirements.svg",
    title: "Tell Us Your Needs",
    desc: "Share your role requirements, skills, and timeline.",
  },
  {
    image: "/images/process/process-step2-matching.svg",
    title: "We Match & Vet",
    desc: "Our team shortlists pre-vetted candidates within 48 hours.",
  },
  {
    image: "/images/process/process-step3-interview.svg",
    title: "Review & Interview",
    desc: "Interview your shortlisted candidates at your convenience.",
  },
  {
    image: "/images/process/process-step3-free-trial.svg",
    title: "Free Trial",
    desc: "Start with a no-risk trial to evaluate fit and performance.",
  },
  {
    image: "/images/process/process-step5-ongoing-success.svg",
    title: "Onboard & Scale",
    desc: "Your dedicated employee integrates with your team seamlessly.",
  },
];

const differentiators = [
  {
    icon: "\u23F0",
    title: "Timezone Aligned",
    desc: "Your remote team works your hours \u2014 EST, GMT, AEST, or any timezone you need.",
  },
  {
    icon: "\uD83E\uDDE0",
    title: "AI-Trained Staff",
    desc: "Every candidate is trained on ChatGPT, Claude, and modern AI productivity tools.",
  },
  {
    icon: "\uD83D\uDCB0",
    title: "70\u201390% Savings",
    desc: "Starting from $5/hour with no recruitment fees, no overhead, and no long-term contracts.",
  },
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "ISO & GDPR Certified",
    desc: "Enterprise-grade security with ISO 27001, CMMI Level 3, and full GDPR compliance.",
  },
];

const testimonials = [
  {
    quote: "We hired two full-stack developers through Zedtreeo and had them onboarded within a week. The quality of work has been exceptional — they shipped our MVP 3 weeks ahead of schedule.",
    name: "Marcus T.",
    role: "CTO, SaaS Startup (US)",
  },
  {
    quote: "Our bookkeeping VA handles everything from invoicing to reconciliation. She's more reliable than the local hire we had before, at a quarter of the cost. The free trial made the decision risk-free.",
    name: "Sarah L.",
    role: "Founder, E-Commerce Brand (Australia)",
  },
  {
    quote: "We scaled from 1 to 6 remote employees in 4 months. Zedtreeo handles vetting, replacement guarantees, and timezone matching. It's the most operationally mature staffing partner we've worked with.",
    name: "James K.",
    role: "VP Operations, Digital Agency (UK)",
  },
];
