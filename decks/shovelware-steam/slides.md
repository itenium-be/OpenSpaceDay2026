---
theme: ../../themes/steam
title: Where Is All the Shovelware?
info: Lightning talk — a confession, in 8 slides. The shovelware that wasn't.
colorSchema: dark
aspectRatio: 16/10
transition: fade
fonts:
  sans: 'Inter'
  mono: 'JetBrains Mono'
  weights: '400,500,600,700,800'
layout: cover
capsule: New Release · 2026
---

# Where Is All the Shovelware?

## A confession, in 8 slides

<div class="steam-subtle">Wouter Van Schandevijl · itenium · open space day 2026</div>

---
layout: default
tab: store
---

# The accusation

## Featured · "AI is a flood of slop"

> The 2025 fear: agents let anyone churn out infinite low-quality **shovelware**.

The inflection point: **November 2025** — Claude Code and agentic coding got *good*.

Suddenly everyone can ship. So the worry goes: everyone will ship **garbage**.

<div class="steam-subtle">Reviews coming in… <span class="steam-dim">"Mostly Negative" — the internet, probably</span></div>

---
layout: statement
---

<div>

# …you want shovelware?

## Here's my pile.

<Achievement
  icon="📦"
  rarity="green"
  title="Ship 9+ repos since Nov 2025"
  subtitle="Guilty as charged" />

</div>

---
layout: default
tab: store
---

# The heist · `itenium-be/confac`

## Not slop — dragging a legacy stack into 2026

<div class="steam-grid steam-grid--2" style="margin-top:.6rem">

<StoreCard
  title="Build Pipeline: Remastered"
  desc="create-react-app → Vite · npm → Bun · Jest → Vitest. Headline burst 22–23 Feb 2026."
  tags="Vite|Bun|Vitest"
  review="Overwhelmingly Positive" reviews="commits" :stars="5" price="UPDATE" />

<StoreCard
  title="Entropy Purge"
  desc="Kill MomentJS · drop superagent, numeral, bson, bodyparser · Knip dead-code sweep."
  tags="cleanup|less-code"
  review="Very Positive" reviews="deletions" :stars="5" price="UPDATE" />

<StoreCard
  title="TypeScript: Strict Mode"
  desc="no-explicit-any enforced, all any types eliminated · off TS4 · Node 22."
  tags="TypeScript|strict|Node22"
  review="Very Positive" reviews="types" :stars="5" price="UPDATE" />

<StoreCard
  title="Hygiene Pack"
  desc="Standardize EOL (LF default) · master → main · sendgrid → nodemailer (gmail)."
  tags="EOL|main|CI"
  review="Positive" reviews="repo" :stars="4" price="UPDATE" />

</div>

<div class="steam-subtle">This is the *opposite* of shovelware: removing entropy, adding test/lint/CI nets.</div>

---
layout: default
tab: store
---

# The fleet · every game on the CD

<div class="steam-grid">

<StoreCard
  title="Scout"
  desc="Self-hosted deep-research engine for Claude Code. Open an Issue → cited research published."
  tags="Shell|Python|Docker"
  review="Very Positive" reviews="trio 1/3" :stars="5" price="FREE" />

<StoreCard
  title="Atlas"
  desc="Hosts the research Scout produces — the published site."
  tags="Jekyll|HTML"
  review="Positive" reviews="trio 2/3" :stars="4" price="FREE" />

<StoreCard
  title="Compass"
  desc="Layouts for Atlas. The trio: engine → host → layouts."
  tags="HTML|CSS|JS"
  review="Positive" reviews="trio 3/3" :stars="4" price="FREE" />

<StoreCard
  title="Meridian"
  desc="Scroll-driven memory timeline. Drop in photos → animated map of your travels."
  tags="TypeScript"
  review="Very Positive" reviews="47" :stars="5" price="FREE" />

<StoreCard
  title="CoderDojo-Zombies"
  desc="A Python zombie game — built to teach kids at CoderDojo."
  tags="Python|teaching"
  review="Overwhelmingly Positive" reviews="kids" :stars="5" price="FREE" />

<StoreCard
  title="licenser"
  desc="Generate your license file from package.json; keep it updated each year."
  tags="Node|tooling"
  review="Positive" reviews="9" :stars="4" price="FREE" />

</div>

<div class="steam-subtle">Plus the dotfiles swarm — <code>bash-config</code> · <code>Git-Config</code> · <code>perch-config</code> · <code>perch-gallery</code>.</div>

---
layout: section
eyebrow: Coming Soon
note: "The Windows-first dotfiles — and, ironically, the last tie still being managed."
---

# Wishlist: Perch

---
layout: default
tab: library
---

# Goodbye Windows & PowerShell

## Even the OS got refactored

<v-click>

WSL vs Windows friction finally tipped it. The daily papercuts won:

- Junctions · Dropbox · CRLF · **PowerShell**
- The whole workflow moved to **WSL / bash**
- `bash-config` is **installed** · `PowerShell-Config` is being **uninstalled**

</v-click>

<v-click>

<Achievement
  icon="🐧"
  rarity="cyan"
  title="Goodbye Windows & PowerShell"
  subtitle="Migrated the entire daily driver to WSL / bash" />

</v-click>

<div class="steam-subtle">The irony: even <strong>Perch</strong> — literally "Windows-first dotfiles" — is part of the goodbye.</div>

---
layout: end
---

# Verdict: not shovelware

## It's **leverage.**

<div class="steam-subtle">Same flood. Tested, modern, less code. The pile was the point.</div>
