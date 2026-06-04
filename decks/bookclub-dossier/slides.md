---
theme: default
title: Target Dossier — Next Read
info: Bookclub — six classified targets. Select one for acquisition.
colorSchema: dark
aspectRatio: 16/10
transition: fade
fonts:
  mono: 'JetBrains Mono'
  sans: 'JetBrains Mono'
  weights: '400,500,700,800'
layout: full
class: dx
---

<style>
:root{
  --bg:#04110a; --panel:#07180f; --grn:#27f08a; --grn2:#0fdc7a; --dim:#1e7a4f;
  --ink:#bdf7d8; --amber:#ffb347; --line:#0f3b25; --red:#ff5470;
}
.slidev-layout{
  background:
    radial-gradient(120% 90% at 50% 0%, #08361f 0%, var(--bg) 55%),
    var(--bg);
  color:var(--ink);
  font-family:'JetBrains Mono',monospace;
  padding:0;height:100%;
}
.slidev-layout::after{
  content:"";position:absolute;inset:0;pointer-events:none;
  background:repeating-linear-gradient(0deg,rgba(0,0,0,.0) 0 2px,rgba(0,0,0,.28) 2px 3px);
  mix-blend-mode:multiply;opacity:.5;
}
.dx *{text-shadow:0 0 6px rgba(39,240,138,.18);}
.wrap{height:100%;box-sizing:border-box;padding:2.2rem 2.8rem;display:flex;flex-direction:column;position:relative;}
.bar{display:flex;justify-content:space-between;font-size:.72rem;letter-spacing:.16em;color:var(--dim);
  border-bottom:1px solid var(--line);padding-bottom:.5rem;text-transform:uppercase;}
.bar .g{color:var(--grn);}
.foot{position:absolute;left:2.8rem;right:2.8rem;bottom:1.4rem;display:flex;justify-content:space-between;
  font-size:.68rem;letter-spacing:.16em;color:var(--dim);text-transform:uppercase;}
.blink{animation:bl 1s steps(1) infinite;}@keyframes bl{50%{opacity:0;}}
.amber{color:var(--amber);}.g{color:var(--grn);}.dim{color:var(--dim);}

/* cover */
.cover{justify-content:center;}
.cover .sys{font-size:.8rem;color:var(--dim);letter-spacing:.2em;}
.cover h1{font-size:4.4rem;font-weight:800;line-height:1;margin:1.2rem 0 0;color:var(--grn);
  text-shadow:0 0 24px rgba(39,240,138,.5);}
.cover h1 .br{color:var(--ink);}
.cover .sub{margin-top:1rem;font-size:1.15rem;color:var(--ink);}
.cover .ln{margin-top:2rem;font-size:.9rem;color:var(--dim);}
.cover .ln b{color:var(--amber);}

/* manifest */
.man{flex:1;margin-top:1rem;border:1px solid var(--line);border-radius:6px;overflow:hidden;}
.man .h,.man .r{display:grid;grid-template-columns:3.2rem 1fr 9rem 6rem 5rem;gap:1rem;padding:.55rem 1rem;align-items:center;}
.man .h{background:rgba(39,240,138,.08);color:var(--grn);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;}
.man .r{border-top:1px solid var(--line);font-size:.95rem;}
.man .r .id{color:var(--amber);}
.man .r .nm{color:var(--ink);font-weight:500;}
.man .r .cat,.man .r .pg,.man .r .th{color:var(--dim);font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;}

/* dossier */
.dos{flex:1;display:grid;grid-template-columns:1fr;gap:0;margin-top:.8rem;}
.dos .top{display:grid;grid-template-columns:1fr auto;align-items:start;border-bottom:1px dashed var(--line);padding-bottom:.8rem;}
.dos .case{font-size:.74rem;letter-spacing:.2em;color:var(--dim);text-transform:uppercase;}
.dos h1{font-size:2.9rem;font-weight:800;color:var(--grn);margin:.4rem 0 .1rem;line-height:1;
  text-shadow:0 0 18px rgba(39,240,138,.4);}
.dos .auth{color:var(--ink);font-size:1.05rem;}
.dos .id{text-align:right;font-size:.74rem;letter-spacing:.14em;color:var(--dim);text-transform:uppercase;line-height:1.9;}
.dos .id b{color:var(--amber);}
.dos .grid{display:grid;grid-template-columns:1.35fr 1fr;gap:2rem;margin-top:1.1rem;}
.dos .line{margin:.2rem 0;}.dos .pr{color:var(--grn);}
.dos .quote{color:var(--amber);font-size:1.45rem;margin:.4rem 0 1.1rem;}
.dos .desc{font-size:1.02rem;line-height:1.5;color:var(--ink);}
.dos .threat{align-self:start;border:1px solid var(--line);border-radius:6px;padding:.85rem 1.2rem;background:var(--panel);}
.dos .threat .t{font-size:.72rem;letter-spacing:.18em;color:var(--dim);text-transform:uppercase;margin-bottom:.5rem;}
.dos .gauge{display:flex;justify-content:space-between;align-items:center;margin:.45rem 0;font-size:.82rem;
  letter-spacing:.08em;text-transform:uppercase;color:var(--dim);}
.dos .gauge b{color:var(--grn);letter-spacing:.16em;font-size:1rem;}
.dos .gauge b .o{color:var(--line);}
.dos .for{margin-top:.9rem;border-top:1px solid var(--line);padding-top:.7rem;font-size:.85rem;color:var(--dim);
  text-transform:uppercase;letter-spacing:.08em;}
.dos .for b{color:var(--ink);}

/* vote */
.vote{justify-content:center;align-items:center;text-align:center;}
.vote h1{font-size:3.2rem;font-weight:800;color:var(--grn);text-shadow:0 0 24px rgba(39,240,138,.5);}
.vote .sub{color:var(--ink);margin:.6rem 0 1.8rem;font-size:1.1rem;}
.sel{width:78%;text-align:left;border:1px solid var(--line);border-radius:6px;overflow:hidden;}
.sel div{display:grid;grid-template-columns:3rem 1fr;gap:1rem;padding:.6rem 1.1rem;border-top:1px solid var(--line);font-size:1rem;}
.sel div:first-child{border-top:none;}
.sel .k{color:var(--amber);}

/* kill the Slidev autocomplete popup (default theme lacks this; our themes hide it) */
.autocomplete-list{display:none !important;}

/* backdrops — auto-load from public/, dark green overlay keeps text readable */
.wrap.cover,.wrap.manifest,.wrap.vote{isolation:isolate;}
.wrap.cover::before,.wrap.manifest::before,.wrap.vote::before{
  content:"";position:absolute;inset:0;z-index:-1;background-position:center;
  background-size:cover;background-repeat:no-repeat;}
.wrap.cover::before{
  background-image:linear-gradient(100deg, rgba(4,17,10,.95) 28%, rgba(4,17,10,.55) 100%), url(/cover.png);}
.wrap.manifest::before{
  background-image:linear-gradient(180deg, rgba(4,17,10,.93), rgba(4,17,10,.84)), url(/manifest.png);}
.wrap.vote::before{
  background-image:linear-gradient(180deg, rgba(4,17,10,.9), rgba(4,17,10,.66)), url(/vote.png);}

/* boot sequence — auto-typewriter on the cover */
.boot{font-size:1.02rem;line-height:2;color:var(--dim);margin:.5rem 0 .3rem;min-height:8.2rem;}
.boot div{clip-path:inset(0 100% 0 0);animation:wipe .34s steps(22) forwards;}
.boot div:nth-child(1){animation-delay:.15s;}
.boot div:nth-child(2){animation-delay:.55s;}
.boot div:nth-child(3){animation-delay:.95s;}
.boot div:nth-child(4){animation-delay:1.35s;}
.boot .pr{color:var(--grn);}
.boot .ok{color:var(--grn);}
@keyframes wipe{to{clip-path:inset(0 0 0 0);}}
.cover h1{opacity:0;animation:rise .55s ease forwards;animation-delay:1.8s;}
.cover .sub{opacity:0;animation:rise .5s ease forwards;animation-delay:2.1s;}
.cover .ln{opacity:0;animation:rise .5s ease forwards;animation-delay:2.35s;}
@keyframes rise{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:none;}}
</style>

