"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash on load
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("zt-cookie-consent");
      if (!consent) setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem("zt-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("zt-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[70] animate-fade-in-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div
        className="rounded-2xl shadow-lg border border-white/10 px-5 py-4"
        style={{ backgroundColor: "#2a3a36" }}
      >
        <p className="text-sm text-white/80 leading-relaxed mb-3">
          We use cookies to improve your experience. By continuing, you agree to
          our{" "}
          <Link
            href="/privacy-policy"
            className="text-zt-accent underline underline-offset-2 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={accept}
            className="flex-1 px-4 py-2 rounded-full bg-zt-accent text-zt-headings text-sm font-semibold hover:brightness-110 transition-all cursor-pointer"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="flex-1 px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-all cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
