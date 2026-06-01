import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Construction",
  description:
    "Exterior construction in Greater Grand Rapids: exterior doors, siding, windows, and vapor barrier. Protect and upgrade your home's exterior envelope. Call (616) 207-3831.",
  alternates: { canonical: "/services/construction" },
};

export default function Page() {
  return (
    <ServicePage
      slug="construction"
      eyebrow="Construction"
      title="Exterior upgrades that protect the whole envelope"
      lead={
        <>
          Your roof doesn’t work alone. Doors, windows, siding, and vapor barrier all work together to keep weather out
          and comfort in. We handle these exterior projects with the same care and craftsmanship we bring to every roof.
        </>
      }
      intro={
        <>
          <p>
            The “envelope” of your home, everything that separates inside from outside, is what keeps you dry, warm,
            and energy-efficient. When one part is failing, the others have to work harder. Drafty windows, worn siding,
            and missing vapor barrier all let moisture and air through, driving up energy bills and inviting rot.
          </p>
          <p>
            As a roofing-first contractor, we’re especially good at the places where these systems meet the roof, the
            transitions that are easy to get wrong and expensive to fix later. One trusted local crew, one point of
            contact, work that ties together cleanly.
          </p>
        </>
      }
      items={[
        { name: "Exterior Doors", desc: "Properly installed, weather-sealed exterior doors that improve security, looks, and efficiency." },
        { name: "Siding", desc: "Siding repair and replacement that protects your walls and refreshes your home’s curb appeal." },
        { name: "Windows", desc: "Window installation and replacement for better comfort, lower energy bills, and a watertight seal." },
        { name: "Vapor Barrier", desc: "Vapor barrier to control moisture, protect insulation, and keep your home’s structure dry." },
      ]}
      closing={
        <>
          <p>
            Planning a bigger exterior project? Let’s scope it together. <a href="/contact">Request a free quote</a> and
            we’ll give you an honest plan and a clear number.
          </p>
        </>
      }
    />
  );
}
