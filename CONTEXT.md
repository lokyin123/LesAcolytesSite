# Project context (for next session / handoff)

Website for the user's brother's ensemble, **Les Acolytes** (French Baroque cantatas, Cambridge-based).

Reference links:
- https://www.cmp.cam.ac.uk/events/event/item/les-acolytes-presents-french-baroque-cantatas/
- https://www.instagram.com/lesacolytesmusic/

## Current real build (2026-07-31)

The News section is now a blog-style Markdown collection. `/news/` lists articles newest-first, each file in `src/content/news/` generates an individual page, and Decap has fields for creating and editing posts. Three clearly labelled placeholder articles demonstrate the layout.

The Media video list currently contains the genuine Marin Marais recording (`KMH-7NeWgVA`), Jean-Féry Rebel's *Les Caractères de la Danse* (`E3unHrIWtPE`), and François Couperin's *La Paix du Parnasse: Sonade en Trio* (`1fkmiLUUnKk`). The unrelated Marin Marais E minor Passacaille was removed.

What's On now separates upcoming and past performances. Upcoming events use a vertical chronological layout with time, description, venue, and button-style details links; external URLs open in a new tab, while future internal URLs remain in the same tab. Past performances retain the quieter card grid. Events move to Past automatically after their date, or can be placed there early with the CMS `past_performance` switch. The placeholder concert was removed, the Cambridge cantatas event is explicitly classified as past, and two BREMF performances on 10 October 2026 are the current upcoming entries.

Upcoming performance dates and times are primary Manrope information rather than eyebrow labels. They use the same size and weight on two distinct lines on both the What's On page and the homepage Catch us live card.

The “Upcoming performances” section heading remains on one line at normal supported viewport widths. Its previous 16-character measure cap was removed, and its mobile minimum size is allowed to contract slightly to prevent an artificial wrap.

Events have an optional `series` field displayed above the title. Both upcoming BREMF events use “Brighton Early Music Festival”; the 5 December 2025 Savile Club performance uses “Aperitif Concert”. Date and time have equal visual weight, and upcoming titles are intentionally restrained. Past Performances uses a horizontal carousel with two cards per slide, matching arrow controls and dot/elongated-dot navigation. Current past entries are *The Peace of Parnassus* at Girton College (1 March 2026), the Savile Club (5 December 2025), and the Cambridge cantatas performance at Girton College Chapel (15 June 2025). When the final slide contains only one event, its empty position is filled by a sand-coloured Media invitation: “Missed us live? Browse our videos and recordings in Media.”

Media recordings are displayed in a visitor-controlled horizontal slider. Previous/Next buttons move one recording at a time, the row uses scroll snapping, and touchpad, touchscreen, and keyboard scrolling remain available. Controls disable at the beginning and end of the row.

The recording slider is a full-width dark-ink section with uniform 16:9 embeds. Video data and Decap fields store `composer` and `piece` separately: composer names use a small sand-coloured uppercase label, while piece names use a larger display heading.

Only the active recording is visible and centred. The scrollbar is hidden and replaced by accessible clickable position indicators: the current video's dot lengthens while the remaining videos retain small dots. Arrow controls and swipe/touchpad scrolling update the indicator automatically.

A full-width light photo carousel follows the recording slider. It uses the CMS-managed `media.photos` list, currently seeded with seven available Les Acolytes group photographs, and automatically groups images into mosaic slides of up to three. Each mosaic fits a consistent-height band and has matching arrows, swipe support, and dot/elongated-dot indicators. Mobile uses a compact two-level mosaic. Gallery images may be cropped within the layout and retain their CMS descriptions as alternative text.

Gallery thumbnails are buttons with a subtle enlargement on hover and keyboard focus. Activating one opens an accessible full-screen lightbox with a scale/fade entrance, natural-ratio image, visible close button, backdrop dismissal, Escape support, and focus restoration. Motion is suppressed for visitors who prefer reduced motion.

Individual news articles use two columns on computers and tablets. The featured photograph fills a sticky, viewport-height frame on the left with conservative centre cropping, avoiding blank space beneath shorter images. The right column has a compact sand-coloured heading containing the date, title, and summary, followed by the article body on a beige panel. Mobile orders these as heading, complete natural-ratio image, then body text for easier scrolling. This sticky/cropped desktop treatment is a trial and should be easy to revert if another approach is preferred.

The original single scrolling site described later in this file is now a prototype only. The real build remains on Eleventy and uses these routes:

