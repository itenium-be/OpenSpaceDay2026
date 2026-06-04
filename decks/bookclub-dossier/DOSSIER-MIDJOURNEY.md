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
