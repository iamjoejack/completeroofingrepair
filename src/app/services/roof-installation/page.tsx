import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Roof Installation",
  description:
    "New roof installation across Greater Grand Rapids — asphalt shingle, cedar shake, metal, and TPO. 20-year workmanship warranty, financing, free 24-hour quotes. Call (616) 207-3831.",
  alternates: { canonical: "/services/roof-installation" },
};

export default function Page() {
  return (
    <ServicePage
      slug="roof-installation"
      eyebrow="Roof Installation"
      title="New roof installation built for Michigan winters"
      lead={
        <>
          A new roof is one of the biggest investments you’ll make in your home. We install asphalt shingle, cedar
          shake, metal, and TPO systems designed to shrug off West Michigan’s freeze-thaw cycles — and we back every
          installation with a 20-year workmanship warranty.
        </>
      }
      intro={
        <>
          <p>
            Whether you’re building new, finishing an addition, or replacing a roof that’s reached the end of its life,
            the install is where craftsmanship matters most. A roof is a system — decking, underlayment, ice-and-water
            shield, ventilation, flashing, and the surface material all have to work together. Cut a corner on any one of
            them and you’ll feel it the first hard winter.
          </p>
          <p>
            We’ve been installing roofs in the Grand Rapids area since 2008. That means proper ice-and-water protection
            along the eaves and valleys, balanced intake-and-exhaust ventilation so your attic breathes, and
            manufacturer-approved details that keep your material warranty intact.
          </p>
          <h3>Choosing the right material</h3>
          <p>
            Not sure what belongs on your house? We’ll walk you through the trade-offs in plain English — lifespan,
            look, and budget — and give you a written quote within 24 hours. Financing is available if you’d rather
            spread the cost over time.
          </p>
        </>
      }
      items={[
        { name: "Asphalt Shingle", desc: "The West Michigan workhorse — affordable, durable, and available in architectural styles that boost curb appeal." },
        { name: "Cedar Shake", desc: "A premium, natural look with real character. Installed and sealed correctly so it weathers beautifully for decades." },
        { name: "Metal", desc: "Standing-seam and metal panel systems that shed snow, resist wind, and can last 50+ years with minimal upkeep." },
        { name: "TPO", desc: "Single-ply membrane for low-slope and flat sections — energy-efficient, watertight, and ideal for additions and porches." },
      ]}
      closing={
        <>
          <p>
            Every installation includes a thorough tear-off (or inspection of existing layers), a clean, protected job
            site, and a final walkthrough so you know exactly what was done. We also handle the permits.
          </p>
          <p>
            Ready to talk options? <a href="/contact">Request a free quote</a> or call us — we’ll get you a clear number
            and an honest recommendation, not a hard sell.
          </p>
        </>
      }
    />
  );
}
