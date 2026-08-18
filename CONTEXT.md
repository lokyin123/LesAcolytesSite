# Project context (for next session / handoff)

Website for the user's brother's ensemble, **Les Acolytes** (French Baroque cantatas, Cambridge-based).

Reference links:
- https://www.cmp.cam.ac.uk/events/event/item/les-acolytes-presents-french-baroque-cantatas/
- https://www.instagram.com/lesacolytesmusic/

## Current real build (2026-07-31)

## Responsive musician biographies (2026-08-18)

Musician biography panels now use a fluid desktop text measure and typography while keeping the photo/panel rows uniform. On desktop, the shared row height is set just below the portraits' natural height and every portrait uses a top crop where needed, so the colour panels remain aligned without white bands. Edward Campbell-Rowntree's name keeps the requested break point by treating “Edward” and “Campbell-Rowntree” as separate unbroken spans. The initial colour panel shows the instrument, musician name, and a short CMS-managed blurb. The full formatted biography opens in an accessible reading overlay on both desktop and mobile, with a restrained scale/fade entrance and a slightly quicker retraction; the page behind it is locked while reading. Reduced-motion users receive an immediate state change.

## Musician biography rich text (2026-08-17)

The Decap CMS Biography field now uses its `richtext` widget rather than the deprecated Markdown widget. Biography values continue to be saved as Markdown, and the Musicians template runs them through the shared Markdown renderer so paragraph breaks, bold, italic, links, headings, and lists are reflected on the public page.

## Logo update (2026-08-07)

The supplied SVG logo is used in the dark-text header and the light-text footer wordmark. Both displayed logo sizes were reduced slightly and their links shifted a little left within the header/footer bars, while navigation and footer social links remain in place. The homepage hero now intentionally uses lowercase `les acolytes` text in Radio Canada Big instead of the SVG, keeping the existing split layout and fitting on one line at desktop and mobile widths. The accessible name of each linked wordmark remains the CMS-managed ensemble name.

## Programmes page (2026-08-08)

The Programmes page now contains three CMS-managed sample programme cards in a visitor-controlled carousel. Each programme has a long description, independent unlimited piece lists before and after an optional Interval checkbox, and a total duration. Composer and piece are stored separately on every row, so composers may appear on multiple entries without special handling. Programme cards grow with their content rather than reducing text size. The page also contains the supplied nine-item recent repertoire list and a “Something else in mind?” bespoke-programme invitation linking to Contact and `info@lesacolytes.uk`; its animated contact link and email appear below the invitation text. Programme entries remain clearly labelled placeholders until real curated programme details are supplied.

## Page transitions (2026-08-08)

The View Transitions API treatment is enabled in the main build as progressive enhancement. Supported browsers keep the shared header visually stable while the current viewport content fades out over 680ms, then the next page fades in over 900ms after a short 140ms handoff with a restrained 12px upward arrival. The viewport-level content layer preserves the visitor’s current scroll view during the fade-out instead of animating the old page’s layout geometry back toward the next page’s top. Unsupported browsers retain normal navigation, and `prefers-reduced-motion` disables the animation.

The News section is now a blog-style Markdown collection. `/news/` lists articles newest-first, each file in `src/content/news/` generates an individual page, and Decap has fields for creating and editing posts. Three clearly labelled placeholder articles demonstrate the layout.

The Media video list currently opens with Marin Marais's *Suite in G minor from Piéces en trio (X. Plainte)* (`5_8gYkJjykc`), followed by *Suite in G minor from Piéces en trio (XI. Passacaille)* (`oTyajt5LzWQ`) and Jean-Féry Rebel's *Les Caractères de la Danse* (`E3unHrIWtPE`). The homepage Media card uses the first Marin Marais recording.

What's On now separates upcoming and past performances. Upcoming events use a vertical chronological layout with time, description, venue, and button-style details links; desktop rows have a slightly tighter vertical rhythm while mobile retains more breathing room. External URLs open in a new tab, while future internal URLs remain in the same tab. Past performances use a quieter archival card treatment with fine borders, paper surfaces, a clay-accented date lockup, and a sand media card. The duplicate divider before the past section was removed so the final upcoming-event rule provides the separation. Events move to Past automatically after their date, or can be placed there early with the CMS `past_performance` switch. The placeholder concert was removed, the Cambridge cantatas event is explicitly classified as past, and two BREMF performances on 10 October 2026 are the current upcoming entries.

