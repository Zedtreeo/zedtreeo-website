import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/get-started/thank-you"],
      },
    ],
    sitemap: "https://zedtreeo.com/sitemap.xml",
  };
}
