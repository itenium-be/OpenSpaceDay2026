# Open Space Day — Seed-Topics Deck

**Date:** 2026-06-04
**Status:** Approved design, pending build

## Purpose

A Slidev deck for itenium's open-space day that **seeds conversation-starting
topics** to prime attendees (analysts, testers, .NET, Java, product owners) into
proposing their own sessions. The topics are starters for the marketplace wall —
**not** a fixed agenda.

This deck is separate from the existing AI track (`decks/more-ai-sessions`,
`decks/shovelware-synthwave`). Broad, all-disciplines scope; AI is just one thread.

## Decisions (locked)

| Decision        | Choice                                                              |
|-----------------|--------------------------------------------------------------------|
| Scope           | Broad / all disciplines                                             |
| Deck job        | Seed topics to inspire proposals (true open-space)                 |
| Topic flavors   | Debates, cross-role friction, craft, culture                       |
| Structure       | Compact grids + a quick open-space format explainer up front       |
| Theme           | Fresh **light**, fun/quirky/cool — **build all 3 skins**, pick one  |
| Art             | Midjourney planned; deck must run without it                        |

## Content — final 27 seed topics

Each topic = a punchy conversation-starter + small role chips ("pulls in").

### 🔥 Debates & hot takes (7)
- **Estimates: planning, or expensive theatre?** (#NoEstimates) — PO, devs, analysts
- **.NET vs Java in 2026 — does the stack even matter anymore?** — .NET, Java
- **"We do Scrum, but…" — is the ceremony worth it?** — everyone
- **AI writes the code now. What's left for us?** — everyone
- **Code review: quality gate or bottleneck?** — devs, testers
- **Should consultants say "no" to clients more often?** — everyone
- **100% coverage: discipline or delusion?** — testers, devs

### 🤝 Cross-role friction (6)
- **What does "done" actually mean?** Dev vs QA vs PO definitions collide live — all
- **The requirements telephone game: analyst → PO → dev — where do they die?** — analysts, PO, devs
- **Why do devs and testers fight about bugs?** ("works on my machine" / "that's a feature") — devs, testers
- **Handoffs: the most expensive thing we do?** — all
- **Three Amigos — does it actually work for us, or just more meetings?** — analysts, devs, testers
- **"Who owns quality?" Everyone says the team. Nobody means it.** — all

### 🛠️ Craft & skill-sharing (8)
- **Taming legacy code — where do you even start?** — .NET, Java
- **Story-splitting clinic: bring your worst epic** — PO, analysts, devs
- **Clean architecture across .NET and Java — same ideas, different idioms** — .NET, Java
- **Requirement workshops that don't suck** — analysts, PO
- **Test-strategy teardown on a real itenium project** — testers, all
- **Debugging as a learnable discipline** (not luck) — devs
- **CI/CD horror stories — and how we fixed them** — devs, testers
- **Reading someone else's code: a skill nobody teaches** — devs

### 🌱 Culture & ways-of-working (6)
- **Tech debt: who decides when we pay it down?** (the politics) — all
- **How do we keep learning when clients pay for delivery?** — all
- **Onboarding: why does it take 3 months to be useful?** — all
- **Bus factor of one: breaking knowledge silos** — all
- **Which meetings would we kill tomorrow?** — all
- **The project that went wrong — failure stories & lessons** — all

## Slides (~8)

| # | Slide              | Content                                                       |
|---|--------------------|---------------------------------------------------------------|
| 1 | Cover              | *Open Space Day @ itenium* — "27 starters. Now bring your own."|
| 2 | What is open space?| 3–4 lines: agenda built by you, marketplace, sessions in parallel |
| 3 | The 2 rules        | Law of Two Feet + "whoever shows up are the right people"      |
| 4 | 🔥 Debates grid    | 7 cards + chips                                                |
| 5 | 🤝 Friction grid   | 6 cards + chips                                                |
| 6 | 🛠️ Craft grid      | 8 cards + chips                                                |
| 7 | 🌱 Culture grid    | 6 cards + chips                                                |
| 8 | End / CTA          | "Your turn — grab a marker, propose a session."               |

Category accent colors: debate=red, friction=amber, craft=blue, culture=green.

## Theme architecture — one base, three skins

Shared content renders under any of three visual skins so the user can run each
and pick. Convention follows existing themes (`themes/synthwave/`).

```
themes/openspace/            # shared LIGHT base theme
  package.json               # slidev-theme, colorSchema: light, 16/10
  styles/index.ts            # imports base.css
  styles/base.css            # structural CSS + skinnable CSS variables
  layouts/cover.vue          # title
  layouts/grid.vue           # category grid (renders slot of .os-card markup)
  layouts/end.vue            # CTA
  global-top.vue             # optional decorative overlay

decks/open-space/
  _content.md                # slides 2–8 (explainer + grids + end) — theme-agnostic markup
  sticky.md                  # entry: headmatter + cover + <style>@import skins/sticky.css</style> + src:_content.md
  arcade.md                  # entry: same, skins/arcade.css
  doodle.md                  # entry: same, skins/doodle.css
  skins/sticky.css           # vibe A — sticky-notes pinned on a wall, tilted
  skins/arcade.css           # vibe B — retro arcade pop, chunky pills
  skins/doodle.css           # vibe C — hand-drawn whiteboard, wobbly borders
  public/                    # optional Midjourney art (cover/section backdrops)
  OPENSPACE-MIDJOURNEY.md     # MJ prompt brief (3 skins → matching art)
```

**Swap mechanism:** each entry deck (`sticky.md` / `arcade.md` / `doodle.md`)
sets the theme, owns the cover slide, injects its skin via a global `<style>`
`@import`, then pulls slides 2–8 from shared `_content.md` via `src:`. The base
theme provides structure via semantic classes (`.os-grid`, `.os-card`,
`.os-card__title`, `.os-chip`, category color via `--os-cat`); skins restyle those
classes — sticky tilts cards + adds tape, arcade makes pill buttons, doodle adds
sketchy borders + marker font.

**Run:**
```
bun run open-space:sticky
bun run open-space:arcade
bun run open-space:doodle
```
(three scripts in `package.json`, mirroring the `shovelware` pattern)

After the user picks a winner, delete the two losing skins + entry files + scripts,
and rename the survivor to `slides.md` / `open-space`.

## Midjourney art (optional, deferred)

`OPENSPACE-MIDJOURNEY.md` holds prompts for cover + 4 category backdrops, one set
matched to whichever skin wins. The base theme references `/cover.jpg` and section
backdrops if present in `public/`, and degrades gracefully (pure-CSS) without them.
No art is required to build or run the deck.

## Scope guards (YAGNI)

- No per-topic detail/expansion slides — topics stay one-liners.
- No voting/scheduling tooling in the deck — that happens on the physical wall.
- No new npm deps (uses installed `@slidev/cli`).
- Art is deferred and optional; not on the build critical path.
- Three skins exist **only to choose between** — two get deleted after the pick.

## Out of scope

- Touching the existing AI-track decks or themes.
- A full open-space facilitation guide (the deck is a primer, not a handbook).