Upcoming performance dates and times are primary Manrope information rather than eyebrow labels. They use the same size and weight on two distinct lines on both the What's On page and the homepage Catch us live card.

The “Upcoming performances” section heading remains on one line at normal supported viewport widths. Its previous 16-character measure cap was removed, and its mobile minimum size is allowed to contract slightly to prevent an artificial wrap.

Events have an optional `series` field displayed above the title. Both upcoming BREMF events use “Brighton Early Music Festival”; the 5 December 2025 Savile Club performance uses “Aperitif Concert”. Date and time have equal visual weight, and upcoming titles are intentionally restrained. Past Performances uses a horizontal carousel with two cards per slide, matching arrow controls and dot/elongated-dot navigation. Current past entries are *The Peace of Parnassus* at Girton College (1 March 2026), the Savile Club (5 December 2025), and the Cambridge cantatas performance at Girton College Chapel (15 June 2025). When the final slide contains only one event, its empty position is filled by a sand-coloured Media invitation: “Missed us live? Browse our videos and recordings in Media.”

Media recordings are displayed in a visitor-controlled horizontal slider. Previous/Next buttons move one recording at a time, the row uses scroll snapping, and touchpad, touchscreen, and keyboard scrolling remain available. Controls disable at the beginning and end of the row.

The recording slider is a full-width dark-ink section with uniform 16:9 embeds. Video data and Decap fields store `composer` and `piece` separately: composer names use a small sand-coloured uppercase label, while piece names use a larger display heading.

Only the active recording is visible and centred. The scrollbar is hidden and replaced by accessible clickable position indicators: the current video's dot lengthens while the remaining videos retain small dots. Arrow controls and swipe/touchpad scrolling update the indicator automatically.

A full-width light photo carousel follows the recording slider. It uses the CMS-managed `media.photos` list, currently seeded with seven available Les Acolytes group photographs, and automatically groups images into mosaic slides of up to three. Each mosaic fits a consistent-height band and has matching arrows, swipe support, and dot/elongated-dot indicators. Mobile uses a compact two-level mosaic. Gallery images may be cropped within the layout and retain their CMS descriptions as alternative text.

Gallery thumbnails are buttons with a subtle enlargement on hover and keyboard focus. Activating one opens an accessible full-screen lightbox with a scale/fade entrance, natural-ratio image, visible close button, backdrop dismissal, Escape support, and focus restoration. Motion is suppressed for visitors who prefer reduced motion.

Individual news articles use two columns on computers and tablets. The featured photograph fills a sticky, viewport-height frame on the left with conservative centre cropping, avoiding blank space beneath shorter images. The right column has a compact sand-coloured heading containing the date, title, and summary, followed by the article body on a beige panel. Mobile orders these as heading, complete natural-ratio image, then body text for easier scrolling. This sticky/cropped desktop treatment is a trial and should be easy to revert if another approach is preferred.

The News archive is prepared for numbered pages of six articles each. The first page is `/news/`; additional pages use stable URLs such as `/news/page/2/` when the collection grows beyond six posts. The original single scrolling site described later in this file is now a prototype only. The real build remains on Eleventy and uses these routes:

- `/` — split photograph/colour hero, an introductory Explore block, and large clickable section panels
- `/about/`
- `/musicians/`
- `/whats-on/`
- `/programmes/`
- `/media/`
- `/news/`
- `/contact/`

`src/_data/sections.yaml` contains fixed routes only. Editable navigation labels, headings, summaries, colours, photographs, page copy, contact details, social links, and musician biographies live in `src/_data/pages/*.yaml`. Eleventy pagination in `src/index.njk` generates the homepage and all seven internal routes. `src/_includes/base.njk` provides the shared sticky navigation and footer.

Desktop navigation links animate an ink underline from left to right on hover and keyboard focus, matching the width-grow motion used on section panels and social links; the current-page marker uses the same persistent underline. The underline is hidden in the mobile drawer.

The current typography uses four clearly separated roles. Major Mono Display is reserved for the visual `les Acolytes` wordmark in the header, homepage hero, and footer; its accessible name remains the conventional “Les Acolytes”. Bricolage Grotesque supplies expressive headings. Manrope supplies navigation, eyebrows, metadata, buttons, event facts, composer labels, and short summaries on coloured title/navigation panels. Spectral supplies larger substantive body copy, including biographies, event descriptions, and articles. The wordmark has a subtle context-specific CSS stroke in the header and footer, but none in the large hero because the outline became visible there.

