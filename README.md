# Open Space Day — Evil AI Decks

Quirky, on-brand [Slidev](https://sli.dev/) decks for Itenium's open space day AI
track. Theme: evil AIs (the glowing red eye, the rogue mainframe, the polite
murder-bot) — dark, CRT, red-glow terminal.

## Start

```bash
bun install
bun run dev        # opens "More AI Sessions?" at http://localhost:3030
```

Presenter mode: <http://localhost:3030/presenter>

## Decks

| Deck             | Command              | Theme                      |
|------------------|----------------------|----------------------------|
| More AI Sessions | `bun run dev`        | `theme/` (evil AI)         |
| Shovelware       | `bun run shovelware` | `themes/synthwave`         |
| Open Space       | `bun run open-space` | `themes/openspace` (light) |

**Open Space** is the open-space-day seed-topics deck (sticky-note skin, light).
Midjourney art lives in `decks/open-space/public/` (`cover.png`, `motifs.png`).

**Shovelware** is the lightning talk *"Where Is All the Shovelware?"* — synthwave
neon-grid theme. Story/facts brief: [docs/shovelware-brief.md](docs/shovelware-brief.md).

More decks drop under `decks/<name>/slides.md` — point `slidev` at the deck's
`slides.md` (or add a script to `package.json`).

## Theme

One local Slidev theme in `theme/`, shared by every deck (`theme: ../../theme`).
Pure CSS — no images required to run.

| Path                      | What                                                      |
|---------------------------|-----------------------------------------------------------|
| `theme/layouts/`          | `cover` · `default` (terminal) · `section` · `statement` · `end` |
| `theme/styles/`           | the evil CRT aesthetic — colors, fonts, scanlines         |
| `theme/components/`       | `HalEye` — pure-CSS glowing red eye                       |
| `theme/global-top.vue`    | scanline + vignette overlay on every slide                |

### Layout cheatsheet

```yaml
layout: cover        # title slide, glowing eye
layout: default      # terminal window — the workhorse
layout: section      # divider; props: codename, persona
layout: statement    # one big centered line
layout: end          # outro with SHUTDOWN? [Y/N]
```

## Images (optional)

The theme runs without art. To drop in generated backgrounds, see
[EVIL-MIDJOURNEY.md](EVIL-MIDJOURNEY.md) — put the `.jpg`s in the deck's public
folder (`decks/<name>/public/`, which Slidev serves at `/`) and they appear
automatically: `cover.jpg` / `section.jpg` / `shutdown.jpg` as backdrops, and the
per-session banners (`the-judge.jpg`, …) in the strip at the bottom of each session
slide via the `banner:` frontmatter key.

## Build / export

```bash
bun run build      # static site → dist/
bun run export     # PDF (needs playwright-chromium)
```
