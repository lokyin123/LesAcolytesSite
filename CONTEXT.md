# Project context (for next session / handoff)

Website for the user's brother's ensemble, **Les Acolytes** (French Baroque cantatas, Cambridge-based).

Reference links:
- https://www.cmp.cam.ac.uk/events/event/item/les-acolytes-presents-french-baroque-cantatas/
- https://www.instagram.com/lesacolytesmusic/

## Stack

**Eleventy** (static site generator) + **Decap CMS** (`/admin` panel) + **Netlify** (hosting + Identity/Git Gateway for login).

**Why:** the brother who owns the site day-to-day is non-technical. He needs a form-based editor, not raw file editing — Decap CMS gives him a login at `/admin` where he edits content through fields, which commits to git and triggers a Netlify rebuild. Plain static HTML or a framework without a CMS layer was rejected for this reason.

## Structure

- `src/_data/settings.yaml` — global content (ensemble name, tagline, bio, member list, hero/about images, contact email, Instagram URL) — edited via Decap's "Site Settings" file collection.
- `src/content/events/*.md` — one markdown file per concert — edited via Decap's "Events" folder collection. Seeded with the real Cambridge cantatas event plus one placeholder event. Front matter is `title`, `event_date`, `venue`, `ticket_url`, `image`, body = description.
- `src/_data/media.yaml` — YouTube video IDs + gallery photo list — edited via Decap's "Media" file collection.
- `src/images/uploads/` — where photos uploaded through the CMS land; `src/images/stock/` has free Pexels stock photos (chamber music/baroque instruments) standing in for real ensemble photos — swap for real photos via the CMS when available.
- `src/js/reveal.js` — IntersectionObserver scroll-fade-in effect (staggered for lists/grids), respects `prefers-reduced-motion`.
- Single scrolling page (`src/index.njk`): Hero → About → Events → Media → Contact. Concert-hall brown/mahogany palette (ivory `#f3ead9` bg, mahogany `#2b1d14` ink, brick-red `#7a2e1d` accent) with Playfair Display headings + Source Serif 4 body text. Hero itself is plain and static — single background image, `<h1>`/tagline over a dark gradient, **no entrance animation on the hero.**
- `src/js/intro.js` + the `.intro` rules in `style.css` — the signature landing screen (see below).

## Signature intro (added 2026-07-31)

Modelled on ericclapton.com, which opens with his signature being written before the site appears. Ours writes **"Les Acolytes"** in the Italianno script face, mahogany ink on the ivory paper background, then the tagline fades in beneath and the whole screen fades to reveal the page.

How it works:
- The "pen" is a `clip-path` polygon with a slanted right edge sweeping left→right over 1.8s (`@keyframes intro-write`). It's a wipe, not a traced path — no hand-authored SVG to maintain, and it re-renders correctly if the ensemble name is changed in the CMS, since the text comes from `settings.ensemble_name`.
- An inline script in `<head>` (`base.njk`) decides *before first paint* whether to add `.intro-active` to `<html>`, so the site never flashes behind the overlay. It opts out when: already shown this browser session (`sessionStorage` key `la-intro-seen`), `prefers-reduced-motion: reduce`, or the URL has a `#hash` (so deep links skip it).
- CSS keeps `.intro { display: none }` by default, so with JS disabled the overlay never appears at all.
- `intro.js` waits for the Italianno webfont before starting (otherwise the fallback gets written and swapped mid-animation), auto-dismisses at 3s, and skips immediately on click / keypress / wheel / touch.
- Total run ~3.8s including the 0.8s fade. Timings live in `HOLD`/`FADE` in `intro.js` and must stay in sync with the CSS animation durations.

Note: this is **not** a copy of Clapton's signature — it's our own name in a script font.

## Hero animation history — don't re-propose without explicit request

Several *hero* entrance effects were tried and all rejected: fade+scale on scroll, a two-panel sliding "curtain" split (looked like a slideshow transition, visible seam), a fade-dominant version with drift/blur/easing, a solid-overlay crossfade, and an earlier plain timed splash screen ("not good, lets go back to no landing page"). The signature intro above was then requested explicitly, with ericclapton.com as the reference — it supersedes that earlier splash rejection, but the hero underneath stays plain and static. If asked to make the hero itself more dynamic, ask what specifically is wanted rather than retrying any of the above.

