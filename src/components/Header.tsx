"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Development", href: "/hire/full-stack-developer" },
      { label: "Finance & Accounting", href: "/hire/virtual-assistant-for-bookkeeping" },
      { label: "Digital Marketing", href: "/hire/digital-marketer" },
      { label: "Legal & Compliance", href: "/hire/virtual-legal-staff" },
      { label: "Healthcare & RCM", href: "/hire/revenue-cycle-management-staff" },
      { label: "Virtual Assistants", href: "/hire/virtual-assistants" },
      { label: "Cybersecurity & IT", href: "/hire/cyber-security-expert" },
      { label: "DevOps & Cloud", href: "/hire/devops-engineers" },
    ],
  },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Candidates", href: "/candidates" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zt-primary shadow-zt-header"
          : "bg-zt-primary/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-zt-content mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0">
          <Image
            src="/zedtreeo-globe-white.svg"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <span className="text-2xl tracking-tight">
            <span className="font-extrabold text-white">Zed</span><span className="font-normal text-zt-accent">treeo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer">
                  {link.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-zt shadow-zt-card-hover py-2 transition-all duration-200 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-zt-body hover:bg-zt-near-white hover:text-zt-primary no-underline font-medium transition-colors"
                    >
                      {child.label}
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
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white no-underline transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
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
          aria-label="Toggle menu"
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
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-zt-primary transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1 overflow-y-auto max-h-[calc(100vh-72px)]">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 text-base font-medium text-white bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2.5 px-4 text-sm text-white/70 hover:text-white no-underline font-medium transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 text-base font-medium text-white no-underline transition-colors hover:text-zt-accent"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-6 pt-6 border-t border-white/10">
            <Link
              href="/get-started"
              onClick={() => setMobileOpen(false)}
              className="zt-btn block text-center no-underline"
            >
              Get Started Free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
