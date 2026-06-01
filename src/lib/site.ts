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
  email: "info@completeroofingrepair.com",
  instagram: "https://www.instagram.com/completeroofingrepair_gr/",
  instagramHandle: "@completeroofingrepair_gr",
  bbbProfileUrl:
    "https://www.bbb.org/us/mi/byron-center/profile/roofing-contractors/complete-roofing-repair-llc-0372-38215796",
  bbbRating: "A+",
  bbbAccreditedSince: 2023,
  address: {
    street: "6049 Clyde Park Avenue SW",
    city: "Byron Center",
    state: "MI",
    zip: "49315",
  },
  hoursShort: "Mon-Fri 8am to 5pm · 24/7 emergency",
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
      "New roofs in asphalt shingle, cedar shake, metal, and TPO. Built to handle Michigan winters and last for decades.",
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    icon: "wrench",
    blurb:
      "Fast, lasting fixes for shingle, cedar shake, metal, TPO, and wood shake roofs, so a small problem never turns into a big one.",
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
      "Gutter installation, repair, and cleaning that moves water away from your roof, foundation, and landscaping so you avoid costly leaks.",
  },
  {
    slug: "construction",
    title: "Construction",
    icon: "building",
    blurb:
      "Exterior doors, siding, windows, and vapor barrier that protect and upgrade the whole exterior of your home.",
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
    image: "/images/blog-roof-repair.jpg",
  },
  {
    slug: "does-home-insurance-cover-roof-damage",
    category: "Insurance",
    title: "Does homeowners insurance cover roof damage?",
    excerpt:
      "What’s typically covered, what isn’t, and how to file a storm-damage claim the right way.",
    image: "/images/blog-insurance.jpg",
  },
  {
    slug: "dangers-of-a-leaking-roof",
    category: "Repairs",
    title: "The hidden dangers of a leaking roof",
    excerpt:
      "Mold, rot, and electrical risk: why even a minor leak deserves a fast response.",
    image: "/images/blog-leaking-roof.jpg",
  },
] as const;

/* REAL customer reviews pulled from public profiles (BBB, Google). Add more as
   they come in. Keep attribution honest — only use genuine reviews here. */
export const REVIEWS = [
  {
    quote:
      "Had Complete Roofing put a new roof on my house. Showed up on time with a full crew at 7:30 am and had stripped the old off and put on a great looking new roof.",
    name: "Dean V.",
    source: "BBB Review",
  },
  {
    quote:
      "Fast, clean, and very respectful. These guys did a great job and they protected all of the plants.",
    name: "Verified customer",
    source: "Google Review",
  },
] as const;

/* The real team, from the company's About page. Members without a real photo
   on file show an initials avatar instead (no stock photos). */
export const TEAM = [
  { name: "Jason VanDyke", role: "Owner", location: "", photo: "/images/team-jason-vandyke.jpg" },
  { name: "Doug VanNoord", role: "Owner", location: "", photo: null },
  { name: "Tyce VanNoord", role: "Project Manager / Estimator", location: "Grand Rapids", photo: "/images/team-tyce-vannoord.jpg" },
  { name: "Cole Bleyenburg", role: "Project Manager / Estimator", location: "Grand Rapids", photo: "/images/team-cole-bleyenburg.jpg" },
  { name: "Rob Spicuzza", role: "Sales", location: "Grand Rapids", photo: "/images/team-rob-spicuzza.jpg" },
  { name: "Ross Williams", role: "Project Manager / Estimator", location: "Traverse City", photo: null },
  { name: "Ken Stoel", role: "Project Manager / Estimator", location: "Charlevoix", photo: null },
] as const;
