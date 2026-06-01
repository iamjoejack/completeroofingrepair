/* ============================================================================
   SITE CONFIG  —  ONE place to edit business facts, services, cities, reviews.
   Everything here renders into static HTML, so it's fast + good for SEO.

   TO CHANGE THE PHONE NUMBER EVERYWHERE: edit PHONE_DISPLAY and PHONE_TEL below.
   ============================================================================ */

export const PHONE_DISPLAY = "(616) 207-3831";
export const PHONE_TEL = "+16162073831"; // used by tel: and sms: links

export const SITE = {
  name: "Complete Roofing & Repair",
  legalName: "Complete Roofing & Repair, LLC",
  established: 2008,
  email: "", // add a real inbox if you have one
  instagram: "https://www.instagram.com/completeroofingrepair_gr/",
  instagramHandle: "@completeroofingrepair_gr",
  // TODO: paste the real Better Business Bureau profile URL.
  bbbProfileUrl: "https://www.bbb.org/", // REPLACE WITH REAL BBB PROFILE URL
  address: {
    street: "6049 Clyde Park Avenue SW",
    city: "Byron Center",
    state: "MI",
    zip: "49315",
  },
  hoursShort: "Mon–Fri 8am–5pm · 24/7 emergency",
  mapEmbedSrc:
    "https://www.google.com/maps?q=6049+Clyde+Park+Avenue+SW,+Byron+Center,+MI+49315&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=6049+Clyde+Park+Avenue+SW,+Byron+Center,+MI+49315",
} as const;

/* Production URL — used for canonical/OG/sitemap. Update when you point a
   domain at the deploy. */
export const BASE_URL = "https://www.completeroofingrepair.com";

/* The 7 headline selling points (trust bar). */
export const SELLING_POINTS = [
  { icon: "clock", title: "24/7 Emergency Service" },
  { icon: "bolt", title: "Free Quotes in 24 Hours" },
  { icon: "dollar", title: "Financing Available" },
  { icon: "shield", title: "20-Year Workmanship Warranty" },
  { icon: "badge", title: "Manufacturer Warranties" },
  { icon: "umbrella", title: "Works With Insurance" },
  { icon: "chart", title: "Competitive Pricing" },
] as const;

/* Top-level service categories (home grid, services overview, footer). */
export const SERVICES = [
  {
    slug: "roof-installation",
    title: "Roof Installation",
    icon: "house",
    blurb:
      "New roofs in asphalt shingle, cedar shake, metal, and TPO — built to handle Michigan winters and last for decades.",
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    icon: "wrench",
    blurb:
      "Fast, lasting fixes for shingle, cedar shake, metal, TPO, and wood shake roofs — so a small problem never becomes a big one.",
  },
  {
    slug: "specialty-repairs",
    title: "Specialty Repairs",
    icon: "home-alert",
    blurb:
      "Chimney flashing, leak detection, skylights, soffit, roof valleys, moss removal, coatings, plus 24/7 emergency & storm-damage repair.",
  },
  {
    slug: "specialized-services",
    title: "Specialized Services",
    icon: "sparkle",
    blurb:
      "Inspections, maintenance plans, tear-offs, ventilation, waterproofing, roof deck repair, and skylight or gable-vent installs.",
  },
  {
    slug: "gutters",
    title: "Gutters",
    icon: "gutter",
    blurb:
      "Gutter installation, repair, and cleaning to move water away from your roof, foundation, and landscaping — and prevent costly leaks.",
  },
  {
    slug: "construction",
    title: "Construction",
    icon: "building",
    blurb:
      "Exterior doors, siding, windows, and vapor barrier — protecting and upgrading the whole exterior envelope of your home.",
  },
] as const;

/* Dropdown options for the quote forms. */
export const SERVICE_OPTIONS = [
  "Roof Repair",
  "Roof Replacement",
  "New Roof Installation",
  "Storm / Emergency Damage",
  "Roof Inspection",
  "Gutters",
  "Siding / Windows / Doors",
  "Other",
] as const;

/* Primary service-area cities (service area + footer). The first five have
   their own SEO landing pages under /locations. */
export const CITIES = [
  "Byron Center",
  "Grand Rapids",
  "Cutlerville",
  "Caledonia",
  "Dutton",
  "Alaska",
  "Kentwood",
  "Hudsonville",
  "Grandville",
  "Georgetown",
  "Jenison",
  "East Grand Rapids",
  "Moline",
  "Wayland",
  "Dorr",
  "Shelbyville",
] as const;

export const LOCATION_PAGES = [
  { slug: "grand-rapids", name: "Grand Rapids" },
  { slug: "byron-center", name: "Byron Center" },
  { slug: "grandville", name: "Grandville" },
  { slug: "traverse-city", name: "Traverse City" },
  { slug: "charlevoix", name: "Charlevoix" },
] as const;

/* Blog index. Add a new post by creating src/app/blog/<slug>/page.tsx and
   adding an entry here. */
export const POSTS = [
  {
    slug: "cost-of-procrastinating-roof-repairs",
    category: "Maintenance",
    title: "What procrastinating on roof repairs really costs",
    excerpt:
      "A small leak today can become a five-figure repair tomorrow. Here’s the real math on putting it off.",
  },
  {
    slug: "does-home-insurance-cover-roof-damage",
    category: "Insurance",
    title: "Does homeowners insurance cover roof damage?",
    excerpt:
      "What’s typically covered, what isn’t, and how to file a storm-damage claim the right way.",
  },
  {
    slug: "dangers-of-a-leaking-roof",
    category: "Repairs",
    title: "The hidden dangers of a leaking roof",
    excerpt:
      "Mold, rot, and electrical risk: why even a minor leak deserves a fast response.",
  },
] as const;

/* PLACEHOLDER reviews — replace each with a real, verified review (real name +
   city) before launch. Never present these as real customers. */
export const PLACEHOLDER_REVIEWS = [
  {
    quote:
      "They had a tarp on our roof the same night the storm hit and a permanent fix done within the week. Honest pricing and they handled the insurance paperwork for us.",
    attribution: "Example review — replace with real customer",
  },
  {
    quote:
      "Full tear-off and new shingles in two days. The crew was respectful, cleaned up every nail, and the new roof looks fantastic. Worth every penny.",
    attribution: "Example review — replace with real customer",
  },
  {
    quote:
      "Found the source of a leak two other companies missed. Fair quote, fixed it right, and followed up to make sure it stayed dry. Highly recommend.",
    attribution: "Example review — replace with real customer",
  },
] as const;
