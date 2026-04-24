import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Zedtreeo's terms of service. Review the terms and conditions governing the use of our remote staffing services.",
  alternates: { canonical: "https://zedtreeo.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="py-zt-section px-6">
      <div className="max-w-zt-narrow mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service", href: "/terms" },
          ]}
          className="mb-8"
        />

        <h1 className="text-zt-h2 text-zt-headings mb-2">Terms of Service</h1>
        <p className="text-sm text-zt-body mb-10">
          Last updated: April 2026
        </p>

        <div className="prose-zt space-y-8">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by Zedtreeo
              (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) through our website at
              zedtreeo.com, you agree to be bound by these Terms of Service. If
              you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2>2. Description of Services</h2>
            <p>
              Zedtreeo provides remote staffing services, connecting businesses
              with pre-vetted, dedicated remote employees based in India. Our
              services include candidate sourcing, vetting, matching, onboarding
              support, and ongoing management assistance. We serve clients
              globally across software development, finance, marketing, legal,
              healthcare, and other professional functions.
            </p>
          </section>

          <section>
            <h2>3. Eligibility</h2>
            <p>
              Our services are available to businesses and individuals who are at
              least 18 years of age and have the legal authority to enter into
              binding agreements. By using our services, you represent that you
              meet these requirements.
            </p>
          </section>

          <section>
            <h2>4. Service Engagement</h2>
            <h3>Free Trial</h3>
            <p>
              We offer a 5-business-day free trial for new engagements. During
              the trial, the assigned remote employee works on real tasks at no
              cost. You are under no obligation to continue after the trial
              period.
            </p>
            <h3>Engagement Terms</h3>
            <p>
              After the trial, services are billed on an hourly basis according
              to the agreed rate. Specific terms including rates, working hours,
              scope of work, and payment terms will be outlined in a separate
              service agreement between you and Zedtreeo.
            </p>
            <h3>No Long-Term Contracts</h3>
            <p>
              Unless otherwise specified in your service agreement, engagements
              are month-to-month. You may scale up, scale down, or terminate
              with reasonable notice as specified in your agreement.
            </p>
          </section>

          <section>
            <h2>5. Payment Terms</h2>
            <p>
              Payment terms, billing cycles, and accepted payment methods will
              be detailed in your service agreement. Late payments may result in
              service suspension. All fees are in US Dollars unless otherwise
              agreed. You are responsible for any applicable taxes.
            </p>
          </section>

          <section>
            <h2>6. Replacement Guarantee</h2>
            <p>
              If a remote employee does not meet your expectations, we will
              provide a replacement within 48 hours at no additional cost. This
              guarantee applies throughout the duration of your engagement.
            </p>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              All work product created by remote employees during their
              engagement with you shall be your property. Remote employees sign
              intellectual property assignment agreements as part of their
              onboarding. Zedtreeo retains no ownership rights over work
              produced for clients.
            </p>
            <p>
              The Zedtreeo name, logo, website content, and proprietary
              processes remain the intellectual property of Zedtreeo and may not
              be used without written permission.
            </p>
          </section>

          <section>
            <h2>8. Confidentiality</h2>
            <p>
              All remote employees sign Non-Disclosure Agreements (NDAs) before
              beginning any engagement. We take confidentiality seriously and
              implement technical and organizational measures to protect your
              sensitive information. Specific confidentiality terms may be
              detailed in your service agreement.
            </p>
          </section>

          <section>
            <h2>9. Data Protection</h2>
            <p>
              We handle personal data in accordance with our Privacy Policy and
              applicable data protection laws, including GDPR. Our operations are
              ISO 27001 certified. Please review our{" "}
              <a href="/privacy-policy">Privacy Policy</a> for detailed
              information on data handling practices.
            </p>
          </section>

          <section>
            <h2>10. Non-Solicitation</h2>
            <p>
              During the term of your engagement and for 12 months thereafter,
              you agree not to directly hire, solicit, or engage any remote
              employee introduced by Zedtreeo outside of the Zedtreeo
              arrangement, unless a direct hire fee is agreed upon in writing.
            </p>
          </section>

          <section>
            <h2>11. Limitation of Liability</h2>
            <p>
              Zedtreeo acts as a staffing intermediary. While we rigorously vet
              all candidates, we do not guarantee specific business outcomes or
              results from any engagement. Our liability is limited to the
              fees paid for services in the month in which any claim arises.
              We are not liable for indirect, incidental, consequential, or
              punitive damages.
            </p>
          </section>

          <section>
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold Zedtreeo harmless from any claims,
              damages, or expenses arising from your use of our services, your
              violation of these terms, or your violation of any rights of a
              third party.
            </p>
          </section>

          <section>
            <h2>13. Termination</h2>
            <p>
              Either party may terminate the engagement with the notice period
              specified in the service agreement. Upon termination, you remain
              responsible for payment of all fees for services rendered up to the
              effective date of termination.
            </p>
          </section>

          <section>
            <h2>14. Website Use</h2>
            <p>
              You agree to use our website for lawful purposes only. You may not
              attempt to gain unauthorized access to our systems, use automated
              tools to scrape content, or interfere with the proper functioning
              of the website.
            </p>
          </section>

          <section>
            <h2>15. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of India. Any disputes shall be resolved
              through good-faith negotiation first, and if unresolved, through
              binding arbitration.
            </p>
          </section>

          <section>
            <h2>16. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated revision date.
              Continued use of our services after changes constitutes acceptance
              of the updated terms.
            </p>
          </section>

          <section>
            <h2>17. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
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
