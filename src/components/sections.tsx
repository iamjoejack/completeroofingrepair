import Link from "next/link";
import { Icon } from "./icons";
import { PHONE_DISPLAY, PHONE_TEL, SELLING_POINTS } from "@/lib/site";

/* Orange final call-to-action band — reused at the bottom of most pages. */
export function CtaBand({
  title = "Ready for a roof you can trust?",
  subtitle = "Free quote within 24 hours. Storm or leak emergency? We’re here 24/7.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand py-14 text-white">
      <div className="wrap flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-2 text-lg text-white/90">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${PHONE_TEL}`} className="btn-white text-lg">
            <Icon name="phone" className="h-5 w-5" />
            Call {PHONE_DISPLAY}
          </a>
          <Link href="/contact" className="btn border-2 border-white text-lg text-white hover:bg-white/10">
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

/* The 7 selling points as an icon row. */
export function TrustBar() {
  return (
    <section className="border-b border-gray-100 bg-white" aria-label="Why homeowners choose us">
      <div className="wrap grid grid-cols-2 gap-x-4 gap-y-6 py-10 sm:grid-cols-4 lg:grid-cols-7">
        {SELLING_POINTS.map((p) => (
          <div key={p.title} className="flex flex-col items-center gap-2 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
              <Icon name={p.icon} className="h-6 w-6" />
            </span>
            <span className="text-sm font-bold leading-tight">{p.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-brand ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-5 w-5" />
      ))}
    </div>
  );
}

/* Dashed placeholder where a real photo should be dropped in. */
export function PhotoPlaceholder({
  label = "Add a real photo here",
  sub,
  className = "",
}: {
  label?: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={`grid place-items-center rounded-2xl bg-charcoal text-center text-gray-400 ${className}`}>
      <div className="px-6">
        <Icon name="image" className="mx-auto h-12 w-12 text-brand" />
        <p className="mt-3 text-sm font-semibold">{label}</p>
        {sub && <p className="mt-1 text-xs">{sub}</p>}
      </div>
    </div>
  );
}
