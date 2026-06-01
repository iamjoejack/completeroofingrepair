"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "./icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Announcement bar — 24/7 emergency, always visible */}
      <div className="bg-brand text-white">
        <div className="wrap flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center text-sm font-semibold sm:justify-between">
          <span className="inline-flex items-center gap-2">
            <Icon name="clock" className="h-4 w-4" />
            24/7 Emergency Roof Service Available
          </span>
          <span className="hidden sm:inline">
            Free Quotes Within 24 Hours · Financing Available · Serving Greater Grand Rapids
          </span>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur">
        <div className="wrap flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center" aria-label="Complete Roofing & Repair home">
            <Image
              src="/images/logo.jpg"
              alt="Complete Roofing & Repair logo"
              width={945}
              height={226}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE_TEL}`} className="btn-dark hidden px-4 py-2.5 text-sm sm:inline-flex">
              <Icon name="phone" className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-primary px-4 py-2.5 text-sm">Free Quote</Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="grid h-11 w-11 place-items-center rounded-lg border border-gray-200 lg:hidden"
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t border-gray-100 bg-white lg:hidden">
            <nav className="wrap flex flex-col py-2 text-base font-semibold" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-gray-100 py-3"
                >
                  {item.label}
                </Link>
              ))}
              <a href={`tel:${PHONE_TEL}`} className="py-3 text-brand">Call {PHONE_DISPLAY}</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
