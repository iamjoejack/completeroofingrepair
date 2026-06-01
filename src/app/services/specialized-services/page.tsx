import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Specialized Services",
  description:
    "Roof inspections, maintenance, full replacement and tear-off, ventilation, waterproofing, and skylight, soffit & gable-vent installs across Greater Grand Rapids. Call (616) 207-3831.",
  alternates: { canonical: "/services/specialized-services" },
};

export default function Page() {
  return (
    <ServicePage
      slug="specialized-services"
      eyebrow="Specialized Services"
      title="Inspections, replacements, and the upgrades that protect your roof"
      lead={
        <>
          Beyond repairs, we help you stay ahead of problems: honest inspections, maintenance that adds years to your
          roof, complete replacements and tear-offs, and the ventilation and waterproofing details that keep a roof
          healthy from the inside out.
        </>
      }
      intro={
        <>
          <p>
            The cheapest roof is the one you take care of. A regular inspection and a little maintenance can add years to
            a roof’s life and catch small issues before they become expensive ones. And when a roof truly is at the end
            of the road, a proper tear-off and replacement — done with the right ventilation and underlayment — gives you
            decades of worry-free protection.
          </p>
          <p>
            A lot of roof problems actually start in the attic. Poor ventilation traps heat and moisture, cooking
            shingles from below and inviting ice dams in winter. We make sure intake and exhaust are balanced and that
            vulnerable areas are properly waterproofed.
          </p>
          <h3>Buying or selling a home?</h3>
          <p>
            We provide clear, documented roof inspections so you know exactly what you’re dealing with before you sign —
            no surprises, no scare tactics.
          </p>
        </>
      }
      items={[
        { name: "Roof Inspection", desc: "A thorough, documented assessment of your roof’s condition — great for buyers, sellers, and peace of mind." },
        { name: "Roof Maintenance", desc: "Routine tune-ups that catch small issues early and extend the life of your existing roof." },
        { name: "Roof Replacement", desc: "A complete new roof when repairs no longer make sense — with warranty-backed materials and workmanship." },
        { name: "Roof Tear-Off", desc: "Full removal of old layers down to the deck so the new roof sits on a sound, inspected base." },
        { name: "Ventilation", desc: "Balanced intake and exhaust to keep your attic dry, prevent ice dams, and protect shingles." },
        { name: "Waterproofing", desc: "Ice-and-water shield and sealing at the most leak-prone areas of your roof." },
        { name: "Skylight Install", desc: "Properly flashed, watertight skylight installation that brings in light without bringing in leaks." },
        { name: "Soffit Install", desc: "New soffit for clean lines, proper ventilation, and protection from pests and moisture." },
        { name: "Gable Vent", desc: "Gable-vent installation to improve attic airflow and overall roof system performance." },
      ]}
      closing={
        <>
          <p>
            Want a baseline on your roof’s health? <a href="/contact">Book an inspection</a> — you’ll get a straight
            answer and a clear plan, whether that’s “you’re good for years” or a written replacement quote.
          </p>
        </>
      }
    />
  );
}
