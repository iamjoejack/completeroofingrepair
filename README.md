# Complete Roofing & Repair — Marketing Website

A fast, conversion-focused marketing site for **Complete Roofing & Repair, LLC** (Byron Center, MI).
Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**. Leads and chat connect
directly to the **thebestcrm** system, where your AI agents and automations act on them.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values (see "Connecting to thebestcrm")
npm run dev                  # http://localhost:4322
```

Build for production:

```bash
npm run build
npm run start
```

---

## Where things live

```
src/
├── app/
│   ├── layout.tsx                 # header, footer, mobile bar, chat widget, site-wide SEO + schema
│   ├── page.tsx                   # Home
│   ├── about/ service-area/ reviews/ contact/ faqs/   # core pages
│   ├── services/                  # overview + 6 category pages
│   ├── locations/                 # 5 per-city SEO pages
│   ├── blog/                      # index + 3 posts
│   ├── api/quote/route.ts         # LEAD PIPELINE → forwards to thebestcrm
│   ├── sitemap.ts  robots.ts
│   └── globals.css                # brand colors + reusable button/section styles
├── components/                    # header, footer, quote form, chat widget, sections, icons…
└── lib/site.ts                    # ⭐ ONE place for phone, address, services, cities, reviews
```

---

## How to make common edits

### Change the phone number (everywhere)
Edit `PHONE_DISPLAY` and `PHONE_TEL` in **`src/lib/site.ts`**. That single change updates the header,
hero, footer, sticky mobile bar, and every call/text link.

### Add or edit a review
Edit `PLACEHOLDER_REVIEWS` in **`src/lib/site.ts`** (shown on the home page and `/reviews`). Replace the
example text and `attribution` with the real customer’s words and name/city. **Replace all example reviews
with genuine ones before launch** — never present the examples as real customers.

### Add a blog post
1. Create `src/app/blog/<your-slug>/page.tsx` (copy an existing post as a template — it uses the shared
   `<BlogPost>` component).
2. Add an entry to the `POSTS` array in `src/lib/site.ts` so it appears in the blog index and home teaser.

### Edit services or service-area cities
Both are arrays in `src/lib/site.ts` (`SERVICES`, `CITIES`, `LOCATION_PAGES`). Editing them updates the
grids, footer, sitemap, and links automatically. (Each service/location page’s long copy lives in its own
`page.tsx`.)

### Swap in real photos
Placeholders are marked in the UI and in code (search for `PhotoPlaceholder` and `REPLACE WITH REAL`).
Drop images into `public/images/` and replace the placeholder with a `next/image` `<Image>` or an `<img>`.

### Update the BBB profile link
Set `SITE.bbbProfileUrl` in `src/lib/site.ts` to the real Better Business Bureau profile URL.

---

## Connecting to thebestcrm (leads + chat + AI agents)

Everything is already wired — you just supply three values in `.env.local`:

```bash
NEXT_PUBLIC_CRM_BASE_URL=https://thebestcrm.vercel.app   # your CRM deployment URL (no trailing slash)
CRM_LEAD_FORM_ID=ripkl6t3cfo461l45o6a4e43                # the "Roofing Website Quote" form
NEXT_PUBLIC_CRM_CHAT_WIDGET_SLUG=complete-roofing        # the chat widget
LEAD_NOTIFY_WEBHOOK_URL=                                 # optional instant lead alert (see below)
```

**Instant lead alerts (optional).** Set `LEAD_NOTIFY_WEBHOOK_URL` to get pinged the
second a quote request arrives, through whatever you already use:
- **Slack / Discord:** create an incoming webhook and paste its URL. The lead shows up as a message.
- **Email or text:** create a free Zapier or Make "catch hook," paste its URL, and have it forward to your inbox or phone.

It fires in parallel with the CRM and never blocks or fails a lead. Leave it blank to
rely on the CRM alone (every lead still lands as a Contact with a follow-up task).

**How a lead flows:**
1. A visitor submits the quote form.
2. It POSTs to **`src/app/api/quote/route.ts`** (the single lead pipeline — the only place to change lead
   handling). The form id stays server-side here.
3. That route forwards to `POST {CRM_BASE_URL}/api/lead/{CRM_LEAD_FORM_ID}`.
4. thebestcrm creates a **Contact**, runs your **form-triage agent** (lead scoring/tagging), and fires your
   **workflows**: tag the lead + create a 24-hour follow-up task (and an SMS auto-reply once Twilio is
   connected for the workspace).

**Chat / answering agent:** the `<ChatWidget>` in the layout loads
`{CRM_BASE_URL}/api/chat/{slug}/embed.js`, connecting site visitors to your CRM’s unified inbox. To
restrict which sites can embed it, set `allowedOrigins` on the ChatWidget in thebestcrm.

**Missed-call text-back:** handled in thebestcrm via the Twilio inbound-call workflow for this
workspace — the site just surfaces the click-to-call number.

> The CRM records for this client (workspace `complete-roofing`, the form, the chat widget, and the
> workflows) were created by `prisma/seed-roofing.ts` in the thebestcrm repo.

If `.env.local` isn’t set, the form still works for demos: the lead is logged server-side and the visitor
sees the success message.

---

## Deploy

Deploy on **Vercel** (same as thebestcrm):

1. Push this repo to GitHub (`iamjoejack/completeroofingrepair`).
2. Import it in Vercel.
3. Add the three environment variables above in the Vercel project settings.
4. Point your domain at it and update `BASE_URL` in `src/lib/site.ts` (used for canonical URLs + sitemap).

---

## Notes

- The site uses a system font stack (no webfont network request) for speed and reliability.
- One `<h1>` per page, per-page meta titles/descriptions, and schema.org markup (LocalBusiness, Service,
  FAQ, Article) are built in.
- Assets still needed (marked in code): real BBB profile URL, license #, crew/project photos, real reviews,
  and a logo.
