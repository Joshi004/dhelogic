# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:4002 — note: README's 5173 is stale)
npm run build     # Production build to ./dist
npm run preview   # Preview the production build
npm run lint      # ESLint over the whole repo
```

There is no test suite or test runner configured.

To exercise the Cloudflare Pages Function (`/api/contact`) locally, the Vite dev server is not enough — it only serves the SPA. Use Wrangler against the built output: `npm run build` then `npx wrangler pages dev ./dist` (binds the `RATE_LIMIT` KV namespace and `functions/`).

## Architecture

This is the marketing/portfolio site for **TechSergy**, an IT consultancy that has pivoted toward AI inference cost optimization (see `docs/ai-inference-pivot/`). It is a React 19 + Vite SPA deployed on **Cloudflare Pages**, with serverless backend logic in `functions/`.

### Two distinct runtimes

1. **Client SPA** (`src/`) — React Router v7 with five routes defined in `src/App.jsx` (Home, About, Services, Portfolio, Contact). `main.jsx` wires the provider stack: `HelmetProvider` → `BrowserRouter` → MUI `ThemeProvider` + `CssBaseline`. Page transitions use Framer Motion's `AnimatePresence` keyed on `location.pathname`.
2. **Cloudflare Pages Functions** (`functions/`) — file-based routing. `functions/api/contact.js` exports `onRequestPost`/`onRequestOptions` and handles contact form submissions. This code runs in the Workers runtime, not Node, and is **not** bundled by Vite. Config lives in `wrangler.toml` (assets dir `./dist`, KV binding `RATE_LIMIT`).

### Contact form pipeline (the one piece of real backend logic)

`functions/api/contact.js` is the heart of the backend. The full chain matters when changing it:
- **CORS** is locked to an `ALLOWED_ORIGINS` whitelist (techsergy.com); unknown origins fall back to the first allowed origin rather than reflecting.
- **Rate limiting** (`functions/utils/rateLimit.js`) uses the `RATE_LIMIT` KV namespace, keyed by `CF-Connecting-IP`, with per-minute and per-hour windows enforced via KV TTL. It **fails open** if KV is unavailable or IP is unknown. Note the actual limit constants in the code differ from the doc comments.
- **Bot protection**: a honeypot `website` field (filled → fake 200 success) plus Cloudflare **Turnstile** verification (skipped only if `TURNSTILE_SECRET_KEY` is unset).
- **Sanitization** (`functions/utils/sanitize.js`) strips HTML/event handlers from every field; `detectSuspiciousPatterns` logs (does not block) likely-malicious input.
- **Delivery** via **Resend** API. Required env vars: `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`. Optional: `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Set these in Cloudflare Pages → Settings → Environment variables.

### Data-driven portfolio (key pattern)

Project/case-study content is **not** hardcoded in components. Each project is one JSON file in `src/data/projects/`, aggregated through `src/data/projects/index.js`, which exposes selector functions: `getAllProjects`, `getPortfolioProjects`, `getHomepageProjects`, `getProjectById`, `getOngoingProjects`, `getCompletedProjects`.

To add or change a case study, edit/add a JSON file and register it in the `allProjects` array in `index.js` (array order = display order). Each project object drives behavior through structured fields:
- `visibility.{showOnPortfolio, showOnHomepage}` — controls which page surfaces it (filters in the selectors).
- `status.{isOngoing, label}` — drives ongoing vs. completed grouping.
- `iconKey` (and `challenges[].iconKey`) — a **string** key resolved to an MUI icon component via `src/data/projects/iconMap.jsx`. A new `iconKey` must be added to `iconMap` or it won't render. Icons are referenced by name, never imported into JSON.
- `color`/`gradient`, `results[]`, `technologies[]`, and the nested `portfolio` / `homepage` objects supply per-surface display content.

### Theme & styling

MUI is the styling system; there is no CSS-in-JS beyond MUI's `sx`. The single source of truth for colors, typography, gradients, and component overrides is `src/theme/theme.js` (TechSergy deep-blue `#014584` + gold accent `#F59E0B`; fonts "General Sans" headings / body). Prefer theme tokens and `sx` over ad-hoc styles. Shared layout pieces (Navbar, Footer, ScrollToTop, PageTransition) live in `src/components/common/`; page-specific sections are grouped by page under `src/components/{home,portfolio,...}/`.

### Planning docs

`docs/` holds product/strategy planning markdown (e.g. `ai-inference-pivot/`, per-project planning files). These are reference material describing intended direction, not generated from code.
