import Link from "next/link";
import { Icon } from "./icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

/* Charcoal hero used at the top of every inner page (single H1). */
export function InnerHero({
  eyebrow,
  title,
  children,
  showCta = true,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  showCta?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-800 to-charcoal" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "22px 22px" }}
      />
      <div className="wrap relative py-14 sm:py-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-gray-300">{children}</div>}
        {showCta && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${PHONE_TEL}`} className="btn-primary">
              <Icon name="phone" className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-ghost">Get a free quote</Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* Accessible FAQ list built on native <details> — works without JavaScript. */
export function Faq({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-charcoal">
            {item.q}
            <Icon name="arrow" className="h-5 w-5 shrink-0 rotate-90 text-brand transition group-open:-rotate-90" />
          </summary>
          <div className="mt-3 text-gray-600">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
