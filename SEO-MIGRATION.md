# SEO Migration Plan

Moving from the old Hibu site to this new Next.js site on the **same domain**
(`completeroofingrepair.com`). Because the domain isn't changing, this is a
straightforward content/URL migration. No Search Console "Change of Address" is
needed. The goal is simple: keep every ranking and link that the old site
earned, and lose no traffic in the switch.

---

## Already done (in this repo)

- [x] **Full URL inventory** pulled from the old sitemap (services, locations, blog, ~150 city pages)
- [x] **Redirects for every old URL** -> the matching new page (`next.config.ts`). Verified 0 gaps. Next emits 308, which Google treats the same as a 301
- [x] **Per-page meta** titles + descriptions, one `<h1>` each, canonical URLs
- [x] **Structured data**: LocalBusiness (with the real 4.7 / 56 `AggregateRating` and reviews), Service, FAQ, Article, BreadcrumbList
- [x] **`sitemap.xml`** and **`robots.txt`** (auto-generated)
- [x] **Content parity**: every old service, location, and blog post is represented
- [x] **Custom 404 page** (`not-found.tsx`) for any stray URL the redirects miss
- [x] **Mobile-friendly + fast** (static prerender, system fonts, optimized images)

---

## Before you flip the switch

- [ ] **Record a baseline.** In Google Search Console and Google Analytics, note current organic traffic, top landing pages, and top queries. This is what you compare against after launch.
- [ ] **Confirm the production domain.** Update `BASE_URL` in `src/lib/site.ts` if the live domain differs from `https://www.completeroofingrepair.com`.
- [ ] **Deploy to Vercel** and add the env vars (CRM URL, form id, chat slug, optional lead-alert webhook).
- [ ] **Spot-check redirects on the live URL** (a handful of old links, e.g. `/cedar-shake-repair`, `/roof-repair-traverse-city-mi`, an old `/contact/roof-repair-service-area/...` city page).
- [ ] **Run Lighthouse** on the deployed site (aim for 90+ on Performance, Accessibility, Best Practices, SEO).

## Launch day

- [ ] Point the domain's DNS at the new Vercel deployment.
- [ ] In **Google Search Console**, resubmit `sitemap.xml`.
- [ ] Use the **URL Inspection** tool on 5–10 important pages and "Request Indexing."
- [ ] Verify the live `robots.txt` allows crawling and lists the sitemap.

## First 2–4 weeks (monitor)

- [ ] **Search Console > Pages**: watch for a spike in 404s or "redirect" errors. Every old URL should resolve, not error.
- [ ] **Search Console > Performance**: confirm impressions/clicks hold steady. A brief dip during re-crawl is normal; a sustained drop means something needs attention.
- [ ] Check that the new pages are getting indexed (Coverage report).

## Local SEO (do once, important for a contractor)

- [ ] **Google Business Profile**: confirm the website link points to the new site, NAP (name, address, phone) matches exactly, and it's the same number as the site: (616) 207-3831.
- [ ] **Citations** (BBB, Yelp, Yellow Pages, etc.): confirm the same NAP and the correct website URL.
- [ ] Keep collecting Google reviews. The site shows the live count manually today (`SITE.rating` / `SITE.reviewCount` in `src/lib/site.ts`); bump those numbers as reviews grow, or wire them to a live source later.

---

## Reference

- Redirect map: `next.config.ts`
- Sitemap: `src/app/sitemap.ts` (served at `/sitemap.xml`)
- Robots: `src/app/robots.ts`
- Reviews + rating data: `src/lib/site.ts` (`REVIEWS`, `SITE.rating`, `SITE.reviewCount`)
