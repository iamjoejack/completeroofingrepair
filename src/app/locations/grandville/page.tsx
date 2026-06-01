import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Roofing in Grandville, MI",
  description:
    "Roof repair, replacement, and installation in Grandville, MI. Local roofers since 2008 with a 20-year workmanship warranty, financing, and 24/7 emergency service. Call (616) 207-3831.",
  alternates: { canonical: "/locations/grandville" },
};

export default function Page() {
  return (
    <LocationPage
      slug="grandville"
      name="Grandville"
      title="Roof repair & replacement in Grandville, MI"
      lead={
        <>
          Just down the road from our Byron Center shop, Grandville is one of the communities we serve most. From
          established neighborhoods near the Grand River to the busy Rivertown corridor, we keep local roofs watertight.
        </>
      }
      body={
        <>
          <p>
            Grandville’s established homes have seen plenty of Michigan weather, and many are reaching the age where the
            original roof is ready for replacement. Whether you’re noticing curling shingles, a stubborn leak, or
            granules collecting in your gutters, catching it early keeps a small repair from turning into a big one.
          </p>
          <p>
            We provide the full range of roofing services in Grandville — repairs across shingle, cedar shake, metal,
            TPO, and wood shake; complete tear-offs and replacements; inspections and maintenance; and gutters, siding,
            and storm-damage repair. As a nearby local company, we’re quick to respond and easy to reach.
          </p>
          <h2>Proximity that pays off</h2>
          <p>
            Being close means faster quotes, faster emergency response, and a roofer who actually knows the area. When
            storms move through, we’ll document any damage and handle your insurance claim directly.
          </p>
          <h2>Backed in writing</h2>
          <p>
            Every Grandville installation comes with our 20-year workmanship warranty and manufacturer warranties on
            materials, plus financing options and free quotes within 24 hours.
          </p>
        </>
      }
    />
  );
}
