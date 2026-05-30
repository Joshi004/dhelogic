# TechSergy Website Audit — Positioning, Messaging & Customer Psychology

**Prepared for:** Naresh Joshi, Founder & CEO
**Date:** May 30, 2026
**Method:** First-time-visitor review of the running site (all five pages), read against the complete page source/content.
**Scope:** Business, marketing, positioning, and customer-psychology review. This is an audit, not an implementation — every issue includes a recommended fix you can choose to act on.

---

## How to read this report

You can act on this report without reading all of it. If you only have five minutes:

1. Read the **Executive Summary** below.
2. Read **Quick Wins** (Section 7) — the highest-impact changes that take the least effort.

The middle sections explain *why* each change matters, so that when you (or whoever edits the site) make a change, you understand the reasoning and don't accidentally re-introduce the problem.

---

## The transition, in one paragraph

**What the company does today (as the website still partly presents it):** a general IT services and software development shop — application development, IT strategy/consulting, staff augmentation, plus "AI/ML solutions." A capable generalist that builds whatever a client needs.

**What the company wants to become:** a *specialist* that does one thing exceptionally well — **reducing companies' production AI inference costs** (cutting their OpenAI/Anthropic bills) through fine-tuning, distillation, quantization, and self-hosted inference.

**Why the repositioning matters:** specialists win higher trust, higher prices, and easier decisions. A buyer with a $40K/month OpenAI bill is looking for "the company that fixes exactly this," not "a software shop that also does AI." The moment the site looks like a generalist, that buyer assumes you're not the expert and keeps looking.

**The business outcome we're optimizing for:** a first-time visitor with a painful, expensive AI bill should think *"these are the people who solve precisely my problem"* within ~5 seconds, trust it by the time they scroll, and book a free cost audit. Every recommendation in this report serves that single outcome.

---

## 1. Executive Summary

**Overall verdict:** The repositioning is **about 70% done**. The core of the site — the homepage hero, the problem framing, the services, the process, and the two real inference case studies — is genuinely strong and clearly communicates a specialist in AI inference cost reduction. The pivot is real and it shows.

But the remaining **30% actively contradicts the new positioning**, and because it's spread across high-trust locations (the Portfolio, the About values, the Contact form, the footer), it does disproportionate damage. A sharp buyer will notice the contradictions and downgrade their confidence — exactly the audience you most want to convert.

**The single biggest problem:** The website tells two different stories about what you are.
- **Story A (the new one, mostly on Home & Services):** "We are inference-cost-reduction specialists. We cut your AI bill by 60–85%."
- **Story B (the leftover one, on Portfolio, About, Contact, Footer):** "We are a general software/AI agency that builds trading systems, video platforms, privacy tools, and offers staff augmentation."

A visitor who reads both stories doesn't average them — they distrust both. Mixed signals read as "this company doesn't really know what it is," which is fatal for a specialist.

**The five things hurting you most (in priority order):**

1. **The Portfolio undermines the entire pitch.** 6 of 8 case studies are generic software projects (algorithmic trading, video AI, privacy compliance, contract OCR, market-data streaming). Only 2 are about inference cost reduction. The page your hero sends people to ("See Our Results") is the page that most makes you look like a generalist.
2. **The Contact form's "Service Interested In" dropdown still offers the old menu:** "Application Development," "IT Strategy & Consulting," "Staff Augmentation." This is the last screen before conversion, and it reintroduces the generalist identity at the worst possible moment.
3. **The About page's values and mission are generic-agency boilerplate** ("we won't rebuild your app in the latest framework," "we write tests and do code reviews," "empower ambitious teams building new things"). None of it signals a cost-optimization specialist.
4. **The footer advertises the old services** ("Web Development," "IT Consulting," "Staff Augmentation") — and those links are also broken (they point to page sections that no longer exist).
5. **Credibility is thin and slightly inconsistent.** A single client logo (Tether), aggregate stats ("85% avg cost reduction," "<2% quality delta") that imply a long track record, "we're still growing" language that implies the opposite, and a savings number that changes from page to page (60–85% / 85% / 99% / 89% / 94%). Sharp buyers cross-check these things.

**The good news:** none of this requires a redesign. It's almost entirely **content and configuration** — hide/replace some case studies, rewrite a dropdown, rewrite the About values, fix the footer, and make your numbers consistent. The hard part (a clear, well-designed core message) is already built.

---