The approved visual-tweaks configuration is now the production design: ink `#241F20`, paper `#fffcf5`, soft white `#fafafa`, muted text `#6B6061`, clay `#e68665`, sage `#8bb19a`, sand `#ded2ba`, blue `#b7c5d2`, and yellow-rose `#ecde79`. The approved typography values are headings 90%, substantive Spectral body text 110%, general Manrope/interface text 115%, button text 100%, and eyebrow/series labels 116%. Conventional wrapped sections use a 1360px maximum width. Panel assignments are Home blue, About sage, Musicians sand, What's On clay, Programmes blue, Media sage, News sand, and Contact yellow-rose; musician biographies run clay, blue, sand, and sage.

On the Musicians page, instruments are dedicated uppercase Manrope role labels rather than generic eyebrows, and musician headings have a wider balanced measure so Edward Campbell-Rowntree does not wrap unnecessarily across three lines. The current design continues to use calm clay, sage, sand, blue, and rose panels. Photo and colour panels meet at **straight edges**. Two curve experiments were rejected: an oversized capsule-like treatment and a smaller rounded overlap with the photographs continuing behind the colour panels. Keep edges straight unless the user explicitly asks to revisit curves.

The About page body now uses a two-column layout on larger screens, pairing the ensemble copy with a sand-coloured “Find out about our musicians” panel. Its Manrope rows link directly to stable anchors on the corresponding Musicians biographies; the panel moves below the About copy on mobile. Billy Hui is labelled as a traverso player consistently in the musician data and About panel.

On mobile widths, internal page headers now stack the header photograph above the tone-coloured copy panel. A short, restrained gradient blends the bottom of the photograph into the panel, which retains a subtle paper-blended transparency effect without placing the image beneath it. This applies only to `.page-hero` headers; the homepage landing panels and individual musician portrait/biography rows retain their existing layouts.

The current desktop blend is an experiment: internal page headers use a narrow, low-opacity fade with a soft edge blur at the image/colour junction, the homepage hero uses the same treatment in reverse, and all homepage destination panels now use the same directional treatment on desktop and mobile. Revert this desktop/homepage experiment to checkpoint `92c4a4a` if the seams feel too soft.

The large homepage section tiles are each a single full-tile link. Redundant “Explore…” arrow labels were removed; clickability is communicated by the existing image zoom plus a restrained title movement and underline animation on hover and keyboard focus. A short static underline remains visible for touch users.

The current landing/page photograph assignments are: photo 7 for the homepage hero, portrait 18 for About, 10 for Musicians, 79 for What's On, 74 for Programmes, 54 for Media, portrait 86 for News, and portrait 92 for Contact. Labelled photographs use URL-safe filenames. Landing panels share a responsive height of `max(560px, 33.333vw)`, matching the natural 3:2 landscape ratio on wide screens; portrait images crop centrally. The About, Musicians, and News internal page heroes use the same frame formula for a consistent crop. Below 900px, section images stack at a 55vw height.

Carousel arrows, the gallery lightbox close control, and arrow-bearing links use geometrically centred inline SVG icons rather than font glyphs. Circular controls have explicit zero padding, and text buttons use centred flex alignment.

The homepage panel directly beneath the hero is now a visitor-controlled three-slide highlight carousel. Its “Catch us live” slide automatically shows “At our next performance” using the existing Events collection. “Catch us live” is a restrained, underlined internal link to the What's On page, while the featured event's separate “View details” button retains its external destination. When no future event exists, the first slide instead shows “Our recent performances”. The second slide is always a sand-coloured Media card with an embedded CMS-managed recording as its visual centrepiece, a short Media summary, and an Explore Media button. Its third “Find us on” slide contains all four destinations: Instagram (`@lesacolytes.uk`), placeholder Facebook, placeholder Continuo Connect, and YouTube. Placeholder social buttons remain visible by explicit user request. The carousel does not autoplay; arrows, swipe/touchpad scrolling, keyboard scrolling, and three dot/elongated-dot indicators control it. External social links and the featured event's “View details” link open in new tabs. Continuo retains a neutral CC monogram because the supplied AVIF logo could not be reliably made transparent with the available tools.

The footer repeats “Find us on” in Bricolage Grotesque beside the social icons so those links remain discoverable without advancing the homepage carousel. Primary CTA button corners use the approved 19px radius. The fallback performance CTA reads “See all performances”.

