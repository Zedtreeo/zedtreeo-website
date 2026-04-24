import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      /* ─── WordPress infrastructure ─── */
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-admin{/:path}+", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content{/:path}+", destination: "/", permanent: true },
      { source: "/wp-includes{/:path}+", destination: "/", permanent: true },
      { source: "/wp-json{/:path}+", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed{/:path}+", destination: "/blog", permanent: true },

      /* ─── Old hire pages → new /hire/ routes (301) ─── */
      { source: "/hire-full-stack-developer", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-full-stack-developer/", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-digital-marketer", destination: "/hire/digital-marketer", permanent: true },
      { source: "/hire-digital-marketer/", destination: "/hire/digital-marketer", permanent: true },
      { source: "/hire-devops-engineers", destination: "/hire/devops-engineers", permanent: true },
      { source: "/hire-devops-engineers/", destination: "/hire/devops-engineers", permanent: true },
      { source: "/hire-cyber-security-expert", destination: "/hire/cyber-security-expert", permanent: true },
      { source: "/hire-cyber-security-expert/", destination: "/hire/cyber-security-expert", permanent: true },
      { source: "/hire-virtual-assistants", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/hire-virtual-assistants/", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/hire-virtual-assistant-for-bookkeeping", destination: "/hire/virtual-assistant-for-bookkeeping", permanent: true },
      { source: "/hire-virtual-assistant-for-bookkeeping/", destination: "/hire/virtual-assistant-for-bookkeeping", permanent: true },
      { source: "/hire-virtual-legal-staff", destination: "/hire/virtual-legal-staff", permanent: true },
      { source: "/hire-virtual-legal-staff/", destination: "/hire/virtual-legal-staff", permanent: true },
      { source: "/hire-revenue-cycle-management-staff", destination: "/hire/revenue-cycle-management-staff", permanent: true },
      { source: "/hire-revenue-cycle-management-staff/", destination: "/hire/revenue-cycle-management-staff", permanent: true },
      { source: "/hire-remote-employees-for-your-business", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/hire-remote-employees-for-your-business/", destination: "/hire/remote-employees-for-your-business", permanent: true },
      /* Old hire pages that map to closest new pages */
      { source: "/hire-frontend-developer", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-frontend-developer/", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-remote-back-end-developer", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-remote-back-end-developer/", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-flutter-developer", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-flutter-developer/", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-remote-it-experts", destination: "/hire/cyber-security-expert", permanent: true },
      { source: "/hire-remote-it-experts/", destination: "/hire/cyber-security-expert", permanent: true },
      { source: "/hire-ai-virtual-assistants", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/hire-ai-virtual-assistants/", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/hire-remote-probate-specialists", destination: "/hire/virtual-legal-staff", permanent: true },
      { source: "/hire-remote-probate-specialists/", destination: "/hire/virtual-legal-staff", permanent: true },
      { source: "/hire-rag-developers", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-rag-developers/", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/hire-remote-ai-prompt-engineers", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/hire-remote-ai-prompt-engineers/", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/hire-remote-ai-prompt-engineers-2026", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/hire-remote-ai-prompt-engineers-2026/", destination: "/hire/virtual-assistants", permanent: true },

      /* ─── Old service category pages → new /hire/ or /services ─── */
      { source: "/remote-staffing-services", destination: "/services", permanent: true },
      { source: "/remote-staffing-services/", destination: "/services", permanent: true },
      { source: "/remote-staffing-services/hire-remote-it-staff", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/remote-staffing-services/hire-remote-it-staff/", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/remote-staffing-services/hire-remote-finance-and-accounting-staff", destination: "/hire/virtual-assistant-for-bookkeeping", permanent: true },
      { source: "/remote-staffing-services/hire-remote-finance-and-accounting-staff/", destination: "/hire/virtual-assistant-for-bookkeeping", permanent: true },
      { source: "/remote-staffing-services/hire-remote-digital-marketing-staff", destination: "/hire/digital-marketer", permanent: true },
      { source: "/remote-staffing-services/hire-remote-digital-marketing-staff/", destination: "/hire/digital-marketer", permanent: true },
      { source: "/remote-staffing-services/hire-remote-legal-staff", destination: "/hire/virtual-legal-staff", permanent: true },
      { source: "/remote-staffing-services/hire-remote-legal-staff/", destination: "/hire/virtual-legal-staff", permanent: true },
      { source: "/remote-staffing-services/hire-remote-medical-staff", destination: "/hire/revenue-cycle-management-staff", permanent: true },
      { source: "/remote-staffing-services/hire-remote-medical-staff/", destination: "/hire/revenue-cycle-management-staff", permanent: true },
      { source: "/remote-staffing-services/hire-remote-administrative-and-assistant", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/remote-staffing-services/hire-remote-administrative-and-assistant/", destination: "/hire/virtual-assistants", permanent: true },
      { source: "/remote-staffing-services/hire-remote-customer-support", destination: "/hire/customer-support-representative", permanent: true },
      { source: "/remote-staffing-services/hire-remote-customer-support/", destination: "/hire/customer-support-representative", permanent: true },
      { source: "/remote-staffing-services/hire-remote-designers", destination: "/hire/graphic-designer", permanent: true },
      { source: "/remote-staffing-services/hire-remote-designers/", destination: "/hire/graphic-designer", permanent: true },
      { source: "/remote-staffing-services/hire-remote-hr-and-recruitment-staff", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/remote-staffing-services/hire-remote-hr-and-recruitment-staff/", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/remote-staffing-services/hire-remote-research-analytics-staff", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/remote-staffing-services/hire-remote-research-analytics-staff/", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/remote-staffing-services/quality-assurance-and-testing", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/remote-staffing-services/quality-assurance-and-testing/", destination: "/hire/full-stack-developer", permanent: true },
      { source: "/remote-staffing-services/sales-and-business-development", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/remote-staffing-services/sales-and-business-development/", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/remote-staffing-services/architecture-and-engineering", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/remote-staffing-services/architecture-and-engineering/", destination: "/hire/remote-employees-for-your-business", permanent: true },

      /* ─── Track 2 articles (new blog URLs) ─── */
      { source: "/outsourcing-costs", destination: "/blog/outsourcing-costs", permanent: true },
      { source: "/outsourcing-costs/", destination: "/blog/outsourcing-costs", permanent: true },
      { source: "/hire-remote-developers-guide", destination: "/blog/hire-remote-developers-guide", permanent: true },
      { source: "/hire-remote-developers-guide/", destination: "/blog/hire-remote-developers-guide", permanent: true },
      { source: "/virtual-assistant-pricing", destination: "/blog/virtual-assistant-pricing", permanent: true },
      { source: "/virtual-assistant-pricing/", destination: "/blog/virtual-assistant-pricing", permanent: true },
      { source: "/ai-vs-outsourcing", destination: "/blog/ai-vs-outsourcing", permanent: true },
      { source: "/ai-vs-outsourcing/", destination: "/blog/ai-vs-outsourcing", permanent: true },
      { source: "/outsource-payroll-services", destination: "/blog/outsource-payroll-services", permanent: true },
      { source: "/outsource-payroll-services/", destination: "/blog/outsource-payroll-services", permanent: true },
      { source: "/bpo-services", destination: "/blog/bpo-services", permanent: true },
      { source: "/bpo-services/", destination: "/blog/bpo-services", permanent: true },
      { source: "/best-remote-staffing-agencies", destination: "/blog/best-remote-staffing-agencies", permanent: true },
      { source: "/best-remote-staffing-agencies/", destination: "/blog/best-remote-staffing-agencies", permanent: true },

      /* ─── Old blog posts → best-match articles (301 permanent) ─── */
      { source: "/best-practices-for-hiring-remote-staff", destination: "/blog/hire-remote-developers-guide", permanent: true },
      { source: "/best-practices-for-hiring-remote-staff/", destination: "/blog/hire-remote-developers-guide", permanent: true },
      { source: "/complete-guide-to-remote-team-management", destination: "/blog/best-remote-staffing-agencies", permanent: true },
      { source: "/complete-guide-to-remote-team-management/", destination: "/blog/best-remote-staffing-agencies", permanent: true },
      { source: "/remote-staffing-guide", destination: "/blog/best-remote-staffing-agencies", permanent: true },
      { source: "/remote-staffing-guide/", destination: "/blog/best-remote-staffing-agencies", permanent: true },
      { source: "/staff-augmentation-services", destination: "/blog/bpo-services", permanent: true },
      { source: "/staff-augmentation-services/", destination: "/blog/bpo-services", permanent: true },
      { source: "/staff-augmentation-vs-outsourcing-vs-ai-which-model-in-2026", destination: "/blog/ai-vs-outsourcing", permanent: true },
      { source: "/staff-augmentation-vs-outsourcing-vs-ai-which-model-in-2026/", destination: "/blog/ai-vs-outsourcing", permanent: true },
      { source: "/offshore-vs-outsourcing", destination: "/blog/outsourcing-costs", permanent: true },
      { source: "/offshore-vs-outsourcing/", destination: "/blog/outsourcing-costs", permanent: true },
      { source: "/why-remote-hiring", destination: "/blog/hire-remote-developers-guide", permanent: true },
      { source: "/why-remote-hiring/", destination: "/blog/hire-remote-developers-guide", permanent: true },
      { source: "/remote-vs-on-site-work-which-is-more-effective", destination: "/blog/ai-vs-outsourcing", permanent: true },
      { source: "/remote-vs-on-site-work-which-is-more-effective/", destination: "/blog/ai-vs-outsourcing", permanent: true },

      /* ─── Old static pages → new equivalents ─── */
      { source: "/about", destination: "/about", permanent: true },
      { source: "/contact", destination: "/contact", permanent: true },
      { source: "/candidates", destination: "/candidates", permanent: true },
      { source: "/get-a-5-day-free-trial", destination: "/get-started", permanent: true },
      { source: "/get-a-5-day-free-trial/", destination: "/get-started", permanent: true },
      { source: "/certifications", destination: "/about", permanent: true },
      { source: "/certifications/", destination: "/about", permanent: true },
      { source: "/our-commitments", destination: "/about", permanent: true },
      { source: "/our-commitments/", destination: "/about", permanent: true },
      { source: "/our-people", destination: "/about", permanent: true },
      { source: "/our-people/", destination: "/about", permanent: true },
      { source: "/our-people{/:path}+", destination: "/about", permanent: true },
      { source: "/offices", destination: "/about", permanent: true },
      { source: "/offices/", destination: "/about", permanent: true },
      { source: "/ai-program", destination: "/about", permanent: true },
      { source: "/ai-program/", destination: "/about", permanent: true },
      { source: "/insights", destination: "/blog", permanent: true },
      { source: "/insights/", destination: "/blog", permanent: true },
      { source: "/remote-staffing-comparison", destination: "/services", permanent: true },
      { source: "/remote-staffing-comparison/", destination: "/services", permanent: true },
      { source: "/remote-staffing-cost", destination: "/blog/outsourcing-costs", permanent: true },
      { source: "/remote-staffing-cost/", destination: "/blog/outsourcing-costs", permanent: true },
      { source: "/remote-staffing-faqs", destination: "/about", permanent: true },
      { source: "/remote-staffing-faqs/", destination: "/about", permanent: true },
      { source: "/terms-of-use", destination: "/terms", permanent: true },
      { source: "/terms-of-use/", destination: "/terms", permanent: true },
      { source: "/cookie-policy", destination: "/privacy-policy", permanent: true },
      { source: "/cookie-policy/", destination: "/privacy-policy", permanent: true },
      { source: "/payment-terms", destination: "/terms", permanent: true },
      { source: "/payment-terms/", destination: "/terms", permanent: true },
      { source: "/gdpr-compliance-for-remote-hiring", destination: "/privacy-policy", permanent: true },
      { source: "/gdpr-compliance-for-remote-hiring/", destination: "/privacy-policy", permanent: true },
      { source: "/outsourcing-success-stories", destination: "/blog", permanent: true },
      { source: "/outsourcing-success-stories/", destination: "/blog", permanent: true },
      { source: "/outsource-to-india", destination: "/hire/remote-employees-for-your-business", permanent: true },
      { source: "/outsource-to-india/", destination: "/hire/remote-employees-for-your-business", permanent: true },

      /* ─── Case studies → /case-studies (301 permanent) ─── */
      {
        source: "/:slug(case-study-.*)",
        destination: "/case-studies",
        permanent: true,
      },

      /* ─── How It Works variations ─── */
      { source: "/how-it-works-remote-staffing", destination: "/how-it-works", permanent: true },
      { source: "/how-it-works-remote-staffing/", destination: "/how-it-works", permanent: true },

      /* ─── Catch remaining old blog posts with trailing slashes ─── */
      { source: "/best-remote-staffing-agency-for-remote-jobs", destination: "/blog/best-remote-staffing-agencies", permanent: true },
      { source: "/best-remote-staffing-agency-for-remote-jobs/", destination: "/blog/best-remote-staffing-agencies", permanent: true },
      { source: "/remote-staffing-services-zedtreeo", destination: "/services", permanent: true },
      { source: "/remote-staffing-services-zedtreeo/", destination: "/services", permanent: true },

      /* Trailing slashes handled by Next.js trailingSlash: false (default) */
    ];
  },
};

export default nextConfig;