## 2. Current Positioning vs Desired Positioning

| Dimension | What the site signals today | What it should signal | Gap |
|---|---|---|---|
| **Who you are** | "Software/AI agency that also does cost work" (mixed) | "The AI inference cost-reduction specialist" | Medium |
| **What you sell** | Audits + fine-tuning + self-hosting **AND** app dev, consulting, staff aug | Only the four cost-reduction services | Large (Contact, Footer) |
| **Proof** | 8 case studies, mostly generic builds; 1 logo | 2–4 cost-reduction case studies, sharply told | Large (Portfolio) |
| **Who it's for** | Anyone with a software project | "Companies overpaying for production AI" | Medium |
| **Why you** | "We're partners; we're growing" | "We're the experts in this one expensive problem" | Medium (About) |
| **The ask** | "Get Started" / "Start a Project" (generic) | "Book a Free Cost Audit" (specific) | Small (inconsistent) |

**Where you're already winning:** the homepage hero ("Your AI Costs Are Out of Control"), the problem section ("Paying PhD Rates for File-Clerk Work"), the four services, the 6–8 week process, the two real cost case studies (SaaS support −89%, legal distillation −94%), and the founder's personal story. This material is specialist-grade. The goal of the rest of this report is to make the *whole* site as sharp as these pieces.

---

## 3. Major Findings

Each finding is framed as **Problem → Why it matters → Recommendation**, per your review framework.

### Finding 1 — The Portfolio is a generalist portfolio wearing a specialist label

**Problem.** The Portfolio shows 8 projects. Mapped to your new niche:

| # | Project | On-niche? | Status |
|---|---|---|---|
| 1 | SaaS Support Platform — 89% inference cost reduction | ✅ Yes | Completed |
| 2 | AI-Powered Mortgage Document Automation | ❌ Generic doc-AI | Completed |
| 3 | Legal Contract Classifier — 94% cost reduction via distillation | ✅ Yes | Completed |
| 4 | Video Analysis AI Platform | ❌ Generic | **In Development** |
| 5 | Algorithmic Trading System (ATS) | ❌ Generic | **In Development** |
| 6 | Digital Privacy Protection Platform | ❌ Generic | Completed |
| 7 | Enterprise Contract Digitization Platform | ❌ Generic | Completed |
| 8 | Ticker Stream Generation System | ❌ Generic | Completed |

So **6 of 8 are generic software builds**, two of which (Video Analysis, Algorithmic Trading) carry an "In Development" badge. Their headline metrics reinforce the generalist read — "6 Microservices," "70% Test Coverage," "Multi-Broker Support," "5M+ Hours Processed," etc. None of those are cost-reduction outcomes.

**Why it matters.** Your hero's secondary CTA is literally "See Our Results," and the problem section says "See a Real Example" → both go to Portfolio. You are personally driving your most engaged, most skeptical visitors to the page that most contradicts your positioning. A buyer thinking "are these really inference specialists, or just a dev shop with one good case study?" gets their doubt *confirmed* here. This is the highest-leverage problem on the site.

**Recommendation.**
- Set `showOnPortfolio: false` for the six off-niche projects (a one-line change per JSON file in `src/data/projects/`). Lead with the two real cost case studies.
- Two strong, specific case studies beat eight generic ones for a specialist. "We only show inference work because that's all we do" is a *feature*, not a gap.
- If you want to demonstrate engineering depth without diluting the niche, fold the best generic projects into a small, clearly-labeled "Prior engineering experience" strip — visually subordinate, not headline case studies — or move them off the site entirely.
- Never show "In Development" generic projects as proof; "In Development" + off-niche = the weakest possible trust signal, and two of your eight cards carry that badge today.

### Finding 2 — The homepage "Recent Work" carousel leads with your weakest-rendered proof

**Problem.** The homepage "Recent Work" carousel pulls the projects flagged `showOnHomepage` — currently **4 of the 8 projects**: SaaS Support (−89%, on-niche), Mortgage Automation (generic doc-AI), Video Analysis AI (generic), and Algorithmic Trading (generic). So **3 of the 4 cards a homepage visitor scrolls through are generic builds.** Worse, the one on-niche card (SaaS −89%) has **empty** homepage use-cases and metrics, so it renders sparse, while the two generic cards (Video AI, Algorithmic Trading) have fully populated use-cases and metrics and render *richer and more impressive than your actual niche work.* Note the irony: your second-best proof, the Legal Classifier (−94% via distillation), is **excluded** from the homepage entirely (`showOnHomepage: false`).

