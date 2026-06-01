import type { Metadata } from "next";
import { InnerHero } from "@/components/page-parts";
import { CtaBand, Stars } from "@/components/sections";
import { Icon } from "@/components/icons";
import { REVIEWS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what West Michigan homeowners say about Complete Roofing & Repair, and leave your own review. Trusted, BBB-accredited roofing since 2008. Call (616) 207-3831.",
  alternates: { canonical: "/reviews" },
};

export default function Page() {
  return (
    <>
      <InnerHero eyebrow="Reviews" title="What West Michigan homeowners say">
        Our reputation is built one roof and one happy homeowner at a time. Real, verified reviews appear here as
        they come in.
      </InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap">
          {/* A+ / BBB trust banner */}
          <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center justify-center gap-4 rounded-2xl bg-gray-50 px-6 py-6 text-center sm:flex-row sm:gap-8 sm:text-left">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon name="shield" className="h-7 w-7" />
              </span>
              <div>
                <div className="text-xl font-black text-charcoal">BBB {SITE.bbbRating} Rated</div>
                <div className="text-sm text-gray-600">Accredited business since {SITE.bbbAccreditedSince}</div>
              </div>
            </div>
            <a href={SITE.bbbProfileUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-brand sm:ml-auto">
              See our BBB profile <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          {/* Real customer reviews (from BBB / Google). */}
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {REVIEWS.map((r) => (
              <figure key={r.quote} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <Stars />
                <blockquote className="mt-4 text-gray-700">“{r.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-gray-500">
                  {r.name} <span className="font-normal text-gray-400">· {r.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="wrap mx-auto max-w-2xl text-center">
          <p className="eyebrow">Worked with us?</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Leave us a review</h2>
          <p className="mt-3 text-lg text-gray-600">
            A few words about your experience helps other homeowners find a roofer they can trust, and it means a lot to
            our crew.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* TODO: replace with your real Google review link. */}
            <a href={SITE.bbbProfileUrl} target="_blank" rel="noopener" className="btn-primary">
              Leave a review
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener" className="btn-dark">
              <Icon name="instagram" className="h-5 w-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
