# Les Acolytes — website

A simple website with a built-in editor so non-technical people can update text, photos, events, and videos without touching code.

## Current build direction (July 2026)

The original single-page design is now a prototype only. The real build keeps Eleventy and uses a multi-page structure. The landing page at `/` has a split-image hero and clickable panels leading to `/about/`, `/musicians/`, `/whats-on/`, `/programmes/`, `/media/`, `/news/`, and `/contact/`.

Navigation, routes, panel text, images, and colours are driven by `src/_data/sections.yaml`. One paginated `src/index.njk` template generates the home page and all seven section routes; `src/_includes/base.njk` supplies their shared navigation and footer. Content remains provisional during the structure and visual-design stages.

The visual direction uses large, calm neutral-colour panels paired with ensemble photography. Photo and colour panels currently meet at **straight edges**. Two curved treatments were tested and rejected: an oversized capsule treatment and a smaller rounded-overlap treatment. Do not reintroduce curved panel boundaries unless the user explicitly asks to revisit them.

The Musicians page is a long, alternating sequence rather than a card table. Every photo/panel pair spans the full browser width: a natural-aspect-ratio portrait occupies 30% and a coloured biography panel occupies 70%, reversing sides for each musician. The portrait's exact 1707:2560 ratio determines the desktop row height and the panel stretches to match. On mobile, both become full-width stacked blocks of matching height. Member `image`, `image_alt`, `tone`, and `bio` values live in `src/_data/settings.yaml`. All four real portraits are connected; final biographies are still outstanding.

**Stack:** [Eleventy](https://www.11ty.dev/) (static site generator) + [Decap CMS](https://decapcms.org/) (the `/admin` editor) + [Netlify](https://netlify.com) (free hosting + login for the editor).

**Editing the site day to day is documented in [EDITING.md](EDITING.md)** — written for a non-technical editor, plus the Netlify setup steps.

## Local development

```
npm install
npm start      # the site, on http://localhost:8080
npm run cms    # the CMS backend, on http://localhost:8082 (second terminal)
```

With both running, the admin panel at **http://localhost:8080/admin/** works locally — click Login, no password needed. Edits write straight to the files in this folder, so check `git diff` before committing.

## Deployment

Already done: the repo is on GitHub, connected to Netlify (build `npm run build`, publish `_site`), and `site_url` in `src/admin/config.yml` points at the live URL.

**Still outstanding** — enabling Identity + Git Gateway and inviting the editor. Those are dashboard steps; they're written out in [EDITING.md](EDITING.md#one-time-netlify-setup).

## Why Netlify and not GitHub Pages

The CMS uses Decap's `git-gateway` backend, which is Netlify-specific. It would work on GitHub Pages via the `github` backend, but then **every editor needs a GitHub account with write access to this repo**, plus a self-hosted OAuth proxy (a Cloudflare Worker or similar) to handle the login. Netlify Identity needs only an email invite and a password, which matters when the editors aren't developers.

Netlify announced Identity's deprecation and then [reversed that in February 2026](https://answers.netlify.com/t/netlify-identity-is-staying-feb-2026-reversal-what-changed-whos-affected-and-how-to-proceed/162733). It's staying, but receives no further development — if it's ever pulled, the migration path is the `github` backend above.

## Content structure (for reference)

News articles live in `src/content/news/*.md`; each file generates its own article page.

- `src/_data/settings.yaml` — global site content (about, contact, members)
- `src/content/events/*.md` — one file per concert/event
- `src/_data/media.yaml` — YouTube videos + photo gallery
- `src/images/uploads/` — where photos uploaded via the CMS land
- Image filenames should use hyphens instead of spaces, so their URLs remain straightforward.
- `src/images/stock/` — **free stock photos (Pexels) standing in for real ensemble photos.** Free to use, but not photos of Les Acolytes — replace with real performance/portrait photos as soon as you have them, via the CMS.
