"use client";

import { useMemo } from "react";
import CandidatePreview from "@/components/CandidatePreview";
import type { CandidateCategory } from "@/lib/candidates-data";

type Props = {
  htmlContent: string;
  slug: string;
  pageType: "service" | "industry" | "case-study";
  category?: CandidateCategory;
};

/**
 * Renders self-contained HTML pages (industry / case study) with
 * CandidatePreview injected right after the hero section.
 *
 * Splits HTML at the first </section> boundary (hero end) and renders:
 *   1. Hero section HTML
 *   2. CandidatePreview component (dark variant, inside hero context)
 *   3. Remaining HTML content
 */
export default function ContentWithCandidates({
  htmlContent,
  slug,
  pageType,
  category,
}: Props) {
  const { heroHtml, restHtml } = useMemo(() => {
    // Find the end of the first <section> (the hero)
    const heroEndMarker = "</section>";
    const idx = htmlContent.indexOf(heroEndMarker);

    if (idx === -1) {
      // No section found — render everything as-is
      return { heroHtml: htmlContent, restHtml: "" };
    }

    const splitPoint = idx + heroEndMarker.length;
    return {
      heroHtml: htmlContent.slice(0, splitPoint),
      restHtml: htmlContent.slice(splitPoint),
    };
  }, [htmlContent]);

  return (
    <>
      {/* Hero section */}
      <div dangerouslySetInnerHTML={{ __html: heroHtml }} />

      {/* Candidates — right after hero */}
      {category && (
        <CandidatePreview
          slug={slug}
          pageType={pageType}
          variant="light"
        />
      )}

      {/* Rest of the page content */}
      {restHtml && (
        <div dangerouslySetInnerHTML={{ __html: restHtml }} />
      )}
    </>
  );
}
