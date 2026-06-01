import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { ChatWidget } from "@/components/chat-widget";
import { BASE_URL, PHONE_DISPLAY, SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Grand Rapids Roofing Contractor | Complete Roofing & Repair",
    template: "%s | Complete Roofing & Repair",
  },
  description:
    `Trusted Grand Rapids-area roofing contractor since ${SITE.established}. Roof repair, replacement & installation with a 20-year workmanship warranty, financing, and free quotes in 24 hours. 24/7 emergency service. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    url: BASE_URL,
    title: "Complete Roofing & Repair — Trusted Grand Rapids Roofers Since 2008",
    description:
      "Roof repair, replacement & installation across Greater Grand Rapids. 20-year workmanship warranty, financing, free 24-hour quotes, 24/7 emergency service.",
  },
};

/* schema.org LocalBusiness — appears on every page via the root layout. */
const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: SITE.legalName,
  url: BASE_URL,
  telephone: "+1-616-207-3831",
  priceRange: "$$",
  foundingDate: String(SITE.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.8089, longitude: -85.6797 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [SITE.instagram],
  areaServed: [
    "Grand Rapids MI", "Byron Center MI", "Cutlerville MI", "Caledonia MI",
    "Kentwood MI", "Hudsonville MI", "Grandville MI", "Jenison MI",
    "Wayland MI", "Dorr MI", "Traverse City MI", "Charlevoix MI",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
        {/* Spacer so the sticky mobile bar never covers footer content. */}
        <div className="h-14 lg:hidden" aria-hidden="true" />
        <ChatWidget />
      </body>
    </html>
  );
}
