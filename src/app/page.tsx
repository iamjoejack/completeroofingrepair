import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { CtaBand, TrustBar, Stars } from "@/components/sections";
import { PHONE_DISPLAY, PHONE_TEL, SITE, SERVICES, CITIES, POSTS, REVIEWS } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-800 to-charcoal" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "22px 22px" }}
        />
        <div className="wrap relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-brand" /> Trusted Grand Rapids Roofers Since 2008
            </p>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              A roof you can <span className="text-brand">trust</span> — done right the first time.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-300">
              Repairs, replacements, and new roofs across Greater Grand Rapids. Backed by a{" "}
              <strong className="text-white">20-year workmanship warranty</strong>, financing options, and a free quote
              within 24 hours. Storm or leak emergency? We answer 24/7.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_TEL}`} className="btn-primary text-lg">
                <Icon name="phone" className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
              <a href={`sms:${PHONE_TEL}`} className="btn-ghost text-lg">
                <Icon name="sms" className="h-5 w-5" />
                Text Us
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-gray-300">
              {["Licensed & insured", "Works directly with insurance", "Free 24-hour quotes"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <QuoteForm />
        </div>
      </section>

      <TrustBar />

      {/* SERVICES GRID */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Complete roofing &amp; exterior services</h2>
            <p className="mt-3 text-lg text-gray-600">
              From a single missing shingle to a full tear-off and replacement — plus gutters, siding, and storm-damage
              repair. One trusted local crew for it all.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card group block">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-charcoal text-brand">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold group-hover:text-brand">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-semibold text-brand">
                  Learn more <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-dark">See all services</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why Complete Roofing &amp; Repair</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">20+ years protecting West Michigan homes</h2>
            <p className="mt-4 text-lg text-gray-600">
              We’ve been roofing the Grand Rapids area since 2008. That experience shows up in the details: clean job
              sites, honest estimates, quality materials, and workmanship we stand behind in writing. When you call, you
              reach a local team that treats your home like our own.
            </p>

            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                ["20-year workmanship warranty", "Plus manufacturer warranties on materials."],
                ["Insurance claims made easy", "We work directly with your provider on storm damage."],
                ["Flexible financing", "Get the roof you need now and pay over time."],
                ["Free quotes within 24 hours", "Clear, written pricing — no pressure, no surprises."],
              ].map(([term, desc]) => (
                <div key={term} className="flex gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="font-bold">{term}</dt>
                    <dd className="text-gray-600">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">Get my free quote</Link>
              <Link href="/about" className="btn-dark">Our story</Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/truck-house.jpg"
              alt="A Complete Roofing & Repair work truck parked at a customer's home in West Michigan"
              width={590}
              height={472}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-5 left-5 rounded-xl bg-brand px-5 py-4 text-white shadow-xl">
              <div className="text-3xl font-black leading-none">{SITE.established}</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Roofing since</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-charcoal py-16 text-white sm:py-20">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What homeowners say</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Reviews from across West Michigan</h2>
            <p className="mt-3 text-gray-300">
              A+ rated and BBB-accredited. Here’s what our customers say about working with us.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.quote} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <Stars />
                <blockquote className="mt-4 text-gray-200">“{r.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-gray-400">
                  — {r.name} <span className="font-normal text-gray-500">· {r.source}</span>
                </figcaption>
              </figure>
            ))}
            {/* Invite new reviews */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-brand/10 p-6 text-center ring-1 ring-brand/20">
              <p className="text-lg font-bold text-white">Worked with us?</p>
              <p className="mt-1 text-sm text-gray-300">We’d love to hear about it.</p>
              <Link href="/reviews" className="btn-primary mt-4">Leave a review</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Proudly local</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Serving Greater Grand Rapids &amp; beyond</h2>
            <p className="mt-4 text-lg text-gray-600">
              Based in Byron Center, we cover the West Michigan communities below — and travel to Traverse City and
              Charlevoix for larger projects. Not sure if you’re in range? Just ask.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700 sm:grid-cols-3">
              {CITIES.slice(0, 12).map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {c}
                </li>
              ))}
            </ul>
            <Link href="/service-area" className="mt-6 inline-flex items-center gap-1 font-semibold text-brand">
              See full service area &amp; map <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              title="Map showing Complete Roofing & Repair in Byron Center, MI"
              src={SITE.mapEmbedSrc}
              width="100%"
              height={380}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">From our blog</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Roofing tips &amp; homeowner advice</h2>
            </div>
            <Link href="/blog" className="btn-dark">View all posts</Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {POSTS.map((p) => (
              <article key={p.slug} className="card group overflow-hidden p-0">
                <Link href={`/blog/${p.slug}`} className="block">
                  <Image src={p.image} alt={p.title} width={800} height={450} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand">{p.category}</span>
                    <h3 className="mt-2 text-lg font-bold group-hover:text-brand">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
