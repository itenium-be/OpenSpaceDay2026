# Shovelware deck — shared fact brief

Source of truth for the **"Where Is All the Shovelware?"** lightning talk.
Three themes render this SAME story; only the chrome/flourishes differ.

Speaker: **Wouter Van Schandevijl** (itenium). Personal retrospective.
Date context: open space day, mid‑2026. "Today" = 2026‑06‑04.

## Thesis / spine — "Guilty as charged" (played for laughs)

The fear in 2025/2026: AI lets people churn out a flood of low‑quality
**shovelware**. The talk leans in: *"You want shovelware? Here's my pile."* —
parade the fleet of projects shipped since the **November 2025 inflection
point**, then reveal they're actually real, tested, modern engineering. The
capstone twist: even the OS got refactored — goodbye Windows & PowerShell.

Tone: self‑deprecating, fun, fast. NOT a corporate brag. The joke is the frame;
the payload is "this is leverage, not slop."

## Slide beats (~8 slides, lightning ~5–10 min)

1. **Cover** — "Where Is All the Shovelware?" · subtitle hook (e.g. "A confession, in 8 slides").
2. **The accusation** — The fear: AI = a flood of slop. The inflection point: **November 2025** (Claude Code / agentic coding got good). Set up the worry.
3. **Guilty as charged** — The turn: "…you want shovelware? Here's my pile." Reveal the count — ~9+ repos shipped since Nov 2025.
4. **The heist** (confac modernization) — The *real* engineering. This isn't slop. (details below)
5. **The fleet** — the parade of projects, each "a game on the CD." (list below)
6. **Future: Perch** — the next one, teased.
7. **Goodbye Windows & PowerShell** — WSL friction won. The OS got refactored too.
8. **End** — Verdict: not shovelware — **leverage**. (or land the gag.)

## The fleet (projects shipped since the Nov 2025 inflection)

| Project          | What it is                                                                                  | Stack            |
|------------------|---------------------------------------------------------------------------------------------|------------------|
| **Scout**        | Self‑hosted deep‑research engine for Claude Code. Open a GitHub Issue → cited research published to a Jekyll site via GitHub Pages. | Shell · Python · Docker |
| **Atlas**        | Hosts the research Scout produces (the published site).                                      | Jekyll / HTML    |
| **Compass**      | Layouts for Atlas.                                                                           | HTML · CSS · JS  |
| **Meridian**     | Self‑hosted scroll‑driven memory timeline. Drop in photos → a beautiful scrollable timeline with an animated map of your travels. | TypeScript       |
| **CoderDojo‑Zombies** | A Python zombie game — built to teach kids at CoderDojo.                                | Python           |
| **licenser**     | Generate your license file from package.json; keep it updated each year.                    | Node             |
| dotfiles swarm   | `bash-config`, `Git-Config`, `perch-config`, `perch-gallery` — config managed in git.       | Shell / config   |

Scout + Atlas + Compass are a **trio** (engine → host → layouts) — group them.

## The heist — confac modernization (itenium‑be/confac, all REAL commits)

confac = itenium's invoicing app. The legacy React/Node stack got dragged into
2026. Headline burst: **22–23 Feb 2026**. Verified commit landmarks:

- **create‑react‑app → Vite** ("switch to vite", 2026‑02‑22)
- **npm → Bun** ("switch to bun", "bun all the way", "deployment to bun")
- **Jest → Vitest** ("chore: replace jest with vitest", 2026‑02‑23)
- **Kill MomentJS** ("remove MomentJS references", 2026‑02‑23)
- **TypeScript strict** — "enforce no‑explicit‑any eslint rule and eliminate all any types"; "not pinned to TypeScript 4 anymore"; Node 22
- **Dead‑code: Knip** ("fix knip error/warning", Apr 2026)
- **EOL hygiene** — "Standardize EOL: LF default, CRLF for Windows shell files" (2026‑05‑16)
- **`master` → `main`** ("main branch", 2026‑05‑02)
- **Dependency purge** — dropped superagent, numeral, bson, bodyparser; bumped multer, google‑auth, pug
- **sendgrid → nodemailer** (gmail) — earlier, 2025‑08

Broader modernization sweep Wouter also did across work repos (state as given,
lead with the confac‑verified items above for credibility): **.NET 10**, **`.slnx`
solution format**, **Directory.Build.props**, **.editorconfig (LF)**, **CI gates**,
testing / formatting / linting, upgrading component libraries (**react‑bootstrap**),
moving off **Flow → TypeScript**, moving off **create‑react‑app**.

Framing: this is the opposite of shovelware — it's removing entropy, adding
test/lint/CI nets, deleting dead code and dead deps.

## Goodbye Windows & PowerShell

The punchline capstone. **WSL vs Windows friction** finally tipped it — the daily
papercuts of the Windows shell (junctions, Dropbox, CRLF, PowerShell) pushed the
whole workflow to **WSL/bash**. `bash-config` is in; `PowerShell-Config` is being
left behind. Irony to mine: **Perch** is literally "**Windows‑first** dotfiles" —
even the Windows‑first tool is part of the goodbye / the last tie being managed.

## Theme conventions (how a Slidev theme works in THIS repo)

Study the existing `theme/` (the "evil AI" theme) as the reference implementation:

- `themes/<name>/package.json` — `{ "name": "slidev-theme-<name>", "keywords":["slidev-theme"], "slidev": { "defaults": { "colorSchema", "aspectRatio", "transition" } } }`
- `themes/<name>/styles/index.ts` → `import './layout.css'`
- `themes/<name>/styles/layout.css` — all the visual identity (pure CSS; no images required to run)
- `themes/<name>/layouts/*.vue` — each is `<div class="slidev-layout ..."><slot /></div>`. Provide at least: `cover`, `default`, `section`, `statement`, `end`.
- `themes/<name>/global-top.vue` — full‑slide overlay FX (optional but nice)
- `themes/<name>/components/*.vue` — auto‑imported Vue components for signature flourishes

Deck file `decks/shovelware-<name>/slides.md` sets `theme: ../../themes/<name>`
in frontmatter and contains all ~8 slides self‑contained.

Keep it **pure CSS/Vue, no new npm dependencies** (matches repo; avoids install
churn). Fonts via Slidev `fonts:` frontmatter (Google Fonts) are fine.
