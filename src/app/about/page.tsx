import type { Metadata } from "next";
import Image from "next/image";
import { InnerHero } from "@/components/page-parts";
import { CtaBand } from "@/components/sections";
import { Icon } from "@/components/icons";
import { SITE, TEAM } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Complete Roofing & Repair has protected West Michigan homes since 2008. Licensed, insured, and backed by a 20-year workmanship warranty. Learn our story. Call (616) 207-3831.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  ["Honest from the first call", "Clear, written quotes and straight answers. No scare tactics, no pressure, no surprise charges."],
  ["Craftsmanship that lasts", "We build roofs as systems and stand behind our work with a 20-year workmanship warranty."],
  ["Respect for your home", "Clean, protected job sites and a final walkthrough on every project. We treat your home like our own."],
  ["Here when it matters", "24/7 emergency response and direct work with your insurance when storms hit."],
];

export default function Page() {
  return (
    <>
      <InnerHero eyebrow="About Us" title="Protecting West Michigan homes since 2008">
        Complete Roofing &amp; Repair is a local, family-minded roofing contractor based in Byron Center. For more than
        15 years we’ve earned our reputation one roof at a time.
      </InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div className="prose-roof">
            <h2>Our story</h2>
            <p>
              We started Complete Roofing &amp; Repair in {SITE.established} with a simple idea: do excellent work,
              charge a fair price, and treat people the way we’d want to be treated. Two decades of West Michigan winters
              later, that hasn’t changed.
            </p>
            <p>
              Over the years we’ve grown from repairs and small jobs into a full-service roofing and exterior company,
              handling everything from emergency leak repair to complete tear-offs and replacements, plus gutters,
              siding, windows, and doors. What hasn’t grown is the corner-cutting, because there isn’t any.
            </p>
            <p>
              We’re licensed and insured, accredited by the Better Business Bureau, and proud to work directly with
              insurance providers so storm-damage claims are as painless as possible for you.
            </p>
            <h3>Our promise</h3>
            <p>
              Every roof we install is backed by a <strong>20-year workmanship warranty</strong>, on top of the
              manufacturer warranties on materials. If something isn’t right, we make it right.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/truck-house.jpg"
              alt="A Complete Roofing & Repair truck at a customer's home in West Michigan"
              width={590}
              height={472}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-5 left-5 rounded-xl bg-brand px-5 py-4 text-white shadow-xl">
              <div className="text-3xl font-black leading-none">20+</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Years of experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">The way we work</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map(([title, desc]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Icon name="check" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team — real names/roles from the company. Members without a
          photo on file show an initials avatar (no stock photos). */}
      <section className="py-16 sm:py-20">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Meet the team</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">The people behind your roof</h2>
            <p className="mt-3 text-lg text-gray-600">
              A family- and locally-owned crew serving Grand Rapids, Traverse City, and Charlevoix.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at Complete Roofing & Repair`}
                    width={270}
                    height={270}
                    className="h-16 w-16 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-charcoal text-lg font-black text-brand"
                  >
                    {m.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                )}
                <div>
                  <div className="font-bold text-charcoal">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.role}</div>
                  {m.location && <div className="text-xs font-semibold uppercase tracking-wide text-brand">{m.location}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's protect your home together" />
    </>
  );
}
