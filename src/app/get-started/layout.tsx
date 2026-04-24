import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — Hire Remote Employees | Free 5-Day Trial",
  description:
    "Start your free 5-day trial with Zedtreeo. Tell us your requirements and get matched with pre-vetted remote employees in 48 hours. No payment, no commitment.",
  alternates: { canonical: "https://zedtreeo.com/get-started" },
  openGraph: {
    title: "Get Started — Hire Remote Employees | Free Trial",
    description:
      "Tell us what you need. Get pre-vetted candidates in 48 hours. Free 5-day trial, no commitment.",
    url: "https://zedtreeo.com/get-started",
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
