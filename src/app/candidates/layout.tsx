import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Pre-Vetted Remote Candidates — Hire in 48 Hours",
  description:
    "Browse Zedtreeo's roster of pre-vetted remote professionals. Developers, VAs, accountants, marketers, legal staff, and more. All AI-trained, timezone-matched. Start free trial.",
  alternates: { canonical: "https://zedtreeo.com/candidates" },
  openGraph: {
    title: "Browse Pre-Vetted Remote Candidates | Zedtreeo",
    description:
      "Explore available remote professionals across 50+ role categories. Pre-vetted, AI-trained, ready to start.",
    url: "https://zedtreeo.com/candidates",
  },
};

export default function CandidatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