<div class="wrap cover dx">
  <div class="sys">// itenium // bookclub-net // clearance: members</div>
  <div class="boot">
    <div><span class="pr">&gt;</span> mounting <span class="g">bookclub-net</span> ............. <span class="ok">OK</span></div>
    <div><span class="pr">&gt;</span> auth <span class="g">members</span> .................... <span class="ok">OK</span></div>
    <div><span class="pr">&gt;</span> decrypting <span class="g">manifest.dat</span> ....... <span class="ok">OK</span></div>
    <div><span class="pr">&gt;</span> targets loaded: <span class="amber">06</span> &nbsp;<span class="blink">█</span></div>
  </div>
  <h1>TARGET<span class="br">_</span>DOSSIER</h1>
  <div class="sub">Six classified targets. One selected for acquisition.</div>
  <div class="ln">OPERATION: <b>NEXT READ</b> &nbsp;·&nbsp; STATUS: <span class="amber">AWAITING VOTE</span> <span class="blink">█</span></div>
  <div class="foot"><span>// dossier v3.0</span><span>scroll to brief →</span></div>
</div>

---
layout: full
class: dx
---

<div class="wrap manifest dx">
  <div class="bar"><span>// target manifest</span><span class="g">6 RECORDS // SORT: BY ID</span></div>
  <div class="man">
    <div class="h"><span>ID</span><span>Designation</span><span>Class</span><span>Pages</span><span>Threat</span></div>
    <div class="r"><span class="id">#01</span><span class="nm">The Alignment Problem — Brian Christian</span><span class="cat">AI/Ethics</span><span class="pg">476</span><span class="th">★★★★★</span></div>
    <div class="r"><span class="id">#02</span><span class="nm">Chip War — Chris Miller</span><span class="cat">History</span><span class="pg">464</span><span class="th">★★★☆☆</span></div>
    <div class="r"><span class="id">#03</span><span class="nm">A Philosophy of Software Design — Ousterhout</span><span class="cat">Craft</span><span class="pg">190</span><span class="th">★★★★★</span></div>
    <div class="r"><span class="id">#04</span><span class="nm">Kill It with Fire — Marianne Bellotti</span><span class="cat">Craft</span><span class="pg">248</span><span class="th">★★★★☆</span></div>
    <div class="r"><span class="id">#05</span><span class="nm">Co-Intelligence — Ethan Mollick</span><span class="cat">AI/Practice</span><span class="pg">256</span><span class="th">★★★★★</span></div>
    <div class="r"><span class="id">#06</span><span class="nm">AI Snake Oil — Narayanan &amp; Kapoor</span><span class="cat">AI/Skeptic</span><span class="pg">360</span><span class="th">★★★★☆</span></div>
  </div>
  <div class="foot"><span>// itenium // bookclub-net</span><span>SELECT 1 OF 6</span></div>
