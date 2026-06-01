import Link from "next/link";
import { Icon } from "./icons";
import { InnerHero } from "./page-parts";
import { CtaBand } from "./sections";
import { SERVICES, BASE_URL, SITE } from "@/lib/site";

/* Shared layout for a service-category page. Copy is passed in per page so no
   two pages share boilerplate. Also emits Service schema. */
export function ServicePage({
  slug,
  eyebrow,
  title,
  lead,
  intro,
  items,
  closing,
}: {
  slug: string;
  eyebrow: string;
  title: string;
  lead: React.ReactNode;
  intro: React.ReactNode;
  items: { name: string; desc: string }[];
  closing?: React.ReactNode;
}) {
  const others = SERVICES.filter((s) => s.slug !== slug);
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType: title,
    provider: { "@type": "RoofingContractor", name: SITE.legalName, telephone: "+1-616-207-3831" },
    areaServed: "Greater Grand Rapids, MI",
    url: `${BASE_URL}/services/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <InnerHero eyebrow={eyebrow} title={title}>{lead}</InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose-roof">{intro}</div>

            <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-charcoal sm:text-3xl">What we handle</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <div key={it.name} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex items-center gap-2 font-bold text-charcoal">
                    <Icon name="check" className="h-5 w-5 text-brand" />
                    {it.name}
                  </div>
                  <p className="mt-1.5 text-sm text-gray-600">{it.desc}</p>
                </div>
              ))}
            </div>

            {closing && <div className="prose-roof mt-12">{closing}</div>}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl bg-charcoal p-6 text-white">
                <h2 className="text-xl font-bold">Free quote in 24 hours</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Tell us what’s going on and we’ll get you a clear, written estimate — no pressure.
                </p>
                <Link href="/contact" className="btn-primary mt-4 w-full">Request a quote</Link>
                <p className="mt-3 text-center text-xs text-gray-400">Emergency? We answer 24/7.</p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">Other services</h2>
                <ul className="mt-3 space-y-2">
                  {others.map((s) => (
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

      <CtaBand />
    </>
  );
}
