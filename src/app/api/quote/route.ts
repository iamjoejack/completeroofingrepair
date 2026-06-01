import { NextResponse } from "next/server";

/* ============================================================================
   LEAD PIPELINE  —  THE single place every website lead flows through.
   Receives the quote form, normalizes it to thebestcrm's form fields, and
   forwards it to the CRM, which creates a Contact, runs your form-triage
   agent, and fires your workflows (tag + follow-up task, SMS auto-reply).

   Configure in .env.local:
       NEXT_PUBLIC_CRM_BASE_URL = your thebestcrm deployment URL (e.g. https://thebestcrm.vercel.app)
       CRM_LEAD_FORM_ID         = ripkl6t3cfo461l45o6a4e43   (the "Roofing Website Quote" form)

   If unset, the lead is logged server-side and the visitor still sees success
   (so the site is demo-able before the CRM env is wired).
   ============================================================================ */
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

  // Map our form -> the CRM form's field keys (see prisma/seed-roofing.ts).
  const payload = {
    firstName: firstName || "Website",
    lastName: lastName || undefined,
    phone: String(body.phone ?? "").trim() || undefined,
    email: String(body.email ?? "").trim() || undefined,
    zip: String(body.zip ?? "").trim() || undefined,
    service: String(body.service ?? "").trim() || undefined,
    message: String(body.message ?? "").trim() || undefined,
    address: String(body.address ?? "").trim() || undefined, // captured in submission data
    website_url: String(body.website_url ?? ""), // honeypot — must stay empty
    _t: body._t, // form-open timestamp for the CRM's bot check
  };

  const base = process.env.NEXT_PUBLIC_CRM_BASE_URL?.replace(/\/$/, "");
  const formId = process.env.CRM_LEAD_FORM_ID;

  if (!base || !formId) {
    console.info("[quote lead — CRM env not set; logged only]", payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(`${base}/api/lead/${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data?.ok === false) {
      console.error("[quote lead — CRM rejected]", res.status, data);
      return NextResponse.json({ ok: false, errors: data?.errors }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote lead — CRM unreachable]", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