</div>

---
layout: full
class: dx
---

<div class="wrap dx">
  <div class="bar"><span>// dossier // open</span><span class="g">CASE #01</span></div>
  <div class="dos">
    <div class="top">
      <div>
        <div class="case">AI / ETHICS · ACQUIRED 2020</div>
        <h1>The Alignment Problem</h1>
        <div class="auth">subject: Brian Christian</div>
      </div>
      <div class="id">ID <b>#01</b><br/>PAGES <b>476</b><br/>EST <b>~4 wks</b></div>
    </div>
    <div class="grid">
      <div>
        <div class="quote">"How do we make machines want what we want?"</div>
        <div class="desc">The definitive narrative bridge from the basics of machine learning to the ethics of AI — the single best read spanning tech, philosophy and society at once.</div>
        <div class="for"><b>FOR:</b> everyone, but the meatiest target. ML-curious analysts welcome.</div>
      </div>
      <div class="threat">
        <div class="t">// threat assessment</div>
        <div class="gauge"><span>Brainpower</span><b>█████</b></div>
        <div class="gauge"><span>Debate fuel</span><b>█████</b></div>
        <div class="gauge"><span>Accessibility</span><b>███<span class="o">██</span></b></div>
      </div>
    </div>
  </div>
  <div class="foot"><span>// classified</span><span>#01 / 06</span></div>
