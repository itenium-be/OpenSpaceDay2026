# Dossier — Midjourney Prompts

Optional art for the **bookclub-dossier** deck. The deck runs fine without it
(pure-CSS green-CRT fallback). Generate, name, drop into `public/` — it appears
automatically. Slidev serves `public/` at `/`, and the cover CSS already loads
`/cover.jpg` behind a dark green gradient.

## Aesthetic

Not the red evil-AI theme — this deck is a **green phosphor surveillance
terminal**. Think: dark ops room, CRT scanlines, radar-green glow, wireframe
data, heavy haze.

**Rules of thumb**

- **Green phosphor only** — no red/blue. Reference: old monochrome CRT, night-vision, radar.
- Keep the **centre-left dark** — the title and boot text overlay there. The CSS dims it, but compose with negative space.
- **No text/UI labels in the image** — MJ mangles them and the slide supplies the words.
- Backgrounds are *mood*, not subject — they must never fight the foreground.
- Add `--style raw` to the photoreal ones for less MJ gloss.

---

## `cover.jpg` — the title backdrop (wired in CSS)

```
[Editorial / cinematic] a dark abandoned surveillance command room lit only by
green phosphor glow, a towering wall of dead CRT monitors flickering with faint
wireframe maps and scanlines, a single green radar sweep crossing the haze,
drifting dust, deep shadow and negative space across the centre-left, monochrome
green night-vision palette, no text, low ominous camera angle, volumetric haze,
hyper-detailed --ar 16:10 --style raw --v 7
```

Variants:

```
1. [Close-up] extreme close-up of a single curved CRT screen glowing green, fine
   scanlines and phosphor bloom, a faint wireframe globe rotating, reflections in
   black glass, pitch-dark room, negative space left --ar 16:10 --style raw --v 7

2. [Abstract] a vast black void filled with a faint green vector grid receding to
   a horizon, scattered glowing data nodes and a slow radar sweep, CRT scanlines
   over everything, heavy negative space left --ar 16:10 --v 7

3. [Wide] a dark cold-war operations bunker, rows of green oscilloscope and radar
   screens along the walls, a lone analyst silhouette, shafts of green light
   through haze, cinematic, foreground in deep shadow --ar 16:10 --style raw --v 7
```

---

## Optional extras

Drop in to extend the look; not wired yet (add `url(/<file>)` to the matching
`.wrap` in `slides.md` the same way `cover.jpg` is wired).

| File           | Used on        | Prompt |
|----------------|----------------|--------|
| `manifest.jpg` | manifest slide | an overhead dark grid of dim green data cells like a terminal readout, faint scanlines, mostly black negative space, monochrome green, no text --ar 16:10 --v 7 |
| `vote.jpg`     | ballot slide   | a dark control console with one glowing green AUTHORIZE key under a protective cover, phosphor glow, CRT scanlines, deep shadow, no text --ar 16:10 --style raw --v 7 |

---

## Header-band art — one per book (slides #01–#06)

Wide banner behind each book's header (the `CATEGORY · ACQUIRED · title · subject`
strip). The deck loads these from `public/` via the `--hdr` variable on each
`.top`; until they exist, the header is a plain dark panel (fine).

**Compose for the band:** very wide and short, **left third dark / empty** (the
title sits there — the CSS dims it further), the subject toward the right. Same
green-phosphor surveillance palette, `--ar 16:5`, no text in the image.

| # | File                   | Book | Prompt |
|---|------------------------|------|--------|
| 01 | `hdr-alignment.jpg`     | The Alignment Problem | a wide dark command room, a towering humanoid AI silhouette tethered by taut glowing green guide-wires to a small human operator far below, a motif of cold steel scales balancing, phosphor-green wireframe overlays, CRT scanlines, drifting haze, heavy negative space on the left --ar 16:5 --style raw --v 7 |
| 02 | `hdr-chip-war.jpg`      | Chip War | a wide dark war-room map table glowing green, a single silicon wafer at the right fracturing along glowing geopolitical borders, a slow radar sweep, monochrome green night-vision, scanlines, empty dark space on the left --ar 16:5 --style raw --v 7 |
| 03 | `hdr-philosophy.jpg`    | A Philosophy of Software Design | a wide dark blueprint void, tangled green wireframe modules on the right resolving into clean interlocking geometry, depth and order emerging from complexity, phosphor glow, fine scanlines, negative space left --ar 16:5 --v 7 |
| 04 | `hdr-kill-it.jpg`       | Kill It with Fire | a wide dark server room, an ancient mainframe on the right overgrown with dusty cables and faint green embers, a tower mid-decommission, monochrome green CRT haze, scanlines, deep empty shadow on the left --ar 16:5 --style raw --v 7 |
| 05 | `hdr-cointelligence.jpg`| Co-Intelligence | a wide dark scene, a human hand and a robotic hand meeting over a glowing green holographic interface on the right, partnership and collaboration, phosphor wireframe, soft scanlines, negative space on the left --ar 16:5 --style raw --v 7 |
| 06 | `hdr-snakeoil.jpg`      | AI Snake Oil | a wide dark scene, a carnival snake-oil stall on the right reimagined as a glowing green server rack peddling too-good promises, a skeptical magnifying lens hovering, monochrome green, CRT scanlines, empty dark space on the left --ar 16:5 --v 7 |

Each: append `--ar 16:5 --v 7` (add `--style raw` to the photoreal ones).
