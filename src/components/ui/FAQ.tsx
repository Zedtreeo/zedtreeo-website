"use client";

import { useState } from "react";
import JsonLd, { faqSchema } from "@/components/JsonLd";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
  title?: string;
  className?: string;
};

function FAQAccordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zt-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left bg-transparent border-none cursor-pointer group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-zt-headings group-hover:text-zt-accent transition-colors pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-zt-body shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-zt-body leading-relaxed px-1 mb-0">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ({ items, title, className = "" }: FAQProps) {
  return (
    <>
      <JsonLd data={faqSchema(items)} />
      <div className={className}>
        {title && <h2 className="mb-6">{title}</h2>}
        <div className="border-t border-zt-border">
          {items.map((item, i) => (
            <FAQAccordion key={i} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