</div>

---
layout: full
class: dx
---

<div class="wrap dx">
  <div class="bar"><span>// dossier // open</span><span class="g">CASE #02</span></div>
  <div class="dos">
    <div class="top">
      <div>
        <div class="case">HISTORY · ACQUIRED 2022</div>
        <h1>Chip War</h1>
        <div class="auth">subject: Chris Miller</div>
      </div>
      <div class="id">ID <b>#02</b><br/>PAGES <b>464</b><br/>EST <b>~4 wks</b></div>
    </div>
    <div class="grid">
      <div>
        <div class="quote">"The digital world rests on a sand-grain of silicon."</div>
        <div class="desc">Reads like a thriller, contains zero code: the hidden geopolitical war over who gets to manufacture the world's most critical technology.</div>
        <div class="for"><b>FOR:</b> anyone. Pure narrative history, no tech barrier.</div>
      </div>
      <div class="threat">
        <div class="t">// threat assessment</div>
        <div class="gauge"><span>Brainpower</span><b>████<span class="o">█</span></b></div>
        <div class="gauge"><span>Debate fuel</span><b>███<span class="o">██</span></b></div>
        <div class="gauge"><span>Accessibility</span><b>████<span class="o">█</span></b></div>
      </div>
    </div>
  </div>
  <div class="foot"><span>// classified</span><span>#02 / 06</span></div>
</div>

---
layout: full
class: dx
---

<div class="wrap dx">
  <div class="bar"><span>// dossier // open</span><span class="g">CASE #03</span></div>
  <div class="dos">
    <div class="top">
      <div>
        <div class="case">CRAFT · ACQUIRED 2018</div>
        <h1>A Philosophy of Software Design</h1>
        <div class="auth">subject: John Ousterhout</div>
      </div>
      <div class="id">ID <b>#03</b><br/>PAGES <b>190</b><br/>EST <b>~2 wks</b></div>
    </div>
    <div class="grid">
      <div>
        <div class="quote">"Complexity is anything that makes software hard to understand."</div>
        <div class="desc">Short, sharp, gloriously opinionated. Guaranteed to start a fight about comments, naming and abstraction — among the developers, at least.</div>
        <div class="for"><b>FOR:</b> developers. Richest debate, narrowest door.</div>
      </div>
      <div class="threat">
        <div class="t">// threat assessment</div>
        <div class="gauge"><span>Brainpower</span><b>████<span class="o">█</span></b></div>
        <div class="gauge"><span>Debate fuel</span><b>█████</b></div>
        <div class="gauge"><span>Accessibility</span><b>██<span class="o">███</span></b></div>
      </div>
    </div>
  </div>
  <div class="foot"><span>// classified</span><span>#03 / 06</span></div>
</div>

---
layout: full
class: dx
---

<div class="wrap dx">
  <div class="bar"><span>// dossier // open</span><span class="g">CASE #04</span></div>
  <div class="dos">
    <div class="top">
      <div>
        <div class="case">CRAFT · ACQUIRED 2021</div>
        <h1>Kill It with Fire</h1>
        <div class="auth">subject: Marianne Bellotti</div>
      </div>
      <div class="id">ID <b>#04</b><br/>PAGES <b>248</b><br/>EST <b>~2 wks</b></div>
    </div>
    <div class="grid">
      <div>
        <div class="quote">"Legacy systems aren't a tech problem. They're an org problem."</div>
        <div class="desc">Funny, modern and brutally relatable to anyone who has ever touched old code — or an old process. The org angle lets non-devs in.</div>
        <div class="for"><b>FOR:</b> devs &amp; testers; POs get the org angle.</div>
      </div>
      <div class="threat">
        <div class="t">// threat assessment</div>
        <div class="gauge"><span>Brainpower</span><b>███<span class="o">██</span></b></div>
        <div class="gauge"><span>Debate fuel</span><b>████<span class="o">█</span></b></div>
        <div class="gauge"><span>Accessibility</span><b>███<span class="o">██</span></b></div>
      </div>
    </div>
  </div>
  <div class="foot"><span>// classified</span><span>#04 / 06</span></div>