- `/` — split photograph/colour hero, an introductory Explore block, and large clickable section panels
- `/about/`
- `/musicians/`
- `/whats-on/`
- `/programmes/`
- `/media/`
- `/news/`
- `/contact/`

`src/_data/sections.yaml` contains the routes, navigation labels, provisional summaries, panel colours, and photographs. Eleventy pagination in `src/index.njk` generates the homepage and all seven internal routes. `src/_includes/base.njk` provides the shared sticky navigation and footer.

The current typography uses four clearly separated roles. Major Mono Display is reserved for the visual `les Acolytes` wordmark in the header, homepage hero, and footer; its accessible name remains the conventional “Les Acolytes”. Bricolage Grotesque supplies expressive headings. Manrope supplies navigation, eyebrows, metadata, buttons, event facts, composer labels, and short summaries on coloured title/navigation panels. Spectral supplies larger substantive body copy, including biographies, event descriptions, and articles. The wordmark has a subtle context-specific CSS stroke in the header and footer, but none in the large hero because the outline became visible there.

The approved visual-tweaks configuration is now the production design: ink `#252825`, paper `#fffcf5`, soft white `#fafafa`, muted text `#666a64`, clay `#e68665`, sage `#8bb19a`, sand `#ded2ba`, blue `#b7c5d2`, and yellow-rose `#ecde79`. The approved typography values are headings 90%, substantive Spectral body text 110%, general Manrope/interface text 115%, button text 100%, and eyebrow/series labels 116%. Conventional wrapped sections use a 1360px maximum width. Panel assignments are Home blue, About sage, Musicians sand, What's On clay, Programmes blue, Media sage, News sand, and Contact yellow-rose; musician biographies run clay, blue, sand, and sage.

On the Musicians page, instruments are dedicated uppercase Manrope role labels rather than generic eyebrows, and musician headings have a wider balanced measure so Edward Campbell-Rowntree does not wrap unnecessarily across three lines. The current design continues to use calm clay, sage, sand, blue, and rose panels. Photo and colour panels meet at **straight edges**. Two curve experiments were rejected: an oversized capsule-like treatment and a smaller rounded overlap with the photographs continuing behind the colour panels. Keep edges straight unless the user explicitly asks to revisit curves.

The large homepage section tiles are each a single full-tile link. Redundant “Explore…” arrow labels were removed; clickability is communicated by the existing image zoom plus a restrained title movement and underline animation on hover and keyboard focus. A short static underline remains visible for touch users.

The current landing/page photograph assignments are: photo 7 for the homepage hero, portrait 18 for About, 10 for Musicians, 79 for What's On, 74 for Programmes, 54 for Media, portrait 86 for News, and portrait 92 for Contact. Labelled photographs use URL-safe filenames. Landing panels share a responsive height of `max(560px, 33.333vw)`, matching the natural 3:2 landscape ratio on wide screens; portrait images crop centrally. The About, Musicians, and News internal page heroes use the same frame formula for a consistent crop. Below 900px, section images stack at a 55vw height.

Carousel arrows, the gallery lightbox close control, and arrow-bearing links use geometrically centred inline SVG icons rather than font glyphs. Circular controls have explicit zero padding, and text buttons use centred flex alignment.

The homepage panel directly beneath the hero is now a visitor-controlled two-slide highlight carousel. Its “Catch us live” slide automatically shows “At our next performance” using the existing Events collection. “Catch us live” is a restrained, underlined internal link to the What's On page, while the featured event's separate “View details” button retains its external destination. When no future event exists, the panel instead shows “Our recent performances”, the latest past event, and a separate right-hand “Watch and listen in Media” invitation with an Explore Media button. Its “Find us on” slide contains all four destinations: Instagram (`@lesacolytes.uk`), placeholder Facebook, placeholder Continuo Connect, and YouTube. Both slides retain the site's base paper colour so this beneath-hero position remains visually stable and distinct from the coloured About panel that follows. Placeholder social buttons remain visible by explicit user request. The carousel does not autoplay; arrows, swipe/touchpad scrolling, keyboard scrolling, and dot/elongated-dot indicators control it. External social links and the featured event's “View details” link open in new tabs. Continuo retains a neutral CC monogram because the supplied AVIF logo could not be reliably made transparent with the available tools.

The footer repeats “Find us on” in Bricolage Grotesque beside the social icons so those links remain discoverable without advancing the homepage carousel. Primary CTA button corners use the approved 19px radius. The fallback performance CTA reads “See all performances”.

