import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Gutters",
  description:
    "Gutter installation, repair, and cleaning across Greater Grand Rapids. Protect your roof, foundation, and landscaping from water damage. Free 24-hour quotes. Call (616) 207-3831.",
  alternates: { canonical: "/services/gutters" },
};

export default function Page() {
  return (
    <ServicePage
      slug="gutters"
      eyebrow="Gutters"
      title="Gutters that move water away from where it does damage"
      lead={
        <>
          Your gutters are the first line of defense for your roof edge, siding, foundation, and landscaping. We install,
          repair, and clean gutter systems so rain and snowmelt end up in the right place, away from your home.
        </>
      }
      intro={
        <>
          <p>
            It’s easy to overlook gutters until they fail, and then the damage shows up fast. Clogged or sagging gutters
            send water spilling down your siding and pooling against the foundation, which can mean basement leaks,
            erosion, fascia rot, and ice dams in winter. A well-maintained system quietly prevents all of it.
          </p>
          <p>
            Because we’re roofers, we look at your gutters as part of the whole water-management system: how the roof
            sheds water, where it concentrates, and where it needs to go. That’s how you stop problems instead of just
            chasing them.
          </p>
        </>
      }
      items={[
        { name: "Gutter Cleaning", desc: "Clear out leaves and debris so water flows freely. Especially important before winter and after fall." },
        { name: "Gutter Installation", desc: "New, properly pitched gutters and downspouts sized to your roof and routed away from the foundation." },
        { name: "Gutter Repair", desc: "Fix sagging, leaking joints, loose hangers, and damaged sections to restore proper drainage." },
      ]}
      closing={
        <>
          <p>
            Pairing new gutters with a roof project? It’s the perfect time, and we’ll make sure everything ties in
            cleanly. <a href="/contact">Get a free gutter quote</a> today.
          </p>
        </>
      }
    />
  );
}
