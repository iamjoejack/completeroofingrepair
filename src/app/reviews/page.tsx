import type { Metadata } from "next";
import { InnerHero } from "@/components/page-parts";
import { CtaBand, Stars } from "@/components/sections";
import { Icon } from "@/components/icons";
import { PLACEHOLDER_REVIEWS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what West Michigan homeowners say about Complete Roofing & Repair — and leave your own review. Trusted, BBB-accredited roofing since 2008. Call (616) 207-3831.",
  alternates: { canonical: "/reviews" },
};

export default function Page() {
  return (
    <>
      <InnerHero eyebrow="Reviews" title="What West Michigan homeowners say">
        Our reputation is built one roof — and one happy homeowner — at a time. Real, verified reviews appear here as
        they come in.
      </InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap">
          {/* PLACEHOLDER reviews — replace each with a real, verified review
              (real name + city) before launch. Do not present as real customers. */}
          <div className="grid gap-6 md:grid-cols-3">
            {PLACEHOLDER_REVIEWS.map((r) => (
              <figure key={r.quote} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <Stars />
                <blockquote className="mt-4 text-gray-700">“{r.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-gray-500">— {r.attribution}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            {/* TODO: replace the three example reviews above with genuine customer reviews. */}
            Example reviews shown until real ones are added.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="wrap mx-auto max-w-2xl text-center">
          <p className="eyebrow">Worked with us?</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Leave us a review</h2>
          <p className="mt-3 text-lg text-gray-600">
            A few words about your experience helps other homeowners find a roofer they can trust — and means a lot to
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
