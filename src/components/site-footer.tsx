import Link from "next/link";
import { Icon } from "./icons";
import { PHONE_DISPLAY, PHONE_TEL, SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-gray-300">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Business / NAP */}
        <div>
          <div className="flex items-center gap-2.5 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-brand">
              <Icon name="roof" className="h-6 w-6" />
            </span>
            <span className="text-lg font-extrabold">Complete Roofing &amp; Repair</span>
          </div>
          <p className="mt-4 text-sm">
            Trusted West Michigan roofing contractor since {SITE.established}. Licensed &amp; insured.
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            <br />
            <a href={`tel:${PHONE_TEL}`} className="font-semibold text-white hover:text-brand">
              {PHONE_DISPLAY}
            </a>
          </address>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services" className="link-quiet">Services</Link></li>
            <li><Link href="/service-area" className="link-quiet">Service Area</Link></li>
            <li><Link href="/reviews" className="link-quiet">Reviews</Link></li>
            <li><Link href="/blog" className="link-quiet">Blog</Link></li>
            <li><Link href="/about" className="link-quiet">About</Link></li>
            <li><Link href="/faqs" className="link-quiet">FAQs</Link></li>
            <li><Link href="/contact" className="link-quiet">Request a Quote</Link></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex justify-between gap-4"><span>Mon – Fri</span><span className="text-white">8:00am – 5:00pm</span></li>
            <li className="flex justify-between gap-4"><span>Sat – Sun</span><span className="text-white">Closed</span></li>
            <li className="mt-3 rounded-lg bg-brand/15 px-3 py-2 font-semibold text-brand">24/7 emergency service available</li>
          </ul>
        </div>

        {/* Trust badges / social */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Find us</h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {/* BBB seal — links to the real BBB profile (update SITE.bbbProfileUrl). */}
            <a
              href={SITE.bbbProfileUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/15"
            >
              <span className="grid h-7 w-7 place-items-center rounded bg-[#0a5a8e] text-xs font-black text-white">BBB</span>
              Accredited
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/15"
            >
              <Icon name="instagram" className="h-5 w-5" />
              {SITE.instagramHandle}
            </a>
          </div>
          <Link href="/contact" className="btn-primary mt-5 w-full">Get a free quote</Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-5 text-xs text-gray-400 sm:flex-row">
          <p>&copy; {year} {SITE.legalName}. All rights reserved.</p>
          <p>Byron Center, MI · Serving Greater Grand Rapids</p>
        </div>
      </div>
    </footer>
  );
}
