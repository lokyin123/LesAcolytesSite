# Les Acolytes — website

A simple website with a built-in editor so non-technical people can update text, photos, events, and videos without touching code.

## Current build direction (July 2026)

The original single-page design is now a prototype only. The real build keeps Eleventy and uses a multi-page structure. The landing page at `/` has a split-image hero and clickable panels leading to `/about/`, `/musicians/`, `/whats-on/`, `/programmes/`, `/media/`, `/news/`, and `/contact/`.

Fixed routes live in `src/_data/sections.yaml`; editable page copy, photos, colours, contact details, and musician biographies live in `src/_data/pages/*.yaml`. One paginated `src/index.njk` template generates the homepage and section routes; `src/_includes/base.njk` supplies their shared navigation and footer. Content remains provisional during the structure and visual-design stages.

Directly beneath the homepage hero is a visitor-controlled three-slide highlight card. It shows the next upcoming performance first, an embedded Media recording as the visual centrepiece second, and the four social destinations third. When there is no upcoming event, the first slide becomes an invitation to explore recent performances. The card reads the existing Events and Pages data automatically, so editors do not maintain separate homepage content.

The Programmes page now has three CMS-managed sample programme cards, each with a long description, unlimited composer/piece rows before and after an optional interval, and a total duration. Cards grow with longer programme content. A separate CMS-managed recent repertoire list sits below, followed by a bespoke-programme contact invitation with an animated contact link and email beneath the invitation text.

Page transitions are now part of the main build. They use the View Transitions API as progressive enhancement when supported, keep the shared header stable while page content fades and rises gently into place, and respect `prefers-reduced-motion`; unsupported browsers retain normal navigation.

News is prepared for numbered archive pages: up to six articles appear on each page, with additional pages at stable `/news/page/2/`-style URLs when the collection grows. The Contact page puts bookings and enquiries first, followed by the copyable email address and all four CMS-managed social destinations.

The visual direction uses large, calm neutral-colour panels paired with ensemble photography. Photo and colour panels currently meet at **straight edges**. Two curved treatments were tested and rejected: an oversized capsule treatment and a smaller rounded-overlap treatment. Do not reintroduce curved panel boundaries unless the user explicitly asks to revisit them.

On mobile, internal page headers stack the photograph above the tone-coloured copy panel. A short gradient blends the bottom of the photograph into the panel, which keeps a subtle paper-blended transparency effect without placing the image beneath it. This does not affect the homepage landing panels or the individual musician portrait and biography rows.

There is currently a desktop and homepage experiment applying a narrower, lower-opacity blend with a soft edge blur at internal header seams, the homepage hero seam, and the homepage destination panels on desktop and mobile.

The current typography has four deliberately separate roles: Major Mono Display for the visual `les Acolytes` wordmark, Bricolage Grotesque for expressive headings, Manrope for navigation, metadata, labels, buttons, and short panel summaries, and Spectral for substantive body copy. The mixed system keeps coloured title panels fully sans serif while longer biographies, descriptions, and articles retain an editorial reading voice.

The Musicians page is a long, alternating sequence rather than a card table. Every photo/panel pair spans the full browser width: a natural-aspect-ratio portrait occupies 30% and a coloured biography panel occupies 70%, reversing sides for each musician. Each member now has a CMS-managed `images` list with visitor-controlled previous/next controls, position indicators, keyboard access, and swipe/scroll support; the portrait's exact 1707:2560 ratio determines the desktop row height and the panel stretches to match. On mobile, both become full-width stacked blocks of matching height. Final biographies are still outstanding.

**Stack:** [Eleventy](https://www.11ty.dev/) (static site generator) + [Decap CMS](https://decapcms.org/) (the `/admin` editor) + [Netlify](https://netlify.com) (free hosting + login for the editor).

**Editing the site day to day is documented in [EDITING.md](EDITING.md)** — written for a non-technical editor, plus the Netlify setup steps.

## Local development

```
npm install
npm start      # the site, on http://localhost:8080
npm run cms    # the CMS backend, on http://localhost:8082 (second terminal)
```

With both running, the admin panel at **http://localhost:8080/admin/** works locally — click Login, no password needed. Edits write straight to the files in this folder, so check `git diff` before committing.

### Local visual tweaks

While `npm start` is running, open **http://localhost:8080/?tweaks** to display the development-only visual tweaks panel. It can temporarily explore the colour palette, choose which palette tone is assigned to each main section and individual musician biography panel, loaded typefaces, typography scale, button rounding, spacing, content width, panel proportions, panel height, and animation speed. Current experiments and named presets are stored only in that browser's local storage; **Copy settings** produces a JSON summary for discussion. **Reset** restores the real design.

The panel is injected only when Eleventy runs with `--serve`. A normal `npm run build` excludes its markup, styles, and script completely, so neither the panel nor saved experiments can appear on the deployed website. Applying an approved experiment to the actual design remains a separate manual change.

The localhost-only first-visit intro prototype can be replayed with `http://localhost:8080/?intro`; normal local visits show it once per browser session, while production builds exclude it.

To turn the prototype off locally, change `INTRO_ENABLED` to `false` in `src/_includes/dev/intro.njk`.

## Deployment

Already done: the repo is on GitHub, connected to Netlify (build `npm run build`, publish `_site`), and `site_url` in `src/admin/config.yml` points at the live URL.

**Still outstanding** — enabling Identity + Git Gateway and inviting the editor. Those are dashboard steps; they're written out in [EDITING.md](EDITING.md#one-time-netlify-setup).

## Why Netlify and not GitHub Pages

The CMS uses Decap's `git-gateway` backend, which is Netlify-specific. It would work on GitHub Pages via the `github` backend, but then **every editor needs a GitHub account with write access to this repo**, plus a self-hosted OAuth proxy (a Cloudflare Worker or similar) to handle the login. Netlify Identity needs only an email invite and a password, which matters when the editors aren't developers.

Netlify announced Identity's deprecation and then [reversed that in February 2026](https://answers.netlify.com/t/netlify-identity-is-staying-feb-2026-reversal-what-changed-whos-affected-and-how-to-proceed/162733). It's staying, but receives no further development — if it's ever pulled, the migration path is the `github` backend above.

## Content structure (for reference)

The supplied SVG logo files in `src/images/` are used for the header and footer wordmarks. The homepage hero uses lowercase `les acolytes` text in Radio Canada Big so the title remains one line across the responsive split layout.

News articles live in `src/content/news/*.md`; each file generates its own article page.

- `src/_data/pages/*.yaml` — editable content organised by page, including all page text, photos, contact/social links, and musician biographies/portraits
- `src/_data/settings.yaml` — only the global ensemble name and tagline
- `src/content/events/*.md` — one file per concert/event
- `src/_data/media.yaml` — YouTube videos + photo gallery
- `src/images/uploads/` — where photos uploaded via the CMS land
- Image filenames should use hyphens instead of spaces, so their URLs remain straightforward.
- `src/images/stock/` — **free stock photos (Pexels) standing in for real ensemble photos.** Free to use, but not photos of Les Acolytes — replace with real performance/portrait photos as soon as you have them, via the CMS.
