import Link from "next/link";
import { Icon } from "./icons";
import { InnerHero } from "./page-parts";
import { CtaBand } from "./sections";
import { SERVICES, BASE_URL, SITE } from "@/lib/site";

/* Shared layout for a city landing page. Copy is unique per page (passed in)
   so there's no duplicated boilerplate across locations. Emits Service schema
   scoped to the city. */
export function LocationPage({
  slug,
  name,
  title,
  lead,
  body,
}: {
  slug: string;
  name: string;
  title: string;
  lead: React.ReactNode;
  body: React.ReactNode;
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Roofing in ${name}, MI`,
    serviceType: "Roofing contractor",
    provider: { "@type": "RoofingContractor", name: SITE.legalName, telephone: "+1-616-207-3831" },
    areaServed: { "@type": "City", name: `${name}, MI` },
    url: `${BASE_URL}/locations/${slug}`,
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Service Area", item: `${BASE_URL}/service-area` },
      { "@type": "ListItem", position: 3, name: `Roofing in ${name}`, item: `${BASE_URL}/locations/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <InnerHero eyebrow={`Roofing in ${name}`} title={title}>{lead}</InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-3">
          <div className="prose-roof lg:col-span-2">{body}</div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl bg-charcoal p-6 text-white">
                <h2 className="text-xl font-bold">Free quote in {name}</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Repair, replacement, or new roof — get a clear, written estimate within 24 hours.
                </p>
                <Link href="/contact" className="btn-primary mt-4 w-full">Request a quote</Link>
                <p className="mt-3 text-center text-xs text-gray-400">Emergency? We answer 24/7.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">Our services</h2>
                <ul className="mt-3 space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 font-semibold text-charcoal hover:text-brand">
                        <Icon name="arrow" className="h-4 w-4 text-brand" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand title={`Need a roofer in ${name}?`} />
    </>
  );
}
