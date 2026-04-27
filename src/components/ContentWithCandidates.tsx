"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CandidatePreview from "@/components/CandidatePreview";
import type { CandidateCategory } from "@/lib/candidates-data";

type Props = {
  htmlContent: string;
  slug: string;
  pageType: "service" | "industry" | "case-study";
  category?: CandidateCategory;
};

/**
 * Renders self-contained HTML pages (industry / case study / service-data)
 * with CandidatePreview injected right after the hero section via a DOM portal.
 *
 * Keeps the full HTML intact (preserving .zt-role-wrap / .zt-cs wrapper
 * scoping) and uses useEffect to find the hero <section> and insert
 * a portal container after it.
 */
export default function ContentWithCandidates({
  htmlContent,
  slug,
  pageType,
  category,
}: Props) {
  const articleRef = useRef<HTMLDivElement>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!articleRef.current || !category) return;

    // Find the hero section (first <section> in the content)
    const firstSection = articleRef.current.querySelector("section");
    if (!firstSection) return;

    // Check if we already inserted the portal container
    const existing = articleRef.current.querySelector("[data-candidate-portal]");
    if (existing) {
      setPortalTarget(existing as HTMLElement);
      return;
    }

    // Create a container div and insert it right after the hero section
    const container = document.createElement("div");
    container.setAttribute("data-candidate-portal", "true");
    firstSection.insertAdjacentElement("afterend", container);
    setPortalTarget(container);
  }, [category]);

  return (
    <>
      <div ref={articleRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />

      {/* Portal renders CandidatePreview inside the DOM, right after the hero */}
      {portalTarget &&
        category &&
        createPortal(
          <CandidatePreview
            slug={slug}
            pageType={pageType}
            variant="light"
            directCategory={category}
          />,
          portalTarget
        )}
    </>
  );
}
