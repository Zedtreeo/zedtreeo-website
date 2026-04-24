import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Software Development", href: "/hire/full-stack-developer" },
  { label: "Finance & Accounting", href: "/hire/virtual-assistant-for-bookkeeping" },
  { label: "Digital Marketing", href: "/hire/digital-marketer" },
  { label: "Legal & Compliance", href: "/hire/virtual-legal-staff" },
  { label: "Healthcare & RCM", href: "/hire/revenue-cycle-management-staff" },
  { label: "Virtual Assistants", href: "/hire/virtual-assistants" },
  { label: "Cybersecurity & IT", href: "/hire/cyber-security-expert" },
  { label: "DevOps & Cloud", href: "/hire/devops-engineers" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Candidates", href: "/candidates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-zt-primary text-white">
      {/* Main Footer */}
      <nav aria-label="Footer navigation" className="max-w-zt-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image
                src="/zedtreeo-logo-icon.svg"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl tracking-tight">
                <span className="font-extrabold text-white">Zed</span><span className="font-normal text-zt-accent">treeo</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Hire dedicated remote employees from India starting at $5/hour.
              Pre-vetted talent across software, finance, marketing, legal,
              healthcare, and more.
            </p>
            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-md bg-white/10 text-xs font-semibold text-white/80">
                ISO 27001
              </span>
              <span className="px-3 py-1.5 rounded-md bg-white/10 text-xs font-semibold text-white/80">
                CMMI Level 3
              </span>
              <span className="px-3 py-1.5 rounded-md bg-white/10 text-xs font-semibold text-white/80">
                GDPR
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-zt-accent no-underline transition-colors font-normal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-zt-accent no-underline transition-colors font-normal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@zedtreeo.com"
                  className="text-sm text-white/70 hover:text-zt-accent no-underline transition-colors font-normal"
                >
                  info@zedtreeo.com
                </a>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Hire Talent
                </p>
                <Link
                  href="/get-started"
                  className="inline-block mt-1 px-5 py-2 rounded-zt-pill bg-zt-accent text-zt-headings text-sm font-bold no-underline hover:bg-zt-accent-hover transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Trustpilot Badge */}
            <div className="mt-6 p-3 rounded-lg bg-white/5">
              <p className="text-xs text-white/50 mb-1">Rated on Trustpilot</p>
              <div className="flex items-center gap-1">
                <span className="text-zt-accent text-lg">★★★★★</span>
                <span className="text-sm text-white/80 font-semibold">
                  4.8/5
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-zt-content mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 mb-0">
            © {new Date().getFullYear()} Zedtreeo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/40 hover:text-white/70 no-underline transition-colors font-normal"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/70 no-underline transition-colors font-normal"
            >
              Terms
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-xs text-white/40 hover:text-white/70 no-underline transition-colors font-normal"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
