import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Zedtreeo's privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://zedtreeo.com/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-zt-section px-6">
      <div className="max-w-zt-narrow mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy", href: "/privacy-policy" },
          ]}
          className="mb-8"
        />

        <h1 className="text-zt-h2 text-zt-headings mb-2">Privacy Policy</h1>
        <p className="text-sm text-zt-body mb-10">
          Last updated: April 2026
        </p>

        <div className="prose-zt space-y-8">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Zedtreeo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              at zedtreeo.com and use our services. By accessing or using our
              services, you agree to the terms of this policy.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>
              We collect information you voluntarily provide when you fill out
              contact forms, request a consultation, sign up for our services, or
              communicate with us. This may include your name, email address,
              phone number, company name, job title, and details about your
              staffing requirements.
            </p>
            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain
              information including your IP address, browser type, operating
              system, referring URLs, pages viewed, time spent on pages, and
              other browsing data through cookies and similar technologies.
            </p>
            <h3>Third-Party Analytics</h3>
            <p>
              We use third-party analytics services (such as Google Analytics) to
              help understand how visitors use our website. These services may
              collect information about your online activities over time and
              across different websites.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you relevant communications about our services</li>
              <li>Match you with suitable remote employees</li>
              <li>Process transactions and manage your account</li>
              <li>Analyze usage patterns to improve our website</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2>4. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul>
              <li>
                <strong>Service providers</strong> who assist us in operating our
                website and conducting our business (hosting, analytics, CRM)
              </li>
              <li>
                <strong>Remote employees</strong> we match with you, limited to
                information necessary for the engagement
              </li>
              <li>
                <strong>Legal authorities</strong> when required by law, regulation,
                or legal process
              </li>
              <li>
                <strong>Business transfers</strong> in connection with a merger,
                acquisition, or sale of assets
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              information. Our operations are ISO 27001 certified and GDPR
              compliant. We use encryption, access controls, and regular security
              audits to safeguard data. However, no method of electronic
              transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to
              enhance your browsing experience, analyze site traffic, and
              personalize content. You can control cookie preferences through
              your browser settings. Disabling cookies may affect certain
              features of our website.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@zedtreeo.com">info@zedtreeo.com</a>.
            </p>
          </section>

          <section>
            <h2>8. GDPR Compliance</h2>
            <p>
              For individuals in the European Economic Area (EEA), we process
              personal data under lawful bases including consent, contractual
              necessity, legitimate interests, and legal obligations. We have
              implemented appropriate safeguards for international data
              transfers.
            </p>
          </section>

          <section>
            <h2>9. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to
              fulfill the purposes for which it was collected, comply with legal
              obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2>10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              we become aware that we have collected information from a child, we
              will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. We encourage
              you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <p>
              <strong>Zedtreeo</strong>
              <br />
              Email:{" "}
              <a href="mailto:info@zedtreeo.com">info@zedtreeo.com</a>
              <br />
              Website:{" "}
              <a href="https://zedtreeo.com">zedtreeo.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