The “Find us on” slide also says “Questions? Get in touch with us.” and includes a Contact us button. Contact retains the same typographic treatment as the other navigation links; the contextual card provides the emphasis instead.

The public contact address is `info@lesacolytes.uk`. It is displayed as contact information on the homepage Contact tile and as a copy-on-click control on the Contact page; a successful copy announces “Copied”, while failure restores selectable text. The Contact page places bookings and enquiries above the email and a four-destination Find us on section. The CMS Contact page entry is the single source for these locations.

The homepage hero does not show the small “French Baroque ensemble” eyebrow. Its visual title is permanently split across two lines, and its introduction describes the musicians as a chamber ensemble performing on historical instruments with a shared passion for French Baroque music and its surrounding repertoire. Its “Discover the ensemble” link points to `#find-us`, scrolling to the two-slide highlight carousel directly below the hero rather than navigating to the About page. The About tile and navigation route remain unchanged.

On desktop, the homepage hero photograph expands responsively toward a 60% maximum while preserving a safe text-panel measure; it can contract to 50% before the layout stacks below 900px. The local tweaks control adjusts this maximum rather than forcing a fixed split, preventing the two-line wordmark from creating horizontal overflow.

The shared footer repeats the four social destinations as compact accessible circular icons immediately before the copyright notice. It reuses the same CMS-managed URLs, safe external-link behaviour, CC monogram, and restrained hover/focus feedback as the homepage social panel. On YouTube, the play triangle changes to paper on hover/focus so it remains visible against the ink-coloured icon body.

The footer currently uses the dark ink tone (`#241F20`) with light brand/icons and sand-coloured copyright text. This is an intentionally isolated darker-footer treatment and can be reverted independently if needed.

Below 650px, the desktop navigation bar is replaced by a labelled Menu button. It opens an ink-coloured full-screen navigation panel. Home is included as the first menu option in a sand-accented row, while Close shares a dedicated full-width top bar with the four Find us on icons and remains at the top right; the menu list begins below it. The menu rows are equal-height flex rows with vertically centred, comfortably sized labels, distributed through roughly the first 90% of the viewport. Responsive compression on short screens keeps every option accessible without scrolling and leaves a clear quiet space below the list. The mobile YouTube icon uses the same visible ink play triangle as the footer, with the triangle switching to paper on hover/focus. The panel slides horizontally from right to left using a lightweight transform, accompanied by a softer opacity fade. The mobile header disables its backdrop filter so the fixed panel stays aligned to the viewport. The transition lasts 550ms with gentle deceleration. Native blue mobile tap highlights are suppressed on these controls and replaced with the site's sand/ink hover, active, and keyboard-focus feedback. The overlay locks page scrolling, traps keyboard focus, closes through its Close button, a selected link, or Escape, and restores focus to Menu. Reduced-motion users receive no slide transition. Tablet and desktop navigation remain unchanged.

The internal pages remain at different stages of completion. About, Musicians, What's On, Media, and Contact reuse existing data, while Programmes still contains holding copy. News is now a CMS-managed Markdown collection with an index and individual article pages; its three current articles are clearly labelled placeholders for testing the finished post structure. Decap fields cover events, news, media, musicians, and the site's social links, although some final text and imagery still need replacing through the CMS.

The Musicians page now scrolls through one substantial, full-browser-width profile per row. Portraits occupy 30% of the desktop row and biographies 70%, alternating left/right. A narrow directional blur now softens the photo/biography seam on desktop, with a restrained vertical blend on mobile; portraits remain separate and are not overlaid. Each musician has CMS-managed editable `bio` text and an `images` list with visitor-controlled previous/next controls, position indicators, keyboard access, and swipe/scroll support. Desktop rows share a common height just below the natural portrait height; portraits crop from the top where necessary and colour panels stretch to that same height. Mobile stacks the portrait above a compact name/instrument panel, and the full biography opens in the reading overlay. Musician fields are stored in `src/_data/pages/musicians.yaml` and exposed through the Decap CMS.

The previous inactive signature intro implementation has been removed. The current first-visit experiment lives in `src/_includes/dev/intro.njk` and is included only on the local development homepage.

## Local visual tweaks panel (2026-08-05)

