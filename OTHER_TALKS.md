# AI Track — Additional Session Ideas

Candidate sessions to fill gaps in the existing AI track. Format options per session:
**2-hour workshop** or **talk/presentation**.

Existing track (for reference — don't duplicate): Kickoff Bootcamp (vibe coding),
AI & Security, AI Driven Development (Context/Compounding/Harness Engineering),
MCP+Skills, MCP Servers, Predicting Mental Fatigue (Pierre), Math Behind the AI Curtain (Tom).

---

## 1. Evals: How Do You Know Your AI Works?

**Status:** ✅ Selected · 🔭 Scout expedition published 2026-06-04 → [Atlas](https://laoujin.github.io/Atlas/research/2026-06-04-evals-how-do-you-know-your-ai-works-session-blueprint/) (5 angles: methods, tooling, CI/CD, agent/RAG, workshop design). Format TBD (2h workshop vs talk).

**Research verdict:** Run as a 2h demo-driven hands-on session standardized on **DeepEval** (pytest-native, provider-neutral — note OpenAI acquired Promptfoo Mar 2026); teach *error analysis*, not tool-clicking.

**Pitch:** The track teaches building agents/MCP/harnesses but never how to *prove*
they work or catch silent prompt regressions. This is the QA discipline of AI —
where most teams and clients are flying blind.

**Fits because:** Direct complement to *AI Driven Development*. Compounding engineering
rots without a regression net; evals are that net.

**If 2h workshop:**
- Build a golden dataset for a real task (input → expected output)
- LLM-as-judge: write a grader, discover why graders need grading
- Wire evals into CI — fail the build on prompt regression
- Catch a planted regression live
- *Possible add-on (from cut #3):* read a real agent trace (Langfuse/LangSmith)
  + add cost/loop guardrails. Evals tells you *if* it broke; tracing tells *why*.

**If talk:**
- Why vibes don't scale; failure modes of untested AI
- Eval taxonomy (golden sets, LLM-as-judge, rubrics, A/B)
- Tooling landscape (Promptfoo, Braintrust, DeepEval)
- War stories: silent regressions

**Alt title:** *Vibes Don't Scale: Testing the Untestable*

**Open:** format? · tooling (agnostic vs pick one) · presenter?

---

## 2. RAG & Embeddings: Teaching AI to Read

**Status:** ✅ Selected — format TBD (2h workshop vs talk)

**Pitch:** Zero retrieval content in the track, yet "point the AI at our docs/DB
and let people ask questions" is the #1 client request. RAG demos trivially and
falls apart in prod — wrong chunks, stale data, confident hallucinations.

**Fits because:** Pairs with MCP (MCP *connects* tools; RAG *feeds* knowledge) —
the two halves of giving an agent access to stuff it wasn't trained on.

**If 2h workshop:**
- Embed a real corpus, store in pgvector/Qdrant
- Build naive RAG → watch it retrieve garbage
- Fix it: chunking strategy, hybrid search, reranking
- Add an "I don't know" guardrail to stop hallucination

**If talk:**
- How embeddings actually work (vector space intuition)
- The RAG pipeline and where each stage breaks
- Naive vs hybrid vs reranked — with retrieval-quality numbers
- When RAG is the wrong answer (long-context / fine-tune instead)

**Alt title:** *Your AI Can't Read Your Docs (Yet)*

**Open:** format? · slot before or after the MCP pair? · presenter?

---

## 3. Model Bake-Off: Frontier vs Local vs Hybrid

**Status:** ✅ Selected — 2h workshop (absorbs the "Local & Open Models" idea)

**Pitch:** Run the *same task* through three engines and measure everything.
Answers the recurring client blocker "we can't send data to OpenAI/Anthropic" —
turns "we can't use AI" into "here's the tradeoff, measured."

**Fits because:** Unique angle for an EU consultancy (data residency / GDPR).
The *hybrid* lane is the spine — not just "local is worse, news at 11."

**Three engines, same task:**
- **Frontier** (Claude/GPT via API) — the quality ceiling
- **Local** (Llama/Qwen via Ollama) — the privacy floor
- **Hybrid** — local-first, escalate to frontier on low confidence; or a router
  (easy tasks local, hard ones up). Often ~90% of frontier quality, most data stays in.

**Score all three on one rubric:** quality · latency · cost · "could this data
legally leave the building?"

**Dependency:** comes *after* Evals — reuses the eval harness to score the runs.
Clean chain: Evals → Bake-Off.

**Keep distinct from:** the coding-*tool* Cage Match (Claude Code vs Cursor vs
Copilot) — that compares harnesses, not models. Separate session, see below.

**Open:** which local models to ship preconfigured? · presenter?

---

## 4. Coding Agents Cage Match

**Status:** ✅ Selected — talk + live demo (not a hands-on workshop)

**Pitch:** Same real coding task ("add a feature to this repo with tests") run live
through **Claude Code vs Cursor vs Copilot vs Codex**. Same prompt, same repo,
side by side. Who finishes? Who writes tests unprompted? Who hallucinates an API?

**Fits because:** Sequel to the Kickoff Bootcamp (Claude Code-specific). Bootcamp
taught one tool deeply; this zooms out so people choose deliberately, not by habit.
Crowd-pleaser in the "Skynet Started?" register.

**Why talk not workshop:** the comparison only works if everyone watches the *same*
runs. Everyone running their own = noise.

**Arc:**
- One task, defined upfront with clear success criteria
- Run all four live (pre-recorded fallback — live agents are flaky on stage)
- Score on one rubric: correctness · tests · speed · cost · hand-holding
- Verdict: which tool for which job (greenfield vs legacy, big repo vs script)

**Risk to name:** dates fast — ranking could flip in 3 months. Frame "as of [date]".

**Open:** which tools make the cut? · live vs pre-recorded? · presenter?

---

## 5. The EU AI Act: Now What?

**Status:** 📻 On the radar — not scheduling, but worth keeping

**Pitch:** The Act is in force, phasing in through 2026–27; most teams don't know
which systems are now regulated. Pure differentiation — "how EU AI regulation hits
the code we ship for clients" isn't on a thousand YouTube channels.

**Fits because:** Belgian consultancy — geography is an asset here. Bookend to
*AI & Security*: security is "how it breaks," compliance is "what you're liable for."
Positions Itenium as advisors, not just builders.

**Format:** talk (~1h, maybe panel tail). Not a workshop — analysis, not code.

**Arc:**
- Risk tiers: prohibited → high-risk → limited → minimal, with real client examples
- What "high-risk" obligates: docs, human oversight, logging, conformity assessment
- Transparency rules hitting everyone: chatbots, generated-content disclosure
- Timeline: enforceable now vs 2026 vs 2027
- Practical checklist to run against a client system

**Risk:** least fun session — no demo, no "whoa." But most commercially useful.

**Open:** presenter? · external speaker / legal partner?

---

## 6. Diffusion Demystified: From Noise to Midjourney

**Status:** ✅ Selected — contacted Tom · format TBD (talk + live gen vs workshop)

**Pitch:** The whole track is LLMs — text in, text out. Image/video gen works
*completely differently*: no next-token prediction, but iterative denoising. Pulls
the curtain on how typing words turns random noise into a photograph.

**Fits because:** Sibling to Tom's *Math Behind the AI Curtain* — that demystifies
LLM internals, this demystifies the other half of modern AI that LLM-focused devs
never learn. Wouter runs Midjourney → real practitioner angle, not just theory.

**If talk + live gen:**
- Forward diffusion (add noise) vs reverse (learn to remove it)
- How text steers denoising (CLIP / conditioning) — what the prompt actually does
- Why hands/text used to break, and what fixed it
- Live: same prompt, watch the denoising steps; then real Midjourney prompt-craft
- Where it's going: video (Sora-style), ControlNet, workflow tools

**If workshop:** ComfyUI node-graphs / local Stable Diffusion, hands-on.

**Honest read:** most "fun/curiosity," least "bill a client tomorrow." Enrichment,
not capability — but genuinely fascinating and complements Tom's math talk.

**Open:** talk vs workshop? · pair/co-present with Tom's session?

---

## 7. Text-to-SQL & Semantic Search on Your Own Data

**Status:** ✅ Selected — 2h workshop (hands-on by nature)

**Pitch:** "Let non-technical people just *ask* the database in plain English."
The demo that lights up executives and quietly fails in prod when the model invents
a column or table-scans 40M rows. Shows the real, safe version.

**Fits because:** Most concretely client-deliverable session in the pool — every
client has a DB and someone who wishes they could query it without SQL. Applied
follow-on to RAG (#2): semantic search over rows is the same embedding machinery.

**Arc:**
- Naive text-to-SQL: hand it the schema, watch it hallucinate a column
- Make it safe: schema grounding, read-only roles, query validation, row limits, cost guards
- Semantic search: pgvector over a products/docs table — "find similar" not "find exact"
- Hybrid: when to translate-to-SQL vs embed-and-retrieve, and combining both

**Overlap risk:** shares the embedding/pgvector foundation with RAG (#2). Either
reinforcement (this is the *structured-data* application) or redundancy. Could fold
into the RAG workshop's back half if the track needs to be tighter.

**Open:** standalone vs RAG back-half? · presenter?