**Why it matters.** On the one page everyone sees, the carousel is mostly generic software, the most visually complete cards are generic, and one of your two best assets is hidden. The homepage spends its credibility budget showing off the wrong thing.

**Recommendation.** Restrict the homepage carousel to the inference case studies — turn `showOnHomepage` on for the Legal Classifier, off for Mortgage/Video AI/Algorithmic Trading — and populate the cost studies' homepage use-cases/metrics so they render fully (cost before/after, latency, quality parity).

### Finding 3 — The Contact form reintroduces the old business at the conversion moment

**Problem.** The "Service Interested In" dropdown options are: *AI/ML Solutions & Data Analytics, Application Development, IT Strategy & Consulting, Staff Augmentation, Other / Not Sure.* The FAQ below it is generic-agency ("How quickly can you start on my project?", "Do you work with startups?", "typical project timeline 4–12 weeks", "we join your Slack/Teams").

**Why it matters.** The contact page is otherwise excellent and on-niche (it asks for monthly AI spend, use case, and current provider — exactly right). But the dropdown and FAQ pull the visitor back into "generic agency" thinking *at the exact moment they're deciding to convert.* It also creates a jarring mismatch: "Book a Free Cost Audit" headline, "Staff Augmentation" dropdown.

**Recommendation.** Replace the dropdown with niche-aligned options ("Cost Audit," "Fine-Tuning / Distillation," "Self-Hosted Inference," "Ongoing Cost Optimization," "Not sure — help me figure it out"). Rewrite the FAQ to answer the real objections of this buyer (see Section 5): "Will quality drop?", "Do we really own the model?", "What about our data/compliance?", "What does it cost and how fast is payback?", "What if we have no training data?"

### Finding 4 — The About page values/mission belong to the old company

**Problem.** The values are *Innovation, Partnership, Excellence, Integrity*, described in pure dev-shop terms ("we won't rebuild your app in the latest framework just because it's trendy," "we write tests, do code reviews," "we give honest estimates... not 6 weeks to win the bid"). The Mission card reads "To empower ambitious teams building new things with technology solutions that drive growth, efficiency, and competitive advantage in the digital era" — generic and could belong to any agency.

**Why it matters.** About is where a serious buyer goes to decide *do I trust these people with a high-stakes migration?* Generic values answer "are they a fine vendor?" not "are they THE experts in cutting my AI bill?" It's a missed chance to deepen the specialist story, and the framing actively re-signals "generalist."

**Recommendation.** Replace the four generic values with specialist principles that double as differentiators — e.g. *Measured, not promised* (benchmark before deploy), *You own the outcome* (model + infra handed over, no lock-in), *Your data never leaves your cloud*, *Savings that compound* (quarterly refreshes). Rewrite the Mission to name the niche explicitly. Note: strong "Why Us" content (Outcome-Based Pricing, You Own the Model, Data Stays Yours, Fast to Deliver) already exists as a built component (`src/components/home/WhyUs.jsx`) but **is not currently rendered on any page** — reuse it.

### Finding 5 — Trust signals are thin, and a few are inconsistent

**Problem.**
- **One logo.** The "Trusted By" section shows a single client (Tether) plus a dashed "Currently accepting new clients" placeholder. One logo can read as *less* credible than none — it draws attention to the emptiness.
- **Numbers don't agree across pages.** The savings claim is "60–85%" (hero subtitle), "85%" (hero stat / About stat), "99% cheaper" (problem cards), "89%" and "94%" (case studies). A buyer who notices will wonder which is real.
- **Track-record claims vs. "we're new" language.** "85% Avg Cost Reduction" and "<2% Quality Delta" imply a substantial body of completed work, but Portfolio says "We're still growing" and "Trusted By" says "currently accepting new clients." The two messages undercut each other and invite the thought *"averaged across how many clients, exactly?"*
- **A credibility claim that isn't shown.** The About page's meta description says the firm was "Founded by engineers from Apple, Tether, and high-growth AI startups," but the visible founder bio never mentions Apple or Tether. The strongest credibility asset is hidden in metadata.

**Why it matters.** This is the specialist's hardest job: a niche expert is *expected* to have deep proof. Thin or inconsistent proof is more damaging for a specialist than for a generalist, because expertise is the entire value proposition. Sharp buyers — your best prospects — cross-check numbers.

