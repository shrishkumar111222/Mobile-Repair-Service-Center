# Mobile Repair & Service Center — Website Demo

A production-ready, conversion-focused website for mobile, laptop and electronics
repair businesses. Built as a sales demo for repair shop owners: every section is
wired to a lead-generation action (WhatsApp, call, or booking form).

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion
**Hosting:** static export, deployed to GitHub Pages via GitHub Actions.

---

## What's in the page

| Section | Purpose |
| --- | --- |
| Sticky header + utility bar | Phone, WhatsApp, hours, emergency desk, three CTAs |
| Hero | Headline, trust indicators, live repair board, ₹4,999 demo badge |
| Repair stats | Animated counters (devices, customers, success rate, experience) |
| Services overview | Eight repair categories with turnaround times |
| Mobile repair | Eight services + eight supported brands + quote CTA |
| Laptop repair | Eight services + seven supported brands |
| Screen replacement | Before/after comparison slider, three panel grades |
| Battery replacement | Health gauges, before/after diagnostics table |
| Water damage | Emergency recovery workflow with priority CTA |
| Chip-level lab | Board-level capabilities and lab equipment list |
| Genuine parts | Quality badges, traceability, scrolling parts marquee |
| Repair process | Six-step timeline (vertical on mobile, horizontal on desktop) |
| Before & after | Interactive reveal slider, real repair cases, video placeholder |
| Why choose us | Eight trust cards |
| Reviews | Six verified testimonials with device, service, rating, location |
| Warranty | Six cover types |
| Cost estimator | Interactive device × service × brand-tier pricing → WhatsApp lead |
| Gallery | Six illustrated workspace scenes |
| FAQ | Accordion, mirrored in FAQPage schema |
| Contact | Details + enquiry form that hands off to WhatsApp |
| Map | Embedded map, directions, parking, landmarks, service area |
| Emergency | After-hours and business-fleet support |
| Without vs. with a website | The owner-facing sales argument |
| Final CTA + footer | Newsletter, social, quick links, demo pitch |

### Lead-generation features

Floating WhatsApp button, sticky "Request FREE Website Demo" pill, one-tap mobile
call bar, ₹4,999 pricing badge, instant quote form, free-diagnosis booking form,
repair cost estimator, and an emergency enquiry path. Every WhatsApp link is
pre-filled with a context-specific message.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

The build writes a fully static site to `out/` — no server runtime required.

---

## Deploying to GitHub Pages

Live at **https://shrishkumar111222.github.io/Mobile-Repair-Service-Center/**

`.github/workflows/deploy.yml` runs on every push to `main`: it builds the
static export and force-pushes `out/` to the **`gh-pages`** branch, which Pages
serves from. Nothing else to configure — `gh-pages` is a build artifact, so
never commit to it by hand.

To publish from a local machine instead:

```bash
npm run build && touch out/.nojekyll
# then push the contents of out/ to the gh-pages branch
```

### Custom domain or a different repo name

`next.config.mjs` reads `NEXT_PUBLIC_BASE_PATH` (default
`/Mobile-Repair-Service-Center`). For a custom domain or a `<user>.github.io`
repository, build with an empty base path:

```bash
NEXT_PUBLIC_BASE_PATH="" npm run build
```

---

## Customising it for a real shop

Almost everything a shop owner needs to change lives in **`lib/site.ts`**:
business name, tagline, phone, WhatsApp number, email, address, hours, map embed
and social links. Section copy lives in the arrays at the top of each component
in `components/`, and the brand palette is defined in `tailwind.config.ts`
(`navy`, `deep-blue`, `repair-red`, `success-green`).

Update the absolute URL in `app/robots.ts` and `app/sitemap.ts` if you deploy to
a different domain.

---

## SEO & accessibility

- LocalBusiness + FAQPage JSON-LD schema in `app/layout.tsx`
- Full metadata set: title template, description, keywords, Open Graph, Twitter
- Generated `robots.txt` and `sitemap.xml`
- Semantic landmarks, skip-to-content link, labelled form fields and icons,
  visible focus rings, and `prefers-reduced-motion` support throughout
- No external images, no third-party scripts — the only remote request is the
  optional Google Maps iframe
