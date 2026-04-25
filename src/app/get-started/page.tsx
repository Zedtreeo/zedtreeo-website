"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui";

/* ─── Types ─── */
type FormData = {
  /* Step 1 */
  roleCategory: string;
  roleDetails: string;
  headcount: string;
  /* Step 2 */
  experience: string;
  timezone: string;
  startDate: string;
  hoursPerWeek: string;
  /* Step 3 */
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const initialForm: FormData = {
  roleCategory: "",
  roleDetails: "",
  headcount: "1",
  experience: "",
  timezone: "",
  startDate: "",
  hoursPerWeek: "40",
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

/* ─── Savings Calculator ─── */
function calcSavings(headcount: number, experience: string, hours: number) {
  const localRates: Record<string, number> = {
    junior: 35,
    mid: 55,
    senior: 80,
  };
  const ztRates: Record<string, number> = {
    junior: 6,
    mid: 9,
    senior: 13,
  };
  const level = experience || "mid";
  const local = localRates[level] ?? 55;
  const zt = ztRates[level] ?? 9;
  const weeksPerMonth = 4.33;
  const monthlyCostLocal = headcount * local * hours * weeksPerMonth;
  const monthlyCostZt = headcount * zt * hours * weeksPerMonth;
  const savings = monthlyCostLocal - monthlyCostZt;
  const pct = monthlyCostLocal > 0 ? Math.round((savings / monthlyCostLocal) * 100) : 0;
  return {
    local: Math.round(monthlyCostLocal),
    zt: Math.round(monthlyCostZt),
    savings: Math.round(savings),
    pct,
  };
}

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canProceed1 = form.roleCategory !== "";
  const canProceed2 = form.experience !== "" && form.timezone !== "";
  const canSubmit = form.name !== "" && form.email !== "";

  const savings = calcSavings(
    parseInt(form.headcount) || 1,
    form.experience,
    parseInt(form.hoursPerWeek) || 40
  );

  const handleSubmit = () => {
    // In production, this would POST to an API route
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
        <section className="bg-zt-primary text-white py-zt-section px-6">
          <div className="max-w-zt-narrow mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-zt-accent/20 flex items-center justify-center mx-auto mb-6 text-4xl">
              &#x2714;&#xFE0F;
            </div>
            <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4">
              We&apos;re On It.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Our team will review your requirements and send you shortlisted
              candidates within <strong className="text-white">48 hours</strong>.
              Check your inbox for a confirmation email.
            </p>
            <Link href="/" className="zt-btn no-underline">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-zt-primary text-white py-16 px-6 overflow-hidden">
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
              { label: "Get Started", href: "/get-started" },
            ]}
            className="mb-6 opacity-70"
          />
          <h1 className="text-zt-h2 md:text-zt-h1 text-white mb-2">
            Start Your <span className="text-zt-accent">Free Trial</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Tell us what you need. We&apos;ll match you with pre-vetted candidates in 48 hours.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b border-zt-border sticky top-[72px] z-40">
        <div className="max-w-zt-narrow mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            {stepLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i + 1 < step) setStep(i + 1);
                }}
                className={`text-xs font-semibold transition-colors bg-transparent border-none cursor-pointer ${
                  step === i + 1
                    ? "text-zt-accent"
                    : step > i + 1
                    ? "text-zt-primary"
                    : "text-zt-body/50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="w-full h-1.5 bg-zt-near-white rounded-full overflow-hidden">
            <div
              className="h-full bg-zt-accent rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form + Sidebar */}
      <section className="py-12 px-6">
        <div className="max-w-zt-content mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Area */}
          <div className="lg:col-span-2">
            {/* Step 1: Role */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="mb-2">What role are you hiring for?</h2>
                <p className="text-zt-body text-sm mb-6">
                  Select a category and tell us the specifics. We&apos;ll match the right talent.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {roleCategories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => update("roleCategory", cat.value)}
                      className={`p-4 rounded-zt border-2 text-left transition-all cursor-pointer bg-white ${
                        form.roleCategory === cat.value
                          ? "border-zt-accent bg-zt-accent/5 shadow-sm"
                          : "border-zt-border hover:border-zt-accent/50"
                      }`}
                    >
                      <div className="text-xl mb-1">{cat.icon}</div>
                      <div className="text-sm font-semibold text-zt-headings">{cat.label}</div>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-zt-headings mb-2">
                    Role Details (optional)
                  </label>
                  <textarea
                    value={form.roleDetails}
                    onChange={(e) => update("roleDetails", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent resize-vertical"
                    placeholder="e.g., Need a React/Node.js developer with 3+ years experience, familiar with AWS..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zt-headings mb-2">
                    How many people do you need?
                  </label>
                  <select
                    value={form.headcount}
                    onChange={(e) => update("headcount", e.target.value)}
                    className="w-full max-w-xs px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings bg-white focus:outline-none focus:ring-2 focus:ring-zt-accent"
                  >
                    {["1", "2", "3", "4", "5", "6–10", "10+"].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!canProceed1}
                    className={`zt-btn border-none cursor-pointer text-base ${
                      !canProceed1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Next: Requirements &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Requirements */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="mb-2">Define your requirements</h2>
                <p className="text-zt-body text-sm mb-6">
                  Help us match the right experience level and working arrangement.
                </p>

                <div>
                  <label className="block text-sm font-medium text-zt-headings mb-2">
                    Experience Level *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {experienceLevels.map((level) => (
                      <button
                        key={level.value}
                        onClick={() => update("experience", level.value)}
                        className={`p-4 rounded-zt border-2 text-center transition-all cursor-pointer bg-white ${
                          form.experience === level.value
                            ? "border-zt-accent bg-zt-accent/5"
                            : "border-zt-border hover:border-zt-accent/50"
                        }`}
                      >
                        <div className="text-sm font-semibold text-zt-headings">{level.label}</div>
                        <div className="text-xs text-zt-body mt-1">{level.rate}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zt-headings mb-2">
                    Your Timezone *
                  </label>
                  <select
                    value={form.timezone}
                    onChange={(e) => update("timezone", e.target.value)}
                    className="w-full max-w-sm px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings bg-white focus:outline-none focus:ring-2 focus:ring-zt-accent"
                  >
                    <option value="">Select timezone</option>
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zt-headings mb-2">
                      When do you need to start?
                    </label>
                    <select
                      value={form.startDate}
                      onChange={(e) => update("startDate", e.target.value)}
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings bg-white focus:outline-none focus:ring-2 focus:ring-zt-accent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (within a week)</option>
                      <option value="2weeks">Within 2 weeks</option>
                      <option value="month">Within a month</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zt-headings mb-2">
                      Hours Per Week
                    </label>
                    <select
                      value={form.hoursPerWeek}
                      onChange={(e) => update("hoursPerWeek", e.target.value)}
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings bg-white focus:outline-none focus:ring-2 focus:ring-zt-accent"
                    >
                      <option value="20">Part-time (20 hrs/week)</option>
                      <option value="40">Full-time (40 hrs/week)</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-zt-pill border-2 border-zt-border text-sm font-semibold text-zt-body hover:border-zt-accent bg-white transition-colors cursor-pointer"
                  >
                    &larr; Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!canProceed2}
                    className={`zt-btn border-none cursor-pointer text-base ${
                      !canProceed2 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Next: Your Details &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="mb-2">Almost there — tell us about you</h2>
                <p className="text-zt-body text-sm mb-6">
                  We&apos;ll send shortlisted candidates to this email within 48 hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zt-headings mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zt-headings mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zt-headings mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zt-headings mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zt-headings mb-2">
                    Anything else we should know?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-zt border border-zt-border text-sm text-zt-headings focus:outline-none focus:ring-2 focus:ring-zt-accent focus:border-transparent resize-vertical"
                    placeholder="Specific skills, tools, industry experience, etc."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-zt-pill border-2 border-zt-border text-sm font-semibold text-zt-body hover:border-zt-accent bg-white transition-colors cursor-pointer"
                  >
                    &larr; Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className={`zt-btn border-none cursor-pointer text-base ${
                      !canSubmit ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Submit &amp; Start Free Trial
                  </button>
                </div>

                <p className="text-xs text-zt-body">
                  By submitting, you agree to our{" "}
                  <a href="/terms" className="text-zt-primary font-semibold underline">Terms</a> and{" "}
                  <a href="/privacy-policy" className="text-zt-primary font-semibold underline">Privacy Policy</a>.
                  No payment required. No commitment.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Savings Calculator */}
            {form.experience && (
              <div className="p-6 rounded-zt bg-zt-primary text-white">
                <h3 className="text-base font-semibold text-white mb-4 !mt-0">
                  Your Estimated Savings
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Local hiring cost</span>
                    <span className="line-through text-white/50">
                      ${savings.local.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">With Zedtreeo</span>
                    <span className="text-zt-accent font-bold">
                      ${savings.zt.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="border-t border-white/20 pt-3 flex justify-between">
                    <span className="text-sm font-semibold text-white">You save</span>
                    <span className="text-lg font-bold text-zt-accent">
                      ${savings.savings.toLocaleString()}/mo
                    </span>
                  </div>
                </div>
                <div className="text-center p-3 rounded-lg bg-zt-accent/20">
                  <span className="text-2xl font-bold text-zt-accent">{savings.pct}%</span>
                  <span className="text-sm text-white/70 ml-2">cost reduction</span>
                </div>
                <p className="text-xs text-white/40 mt-3 mb-0">
                  Based on {form.headcount} {form.experience}-level hire(s), {form.hoursPerWeek} hrs/week.
                  US market average rates used for comparison.
                </p>
              </div>
            )}

            {/* What You Get */}
            <div className="p-6 rounded-zt bg-zt-near-white">
              <h3 className="text-base font-semibold text-zt-headings mb-4 !mt-0">
                What&apos;s Included
              </h3>
              <ul className="space-y-3 list-none p-0 m-0">
                {included.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zt-body">
                    <svg className="w-5 h-5 text-zt-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule a Call */}
            <div className="p-6 rounded-zt border-2 border-zt-accent/30 text-center" style={{ background: "linear-gradient(135deg, #f0faf2 0%, #e8f5ee 100%)" }}>
              <div className="text-2xl mb-2">&#128222;</div>
              <h3 className="text-base font-semibold text-zt-headings mb-2 !mt-0">
                Prefer to Talk?
              </h3>
              <p className="text-sm text-zt-body mb-4">
                Book a free discovery call with our team. We&apos;ll walk you through the process and answer any questions.
              </p>
              <a
                href="https://scheduler.zoom.us/zedtreeo/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 rounded-full border-2 text-sm font-bold no-underline transition-colors"
                style={{ borderColor: "#374B47", color: "#374B47" }}
              >
                Schedule a Call
              </a>
            </div>

            {/* Trust Signals */}
            <div className="p-6 rounded-zt border border-zt-border text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-zt-accent text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="text-sm font-semibold text-zt-headings">4.8/5</span>
              </div>
              <p className="text-xs text-zt-body mb-3">Rated on Trustpilot</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2.5 py-1 rounded bg-zt-near-white text-xs text-zt-body font-medium">
                  ISO 27001
                </span>
                <span className="px-2.5 py-1 rounded bg-zt-near-white text-xs text-zt-body font-medium">
                  CMMI Level 3
                </span>
                <span className="px-2.5 py-1 rounded bg-zt-near-white text-xs text-zt-body font-medium">
                  GDPR
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── Static Data ─── */

const stepLabels = ["1. Role", "2. Requirements", "3. Your Details"];

const roleCategories = [
  { value: "software", label: "Software Development", icon: "\uD83D\uDCBB" },
  { value: "virtual-assistant", label: "Virtual Assistant", icon: "\uD83D\uDCCB" },
  { value: "finance", label: "Finance & Accounting", icon: "\uD83D\uDCCA" },
  { value: "marketing", label: "Digital Marketing", icon: "\uD83D\uDCC8" },
  { value: "legal", label: "Legal & Compliance", icon: "\u2696\uFE0F" },
  { value: "healthcare", label: "Healthcare & RCM", icon: "\uD83C\uDFE5" },
  { value: "customer-support", label: "Customer Support", icon: "\uD83D\uDCAC" },
  { value: "cybersecurity", label: "Cybersecurity & IT", icon: "\uD83D\uDEE1\uFE0F" },
  { value: "design", label: "Graphic Design", icon: "\uD83C\uDFA8" },
  { value: "content", label: "Content Writing", icon: "\u270D\uFE0F" },
  { value: "seo", label: "SEO", icon: "\uD83D\uDD0D" },
  { value: "other", label: "Other / Custom", icon: "\uD83D\uDE80" },
];

const experienceLevels = [
  { value: "junior", label: "Junior", rate: "1–3 years" },
  { value: "mid", label: "Mid-Level", rate: "3–6 years" },
  { value: "senior", label: "Senior", rate: "6+ years" },
];

const timezones = [
  "US Eastern (EST/EDT)",
  "US Central (CST/CDT)",
  "US Pacific (PST/PDT)",
  "UK (GMT/BST)",
  "Central Europe (CET/CEST)",
  "Australia Eastern (AEST/AEDT)",
  "India (IST)",
  "Middle East (GST)",
  "New Zealand (NZST)",
  "Other",
];

const included = [
  "Free 5-day trial — no payment required",
  "Pre-vetted candidates in 48 hours",
  "AI-trained, timezone-matched talent",
  "Dedicated account manager",
  "Free replacement if not satisfied",
  "No recruitment fees or hidden costs",
  "No long-term contracts",
  "ISO 27001 certified & NDA-backed",
];
