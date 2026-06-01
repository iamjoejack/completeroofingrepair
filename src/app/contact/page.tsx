import type { Metadata } from "next";
import { InnerHero } from "@/components/page-parts";
import { QuoteForm } from "@/components/quote-form";
import { Icon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_TEL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Request a free roofing quote within 24 hours, or call/text (616) 207-3831. Complete Roofing & Repair serves Greater Grand Rapids with 24/7 emergency service.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <InnerHero eyebrow="Contact Us" title="Request your free quote" showCta={false}>
        Fill out the form and we’ll get back to you within 24 hours. Need help right now? Call or text us — we answer
        24/7 for roofing emergencies.
      </InnerHero>

      {/* AI AGENT: missed-call text-back — handled in thebestcrm via the Twilio
          inbound-call workflow for this workspace. The web form below feeds the
          same CRM, so every lead source lands in one inbox. */}

      <section className="py-16 sm:py-20">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2">
          <QuoteForm
            full
            heading="Tell us about your project"
            subheading="The more you share, the faster we can help. Required: name and phone."
          />

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold">Talk to us now</h2>
              <div className="mt-4 space-y-3">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 font-semibold text-charcoal hover:text-brand">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand"><Icon name="phone" className="h-5 w-5" /></span>
                  Call {PHONE_DISPLAY}
                </a>
                <a href={`sms:${PHONE_TEL}`} className="flex items-center gap-3 font-semibold text-charcoal hover:text-brand">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand"><Icon name="sms" className="h-5 w-5" /></span>
                  Text {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold">Visit or write to us</h2>
              <address className="mt-3 not-italic leading-relaxed text-gray-700">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </address>
              <dl className="mt-4 space-y-1 text-sm text-gray-700">
                <div className="flex justify-between gap-4"><dt>Mon – Fri</dt><dd className="font-semibold">8:00am – 5:00pm</dd></div>
                <div className="flex justify-between gap-4"><dt>Sat – Sun</dt><dd className="font-semibold">Closed</dd></div>
                <div className="mt-2 rounded-lg bg-brand/10 px-3 py-2 font-semibold text-brand">24/7 emergency service available</div>
              </dl>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="Map showing Complete Roofing & Repair in Byron Center, MI"
                src={SITE.mapEmbedSrc}
                width="100%"
                height={260}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
