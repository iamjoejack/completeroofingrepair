import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { InnerHero } from "@/components/page-parts";
import { CtaBand } from "@/components/sections";
import { CITIES, LOCATION_PAGES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Complete Roofing & Repair serves Greater Grand Rapids, including Byron Center, Grandville, Kentwood, Caledonia, Hudsonville, and Jenison, plus Traverse City and Charlevoix. Call (616) 207-3831.",
  alternates: { canonical: "/service-area" },
};

export default function Page() {
  return (
    <>
      <InnerHero eyebrow="Service Area" title="Roofing across Greater Grand Rapids and beyond">
        Based in Byron Center, we cover communities throughout West Michigan, and travel to Traverse City and Charlevoix
        for larger projects. If you don’t see your town listed, just ask. We likely cover it.
      </InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Communities we serve</h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700 sm:grid-cols-2">
              {CITIES.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {c}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-600">
              We also serve <strong className="text-charcoal">Traverse City</strong> and{" "}
              <strong className="text-charcoal">Charlevoix</strong> for larger roofing projects.
            </p>

            <h3 className="mt-10 text-lg font-bold uppercase tracking-wider text-gray-500">Area roofing pages</h3>
            <ul className="mt-3 space-y-2">
              {LOCATION_PAGES.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="inline-flex items-center gap-1.5 font-semibold text-charcoal hover:text-brand">
                    <Icon name="pin" className="h-4 w-4 text-brand" />
                    Roofing in {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="Map showing Complete Roofing & Repair in Byron Center, MI"
                src={SITE.mapEmbedSrc}
                width="100%"
                height={420}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-sm text-gray-600">
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip} ·{" "}
              <a href={SITE.mapsLink} target="_blank" rel="noopener" className="font-semibold text-brand">
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="In our service area? Let's talk." />
    </>
  );
}
