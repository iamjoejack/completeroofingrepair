import type { NextConfig } from "next";

/* ============================================================================
   301/308 REDIRECTS from the OLD Hibu site's URLs to the new pages.
   This preserves the existing SEO ranking and stops old links from 404ing.

   Note: Next.js emits a 308 (permanent) redirect. Google treats 308 exactly
   like a 301 for ranking and link equity; 308 just also preserves the request
   method. (Next.js has no literal-301 option; for a literal 301 you'd use a
   Vercel config redirect instead.)

   To add a redirect later: add `{ from, to }` to the right group below.
   ============================================================================ */

// Old service/repair pages collapsed into the new category pages.
const SERVICE_REDIRECTS: Record<string, string[]> = {
  "/services/roof-installation": [
    "/roof-installation",
    "/asphalt-shingle-installation",
    "/cedar-shake-roof-installers",
    "/metal-roofers",
    "/tpo-roofers",
    "/shingle-colors",
  ],
  "/services/roof-repairs": [
    "/roof-repairs",
    "/cedar-shake-repair",
    "/wood-shake-repair",
    "/tpo-roof-repair",
    "/metal-roof-repair",
    "/asphalt-shingle-repair",
  ],
  "/services/specialty-repairs": [
    "/specialty-roof-repairs",
    "/chimney-flashing-repair",
    "/roof-coating-services",
    "/roof-moss-removal",
    "/roof-valley-repair",
    "/leak-detection-services",
    "/roof-deck-repair",
    "/emergency-roof-repair",
    "/storm-damage-repair",
    "/skylight-repair",
    "/soffit-repair",
    "/gable-vent-repair",
  ],
  "/services/specialized-services": [
    "/specialized-roofing-services",
    "/roof-waterproofing",
    "/soffit-installation",
    "/gable-vent-installation",
    "/roof-maintenance-services",
    "/skylight-installation",
    "/roof-inspection-services",
    "/roof-replacement",
    "/roof-deck-installation",
    "/roof-ventilation-services",
    "/roof-tear-off",
  ],
  "/services/gutters": [
    "/gutter-services",
    "/gutter-repairs",
    "/gutter-cleaning",
    "/gutter-installation",
  ],
  "/services/construction": [
    "/construction-services",
    "/vapor-barrier-installation",
    "/exterior-doors",
    "/siding-contractors",
    "/window-contractor",
  ],
};

// Old top-level pages whose new equivalent lives at a different path.
const PAGE_REDIRECTS: Record<string, string> = {
  "/service": "/services",
  "/team": "/about",
  "/request-quote": "/contact",
  "/serving-area": "/service-area",
  // Old city landing pages -> new /locations pages
  "/roof-repair-byron-center-mi": "/locations/byron-center",
  "/roof-repair-grandville-mi": "/locations/grandville",
  "/roof-repair-charlevoix-mi": "/locations/charlevoix",
  "/roof-repair-traverse-city-mi": "/locations/traverse-city",
  "/roof-repair-grand-rapids-mi": "/locations/grand-rapids",
  // Old blog posts -> rewritten posts
  "/does-your-home-insurance-cover-roof-repair-and-roof-replacement": "/blog/does-home-insurance-cover-roof-damage",
  "/3-reasons-you-should-never-ignore-a-leaking-roof": "/blog/dangers-of-a-leaking-roof",
  "/4-hidden-costs-of-procrastinating-roof-repairs": "/blog/cost-of-procrastinating-roof-repairs",
};

const nextConfig: NextConfig = {
  async redirects() {
    const redirects = [];

    for (const [destination, sources] of Object.entries(SERVICE_REDIRECTS)) {
      for (const source of sources) {
        redirects.push({ source, destination, permanent: true });
      }
    }

    for (const [source, destination] of Object.entries(PAGE_REDIRECTS)) {
      redirects.push({ source, destination, permanent: true });
    }

    // ~150 old city pages (/contact/roof-repair-service-area/<city>-mi) all
    // point at the consolidated service-area page in one rule.
    redirects.push({
      source: "/contact/roof-repair-service-area/:city",
      destination: "/service-area",
      permanent: true,
    });

    return redirects;
  },
};

export default nextConfig;
