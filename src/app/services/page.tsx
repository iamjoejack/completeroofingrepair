import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { InnerHero } from "@/components/page-parts";
import { CtaBand } from "@/components/sections";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "Complete roofing and exterior services across Greater Grand Rapids: installation, repairs, specialty repairs, inspections, gutters, siding, windows, and more. Call (616) 207-3831.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <InnerHero eyebrow="Our Services" title="Everything your roof and exterior need — one trusted local crew">
        From a single missing shingle to a full tear-off and replacement, plus gutters, siding, and storm-damage
        repair. Explore each category below, or just call and tell us what’s going on.
      </InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group block">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-charcoal text-brand">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-xl font-bold group-hover:text-brand">{s.title}</h2>
              <p className="mt-2 text-gray-600">{s.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-brand">
                Learn more <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" subtitle="Describe what you're seeing and we'll point you the right way — free quote within 24 hours." />
    </>
  );
}
