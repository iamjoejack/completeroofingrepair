import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Roof Repairs",
  description:
    "Fast, lasting roof repairs in Greater Grand Rapids — asphalt shingle, cedar shake, metal, TPO, and wood shake. Leaks, missing shingles, storm damage. 24/7 emergency service. Call (616) 207-3831.",
  alternates: { canonical: "/services/roof-repairs" },
};

export default function Page() {
  return (
    <ServicePage
      slug="roof-repairs"
      eyebrow="Roof Repairs"
      title="Roof repairs done right — before a small problem gets big"
      lead={
        <>
          A missing shingle or a small leak rarely stays small. We fix shingle, cedar shake, metal, TPO, and wood shake
          roofs quickly and correctly, so water stays out and your roof reaches the lifespan you paid for.
        </>
      }
      intro={
        <>
          <p>
            Most roof problems start at the weak points — flashing, valleys, penetrations, and worn or wind-lifted
            shingles. Catch them early and a repair is straightforward and affordable. Wait, and that same leak can rot
            decking, soak insulation, and stain ceilings, turning a quick fix into a major job.
          </p>
          <p>
            We start by finding the actual source of the problem, not just the spot where water shows up inside (those
            are often in different places). Then we make a repair that matches your existing roof and actually lasts —
            and if a repair no longer makes sense, we’ll tell you honestly and price out the alternative.
          </p>
          <h3>Think you might have a leak?</h3>
          <p>
            Water stains, granules in the gutters, daylight in the attic, or shingles in the yard after a storm are all
            worth a look. We offer free quotes within 24 hours, and 24/7 emergency response when water is actively
            getting in.
          </p>
        </>
      }
      items={[
        { name: "Asphalt Shingle Repair", desc: "Replace cracked, curled, or wind-blown shingles and re-seal vulnerable areas to stop leaks." },
        { name: "Cedar Shake Repair", desc: "Swap split or rotted shakes and treat the surrounding area so the repair blends in and holds up." },
        { name: "Metal Roof Repair", desc: "Re-seal seams and fasteners, fix punctures, and address flashing on standing-seam and panel roofs." },
        { name: "TPO Repair", desc: "Patch membrane punctures and failed seams on flat and low-slope sections to restore a watertight surface." },
        { name: "Wood Shake Repair", desc: "Targeted replacement and resealing that preserves the look of a wood-shake roof while sealing out water." },
        { name: "Flashing & Leak Repair", desc: "Chimney, valley, and penetration flashing — the most common leak sources — sealed and made right." },
      ]}
      closing={
        <>
          <p>
            Insurance claim from a storm? We work directly with your provider and document the damage so the process is
            painless. <a href="/contact">Get a free repair quote</a> or call us now.
          </p>
        </>
      }
    />
  );
}
