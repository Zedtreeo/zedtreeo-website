import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { Breadcrumb, SectionHeading, CTASection, TrustBar } from "@/components/ui";
import ServiceCategoryFilter, { type ServiceCardData, type CategoryKey } from "./ServiceCategoryFilter";

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
              50+ Role Categories &middot; 8 Domains
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

      {/* Categorized Service Grid */}
      <section className="py-zt-section px-6 bg-zt-near-white">
        <div className="max-w-zt-content mx-auto">
          <SectionHeading
            title="Browse by Category"
            subtitle="Filter by domain to find the exact role you need. Click any card for pricing, skills, and a free trial."
          />
          <ServiceCategoryFilter services={serviceCategories} />
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

/* ─── Service cards with category assignments ─── */
const serviceCategories: ServiceCardData[] = [
  /* ── Software Engineering ── */
  {
    title: "Software Development",
    href: "/services/full-stack-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$8/hr",
    description: "Full-stack, frontend, backend, mobile, DevOps, and QA engineers.",
    roles: ["Full-Stack", "Frontend", "Backend", "DevOps", "QA", "Mobile"],
    category: "software" as CategoryKey,
  },
  {
    title: "React Developers",
    href: "/services/hire-react-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "React.js, Next.js, Redux, TypeScript specialists. Component-based, AI-augmented development.",
    roles: ["React.js", "Next.js", "Redux", "React Native"],
    category: "software" as CategoryKey,
  },
  {
    title: "Frontend Developers",
    href: "/services/hire-frontend-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "React, Vue, Angular, TypeScript. Pixel-perfect, accessible, performance-optimized UIs.",
    roles: ["React", "Vue.js", "Angular", "TypeScript"],
    category: "software" as CategoryKey,
  },
  {
    title: "Node.js Developers",
    href: "/services/hire-nodejs-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Express, NestJS, serverless, real-time apps. High-performance JavaScript backends.",
    roles: ["Express", "NestJS", "Serverless", "Real-Time"],
    category: "software" as CategoryKey,
  },
  {
    title: "Python Developers",
    href: "/services/hire-python-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Django, FastAPI, Flask, data engineering, automation. Scalable Python backends.",
    roles: ["Django", "FastAPI", "Flask", "Data Engineering"],
    category: "software" as CategoryKey,
  },
  {
    title: "PHP Developers",
    href: "/services/hire-php-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Laravel, Symfony, CodeIgniter, WordPress backend. Modern PHP 8+ development.",
    roles: ["Laravel", "Symfony", "CodeIgniter", "WordPress"],
    category: "software" as CategoryKey,
  },
  {
    title: "Java Developers",
    href: "/services/hire-java-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Spring Boot, microservices, Hibernate, Kafka. Enterprise-grade Java development.",
    roles: ["Spring Boot", "Microservices", "Hibernate", "Kafka"],
    category: "software" as CategoryKey,
  },
  {
    title: ".NET Developers",
    href: "/services/hire-dotnet-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "C#, ASP.NET Core, Blazor, Azure. Enterprise-grade Microsoft stack development.",
    roles: ["C#", "ASP.NET Core", "Blazor", "Azure"],
    category: "software" as CategoryKey,
  },
  {
    title: "Laravel Developers",
    href: "/services/hire-laravel-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Laravel, Livewire, Inertia.js, SaaS platforms. Modern PHP framework experts.",
    roles: ["Laravel", "Livewire", "Inertia.js", "Filament"],
    category: "software" as CategoryKey,
  },
  {
    title: "WordPress Developers",
    href: "/services/hire-wordpress-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Custom themes, plugins, WooCommerce, Elementor, headless WordPress development.",
    roles: ["Custom Themes", "Plugins", "WooCommerce", "Headless WP"],
    category: "software" as CategoryKey,
  },
  {
    title: "Vue.js Developers",
    href: "/services/hire-vuejs-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Vue 3, Nuxt 3, Pinia, Composition API. Reactive frontend development.",
    roles: ["Vue 3", "Nuxt 3", "Pinia", "TypeScript"],
    category: "software" as CategoryKey,
  },
  {
    title: "Angular Developers",
    href: "/services/hire-angular-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Angular 17+, RxJS, NgRx, enterprise SPAs. Scalable frontend architecture.",
    roles: ["Angular", "RxJS", "NgRx", "TypeScript"],
    category: "software" as CategoryKey,
  },
  {
    title: "QA & Testing",
    href: "/services/quality-assurance-and-testing",
    image: "/images/services/service-software-development.svg",
    startingRate: "$8/hr",
    description: "QA automation engineers, manual testers, SDETs, and performance engineers.",
    roles: ["Automation QA", "Manual Testing", "SDET", "Performance"],
    category: "software" as CategoryKey,
  },

  /* ── Mobile Development ── */
  {
    title: "Mobile App Developers",
    href: "/services/hire-mobile-app-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "iOS, Android, React Native, Flutter specialists. Native and cross-platform app development.",
    roles: ["iOS (Swift)", "Android (Kotlin)", "React Native", "Flutter"],
    category: "mobile" as CategoryKey,
  },
  {
    title: "iOS Developers",
    href: "/services/hire-ios-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Swift, SwiftUI, UIKit, Objective-C. Native Apple platform app development.",
    roles: ["Swift", "SwiftUI", "UIKit", "App Store"],
    category: "mobile" as CategoryKey,
  },
  {
    title: "Android Developers",
    href: "/services/hire-android-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Kotlin, Jetpack Compose, Java. Native Android app development for Google Play.",
    roles: ["Kotlin", "Jetpack Compose", "Java", "Google Play"],
    category: "mobile" as CategoryKey,
  },
  {
    title: "Flutter Developers",
    href: "/services/hire-flutter-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Flutter, Dart, cross-platform iOS/Android/web. Single codebase, native performance.",
    roles: ["Flutter", "Dart", "BLoC", "Firebase"],
    category: "mobile" as CategoryKey,
  },

  /* ── AI, Data & Cloud ── */
  {
    title: "AI & Machine Learning Engineers",
    href: "/services/hire-ai-ml-engineer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "TensorFlow, PyTorch, NLP, computer vision, LLM integration. End-to-end ML pipeline development.",
    roles: ["TensorFlow", "PyTorch", "NLP", "LLM/GenAI"],
    category: "ai-data-cloud" as CategoryKey,
  },
  {
    title: "Data Scientists",
    href: "/services/hire-data-scientist",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Python, R, machine learning, Tableau, Power BI. Data-driven business insights.",
    roles: ["Python", "ML", "Tableau", "Power BI"],
    category: "ai-data-cloud" as CategoryKey,
  },
  {
    title: "DevOps & Cloud",
    href: "/services/devops-engineers",
    image: "/images/services/service-software-development.svg",
    startingRate: "$9/hr",
    description: "AWS, Azure, GCP engineers. CI/CD, Kubernetes, infrastructure automation.",
    roles: ["AWS", "Azure", "Kubernetes", "Terraform"],
    category: "ai-data-cloud" as CategoryKey,
  },
  {
    title: "Cybersecurity & IT",
    href: "/services/cyber-security-expert",
    image: "/images/services/service-logistics-operations.svg",
    startingRate: "$5/hr",
    description: "Security analysts, pen testers, SOC operators, and IT support staff.",
    roles: ["SOC Analyst", "Pen Tester", "IT Support", "GRC"],
    category: "ai-data-cloud" as CategoryKey,
  },
  {
    title: "Salesforce Developers",
    href: "/services/hire-salesforce-developer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Apex, Lightning Web Components, CPQ, Sales/Service Cloud. CRM customization.",
    roles: ["Apex", "LWC", "CPQ", "Sales Cloud"],
    category: "ai-data-cloud" as CategoryKey,
  },
  {
    title: "Research & Analytics",
    href: "/services/hire-remote-research-analytics-staff",
    image: "/images/services/service-finance-accounting.svg",
    startingRate: "$7/hr",
    description: "Data analysts, BI engineers, market researchers, and insights specialists.",
    roles: ["Data Analyst", "BI Engineer", "Market Research", "Insights"],
    category: "ai-data-cloud" as CategoryKey,
  },

  /* ── eCommerce & CMS ── */
  {
    title: "Shopify Developers",
    href: "/services/hire-shopify-developer",
    image: "/images/services/service-ecommerce-retail.svg",
    startingRate: "$5/hr",
    description: "Shopify Plus, Liquid themes, custom apps, headless commerce development.",
    roles: ["Shopify Plus", "Liquid", "Custom Apps", "Hydrogen"],
    category: "ecommerce" as CategoryKey,
  },
  {
    title: "Magento Developers",
    href: "/services/hire-magento-developer",
    image: "/images/services/service-ecommerce-retail.svg",
    startingRate: "$5/hr",
    description: "Magento 2, Adobe Commerce, B2B, custom modules. Enterprise eCommerce development.",
    roles: ["Magento 2", "Adobe Commerce", "B2B", "Hyvä"],
    category: "ecommerce" as CategoryKey,
  },
  {
    title: "eCommerce Developers",
    href: "/services/hire-ecommerce-developer",
    image: "/images/services/service-ecommerce-retail.svg",
    startingRate: "$5/hr",
    description: "Shopify, WooCommerce, Magento, headless commerce. Multi-platform store development.",
    roles: ["Shopify", "WooCommerce", "Magento", "Headless"],
    category: "ecommerce" as CategoryKey,
  },

  /* ── Design & Creative ── */
  {
    title: "Web Designers",
    href: "/services/hire-web-designer",
    image: "/images/services/service-software-development.svg",
    startingRate: "$5/hr",
    description: "Figma, UI/UX design, Webflow, responsive layouts. Conversion-focused web design.",
    roles: ["Figma", "UI/UX", "Webflow", "Responsive"],
    category: "design" as CategoryKey,
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-designer",
    image: "/images/services/service-ecommerce-retail.svg",
    startingRate: "$6/hr",
    description: "Brand identity, UI/UX, social media creatives, and marketing collateral.",
    roles: ["Branding", "UI/UX", "Social Media", "Print"],
    category: "design" as CategoryKey,
  },
  {
    title: "Content Writing",
    href: "/services/content-writer",
    image: "/images/services/service-marketing.svg",
    startingRate: "$5/hr",
    description: "SEO blogs, case studies, whitepapers, web copy, and email campaigns.",
    roles: ["SEO Blogs", "Case Studies", "Web Copy", "Email"],
    category: "design" as CategoryKey,
  },

  /* ── Marketing & Growth ── */
  {
    title: "Digital Marketing",
    href: "/services/digital-marketer",
    image: "/images/services/service-marketing.svg",
    startingRate: "$7/hr",
    description: "SEO, PPC, content marketing, social media, and email marketing specialists.",
    roles: ["SEO", "PPC", "Content", "Social Media", "Email"],
    category: "marketing" as CategoryKey,
  },
  {
    title: "SEO Specialists",
    href: "/services/seo-specialist",
    image: "/images/services/service-marketing.svg",
    startingRate: "$6/hr",
    description: "Technical SEO, link building, content strategy, and analytics.",
    roles: ["Technical SEO", "Link Building", "Content", "Analytics"],
    category: "marketing" as CategoryKey,
  },
  {
    title: "PPC Specialists",
    href: "/services/hire-ppc-specialist",
    image: "/images/services/service-marketing.svg",
    startingRate: "$5/hr",
    description: "Google Ads, Meta Ads, LinkedIn Ads. ROI-focused paid advertising management.",
    roles: ["Google Ads", "Meta Ads", "LinkedIn", "ROAS"],
    category: "marketing" as CategoryKey,
  },
  {
    title: "Email Marketing Specialists",
    href: "/services/hire-email-marketing-specialist",
    image: "/images/services/service-marketing.svg",
    startingRate: "$5/hr",
    description: "Klaviyo, Mailchimp, HubSpot, automation flows. Revenue-driving email campaigns.",
    roles: ["Klaviyo", "Mailchimp", "HubSpot", "Automation"],
    category: "marketing" as CategoryKey,
  },
  {
    title: "Social Media Management",
    href: "/services/social-media-manager",
    image: "/images/services/service-marketing.svg",
    startingRate: "$6/hr",
    description: "Strategy, content creation, community management, and paid social.",
    roles: ["Strategy", "Content", "Community", "Paid Ads"],
    category: "marketing" as CategoryKey,
  },

  /* ── Finance & Accounting ── */
  {
    title: "Finance & Accounting",
    href: "/services/virtual-assistant-for-bookkeeping",
    image: "/images/services/service-finance-accounting.svg",
    startingRate: "$5/hr",
    description: "Bookkeepers, accountants, financial analysts, payroll, and tax specialists.",
    roles: ["Bookkeeper", "Accountant", "Payroll", "Tax Prep"],
    category: "finance" as CategoryKey,
  },
  {
    title: "Accountants",
    href: "/services/hire-accountant",
    image: "/images/services/service-finance-accounting.svg",
    startingRate: "$5/hr",
    description: "QuickBooks, Xero, US GAAP, financial reporting. Full-cycle accounting support.",
    roles: ["QuickBooks", "Xero", "GAAP", "Tax Prep"],
    category: "finance" as CategoryKey,
  },
  {
    title: "Tax Preparers",
    href: "/services/hire-tax-preparer",
    image: "/images/services/service-finance-accounting.svg",
    startingRate: "$5/hr",
    description: "Individual, business, multi-state tax prep. CPA-supervised, IRS compliant.",
    roles: ["1040", "1120/1065", "Multi-State", "Drake/Lacerte"],
    category: "finance" as CategoryKey,
  },
  {
    title: "QuickBooks Experts",
    href: "/services/hire-quickbooks-expert",
    image: "/images/services/service-finance-accounting.svg",
    startingRate: "$5/hr",
    description: "QBO, Desktop, payroll, inventory, cleanup. Certified QuickBooks ProAdvisors.",
    roles: ["QBO", "Desktop", "Payroll", "Cleanup"],
    category: "finance" as CategoryKey,
  },

  /* ── Business Support ── */
  {
    title: "Virtual Assistants",
    href: "/services/virtual-assistants",
    image: "/images/services/service-virtual-assistants.svg",
    startingRate: "$5/hr",
    description: "Executive support, admin, data entry, calendar management, and research.",
    roles: ["Executive VA", "Admin VA", "Research", "Data Entry"],
    category: "business" as CategoryKey,
  },
  {
    title: "Customer Support",
    href: "/services/customer-support-representative",
    image: "/images/services/service-virtual-assistants.svg",
    startingRate: "$5/hr",
    description: "Phone, email, chat, and social media support agents.",
    roles: ["Phone", "Email", "Live Chat", "Social"],
    category: "business" as CategoryKey,
  },
  {
    title: "Project Managers",
    href: "/services/hire-project-manager",
    image: "/images/services/service-virtual-assistants.svg",
    startingRate: "$5/hr",
    description: "Agile, Scrum, PMP certified. Jira, Asana, cross-functional team leadership.",
    roles: ["Agile/Scrum", "Jira", "PMP", "Remote Teams"],
    category: "business" as CategoryKey,
  },
  {
    title: "Legal & Compliance",
    href: "/services/virtual-legal-staff",
    image: "/images/services/service-legal.svg",
    startingRate: "$6/hr",
    description: "Paralegals, legal researchers, contract managers, and compliance staff.",
    roles: ["Paralegal", "Legal Research", "Contracts", "Compliance"],
    category: "business" as CategoryKey,
  },
  {
    title: "Healthcare & RCM",
    href: "/services/revenue-cycle-management-staff",
    image: "/images/services/service-healthcare.svg",
    startingRate: "$5/hr",
    description: "Medical coders, billers, RCM specialists, and healthcare VAs.",
    roles: ["Medical Coding", "Billing", "AR Follow-Up", "Credentialing"],
    category: "business" as CategoryKey,
  },
  {
    title: "HR & Recruitment",
    href: "/services/hire-remote-hr-and-recruitment-staff",
    image: "/images/services/service-virtual-assistants.svg",
    startingRate: "$6/hr",
    description: "Recruiters, sourcers, HR operations specialists, and onboarding coordinators.",
    roles: ["Recruiters", "Sourcers", "HR Ops", "Onboarding"],
    category: "business" as CategoryKey,
  },
  {
    title: "Data Entry",
    href: "/services/data-entry-assistant",
    image: "/images/services/service-virtual-assistants.svg",
    startingRate: "$5/hr",
    description: "CRM updates, spreadsheet management, form processing, and data cleaning.",
    roles: ["CRM Entry", "Spreadsheets", "Forms", "Data Cleaning"],
    category: "business" as CategoryKey,
  },
  {
    title: "Sales & Business Development",
    href: "/services/sales-and-business-development",
    image: "/images/services/service-ecommerce-retail.svg",
    startingRate: "$6/hr",
    description: "SDRs, BDRs, account managers, and sales operations analysts.",
    roles: ["SDR", "BDR", "Account Mgmt", "Sales Ops"],
    category: "business" as CategoryKey,
  },
  {
    title: "Architecture & Engineering",
    href: "/services/architecture-engineering",
    image: "/images/services/service-logistics-operations.svg",
    startingRate: "$7/hr",
    description: "CAD drafters, BIM modelers, structural engineers, and MEP designers.",
    roles: ["CAD", "BIM", "Structural", "MEP Design"],
    category: "business" as CategoryKey,
  },
  {
    title: "IT Staff & Infrastructure",
    href: "/services/hire-remote-it-staff",
    image: "/images/services/service-software-development.svg",
    startingRate: "$9/hr",
    description: "Full-stack developers, DevOps engineers, cloud architects, and QA automation.",
    roles: ["Full-Stack", "DevOps", "Cloud", "QA Automation"],
    category: "business" as CategoryKey,
  },
  {
    title: "Medical & Healthcare Staff",
    href: "/services/hire-remote-medical-staff",
    image: "/images/services/service-healthcare.svg",
    startingRate: "$7/hr",
    description: "Medical billers, coders, virtual medical assistants, and claims specialists.",
    roles: ["Billing", "Coding", "Medical VA", "Claims"],
    category: "business" as CategoryKey,
  },
  {
    title: "General Remote Employees",
    href: "/services/remote-employees-for-your-business",
    image: "/images/services/service-ecommerce-retail.svg",
    startingRate: "$5/hr",
    description: "Don't see your role? We hire across 50+ categories for any function.",
    roles: ["Any Role", "Any Function", "Custom Teams"],
    category: "business" as CategoryKey,
  },
];

const highlights = [
  { icon: "🔍", title: "Pre-Vetted", desc: "Top 5% of applicants. Six-stage screening process." },
  { icon: "🧠", title: "AI-Trained", desc: "Every hire trained on modern AI tools for their role." },
  { icon: "⏰", title: "Timezone-Matched", desc: "Work your hours. EST, GMT, AEST — any timezone." },
  { icon: "💰", title: "From $5/hr", desc: "No fees, no markups, no contracts. Free trial." },
];
