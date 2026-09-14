# sourceworkco.com

Marketing site for **Sourcework LLC**, a Tennessee government contracting and
procurement company. Next.js App Router, TypeScript, Tailwind CSS 4, static
first, deployed on Vercel.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run verify     # typecheck, lint, production build
```

Node 20 or newer.

## Editing content

There is no CMS. Everything a non-developer edits lives in **`content/site.ts`**
as typed constants: navigation, the four capabilities, the Align/Source/
Implement/Deliver sequence, the agency engagement stages, the federal
registration snapshot, and the contract vehicles. Page components read from that
file and never hardcode copy.

The registration values on `/government` ship as placeholders. Replace `To be
provided` in the `snapshot` array as UEI, CAGE, NAICS, and PSC codes are issued.

**Hard rule:** no telephone number appears anywhere on this site. Not on the
contact page, not in the footer, not in the Organization JSON-LD, not in
metadata. Email and location only.

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

## Contact form

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which delivers
through Resend to `ryan@sourceworkco.com`.

- With no `RESEND_API_KEY`, the route answers `{ ok: false, reason: "unconfigured" }`
  and the form offers a `mailto:` compose window pre-filled with what was typed.
- A hidden `website` honeypot field silently accepts and discards bot traffic.
- Delivery failures log the full message body so nothing is lost.

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

- [ ] Replace the `To be provided` rows in `content/site.ts`
- [ ] Replace `public/capability-statement.pdf` with the designed statement
      (`node scripts/make-placeholder-pdf.mjs` regenerates the placeholder)
- [ ] Add real photography and pass `src` to `<DuotoneImage>` on `/about`
- [ ] Verify the Resend sender domain and send a live test through `/contact`
- [ ] Submit `https://sourceworkco.com/sitemap.xml` to Google Search Console

## Structure

```
app/            routes, api/contact, sitemap, robots, icons, og image
components/     header, footer, page sections, form, primitives
content/site.ts all site copy and structured content
public/brand/   mark and lockup SVGs
scripts/        placeholder PDF generator
```
