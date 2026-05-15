## Emerald Solar Solutions Website

Marketing website for Emerald Solar Solutions, built with the Next.js 16 App Router.

## Security defaults

- Contact form submissions are processed server-side through `app/api/contact/route.ts`.
- `/admin` and `/api/admin` are protected with a signed admin session via `proxy.ts`.
- Secrets stay server-side only. Do not expose them through `NEXT_PUBLIC_` variables.
- If `CONTACT_FORM_WEBHOOK_URL` is not set, contact submissions are stored server-side in `storage/contact-requests.jsonl`, which is gitignored and not publicly served.

## Environment setup

Create a local environment file before running the app:

```bash
copy .env.example .env.local
```

Then set strong values for:

- `NEXT_PUBLIC_SITE_URL=https://emeraldsolarsolutions.ie` for production canonical URLs, sitemap URLs, robots.txt, Open Graph URLs, and JSON-LD IDs
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- `CONTACT_FORM_WEBHOOK_URL` and `CONTACT_FORM_WEBHOOK_BEARER_TOKEN` if you want submissions forwarded to a secure external workflow

Optional public business details can be added when confirmed:

- `NEXT_PUBLIC_BUSINESS_PHONE`
- `NEXT_PUBLIC_BUSINESS_EMAIL`
- `NEXT_PUBLIC_BUSINESS_STREET_ADDRESS`
- `NEXT_PUBLIC_BUSINESS_LOCALITY`
- `NEXT_PUBLIC_BUSINESS_REGION`
- `NEXT_PUBLIC_BUSINESS_POSTAL_CODE`
- `NEXT_PUBLIC_BUSINESS_PHOTO_URL`

Do not add review, rating, or testimonial schema until real reviews are collected and approved for publication.

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Verification

Run these checks before deployment:

```bash
npm run lint
npm run build
```