**Recommendation.**
- Pick **one** primary headline number and use it everywhere ("typically 70–90%," or a single anchor like "up to 94%"). Let case studies carry the specific figures.
- Reconcile the "established track record" vs "just starting" tension: either present the stats as "what we deliver" tied to the named case studies, or soften aggregate stats until you have the client count to back them.
- Surface the founder pedigree (Apple/Tether/AI startups) *on the page*, not just in metadata — it's one of your strongest trust levers.
- Add 1–2 short client quotes/testimonials as soon as you can; for this buyer, a peer saying "they cut our bill 80% and quality held" is worth more than any stat you assert about yourself.

### Finding 6 — The footer still sells the old company (and the links are broken)

**Problem.** The footer's "Services" column lists *AI/ML Solutions, Web Development, IT Consulting, Staff Augmentation*. Those links point to `/services#ai-ml`, `#web-dev`, `#consulting`, `#staff-augmentation` — but the Services page sections are now `cost-audit`, `model-optimization`, `inference-infra`, `ongoing`. **All four footer service links are broken** and mislabeled. The footer tagline ("We build technology with you, not just for you") is also generic.

**Why it matters.** The footer appears on every page. It quietly reasserts the generalist identity site-wide, and broken links erode the "these people are detail-oriented experts" impression.

**Recommendation.** Replace the four service links with the four real services (correct anchors), and update the tagline to a one-line niche statement ("We cut production AI inference costs — fine-tuning, distillation, and self-hosted inference").

### Finding 7 — CTA language is inconsistent (and the generic ones are weaker)

**Problem.** CTAs vary: "Book a Free Cost Audit" / "Book a Free Audit" / "Get Started" (navbar) / "Start a Project" (portfolio) / "Work With Us" / "Get in Touch" / "Talk to the Founder." The specific ones are strong; the generic ones ("Get Started," "Start a Project") are weak and slightly off-niche.

**Why it matters.** "Book a Free Cost Audit" is a brilliant, low-friction, value-first offer that's perfectly matched to the buyer. "Get Started" and "Start a Project" sound like a generic agency and ask for more commitment. Inconsistency also dilutes the one offer you want to be memorable.

**Recommendation.** Standardize the primary CTA to the cost-audit offer everywhere (navbar included). Keep "Talk to the Founder" as a nice secondary/relationship CTA on About.

### Finding 8 — SEO/meta and microcopy still describe a generalist

**Problem.** The Portfolio meta description reads "from AI video analysis platforms processing 5M+ hours to custom web applications." The Portfolio hero says "We're still growing, but we're proud of what we've shipped so far." The About process subtitle is "A proven methodology that ensures successful project delivery every time" (generic).

**Why it matters.** Meta descriptions are what show in Google results — your first impression often happens *before* the click. "Custom web applications" tells a searcher you're a generalist before they even arrive. Humble microcopy ("still growing") undercuts authority for a specialist.

**Recommendation.** Rewrite all meta titles/descriptions around the niche and the savings outcome. Replace humble/growth language with confident specialist language ("We show only inference cost-reduction work — it's all we do").

---

## 4. Page-by-Page Review

For each page: **First impression → Clarity → Positioning → Trust/Doubt → Verdict.**

### Home — `/`
*Section order: Hero → Problem → Trusted By → Services → How It Works → Recent Work → CTA.*

- **First impression (good).** "Your AI Costs Are Out of Control" + "cutting your OpenAI and Anthropic bills by 60–85%" is an excellent, specific, emotionally resonant hook. Within ~3 seconds a visitor knows what you do and who it's for. The 85% / 6–8 wks / <2% stat band reinforces it. This is the strongest part of the site.
- **Clarity (good).** The problem section ("Paying PhD Rates for File-Clerk Work," with GPT-4o → small-model cost cards) is concrete and persuasive. Services and process are clear and on-niche.
- **Positioning (mixed).** Hero through How-It-Works = specialist. Then two sections weaken it: **Trusted By** (one logo + placeholder) feels empty so soon after the confident hero, and **Recent Work** surfaces generic builds more richly than your niche work (Findings 2 & 5).
- **Trust/Doubt.** Believes: "they clearly understand inference economics." Doubts: "is the proof real, or is this a freshly-rebranded shop?" The thin Trusted By and the generic carousel feed that doubt.
- **Order nit.** Placing the near-empty "Trusted By" immediately after a high-confidence hero spotlights the lack of logos. Until you have more logos, consider moving social proof lower, or replacing it with a stronger proof element (a headline result or a quote).
- **Verdict:** 8/10. Keep the hero/problem/services/process as-is; fix the carousel and the trust strip.