</div>

---
layout: full
class: dx
---

<div class="wrap dx">
  <div class="bar"><span>// dossier // open</span><span class="g">CASE #05</span></div>
  <div class="dos">
    <div class="top">
      <div>
        <div class="case">AI / PRACTICE · ACQUIRED 2024</div>
        <h1>Co-Intelligence</h1>
        <div class="auth">subject: Ethan Mollick</div>
      </div>
      <div class="id">ID <b>#05</b><br/>PAGES <b>256</b><br/>EST <b>~2 wks</b></div>
    </div>
    <div class="grid">
      <div>
        <div class="quote">"Treat AI like a person — but tell it what kind of person to be."</div>
        <div class="desc">The everyone-read-this LLM book. Practical, finishable in a weekend, opinions guaranteed at the table — the surest mixer of the six.</div>
        <div class="for"><b>FOR:</b> literally everyone in the room. The perfect mixer.</div>
      </div>
      <div class="threat">
        <div class="t">// threat assessment</div>
        <div class="gauge"><span>Brainpower</span><b>███<span class="o">██</span></b></div>
        <div class="gauge"><span>Debate fuel</span><b>█████</b></div>
        <div class="gauge"><span>Accessibility</span><b>█████</b></div>
      </div>
    </div>
  </div>
  <div class="foot"><span>// classified</span><span>#05 / 06</span></div>
</div>

---
layout: full
class: dx
---

<div class="wrap dx">
  <div class="bar"><span>// dossier // open</span><span class="g">CASE #06</span></div>
  <div class="dos">
    <div class="top">
      <div>
        <div class="case">AI / SKEPTIC · ACQUIRED 2024</div>
        <h1>AI Snake Oil</h1>
        <div class="auth">subject: Narayanan &amp; Kapoor</div>
      </div>
      <div class="id">ID <b>#06</b><br/>PAGES <b>360</b><br/>EST <b>~3 wks</b></div>
    </div>
    <div class="grid">
      <div>
        <div class="quote">"Some AI works. Some is snake oil. Here's how to tell."</div>
        <div class="desc">The clear-eyed hype antidote. Best deployed back-to-back with Co-Intelligence (#05) for a built-in debate: the believer and the skeptic.</div>
        <div class="for"><b>FOR:</b> everyone; especially satisfying for the skeptics.</div>
      </div>
      <div class="threat">
        <div class="t">// threat assessment</div>
        <div class="gauge"><span>Brainpower</span><b>████<span class="o">█</span></b></div>
        <div class="gauge"><span>Debate fuel</span><b>████<span class="o">█</span></b></div>
        <div class="gauge"><span>Accessibility</span><b>████<span class="o">█</span></b></div>
      </div>
    </div>
  </div>
  <div class="foot"><span>// classified</span><span>#06 / 06</span></div>
</div>

---
layout: full
class: dx
---

<div class="wrap vote dx">
  <div class="bar" style="width:100%"><span>// acquisition // authorize</span><span class="g">SELECT TARGET</span></div>
  <h1 style="margin-top:1.4rem">SELECT TARGET</h1>
  <div class="sub">One target authorized for the next operation. <span class="amber">Cast your vote.</span></div>
  <div class="sel">
    <div><span class="k">#01</span><span>The Alignment Problem</span></div>
    <div><span class="k">#02</span><span>Chip War</span></div>
    <div><span class="k">#03</span><span>A Philosophy of Software Design</span></div>
    <div><span class="k">#04</span><span>Kill It with Fire</span></div>
    <div><span class="k">#05</span><span>Co-Intelligence</span></div>
    <div><span class="k">#06</span><span>AI Snake Oil</span></div>
  </div>
  <div class="foot"><span>// itenium // bookclub-net</span><span>AUTHORIZE <span class="blink">█</span></span></div>
</div>
