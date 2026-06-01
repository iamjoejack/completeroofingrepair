import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Specialty Repairs",
  description:
    "Specialty roof repairs in Greater Grand Rapids: chimney flashing, leak detection, skylights, soffit, roof valleys, moss removal, roof coatings, plus 24/7 emergency and storm-damage repair. Call (616) 207-3831.",
  alternates: { canonical: "/services/specialty-repairs" },
};

export default function Page() {
  return (
    <ServicePage
      slug="specialty-repairs"
      eyebrow="Specialty Repairs"
      title="The tricky repairs other roofers skip"
      lead={
        <>
          Some of the most important roof work happens at the details — chimneys, valleys, skylights, and flashing.
          These are exactly the spots where leaks start, and exactly where experience pays off. We handle all of it, plus
          24/7 emergency and storm-damage response.
        </>
      }
      intro={
        <>
          <p>
            A roof is only as good as its weakest transition. Where the roof meets a chimney, a wall, a skylight, or a
            valley, water is constantly looking for a way in — and ordinary repairs that ignore those details tend to
            fail. Our specialty work focuses on sealing those vulnerable points correctly the first time.
          </p>
          <p>
            We also tackle the problems that quietly shorten a roof’s life: moss holding moisture against shingles,
            ponding on flat sections, and aging surfaces that would benefit from a protective coating instead of a full
            replacement.
          </p>
          <h3>Storm or active leak?</h3>
          <p>
            When water is getting in right now, time matters. Our 24/7 emergency service gets a tarp or temporary fix in
            place fast, then schedules the permanent repair — and we document everything for your insurance claim.
          </p>
        </>
      }
      items={[
        { name: "Chimney Flashing", desc: "Re-flash and seal the chimney-to-roof joint — one of the most common leak sources on any home." },
        { name: "Emergency Repair", desc: "24/7 response to stop active leaks fast with a tarp or temporary seal, then a lasting fix." },
        { name: "Leak Detection", desc: "We trace leaks to their true source, not just the stain inside, so the repair actually works." },
        { name: "Roof Coating", desc: "Protective coatings that extend the life of flat and metal roofs and improve energy efficiency." },
        { name: "Roof Deck Repair", desc: "Replace rotted or water-damaged decking so the new surface has a solid, dry base." },
        { name: "Moss Removal", desc: "Safe removal and treatment to stop moss from trapping moisture and lifting shingles." },
        { name: "Skylight Repair", desc: "Re-seal and re-flash leaking skylights — or recommend replacement when the unit has failed." },
        { name: "Soffit Repair", desc: "Fix damaged soffit to protect ventilation, keep pests out, and maintain curb appeal." },
        { name: "Storm Damage", desc: "Wind, hail, and fallen-limb damage assessed, documented, and repaired — insurance-friendly." },
        { name: "Roof Valley", desc: "Rebuild and re-line valleys, where the most water concentrates, to keep them watertight." },
      ]}
      closing={
        <>
          <p>
            Not sure which of these you need? That’s fine — describe what you’re seeing and we’ll figure it out.{" "}
            <a href="/contact">Request a free assessment</a> or call us 24/7.
          </p>
        </>
      }
    />
  );
}
