import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Roofing in Traverse City, MI",
  description:
    "Roof repair, replacement, and installation in Traverse City, MI for larger projects. Experienced roofers built for northern Michigan winters. 20-year workmanship warranty. Call (616) 207-3831.",
  alternates: { canonical: "/locations/traverse-city" },
};

export default function Page() {
  return (
    <LocationPage
      slug="traverse-city"
      name="Traverse City"
      title="Roofing in Traverse City, MI"
      lead={
        <>
          We travel north to Traverse City for larger roofing projects, bringing the same craftsmanship and warranties
          we’re known for in West Michigan — built for the heavier snow loads of northern Michigan.
        </>
      }
      body={
        <>
          <p>
            Traverse City roofs face some of the toughest conditions in the state. Lake-effect snow off Grand Traverse
            Bay piles deep, ice dams are a real and recurring threat, and the seasonal freeze-thaw is relentless. That
            makes proper ventilation, ice-and-water shield, and quality materials non-negotiable — not upsells.
          </p>
          <p>
            For larger projects in the Traverse City area — full replacements, new installations, and significant
            storm-damage work — we bring the experience to do it right: balanced attic ventilation to fight ice dams,
            thorough waterproofing at the eaves and valleys, and materials chosen to handle heavy snow and wind.
          </p>
          <h2>Built for northern Michigan weather</h2>
          <p>
            Asphalt shingle, cedar shake, metal, and TPO — we’ll help you choose the system that makes sense for your
            home and the climate. Metal, in particular, is a popular choice up north for the way it sheds snow.
          </p>
          <h2>Worth the drive</h2>
          <p>
            Every roof we install carries our 20-year workmanship warranty and manufacturer warranties on materials.
            Planning a project in Traverse City? <a href="/contact">Reach out for a quote</a> and we’ll talk through the
            details.
          </p>
        </>
      }
    />
  );
}
