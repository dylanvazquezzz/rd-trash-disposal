# R&D Trash Disposal — SEO + Google Ads Improvement Plan

**Baseline Score:** 62/100 (C+) — April 2026
**Target Score:** 82/100 (B+) — End of Q2 2026
**Goal:** More organic leads from map pack + city pages, lower Google Ads CPC, higher conversion rate on paid traffic

---

## Session 2 Status — April 9, 2026

### Completed
- ✅ 1.1 Homepage → City Page Links (ServiceAreas + Footer components)
- ✅ 2.1 Demolition Landing Pages — 15 cities at `/demolition/[city]`
- ✅ Google Ads tag (AW-18068988816) in `<head>` of layout.tsx
- ✅ `/estimate/thank-you` page created + form redirect wired
- ✅ Google Ads conversion action: page load on `/estimate/thank-you`
- ✅ Google Ads sitelinks scoped out for both ad groups

### In Progress / Blocked
- ⏳ Google Ads tag verification pending (just deployed)
- ⏳ GBP video verification pending
- ⏳ GA4 ↔ Google Ads link not yet done

### Next Up (Priority Order)
1. Verify Google Ads tag in Google Ads console
2. Link GA4 ↔ Google Ads (Tools → Linked accounts)
3. ✅ Add demolition sitelinks to Google Ads library (Hialeah, Miramar, Hollywood, Pembroke Pines)
4. Apply unique city page content to `app/[city]/page.tsx`
5. Add address to footer + schema
6. Create `/about` page
7. Citations after GBP verified

---

## MCP / Analytics Access Setup (Do First)

Before touching the site, get data visibility:

- [ ] **GA4 MCP Server** — Install `@modelcontextprotocol/server-google-analytics`, grant existing service account (`sheets-writer@claudeaccess-490519.iam.gserviceaccount.com`) viewer access to GA4 property, configure in `~/.claude/settings.json`
- [ ] **Google Search Console** — Add service account as property user at search.google.com/search-console → Settings → Users
- [ ] **Verify GA4 conversion tracking** — Confirm `generate_lead` and `close_convert_lead` key events are firing on form submit (check April 10, 2026 in GA4 Events report)

Once live, Claude can query: which pages get traffic, which keywords trigger impressions, conversion rates per page, and quality of paid vs organic traffic.

---

## Milestone 1 — Foundation Fixes (Highest ROI, Fastest)
**ETA: 1–2 days | Impact: Organic rankings + Ads Quality Score**

These are the lowest-effort, highest-impact changes. Some will improve Google Ads Quality Score within days.

### 1.1 Homepage → City Page Links
**Why:** City pages only discoverable via sitemap right now. Homepage passes zero PageRank to them.
**Google Ads impact:** None direct, but organic traffic to city pages reduces reliance on paid.
- [ ] Convert all city name `<span>` tags in service area section to `<a href="/junk-removal-[city]">` links
- [ ] Ensure links are visible and crawlable (not hidden, not JS-only)

### 1.2 Add Address to Footer + Schema
**Why:** NAP (Name, Address, Phone) consistency is foundational for local SEO. Schema `PostalAddress` is missing `streetAddress` and `postalCode`.
**Google Ads impact:** Trust signals = higher conversion rate on landing pages.
- [ ] Add business address to footer (below or next to phone numbers)
- [ ] Update `PostalAddress` in homepage JSON-LD schema with full address
- [ ] Add `postalCode` per county if service-area-based (can list primary address)

### 1.3 Add Broward Number to Footer
**Why:** 954 number is missing from footer. Broward customers don't see it.
- [ ] Add 954-708-8090 to footer alongside 305 number, labeled by county

### 1.4 Add `/estimate` to Sitemap
**Why:** Highest-value conversion page not in sitemap.
- [ ] Add `/estimate` to `sitemap.ts` with high priority (0.9)

---

