import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Breadcrumb, FAQ, CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Zedtreeo — Hire Remote Staff Starting $5/hr | Zedtreeo",
  description:
    "Contact Zedtreeo to hire pre-vetted remote employees globally. Offices in India and the US. Get matched with talent in 48 hours. Start a free trial today.",
  alternates: { canonical: "https://zedtreeo.com/contact" },
  openGraph: {
    title: "Contact Zedtreeo — Hire Remote Staff Starting $5/hr",
    description:
      "Reach out to hire dedicated remote employees. Offices in India and the US. Free 5-day trial, no contracts.",
    url: "https://zedtreeo.com/contact",
  },
};

/* ─── Office data ─── */
const offices = [
  {
    id: "india-hq",
    label: "India — Headquarters",
    name: "Zedtreeo Technologies Pvt. Ltd.",
    street: "B-18, Malviya Industrial Area",
    city: "Jaipur",
    state: "Rajasthan",
    zip: "302017",
    country: "India",
    countryCode: "IN",
    email: "info@zedtreeo.com",
    phone: "+91-141-4036-274",
    hours: "Mon–Sat, 9:30 AM – 7:00 PM IST",
    mapUrl:
      "https://www.google.com/maps/place/Jaipur,+Rajasthan,+India",
    flag: "🇮🇳",
  },
  {
    id: "us-office",
    label: "United States",
    name: "Zedtreeo LLC",
    street: "1209 N Orange Street",
    city: "Wilmington",
    state: "Delaware",
    zip: "19801",
    country: "United States",
    countryCode: "US",
    email: "us@zedtreeo.com",
    phone: "+1 (302) 485-0170",
    hours: "Mon–Fri, 9:00 AM – 6:00 PM EST",
    mapUrl:
      "https://www.google.com/maps/place/Wilmington,+DE,+USA",
    flag: "🇺🇸",
  },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    question: "How quickly can I hire a remote employee through Zedtreeo?",
    answer:
      "Most clients receive a shortlist of pre-vetted candidates within 48 hours. After you interview and select, onboarding takes 3–5 business days. Total time from inquiry to working team member: typically 7 days.",
  },
  {
    question: "What does Zedtreeo charge for remote staffing?",
    answer:
      "Rates start from $5/hour with no recruitment fees, setup costs, or long-term contracts. Pricing varies by role complexity — virtual assistants start at $5–6/hr, mid-skill roles at $6–8/hr, and technical specialists at $8–10/hr.",
  },
  {
    question: "Is there a free trial before committing?",
    answer:
      "Yes. Every engagement begins with a free 5-day trial. If the candidate isn't the right fit, we replace them at no cost. You only pay once you're fully satisfied.",
  },
  {
    question: "What time zones do your remote employees work in?",
    answer:
      "Our talent is based in India (IST) but works across all global time zones. Many clients in the US, UK, Australia, and Middle East have team members who overlap 4–8 hours with their local business hours.",
  },
  {
    question: "Do I get a dedicated employee or shared resources?",
    answer:
      "Every Zedtreeo hire is a full-time, dedicated employee who works exclusively for your company. They are not shared across clients. You manage them directly through your preferred tools and workflows.",
  },
  {
    question: "How do I contact Zedtreeo outside of business hours?",
    answer:
      "Email info@zedtreeo.com anytime — we monitor inquiries around the clock. For urgent matters, use the live chat on our website. Our team responds to all inquiries within 24 hours.",
  },
  {
    question: "What roles can I hire through Zedtreeo?",
    answer:
      "We provide talent across 28+ categories including software development, finance & accounting, digital marketing, legal & compliance, healthcare & RCM, virtual assistants, cybersecurity, design, and more.",
  },
  {
    question: "Where are Zedtreeo's offices located?",
    answer:
      "Zedtreeo is headquartered in Jaipur, India with a registered US office in Wilmington, Delaware. We serve clients globally across the US, Europe, Australia, Canada, Middle East, and New Zealand.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Schema: ContactPage */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Zedtreeo",
          description: metadata.description,
          url: "https://zedtreeo.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Zedtreeo",
            email: "info@zedtreeo.com",
            url: "https://zedtreeo.com",
            telephone: "+91-141-4036-274",
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "info@zedtreeo.com",
                telephone: "+91-141-4036-274",
                contactType: "sales",
                availableLanguage: ["English"],
                areaServed: "Global",
              },
              {
                "@type": "ContactPoint",
                email: "us@zedtreeo.com",
                telephone: "+1-302-485-0170",
                contactType: "sales",
                availableLanguage: ["English"],
                areaServed: "US",
              },
            ],
          },
        }}
      />

      {/* Schema: LocalBusiness (India HQ) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://zedtreeo.com/#india-hq",
          name: "Zedtreeo Technologies Pvt. Ltd.",
          image: "https://zedtreeo.com/zedtreeo-logo-icon.svg",
          url: "https://zedtreeo.com",
          telephone: "+91-141-4036-274",
          email: "info@zedtreeo.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "B-18, Malviya Industrial Area",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302017",
            addressCountry: "IN",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:30",
            closes: "19:00",
          },
          priceRange: "$$",
          areaServed: { "@type": "GeoShape", name: "Global" },
        }}
      />

      {/* Schema: LocalBusiness (US Office) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://zedtreeo.com/#us-office",
          name: "Zedtreeo LLC",
          image: "https://zedtreeo.com/zedtreeo-logo-icon.svg",
          url: "https://zedtreeo.com",
          telephone: "+1-302-485-0170",
          email: "us@zedtreeo.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1209 N Orange Street",
            addressLocality: "Wilmington",
            addressRegion: "DE",
            postalCode: "19801",
            addressCountry: "US",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
          priceRange: "$$",
          areaServed: { "@type": "GeoShape", name: "Global" },
        }}
      />

      {/* Schema: FAQPage */}
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
              { label: "Contact", href: "/contact" },
            ]}
            className="mb-8 opacity-70"
          />
          <div className="max-w-2xl">
            <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
              Let&apos;s Build
              <br />
              <span className="text-zt-accent">Your Remote Team.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Whether you need one remote employee or an entire department,
              we&apos;re here to help. Reach out and get matched with pre-vetted
              talent within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-zt-near-white border-b border-zt-border">
        <div className="max-w-zt-content mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-zt-primary mb-0">
                  {stat.value}
                </p>
                <p className="text-xs text-zt-body mb-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="mb-2">Send Us a Message</h2>
              <p className="text-zt-body mb-8">
                Tell us about your hiring needs and we&apos;ll get back to you
                within 24 hours with a shortlist of pre-vetted candidates.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zt-headings mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zt-headings mb-2"
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-zt-headings mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent transition-all"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-zt-headings mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-zt-headings mb-2"
                    >
                      Role You&apos;re Hiring For
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a role category</option>
                      <option value="software-development">
                        Software Development
                      </option>
                      <option value="virtual-assistant">
                        Virtual Assistant
                      </option>
                      <option value="finance-accounting">
                        Finance &amp; Accounting
                      </option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="legal-compliance">
                        Legal &amp; Compliance
                      </option>
                      <option value="healthcare-rcm">
                        Healthcare &amp; RCM
                      </option>
                      <option value="customer-support">Customer Support</option>
                      <option value="cybersecurity">
                        Cybersecurity &amp; IT
                      </option>
                      <option value="design">Graphic &amp; UI/UX Design</option>
                      <option value="data-science">
                        Data Science &amp; Analytics
                      </option>
                      <option value="project-management">
                        Project Management
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="team-size"
                      className="block text-sm font-medium text-zt-headings mb-2"
                    >
                      Team Size Needed
                    </label>
                    <select
                      id="team-size"
                      name="team-size"
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent transition-all bg-white"
                    >
                      <option value="">How many hires?</option>
                      <option value="1">1 employee</option>
                      <option value="2-5">2–5 employees</option>
                      <option value="6-10">6–10 employees</option>
                      <option value="10+">10+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zt-headings mb-2"
                  >
                    Tell Us About Your Needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-zt border border-zt-border text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent transition-all resize-vertical"
                    placeholder="Describe the role, skills needed, timezone preference, and any other requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="zt-btn !py-3.5 !px-10 border-none cursor-pointer text-base"
                >
                  Send Message
                </button>
                <p className="text-xs text-zt-body mt-2">
                  We respond within 24 hours on business days. No spam, ever.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <div className="p-6 rounded-zt bg-zt-near-white">
                <h3 className="text-lg font-semibold text-zt-headings mb-4 !mt-0">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-zt-body uppercase tracking-wider mb-1">
                      General Inquiries
                    </p>
                    <a
                      href="mailto:info@zedtreeo.com"
                      className="text-sm text-zt-accent font-medium no-underline hover:underline"
                    >
                      info@zedtreeo.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-zt-body uppercase tracking-wider mb-1">
                      US Clients
                    </p>
                    <a
                      href="mailto:us@zedtreeo.com"
                      className="text-sm text-zt-accent font-medium no-underline hover:underline"
                    >
                      us@zedtreeo.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-zt-body uppercase tracking-wider mb-1">
                      India HQ
                    </p>
                    <a
                      href="tel:+911414036274"
                      className="text-sm text-zt-headings font-medium no-underline hover:text-zt-accent"
                    >
                      +91-141-4036-274
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-zt-body uppercase tracking-wider mb-1">
                      US Office
                    </p>
                    <a
                      href="tel:+13024850170"
                      className="text-sm text-zt-headings font-medium no-underline hover:text-zt-accent"
                    >
                      +1 (302) 485-0170
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-zt-body uppercase tracking-wider mb-1">
                      Response Time
                    </p>
                    <p className="text-sm text-zt-headings font-medium mb-0">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule a Call */}
              <div className="p-6 rounded-zt border-2 border-zt-accent/30" style={{ background: "linear-gradient(135deg, #f0faf2 0%, #e8f5ee 100%)" }}>
                <h3 className="text-lg font-semibold text-zt-headings mb-3 !mt-0">
                  Schedule a Discovery Call
                </h3>
                <p className="text-sm text-zt-body mb-4">
                  Prefer to talk? Book a free call with our team to discuss your hiring needs.
                </p>
                <a
                  href="https://scheduler.zoom.us/zedtreeo/intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 px-6 rounded-full border-2 text-sm font-bold no-underline transition-colors"
                  style={{ borderColor: "#374B47", color: "#374B47" }}
                >
                  Schedule a Call
                </a>
              </div>

              {/* Fast Track */}
              <div className="p-6 rounded-zt bg-zt-primary text-white">
                <h3 className="text-lg font-semibold text-white mb-3 !mt-0">
                  Ready to Hire Now?
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Skip the inquiry and go straight to our hiring form. Get
                  matched with pre-vetted candidates within 48 hours.
                </p>
                <Link
                  href="/get-started"
                  className="zt-btn block text-center no-underline !text-sm"
                >
                  Start Free Trial
                </Link>
              </div>

              {/* What to Expect */}
              <div className="p-6 rounded-zt border border-zt-border">
                <h3 className="text-lg font-semibold text-zt-headings mb-4 !mt-0">
                  What Happens Next
                </h3>
                <ol className="space-y-3 list-none p-0 m-0">
                  {nextSteps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-zt-accent/15 text-zt-primary text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <span className="text-sm font-semibold text-zt-headings">
                          {step.title}
                        </span>
                        <p className="text-xs text-zt-body mb-0 mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-zt-section px-6 bg-zt-near-white">
        <div className="max-w-zt-content mx-auto">
          <div className="text-center mb-12">
            <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Our Offices
            </p>
            <h2 className="mb-4">Global Presence, Local Expertise</h2>
            <p className="text-zt-body max-w-2xl mx-auto">
              Headquartered in India with a US presence, Zedtreeo serves clients
              globally across North America, Europe, Australia, the Middle East,
              and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-white rounded-zt p-8 shadow-sm border border-zt-border"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" role="img" aria-label={office.country}>
                    {office.flag}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-zt-headings !mt-0 !mb-0">
                      {office.label}
                    </h3>
                    <p className="text-xs text-zt-body mb-0">{office.name}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-zt-accent shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-zt-headings font-medium mb-0">
                        {office.street}
                      </p>
                      <p className="text-sm text-zt-body mb-0">
                        {office.city}, {office.state} {office.zip}
                      </p>
                      <p className="text-sm text-zt-body mb-0">
                        {office.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-zt-accent shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <a
                      href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                      className="text-sm text-zt-headings font-medium no-underline hover:text-zt-accent"
                    >
                      {office.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-zt-accent shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-zt-accent font-medium no-underline hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-zt-accent shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm text-zt-body mb-0">{office.hours}</p>
                  </div>
                </div>

                {/* Map Link */}
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-zt-primary font-semibold no-underline hover:text-zt-accent transition-colors"
                >
                  View on Google Maps
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Companies Choose Zedtreeo */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Companies Choose Zedtreeo</h2>
            <p className="text-zt-body max-w-2xl mx-auto">
              500+ businesses globally trust Zedtreeo for their remote staffing
              needs. Here&apos;s what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-zt border border-zt-border bg-white text-center"
              >
                <div className="w-12 h-12 rounded-full bg-zt-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span
                    className="text-zt-primary"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                </div>
                <h3 className="text-base font-semibold text-zt-headings !mt-0 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zt-body mb-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-zt-section px-6 bg-zt-near-white">
        <div className="max-w-zt-narrow mx-auto">
          <FAQ
            title="Frequently Asked Questions"
            items={faqs}
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Scale Your Team?"
        description="Hire pre-vetted remote employees starting at $5/hour. Free 5-day trial, no contracts, no recruitment fees."
        buttonText="Start Your Free Trial"
        buttonHref="/get-started"
      />
    </main>
  );
}

/* ─── Static Data ─── */

const quickStats = [
  { value: "500+", label: "Clients Served Globally" },
  { value: "48hrs", label: "Average Matching Time" },
  { value: "28+", label: "Role Categories" },
  { value: "$5/hr", label: "Starting Rate" },
];

const nextSteps = [
  {
    title: "We Review Your Requirements",
    desc: "Within 24 hours of your inquiry",
  },
  {
    title: "Shortlist Pre-Vetted Candidates",
    desc: "Matched to your role, skills, and timezone",
  },
  {
    title: "You Interview & Select",
    desc: "Direct access to candidates of your choice",
  },
  {
    title: "Free 5-Day Trial Begins",
    desc: "No commitment — replace at no cost if not satisfied",
  },
];

const whyChoose = [
  {
    title: "Free 5-Day Trial",
    desc: "Start risk-free. If the candidate isn't the right fit, we replace them at no cost.",
    icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  {
    title: "No Hidden Fees",
    desc: "Transparent hourly rates from $5/hr. Zero recruitment fees, setup costs, or long-term contracts.",
    icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  {
    title: "Dedicated Talent",
    desc: "Every hire works exclusively for you — no shared resources. Manage them directly through your tools.",
    icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>',
  },
  {
    title: "70–90% Savings",
    desc: "Same quality talent at a fraction of US or European hiring costs. Save without compromising output.",
    icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>',
  },
];
