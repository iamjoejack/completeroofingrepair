"use client";

import { useRef, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL, SERVICE_OPTIONS } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

/* The site's only lead-capture form. Every submission posts to /api/quote,
   which forwards it to thebestcrm. Set `full` for the long contact-page form. */
export function QuoteForm({
  full = false,
  heading = "Get your free quote",
  subheading = "Tell us a little and we’ll get back to you within 24 hours.",
}: {
  full?: boolean;
  heading?: string;
  subheading?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  // Form-open timestamp — used by the CRM's bot/min-duration check.
  const startedAt = useRef<number>(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _t: startedAt.current }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl bg-white p-6 text-charcoal shadow-2xl sm:p-8">
      <h2 className="text-2xl font-extrabold">{heading}</h2>
      <p className="mt-1 text-sm text-gray-600">{subheading}</p>

      <form onSubmit={onSubmit} className="mt-5 space-y-4" noValidate>
        {/* Honeypot — real people never fill this; bots do. Hidden from view. */}
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="qf-name" className="mb-1 block text-sm font-semibold">Name</label>
          <input id="qf-name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="qf-phone" className="mb-1 block text-sm font-semibold">Phone</label>
            <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(616) 555-0123" />
          </div>
          <div>
            <label htmlFor="qf-zip" className="mb-1 block text-sm font-semibold">ZIP code</label>
            <input id="qf-zip" name="zip" type="text" inputMode="numeric" autoComplete="postal-code" className={inputClass} placeholder="49315" />
          </div>
        </div>

        {full && (
          <>
            <div>
              <label htmlFor="qf-email" className="mb-1 block text-sm font-semibold">Email</label>
              <input id="qf-email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="qf-address" className="mb-1 block text-sm font-semibold">Street address</label>
              <input id="qf-address" name="address" type="text" autoComplete="street-address" className={inputClass} placeholder="123 Main St, Byron Center" />
            </div>
          </>
        )}

        <div>
          <label htmlFor="qf-service" className="mb-1 block text-sm font-semibold">What do you need?</label>
          <select id="qf-service" name="service" className={`${inputClass} bg-white`} defaultValue={SERVICE_OPTIONS[0]}>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {full && (
          <div>
            <label htmlFor="qf-message" className="mb-1 block text-sm font-semibold">Project details</label>
            <textarea id="qf-message" name="message" rows={4} className={inputClass} placeholder="Tell us what's going on with your roof" />
          </div>
        )}

        <button type="submit" disabled={status === "submitting"} className="btn-primary w-full text-lg disabled:opacity-70">
          {status === "submitting" ? "Sending…" : "Request My Free Quote"}
        </button>

        <p className="text-center text-xs text-gray-500">
          Prefer to talk now? Call or text{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-brand">{PHONE_DISPLAY}</a>.
        </p>

        {status === "success" && (
          <p role="status" className="rounded-lg bg-green-50 p-4 text-green-800">
            Thanks! We’ve got your request and will reach out within 24 hours. For emergencies, call {PHONE_DISPLAY} now.
          </p>
        )}
        {status === "error" && (
          <p role="status" className="rounded-lg bg-red-50 p-4 text-red-800">
            Something went wrong sending that. Please call or text us at {PHONE_DISPLAY}.
          </p>
        )}
      </form>
    </div>
  );
}
