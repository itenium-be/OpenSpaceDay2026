# Deck Launcher Landing Page — Design

**Date:** 2026-06-04
**Status:** Approved (design)

## Goal

A self-contained static landing page for this repo's Slidev decks: a grid of
cards (image + text) where clicking a card opens that deck. A lightweight,
local-first take on the `Presentations` repo's Astro index — no cloned repos,
no committed `.pptx`, no PPTX-download modal, no filters.

## Decisions

| Question        | Choice                                                         |
|-----------------|----------------------------------------------------------------|
| Index stack     | Plain static `index.html` (hand-written HTML + CSS, no framework) |
| Card data       | Hardcoded in `index.html`                                      |
| Shovelware cover| CSS-only neon-grid card (deck has no cover image)             |
| Build target    | Self-contained `dist/`, relative links — works from any host or `file://` |
| 4th deck card   | Dimmed, non-clickable "Coming soon" placeholder until it ships |
| Tests           | None (explicitly skipped by user)                             |

## Components

### 1. `index.html` (source, repo root — committed)

Hand-written HTML + CSS in the decks' dark / evil-AI aesthetic. Four
`<article class="card">` blocks:

| Card  | Deck                          | Image                          | Link                        |
|-------|-------------------------------|--------------------------------|-----------------------------|
| 1     | More AI Sessions?             | `./more-ai-sessions/cover.jpg` | `./more-ai-sessions/`       |
| 2     | Where Is All the Shovelware?  | CSS neon-grid (no img)         | `./shovelware-synthwave/`   |
| 3     | Target Dossier — Next Read    | `./bookclub-dossier/cover.png` | `./bookclub-dossier/`       |
| 4     | Coming soon                   | dimmed placeholder             | none (non-clickable)        |

- Cover images come free: each deck's `public/cover.*` lands at
  `dist/<slug>/cover.*` on build — no separate image-copy step.
- Each real card: cover, title, one line of the deck's `info` text. The whole
  card is the click target.
- Card 4 is visually dimmed with a "Coming soon" label, no `href`.

### 2. `scripts/build-all.mjs` (bun)

1. `rm -rf dist`
2. For each deck directory that exists under `decks/`:
   `slidev build decks/<slug>/slides.md --base ./ --out <abs>/dist/<slug>`
3. Copy `index.html` → `dist/index.html`

Iterating over decks present (3 today) means the unbuilt 4th deck never breaks
the build.

### 3. `package.json`

Add `"build-all": "bun run scripts/build-all.mjs"`. Existing per-deck dev
scripts (`dev`, `shovelware`, `dossier`, …) are left untouched.

## Out of scope (YAGNI)

No pptx, no GitHub Pages / CI, no filters / badges / slide-counts, no Astro,
no frontmatter parsing, no tests.

## Known caveat

Deck-internal slide navigation relies on SPA history routing; from a real host
it works. From raw `file://`, the index and first slide load but deep slide
URLs may not — acceptable, since the target is "copy `dist/` to a host."