## Milestone 2 — Google Ads Landing Page Improvements
**ETA: 3–5 days | Impact: Quality Score → lower CPC, higher conversion rate**

These changes directly improve Google Ads performance. Quality Score improves when page relevance matches ad keywords.

### 2.1 Create Demolition Landing Pages
**Why:** Demolition is a full ad group but there's no dedicated page. All demo traffic lands on junk removal pages = low Quality Score = paying more per click.
- [ ] Create `/demolition-miami` — target "interior demolition Miami", "kitchen demo Miami", "demo contractor Miami"
- [ ] Create `/demolition-fort-lauderdale` — target "demo contractor Broward", "interior demolition Fort Lauderdale"
- [ ] Each page: H1 with primary keyword, service list (kitchen/bath demo, tile removal, shed removal), unique local content, CTA with both phone numbers
- [ ] Add these pages to sitemap
- [ ] Update demolition ad group sitelinks to point to new pages
- [ ] Add demolition pages to homepage city services section as linked items

### 2.2 Unique Local Content Per City Page
**Why:** All city pages share <50 words of unique content. Google suppresses duplicate templates. Ads Quality Score penalizes generic content.
**Priority order (by Ads spend + search volume):**
- [ ] `/junk-removal-miami` — already decent, add Wynwood/Brickell/Little Havana zip codes
- [ ] `/junk-removal-fort-lauderdale` — add Las Olas/Wilton Manors/Pompano Beach
- [ ] `/junk-removal-hialeah` — mention Hialeah Gardens, Palm Springs North
- [ ] `/junk-removal-doral` — mention Blue Lagoon, Sweetwater, Medley
- [ ] `/junk-removal-kendall` — mention Kendale Lakes, West Kendall, Pinecrest
- [ ] `/junk-removal-homestead` — mention Florida City, Leisure City, Cutler Bay

Each page gets: 1 unique paragraph (100–150 words) with neighborhood names, a local-specific subheading, and a ZIP code list or service area table.

### 2.3 Inline Estimate Form on City Pages (Optional but High Impact)
**Why:** All city pages CTA goes to `/estimate` — adds a page navigation before conversion. Inline forms reduce drop-off on paid traffic.
- [ ] Evaluate embedding a simplified 3-field form (name, phone, description) on each city page
- [ ] Can share the same Supabase submission — just needs the form component extracted

---

## Milestone 3 — Local SEO Signals
**ETA: 1 week | Impact: Map pack rankings, organic local visibility**

These take longer to pay off but are highest long-term value for local search.

### 3.1 Google Business Profile
**Why:** Single biggest local ranking factor. Not set up yet.
- [ ] Create/claim GBP at business.google.com
- [ ] Primary category: "Junk Removal Service"
- [ ] Secondary categories: "Demolition Contractor", "Garbage Collection Service"
- [ ] Add both phone numbers (Miami + Broward)
- [ ] Add all services with descriptions
- [ ] Upload 10+ photos (truck, before/after jobs, crew)
- [ ] Set service areas: Miami-Dade + Broward counties
- [ ] Link to rdtrash.org
- [ ] Once verified, add GBP URL to homepage schema `sameAs` array

### 3.2 Add Schema `sameAs` Links
**Why:** Tells Google what external profiles belong to this business entity — critical for entity disambiguation and map pack ranking.
- [ ] Add `sameAs` to homepage JSON-LD once profiles exist: GBP, Yelp, Facebook, BBB