### About — `/about`

- **First impression (good).** "TechSergy is a specialist AI inference optimization firm…" — the opening paragraph is exactly right.
- **Clarity (mixed).** The opening and the founder section are clear and on-niche. The middle (Values, Mission, Process subtitle) drifts back to generic agency language (Finding 4).
- **Positioning (mixed).** Founder story is a genuine asset — "companies prototype on GPT-4… then never revisit the decision as scale changes the economics. We built a methodology around that specific transition." That's specialist positioning done well. But it sits between generic values above and a generic CTA. The Apple/Tether pedigree is hidden in metadata (Finding 5).
- **Trust/Doubt.** The founder section builds real trust (named person, LinkedIn, clear POV, "founder oversight on every engagement"). The generic values *reduce* it by making you sound like everyone else.
- **Verdict:** 6.5/10. Rewrite values + mission, surface the founder's pedigree on-page, and you'd have a genuinely strong About.

### Services — `/services`

- **First impression (very good).** "Four Services. One Goal: Lower Your AI Bill." Crisp, confident, unmistakably specialist.
- **Clarity (very good).** The four services (Cost Audit, Fine-Tuning & Distillation, Self-Hosted Inference, Ongoing Cost Intelligence) are well-scoped, with concrete features and credible technologies (vLLM, Unsloth, QLoRA, GPTQ/AWQ, LiteLLM). The "two-week audit pays for itself" framing is excellent.
- **Positioning (excellent).** This page alone would convince a buyer you're a specialist. No generalist drift.
- **Trust/Doubt.** Believes the technical competence. Might still ask "what does this cost?" and "what if it doesn't work?" — consider adding a pricing-philosophy line and a risk-reversal (you already commit to a cost target in the unused "Why Us" content — use it here).
- **Verdict:** 9/10. Your best page. Make the rest of the site live up to it.

### Portfolio — `/portfolio`

- **First impression (damaging).** After the sharp Home/Services promise, the Portfolio reads like a generic software-agency showcase: trading systems, video platforms, privacy tools, OCR pipelines. The humble subtitle ("We're still growing…") compounds it.
- **Clarity (poor for the niche).** A visitor cannot tell from this page that you specialize in cost reduction — most cards are about building software, not cutting AI bills.
- **Positioning (this is the weakest page).** See Finding 1. This is where the "generalist" impression is created most forcefully, and it's where your hero sends people.
- **Trust/Doubt.** The two real case studies (−89%, −94%) are excellent and specific. They're drowned out by six off-niche projects and two "In Development" labels.
- **Verdict:** 4/10 as-is; could be 9/10 by simply hiding the six off-niche projects and leading with the two cost studies. This is your highest-ROI fix.

### Contact — `/contact`

- **First impression (good).** "Book a Free Cost Audit" + "Tell us what you're spending and what you're building" is a perfect, low-friction, value-first ask. The qualifying fields (monthly spend, use case, provider) are exactly right and also pre-qualify leads for you.
- **Clarity (mixed).** Strong until the "Service Interested In" dropdown and the FAQ, which revert to generalist language (Finding 3).
- **Positioning (mixed).** The form *structure* is specialist; the dropdown options and FAQ content are generalist. Fixing the dropdown + FAQ would make this a fully on-niche, high-converting page.
- **Trust/Doubt.** "Free," "no sales pitch," "24 hours" all reduce friction well. The generic FAQ misses the chance to neutralize the real objections (quality, ownership, data, cost, payback).
- **Verdict:** 7/10. Two edits (dropdown + FAQ) take it to 9.

### Global — Navbar & Footer

- **Navbar:** clean; "Get Started" CTA is generic vs. the cost-audit offer used elsewhere (Finding 7). Minor.
- **Footer:** advertises the old services with broken links + generic tagline (Finding 6). Appears on every page, so it quietly works against you site-wide.

---

## 5. Customer Psychology Analysis

The target visitor is, roughly: *an engineering leader, founder, or finance-minded operator at a company already running AI in production, watching their OpenAI/Anthropic bill climb, suspecting they're overpaying, and a little afraid that "optimizing" means breaking quality or taking on a big risky project.*

