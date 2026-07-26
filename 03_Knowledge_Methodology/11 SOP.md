# SOP — Delivering the AI Prescription Assessment

> **Layer:** Knowledge & Methodology | **Purpose:** Step-by-step operational procedure for delivering the AI Prescription Assessment consistently, regardless of who runs it | **Status:** Active — source of truth | **Owner:** Founder | **Version:** 1.0

This is the internal delivery system, not marketing copy. It exists so another consultant could eventually run the Assessment without relying on the founder's memory. It implements AI_Prescription_Assessment_Product.md (what's sold) using the reasoning in AI Prescription.md (how to diagnose) — this SOP doesn't redefine either, it just makes them executable, step by step.

## 1. Client Journey: Booking to Completion

1. Client books the Assessment and pays the fixed fee upfront.
2. Client receives a confirmation with a link to the Business Health Check and an estimated turnaround (Health Check → diagnosis session → report → debrief, typically within 5–10 working days end to end).
3. Client completes the Business Health Check asynchronously (target: within 3 days of booking; one reminder sent if not completed by day 2).
4. Diagnosis session is scheduled — consultant proposes times and explicitly asks the client to include one other relevant person if the business size allows (see step 2 below for how to decide who).
5. Diagnosis session takes place.
6. Consultant completes analysis and drafts the Prescription Report (target: within 3 working days of the session).
7. Debrief call is scheduled and delivered.
8. Report and any follow-up materials are sent to the client in writing after the debrief.
9. Internal reflection and Lessons Learned entry completed (see section 10) — this step is not optional and is not client-facing.

## 2. Consultant Preparation Steps

Before the diagnosis session, the consultant must:

Read the Business Health Check output in full and list every hypothesis it raises, without editing or filtering any of them yet.

Identify who else in the business should ideally be part of the session, based on which hypotheses involve a process someone other than the owner actually performs (e.g. if the hypothesis concerns "quoting," the person who prepares quotes should be included if at all possible). Message the client requesting this before the session, not on the day.

