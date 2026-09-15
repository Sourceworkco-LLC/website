# sourceworkco.com

Marketing site for **Sourcework LLC**, a Tennessee government contracting and
procurement company. Next.js App Router, TypeScript, Tailwind CSS 4, static
first, deployed on Vercel.

## First push

This repository already has its history. To put it on GitHub:

```bash
tar -xzf sourcework-site.tar.gz
cd sourcework-site

# Create an empty repo first (no README, no .gitignore, no license), then:
git remote add origin https://github.com/<owner>/<repo>.git
git branch -M main
git push -u origin main
```

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run verify     # typecheck, lint, production build
```

Node 20 or newer. `npm run verify` is the gate: a change is not done until it
passes.

## Photography

Eight slots are defined in `config/images.ts` and rendered by
`components/Photo.tsx`, which falls back to a composed placeholder when a file
is missing. Two ways to fill them:

```bash
# Either drop correctly named files straight into public/images/
#   hero-port-dusk.jpg, capability-products.jpg, capability-technology.jpg,
#   capability-logistics.jpg, capability-facilities.jpg,
#   capability-specialty.jpg, break-terminal.jpg, about-quarry.jpg

# Or let the script size and convert them for you:
node scripts/prepare-photo.mjs ~/Downloads/port-at-dusk.jpg heroPort
node scripts/prepare-photo.mjs ~/Downloads/data-center.jpg technology
```

Slot keys: `heroPort`, `products`, `technology`, `logistics`, `facilities`,
`specialty`, `breakTerminal`, `aboutQuarry`. The script auto-rotates, resizes
(2600px for full-bleed, 1800px for cards), strips camera metadata, and writes
a progressive mozjpeg. Next/Image derives AVIF and WebP from there.

## Pages

| Route | Job |
| --- | --- |
| `/` | Positioning, registration proof above the fold, capabilities, pipeline, three audience paths |
| `/solutions` | The four capabilities in depth, plus how we work with agencies |
| `/government` | Credential panel, full contracting officer quick reference, contract vehicles |
| `/rfq` | Requirement and RFQ intake, with document upload. The primary conversion path |
| `/suppliers` | Supplier registration, and how we buy |
| `/teaming` | Where Sourcework contributes on a prime's scope, and a teaming inquiry |
| `/about` | What the company is, stated without overclaiming |
| `/contact` | General contact, routed to the three specific intakes |

## Editing content

There is no CMS. Everything a non-developer edits lives in **`content/site.ts`**
(copy and structured content) and **`content/forms.ts`** (form fields). Page
components read from those files and never hardcode copy.

Two standing rules govern `content/site.ts`, and they are written at the top of
the file:

1. Nothing may claim a capability, relationship, certification, award, or past
   performance Sourcework has not established.
2. Company data is never invented. Anything not yet issued is marked `pending`
   and renders as a visible placeholder, so a contracting officer sees an honest
   gap rather than a plausible-looking value. NAICS and PSC codes are the open
   items today.

### Registration

`registration` in `content/site.ts` holds the verified SAM.gov record: UEI
`Z7AZH895XD63`, CAGE `24SS2`, active for all awards, expiring 28 August 2027.
Update `expires` at renewal. It feeds the credential panel, the quick
reference, the home page strip, the footer, the Organization JSON-LD
identifiers, and the page metadata.

### Phone number

No telephone number is published anywhere on this site: not on a page, not in
the footer, not in the JSON-LD. That was set as a hard rule at the start of the
project and no number has been supplied since. `site.phone` is `null`; set it to
a string and the quick reference row, the contact page, and the schema pick it
up. Leave it null and every surface omits it rather than inventing one.

### Capability statement

`public/capability-statement.pdf` is generated from the registered facts by
`node scripts/make-capability-statement.mjs`, so the document a contracting
officer downloads cannot contradict the site. Edit the `DATA` block in that
script and re-run it, or drop a designed PDF at the same path to replace it.

## Brand system

| Token | Value | Use |
| --- | --- | --- |
| Obsidian | `#0F1412` | Primary text, statement bands |
| Evergreen | `#2D3834` | Brand surfaces: capabilities, footer |
| Stone | `#A7A299` | 1px hairline rules, muted text on dark |
| Bone | `#F4F2EC` | Light backgrounds, and all text on dark |

Tokens are declared in `app/globals.css` under `@theme`, so Tailwind utilities
(`bg-evergreen`, `text-bone`, `border-obsidian/45`) come from the same source.

One addition to the four: `--color-stone-ink` (`#6E6A62`), Stone darkened to the
same hue. Stone on Bone measures 2.3:1, which fails WCAG AA for small text, so
muted text on light surfaces uses `stone-ink` while Stone stays on rules and on
dark surfaces where it passes. Obsidian text is never placed on Evergreen.

Type: **Sora** 600/700 for display and headings, **Inter** 400/500 for body at
`0.025em`, both via `next/font/google`. Tracked uppercase (`0.1em`) is reserved
for section labels, buttons, and short display lines. Body copy is capped at
65ch.