Here is their likely internal monologue as they move through the site, and where it breaks.

**Stage 1 — Landing (Hero).**
- *Thinks:* "Finally — someone who names my exact problem."
- *Feels:* relief, mild excitement.
- *Trusts:* the framing; these people get it.
- *Doubts:* "Is 60–85% real or marketing?"
- **Verdict:** strong start. The doubt is normal and addressable with proof.

**Stage 2 — Problem & Services.**
- *Thinks:* "They understand the actual mechanics (small task-specific models, distillation, self-hosting). This isn't hand-wavy."
- *Feels:* growing confidence.
- *Doubts:* "Have they actually *done* this, or do they just understand it?"
- **Verdict:** the site has built desire; now it must pay it off with proof.

**Stage 3 — Looking for proof (Trusted By / Recent Work / Portfolio).** *This is where it breaks.*
- *Thinks:* "One logo… and the case studies are mostly trading systems and video apps? Are they actually inference specialists, or a dev shop that did this once?"
- *Feels:* doubt, slight letdown after the strong build-up.
- *Trusts less.*
- *Objection forms:* "Maybe they're new to this and I'd be a guinea pig."
- **Verdict:** the proof stage contradicts the promise stage. This is the conversion-killer. Fixing Findings 1, 2, and 5 directly repairs this moment.

**Stage 4 — Vetting the team (About).**
- *Thinks:* "Real founder, clear POV, good. But these values sound like every agency."
- *Feels:* reassured by the founder, slightly cooled by the generic values.
- *Missed:* the Apple/Tether pedigree that would have strongly reassured them is hidden.
- **Verdict:** net positive but leaves trust on the table.

**Stage 5 — Deciding to act (Contact).**
- *Thinks:* "Free audit, no pitch, 24 hours — easy yes." Then: "Wait, why is 'Staff Augmentation' in this dropdown? Are they actually specialists?"
- *Feels:* friction reintroduced right at the finish line.
- *Objection re-forms:* "Maybe they're a generalist after all."
- **Verdict:** the strongest offer on the site is slightly undercut by leftover generalist options.

**The core psychological problem:** the site **builds desire faster than it builds proof.** The promise (Home/Services) is excellent; the proof (Portfolio/Trusted By) is thin and off-message. For a specialist, *proof is the product.* Every recommendation that strengthens or de-dilutes proof closes this gap.

