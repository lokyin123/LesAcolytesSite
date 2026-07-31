# Les Acolytes — website

A simple website with a built-in editor so non-technical people can update text, photos, events, and videos without touching code.

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

- `src/_data/settings.yaml` — global site content (about, contact, members)
- `src/content/events/*.md` — one file per concert/event
- `src/_data/media.yaml` — YouTube videos + photo gallery
- `src/images/uploads/` — where photos uploaded via the CMS land
- `src/images/stock/` — **free stock photos (Pexels) standing in for real ensemble photos.** Free to use, but not photos of Les Acolytes — replace with real performance/portrait photos as soon as you have them, via the CMS.