Everything is hard edged. All radius tokens are `0` and a global rule zeroes
`border-radius`, so a stray rounded utility cannot soften the design.

### Logo assets

`/public/brand` contains the mark and lockups reconstructed as clean vector from
the brand board:

- `mark-{obsidian,bone,evergreen,stone}.svg`, `mark-outline.svg`
- `lockup-horizontal-{obsidian,bone}.svg`

The header and footer render `<Lockup>` (`components/Lockup.tsx`), which pairs
the inline `<Mark>` with live Sora type. That keeps the wordmark crisp at every
size and readable to screen readers, and it means the SVG files exist purely for
places that need a flat image, email signatures above all. When the original
vendor files arrive, drop them into `/public/brand` under the same names and
swap `<Mark>` for an `<Image>` if you want the vendor outlines exactly.

The favicon is `app/icon.svg` (Bone mark on Evergreen). `app/apple-icon.tsx` and
`app/opengraph-image.tsx` generate their PNGs from the same geometry.

### Photography

`components/DuotoneImage.tsx` renders an architectural placeholder until a `src`
is passed. Real images are pushed through a grayscale plus evergreen blend (the
`.duotone` rules in `globals.css`) so any stock or client photograph lands
inside the palette.

### Motion

Exactly one orchestrated reveal, on the home hero, on load. Nothing else on the
site animates without user action, and `prefers-reduced-motion` disables it.

## Forms and intake

All four forms (requirement, supplier, teaming, contact) are described in
`content/forms.ts` and rendered by one component, `components/forms/IntakeForm.tsx`.
Adding a field is a one-line edit; every form then validates, submits, and fails
identically. They post multipart form data to `app/api/intake/route.ts`, which
delivers by email through Resend.

- Attachments ride along with the submission: solicitations, SOWs, drawings,
  line cards. Capped at 5 files and 4 MB total, because Vercel caps a serverless
  request body at 4.5 MB. The form states the limit and points larger packages
  at email.
- A submission is accepted when it carries a valid email address plus either a
  description or an attached document. Nothing else is mandatory, so a buyer
  forwarding a solicitation at 4:55pm is not stopped by a form.
- With no `RESEND_API_KEY`, the route answers `{ ok: false, reason: "unconfigured" }`
  and the form offers a `mailto:` compose window pre-filled with what was typed.
- A hidden `fax` honeypot field silently accepts and discards bot traffic.
- Delivery failures log the whole submission so nothing is lost.

Environment variables (see `.env.example`, all server side):

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | No | Enables email delivery. Without it the form falls back to `mailto:` |
| `CONTACT_NOTIFY_EMAIL` | No | Recipient. Defaults to `ryan@sourceworkco.com` |
| `CONTACT_FROM_EMAIL` | No | Verified Resend sender. Defaults to `onboarding@resend.dev` |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical origin for metadata and sitemap. Defaults to `https://sourceworkco.com` |

Use a verified domain sender (`no-reply@sourceworkco.com`) once the domain is
verified in Resend. The default `onboarding@resend.dev` works for first deploys
only.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New Project**, import the repository. The framework preset
   detects Next.js. No build settings need changing.
3. **Settings, Environment Variables:** add `RESEND_API_KEY` and
   `CONTACT_FROM_EMAIL` for Production and Preview. Leave the rest unless you
   are changing the defaults.
4. Deploy.

### Pointing sourceworkco.com

1. Vercel project, **Settings, Domains**, add `sourceworkco.com` and
   `www.sourceworkco.com`.
2. At the registrar, set the records Vercel displays: an `A` record for the apex
   at `76.76.21.21`, and a `CNAME` for `www` at `cname.vercel-dns.com`. Verify
   the exact values against the Vercel dashboard, they change occasionally.
3. Keep `sourceworkco.com` as the primary domain and let Vercel redirect `www`
   to it, so canonical URLs and the sitemap agree.
4. Set `NEXT_PUBLIC_SITE_URL=https://sourceworkco.com` in Production if the
   default was ever changed.
5. TLS is issued automatically once DNS resolves.

## Before launch

- [ ] Publish primary NAICS, additional NAICS, and PSC codes in `content/site.ts`
      (the only `pending` rows left in the quick reference)
- [ ] Decide on a published phone number, or leave `site.phone` null
- [ ] Replace `public/capability-statement.pdf` with a designed statement, or
      keep the generated one (`node scripts/make-capability-statement.mjs`)
- [ ] Add real photography and pass `src` to `<DuotoneImage>` on `/about`
- [ ] Verify the Resend sender domain and send a live test through `/contact`
- [ ] Submit `https://sourceworkco.com/sitemap.xml` to Google Search Console

## Structure

```
app/              routes, api/intake, sitemap, robots, icons, og image
components/       header, footer, page sections, primitives
components/forms/ the one schema-driven intake form
content/site.ts   all site copy and structured content
content/forms.ts  form field schemas
public/brand/     mark and lockup SVGs
scripts/          capability statement generator
```