**The objections you must neutralize (and currently mostly don't):**
1. "Will output quality drop?" → lead with your "<2% quality delta / 96% parity" proof, prominently.
2. "Is this a big risky project?" → "6–8 weeks, staged, each stage delivers standalone value" (you have this — make it louder).
3. "Will I be locked in?" → "You own the model + infra, no API dependency" (in unused "Why Us" content — surface it).
4. "What about our data/compliance?" → "Runs in your cloud; data never leaves; HIPAA/GDPR/SOC2" (you have this — surface it on Contact/Home).
5. "What will it cost / when do I break even?" → add a pricing philosophy + "audit pays for itself in week one."
6. "Have you done this before?" → 2 sharp case studies + a testimonial beat 8 generic ones.

---

## 6. Recommended Changes (Prioritized)

Ranked by **impact ÷ effort**. "Effort" assumes content/config edits, not redesign.

| # | Change | Impact | Effort | Priority |
|---|---|---|---|---|
| 1 | Hide the 6 off-niche Portfolio case studies; lead with the 2 cost studies | 🔥 Very High | Low | **Do first** |
| 2 | Restrict homepage "Recent Work" to inference projects; populate their use-cases/metrics | High | Low–Med | **Do first** |
| 3 | Rewrite Contact "Service Interested In" dropdown to niche options | High | Very Low | **Do first** |
| 4 | Fix footer service links (correct + on-niche) and tagline | Medium | Very Low | **Do first** |
| 5 | Make the savings number consistent across the site | High | Low | **Do first** |
| 6 | Rewrite About values + mission to specialist principles | High | Low | High |
| 7 | Rewrite Contact FAQ around the 6 real objections | High | Med | High |
| 8 | Surface founder's Apple/Tether/AI-startup pedigree on the About page | Medium–High | Low | High |
| 9 | Standardize primary CTA to "Book a Free Cost Audit" (incl. navbar) | Medium | Low | High |
| 10 | Surface the unused "Why Us" differentiators (ownership, data, pricing) on Home/Services | High | Low–Med | High |
| 11 | Rewrite all meta titles/descriptions around the niche | Medium (SEO + first impression) | Low | Medium |
| 12 | Add 1–2 client testimonials | High | Med (needs client input) | Medium |
| 13 | Add a pricing-philosophy line + risk-reversal (committed cost target) | Medium–High | Low | Medium |
| 14 | Reconsider section order on Home (strengthen/relocate "Trusted By") | Medium | Low | Medium |

---

## 7. Quick Wins

High impact, an hour or two each, no design or new content needed:

1. **De-clutter the Portfolio.** Flip `showOnPortfolio` to `false` on the six off-niche projects (each project is one JSON file in `src/data/projects/`). Instantly transforms Portfolio from "generalist showcase" to "specialist proof." *Single biggest win on the site.*
2. **Fix the Contact dropdown.** Swap the five legacy service options for the four real services + "Not sure." ~10 minutes; removes a conversion-moment contradiction.
3. **Fix the footer.** Correct the four service links/labels and the tagline. Removes a site-wide generalist signal and four broken links.
4. **Unify the savings number.** Choose one headline figure; let case studies carry specifics. Removes a cross-page inconsistency a sharp buyer will catch.
5. **Standardize the CTA** to "Book a Free Cost Audit," including the navbar's "Get Started."
6. **Clean the homepage carousel.** Remove generic projects from `showOnHomepage` so the homepage stops out-featuring your niche work with generic builds.
7. **Pull the founder pedigree out of metadata** and into a visible line on About ("Founded by engineers from Apple, Tether, and high-growth AI startups").
8. **Rewrite the Portfolio subtitle** from "We're still growing…" to a confident specialist line ("We show only inference cost-reduction work — it's all we do.").

Doing just these eight removes ~80% of the mixed-signal problem.

---

## 8. Long-Term Improvements

Higher effort, compounding returns once the quick wins are in:

1. **Build a real proof engine.** 4–6 tightly-told inference case studies, each with: starting bill, ending bill, % saved, quality parity, latency, timeline. Anonymize where needed ("a Series-B fintech"). This is the single most valuable long-term asset for a specialist.
2. **Add testimonials and, eventually, logos.** Even 2–3 short quotes tied to results dramatically outperform self-asserted stats for this buyer. Build a habit of asking for them at the end of every engagement.
3. **Publish authority content.** A handful of genuinely useful pieces ("When does it pay to leave GPT-4o?", "Distillation vs. fine-tuning vs. routing," "A real before/after teardown") establish expertise, earn search traffic from people actively searching this problem, and give sales something to send. This is how specialists become the obvious choice.
4. **Add an interactive savings estimator.** "Enter your monthly spend + use case → see an estimated range." It's a magnet for exactly your buyer, captures leads, and demonstrates expertise before a call.
5. **Add a transparent pricing/engagement model.** Even ranges or a model ("audit is a fixed fee; optimization is outcome-based against a committed target") removes a major silent objection and pre-qualifies leads.
6. **Develop a sharper risk-reversal.** Your unused "Why Us" content already promises a committed cost-reduction target before the engagement starts — that's a powerful guarantee. Make it a centerpiece, not buried copy.
7. **Decide deliberately what to do with the legacy generic work.** If general software/AI build work still matters commercially, keep it on a clearly separated path (a sub-brand or a single "Engineering services" page) so it never dilutes the inference niche. If it doesn't, remove it entirely. Right now it's neither separated nor removed — the worst of both.
8. **Tighten SEO around the niche.** Target the actual phrases your buyer searches ("reduce LLM inference cost," "self-host Llama to cut OpenAI bill," "fine-tune to replace GPT-4o"). Align titles, descriptions, and content; this is how the right strangers find you.

---

## Closing note

You've done the hard 70%: the core message is clear, specific, and well-designed, and you have two genuinely strong case studies to anchor it. The remaining work is mostly **subtraction** — removing leftover generalist signals that contradict the new story — plus a focused effort to **deepen proof**. The quick wins in Section 7 alone will make the site noticeably more "specialist," and they're almost all one-line content/config edits.

The test to keep applying to every page, section, and word: *"Does this make a visitor more sure we are THE company to call to reduce production AI inference costs?"* If a piece of content doesn't pass that test, cut it or rewrite it until it does.
