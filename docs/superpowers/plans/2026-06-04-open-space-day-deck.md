# Open Space Day Seed-Topics Deck — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a light, fun Slidev deck of 27 open-space seed topics, rendered under three swappable visual skins (sticky-notes / arcade-pop / doodle-whiteboard) so the user can pick one.

**Architecture:** One shared light base theme (`themes/openspace/`) provides four layouts (`cover`, `intro`, `grid`, `end`) that stamp a `skin-<x>` class onto every slide root from `themeConfig.skin`. All three skin stylesheets live in the theme, each scoped under its `.skin-*` class; only the active skin lights up. The slide *content* lives once in `decks/open-space/_content.md` (skin-agnostic) and is pulled into three thin entry decks (`sticky.md` / `arcade.md` / `doodle.md`) via Slidev's `src:` frontmatter. Each entry differs only by `themeConfig.skin`, its `fonts:`, and its own cover slide.

**Tech Stack:** Slidev 51 (`@slidev/cli`), Vue 3 SFC layouts, pure CSS skins, bun scripts. No new deps.

**Verification model:** No unit tests (it's a deck). Each task is verified by `bunx slidev build <entry.md> --out /tmp/os-build` exiting 0 (compiles all Vue/CSS/markdown). Visual review is done by the user (Wouter) — do NOT auto-screenshot or restart servers.

**Reference:** Spec at `docs/superpowers/specs/2026-06-04-open-space-day-deck-design.md` (full 27-topic list + decisions). Existing theme to mirror conventions: `themes/synthwave/`.

---

## File Structure

```
themes/openspace/
  package.json              # slidev-theme; defaults colorSchema:light, 16/10
  styles/index.ts           # imports base.css + 3 skin css files
  styles/base.css           # structure, layout, CSS vars, light palette, category colors
  styles/skin-sticky.css    # vibe A — scoped under .skin-sticky
  styles/skin-arcade.css    # vibe B — scoped under .skin-arcade
  styles/skin-doodle.css    # vibe C — scoped under .skin-doodle
  layouts/cover.vue         # title slide; stamps skin class
  layouts/intro.vue         # centered explainer slide; stamps skin class
  layouts/grid.vue          # category grid; props: cat, icon, title; stamps skin class
  layouts/end.vue           # CTA; stamps skin class

decks/open-space/
  _content.md               # slides 2-8 (2 explainer + 4 grids + CTA), skin-agnostic
  sticky.md                 # entry: headmatter(skin:sticky) + cover + src:_content.md
  arcade.md                 # entry: headmatter(skin:arcade) + cover + src:_content.md
  doodle.md                 # entry: headmatter(skin:doodle) + cover + src:_content.md
  OPENSPACE-MIDJOURNEY.md    # MJ prompt brief (optional art, deferred)
```

Modified: `package.json` (3 scripts), `README.md` (deck table row).

---

## Task 1: Base theme skeleton + layouts

**Files:**
- Create: `themes/openspace/package.json`
- Create: `themes/openspace/styles/index.ts`
- Create: `themes/openspace/styles/base.css`
- Create: `themes/openspace/styles/skin-sticky.css` (empty placeholder this task)
- Create: `themes/openspace/styles/skin-arcade.css` (empty placeholder this task)
- Create: `themes/openspace/styles/skin-doodle.css` (empty placeholder this task)
- Create: `themes/openspace/layouts/cover.vue`
- Create: `themes/openspace/layouts/intro.vue`
- Create: `themes/openspace/layouts/grid.vue`
- Create: `themes/openspace/layouts/end.vue`

- [ ] **Step 1: Create `themes/openspace/package.json`**

```json
{
  "name": "slidev-theme-openspace",
  "version": "0.0.0",
  "private": true,
  "keywords": ["slidev-theme"],
  "slidev": {
    "defaults": {
      "colorSchema": "light",
      "aspectRatio": "16/10",
      "transition": "fade"
    }
  }
}
```

- [ ] **Step 2: Create `themes/openspace/styles/index.ts`**

```ts
import './base.css'
import './skin-sticky.css'
import './skin-arcade.css'
import './skin-doodle.css'
```

- [ ] **Step 3: Create the three skin css files as empty placeholders**

Each file (`skin-sticky.css`, `skin-arcade.css`, `skin-doodle.css`) gets a single header comment so the imports resolve. Example for sticky:

```css
/* skin: sticky — filled in Task 4 */
```

- [ ] **Step 4: Create `themes/openspace/styles/base.css`**

```css
:root {
  --os-bg: #fbf7ef;
  --os-ink: #1f2430;
  --os-muted: #6b7280;
  --os-debate: #e23b3b;
  --os-friction: #f5a524;
  --os-craft: #2f7de1;
  --os-culture: #2faf6a;
  --os-cat: var(--os-craft);
}

.slidev-layout {
  background: var(--os-bg);
  color: var(--os-ink);
  padding: 2.2rem 2.6rem;
  font-feature-settings: 'kern';
}

/* cover */
.os-cover { display: flex; flex-direction: column; justify-content: center; height: 100%; }
.os-cover h1 { font-size: 3.4rem; line-height: 1.05; margin: 0; }
.os-cover .os-sub { margin-top: 1rem; font-size: 1.3rem; color: var(--os-muted); }
.os-cover .os-byline { margin-top: 2.4rem; font-size: .95rem; color: var(--os-muted); }

/* intro (explainer) */
.os-intro { display: flex; flex-direction: column; justify-content: center; height: 100%; }
.os-intro h2 { font-size: 2.4rem; margin: 0 0 1.2rem; }
.os-intro :is(p, li) { font-size: 1.35rem; line-height: 1.5; }

/* grid */
.os-grid-head { display: flex; align-items: center; gap: .6rem; margin: 0 0 1.2rem; }
.os-grid-head .os-icon { font-size: 2rem; }
.os-grid-head h2 { font-size: 2rem; margin: 0; color: var(--os-cat); }
.os-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
  align-content: start;
}
.os-card {
  background: #fff;
  border: 1px solid #e6e0d4;
  border-top: 4px solid var(--os-cat);
  border-radius: 10px;
  padding: .85rem .95rem;
  box-shadow: 0 2px 6px rgba(0,0,0,.06);
}
.os-card__title { font-weight: 600; font-size: 1.02rem; line-height: 1.25; }
.os-card__chips { margin-top: .55rem; display: flex; flex-wrap: wrap; gap: .35rem; }
.os-chip {
  font-size: .72rem;
  padding: .12rem .5rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--os-cat) 16%, #fff);
  color: color-mix(in srgb, var(--os-cat) 70%, #1f2430);
  white-space: nowrap;
}

/* category accents — set --os-cat on the layout root */
.os-cat-debate   { --os-cat: var(--os-debate); }
.os-cat-friction { --os-cat: var(--os-friction); }
.os-cat-craft    { --os-cat: var(--os-craft); }
.os-cat-culture  { --os-cat: var(--os-culture); }

/* end / CTA */
.os-end { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; text-align: center; }
.os-end h2 { font-size: 3rem; margin: 0; }
.os-end p { font-size: 1.4rem; color: var(--os-muted); margin-top: 1rem; }
```

- [ ] **Step 5: Create `themes/openspace/layouts/cover.vue`**

```vue
<template>
  <div class="slidev-layout os-cover" :class="skinClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSlidevContext } from '@slidev/client'
const { $slidev } = useSlidevContext()
const skinClass = computed(() => {
  const skin = $slidev?.configs?.themeConfig?.skin
  return skin ? `skin-${skin}` : ''
})
</script>
```

- [ ] **Step 6: Create `themes/openspace/layouts/intro.vue`**

```vue
<template>
  <div class="slidev-layout os-intro" :class="skinClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSlidevContext } from '@slidev/client'
const { $slidev } = useSlidevContext()
const skinClass = computed(() => {
  const skin = $slidev?.configs?.themeConfig?.skin
  return skin ? `skin-${skin}` : ''
})
</script>
```

- [ ] **Step 7: Create `themes/openspace/layouts/grid.vue`**

```vue
<template>
  <div class="slidev-layout os-grid-layout" :class="[skinClass, `os-cat-${cat}`]">
    <div class="os-grid-head">
      <span class="os-icon">{{ icon }}</span>
      <h2>{{ title }}</h2>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSlidevContext } from '@slidev/client'
const props = defineProps({
  cat: { type: String, default: 'craft' },
  icon: { type: String, default: '' },
  title: { type: String, default: '' },
})
const { $slidev } = useSlidevContext()
const skinClass = computed(() => {
  const skin = $slidev?.configs?.themeConfig?.skin
  return skin ? `skin-${skin}` : ''
})
</script>
```

- [ ] **Step 8: Create `themes/openspace/layouts/end.vue`**

```vue
<template>
  <div class="slidev-layout os-end" :class="skinClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSlidevContext } from '@slidev/client'
const { $slidev } = useSlidevContext()
const skinClass = computed(() => {
  const skin = $slidev?.configs?.themeConfig?.skin
  return skin ? `skin-${skin}` : ''
})
</script>
```

- [ ] **Step 9: Verify the theme imports compile**

The theme can't build standalone; it is verified end-to-end in Task 3 once an entry deck exists. For now just confirm files exist and `index.ts` references all four css files.

Run: `ls themes/openspace/layouts themes/openspace/styles`
Expected: 4 `.vue` files; `base.css`, `index.ts`, `skin-sticky.css`, `skin-arcade.css`, `skin-doodle.css`.

- [ ] **Step 10: Commit**

```bash
git add themes/openspace
git commit -m "Add openspace base theme: layouts + light base styles"
```

---

## Task 2: Shared content (`_content.md`) — slides 2-8

**Files:**
- Create: `decks/open-space/_content.md`

This file holds every slide EXCEPT the cover (the cover lives per-entry). It is skin-agnostic. The first slide here must begin with a frontmatter separator since it is `src:`-imported after the entry's cover.

- [ ] **Step 1: Create `decks/open-space/_content.md` with the full content below**

````markdown
---
layout: intro
---

## What's an open space?

<v-clicks>

- **You build the agenda.** No fixed program — we fill the board together, now.
- **Sessions run in parallel.** Pick what pulls you; walk between rooms.
- **A topic = a question + whoever cares.** The cards ahead are just starters.

</v-clicks>

---
layout: intro
---

## Two rules, that's it

<div class="os-rules">

### 🦶 The Law of Two Feet
If you're not learning or contributing, use your two feet — go somewhere you are.

### 🙌 Whoever shows up are the right people
However many turn up to a session, they're exactly who it needed.

</div>

---
layout: grid
cat: debate
icon: 🔥
title: Debates & hot takes
---

<div class="os-grid">
  <div class="os-card"><div class="os-card__title">Estimates: planning, or expensive theatre?</div><div class="os-card__chips"><span class="os-chip">PO</span><span class="os-chip">devs</span><span class="os-chip">analysts</span></div></div>
  <div class="os-card"><div class="os-card__title">.NET vs Java in 2026 — does the stack even matter anymore?</div><div class="os-card__chips"><span class="os-chip">.NET</span><span class="os-chip">Java</span></div></div>
  <div class="os-card"><div class="os-card__title">"We do Scrum, but…" — is the ceremony worth it?</div><div class="os-card__chips"><span class="os-chip">everyone</span></div></div>
  <div class="os-card"><div class="os-card__title">AI writes the code now. What's left for us?</div><div class="os-card__chips"><span class="os-chip">everyone</span></div></div>
  <div class="os-card"><div class="os-card__title">Code review: quality gate or bottleneck?</div><div class="os-card__chips"><span class="os-chip">devs</span><span class="os-chip">testers</span></div></div>
  <div class="os-card"><div class="os-card__title">Should consultants say "no" to clients more often?</div><div class="os-card__chips"><span class="os-chip">everyone</span></div></div>
  <div class="os-card"><div class="os-card__title">100% coverage: discipline or delusion?</div><div class="os-card__chips"><span class="os-chip">testers</span><span class="os-chip">devs</span></div></div>
</div>

---
layout: grid
cat: friction
icon: 🤝
title: Cross-role friction
---

<div class="os-grid">
  <div class="os-card"><div class="os-card__title">What does "done" actually mean? Dev vs QA vs PO, live.</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
  <div class="os-card"><div class="os-card__title">The requirements telephone game: analyst → PO → dev — where do they die?</div><div class="os-card__chips"><span class="os-chip">analysts</span><span class="os-chip">PO</span><span class="os-chip">devs</span></div></div>
  <div class="os-card"><div class="os-card__title">Why do devs and testers fight about bugs?</div><div class="os-card__chips"><span class="os-chip">devs</span><span class="os-chip">testers</span></div></div>
  <div class="os-card"><div class="os-card__title">Handoffs: the most expensive thing we do?</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
  <div class="os-card"><div class="os-card__title">Three Amigos — does it work, or just more meetings?</div><div class="os-card__chips"><span class="os-chip">analysts</span><span class="os-chip">devs</span><span class="os-chip">testers</span></div></div>
  <div class="os-card"><div class="os-card__title">"Who owns quality?" Everyone says the team. Nobody means it.</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
</div>

---
layout: grid
cat: craft
icon: 🛠️
title: Craft & skill-sharing
---

<div class="os-grid">
  <div class="os-card"><div class="os-card__title">Taming legacy code — where do you even start?</div><div class="os-card__chips"><span class="os-chip">.NET</span><span class="os-chip">Java</span></div></div>
  <div class="os-card"><div class="os-card__title">Story-splitting clinic: bring your worst epic</div><div class="os-card__chips"><span class="os-chip">PO</span><span class="os-chip">analysts</span><span class="os-chip">devs</span></div></div>
  <div class="os-card"><div class="os-card__title">Clean architecture across .NET and Java — same ideas, different idioms</div><div class="os-card__chips"><span class="os-chip">.NET</span><span class="os-chip">Java</span></div></div>
  <div class="os-card"><div class="os-card__title">Requirement workshops that don't suck</div><div class="os-card__chips"><span class="os-chip">analysts</span><span class="os-chip">PO</span></div></div>
  <div class="os-card"><div class="os-card__title">Test-strategy teardown on a real itenium project</div><div class="os-card__chips"><span class="os-chip">testers</span><span class="os-chip">all</span></div></div>
  <div class="os-card"><div class="os-card__title">Debugging as a learnable discipline (not luck)</div><div class="os-card__chips"><span class="os-chip">devs</span></div></div>
  <div class="os-card"><div class="os-card__title">CI/CD horror stories — and how we fixed them</div><div class="os-card__chips"><span class="os-chip">devs</span><span class="os-chip">testers</span></div></div>
  <div class="os-card"><div class="os-card__title">Reading someone else's code: a skill nobody teaches</div><div class="os-card__chips"><span class="os-chip">devs</span></div></div>
</div>

---
layout: grid
cat: culture
icon: 🌱
title: Culture & ways-of-working
---

<div class="os-grid">
  <div class="os-card"><div class="os-card__title">Tech debt: who decides when we pay it down? (the politics)</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
  <div class="os-card"><div class="os-card__title">How do we keep learning when clients pay for delivery?</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
  <div class="os-card"><div class="os-card__title">Onboarding: why does it take 3 months to be useful?</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
  <div class="os-card"><div class="os-card__title">Bus factor of one: breaking knowledge silos</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
  <div class="os-card"><div class="os-card__title">Which meetings would we kill tomorrow?</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
  <div class="os-card"><div class="os-card__title">The project that went wrong — failure stories & lessons</div><div class="os-card__chips"><span class="os-chip">all</span></div></div>
</div>

---
layout: end
---

## Your turn.

<p>Grab a marker. Pin a card. Propose a session.</p>
````

- [ ] **Step 2: Add the `.os-rules` styles to `base.css`**

Append to `themes/openspace/styles/base.css`:

```css
.os-rules { display: grid; gap: 1.4rem; margin-top: .5rem; }
.os-rules h3 { font-size: 1.5rem; margin: 0 0 .3rem; color: var(--os-cat); }
.os-rules p, .os-rules { font-size: 1.2rem; }
```

- [ ] **Step 3: Verify markdown parses (deferred to Task 3)**

`_content.md` is `src:`-imported, so it is verified by the Task 3 build. Confirm it has 7 slide blocks (2 intro + 4 grid + 1 end) separated by `---`.

Run: `grep -c '^layout:' decks/open-space/_content.md`
Expected: `7`

- [ ] **Step 4: Commit**

```bash
git add decks/open-space/_content.md themes/openspace/styles/base.css
git commit -m "Add open-space deck content: explainer + 4 topic grids + CTA"
```

---

## Task 3: Three entry decks + bun scripts (first end-to-end build)

**Files:**
- Create: `decks/open-space/sticky.md`
- Create: `decks/open-space/arcade.md`
- Create: `decks/open-space/doodle.md`
- Modify: `package.json` (add 3 scripts)

The three entries are identical except `themeConfig.skin`, `fonts:`, and a `class` hint on the cover. Skins are still empty placeholders, so all three render identically (the light base) until Tasks 4-6.

- [ ] **Step 1: Create `decks/open-space/sticky.md`**

```markdown
---
theme: ../../themes/openspace
title: Open Space Day @ itenium
info: 27 conversation starters to seed the marketplace.
themeConfig:
  skin: sticky
fonts:
  sans: 'Nunito'
  display: 'Caveat'
  weights: '400,600,700,800'
layout: cover
---

# Open Space Day<br>@ itenium

<div class="os-sub">27 conversation starters. Now bring your own.</div>
<div class="os-byline">itenium · open space day '26</div>

---
src: ./_content.md
---
```

- [ ] **Step 2: Create `decks/open-space/arcade.md`**

Identical to `sticky.md` except the `themeConfig.skin` and `fonts` blocks:

```markdown
---
theme: ../../themes/openspace
title: Open Space Day @ itenium
info: 27 conversation starters to seed the marketplace.
themeConfig:
  skin: arcade
fonts:
  sans: 'Baloo 2'
  display: 'Press Start 2P'
  weights: '400,600,700,800'
layout: cover
---

# Open Space Day<br>@ itenium

<div class="os-sub">27 conversation starters. Now bring your own.</div>
<div class="os-byline">itenium · open space day '26</div>

---
src: ./_content.md
---
```

- [ ] **Step 3: Create `decks/open-space/doodle.md`**

Identical except skin + fonts:

```markdown
---
theme: ../../themes/openspace
title: Open Space Day @ itenium
info: 27 conversation starters to seed the marketplace.
themeConfig:
  skin: doodle
fonts:
  sans: 'Patrick Hand'
  display: 'Gloria Hallelujah'
  weights: '400,700'
layout: cover
---

# Open Space Day<br>@ itenium

<div class="os-sub">27 conversation starters. Now bring your own.</div>
<div class="os-byline">itenium · open space day '26</div>

---
src: ./_content.md
---
```

- [ ] **Step 4: Add scripts to `package.json`**

Add these three lines to the `scripts` block (after `"dossier"`):

```json
    "open-space:sticky": "slidev decks/open-space/sticky.md --open",
    "open-space:arcade": "slidev decks/open-space/arcade.md --open",
    "open-space:doodle": "slidev decks/open-space/doodle.md --open"
```

- [ ] **Step 5: Build all three entries to verify the whole pipeline compiles**

Run:
```bash
bunx slidev build decks/open-space/sticky.md --out /tmp/os-sticky \
  && bunx slidev build decks/open-space/arcade.md --out /tmp/os-arcade \
  && bunx slidev build decks/open-space/doodle.md --out /tmp/os-doodle
```
Expected: all three exit 0, "build complete" printed. No Vue/CSS/import errors. (This proves the theme, layouts, `themeConfig.skin` plumbing, `src:` import, and all 8 slides render.)

If `useSlidevContext` import fails, fall back to `import { useSlidevContext } from '@slidev/client'` → the API is also exposed as the global `$slidev` in templates; in that case drop the `<script setup>` context import and use `:class="$slidev.configs.themeConfig?.skin ? 'skin-' + $slidev.configs.themeConfig.skin : ''"` directly in the template of each layout. Verify by rebuilding.

- [ ] **Step 6: Commit**

```bash
git add decks/open-space/sticky.md decks/open-space/arcade.md decks/open-space/doodle.md package.json
git commit -m "Add 3 open-space entry decks (sticky/arcade/doodle) + run scripts"
```

---

## Task 4: Skin A — sticky-notes

**Files:**
- Modify: `themes/openspace/styles/skin-sticky.css`

**Visual target:** topics look like square Post-it notes pinned to a warm wall — each card a flat pastel square, slightly rotated (alternating tilt), with a strip of "tape" at the top. Headings use the `Caveat` handwriting display font. Background a soft cork/wall tone.

- [ ] **Step 1: Replace `themes/openspace/styles/skin-sticky.css` with the full skin**

```css
/* skin: sticky — Post-it notes pinned to a wall */
.skin-sticky.slidev-layout { background: #f3ead6; }

.skin-sticky :is(h1, h2) { font-family: 'Caveat', cursive; font-weight: 700; }
.skin-sticky.os-cover h1 { font-size: 4.2rem; transform: rotate(-2deg); }

.skin-sticky .os-grid { gap: 1.4rem 1.2rem; }
.skin-sticky .os-card {
  position: relative;
  background: color-mix(in srgb, var(--os-cat) 18%, #fff);
  border: none;
  border-radius: 2px;
  box-shadow: 2px 4px 8px rgba(0,0,0,.18);
  padding: 1.1rem .95rem .9rem;
}
.skin-sticky .os-card:nth-child(3n+1) { transform: rotate(-2deg); }
.skin-sticky .os-card:nth-child(3n+2) { transform: rotate(1.5deg); }
.skin-sticky .os-card:nth-child(3n)   { transform: rotate(-.5deg); }
/* tape strip */
.skin-sticky .os-card::before {
  content: '';
  position: absolute;
  top: -.5rem; left: 50%;
  width: 3.2rem; height: 1.1rem;
  transform: translateX(-50%) rotate(-3deg);
  background: rgba(255,255,255,.55);
  box-shadow: 0 1px 2px rgba(0,0,0,.12);
}
.skin-sticky .os-card__title { font-weight: 700; color: #2a2a2a; }
.skin-sticky .os-chip {
  background: rgba(255,255,255,.6);
  color: color-mix(in srgb, var(--os-cat) 80%, #222);
}
.skin-sticky .os-grid-head h2 { transform: rotate(-1.5deg); }
```

- [ ] **Step 2: Build the sticky entry to verify**

Run: `bunx slidev build decks/open-space/sticky.md --out /tmp/os-sticky`
Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add themes/openspace/styles/skin-sticky.css
git commit -m "Add sticky-notes skin for open-space deck"
```

---

## Task 5: Skin B — arcade pop

**Files:**
- Modify: `themes/openspace/styles/skin-arcade.css`

**Visual target:** bold 80s-arcade pop. Light base, chunky rounded cards that read like big buttons with a hard offset drop-shadow ("neubrutalist pop"), saturated category colors, pill-shaped chips. Cover heading uses the blocky `Press Start 2P` pixel font (small size — it's wide).

- [ ] **Step 1: Replace `themes/openspace/styles/skin-arcade.css` with the full skin**

```css
/* skin: arcade — retro arcade pop, chunky buttons */
.skin-arcade.slidev-layout { background: #fff6e9; }

.skin-arcade.os-cover h1 { font-family: 'Press Start 2P', monospace; font-size: 2.1rem; line-height: 1.5; }
.skin-arcade .os-grid-head h2 { font-family: 'Press Start 2P', monospace; font-size: 1.2rem; }
.skin-arcade :is(.os-intro h2, .os-end h2) { font-family: 'Press Start 2P', monospace; font-size: 1.6rem; line-height: 1.5; }

.skin-arcade .os-card {
  background: #fff;
  border: 3px solid #1f2430;
  border-radius: 14px;
  border-top: 3px solid #1f2430;
  box-shadow: 5px 5px 0 var(--os-cat);
  padding: 1rem;
}
.skin-arcade .os-card__title { font-weight: 800; }
.skin-arcade .os-chip {
  background: var(--os-cat);
  color: #fff;
  font-weight: 700;
  border: 2px solid #1f2430;
}
.skin-arcade .os-grid-head { border-bottom: 4px solid var(--os-cat); padding-bottom: .5rem; }
```

- [ ] **Step 2: Build the arcade entry to verify**

Run: `bunx slidev build decks/open-space/arcade.md --out /tmp/os-arcade`
Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add themes/openspace/styles/skin-arcade.css
git commit -m "Add arcade-pop skin for open-space deck"
```

---

## Task 6: Skin C — doodle whiteboard

**Files:**
- Modify: `themes/openspace/styles/skin-doodle.css`

**Visual target:** hand-drawn brainstorm whiteboard. Off-white board, cards look like wobbly marker boxes (irregular border-radius), `Patrick Hand` / `Gloria Hallelujah` marker fonts, dashed/sketchy borders in category colors, slight rotation for a casual feel.

- [ ] **Step 1: Replace `themes/openspace/styles/skin-doodle.css` with the full skin**

```css
/* skin: doodle — hand-drawn whiteboard */
.skin-doodle.slidev-layout { background: #fcfbf7; }

.skin-doodle :is(h1, h2) { font-family: 'Gloria Hallelujah', cursive; }
.skin-doodle .os-card__title, .skin-doodle .os-chip, .skin-doodle .os-intro :is(p, li) { font-family: 'Patrick Hand', cursive; }
.skin-doodle.os-cover h1 { font-size: 3rem; }

.skin-doodle .os-card {
  background: #fff;
  border: 2.5px solid var(--os-cat);
  /* wobbly hand-drawn corners */
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  box-shadow: none;
}
.skin-doodle .os-card:nth-child(2n) {
  border-radius: 15px 225px 15px 255px / 255px 15px 225px 15px;
  transform: rotate(-1deg);
}
.skin-doodle .os-card:nth-child(3n) { transform: rotate(.8deg); }
.skin-doodle .os-card__title { font-size: 1.12rem; font-weight: 400; }
.skin-doodle .os-chip {
  background: transparent;
  border: 1.5px dashed var(--os-cat);
  color: color-mix(in srgb, var(--os-cat) 75%, #222);
}
.skin-doodle .os-grid-head h2 { text-decoration: underline wavy var(--os-cat); text-underline-offset: 6px; }
```

- [ ] **Step 2: Build the doodle entry to verify**

Run: `bunx slidev build decks/open-space/doodle.md --out /tmp/os-doodle`
Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add themes/openspace/styles/skin-doodle.css
git commit -m "Add doodle-whiteboard skin for open-space deck"
```

---

## Task 7: README row + Midjourney brief + final verification

**Files:**
- Modify: `README.md` (Decks table)
- Create: `decks/open-space/OPENSPACE-MIDJOURNEY.md`

- [ ] **Step 1: Add a row to the Decks table in `README.md`**

Find the Decks table (the one listing "More AI Sessions" and "Shovelware") and add:

```
| Open Space (3 skins) | `bun run open-space:sticky` (or `:arcade` / `:doodle`) | `themes/openspace` (light) |
```

Add one line under the table noting: "Three skins of the same content — run each, pick one, delete the other two entry files + skins."

- [ ] **Step 2: Create `decks/open-space/OPENSPACE-MIDJOURNEY.md`**

```markdown
# Open Space — Midjourney brief (optional art)

Art is OPTIONAL — the deck runs pure-CSS without it. Generate a set matched to the
chosen skin, drop the `.jpg`s in `decks/open-space/public/` (served at `/`), and
reference them from the cover/grid layouts via a `backgroundImage` style if desired.

Suggested shots (one set per chosen skin):

- **cover.jpg** — wide bright wall covered in colourful sticky notes / pinboard,
  warm daylight, top-down-ish, lots of empty space for a title. --ar 16:10
- **debate.jpg / friction.jpg / craft.jpg / culture.jpg** — subtle corner motifs
  per category (flame / handshake / wrench / sprout) as light watercolour spots,
  mostly white space so cards stay readable. --ar 16:10

Keep art LIGHT and low-contrast — topic cards must stay legible on top.
Use the `midjourney-submit` skill to batch these.
```

- [ ] **Step 3: Final verification — build all three skins clean**

Run:
```bash
bunx slidev build decks/open-space/sticky.md --out /tmp/os-sticky \
  && bunx slidev build decks/open-space/arcade.md --out /tmp/os-arcade \
  && bunx slidev build decks/open-space/doodle.md --out /tmp/os-doodle
```
Expected: all exit 0.

- [ ] **Step 4: Hand off to user for visual pick**

Per saved prefs: do NOT auto-start a dev server or screenshot. Tell Wouter the three
`bun run open-space:<skin>` commands so he can view and pick. After he picks, a
follow-up (not in this plan) deletes the two losing entry decks + skin files +
scripts and renames the survivor to `slides.md` / `open-space`.

- [ ] **Step 5: Commit**

```bash
git add README.md decks/open-space/OPENSPACE-MIDJOURNEY.md
git commit -m "Document open-space deck + add Midjourney brief"
```

---

## Self-Review Notes

- **Spec coverage:** cover ✓ (entries, Task 3) · 2 explainer slides ✓ (Task 2) · 4 grids w/ 27 topics ✓ (Task 2) · CTA ✓ (Task 2) · 3 skins ✓ (Tasks 4-6) · light base theme ✓ (Task 1) · 3 run scripts ✓ (Task 3) · MJ brief ✓ (Task 7) · runs without art ✓ (pure CSS). All 27 topics transcribed verbatim from spec.
- **Skin-swap mechanism:** refined from the spec's per-deck `<style>` to `themeConfig.skin` + theme-loaded scoped stylesheets — more reliable in Slidev (inline `<style>` is slide-scoped). Documented in Architecture.
- **Type/name consistency:** `--os-cat` + `.os-cat-<x>` + `cat` prop values (`debate`/`friction`/`craft`/`culture`) match across base.css, grid.vue, and `_content.md`. Class names `.os-card`, `.os-card__title`, `.os-card__chips`, `.os-chip`, `.os-grid`, `.os-grid-head` consistent everywhere.
- **No placeholders:** every file's full content is given. Empty skin files in Task 1 are intentional (filled in 4-6), not placeholders for the engineer to invent.
```
