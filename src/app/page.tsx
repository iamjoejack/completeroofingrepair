import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { CtaBand, TrustBar, Stars } from "@/components/sections";
import { PHONE_DISPLAY, PHONE_TEL, SITE, SERVICES, CITIES, POSTS, REVIEWS } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#0c241a] to-charcoal" aria-hidden="true" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "22px 22px" }}
        />

        <div className="wrap relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left — message + CTAs */}
          <div>
            <p className="anim-fade-up eyebrow inline-flex items-center gap-2 rounded-full bg-brand/25 px-3 py-1 text-white ring-1 ring-brand/40">
              <span className="h-2 w-2 rounded-full bg-white" /> Trusted Grand Rapids Roofers Since 2008
            </p>
            <h1 className="anim-fade-up mt-5 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "80ms" }}>
              A roof you can <span className="text-brand">trust</span>, done right the first time.
            </h1>
            <p className="anim-fade-up mt-5 max-w-xl text-lg text-gray-300" style={{ animationDelay: "160ms" }}>
              Repairs, replacements, and new roofs across Greater Grand Rapids. Backed by a{" "}
              <strong className="text-white">20-year workmanship warranty</strong>, financing options, and a free quote
              within 24 hours. Storm or leak emergency? We answer 24/7.
            </p>

            <div className="anim-fade-up mt-7 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <a href="#quote" className="btn-primary text-lg">
                Get my free quote
                <Icon name="arrow" className="h-5 w-5" />
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-ghost text-lg">
                <Icon name="phone" className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <ul className="anim-fade-up mt-8 flex flex-wrap gap-2.5 text-sm font-semibold" style={{ animationDelay: "320ms" }}>
              {[`${SITE.rating}★ from ${SITE.reviewCount} reviews`, "BBB A+ Accredited", "Licensed & Insured"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-gray-200 ring-1 ring-white/10">
                  <Icon name="check" className="h-4 w-4 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — animated image composition */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="anim-pop relative" style={{ animationDelay: "150ms" }}>
              <Image
                src="/images/truck-house.jpg"
                alt="A Complete Roofing & Repair work truck at a customer's home in West Michigan"
                width={590}
                height={472}
                priority
                className="w-full rounded-3xl shadow-2xl ring-1 ring-white/10"
              />
              {/* Since-2008 badge */}
              <div className="absolute -bottom-5 left-4 rounded-2xl bg-brand px-5 py-3 text-white shadow-xl">
                <div className="text-2xl font-black leading-none">20+ yrs</div>
                <div className="text-[11px] font-semibold uppercase tracking-wide">Since {SITE.established}</div>
              </div>
            </div>

            {/* Floating BBB card */}
            <div className="anim-pop absolute left-3 top-3 flex items-center gap-2 rounded-2xl bg-white p-2.5 pr-4 text-charcoal shadow-xl lg:-left-7 lg:-top-6" style={{ animationDelay: "520ms" }}>
              <Image src="/images/bbb-seal.png" alt="BBB A+ Accredited Business" width={158} height={110} className="h-10 w-auto" />
              <div className="leading-tight">
                <div className="text-sm font-black">A+ Rated</div>
                <div className="text-[11px] text-gray-500">BBB Accredited</div>
              </div>
            </div>

            {/* Floating warranty badge (desktop) */}
            <div className="anim-pop absolute -right-5 top-1/3 hidden items-center gap-2 rounded-2xl bg-charcoal-800 px-4 py-3 text-white shadow-xl ring-1 ring-white/10 lg:flex" style={{ animationDelay: "640ms" }}>
              <Icon name="shield" className="h-6 w-6 text-brand" />
              <div className="text-sm font-bold leading-tight">20-Year<br />Warranty</div>
            </div>

            {/* Floating review card */}
            <div className="anim-pop absolute bottom-3 right-3 max-w-[15rem] rounded-2xl bg-white p-4 text-charcoal shadow-xl lg:-bottom-7 lg:-right-7" style={{ animationDelay: "760ms" }}>
              <Stars className="[&>svg]:h-4 [&>svg]:w-4" />
              <p className="mt-2 text-sm leading-snug text-gray-700">“They did great work on my house and barn. Cleaned up like they were not even there!”</p>
              <p className="mt-1.5 text-xs font-bold text-gray-500">Greg V.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUOTE FORM SECTION ================= */}
      <section id="quote" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Free quote in 24 hours</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Tell us about your roof</h2>
            <p className="mt-4 text-lg text-gray-600">
              A few quick details is all we need to get you a clear, written estimate. No pressure and no obligation.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                ["Free & no-obligation", "Honest, written pricing within 24 hours."],
                ["We handle insurance", "Storm damage? We work directly with your provider."],
                ["24/7 emergency response", "Active leak? Call us any time, day or night."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <span><strong className="font-bold text-charcoal">{t}.</strong> <span className="text-gray-600">{d}</span></span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600">
              Prefer to talk? Call or text{" "}
              <a href={`tel:${PHONE_TEL}`} className="font-bold text-brand">{PHONE_DISPLAY}</a>.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <QuoteForm heading="Request your free quote" />
          </Reveal>
        </div>
      </section>

      <TrustBar />

      {/* ================= SERVICES GRID ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Complete roofing &amp; exterior services</h2>
            <p className="mt-3 text-lg text-gray-600">
              One local crew handles all of it, from a single missing shingle to a full tear-off and replacement, plus
              gutters, siding, and storm-damage repair.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link href={`/services/${s.slug}`} className="card group block h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-charcoal text-brand transition group-hover:bg-brand group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold group-hover:text-brand">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-semibold text-brand">
                    Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-dark">See all services</Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
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
                ["Free quotes within 24 hours", "Clear, written pricing with no pressure and no surprises."],
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
              <a href="#quote" className="btn-primary">Get my free quote</a>
              <Link href="/about" className="btn-dark">Our story</Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <Image
              src="/images/truck-house.jpg"
              alt="A Complete Roofing & Repair work truck parked at a customer's home in West Michigan"
              width={590}
              height={472}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="bg-charcoal py-16 text-white sm:py-20">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What homeowners say</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Reviews from across West Michigan</h2>
            <p className="mt-3 inline-flex items-center gap-2 text-gray-300">
              <span className="inline-flex text-brand"><Stars className="[&>svg]:h-5 [&>svg]:w-5" /></span>
              Rated {SITE.rating} from {SITE.reviewCount} customer reviews.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <Reveal key={r.quote} delay={i * 100}>
                <figure className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <Stars />
                  <blockquote className="mt-4 text-gray-200">“{r.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-gray-400">
                    {r.name} <span className="font-normal text-gray-500">· {r.date}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-brand/10 p-6 text-center ring-1 ring-brand/20">
                <p className="text-lg font-bold text-white">Worked with us?</p>
                <p className="mt-1 text-sm text-gray-300">We’d love to hear about it.</p>
                <Link href="/reviews" className="btn-primary mt-4">Leave a review</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREA ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Proudly local</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Serving Greater Grand Rapids &amp; beyond</h2>
            <p className="mt-4 text-lg text-gray-600">
              Based in Byron Center, we cover the West Michigan communities below, and we travel to Traverse City and
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
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              title="Map showing Complete Roofing & Repair in Byron Center, MI"
              src={SITE.mapEmbedSrc}
              width="100%"
              height={380}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= BLOG TEASER ================= */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">From our blog</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Roofing tips &amp; homeowner advice</h2>
            </div>
            <Link href="/blog" className="btn-dark">View all posts</Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <article className="card group h-full overflow-hidden p-0">
                  <Link href={`/blog/${p.slug}`} className="block">
                    <div className="overflow-hidden">
                      <Image src={p.image} alt={p.title} width={800} height={450} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold uppercase tracking-wide text-brand">{p.category}</span>
                      <h3 className="mt-2 text-lg font-bold group-hover:text-brand">{p.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