### 3.3 Citations — Core Directories
**Why:** NAP (Name, Address, Phone) citations build local authority. Build these in priority order:
- [ ] Yelp
- [ ] Bing Places for Business
- [ ] Apple Maps Connect
- [ ] BBB (Better Business Bureau)
- [ ] Yellow Pages
- [ ] Angi (Angie's List) — even a free listing
- [ ] HomeAdvisor free listing
- [ ] Nextdoor Business
- [ ] Facebook Business Page

### 3.4 Add Google Maps Embed to Contact/Homepage
**Why:** Maps embeds signal local relevance to Google.
- [ ] Add Google Maps embed to footer or a dedicated "Service Area" section
- [ ] Embed can show service area polygon, not just a pin (since this is a SAB)

---

## Milestone 4 — E-E-A-T and Trust Signals
**ETA: 1–2 days | Impact: Organic rankings, Ads Quality Score, conversion rate**

### 4.1 Create About Page
**Why:** Zero information about who runs this business. Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) requires human signals. Also improves conversion rate for paid traffic.
- [ ] Create `/about` page
- [ ] Include: owner name, years in business, license numbers, insurance details, service area story
- [ ] Add photo of crew/truck if possible
- [ ] Link from homepage nav

### 4.2 Add License + Insurance Info to Homepage
**Why:** Junk removal and demo competitors that convert better always show license/insurance visibly.
- [ ] Add "Licensed & Insured" badge with actual license number to homepage hero or trust bar
- [ ] Add to all city page trust badges (currently generic icons)

### 4.3 Review Acquisition System
**Why:** Reviews are a top Google Ads Quality Score factor for local businesses AND a top map pack ranking signal.
- [ ] Create a short Google review link (from GBP)
- [ ] Add post-job SMS template asking for review
- [ ] Add review CTA to estimate confirmation page

---

## Milestone 5 — Technical Cleanup
**ETA: 1 day | Impact: Crawl efficiency, schema validation**

### 5.1 Schema Cleanup
- [ ] Add `streetAddress` and `postalCode` to all `PostalAddress` blocks
- [ ] Add `image` (business logo URL) to `LocalBusiness` schema
- [ ] Add `BreadcrumbList` to all city pages
- [ ] Add `@id` URI to main `LocalBusiness` block for entity disambiguation
- [ ] Add `AggregateRating` once first reviews are live

### 5.2 Open Graph / Social
- [ ] Verify OG tags on city pages (`og:title`, `og:description`, `og:image`)
- [ ] Confirm og-image.svg renders correctly for social sharing

---

## Google Ads Checklist (Run Monthly)

These tasks keep ads efficient as organic improves:

- [ ] Weekly: Check Search Terms report, add new negative keywords
- [ ] Week 2: Pause keywords with zero impressions, note top performers
- [ ] Month 1 end: Review cost per conversion — if CPL is under $50, add Ad Groups 3+4 (Furniture/Appliance, Cleanouts)
- [ ] Month 2: Consider dedicated landing pages for top-performing keywords (e.g., `/same-day-junk-removal`)
- [ ] Ongoing: Match organic ranking improvements to Ads — if `/junk-removal-miami` starts ranking organically in top 3, reduce bid on that keyword and reallocate to weaker areas

---

## Success Metrics

| Metric | Baseline | 30-Day Target | 90-Day Target |
|---|---|---|---|
| SEO Health Score | 62/100 | 72/100 | 82/100 |
| Google Ads avg CPC | (check) | -15% | -25% |
| Ads conversion rate | (check) | +20% | +40% |
| Organic map pack appearances | 0 (untracked) | 5 cities | 10 cities |
| Monthly organic leads | 0 (new) | 3-5 | 15-20 |
| City page unique content | 0/6 pages | 6/6 pages | 6/6 + 2 demo |
| GBP set up | No | Yes | Verified + 10+ reviews |

---

## Execution Order (Priority Stack)

```
Week 1, Day 1-2:   MCP/Analytics setup → Milestone 1 (Foundation Fixes)
Week 1, Day 3-5:   Milestone 2 (Demo pages + city page content)
Week 2:            Milestone 3 (GBP setup + citations)
Week 3:            Milestone 4 (About page + trust signals)
Week 4:            Milestone 5 (Technical cleanup)
Ongoing:           Google Ads maintenance (weekly)
```
