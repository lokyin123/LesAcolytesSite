---
name: Les Acolytes
description: A calm, editorial website that presents French and French-adjacent repertoire with warmth and contemporary digital clarity.
colors:
  ink: "#241F20"
  paper: "#fffcf5"
  soft-white: "#fafafa"
  muted-text: "#6B6061"
  clay: "#e68665"
  sage: "#8bb19a"
  sand: "#ded2ba"
  blue: "#b7c5d2"
  rose: "#ecde79"
typography:
  wordmark:
    fontFamily: "Major Mono Display, monospace"
    fontWeight: 400
    lineHeight: 1.08
  display:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(2.7rem, 6.3vw, 5.4rem)"
    fontWeight: 500
    lineHeight: 1.08
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.1688rem"
    fontWeight: 400
    lineHeight: 1.6
  interface:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSizeScale: 1.15
    fontWeight: 550
    lineHeight: 1.6
rounded:
  square: "0"
  circle: "50%"
  pill: "999px"
spacing:
  compact: "0.6rem"
  page-gutter: "1.5rem"
  section-min: "3rem"
  section-max: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "19px"
    padding: "0.8rem 1.2rem"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "19px"
    padding: "0.8rem 1.2rem"
  circular-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "3rem"
---

# Design System: Les Acolytes

## Overview

**Creative North Star: "The Open Modern Rehearsal Room"**

The site should feel like entering a calm working space shared by serious musicians: open, direct, cultured, and welcoming. Its modernity belongs to the digital experience—clarity, sleek execution, smooth navigation, and responsive interaction—not to any claim about the ensemble's approach to performing the music.

The incumbent system is editorial and image-led. Large split compositions alternate real photography with a photo-led palette of clear clay, sage, sand, blue, and yellow-rose fields, while strong typography and generous spacing let the material breathe. The experience is restrained rather than austere, and professional without borrowing the visual or verbal habits of corporate and technology marketing.

The current palette and straight-edged panel construction are implemented facts, not permanent brand commitments. Future exploration may replace them after user confirmation. Motion may become smoother and more continuous, but should remain calm, purposeful, performant, and respectful of reduced-motion preferences.

**Key Characteristics:**

- Contemporary digital clarity paired with the openness of a rehearsal room.
- Large photography, generous breathing room, and legible editorial hierarchy.
- Professional, friendly, and musically serious without becoming sales-led.
- Restrained interaction that communicates state clearly.
- No corporate marketing language, technology-marketing tropes, or historical pastiche.

## Colors

The incumbent palette combines green-charcoal ink and a clean warm-white paper with clay, sage, sand, blue, and yellow-rose panels selected to respond to the ensemble photography. These values describe the current site and remain open to deliberate revision.

### Primary

- **Ink**: Primary text, dark media sections, footer surfaces, borders, and strong controls.

### Secondary

- **Clay, Sage, Sand, Blue, and Rose**: Alternating section and profile surfaces that provide quiet differentiation without vivid saturation.

### Neutral

- **Warm Paper**: Default page background and light-on-dark foreground.
- **Soft White**: Slightly brighter card surface.
- **Muted Text**: Supporting copy and secondary labels.

**The Evidence Rule.** Treat the current palette as evidence of the incumbent identity, not an immutable instruction; palette replacement requires user confirmation.

## Typography

**Display Font:** Bricolage Grotesque (with Arial and sans-serif fallbacks)  
**Body Font:** Spectral (with Georgia and serif fallbacks)  
**Interface Font:** Manrope (with Arial and sans-serif fallbacks)  
**Wordmark Font:** Major Mono Display (with monospace fallback)

**Character:** The four-part type system separates identity, expression, reading, and interface work. Expressive sans-serif headings give the site contemporary clarity; Spectral carries substantive editorial reading; Manrope keeps navigation and metadata precise; Major Mono Display is reserved for the Les Acolytes wordmark.

### Hierarchy

- **Wordmark** (400, context-dependent sizing, 1.08): Brand only, with a subtle contextual stroke in the header and footer.
- **Display** (500, `clamp(2.7rem, 6.3vw, 5.4rem)`, 1.08): Primary page and hero titles.
- **Headline** (500, `clamp(1.8rem, 3.6vw, 3.6rem)`, 1.08): Section headings and major content divisions.
- **Supporting heading** (500, `clamp(1.215rem, 2.16vw, 2.25rem)`, 1.08): Event titles and smaller content headings.
- **Body** (400, 1.1688rem base, 1.6): Long-form biographies, articles, and descriptive copy.
- **Interface** (500–650, 115% of the original role scale): Navigation, metadata, labels, event facts, and short panel summaries. Button text is independently set to 1rem; eyebrow and series labels use a 116% scale.
- **Eyebrow** (interface face, small uppercase, wide tracking): Sparse contextual labels above headings.