Running `npm start` and opening `http://localhost:8080/?tweaks` activates a development-only Visual tweaks panel. It provides browser-only controls for the current palette, independent palette-tone assignments for all eight main sections and the four individual musician biography panels, the four already loaded typefaces, heading and substantive Spectral body scale, independently adjustable general Manrope/interface text, button text, and eyebrow/series-label sizes, button rounding, section spacing, content width, hero and landing-panel proportions, desktop panel height, and animation speed. Experiments persist in local storage, can be saved as named presets, reset to the real design, or copied as JSON for review. Internal links retain the `tweaks` query so a configuration can be assessed across pages.

`.eleventy.js` exposes `isDevelopment` only when Eleventy is started with `--serve`; `base.njk` conditionally includes `src/_includes/dev/tweaks-panel.njk`. A normal `npm run build` emits none of the panel's markup, CSS, or JavaScript. The workbench never writes approved values back into the source design; applying a chosen configuration requires an explicit, separate user-approved change.

## Stack

**Eleventy** (static site generator) + **Decap CMS** (`/admin` panel) + **Netlify** (hosting + Identity/Git Gateway for login).

**Why:** the brother who owns the site day-to-day is non-technical. He needs a form-based editor, not raw file editing — Decap CMS gives him a login at `/admin` where he edits content through fields, which commits to git and triggers a Netlify rebuild. Plain static HTML or a framework without a CMS layer was rejected for this reason.

## Structure

- `src/_data/pages/*.yaml` — page-organised editorial content, including all headings, subtitles, body text, photos, contact/social links, and musician bios — edited via Decap's "Pages" file collection.
- `src/_data/settings.yaml` — global ensemble name and tagline — edited via Decap's "Site Settings" file collection.
- `src/content/events/*.md` — one markdown file per concert — edited via Decap's "Events" folder collection. Seeded with the real Cambridge cantatas event plus one placeholder event. Front matter is `title`, `event_date`, `venue`, `ticket_url`, `past_performance`, body = description.
- `src/_data/media.yaml` — YouTube video IDs + gallery photo list — edited via Decap's "Media" file collection.
- `src/images/uploads/` — where photos uploaded through the CMS land; `src/images/stock/` has free Pexels stock photos (chamber music/baroque instruments) standing in for real ensemble photos — swap for real photos via the CMS when available.
- `src/js/reveal.js` — IntersectionObserver scroll-fade-in effect (staggered for lists/grids), respects `prefers-reduced-motion`.
- Single scrolling page (`src/index.njk`): Hero → About → Events → Media → Contact. Concert-hall brown/mahogany palette (ivory `#f3ead9` bg, mahogany `#2b1d14` ink, brick-red `#7a2e1d` accent) with Playfair Display headings + Source Serif 4 body text. Hero itself is plain and static — single background image, `<h1>`/tagline over a dark gradient, **no entrance animation on the hero.**
- `src/_includes/dev/intro.njk` — the first-visit homepage introduction, included on the homepage in both local and production builds.

## First-visit homepage introduction (made public 2026-08-18)

The homepage shows a short first-visit introduction using the supplied dark SVG logo and a subtle **Welcome** message on the same paper-coloured canvas. It is included in both local and production builds.

How it works:
- The SVG is inlined locally for the prototype and revealed with two smooth clipped draw-like sweeps while descending gently. The red artwork appears first, followed by the black artwork in a left-to-right sweep; the letters are treated as groups rather than individual strokes for a calmer result.
- The overlay is included on the Home route in both development and production builds. Other routes never receive its markup, styles, or script.
- It shows once per browser session using `sessionStorage` key `les-acolytes-intro-seen-v1`, dismisses on click, keypress, scroll, or touch, and runs for about 1.8 seconds before fading away.
- Adding `?intro` to the homepage URL replays it without clearing session data.
- To disable the introduction without removing it, set `INTRO_ENABLED` to `false` near the top of `src/_includes/dev/intro.njk`.
- Visitors who prefer reduced motion bypass it completely, and JavaScript failure leaves the normal homepage visible because the intro is hidden by default.

The previous inactive `src/js/intro.js` implementation was removed.

## Hero animation history — don't re-propose without explicit request

Several *hero* entrance effects were tried and all rejected: fade+scale on scroll, a two-panel sliding "curtain" split (looked like a slideshow transition, visible seam), a fade-dominant version with drift/blur/easing, a solid-overlay crossfade, and an earlier plain timed splash screen ("not good, lets go back to no landing page"). The signature intro above was then requested explicitly, with ericclapton.com as the reference — it supersedes that earlier splash rejection, but the hero underneath stays plain and static. If asked to make the hero itself more dynamic, ask what specifically is wanted rather than retrying any of the above.

