"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { label: "Software Development", href: "/services/full-stack-developer" },
  { label: "Finance & Accounting", href: "/services/virtual-assistant-for-bookkeeping" },
  { label: "Digital Marketing", href: "/services/digital-marketer" },
  { label: "Legal & Compliance", href: "/services/virtual-legal-staff" },
  { label: "Healthcare & RCM", href: "/services/revenue-cycle-management-staff" },
  { label: "Virtual Assistants", href: "/services/virtual-assistants" },
  { label: "Cybersecurity & IT", href: "/services/cyber-security-expert" },
  { label: "DevOps & Cloud", href: "/services/devops-engineers" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Candidates", href: "/candidates" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const isServicesActive =
    pathname.startsWith("/services");
  const isCompanyActive =
    pathname.startsWith("/about") ||
    pathname.startsWith("/how-it-works") ||
    pathname.startsWith("/industries") ||
    pathname.startsWith("/case-studies") ||
    pathname.startsWith("/candidates");
  const isBlogActive = pathname.startsWith("/blog");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
    setMobileServicesOpen(false);
    setMobileCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const chevron = (open: boolean, className = "w-3.5 h-3.5") => (
    <svg
      className={`${className} transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-zt-primary shadow-zt-header"
          : "bg-zt-primary/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-zt-content mx-auto px-6 flex items-center h-[72px]">
        {/* Logo */}
        <Link href="/" className="no-underline shrink-0 flex items-center">
          <Image
            src="/zedtreeo-logo-white-cropped.png"
            alt="Zedtreeo"
            width={577}
            height={240}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden lg:flex flex-1 items-center justify-center gap-1 pl-12">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer ${
                isServicesActive
                  ? "text-white border-b-2 border-zt-accent"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Services
              {chevron(servicesOpen)}
            </button>
            <div
              className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-zt shadow-zt-card-hover py-2 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-zt-body hover:bg-zt-near-white hover:text-zt-primary no-underline font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-zt-border mt-1 pt-1">
                <Link
                  href="/services"
                  className="block px-4 py-2.5 text-sm text-zt-accent font-semibold no-underline hover:bg-zt-near-white transition-colors"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              aria-expanded={companyOpen}
              aria-haspopup="true"
              className={`px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer ${
                isCompanyActive
                  ? "text-white border-b-2 border-zt-accent"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Company
              {chevron(companyOpen)}
            </button>
            <div
              className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-zt shadow-zt-card-hover py-2 transition-all duration-200 ${
                companyOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-zt-body hover:bg-zt-near-white hover:text-zt-primary no-underline font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Blog — standalone */}
          <Link
            href="/blog"
            className={`px-4 py-2 text-sm font-semibold no-underline transition-colors ${
              isBlogActive
                ? "text-white border-b-2 border-zt-accent"
                : "text-white/90 hover:text-white"
            }`}
          >
            Blog
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://scheduler.zoom.us/zedtreeo/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-white no-underline transition-colors"
          >
            Schedule a Call
          </a>
          <Link
            href="/get-started"
            className="zt-btn !py-2.5 !px-6 !text-sm no-underline"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 bg-transparent border-none cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
      <div
        className="lg:hidden fixed inset-x-0 top-[72px] bottom-0"
        style={{ backgroundColor: "#374B47", zIndex: 49 }}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col p-6 gap-1 overflow-y-auto max-h-[calc(100vh-72px)]"
        >
          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between py-3 px-4 text-base font-medium bg-transparent border-none cursor-pointer ${
                isServicesActive ? "text-zt-accent" : "text-white"
              }`}
            >
              Services
              {chevron(mobileServicesOpen, "w-4 h-4")}
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 px-4 text-sm text-white/70 hover:text-white no-underline font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-4 text-sm text-zt-accent font-semibold no-underline"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          {/* Company accordion */}
          <div>
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className={`w-full flex items-center justify-between py-3 px-4 text-base font-medium bg-transparent border-none cursor-pointer ${
                isCompanyActive ? "text-zt-accent" : "text-white"
              }`}
            >
              Company
              {chevron(mobileCompanyOpen, "w-4 h-4")}
            </button>
            {mobileCompanyOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 px-4 text-sm text-white/70 hover:text-white no-underline font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Blog */}
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className={`py-3 px-4 text-base font-medium no-underline transition-colors ${
              isBlogActive ? "text-zt-accent" : "text-white hover:text-zt-accent"
            }`}
          >
            Blog
          </Link>

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
            <Link
              href="/get-started"
              onClick={() => setMobileOpen(false)}
              className="zt-btn block text-center no-underline"
            >
              Get Started Free
            </Link>
            <a
              href="https://scheduler.zoom.us/zedtreeo/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="zt-btn block text-center no-underline !bg-transparent !border !border-white/30 !text-white hover:!border-zt-accent hover:!text-zt-accent"
            >
              Schedule a Call
            </a>
          </div>
        </nav>
      </div>
      )}
    </header>
  );
}