**The Four Roles Rule.** Keep wordmark, expressive heading, substantive reading, and interface typography distinct; do not collapse every role into one face.

## Layout

The desktop system is built around full-width split compositions, alternating image and colour, with a content maximum of 1360px for conventional sections. Hero and landing panels commonly use equal columns; musician profiles use a 30/70 portrait-to-biography split and alternate direction. Generous responsive padding uses fluid clamps rather than a rigid spacing ladder.

At 900px, split panels stack and imagery receives a stable responsive height. At 650px, navigation becomes a full-screen overlay and grids collapse to one column where needed. Media carousels retain horizontal interaction and use scroll snapping. Article pages move from a sticky two-column composition to a natural single-column reading order.

The current split panels meet at straight edges. This is descriptive, not a prohibition: future shape exploration is allowed after user confirmation and must preserve calm hierarchy and image integrity.

## Elevation & Depth

The incumbent system is flat and uses tonal contrast, fine one-pixel dividers, image cropping, and full-bleed sections instead of decorative shadows. The sticky header adds a restrained backdrop blur. The lightbox alone uses a dark translucent overlay to establish modal depth.

**The Flat-at-Rest Rule.** Default surfaces remain visually quiet; interaction and hierarchy should not depend on ornamental drop shadows.

## Shapes

Large content surfaces and cards currently use square corners and straight boundaries. Circular geometry is reserved for compact icon controls and social icons, while slider indicators use pill shapes. Fine borders establish separation without enclosing every section.

This shape vocabulary is open to evolution. Curves or softened transitions may be explored through live variants after explicit user approval; they should not become decorative motifs without a structural purpose.

## Components

### Buttons

- **Shape:** Rectangular with clearly softened `19px` corners and a one-pixel Ink border.
- **Primary:** Ink background, Warm Paper text, and compact `0.8rem 1.2rem` padding.
- **Hover / Focus:** Inverts to a transparent background with Ink text over 250ms.
- **Text links:** Underlined with restrained spacing and inline SVG arrows where directional meaning is needed.

### Cards / Containers

- **Corner Style:** Square in the incumbent implementation.
- **Background:** Soft White, Warm Paper, Sand, or another quiet panel tone according to context.
- **Shadow Strategy:** No decorative shadow at rest.
- **Border:** Fine translucent Ink dividers, often used as one-pixel grid gaps.
- **Internal Padding:** Fluid padding, typically between roughly 2rem and 4rem for cards.

### Navigation

Desktop navigation uses compact Manrope labels on a sticky Warm Paper header. The current route is marked with an inset underline. Mobile navigation becomes a full-screen Ink panel, slides in horizontally, traps focus, locks document scrolling, and restores focus when closed.

### Circular Controls

Carousel and lightbox controls are 3rem circles with centred inline SVG icons, one-pixel borders, and inverted hover/focus states. Disabled controls reduce opacity while retaining their footprint.

### Split Panels

Photography and coloured copy panels form the main compositional language. Images use controlled cropping and a subtle hover scale, while titles shift slightly and extend a fine underline to communicate clickability.

### Carousels and Lightbox

Media and past-event carousels use scroll snapping, arrow controls, and dot-to-pill position indicators. The gallery lightbox preserves image proportions, supports keyboard dismissal and focus restoration, and removes scale motion for reduced-motion users.

## Do's and Don'ts

### Do:

- **Do** preserve clear separation between wordmark, heading, reading, and interface typography.
- **Do** use real ensemble photography and allow imagery enough scale to carry the experience.
- **Do** make interaction smooth, purposeful, and visibly responsive while maintaining a calm tempo.
- **Do** retain keyboard focus, semantic controls, meaningful alternative text, and reduced-motion behaviour.
- **Do** treat the current palette and panel geometry as starting evidence that may be deliberately revisited with user confirmation.

### Don't:

- **Don't** make the site resemble a corporate or technology marketing funnel.
- **Don't** use historical pastiche to communicate the repertoire.
- **Don't** imply that contemporary website execution describes or modernises the ensemble's musical approach.
- **Don't** fabricate biographies, performance claims, reviews, or programme details.
- **Don't** change design or content before explaining the proposal and receiving explicit user confirmation.
