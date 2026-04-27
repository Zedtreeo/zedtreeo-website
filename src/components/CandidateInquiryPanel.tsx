"use client";

import { useState, useEffect, useCallback } from "react";
import type { Candidate } from "@/lib/candidates-data";
import type { CardTint } from "@/lib/skill-colors";

type Props = {
  candidate: Candidate | null;
  tint: CardTint | null;
  sourcePage: string;
  onClose: () => void;
};

/** Parse "$9/hr" → "$1,440/mo" */
function getMonthlyRate(rate: string): string {
  const match = rate.match(/\$(\d+)/);
  if (!match) return "";
  const hourly = parseInt(match[1], 10);
  return `$${(hourly * 160).toLocaleString()}/mo`;
}

export default function CandidateInquiryPanel({
  candidate,
  tint,
  sourcePage,
  onClose,
}: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isOpen = !!candidate;

  /* Lock body scroll when panel is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!candidate) return;

      /* Basic validation */
      if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
        setErrorMsg("Please fill in all fields.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setErrorMsg("Please enter a valid email.");
        return;
      }

      setStatus("submitting");
      setErrorMsg("");

      try {
        const res = await fetch("/api/candidate-inquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            candidateId: candidate.id,
            candidateName: candidate.name,
            candidateRole: candidate.role,
            candidateRate: candidate.rate,
            visitorName: form.name.trim(),
            visitorEmail: form.email.trim(),
            visitorPhone: form.phone.trim(),
            sourcePage,
          }),
        });

        if (!res.ok) throw new Error("Failed to submit");

        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setForm({ name: "", email: "", phone: "" });
        }, 3000);
      } catch {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    },
    [candidate, form, sourcePage, onClose]
  );

  if (!candidate || !tint) return null;

  const initials = candidate.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[998] transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(0,0,0,0.45)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* Slide-out panel */}
      <div
        className="fixed top-0 right-0 z-[999] h-full w-full sm:w-[380px] flex flex-col transition-transform duration-350"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
          backgroundColor: "#fff",
          boxShadow: "-8px 0 30px rgba(0,0,0,0.15)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <span className="text-sm font-semibold text-gray-900">
            Request Candidate
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
            aria-label="Close panel"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          /* Success state */
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(143,210,153,0.15)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8FD299" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-1">Request sent</p>
            <p className="text-sm text-gray-500 text-center">
              We&apos;ll reach out within 2 hours to connect you with {candidate.name}.
            </p>
          </div>
        ) : (
          /* Form state */
          <div className="flex-1 overflow-y-auto">
            {/* Candidate info */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-sm"
                  style={{
                    backgroundColor: tint.bg,
                    border: `2px solid ${tint.accent}`,
                    color: tint.accent,
                  }}
                >
                  {initials}
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-gray-900 truncate mb-0">
                    {candidate.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate mb-0">
                    {candidate.role}
                  </p>
                </div>
              </div>

              {/* Rate / Monthly / Experience chips */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                  <p className="text-[10px] text-gray-400 mb-0.5">Hourly</p>
                  <p className="text-sm font-semibold text-gray-900 mb-0">
                    {candidate.rate}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                  <p className="text-[10px] text-gray-400 mb-0.5">Monthly</p>
                  <p className="text-sm font-semibold text-gray-900 mb-0">
                    {getMonthlyRate(candidate.rate)}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                  <p className="text-[10px] text-gray-400 mb-0.5">Experience</p>
                  <p className="text-sm font-semibold text-gray-900 mb-0">
                    {candidate.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-5 py-5">
              <p className="text-xs text-gray-400 mb-4">
                Fill in your details — we&apos;ll connect you within 2 hours.
              </p>

              <div className="mb-3">
                <label className="block text-[11px] text-gray-500 mb-1 font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="John Smith"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#8FD299] focus:ring-1 focus:ring-[#8FD299] transition-colors"
                />
              </div>

              <div className="mb-3">
                <label className="block text-[11px] text-gray-500 mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="john@company.com"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#8FD299] focus:ring-1 focus:ring-[#8FD299] transition-colors"
                />
              </div>

              <div className="mb-5">
                <label className="block text-[11px] text-gray-500 mb-1 font-medium">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#8FD299] focus:ring-1 focus:ring-[#8FD299] transition-colors"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-red-500 mb-3">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3 rounded-full font-semibold text-sm transition-all disabled:opacity-60"
                style={{
                  backgroundColor: "#8FD299",
                  color: "#161616",
                }}
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Request this candidate"}
              </button>

              <p className="text-[10px] text-gray-400 text-center mt-3">
                No commitment required. Free trial available.
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