The “Find us on” slide also says “Questions? Get in touch with us.” and includes a Contact us button. Contact retains the same typographic treatment as the other navigation links; the contextual card provides the emphasis instead.

The public contact address is `hello@lesacolytes.uk`. It is displayed as contact information on the homepage Contact tile and as a copy-on-click control on the Contact page; a successful copy announces “Copied”, while failure restores selectable text. The CMS Site Settings field remains the single source for both locations.

The homepage hero does not show the small “French Baroque ensemble” eyebrow. Its visual title is permanently split across two lines, and its introduction describes the musicians as a chamber ensemble performing on historical instruments with a shared passion for French Baroque music and its surrounding repertoire. Its “Discover the ensemble” link points to `#find-us`, scrolling to the two-slide highlight carousel directly below the hero rather than navigating to the About page. The About tile and navigation route remain unchanged.

On desktop, the homepage hero photograph expands responsively toward a 60% maximum while preserving a safe text-panel measure; it can contract to 50% before the layout stacks below 900px. The local tweaks control adjusts this maximum rather than forcing a fixed split, preventing the two-line wordmark from creating horizontal overflow.

The shared footer repeats the four social destinations as compact accessible circular icons immediately before the copyright notice. It reuses the same CMS-managed URLs, safe external-link behaviour, CC monogram, and restrained hover/focus feedback as the homepage social panel.

The footer currently uses the dark ink tone (`#252825`) with light brand/icons and sand-coloured copyright text. This is an intentionally isolated darker-footer treatment and can be reverted independently if needed.

Below 650px, the desktop navigation bar is replaced by a labelled Menu button. It opens an ink-coloured full-screen navigation panel that slides horizontally from right to left using a lightweight transform, accompanied by a softer opacity fade. The mobile header disables its backdrop filter so the fixed panel stays aligned to the viewport. The transition lasts 550ms with gentle deceleration. Native blue mobile tap highlights are suppressed on these controls and replaced with the site's sand/ink hover, active, and keyboard-focus feedback. The overlay locks page scrolling, traps keyboard focus, closes through its Close button, a selected link, or Escape, and restores focus to Menu. Reduced-motion users receive no slide transition. Tablet and desktop navigation remain unchanged.

The internal pages remain at different stages of completion. About, Musicians, What's On, Media, and Contact reuse existing data, while Programmes still contains holding copy. News is now a CMS-managed Markdown collection with an index and individual article pages; its three current articles are clearly labelled placeholders for testing the finished post structure. Decap fields cover events, news, media, musicians, and the site's social links, although some final text and imagery still need replacing through the CMS.

The Musicians page now scrolls through one substantial, full-browser-width profile per row. Portraits occupy 30% of the desktop row and biographies 70%, alternating left/right. The exact 1707x2560 portrait ratio determines each row's height and the colour panel stretches to match, with no cropping or distortion. Mobile stacks equally tall, full-width portrait and biography blocks. All four individual portraits in `src/images/IndividualsGit/` are connected; final biographies are explicitly marked as forthcoming. Member fields are stored in `settings.yaml`; the CMS configuration still needs a later update for the new `image`, `image_alt`, `tone`, and `bio` fields.

The old signature intro is inactive: `src/js/intro.js` remains in the repository, but the current layout does not load it and the matching markup/CSS were removed.

## Local visual tweaks panel (2026-08-05)

Running `npm start` and opening `http://localhost:8080/?tweaks` activates a development-only Visual tweaks panel. It provides browser-only controls for the current palette, independent palette-tone assignments for all eight main sections and the four individual musician biography panels, the four already loaded typefaces, heading and substantive Spectral body scale, independently adjustable general Manrope/interface text, button text, and eyebrow/series-label sizes, button rounding, section spacing, content width, hero and landing-panel proportions, desktop panel height, and animation speed. Experiments persist in local storage, can be saved as named presets, reset to the real design, or copied as JSON for review. Internal links retain the `tweaks` query so a configuration can be assessed across pages.

`.eleventy.js` exposes `isDevelopment` only when Eleventy is started with `--serve`; `base.njk` conditionally includes `src/_includes/dev/tweaks-panel.njk`. A normal `npm run build` emits none of the panel's markup, CSS, or JavaScript. The workbench never writes approved values back into the source design; applying a chosen configuration requires an explicit, separate user-approved change.

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
