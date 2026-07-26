# AI Prescription Client Health Check (Client Intake Form)

> **Layer:** Knowledge & Methodology | **Purpose:** The actual instrument used to create the initial hypothesis before diagnosis (AI Prescription.md section 1) | **Status:** Active — template, copy per client | **Owner:** Founder | **Version:** 2.0

Sent to the client after booking, completed asynchronously, before the diagnosis session. Answers can be typed, spoken, or attached as documents/examples. This questionnaire produces a hypothesis, not a diagnosis — nothing collected here is treated as confirmed until tested live in the Assessment session, per "the intake creates a hypothesis, the diagnosis discovers the reality" (AI Prescription.md).

**Design rules followed throughout:** no question mentions AI, automation, or any specific technology before the client has already described their situation in their own terms — the word "AI" does not appear until the very last section, and only then to capture what the client already believes, not to prompt it. Every question asks about business reality (what happens, how often, who's involved) rather than technology interest (what tool would you like). Ordering is deliberate: broad context first, specifics later, the client's own theory of the fix last, so earlier answers aren't biased by revealing what kind of company this is partway through.

---

## Section A — Business Snapshot

**A1. What does your business do, in a sentence or two?**
Type: Open text.
Why: Establishes basic context and, importantly, how the owner frames their own business — the words they choose here often reappear later in Section B and are worth comparing.
Investigation paths: If the description is very different from what the team later says in the diagnosis session, that mismatch itself is worth investigating (does the owner see the business differently from the people running it day to day).

**A2. How many people work here, including yourself?**
Type: Multiple choice (Just me / 2-5 / 6-15 / 16-30 / 31-50 / 50+).
Why: Sets scale expectations and cross-checks fit against `ideal_client.md` criteria.
Investigation paths: A business outside the target range doesn't disqualify the Health Check but flags a pre-qualifying conversation is worth having before booking a full Assessment.

**A3. Are you still involved in the day-to-day running of the business?**
Type: Multiple choice (Yes, hands-on every day / Yes, but less than I used to / No, I mostly manage from a distance).
Why: Directly tests a core `ideal_client.md` assumption rather than inferring it.
Investigation paths: "No" answers suggest the diagnosis needs to prioritise interviewing whoever actually runs daily operations, not the owner, per the multi-perspective principle in AI Prescription.md v1.1.

## Section B — Time and Attention

**B1. Think about last week. What took up the most time that felt repetitive, or that you or your team have done the same way for months or years?**
Type: Open text.
Why: Targets habitual, normalised friction directly — the exact blind spot AI Prescription.md warns about (business owners often can't see their own biggest time-drain because it's become invisible).
Investigation paths: Vague or "nothing really" answers are themselves a signal — worth probing live rather than accepting at face value, since habitual tasks are precisely the ones that feel unremarkable to the person doing them.

**B2. On a scale of 1-5, how much of your own time each week goes on tasks you'd rather hand to someone or something else?**
Type: Scale (1 = almost none, 5 = a huge amount).
Why: A quick quantifiable gauge of perceived burden, useful for the trust-building prioritisation factor later (AI Prescription.md section 4), without asking "would you like AI to help."
Investigation paths: A high score paired with a vague B1 answer suggests real frustration without a clear diagnosis yet — a strong candidate for deeper live investigation.

**B3. If you removed one task from your week entirely, which would create the most relief — not necessarily the most time saved, just relief?**
Type: Open text.
Why: Deliberately separates emotional burden from raw time cost, since AI Prescription.md's prioritisation explicitly weighs more than pure time/money impact.
Investigation paths: If this answer differs from B1's "most time-consuming" answer, both should be investigated as separate friction points, not merged into one.

## Section C — Friction, In Your Own Words

**C1. Describe, in your own words, the thing that frustrates you most about running this business day to day.**
Type: Open text.
Why: The core hypothesis-generating question. Deliberately open and unprompted, to capture the client's own framing and language, feeding directly into the Section A discipline of `Client_Conversation_Capture_Template.md`.
Investigation paths: Whatever is named here becomes the first hypothesis tested live in the diagnosis session, using the root-cause questions in AI Prescription.md section 2.

**C2. Have you already tried to fix this? What did you try, and what happened?**
Type: Open text.
Why: Prior attempts reveal what didn't work and why, and often surface the real underlying constraint (budget, team resistance, lack of time to follow through) rather than a lack of a solution.
Investigation paths: A pattern of "started but never finished" attempts suggests the root issue may be capacity or ownership, not the absence of a fix — worth testing directly in the diagnosis.

**C3. If nothing changes about this in the next 12 months, what happens?**
Type: Open text.
Why: Directly seeds the "what happens if we do nothing" diagnosis question from AI Prescription.md section 2, and tests how seriously the client rates the problem's consequence, independent of how they described its annoyance.
Investigation paths: A low-stakes answer ("honestly, probably fine") despite an emotionally strong C1 answer is a real contradiction worth flagging for the diagnosis session, per the Evidence Extraction Framework's contradiction-flagging step.

## Section D — Dependencies and Risk

**D1. If you were unexpectedly unavailable for two weeks, what would suffer most?**
Type: Open text.
Why: Surfaces single points of failure and undocumented knowledge without asking about "knowledge management" directly — a business-reality question, not a technology question.
Investigation paths: Answers naming a specific person (not a process) flag a dependency risk worth investigating as its own friction point, distinct from whatever was named in Section C.

**D2. How much of what your business "knows how to do" exists only in people's heads, versus written down somewhere?**
Type: Scale (1 = almost all written down, 5 = almost all in people's heads).
Why: A direct, quantifiable proxy for the "foundations not ready" AI-suitability condition (AI Prescription.md section 3) — useful groundwork before the diagnosis even starts.
Investigation paths: A high score (mostly in people's heads) should lower expectations for any AI recommendation involving that knowledge, since the foundations condition is likely to apply.

## Section E — Systems and Tools (Facts, Not Opinions)

**E1. What software or systems do you currently use to run the business? List whatever comes to mind — booking, invoicing, communication, spreadsheets, anything.**
Type: Open text.
Why: A factual inventory, not an opinion question — deliberately avoids asking "do you like your current systems" to prevent the client pre-judging what needs replacing.
Investigation paths: Feeds directly into `Business_DNA_Framework.md` section 5 (Operating Systems) if the engagement proceeds.

**E2. Do any of these systems fail to share information with each other, causing extra manual work (e.g. re-typing the same information twice)?**
Type: Multiple choice (Yes, often / Occasionally / Not that I've noticed / Not sure).
Why: Targets a concrete, common root cause (integration gaps) using observable behaviour rather than asking the client to self-diagnose.
Investigation paths: "Yes, often" should trigger a specific evidence request in the diagnosis session — ask to see a real example of the double-entry happening.

## Section F — Your Own Theory (Captured Last, Deliberately)

**F1. Do you already have an idea of what might fix the issue you described in C1? Describe it in your own words, even if it's just a rough idea — including if you think AI or a specific tool might be the answer.**
Type: Open text.
Why: Placed last on purpose, after the client has already described their business in their own terms — asking this earlier risks the client reframing every prior answer around the solution they already have in mind, rather than describing the actual problem. This is the only point in the questionnaire where "AI" is mentioned, and only to record what the client already believes, never to suggest it.
Investigation paths: Per AI Prescription.md v1.1, this answer is treated as a hypothesis to test, never a brief to fulfil — the diagnosis session must investigate why they believe this is the right fix and what underlying problem they're actually trying to solve, exactly as the Assessment Interview Guide already specifies.

**F2. Anything else you think is worth mentioning that we haven't asked about? Feel free to attach documents, screenshots, or examples.**
Type: Open text / file attachment.
Why: A catch-all for anything the structured questions missed — the questionnaire cannot anticipate every business's specific reality.
Investigation paths: Treated with the same rigour as any Section C finding — logged as a hypothesis, not accepted at face value.

---

## Consultant Use Only (Not Shown to Client)

Hypotheses identified from the above, listed individually, ready to be tested in the Assessment session. Who else in the business should ideally be included in the session, based on A3 and D1 answers. Any contradictions between answers (e.g. C1 vs C3, or B1 vs B3), flagged specifically for live investigation. Any pattern this resembles from `AI_Prescription_StressTest.md` or a past Client Record — noted as something to test for, never assumed to repeat.

## Changelog

**v2.0** — Replaced general prompts with exact, ordered questions, question types, rationale, and investigation-path notes per section, designed to avoid leading the client toward AI before they've described their actual situation.

**v1.0** — Initial general-purpose intake structure.
