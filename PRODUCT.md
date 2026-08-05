# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The website serves three equally important groups:

- people considering attending a Les Acolytes performance;
- promoters, venues, festivals, and potential collaborators considering an enquiry or booking;
- anyone interested in learning about the ensemble, its musicians, repertoire, recordings, and work.

The day-to-day editor is non-technical and needs to update routine content through a form-based interface rather than source files.

## Product Purpose

The website is the public home of Les Acolytes. It should present the ensemble professionally while remaining approachable and friendly, helping visitors understand who the musicians are, what they perform, where they can be heard, and how to contact them.

Success means giving the ensemble a credible and distinctive public presence. Turning relevant visits into genuine enquiries is important, but the experience must not feel like a conventional marketing or sales website.

## Positioning

Les Acolytes is defined primarily by its dedication to French and French-adjacent repertoire and by its approach to performance. Cambridge is part of the ensemble's history, but should not be treated as its defining identity or primary differentiator.

The exact language describing the ensemble's performance approach remains an open content decision and must not be invented without the ensemble's input.

## Operating Context

Visitors use the site to:

- discover the ensemble and its musicians;
- explore programmes, recordings, photography, and news;
- find upcoming performances and review past work;
- assess the ensemble for a possible booking, festival, venue, press, or collaboration enquiry;
- make contact through email or the ensemble's social channels.

Routine updates are made through Decap CMS at `/admin/`. Content changes are stored in Git and deployed through Netlify. The editor manages site settings, musicians, events, news, videos, photographs, contact details, and social links without editing code.

## Capabilities and Constraints

- The public site has dedicated Home, About, Musicians, What's On, Programmes, Media, News, and Contact routes.
- Events automatically move from upcoming to past after their date at the next site build, with a manual past-performance override available.
- News articles are individual Markdown entries with their own pages.
- Media includes CMS-managed YouTube recordings and a photographic gallery.
- Site content must remain manageable by a non-technical editor through Decap CMS.
- The implementation is a static Eleventy site deployed through Netlify, with Netlify Identity and Git Gateway intended to provide editor access.
- Public claims, biographies, programme details, testimonials, credentials, and descriptions of performance practice must not be fabricated. Placeholder material should remain clearly identifiable until the ensemble supplies final copy.
- Impeccable may analyse the interface and recommend changes, but it must not change the site's design or content until the user has reviewed the proposed approach and explicitly confirmed it.
- Once the user explicitly approves a task, that approval covers all necessary in-scope file edits; do not request separate approval for each file unless a genuinely new design or content decision appears.
- Whether Netlify Identity, Git Gateway, and the editor invitation have been completed remains unverified from the repository.

## Brand Commitments

- The ensemble name is **Les Acolytes**.
- The repertoire emphasis is French and French-adjacent music, including French Baroque cantatas and chamber music.
- The public voice should be professional, approachable, friendly, informed, and free from aggressive sales language.
- Cambridge roots should be de-emphasised rather than used as the principal identity or selling point.
- Real ensemble photography and recordings should represent the group wherever suitable material exists.

## Evidence on Hand

- Real ensemble and individual musician photography is stored under `src/images/GROUPSHOTS/` and `src/images/IndividualsGit/`.
- The named musicians and instruments are recorded in `src/_data/settings.yaml`.
- Real performances are recorded in `src/content/events/`, including Brighton Early Music Festival appearances and previous performances in Cambridge and London.
- Genuine performance recordings are listed in `src/_data/media.yaml`.
- The current news articles, musician biographies, portions of the About copy, contact details, some links, and some programme material are placeholders. Future work must not treat them as evidence or silently turn them into factual claims.
- No testimonials, reviews, awards, audience figures, or other third-party proof have been confirmed.

## Product Principles

1. Present musical substance clearly, without making the site feel promotional or sales-led.
2. Serve audiences, presenters, collaborators, and curious visitors with equal care.
3. Let French and French-adjacent repertoire—and the ensemble's confirmed account of its performance approach—lead the story.
4. Keep routine publishing safe and understandable for a non-technical editor.
5. Prefer honest gaps and clearly labelled placeholders over invented specificity.
6. Keep design and content decisions under the user's control: propose and explain first, then implement only after explicit confirmation.

## Accessibility & Inclusion

Content editing includes alternative-text fields for imagery. Public interactions should remain usable by keyboard and assistive technology, respect reduced-motion preferences, and preserve descriptive labels for visual controls and media.