Prepare specific, evidence-seeking questions for each hypothesis (per AI Prescription.md section 2's diagnosis questions) rather than walking in with only general questions — vague preparation produces a vague session.

Check whether the business type or any hypothesis already resembles a documented case in AI_Prescription_StressTest.md or a completed Client Record, and note any relevant pattern to test for, without assuming it will repeat.

Confirm session logistics (time, format, who's attending) 24 hours ahead.

## 3. Assessment Session Structure

Recommended structure for a 60–90 minute session, adjusted for business size:

**Opening (5 minutes).** Explain the purpose plainly: this is a diagnosis, not a sales conversation; the outcome may be "you don't need AI," and that's a legitimate, successful result. State this every time, even with repeat-feeling clients — it sets the tone for honest answers.

**Hypothesis walkthrough (30–50 minutes).** Go through each hypothesis from the Health Check one at a time. For each: ask what actually happens, ask to see it if possible (a real example, not a description), ask who else is involved, and apply the diagnosis questions from AI Prescription.md section 2. Do not move to the next hypothesis until the current one has either been confirmed with evidence or reclassified.

**Open discovery (10–15 minutes).** Ask directly: "Is there anything we haven't talked about that's actually more frustrating than what's on this list?" New, unlisted friction points are common and should be captured with the same rigor as the pre-identified ones.

**Closing (5 minutes).** Confirm what happens next and when. Do not offer any conclusions, recommendations, or reassurance about outcomes in the room — the temptation to soften the moment with a hint of "this looks promising" undermines the independence of the later analysis.

## 4. Information Collection Process

During the session, the consultant logs, per hypothesis/friction point: the original hypothesis as stated in the Health Check, what was actually found, the evidence gathered (a description of what was shown or demonstrated, not just what was said), who provided the information and their role, and any contradiction between what different people said.

Use a consistent template per friction point so nothing depends on the individual consultant's note-taking style — the same six fields, every time, for every friction point, whether ultimately relevant or not.

## 5. Diagnosis Activities (Post-Session, Pre-Analysis)

Before scoring anything, for each friction point logged: re-read the evidence and explicitly answer, in writing, "is this really the root problem, or is it a symptom of something else?" Where evidence pointed to a different underlying cause than the original hypothesis (as happened in the Bright Spark and Halloway & Reed stress test cases), record the corrected understanding clearly, not just the final conclusion — the correction itself is useful data for later reflection.

## 6. Analysis Process

For each friction point, in order:

Apply the AI Suitability Test (AI Prescription.md section 3) and record which, if any, of the five conditions apply, with a one-line justification for each.

If AI is not rejected, score it against the six prioritisation factors (AI Prescription.md section 4). Use a simple high/medium/low rating per factor rather than a numeric score — consistent enough to compare between friction points, simple enough not to invite false precision.

Where AI is appropriate, check the Automation Catalog for a matching existing product; if none exists, flag it explicitly as a candidate new catalogue entry.

Where AI is not appropriate, define concretely what should happen instead (a process fix, a referral, or a monitor-and-revisit decision) — never leave a rejected friction point without a stated alternative.

Run the relevant numbers through ROI_Calculator.md for anything time-saving, using conservative estimates, not optimistic ones (per ROI_Calculator.md's own honesty guidance).

Sequence the surviving opportunities into first / later / not yet, per AI Prescription.md section 4's sequencing logic, not by size of opportunity alone.

Assign each friction point its own outcome (implement with Digital Footprint / client implements internally / process fix without AI / referral elsewhere / monitor and revisit), per AI Prescription.md v1.1 — never assign one outcome to the whole engagement.

## 7. Prescription Report Creation

Structure, per writing-style.md (plain language, short paragraphs, no jargon, no bullet-heavy formatting in the client-facing document itself):

Opening summary of what was found, in plain terms, before any recommendations.

One section per friction point: what was found, the evidence behind it, and the recommended outcome — stated as plainly and confidently when the answer is "don't build this" as when it's "build this."

Where AI is recommended: which Automation Catalog product, a rough cost/benefit estimate from the ROI Calculator, and where it sits in the sequence (first, later, not yet).

Where AI is not recommended: what to do instead, and why, without hedging.

A closing roadmap view — one page, plain language, showing the sequence across all friction points together, so the client can see the shape of the whole recommendation at a glance.

## 8. Debrief Call Structure

Recommended structure for a 20–30 minute call:

Restate the purpose (clarity, not a sales pitch) briefly, same as the session opening.

Walk through the report roadmap first, at a high level, before diving into individual friction points — the client should understand the shape of the recommendation before the detail.

Go through each friction point, inviting questions as you go, particularly checking understanding on anything recommended against AI or against implementation.

Close by stating plainly that no further action is required, and that implementation (if wanted) is a separate, subsequently-scoped conversation — do not use the debrief as a sales close.

Send the written report immediately after, even though it was already discussed live.

## 9. Quality Checks Before Delivery

Before the Prescription Report is sent, the consultant checks:

Does every friction point identified during the session appear in the report, with no silent drops?

Does every friction point have an explicit, stated outcome — no ambiguous or implied recommendations?

Was the AI Suitability Test genuinely applied to each one, with a stated justification, rather than assumed?

Does the report read in plain language, free of jargon, per writing-style.md — read it aloud once as a check.

Is at least one recommendation, where applicable, something other than "buy an AI product" — if every single friction point across a whole engagement ends in an AI recommendation, treat that as a signal to re-check the analysis before sending, not a sign of a strong pitch.

Are ROI figures conservative and defensible, not inflated, per ROI_Calculator.md.

## 10. Feeding Results Back Into Lessons Learned

After every debrief, before moving to the next client, the consultant completes the structured reflection defined in AI Prescription.md section 8:

Was the initial Health Check hypothesis correct, and if not, what was missed? Did the five AI-suitability conditions correctly predict what worked? Did the prioritisation sequencing hold up, or would a different order have been better in hindsight? Did anything surprise the consultant?

This reflection is logged in `13 Lessons Learned.md` as a raw entry, tied to the (anonymised, if needed) client record. It is not optional, and it happens even when the engagement felt routine — routine engagements are exactly where useful small lessons get skipped if this step isn't enforced as a standing habit, not a discretionary one.

## Notes for Future Consultants

If any step in this SOP feels ambiguous or produces inconsistent results between different people running it, that ambiguity is itself worth logging in Lessons Learned — an unclear SOP step is a methodology gap the same as anything found in a client session.
