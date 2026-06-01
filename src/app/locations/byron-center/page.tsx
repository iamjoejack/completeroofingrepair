import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Roofing in Byron Center, MI",
  description:
    "Your local Byron Center roofer. Roof repair, replacement, and installation with a 20-year workmanship warranty, financing, and 24/7 emergency service. Based right here since 2008. Call (616) 207-3831.",
  alternates: { canonical: "/locations/byron-center" },
};

export default function Page() {
  return (
    <LocationPage
      slug="byron-center"
      name="Byron Center"
      title="Your hometown roofer in Byron Center, MI"
      lead={
        <>
          Byron Center isn’t just in our service area — it’s home. Our shop is on Clyde Park Avenue, and we’ve been
          taking care of our neighbors’ roofs here since 2008.
        </>
      }
      body={
        <>
          <p>
            Being local matters. When you call Complete Roofing &amp; Repair, you’re calling a company that’s minutes
            away, not an out-of-town outfit that disappears after the job. We know Byron Center’s mix of established
            homes and newer construction, the way the wind comes across the open areas south of Grand Rapids, and the
            winters that test every roof in the area.
          </p>
          <p>
            We do everything from quick repairs and leak detection to complete tear-offs and new installations in
            asphalt shingle, cedar shake, metal, and TPO — plus gutters, siding, windows, and storm-damage work. One
            local crew for the whole exterior of your home.
          </p>
          <h2>Right around the corner when you need us</h2>
          <p>
            A leak doesn’t wait for business hours, and neither do we. Our 24/7 emergency service means a fast response
            when water is getting in — and because we’re based right here, “fast” actually means fast.
          </p>
          <h2>The local standard</h2>
          <p>
            Free quotes within 24 hours, a 20-year workmanship warranty, financing options, and direct work with your
            insurance. We’ve built our reputation one Byron Center roof at a time, and we intend to keep it.
          </p>
        </>
      }
    />
  );
}
