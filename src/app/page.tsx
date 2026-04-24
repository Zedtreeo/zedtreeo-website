export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-zt-primary text-white py-zt-section px-6">
        <div className="max-w-zt-content mx-auto text-center">
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-6">
            Hire Smarter Remote Talent
            <br />
            <span className="text-zt-accent">in 7 Days Flat.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Pre-vetted dedicated employees from India — software developers,
            accountants, marketers, legal staff, and more. Starting at $5/hour
            with a free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          <span>⭐ 4.8/5 on Trustpilot</span>
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
                className="group block p-6 rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all no-underline"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-zt-headings mb-2 group-hover:text-zt-accent transition-colors !mt-0">
                  {service.title}
                </h3>
                <p className="text-sm text-zt-body mb-0">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-zt-light-bg py-zt-section px-6">
        <div className="max-w-zt-content mx-auto">
          <h2 className="text-center mb-12">
            How It Works — 5 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-zt-accent text-zt-headings font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {i + 1}
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

const services = [
  {
    icon: "💻",
    title: "Software Development",
    slug: "full-stack-developer",
    description: "Full-stack, frontend, backend, mobile, and DevOps engineers.",
  },
  {
    icon: "📊",
    title: "Finance & Accounting",
    slug: "virtual-assistant-for-bookkeeping",
    description: "Bookkeepers, accountants, financial analysts, and RCM staff.",
  },
  {
    icon: "📱",
    title: "Digital Marketing",
    slug: "digital-marketer",
    description: "SEO specialists, content marketers, PPC managers, and social media experts.",
  },
  {
    icon: "⚖️",
    title: "Legal & Compliance",
    slug: "virtual-legal-staff",
    description: "Paralegals, legal researchers, probate specialists, and compliance staff.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    slug: "revenue-cycle-management-staff",
    description: "Medical coders, RCM specialists, healthcare VAs, and billing staff.",
  },
  {
    icon: "🤖",
    title: "AI & Virtual Assistants",
    slug: "virtual-assistants",
    description: "Executive assistants, admin support, data entry, and AI-powered roles.",
  },
  {
    icon: "🛒",
    title: "E-Commerce & Retail",
    slug: "remote-employees-for-your-business",
    description: "Store managers, product listers, customer support, and fulfillment staff.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity & IT",
    slug: "cyber-security-expert",
    description: "Security analysts, IT support, network engineers, and DevSecOps.",
  },
  {
    icon: "🏠",
    title: "Real Estate & Operations",
    slug: "remote-employees-for-your-business",
    description: "Transaction coordinators, property managers, and operations staff.",
  },
];

const steps = [
  { title: "Tell Us Your Needs", desc: "Share your role requirements, skills, and timeline." },
  { title: "We Match & Vet", desc: "Our team shortlists pre-vetted candidates within 48 hours." },
  { title: "Review & Interview", desc: "Interview your shortlisted candidates at your convenience." },
  { title: "Free Trial", desc: "Start with a no-risk trial to evaluate fit and performance." },
  { title: "Onboard & Scale", desc: "Your dedicated employee integrates with your team seamlessly." },
];