## CMS decisions (2026-07-31)

The Decap panel existed from the start but had never been opened by anyone, which had produced two misconceptions worth not re-deriving: that media couldn't be added/removed (it always could — list widgets ship with Add/×/reorder), and that the panel required Netlify. Now testable locally: `npm run cms` (decap-server) alongside `npm start`, `local_backend` in `src/admin/config.yml`, port 8082 via `.env` because Eleventy's dev server holds 8081.

- **Staying on Netlify**, decided deliberately. The `github` backend would work on GitHub Pages but needs a GitHub account per editor plus a self-hosted OAuth proxy — unacceptable for non-technical editors. Rationale and the migration path are in `README.md`. Netlify Identity was slated for deprecation then reprieved in Feb 2026; staying, but unmaintained.
- **Bug found and fixed:** the Date field used `widget: "date"`, which Decap 3 removed — it rendered "No control for widget 'date'", so an event's date was never editable. It's `widget: "datetime"` with `time_format: false`.
- **Event schema changed.** `date` + `display_date` (same date entered twice, in two formats, guaranteed to drift) collapsed into a single `event_date`, formatted for display by the `eventDate` filter in `.eleventy.js`. Renamed off `date` because Eleventy treats that as reserved page metadata. `isoDate()` there normalises both the quoted string the old files used and the unquoted YAML date the CMS writes — both paths are exercised and work.
- **Past events auto-hide** via the collection filter in `.eleventy.js`. Caveat: "today" is *build time*, so an event drops off at the next build, not at midnight. Every CMS save triggers a build, so it self-corrects in practice; exact behaviour would need a daily scheduled build hook on Netlify.
- **Event image + description now render** (`src/index.njk`, `.event*` rules in `style.css`). They were CMS fields the site ignored entirely.
- **Identity widget added to `base.njk`.** Invite and password-recovery emails land on the homepage with a `#token`, not on `/admin/` — without the widget there, invite links silently do nothing. The signature intro already skips when a hash is present, so the two don't collide.
- Deliberately **not** done: editorial workflow (draft/review branches — too much concept for one editor), a styled preview pane (Decap's unstyled default is turned off via `editor: preview: false`), `logo_url` (Decap renders it full-size; the hero photo swamped the login screen — needs a proper small wordmark), and image optimisation on upload (phone photos will bloat the repo; `eleventy-img` is the eventual answer).
- Dead `src/_redirects` passthrough removed from `.eleventy.js` — the file never existed.

## Status as of 2026-07-31

Site building locally (`npm start` — run `npm install` first, `node_modules` is not committed). Repo now has a GitHub remote (`git@github.com:JamesHLS/LesAcolytes.git`) and `main` tracks `origin/main`, so next-step 1 is done. `site_url` in `src/admin/config.yml` points at `https://lesacolytesmusic.netlify.app`, so steps 2 and 4 look done too. **Unverified from inside the repo:** whether Netlify Identity + Git Gateway are enabled and whether the brother has been invited (steps 3 and 5).

Real content in place for: media (2 real Marin Marais performance videos embedded, one is an actual Les Acolytes recording — YouTube ID `KMH-7NeWgVA`), member lineup (Andrew Taheny - violin, Billy Hui - flute, Timothy Lin - viola da gamba, Edward Campbell-Rowntree - harpsichord, no founder framing). About bio and event programme description are back to generic placeholder text — web-researched specifics weren't accurate for this ensemble and were reverted; don't re-add researched specifics without user confirmation. Photos are still stock/placeholder (Pexels).

## Next steps

Steps 1, 2 and 4 of the original list (GitHub, Netlify, `site_url`) are done. Remaining:

1. In Netlify: enable Identity → set registration to Invite only → enable Git Gateway → invite the brother's email. Written out with menu paths in `EDITING.md`.
2. Swap placeholder text/photos/YouTube IDs for real content via the CMS.

Step 1 happens outside a Claude session (needs the user's Netlify account), so check rather than assume it's been done — there's no way to tell from the repo.
