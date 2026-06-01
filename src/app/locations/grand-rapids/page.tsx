import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Roofing in Grand Rapids, MI",
  description:
    "Roof repair, replacement, and installation in Grand Rapids, MI. Trusted local roofers since 2008 with a 20-year workmanship warranty, financing, and 24/7 emergency service. Call (616) 207-3831.",
  alternates: { canonical: "/locations/grand-rapids" },
};

export default function Page() {
  return (
    <LocationPage
      slug="grand-rapids"
      name="Grand Rapids"
      title="Roof repair & replacement in Grand Rapids, MI"
      lead={
        <>
          From Heritage Hill’s century-old homes to newer builds on the city’s edges, Grand Rapids has some of the most
          varied housing stock in West Michigan, and we’ve roofed across all of it since 2008.
        </>
      }
      body={
        <>
          <p>
            Grand Rapids roofs take a beating. Lake-effect snow piles up through winter, spring brings heavy rain and the
            occasional wind storm, and the freeze-thaw swings work shingles and flashing loose over time. Older
            neighborhoods like Heritage Hill, East Hills, and Eastown often have steep pitches, dormers, and historic
            details that demand a roofer who knows what they’re doing; newer subdivisions have their own challenges with
            ventilation and ice dams.
          </p>
          <p>
            We handle it all: emergency leak repair, storm-damage claims, full tear-offs and replacements, and new
            installations in asphalt shingle, cedar shake, metal, and TPO. Because we’re local, we know the permitting,
            the weather patterns, and the kinds of problems Grand Rapids homes actually run into.
          </p>
          <h2>Storm damage and insurance</h2>
          <p>
            When a wind or hail storm rolls through, we’ll inspect your roof, document the damage, and work directly with
            your insurance company to make the claim straightforward. If water is actively getting in, our 24/7 emergency
            service can tarp the area fast.
          </p>
          <h2>Why Grand Rapids homeowners call us</h2>
          <p>
            Honest, written quotes within 24 hours. A 20-year workmanship warranty on every install. Financing when you
            need it. And a crew that cleans up after itself and treats your home with respect. That’s the standard we’ve
            held since day one.
          </p>
        </>
      }
    />
  );
}