## CMS decisions (2026-07-31)

The Decap panel existed from the start but had never been opened by anyone, which had produced two misconceptions worth not re-deriving: that media couldn't be added/removed (it always could — list widgets ship with Add/×/reorder), and that the panel required Netlify. Now testable locally: `npm run cms` (decap-server) alongside `npm start`, `local_backend` in `src/admin/config.yml`, port 8082 via `.env` because Eleventy's dev server holds 8081.

- **Staying on Netlify**, decided deliberately. The `github` backend would work on GitHub Pages but needs a GitHub account per editor plus a self-hosted OAuth proxy — unacceptable for non-technical editors. Rationale and the migration path are in `README.md`. Netlify Identity was slated for deprecation then reprieved in Feb 2026; staying, but unmaintained.
- **Bug found and fixed:** the Date field used `widget: "date"`, which Decap 3 removed — it rendered "No control for widget 'date'", so an event's date was never editable. It's `widget: "datetime"` with `time_format: false`.
- **Event schema changed.** `date` + `display_date` (same date entered twice, in two formats, guaranteed to drift) collapsed into a single `event_date`, formatted for display by the `eventDate` filter in `.eleventy.js`. Renamed off `date` because Eleventy treats that as reserved page metadata. `isoDate()` there normalises both the quoted string the old files used and the unquoted YAML date the CMS writes — both paths are exercised and work.
- **Past events auto-hide** via the collection filter in `.eleventy.js`. Caveat: "today" is *build time*, so an event drops off at the next build, not at midnight. Every CMS save triggers a build, so it self-corrects in practice; exact behaviour would need a daily scheduled build hook on Netlify.
- **Event descriptions render** (`src/index.njk`, `.event*` rules in `style.css`). The obsolete Event Image CMS field was removed because event photos are no longer displayed.
- **Identity widget added to `base.njk`.** Invite and password-recovery emails land on the homepage with a `#token`, not on `/admin/` — without the widget there, invite links silently do nothing. The signature intro already skips when a hash is present, so the two don't collide.
- **Page CMS fields corrected.** The About collection now exposes only its own page fields, including the Markdown `content_body`. The Programmes collection exposes the three curated programme cards, their editable/deletable piece lists and optional intervals, the nine-item repertoire list, and the bespoke-programme contact fields.
- Deliberately **not** done: editorial workflow (draft/review branches — too much concept for one editor), a styled preview pane (Decap's unstyled default is turned off via `editor: preview: false`), `logo_url` (Decap renders it full-size; the hero photo swamped the login screen — needs a proper small wordmark), and image optimisation on upload (phone photos will bloat the repo; `eleventy-img` is the eventual answer).
- Dead `src/_redirects` passthrough removed from `.eleventy.js` — the file never existed.

## Status as of 2026-07-31

Site building locally (`npm start` — run `npm install` first, `node_modules` is not committed). Repo now has a GitHub remote (`git@github.com:JamesHLS/LesAcolytes.git`) and `main` tracks `origin/main`, so next-step 1 is done. `site_url` in `src/admin/config.yml` points at `https://les-acolytes.netlify.app`, so steps 2 and 4 look done too. **Unverified from inside the repo:** whether Netlify Identity + Git Gateway are enabled and whether the brother has been invited (steps 3 and 5).

Real content in place for: About bio, media (two Marin Marais performance videos and one Jean-Féry Rebel recording embedded), member lineup (Andrew Taheny - violin, Billy Hui - flute, Timothy Lin - viola da gamba, Edward Campbell-Rowntree - harpsichord, no founder framing). Programme cards remain clearly labelled placeholders for CMS editing. Photos are still stock/placeholder (Pexels).

## Next steps

Steps 1, 2 and 4 of the original list (GitHub, Netlify, `site_url`) are done. Remaining:

1. In Netlify: enable Identity → set registration to Invite only → enable Git Gateway → invite the brother's email. Written out with menu paths in `EDITING.md`.
2. Swap placeholder text/photos/YouTube IDs for real content via the CMS.

Step 1 happens outside a Claude session (needs the user's Netlify account), so check rather than assume it's been done — there's no way to tell from the repo.
