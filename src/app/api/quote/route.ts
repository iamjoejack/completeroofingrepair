import { NextResponse } from "next/server";

/* ============================================================================
   LEAD PIPELINE. The single place every website lead flows through.
   It normalizes the quote form to thebestcrm's form fields and forwards it to
   the CRM (which creates a Contact, runs the form-triage agent, and fires the
   tag + follow-up task workflow). At the same time it can fire an instant
   owner alert to any webhook you choose.

   Configure in .env.local:
       NEXT_PUBLIC_CRM_BASE_URL  your thebestcrm deployment URL (e.g. https://thebestcrm.vercel.app)
       CRM_LEAD_FORM_ID          ripkl6t3cfo461l45o6a4e43   (the "Roofing Website Quote" form)
       LEAD_NOTIFY_WEBHOOK_URL    (optional) instant alert. Paste a Slack or Discord
                                  incoming webhook, or a Zapier / Make catch hook to
                                  forward leads to email or text. Leave blank to skip.

   If the CRM env is unset, the lead is logged server-side and the visitor still
   sees success (so the site is demo-able before the CRM env is wired).
   ============================================================================ */

type Lead = {
  firstName: string;
  lastName?: string;
  phone?: string;
  email?: string;
  zip?: string;
  service?: string;
  message?: string;
  address?: string;
  website_url: string;
  _t: unknown;
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Split the single "name" field into first/last for the CRM Contact.
  const fullName = String(body.name ?? "").trim();
  const [firstName, ...rest] = fullName.split(/\s+/);
  const lastName = rest.join(" ");

  // Map our form to the CRM form's field keys (see prisma/seed-roofing.ts).
  const payload: Lead = {
    firstName: firstName || "Website",
    lastName: lastName || undefined,
    phone: String(body.phone ?? "").trim() || undefined,
    email: String(body.email ?? "").trim() || undefined,
    zip: String(body.zip ?? "").trim() || undefined,
    service: String(body.service ?? "").trim() || undefined,
    message: String(body.message ?? "").trim() || undefined,
    address: String(body.address ?? "").trim() || undefined,
    website_url: String(body.website_url ?? ""), // honeypot, must stay empty
    _t: body._t, // form-open timestamp for the CRM's bot check
  };

  // Run the CRM forward and the instant alert at the same time. The alert never
  // blocks or fails the lead; only the CRM result decides the response.
  const [crm] = await Promise.allSettled([forwardToCrm(payload), notifyOwner(payload)]);

  if (crm.status === "rejected") {
    console.error("[quote lead] CRM unreachable", crm.reason);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  if (!crm.value.ok) {
    return NextResponse.json({ ok: false, errors: crm.value.errors }, { status: crm.value.status ?? 502 });
  }
  return NextResponse.json({ ok: true });
}

async function forwardToCrm(
  payload: Lead,
): Promise<{ ok: boolean; status?: number; errors?: unknown }> {
  const base = process.env.NEXT_PUBLIC_CRM_BASE_URL?.replace(/\/$/, "");
  const formId = process.env.CRM_LEAD_FORM_ID;

  if (!base || !formId) {
    console.info("[quote lead] CRM env not set; logged only", payload);
    return { ok: true };
  }

  const res = await fetch(`${base}/api/lead/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data?.ok === false) {
    console.error("[quote lead] CRM rejected", res.status, data);
    return { ok: false, status: 502, errors: data?.errors };
  }
  return { ok: true };
}

/* Optional instant owner alert. The payload shape works as-is for Slack
   (`text`), Discord (`content`), and any Zapier/Make catch hook (`lead`). */
async function notifyOwner(payload: Lead): Promise<void> {
  const url = process.env.LEAD_NOTIFY_WEBHOOK_URL;
  if (!url) return;

  const name = [payload.firstName, payload.lastName].filter(Boolean).join(" ");
  const lines = [
    "New roofing quote request",
    `Name: ${name}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    payload.email ? `Email: ${payload.email}` : null,
    payload.zip ? `ZIP: ${payload.zip}` : null,
    payload.service ? `Service: ${payload.service}` : null,
    payload.address ? `Address: ${payload.address}` : null,
    payload.message ? `Details: ${payload.message}` : null,
  ].filter(Boolean);
  const summary = lines.join("\n");

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: summary, // Slack
        content: summary, // Discord
        lead: { ...payload, website_url: undefined, _t: undefined }, // Zapier / Make
      }),
    });
  } catch (err) {
    console.error("[quote lead] owner alert failed", err);
  }
}
