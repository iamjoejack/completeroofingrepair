import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { InnerHero } from "@/components/page-parts";
import { CtaBand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Request a Free Quote" },
];

export default function NotFound() {
  return (
    <>
      <InnerHero eyebrow="404" title="We couldn’t find that page" showCta={false}>
        The page you’re after may have moved or no longer exists. Here’s where most homeowners go next.
      </InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap mx-auto max-w-3xl">
          <div className="grid gap-3 sm:grid-cols-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-charcoal transition hover:border-brand hover:text-brand"
              >
                {l.label}
                <Icon name="arrow" className="h-5 w-5 text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
