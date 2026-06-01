import Link from "next/link";
import { Icon } from "./icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

/* Sticky Call / Quote bar shown only on phones. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-charcoal lg:hidden">
      <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-2 py-3.5 font-bold text-white">
        <Icon name="phone" className="h-5 w-5 text-brand" />
        Call Now
      </a>
      <Link href="/contact" className="flex items-center justify-center gap-2 bg-brand py-3.5 font-bold text-white">
        <Icon name="mail" className="h-5 w-5" />
        Get a Quote
      </Link>
      <span className="sr-only">Call {PHONE_DISPLAY}</span>
    </div>
  );
}
