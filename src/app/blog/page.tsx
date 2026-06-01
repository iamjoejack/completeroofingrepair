import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { InnerHero } from "@/components/page-parts";
import { CtaBand } from "@/components/sections";
import { POSTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Blog",
  description:
    "Practical roofing advice for West Michigan homeowners: repair timing, insurance coverage, leak dangers, and more from Complete Roofing & Repair. Call (616) 207-3831.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return (
    <>
      <InnerHero eyebrow="Blog" title="Roofing tips & homeowner advice" showCta={false}>
        Straightforward guidance to help you protect your home and make smart decisions about your roof.
      </InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.slug} className="card group overflow-hidden p-0">
              <Link href={`/blog/${p.slug}`} className="block">
                <Image src={p.image} alt={p.title} width={800} height={450} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand">{p.category}</span>
                  <h2 className="mt-2 text-lg font-bold group-hover:text-brand">{p.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read more <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
