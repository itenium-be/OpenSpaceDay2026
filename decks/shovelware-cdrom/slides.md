---
theme: ../../themes/cdrom
title: Where Is All the Shovelware?
info: A confession, in 8 slides — the shovelware bargain-bin CD-ROM.
colorSchema: light
aspectRatio: 16/10
transition: slide-left
fonts:
  sans: 'Archivo'
  display: 'Luckiest Guy'
  mono: 'Courier Prime'
  weights: '400,700,900'
layout: cover
---

# Where Is All<br/>The Shovelware?

## A confession, in 8 slides

<div class="cd-sub">Wouter Van Schandevijl · itenium · open space day '26</div>

---
layout: default
title: The Accusation
sku: SKU-FEAR-01
---

# The Accusation

## "AI just makes a flood of slop."

The fear of 2025/26: anyone can churn out **shovelware** by the truckload.

- The inflection point: **November 2025**
- Agentic coding (Claude Code) crossed the *it actually works* line
- Suddenly everyone ships. Volume up. Quality... *suspect.*

<div class="cd-sub">So — where's <span class="cd-pop">my</span> pile?</div>

---
layout: statement
---

# You want shovelware?<br/>Here's my pile.

<div class="cd-sub"><span class="cd-pop">~9+ repos</span> shipped since the Nov '25 inflection. Guilty as charged.</div>

---
layout: default
title: The Heist · confac
sku: SKU-REAL-04
---

# The Heist

## confac — dragged into 2026

itenium's invoicing app. The legacy React/Node stack got *modernized.* Headline burst **22–23 Feb 2026**:

- **create-react-app → Vite** · **npm → Bun** · **Jest → Vitest**
- Killed **MomentJS** · **TypeScript strict**, zero `any`, Node 22
- Dead code via **Knip** · `master` → `main` · LF/CRLF EOL hygiene
- Purged deps (superagent, numeral, bson...) · **sendgrid → nodemailer**

<blockquote>This is the opposite of slop: removing entropy, adding test/lint/CI nets, deleting dead code.</blockquote>

---
layout: default
title: The Fleet · 1000+ on one CD!
sku: SKU-FLEET-05
---

# The Fleet

<div class="cd-fleet">
  <ProductTile name="Scout" desc="Self-hosted deep-research engine for Claude Code. Issue in → cited research out." stack="Shell · Python · Docker" price="ENGINE" burst="#ff00a8" accent="#00e5ff" />
  <ProductTile name="Atlas" desc="Hosts the research Scout produces — the published site." stack="Jekyll · HTML" price="HOST" burst="#6a00ff" accent="#b6ff00" />
  <ProductTile name="Compass" desc="Layouts for Atlas. Completes the trio." stack="HTML · CSS · JS" price="LAYOUTS" burst="#ff6a00" accent="#ffd000" />
  <ProductTile name="Meridian" desc="Scroll-driven memory timeline. Photos in → animated travel map." stack="TypeScript" price="$4.99" burst="#00e5ff" accent="#ff00a8" />
  <ProductTile name="CoderDojo-Zombies" desc="A Python zombie game — built to teach kids at CoderDojo." stack="Python" price="FREE!" burst="#b6ff00" accent="#6a00ff" />
  <ProductTile name="licenser + dotfiles" desc="LICENSE from package.json, kept current. Plus the config swarm in git." stack="Node · Shell" price="BONUS" burst="#ffd000" accent="#ff6a00" />
</div>

<div class="cd-sub">Scout → Atlas → Compass: one trio. Engine, host, layouts.</div>

---
layout: section
kicker: coming soon
note: Even the Windows-first tool is part of the goodbye.
---

# Future: Perch

<div class="cd-sub">Windows-first dotfiles — teased. The last tie, managed.</div>

---
layout: default
title: Goodbye Windows & PowerShell
sku: SKU-WSL-07
---

# Goodbye Windows<br/>& PowerShell

## WSL friction finally won.

The daily papercuts tipped it — and the **OS got refactored too**.

- Junctions · Dropbox · **CRLF** · PowerShell quirks
- The whole workflow moved to **WSL / bash**
- `bash-config` is in. `PowerShell-Config` is **left behind.**

<div class="cd-sub">Irony: even <span class="cd-pop">Perch</span> (Windows-first) is part of the farewell.</div>

---
layout: end
---

# Not Shovelware.<br/>Leverage.

<div class="cd-sub">Verdict: tested, modern, real engineering. Case dismissed.</div>
