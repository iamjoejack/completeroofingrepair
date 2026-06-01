import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Roofing in Charlevoix, MI",
  description:
    "Roof repair, replacement, and installation in Charlevoix, MI for larger projects. Experienced roofers for lakefront and seasonal homes. 20-year workmanship warranty. Call (616) 207-3831.",
  alternates: { canonical: "/locations/charlevoix" },
};

export default function Page() {
  return (
    <LocationPage
      slug="charlevoix"
      name="Charlevoix"
      title="Roofing in Charlevoix, MI"
      lead={
        <>
          We serve Charlevoix for larger roofing projects, bringing experienced craftsmanship to the lakefront and
          seasonal homes that define this stretch of northern Michigan.
        </>
      }
      body={
        <>
          <p>
            Charlevoix’s setting between Lake Michigan and Lake Charlevoix is beautiful — and demanding on a roof. Wind
            coming off open water, heavy lake-effect snow, and the wide temperature swings of a four-season resort town
            all put roofing materials and details to the test. Cedar shake and other premium materials are common here,
            and they reward a roofer who installs them correctly.
          </p>
          <p>
            For larger Charlevoix projects — replacements, new installs, and substantial repairs — we bring the right
            approach: proper ventilation, careful waterproofing, and materials selected to stand up to wind, snow, and
            lakeside moisture. We’re also a good fit for seasonal-home owners who need a contractor they can trust to do
            it right while they’re away.
          </p>
          <h2>Premium materials, done correctly</h2>
          <p>
            Whether it’s cedar shake, metal, asphalt shingle, or TPO on a low-slope section, we install it to last and
            back it with our 20-year workmanship warranty plus manufacturer warranties on materials.
          </p>
          <h2>Let’s plan your project</h2>
          <p>
            Considering roof work on a Charlevoix home? <a href="/contact">Get in touch for a quote</a> and we’ll walk
            through the options and timeline with you.
          </p>
        </>
      }
    />
  );
}
