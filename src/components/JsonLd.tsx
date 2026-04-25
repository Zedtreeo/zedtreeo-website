type JsonLdProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── Pre-built schema generators ─── */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zedtreeo",
    url: "https://zedtreeo.com",
    logo: "https://zedtreeo.com/zedtreeo-logo-icon.svg",
    description:
      "Zedtreeo provides pre-vetted dedicated remote employees from India starting at $5/hour. Hire software developers, accountants, marketers, legal staff, and more.",
    foundingDate: "2023",
    sameAs: [
      "https://www.linkedin.com/company/zedtreeo",
      "https://www.trustpilot.com/review/zedtreeo.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@zedtreeo.com",
      contactType: "sales",
      availableLanguage: ["English"],
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "B-18, Malviya Industrial Area",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302017",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1209 N Orange Street",
        addressLocality: "Wilmington",
        addressRegion: "DE",
        postalCode: "19801",
        addressCountry: "US",
      },
    ],
    areaServed: {
      "@type": "GeoShape",
      name: "Global",
    },
    knowsAbout: [
      "Remote Staffing",
      "Staff Augmentation",
      "Outsourcing",
      "Software Development",
      "Virtual Assistants",
      "Finance & Accounting",
      "Digital Marketing",
      "Legal & Compliance",
      "Healthcare & RCM",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zedtreeo",
    url: "https://zedtreeo.com",
    description:
      "Hire dedicated remote employees from India starting at $5/hour. Pre-vetted talent across software, finance, marketing, legal, healthcare, and more.",
    publisher: {
      "@type": "Organization",
      name: "Zedtreeo",
      url: "https://zedtreeo.com",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://zedtreeo.com/candidates?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: "Zedtreeo",
      url: "https://zedtreeo.com",
    },
    areaServed: {
      "@type": "GeoShape",
      name: "Global",
    },
    offers: {
      "@type": "Offer",
      price: "5",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "5",
        priceCurrency: "USD",
        unitText: "HOUR",
        description: "Starting from $5 per hour",
      },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  authorName?: string;
  authorRole?: string;
  authorUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image || "https://zedtreeo.com/og-image.png",
    author: {
      "@type": "Person",
      name: article.authorName || "Zedtreeo Team",
      jobTitle: article.authorRole || "Remote Staffing Expert",
      url: article.authorUrl || "https://zedtreeo.com/about",
      worksFor: {
        "@type": "Organization",
        name: "Zedtreeo",
        url: "https://zedtreeo.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Zedtreeo",
      url: "https://zedtreeo.com",
      logo: {
        "@type": "ImageObject",
        url: "https://zedtreeo.com/zedtreeo-logo-icon.svg",
      },
    },
  };
}
