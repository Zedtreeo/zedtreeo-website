import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";
import "./globals.css";

const geologica = Geologica({
  variable: "--font-geologica-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zedtreeo — Hire Dedicated Remote Employees Starting $5/Hour",
    template: "%s | Zedtreeo",
  },
  description:
    "Hire dedicated remote employees from India starting at $5/hour. Zedtreeo provides pre-vetted talent for software development, finance, marketing, legal, healthcare, and more. Free trial available.",
  keywords: [
    "hire remote employees",
    "dedicated remote staff",
    "outsourcing company",
    "remote staffing",
    "hire virtual assistant",
    "staff augmentation",
    "offshore hiring",
  ],
  authors: [{ name: "Zedtreeo" }],
  creator: "Zedtreeo",
  publisher: "Zedtreeo",
  metadataBase: new URL("https://zedtreeo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zedtreeo.com",
    siteName: "Zedtreeo",
    title: "Zedtreeo — Hire Dedicated Remote Employees Starting $5/Hour",
    description:
      "Pre-vetted remote talent from India. Software developers, accountants, marketers, legal staff, and more. Starting at $5/hour with a free trial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedtreeo — Hire Dedicated Remote Employees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zedtreeo — Hire Dedicated Remote Employees Starting $5/Hour",
    description:
      "Pre-vetted remote talent from India starting at $5/hour. Free trial available.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "theme-color": "#374B47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geologica.variable} h-full`}>
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <div className="pt-[72px] flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
