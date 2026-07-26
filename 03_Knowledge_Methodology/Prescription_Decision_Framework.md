# Prescription Decision Framework

> **Layer:** Knowledge & Methodology | **Purpose:** The decision process between diagnosis findings and a final recommendation — exists specifically to prevent the jump from "problem found" straight to "sell implementation" | **Status:** Active — source of truth | **Owner:** Founder | **Version:** 1.0

This framework operates on evidence already gathered via `Assessment_Interview_Method.md` and `Assessment_Interview_Guide.md`. It implements `11 SOP.md` section 6 (Analysis Process) in more depth, and does not alter `AI Prescription.md` — it makes that methodology's diagnosis-before-prescription principle mechanically hard to skip.

Every recommendation must be able to survive this question: would this exact recommendation have been written if Digital Footprint had no commercial interest in the answer? If the honest answer is no, the recommendation isn't ready.

## 1. Possible Prescription Outcomes

Every friction point receives exactly one of these, decided independently of every other friction point in the same engagement (per AI Prescription.md v1.1's per-friction-point outcome principle):

**AI Implementation** — a genuine, evidence-backed fit for an AI solution, either delivered by Digital Footprint or by the client themselves. Only reached if the friction point has already passed the AI Suitability Test (AI Prescription.md section 3) in full.

**Process or Operational Change** — the root cause is a process, structure, or workflow problem, not a technology gap. No AI or software recommendation attaches to this outcome, ever, even as a "nice to have alongside."

**Training or Capability Building** — the root cause is a skills, knowledge, or confidence gap in the people already doing the work. Distinct from a process fix: the process may be fine, but the people running it need support to run it well. Distinct from AI implementation: automating a task nobody in the business understands well enough to check makes the underlying gap worse, not better (echoing AI Prescription.md's "process not understood" condition).

**Referral to Another Specialist** — the real issue sits outside Digital Footprint's expertise entirely (a legal, financial, staffing, or capacity issue, for example). Naming a specific type of specialist to look for, even without a named recommendation, is more useful to the client than a vague "seek other help."

**No Action / Monitor and Revisit** — the honest conclusion is that nothing should change yet, either because the cost of the problem is genuinely low, or because the business isn't ready for any intervention until something else changes first. This is a complete, legitimate outcome, not a placeholder for "we couldn't find anything."

## 2. Decision Criteria

Work through in this order, for every friction point, before writing anything into the report:

Is the root cause actually understood, with evidence, not just a symptom described by the client? If not, no outcome can be assigned yet — return to further investigation rather than guessing.

Does this pass the AI Suitability Test (AI Prescription.md section 3)? If any of the five conditions apply, AI Implementation is already ruled out for this friction point, regardless of how appealing it might otherwise look.

If AI is not ruled out, does the underlying gap sit in the process, the people's capability, or the technology? A tempting shortcut is to default to whichever category is easiest to say — resist this by asking directly: if we replaced the technology entirely but changed nothing else, would the problem persist? If yes, it's process or training, not technology.

Does this sit within Digital Footprint's actual expertise? If not, Referral is the honest outcome regardless of how solvable the problem might look to a different kind of specialist.

Does the evidence support real cost or risk if nothing changes? If the honest answer is "not much," No Action / Monitor and Revisit is the correct outcome, even if a build was technically possible.

## 3. Evidence Requirements Before Recommending Implementation (AI or Otherwise)

No friction point may receive an Implementation outcome (AI or process/training build) without all of the following, gathered per `Assessment_Interview_Method.md` section 7: at least one piece of evidence beyond the client's original description. A clear answer to what happens if nothing changes. Confirmation of who is actually accountable for the process today. For AI specifically: an explicit, written pass on all five AI Suitability Test conditions, not an assumed pass. A conservative ROI estimate from `ROI_Calculator.md`, where time or cost saving is the basis for the recommendation. A specific match to an `Automation_Catalog.md` product, or an explicit flag that this would be a novel build.

Any friction point missing one of these is not ready for an Implementation outcome — the correct move is to log it as insufficiently investigated (per `Assessment_Interview_Method.md` section 7), not to round up to a recommendation because the deadline for the report is close.

## 4. Anti-Sales Checks

Run this checklist against every Implementation recommendation before it's written into the report, without exception:

Would I recommend this if Digital Footprint had no ability to build it? If the honest answer is no, the recommendation is not independent, and should be downgraded to Process/Training or reconsidered entirely.

Is there a simpler or cheaper alternative that achieves most of the same benefit? If yes, and it hasn't been offered as an option or explicitly ruled out with a stated reason, the recommendation is incomplete.

Am I recommending the biggest opportunity, or the most appropriate next step? Re-check against the six prioritisation factors (AI Prescription.md section 4) — size of opportunity should never be the deciding factor on its own.

Does this recommendation exist because the evidence supports it, or because it's the kind of work Digital Footprint most wants to sell right now? This question should be asked honestly and specifically — commercial preference is a real pressure, not a hypothetical one, and pretending otherwise doesn't make it disappear.

Have I checked whether the true fix is actually a No Action / Monitor and Revisit outcome, and am I recommending action anyway because a report with no build recommendations feels like a weak deliverable? A report is not weak because it recommends less — see section 6.

## 5. How Recommendations Should Be Written

Plain language, per `writing-style.md` — no jargon, no hedging softeners ("might," "could potentially") used to avoid full commitment to a stated conclusion. State the finding first, then the evidence behind it, then the recommendation — never lead with the recommendation and retrofit justification. Every Implementation recommendation names the specific `Automation_Catalog.md` product (or flags it as novel), the rough cost, the rough benefit from `ROI_Calculator.md`, and where it sits in the roadmap sequence (first / later / not yet). Every recommendation is written with the same level of confidence and completeness regardless of which of the five outcomes it is — a Process Change recommendation should read as thoroughly reasoned as an AI Implementation one, never as an apologetic afterthought.

## 6. Explaining Why Something Is NOT Recommended

State it as plainly and confidently as a "yes" — never hedge a "no" more than a "yes." Lead with the finding, not an apology: "the root cause here is X, and the evidence for that is Y" reads the same whether X points toward a build or away from one. Always pair a non-Implementation outcome with a concrete alternative — what should happen instead, not just what won't happen (a Process Change or Training recommendation, a Referral to a named type of specialist, or an explicit statement of what would need to change before revisiting a No Action outcome). Explicitly acknowledge, where relevant, that a build was considered and ruled out, and briefly why — this demonstrates the diagnosis actually happened rather than the client simply not being offered anything. Never frame a "no" as a consolation or a lesser outcome — per Company Philosophy.md, "we judge ourselves by the quality of the no's we give as much as the yes's," and the report's tone should reflect that this is genuinely the company's standard of a job well done, not a fallback.

## Relationship to Other Documents

This framework is the checkpoint between the evidence gathered in the Assessment session and what gets written into `Prescription_Report_Template.md`. It doesn't replace `11 SOP.md` section 6 — it's the detailed decision logic that section summarises, made explicit enough that a different consultant, using the same evidence, should reach the same recommendation.
