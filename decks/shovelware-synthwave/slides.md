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

## A confession, in 7 slides

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
heading: The heist — Modernization
---

<div class="fleet" style="margin-top:.6rem">
<div class="fleet__card"><h3>Build</h3><p>create-react-app → <strong>Vite</strong> · npm → <strong>Bun</strong> · JS/Flow → <strong>TypeScript</strong></p></div>
<div class="fleet__card"><h3>Tests</h3><p>Jest → <strong>Vitest</strong> · <strong>Playwright</strong> · <strong>Testcontainers</strong></p></div>
<div class="fleet__card"><h3>Replacing</h3><p>killed <strong>MomentJS</strong> · bumped <strong>Bootstrap</strong> · ditched <strong>AutoMapper</strong> + <strong>EPPlus</strong> (license flips)</p></div>
<div class="fleet__card"><h3>Types</h3><p>TS <strong>strict</strong> · no-<code>any</code> · Node 22</p></div>
<div class="fleet__card"><h3>Dead code</h3><p><strong>Knip</strong> · dropped superagent · numeral · bson · bodyparser</p></div>
<div class="fleet__card"><h3>Integrate</h3><p>off-the-shelf <strong>self-hosted</strong> components — <strong>Gotenberg</strong> for PDF</p></div>
<div class="fleet__card"><h3 style="margin-bottom: 5px">Hygiene</h3><p><code>master</code> → <code>main</code> · <strong>LF vs CRLF</strong></p></div>
<div class="fleet__card"><h3>Guardrails</h3><p><strong>CI hardening</strong> · git hooks · <strong>Claude hooks</strong></p></div>
<div class="fleet__card"><h3>.NET</h3><p><code>.slnx</code> · <code>Directory.*.props</code> · <strong>.NET 10</strong> · Roslynator</p></div>
</div>

<div class="sw-subtle" style="margin-top:5px">Headline burst: <span class="sw-cyan">18 Feb 2026</span>. 285 commits · ~27 repos.</div>

---
layout: default
num: "02"
heading: The fleet
---

<div class="fleet">
<div class="fleet__card"><h3>Scout → Atlas</h3><p>Self-hosted deep-research pipeline: open an issue → cited research, auto-published to a themed site.</p><span class="stack">Python · Jekyll · Docker · Shell</span></div>
<div class="fleet__card"><h3>Meridian</h3><p>Scroll-driven memory timeline + animated travel map.</p><span class="stack">TypeScript · React</span></div>
<div class="fleet__card"><h3>Zombies</h3><p>Python zombie game to teach kids at CoderDojo.</p><span class="stack">Python</span></div>
<div class="fleet__card"><h3>Slidev decks</h3><p>Talks as code — themed, reusable presentations.</p><span class="stack">Vue · Bun · Astro</span></div>
<div class="fleet__card"><h3>Itenium.Forge</h3><p>Opinionated MiroService Chassis and Skills Framework</p><span class="stack">.NET · React · Claude</span></div>
<div class="fleet__card"><h3>New capabilities</h3><p>Starify Links · Slack Meme Poster · TTC Aalst · …</p><span class="stack">scripts · sites · bots</span></div>
</div>

<div class="sw-subtle">A dotfiles swarm. A birthday invitation site. These presentations.</div>

---
layout: default
num: "03"
heading: Goodbye Windows & PowerShell
---

<div class="exitwin">
<div class="exitwin__bar"><i class="d d--r"/><i class="d d--y"/><i class="d d--g"/><span>wouter@windows: ~/$ sudo rm -rf /windows</span></div>

<v-clicks>

<div class="exitwin__row"><span class="pr">&gt;</span> Claude loves Bash</div>
<div class="exitwin__row"><span class="pr">&gt;</span> So my workflow moved to <strong>WSL / bash</strong></div>
<div class="exitwin__row"><span class="pr">&gt;</span> WSL-vs-Windows friction finally tipped it.<span class="sub">Junctions · Dropbox · CRLF · PowerShell — daily papercuts</span></div>
<div class="exitwin__row exitwin__row--final"><span class="pr">&gt;</span> 2026 is the year I'm moving to <strong class="sw-pink">Debian</strong><span class="blink">█</span></div>

</v-clicks>
</div>

<v-click>

<div class="irony"><span class="irony__tag">⚠ irony</span><span>the current project is <strong class="sw-pink">Perch</strong> — Windows-first dotfiles</span></div>

</v-click>

---
layout: end
---

# Not shovelware. <span class="sw-pink">Leverage.</span>

<div class="sw-subtle sw-subtle-1">Removing entropy · adding test/lint/CI nets</div>
<div class="sw-subtle sw-subtle-2">Exploding scopes · Low-priority work · Guilty as charged.</div>
