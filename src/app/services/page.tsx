import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { Breadcrumb, SectionHeading, CTASection, TrustBar } from "@/components/ui";

export const metadata: Metadata = {
  title: "Remote Staffing Services — Hire Across Every Function",
  description:
    "Explore Zedtreeo's remote staffing services. Hire dedicated developers, accountants, marketers, legal staff, healthcare specialists, and more from $5/hr.",
  alternates: { canonical: "https://zedtreeo.com/services" },
  openGraph: {
    title: "Remote Staffing Services — Hire Across Every Function",
    description:
      "Dedicated remote employees across software, finance, marketing, legal, healthcare, and more. Starting at $5/hr.",
    url: "https://zedtreeo.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Remote Staffing Services by Zedtreeo",
          description:
            "Hire dedicated remote employees across every business function — starting at $5/hour.",
          url: "https://zedtreeo.com/services",
          numberOfItems: serviceCategories.length,
          itemListElement: serviceCategories.map((cat, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: cat.title,
            url: `https://zedtreeo.com${cat.href}`,
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
              { label: "Services", href: "/services" },
            ]}
            className="mb-8 opacity-70"
          />
          <div className="max-w-3xl">
            <p className="text-zt-accent text-sm font-semibold uppercase tracking-widest mb-4">
              50+ Role Categories
            </p>
            <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
              Remote Talent Across
              <br />
              <span className="text-zt-accent">Every Function.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From software development to healthcare, marketing to legal &mdash;
              hire dedicated remote employees who integrate seamlessly with your
              team. Starting at $5/hour with a free 5-day trial.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Service Categories Grid */}
      <section className="py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Our Services"
            subtitle="Click any category to see roles, pricing, skills, and start your free trial."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline overflow-hidden"
              >
                {cat.image && (
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-zt-headings group-hover:text-zt-accent transition-colors !mt-0 mb-0">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-zt-accent font-bold bg-zt-accent/10 px-2.5 py-1 rounded-full">
                      From {cat.startingRate}
                    </span>
                  </div>
                  <p className="text-sm text-zt-body mb-3">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.roles.map((role) => (
                      <span key={role} className="text-xs px-2 py-0.5 rounded bg-zt-near-white text-zt-body">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Through Us */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Why Hire Through Zedtreeo"
            subtitle="One platform for all your remote staffing needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="text-base font-semibold text-zt-headings mb-2 !mt-0">{h.title}</h3>
                <p className="text-sm text-zt-body mb-0">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Not Sure Where to Start?"
        description="Tell us your requirements and we'll recommend the right roles and team structure for your business."
        buttonText="Get a Free Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}

const serviceCategories = [
  {
    title: "Software Development",
    href: "/hire/full-stack-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$8/hr",
    description: "Full-stack, frontend, backend, mobile, DevOps, and QA engineers.",
    roles: ["Full-Stack", "Frontend", "Backend", "DevOps", "QA", "Mobile"],
  },
  {
    title: "Virtual Assistants",
    href: "/hire/virtual-assistants",
    image: "/images/services/service-virtual-assistants.svg",
    startingRate: "$5/hr",
    description: "Executive support, admin, data entry, calendar management, and research.",
    roles: ["Executive VA", "Admin VA", "Research", "Data Entry"],
  },
  {
    title: "Finance & Accounting",
    href: "/hire/virtual-assistant-for-bookkeeping",
    image: "/images/services/service-finance-accounting.svg",
    startingRate: "$5/hr",
    description: "Bookkeepers, accountants, financial analysts, payroll, and tax specialists.",
    roles: ["Bookkeeper", "Accountant", "Payroll", "Tax Prep"],
  },
  {
    title: "Digital Marketing",
    href: "/hire/digital-marketer",
    image: "/images/services/service-marketing.svg",
    startingRate: "$7/hr",
    description: "SEO, PPC, content marketing, social media, and email marketing specialists.",
    roles: ["SEO", "PPC", "Content", "Social Media", "Email"],
  },
  {
    title: "Legal & Compliance",
    href: "/hire/virtual-legal-staff",
    image: "/images/services/service-legal.svg",
    startingRate: "$6/hr",
    description: "Paralegals, legal researchers, contract managers, and compliance staff.",
    roles: ["Paralegal", "Legal Research", "Contracts", "Compliance"],
  },
  {
    title: "Healthcare & RCM",
    href: "/hire/revenue-cycle-management-staff",
    image: "/images/services/service-healthcare.svg",
    startingRate: "$5/hr",
    description: "Medical coders, billers, RCM specialists, and healthcare VAs.",
    roles: ["Medical Coding", "Billing", "AR Follow-Up", "Credentialing"],
  },
  {
    title: "Cybersecurity & IT",
    href: "/hire/cyber-security-expert",
    image: "/images/services/service-logistics-operations.svg",
    startingRate: "$5/hr",
    description: "Security analysts, pen testers, SOC operators, and IT support staff.",
    roles: ["SOC Analyst", "Pen Tester", "IT Support", "GRC"],
  },
  {
    title: "DevOps & Cloud",
    href: "/hire/devops-engineers",
    image: "/images/services/service-software-development.svg",
    startingRate: "$9/hr",
    description: "AWS, Azure, GCP engineers. CI/CD, Kubernetes, infrastructure automation.",
    roles: ["AWS", "Azure", "Kubernetes", "Terraform"],
  },
  {
    title: "Customer Support",
    href: "/hire/customer-support-representative",
    image: "/images/services/service-virtual-assistants.svg",
    startingRate: "$5/hr",
    description: "Phone, email, chat, and social media support agents.",
    roles: ["Phone", "Email", "Live Chat", "Social"],
  },
  {
    title: "Graphic Design",
    href: "/hire/graphic-designer",
    image: "/images/services/service-ecommerce-retail.svg",
    startingRate: "$6/hr",
    description: "Brand identity, UI/UX, social media creatives, and marketing collateral.",
    roles: ["Branding", "UI/UX", "Social Media", "Print"],
  },
  {
    title: "Content Writing",
    href: "/hire/content-writer",
    image: "/images/services/service-marketing.svg",
    startingRate: "$5/hr",
    description: "SEO blogs, case studies, whitepapers, web copy, and email campaigns.",
    roles: ["SEO Blogs", "Case Studies", "Web Copy", "Email"],
  },
  {
    title: "SEO Specialists",
    href: "/hire/seo-specialist",
    image: "/images/services/service-marketing.svg",
    startingRate: "$6/hr",
    description: "Technical SEO, link building, content strategy, and analytics.",
    roles: ["Technical SEO", "Link Building", "Content", "Analytics"],
  },
  {
    title: "Social Media Management",
    href: "/hire/social-media-manager",
    image: "/images/services/service-marketing.svg",
    startingRate: "$6/hr",
    description: "Strategy, content creation, community management, and paid social.",
    roles: ["Strategy", "Content", "Community", "Paid Ads"],
  },
  {
    title: "Data Entry",
    href: "/hire/data-entry-assistant",
    image: "/images/services/service-virtual-assistants.svg",
    startingRate: "$5/hr",
    description: "CRM updates, spreadsheet management, form processing, and data cleaning.",
    roles: ["CRM Entry", "Spreadsheets", "Forms", "Data Cleaning"],
  },
  {
    title: "General Remote Employees",
    href: "/hire/remote-employees-for-your-business",
    image: "/images/services/service-ecommerce-retail.svg",
    startingRate: "$5/hr",
    description: "Don't see your role? We hire across 50+ categories for any function.",
    roles: ["Any Role", "Any Function", "Custom Teams"],
  },
];

const highlights = [
  { icon: "\uD83D\uDD0D", title: "Pre-Vetted", desc: "Top 5% of applicants. Six-stage screening process." },
  { icon: "\uD83E\uDDE0", title: "AI-Trained", desc: "Every hire trained on modern AI tools for their role." },
  { icon: "\u23F0", title: "Timezone-Matched", desc: "Work your hours. EST, GMT, AEST — any timezone." },
  { icon: "\uD83D\uDCB0", title: "From $5/hr", desc: "No fees, no markups, no contracts. Free trial." },
];
