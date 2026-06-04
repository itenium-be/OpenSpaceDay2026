---
theme: ../../themes/synthwave
title: Where Is All the Shovelware?
info: A confession, in 8 slides — the shovelware that turned out to be leverage.
colorSchema: dark
aspectRatio: 16/10
transition: fade
fonts:
  sans: 'Rajdhani'
  mono: 'JetBrains Mono'
  serif: 'Orbitron'
  display: 'Monoton'
  weights: '400,600,700,800'
layout: cover
---

# Where Is All the Shovelware?

## A confession, in 8 slides

<div class="sw-subtle">Wouter Van Schandevijl · itenium · open space day '26</div>

---
layout: statement
---

# The fear of 2025

<div style="margin-top:2rem">

AI lets anyone churn out a flood of low-quality **slop**.

<InflectionCurve />

</div>

<div class="sw-subtle">The inflection: <span class="sw-pink">November 2025</span> — agentic coding got <em>good</em>.</div>

---
layout: section
codename: the turn
sub: "…you want shovelware? Here's my pile."
---

# Guilty as charged

<div style="font-size:1.4rem;margin-top:.6rem">

<span class="sw-pink">9+ repos</span> shipped since the Nov 2025 inflection.

</div>

---
layout: default
num: "01"
heading: The heist — confac modernization
---

itenium's invoicing app. A legacy React/Node stack, dragged into 2026. This is the **opposite** of slop — it deletes entropy.

<div class="fleet" style="grid-template-columns:repeat(2,1fr);margin-top:.6rem">
<div class="fleet__card"><h3>Build</h3><p>create-react-app → <strong>Vite</strong> · npm → <strong>Bun</strong> ("bun all the way")</p></div>
<div class="fleet__card"><h3>Tests</h3><p>Jest → <strong>Vitest</strong> · killed <strong>MomentJS</strong></p></div>
<div class="fleet__card"><h3>Types</h3><p>TS <strong>strict</strong> · no-explicit-any · Node 22 · Knip dead-code</p></div>
<div class="fleet__card"><h3>Hygiene</h3><p><code>master</code> → <code>main</code> · LF EOL · purged 5 dead deps</p></div>
</div>

<div class="sw-subtle">Headline burst: <span class="sw-cyan">22–23 Feb 2026</span>. All real commits.</div>

---
layout: default
num: "02"
heading: The fleet — games on the CD
---

<div class="fleet">
<div class="fleet__card fleet__card--trio"><h3>Scout</h3><p>Self-hosted deep-research engine. Issue → cited research, published.</p><span class="stack">Shell · Python · Docker</span></div>
<div class="fleet__card fleet__card--trio"><h3>Atlas</h3><p>Hosts what Scout produces.</p><span class="stack">Jekyll / HTML</span></div>
<div class="fleet__card fleet__card--trio"><h3>Compass</h3><p>Layouts for Atlas.</p><span class="stack">HTML · CSS · JS</span></div>
<div class="fleet__card"><h3>Meridian</h3><p>Scroll-driven memory timeline + animated travel map.</p><span class="stack">TypeScript</span></div>
<div class="fleet__card"><h3>Zombies</h3><p>Python zombie game to teach kids at CoderDojo.</p><span class="stack">Python</span></div>
<div class="fleet__card"><h3>licenser</h3><p>Generate your license file from package.json.</p><span class="stack">Node</span></div>
</div>

<div class="sw-subtle"><span class="sw-cyan">Scout · Atlas · Compass</span> = a trio: engine → host → layouts. Plus a dotfiles swarm.</div>

---
layout: statement
---

# Next on the disc: <span class="sw-pink">Perch</span>

<div class="sw-subtle">Windows-first dotfiles. Teased… ironically.</div>

---
layout: default
num: "03"
heading: Goodbye Windows & PowerShell
---

WSL-vs-Windows friction finally tipped it. Junctions, Dropbox, CRLF, PowerShell — daily papercuts.

- The whole workflow moved to **WSL / bash**
- `bash-config` is **in** · `PowerShell-Config` left behind
- Even the OS got refactored

<blockquote>The irony: <strong>Perch</strong> — the Windows-first tool — is the last tie being managed on the way out.</blockquote>

---
layout: end
---

# Not shovelware. <span class="sw-pink">Leverage.</span>

<div class="sw-subtle">Removing entropy · adding test/lint/CI nets · deleting dead code. Guilty as charged.</div>
