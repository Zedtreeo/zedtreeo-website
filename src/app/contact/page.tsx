import type { Metadata } from "next";
import { Breadcrumb, CTASection } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Zedtreeo — Get in Touch",
  description:
    "Contact Zedtreeo to discuss your remote staffing needs. Email us, schedule a consultation, or start your free 5-day trial today.",
  alternates: { canonical: "https://zedtreeo.com/contact" },
  openGraph: {
    title: "Contact Zedtreeo — Get in Touch",
    description: "Reach out to discuss your remote staffing requirements or start a free trial.",
    url: "https://zedtreeo.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Zedtreeo",
          url: "https://zedtreeo.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Zedtreeo",
            email: "info@zedtreeo.com",
            url: "https://zedtreeo.com",
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@zedtreeo.com",
              contactType: "sales",
              availableLanguage: ["English"],
            },
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
              { label: "Contact", href: "/contact" },
            ]}
            className="mb-8 opacity-70"
          />
          <div className="max-w-2xl">
            <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
              Let&apos;s Talk About
              <br />
              <span className="text-zt-accent">Your Team.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you need one remote employee or an entire department, we&apos;re
              here to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zt-headings mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium text-zt-headings mb-2">
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
                    <label htmlFor="company" className="block text-sm font-medium text-zt-headings mb-2">
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
                    <label htmlFor="role" className="block text-sm font-medium text-zt-headings mb-2">
                      Role You&apos;re Hiring For
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a role category</option>
                      <option value="software-development">Software Development</option>
                      <option value="virtual-assistant">Virtual Assistant</option>
                      <option value="finance-accounting">Finance &amp; Accounting</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="legal-compliance">Legal &amp; Compliance</option>
                      <option value="healthcare-rcm">Healthcare &amp; RCM</option>
                      <option value="customer-support">Customer Support</option>
                      <option value="cybersecurity">Cybersecurity &amp; IT</option>
                      <option value="design">Graphic Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zt-headings mb-2">
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
                  We respond within 24 hours on business days.
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
                    <p className="text-xs text-zt-body uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:info@zedtreeo.com" className="text-sm text-zt-accent font-medium no-underline hover:underline">
                      info@zedtreeo.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-zt-body uppercase tracking-wider mb-1">Response Time</p>
                    <p className="text-sm text-zt-headings font-medium mb-0">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Fast Track */}
              <div className="p-6 rounded-zt bg-zt-primary text-white">
                <h3 className="text-lg font-semibold text-white mb-3 !mt-0">
                  Ready to Hire Now?
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Skip the inquiry and go straight to our hiring form. Get matched
                  with pre-vetted candidates within 48 hours.
                </p>
                <a
                  href="/get-started"
                  className="zt-btn block text-center no-underline !text-sm"
                >
                  Start Free Trial
                </a>
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
                      <span className="text-sm text-zt-body">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const nextSteps = [
  "We review your requirements within 24 hours",
  "Our team shortlists pre-vetted candidates in 48 hours",
  "You interview and select your preferred candidates",
  "Start with a free 5-day trial — no commitment",
];
