# KJ Management Accounting Solutions — Next.js rebuild

A custom rebuild of the WordPress/Elementor site as a Next.js 15 app (App Router, TypeScript,
Tailwind, Framer Motion). Same section order, same layout, same brand — no WordPress, no page
builder, no plugin licences.

---

## 1. Run it

```bash
npm install
cp .env.example .env.local   # fill in the values you have
npm run dev                  # http://localhost:3000
```

Build check: `npm run build` · Types: `npm run typecheck`

---

## 2. Before you ship — the replace list

### Images — run the fetch script

```bash
npm run fetch:assets
```

This pulls all 33 files from `wp-content/uploads/` into `public/images/original/`, then copies the
confirmed ones into the slots the components read from. It's the only asset step that's automated,
because the mapping below was verified against the live page markup:

| WordPress file | Lands as | Used by |
|---|---|---|
| `KJ-Management-Logo.png` | `logo-header.png` | Header |
| `KJ-Logo-1.png` | `logo-footer.png` | Footer |
| `KJ-Logo.png` | `logo-mark.png` | Testimonials profile card |
| `cropped-KJ-Logo-1.png` | `favicon-source.png` | Favicon source |
| `EA8BCD7C-…-F7AB74936B52.png` | `about-founders.png` | About → Our Story |
| `upwork-logo-png-transparent.png` | `logo-upwork.png` | Testimonials |
| `Video.png` | `video-poster.png` | Why Choose Us video thumbnail |
| `xero.jpg` / `upwork.jpg` | `badge-xero.jpg` / `badge-upwork.jpg` | Trusted By |
| The 7 service `.svg` files | `icons/*.svg` | Services grid + Services page |

**Six slots still need placing by eye** — the script prints them at the end along with the leftover
originals. They're the background photos, which have non-descriptive filenames (`mjvn.jpg`,
`bzbzbazb.png`, `Untitled-1.jpg` and similar) that can't be mapped without looking:

`hero.jpg` · `mission.jpg` · `contact.jpg` · `og.jpg` · `badge-acca.png` · `badge-xero-silver.png`

Open `public/images/original/`, find the right one, and copy it over the placeholder. Everything
currently in `public/images/` is a generated placeholder with REPLACE written across it, so nothing
404s in the meantime and it's obvious what's still outstanding.

If the script fails (hotlink protection, Cloudflare, site down), fall back to **Tools → Export →
Media** in WP admin, or SFTP into `wp-content/uploads/` and pull the year folders.

### Logo

`Logo.tsx` renders the real PNG once the script has run. If the client can supply the vector, drop
an SVG in and swap the `<Image>` for an inline `<svg>` — it'll be sharper on retina and save a
request.

### Content

