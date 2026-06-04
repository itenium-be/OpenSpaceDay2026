# Evil AI — Midjourney Prompts

Optional art for the theme. The deck runs fine without any of it (pure-CSS
fallback). Drop a file in and it appears automatically.

## How it wires up

The layouts read images from the deck's public folder
(`decks/more-ai-sessions/public/`, which Slidev serves at `/`) by filename.
Generate, name, drop in — done. The scanline + vignette overlay sits on top
automatically, so anything you generate instantly looks like it's on a dying CRT.

| File                  | Used by              | Aspect | `--ar`  |
|-----------------------|----------------------|--------|---------|
| `public/cover.jpg`    | `cover` layout       | 16:10  | `16:10` |
| `public/section.jpg`  | `section` dividers   | 16:10  | `16:10` |
| `public/shutdown.jpg` | `end` layout         | 16:10  | `16:10` |

Per-session portraits (below) are extras — reference them in a slide with
`![](/the-judge.jpg)` if you want one on a session slide.

**Rules of thumb**

- Keep the **left/centre darker** — text overlays there. The CSS already dims it,
  but compose with negative space.
- **No text in the image** — Midjourney mangles it and the slide supplies the words.
- Backgrounds are *mood*, not subject — they should never fight the foreground.
- Add `--style raw` to the photoreal ones for less Midjourney "gloss".
- Avoid named characters (HAL, Skynet, GLaDOS…) — describe the **archetype**;
  it dodges MJ's filters and the IP.

---

## Heroes (pick one each)

### `cover.jpg` — the title backdrop

**Chosen — full machine-apocalypse vibe:**

```
[Editorial / cinematic] a menacing chrome robotic endoskeleton with an exposed
metal skull and burning red eyes rising from a battlefield of rubble and shattered
concrete, a field of crushed metallic skulls underfoot, glowing embers and drifting
smoke, cold blue moonlight clashing with the red eye-glow, war-torn dystopia,
hyper-detailed brushed steel, volumetric haze, low menacing camera angle, deep
shadow across the left third for the title --ar 16:10 --style raw --v 7
```

Variants if you want options:

```
1. [Close-up] extreme close-up of a single chrome robotic skull, jaw of steel
   teeth, one blazing red optic, fire reflected in polished metal, pitch-black
   background, embers, negative space on the left --ar 16:10 --style raw --v 7

2. [Wide] a legion of red-eyed metal endoskeletons marching through a ruined city
   at night, searchlights and smoke, silhouettes against burning sky, cinematic
   dystopia, foreground in deep shadow --ar 16:10 --style raw --v 7

3. [Abstract] a field of black television static and scanlines, a single red point
   of light coalescing into a robotic iris, CRT glitch, pure void, negative space
   left --ar 16:10 --v 7
```

### `section.jpg` — chapter dividers

```
[Editorial photo] vast dark void with a faint red grid horizon, a distant
monolithic AI silhouette, drifting haze and scanlines, heavy negative space on
the left for text, ominous, cinematic --ar 16:10 --style raw --v 7
```

### `shutdown.jpg` — the outro

```
[Abstract] a single dying red light fading to black, power-down, fine CRT
scanlines dissolving, lonely cold void, after-image glow --ar 16:10 --v 7
```

---

## Persona banners — bottom strip (one per session)

One wide image per session slide, filling the empty band at the bottom of the
terminal. **Wide cinematic banner** — compose horizontally, keep the extreme
left/right edges dark and low-detail (the strip crops top/bottom a little). Drop
each in `public/` under the filename below; it loads on the matching session slide.

`--ar 16:5 --v 7`, add `--style raw` for the photoreal ones.

| Session         | File                | Prompt (wide scene) |
|-----------------|---------------------|---------------------|
| 01 Evals        | `the-judge.jpg`     | a wide dark tribunal hall, a monolithic AI judge with a single red scanning eye looming over rows of glowing data tablets weighed on cold steel scales, austere, shafts of red light, cinematic --ar 16:5 --v 7
| 02 RAG          | `the-librarian.jpg` | an endless dark digital library stretching wide, towering shelves dissolving into rivers of red data, a spectral machine presence drifting between them reading --ar 16:5 --v 7
| 03 Bake-Off     | `the-gauntlet.jpg`  | three identical server monoliths lined up in a dark arena — one white-hot, one ice-blue, one pulsing red — energy arcing between them, wide face-off --ar 16:5 --v 7
| 04 Cage Match   | `skynet-royale.jpg` | four robotic arms duelling inside a long neon cage, sparks and floating holographic code streaming across the frame, dark stadium, wide shot --ar 16:5 --v 7
| 05 EU AI Act    | `the-warden.jpg`    | a towering bureaucratic AI warden behind a wall of red regulatory seals, a wide panopticon of glowing eyes over a cold blue chamber, oppressive --ar 16:5 --v 7
| 06 Diffusion    | `dream-engine.jpg`  | a wide sweep of swirling television static resolving left-to-right into a sharp photographic face, red rim light, dark — the moment noise becomes image --ar 16:5 --v 7
| 07 Text-to-SQL  | `the-oracle.jpg`    | a wide dark shrine, a glowing red database crystal at center whispering, plain words on the left turning into streams of structured light flowing right --ar 16:5 --v 7

Each: append ` --ar 16:5 --v 7` (add `--style raw` to taste).

---

## Overview banner — the system scan

The intro slide ("System scan: the track is online") gets the same top-banner
treatment. It should read as *surveying the whole track and finding the holes* —
mostly-online with a few dark gaps.

| Slide       | File                | Prompt (wide scene) |
|-------------|---------------------|---------------------|
| 02 Overview | `system-scan.jpg`   | a wide dark mission-control war room, a vast radar grid sweeping across a towering wall of server nodes, most cells glowing alive in deep red while a few cold dark gaps are punched out of the array, a single bright red scan-line crawling left to right, austere, cinematic, heavy negative space --ar 16:5 --v 7 |
