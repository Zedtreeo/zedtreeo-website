"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  candidates,
  candidateCategoryLabels,
  type CandidateCategory,
  type Candidate,
} from "@/lib/candidates-data";
import { Breadcrumb } from "@/components/ui";

const allCategories = Object.entries(candidateCategoryLabels) as [CandidateCategory, string][];

const availabilityLabels: Record<string, string> = {
  immediate: "Available Now",
  "1-week": "1 Week",
  "2-weeks": "2 Weeks",
};

const availabilityColors: Record<string, string> = {
  immediate: "bg-green-100 text-green-700",
  "1-week": "bg-yellow-100 text-yellow-700",
  "2-weeks": "bg-orange-100 text-orange-700",
};

export default function CandidatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CandidateCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = candidates;
    if (selectedCategory !== "all") {
      result = result.filter((c) => c.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.role.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q) ||
          c.skills.some((s) => s.toLowerCase().includes(q)) ||
          c.highlights.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

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
              { label: "Candidates", href: "/candidates" },
            ]}
            className="mb-6 opacity-70"
          />
          <h1 className="text-zt-h1 max-md:text-zt-h1-mobile text-white mb-4">
            Browse <span className="text-zt-accent">Pre-Vetted Talent</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            Explore our roster of available professionals. Every candidate has
            passed our 6-stage vetting process and is trained on modern AI tools.
          </p>

          {/* Search */}
          <div className="max-w-xl">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zt-body"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, skill, or keyword..."
                className="w-full pl-12 pr-4 py-3.5 rounded-zt-pill bg-white text-zt-headings text-sm focus:outline-none focus:ring-2 focus:ring-zt-accent shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-zt-border sticky top-[72px] z-30">
        <div className="max-w-zt-content mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer border-none transition-colors ${
                selectedCategory === "all"
                  ? "bg-zt-primary text-white"
                  : "bg-zt-near-white text-zt-body hover:bg-zt-accent/15 hover:text-zt-primary"
              }`}
            >
              All ({candidates.length})
            </button>
            {allCategories.map(([key, label]) => {
              const count = candidates.filter((c) => c.category === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer border-none transition-colors ${
                    selectedCategory === key
                      ? "bg-zt-primary text-white"
                      : "bg-zt-near-white text-zt-body hover:bg-zt-accent/15 hover:text-zt-primary"
                  }`}
                >
                  {label} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="py-12 px-6 bg-zt-light-bg min-h-[60vh]">
        <div className="max-w-zt-content mx-auto">
          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-zt-body mb-0">
              Showing <strong className="text-zt-headings">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "candidate" : "candidates"}
              {selectedCategory !== "all" && (
                <> in <strong className="text-zt-headings">{candidateCategoryLabels[selectedCategory]}</strong></>
              )}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">&#128269;</div>
              <h3 className="text-lg font-semibold text-zt-headings mb-2">No candidates found</h3>
              <p className="text-sm text-zt-body mb-4">
                Try adjusting your search or filters. We have 500+ professionals across all categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="zt-btn border-none cursor-pointer text-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </div>
          )}

          {/* More candidates CTA */}
          <div className="mt-16 text-center p-10 rounded-zt bg-white shadow-zt-card">
            <h3 className="text-xl font-semibold text-zt-headings mb-2 !mt-0">
              Don&apos;t See the Right Fit?
            </h3>
            <p className="text-sm text-zt-body mb-6 max-w-lg" style={{ marginLeft: "auto", marginRight: "auto" }}>
              This is a sample of our available talent. We have 500+ professionals across
              50+ role categories. Tell us what you need and we&apos;ll match you in 48 hours.
            </p>
            <Link href="/get-started" className="zt-btn no-underline">
              Tell Us Your Requirements
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── Candidate Card ─── */

function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <div className="rounded-zt bg-white shadow-zt-card hover:shadow-zt-card-hover transition-all overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-zt-primary flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">
                {candidate.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-zt-headings !mt-0 mb-0">
                {candidate.name}
              </h3>
              <p className="text-xs text-zt-body mb-0">{candidate.role}</p>
            </div>
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
              availabilityColors[candidate.availability]
            }`}
          >
            {availabilityLabels[candidate.availability]}
          </span>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-4 mb-4 text-xs text-zt-body">
          <span>
            <strong className="text-zt-headings">{candidate.experience}</strong> exp
          </span>
          <span>
            <strong className="text-zt-accent">{candidate.rate}</strong>
          </span>
          <span>{candidate.timezone}</span>
        </div>

        {/* Highlights */}
        <p className="text-sm text-zt-body mb-4 leading-relaxed">
          {candidate.highlights}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {candidate.skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded bg-zt-near-white text-xs text-zt-headings font-medium"
            >
              {skill}
            </span>
          ))}
          {candidate.skills.length > 5 && (
            <span className="px-2.5 py-1 rounded bg-zt-near-white text-xs text-zt-body">
              +{candidate.skills.length - 5} more
            </span>
          )}
        </div>

        {/* AI tools */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs text-zt-body">AI:</span>
          {candidate.aiTools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 rounded bg-zt-accent/10 text-xs text-zt-primary font-medium"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/get-started?role=${encodeURIComponent(candidate.role)}`}
          className="block w-full text-center py-2.5 rounded-zt-pill bg-zt-accent text-zt-headings text-sm font-bold no-underline hover:bg-zt-accent-hover transition-colors"
        >
          Hire {candidate.name.split(" ")[0]}
        </Link>
      </div>
    </div>
  );
}