- Services → `src/data/services.ts`
- FAQs → `src/data/faqs.ts`
- Phone, email, socials, review links → `src/data/site.ts`
- Privacy policy → `src/app/privacy-policy/page.tsx` (currently a stub — copy the live one over,
  it's a legal requirement given the contact form collects personal data)

### Video

`src/components/WhyChooseUs.tsx` has `YOUTUBE_ID = 'S5sDl0I-U9U'`. Change it if that's not the
video the client wants embedded. It uses `youtube-nocookie.com` and only loads the iframe on
click, so it costs nothing on initial page load.

---

## 3. Google reviews — confirmed answer

**The WP site runs two review plugins, not one.**

1. **Trustindex** — installed site-wide. Every page carries a `meta-ti-site-data` tag, and it calls
   back to `admin-ajax.php?action=ti_online_users_google`. This is the homepage widget: profile card
   with the star rating, review count and "Write a review", then the card rail.
2. **WP Google Places Review Slider** (RichPlugins) — used on `/testimonials/`. Its assets serve
   from `/wp-content/plugins/wp-google-places-review-slider/`.

That's why the two pages look slightly different — they're different plugins rendering the same
Google Business Profile.

Neither stores reviews in the WordPress database. Both hold a Google Business Profile connection on
the vendor's servers, cache the reviews there, and inject them client-side. Nothing to migrate.

**The Place ID is already extracted:** `ChIJmwD7OSpriEgRr1SmXy16-zA`, taken from the "Check out our
google reviews" link on the testimonials page. It's set as the default in `src/data/site.ts`, so
Option B below works as soon as you add an API key.

For future reference, the fastest ways to identify any review widget: check `/wp-admin/plugins.php`;
grep the page source for class prefixes (`ti-` = Trustindex, `rplg-`/`wprev-` = RichPlugins,
`eapps-` = Elfsight, `embedsocial-` = EmbedSocial); or open DevTools → Network → Fetch/XHR and see
which CDN the reviews arrive from.

### What to use in the Next.js build

Three options, wired up in `src/lib/google-reviews.ts`:

**Option A — Featurable (recommended).** Free, no Google Cloud billing, and it returns the *full*
review history rather than a handful — which matters here, since there are 50+ reviews and the
Places API would show five. Create a widget at featurable.com, connect the client's Google Business
Profile, then set:

```
NEXT_PUBLIC_FEATURABLE_WIDGET_ID=your-widget-id
```

**Option B — Google Places API (New).** Official, but it returns a **maximum of five reviews** and
you can't choose which five. Needs a billing-enabled key, restricted server-side. Set:

```
GOOGLE_PLACES_API_KEY=...
GOOGLE_PLACE_ID=...
```

The Place ID is already filled in as a default. Worth knowing: the five-review cap is a hard API
limit, not a tier thing — it's the single most common reason people end up back on a third-party
widget.

**Option C — keep Trustindex.** It gives you a plain `<script>` embed that works in any framework,
and the client already has the account. Least work, but you keep paying for it and you inherit its
markup and layout shift.

Both A and B are fetched server-side and revalidated daily (`revalidate: 86_400`), so reviews are
fresh, cached, and never block the page. If neither env var is set, the section falls back to
placeholder cards in `src/data/reviews.ts` and the layout stays intact.

Debug endpoint: `GET /api/google-reviews` returns the resolved feed as JSON, including which source
it used.

**One thing to flag to the client:** don't hard-code real reviewers' words into the repo long term.
Google's terms expect reviews to be displayed live with attribution rather than copied into your own
store indefinitely, and it means a deleted review stays on the site forever. Live feed is the right
call both ways.

### Upwork

There's no public Upwork reviews API. `src/data/reviews.ts` has a small array you fill in by hand
with whatever the client is happy to display. The profile link is already wired:
`upwork.com/freelancers/kieranmanagementaccounting`.

---

## 4. Contact form

Posts to `/api/contact`, which sends via Resend. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and
`CONTACT_FROM_EMAIL`, and verify the sending domain in Resend or delivery will fail.

Includes a honeypot field, server-side validation, HTML escaping, and a real error path that tells
the user the email address if sending breaks. For heavier spam, add Cloudflare Turnstile in front.

---

## 5. Deploy

Vercel: import the repo, paste the env vars, point the domain. Before you cut DNS over:

- [ ] `npm run fetch:assets` run, and the six remaining slots filled by hand
- [ ] No REPLACE placeholders left in `public/images/`
- [ ] Privacy policy copied across
- [ ] `NEXT_PUBLIC_SITE_URL` set to the live domain
- [ ] Contact form tested end to end from production
- [ ] Reviews feed connected and rendering
- [ ] Article bodies pasted into `src/data/posts.ts` (see section 7)
- [ ] Crawl the old site (Screaming Frog) and 301 anything you haven't recreated. URL structure is
      preserved, including the flat post URLs — note WP serves posts at `/{slug}/` while this build
      serves them at `/knowledge-hub/{slug}/`, so those seven need redirects
- [ ] Resubmit the sitemap in Search Console after go-live

---

## 6. Structure

```
src/
├── app/
│   ├── layout.tsx           # fonts, metadata, JSON-LD, header/footer
│   ├── page.tsx             # homepage
│   ├── about/               # About
│   ├── services/            # Services, with #management etc. anchors intact
│   ├── testimonials/        # Testimonials
│   ├── contact/             # Contact
│   ├── knowledge-hub/       # listing + [slug] article template
│   ├── api/contact/         # Resend handler (both form shapes)
│   └── api/google-reviews/  # feed debug endpoint
├── components/              # one file per section, shared across pages
├── data/                    # all editable content
└── lib/google-reviews.ts    # Featurable + Places, with fallback
```

## 7. Knowledge Hub articles

`src/data/posts.ts` holds the seven posts with their real slugs, titles and dates. The `body` field
is empty on all of them — the article page renders a visible note saying so rather than failing.

To finish the migration: **Tools → Export → Posts** in WP, then paste each post's HTML into its
`body` field. If the client will keep publishing, it's worth moving to MDX files or a headless CMS
instead of a TS array — but the routing, metadata, `generateStaticParams` and sitemap entries are
already wired either way.

Brand tokens live in `tailwind.config.ts` — `brand` is `#EE7C3B`, sampled from the screenshots.
Nudge it if you have the exact hex from the client's brand guide.

Fonts are Archivo (display) + Jost (body) via `next/font`, self-hosted at build time. They're a
close match to the Elementor originals rather than a guaranteed identical pair — if the client has
the real font names, swap them in `layout.tsx` and it's a one-line change.
