# Full System Stress Test — Five Complete AI Prescription Assessments

> **Layer:** Knowledge & Methodology | **Purpose:** Five fictional businesses run through the entire methodology chain (Intake → Brief → Interview → Diagnosis → Decision Framework → Report → Lessons Learned) to stress-test the full system, not to prove AI is useful | **Status:** Active — reference material, not a source of truth | **Owner:** Founder | **Version:** 1.0

No new methodology created here — this exercises the existing chain end to end: `Client_Intake_Form.md`, `Client_Preparation_Brief.md`, `Assessment_Interview_Method.md` / `Assessment_Interview_Guide.md`, `Prescription_Decision_Framework.md`, `Prescription_Report_Template.md`, `13 Lessons Learned.md`.

---

## Case 1: Riverside Dental Practice — AI Genuinely the Correct Intervention

**Background:** Dental practice, 14 staff (3 dentists, 2 hygienists, front-of-house and admin team). Owner-dentist still treats patients daily.

**Intake Form Answers (selected):** A2: 6-15. A3: Yes, hands-on every day. B1: "Confirming and chasing appointments — we get a lot of no-shows and it's always someone on the front desk phoning round." B2: 4. C1: "No-shows cost us real money — an empty chair is wasted time we can't get back." C3: "We'd keep losing revenue on empty slots, and it's been getting slowly worse." D2: 2 (mostly written down — clinical software holds most records). E1: Practice management software, phone system, no SMS reminders currently. F1: "I've heard other practices use text reminders — might be worth it?"

**Preparation Brief Output:** Hypothesis grouped under Business_Problems.md "Appointment Booking" and "Reporting" (no-show tracking). No contradictions flagged — B2 and C1/C3 are consistent with each other, unusually clean. Foundations check (D2, low) noted as favourable. F1 flagged, per standard practice, as a hypothesis to test, not accept — even though it looks reasonable on its face.

**Interview Discoveries:** Front desk confirmed the process directly: appointments are confirmed by phone only, 2-3 days ahead, and no-shows run at roughly 12% of bookings — a real, counted figure, not a guess. No dependency on judgement — confirming a booking time is procedural, not a clinical decision. Evidence shown: a week's appointment log with no-shows marked.

**Diagnosis:** Root cause confirmed as-is: no automated reminder system, purely manual phone confirmation, inconsistent because front desk is often busy with in-person patients. No contradiction with the original hypothesis — a rare case where the client's own framing was accurate throughout.

**Decision Framework Outcome:** AI Suitability Test: process is well understood, high frequency (every booking), low judgement, low risk (a missed reminder is inconvenient, not dangerous), foundations ready (clinical software already holds contact data). All five rejection conditions fail to apply — genuine pass. Anti-sales check: would this be recommended without commercial interest — yes, the ROI is real and the fix is proportionate, not oversized. Outcome: **AI Implementation** — matches an AI Receptionist/reminder-style Automation Catalog product.

**Prescription Report Summary:** Automated SMS/email appointment reminders, recommended first in sequence (low effort, high trust-building value, addresses the single largest named frustration). Estimated benefit calculated conservatively from the 12% no-show rate and average chair value per slot.

**Lessons Learned to Capture:** This case matched its own intake hypothesis all the way through with no contradiction — worth watching whether "clean" cases like this are actually rarer than they first appear, or whether well-run practices with good existing systems (clinical software, low D2 score) genuinely produce more straightforward diagnoses. One data point, not yet a pattern — logged as a one-off observation per `Post_Conversation_Review_Process.md`, not promoted anywhere.

---

## Case 2: GreenEdge Landscaping — Client Wants AI, Real Issue Is Process/People

**Background:** Commercial and residential landscaping and grounds maintenance, 24 staff, several field crews plus an office team.

**Intake Form Answers (selected):** B1: "Knowing where every crew actually is and what they've finished — I find out from a phone call, if I find out at all." C1: "I want some kind of AI scheduling system that tracks the crews and jobs automatically." C2: "We tried a scheduling app two years ago. Crews found it fiddly on-site and mostly stopped logging jobs within a month." D1: "Whoever's managing the schedule that week — if they're off, it falls apart fast." F1: "Definitely think we need AI-powered scheduling — that's really what I'm after from this."

**Preparation Brief Output:** Flags a strong repetition pattern immediately: C1's request closely resembles a previously failed fix described in C2 (per Evidence_Extraction_Framework.md's symptom-vs-root-cause guidance and the lesson already logged in `AI_Prescription_StressTest.md` Scenario 2 about Marlow & Co.). Flagged as the top investigation priority. D1 flagged as a single-point-of-failure risk independent of the scheduling question.

**Interview Discoveries:** Asked directly why the previous app failed: crews said logging jobs felt like "extra admin for someone else's benefit," with no clear consequence for skipping it. No one was responsible for chasing crews who didn't log — the office team assumed crews would just do it. This was corroborated separately by a crew supervisor invited to the session, per the multi-perspective principle.

**Diagnosis:** Root cause is accountability and adoption, not the absence of the right tool — the same finding that broke the tool two years ago is still present today and would break a new one too, AI-branded or not.

**Decision Framework Outcome:** AI Suitability Test: "process not understood/adopted" condition applies directly — the underlying accountability gap must be fixed before any tracking technology, AI or otherwise, could succeed. AI Implementation is explicitly not recommended for the scheduling/tracking friction point, despite being the client's specifically requested fix. Anti-sales check specifically caught this — a system could technically be sold here, but it would fail the same way as before, and recommending it anyway would fail the "would I recommend this without commercial interest" test. Outcome: **Process/Operational Change** — define a single accountable owner per crew shift and a simple, enforced daily check-in habit, before any tooling is reconsidered.

**Prescription Report Summary:** States plainly that the requested AI scheduling system is not recommended yet, and explains exactly why, citing the 2022 failed rollout and the accountability gap found in the interview. Recommends a lightweight ownership and habit-forming process first, with a note that a tracking tool could be revisited in 3-6 months once the habit holds without one.

**Lessons Learned to Capture:** Second real (albeit fictional) instance of a client's own solution request echoing a previously failed fix — this repeats the Marlow & Co. pattern from `AI_Prescription_StressTest.md`. Per the "repeated pattern" rule, two independent instances of this shape is worth flagging as a candidate to explicitly test for in every future intake, not just watch for — recommend adding a direct question to a future Client_Intake_Form.md revision along the lines of "have you tried to fix this before, and if a tool was involved, what happened when people started using it" (note: C2 already exists and did catch this — the lesson here is more about training consultants to treat a C1/F1 request that resembles a C2 failure as an automatic top-priority flag, not a methodology gap).

---

## Case 3: Aldergate Solicitors — The Client Identifies the Wrong Problem

**Background:** Small boutique law firm, 11 staff (4 solicitors, paralegals, admin), conveyancing and family law.

**Intake Form Answers (selected):** C1: "Our website and marketing feel outdated — I think we're losing potential clients because we don't look modern enough online. I want to explore an AI marketing or content tool." B1: "Actually, thinking about it, the thing that eats the most time is chasing ID documents and compliance checks before we can even open a new case." C3 (re: marketing): "We'd probably keep getting fewer enquiries than competitors." D1: "If I'm away, new client onboarding slows right down because I sign off the compliance checks personally."

**Preparation Brief Output:** Flags a mismatch worth testing directly: the named request (C1, marketing/website) and the independently-described time drain (B1, compliance chasing) point in two completely different directions. Neither is dismissed — both are logged as separate hypotheses, but the brief notes this divergence explicitly as the top item to investigate, since the client's own stated problem (marketing) doesn't match their own stated biggest time cost (compliance).

**Interview Discoveries:** On investigation, enquiry numbers were actually stable over the past year (evidence: a simple monthly count the client kept in a spreadsheet) — the "losing clients to bad marketing" belief had no supporting evidence and turned out to be more of a general anxiety than an observed problem. Compliance document chasing, on the other hand, was demonstrated live: three recent case files each took 8-12 days just to gather ID and proof-of-address documents before work could start, and D1 confirmed this bottlenecks specifically on the owner's personal sign-off.

**Diagnosis:** The client's stated problem (marketing) does not match the evidence (stable enquiry numbers). The real, evidenced friction is compliance document collection and a sign-off bottleneck concentrated on one person. A clear case of a client identifying the wrong problem entirely — not a symptom-vs-root-cause issue like Case 2, but a genuinely different problem being named than the one actually costing the business time.

**Decision Framework Outcome:** Marketing/website friction point: no supporting evidence found — Outcome: **No Action / Monitor and Revisit**, stated honestly (enquiry numbers don't currently support this as a priority; revisit if numbers actually decline). Compliance document collection: process is well understood, high frequency (every new case), low judgement for the document-chasing part specifically (though sign-off itself is rightly kept human), foundations ready enough (documents are digital). AI Suitability Test passed for the chasing/reminder portion of the task. Outcome: **AI Implementation** for document-chasing reminders, with sign-off explicitly kept as a human step, per the "human judgement sets the boundaries" principle.

**Prescription Report Summary:** Leads with the marketing finding first, stated plainly and evidence-first, since it was the client's original request and deserves a direct, respectful answer before anything else. Then presents the compliance-chasing recommendation as the actual priority, with the owner's sign-off bottleneck named directly as a dependency risk worth their own attention regardless of any build.

**Lessons Learned to Capture:** This is a distinct failure mode from Case 2 (Marlow & Co. / GreenEdge pattern) — there, the request was the right problem with the wrong proposed fix; here, the request was an entirely different problem than the one actually costing the business money. Worth logging as its own pattern category once a second real instance appears — a single instance stays a one-off observation for now, not a methodology change.

---

## Case 4: Fernbrook Foods — AI Could Help, But Risk Boundaries Matter

**Background:** Small food manufacturer, 32 staff, produces packaged sauces and condiments for retail, subject to allergen labelling regulation.

**Intake Form Answers (selected):** B1: "Checking and re-checking ingredient labels and allergen declarations every time a recipe or supplier changes — it's slow and someone has to triple-check it by hand." B2: 4. C1: "One wrong allergen label could be genuinely dangerous for someone, so we're very cautious and it takes a long time." D2: 3. E1: Spreadsheet-based recipe and ingredient database, no direct link to label printing. F1: "Could AI help draft or check our labels faster? We're nervous about it though, given what's at stake."

**Preparation Brief Output:** Flags C1 and F1 together as a high-stakes friction point requiring particular care — the client has independently named the exact risk condition from AI Prescription.md section 3 (consequences of a mistake) before the consultant even raised it. Flagged for careful, explicit boundary-setting in the session rather than a simple yes/no framing.

**Interview Discoveries:** Walked through the actual current process: a recipe change triggers a manual cross-check against a master allergen list, done by one trained staff member, then reviewed by a second person before any label is finalised — a genuine two-person check already exists. The time cost is real (evidence: a sample recipe change log showing 3-4 hours of checking per change), but the process itself is well understood and already has a human double-check built in.

**Diagnosis:** The friction is speed and manual cross-referencing effort, not a lack of process rigour — the existing two-person check is a real safeguard already in place and must not be weakened by any recommendation.

**Decision Framework Outcome:** AI Suitability Test: process is understood, frequency is real but moderate (recipe changes happen periodically, not daily), and — critically — condition 2 (task depends on judgement/carries significant consequences) applies directly to the final allergen sign-off, though not necessarily to the first-pass cross-referencing step. Anti-sales and risk check: any recommendation must preserve, not replace, the existing human double-check. Outcome: **AI Implementation, narrowly scoped** — an AI tool to assist the first-pass cross-referencing (flagging potential allergen conflicts faster for a human to review), explicitly not authorised to finalise or approve any label without both human checks remaining in place, unchanged.

**Prescription Report Summary:** States explicitly, in its own clearly marked section, what the AI tool will never be permitted to do (final allergen approval, unsupervised label sign-off) before describing what it will do (speed up first-pass flagging). Frames the boundary itself as part of the recommendation, not a caveat added afterward.

**Lessons Learned to Capture:** This case suggests `Prescription_Report_Template.md` may benefit from an explicit, named "Boundaries" sub-section for any AI recommendation involving elevated risk or consequence, rather than folding boundary language into general prose — currently the template doesn't call this out as its own field. Log as a single instance for now; if a second high-risk case produces the same need, this becomes a real promotion candidate for the template.

---

## Case 5: Hollow & Vane Leather Co. — The Correct Recommendation Is No Action

**Background:** Small bespoke leather goods workshop, 6 staff, low-volume custom and small-batch orders.

**Intake Form Answers (selected):** A2: 2-5. B1: "Probably replying to custom order enquiries — but there aren't that many, maybe 5-10 a week." B2: 2. C1: "Nothing feels seriously broken, if I'm honest. We're small and things are manageable, I just saw an ad for AI tools and wondered if we're missing out." C2: "Not tried anything — never really felt the need." C3: "Honestly, probably nothing would happen if we left it exactly as it is." D2: 2. F1: "Not sure, really — I mostly booked this because I was curious, not because something's clearly wrong."

**Preparation Brief Output:** Flags low urgency across nearly every signal: B2 (2/5), C3 (low stated consequence), and F1 (explicit lack of a specific problem) all point the same direction, unusually consistently. Notes this as a business that may not need significant intervention, while still flagging it must be tested properly in the session rather than assumed from the intake alone, per standard practice.

**Interview Discoveries:** Walked through the enquiry-handling process live: 5-10 enquiries a week, answered personally by the owner within a day, no backlog, no missed enquiries in recent memory (checked against email folder). No hidden dependency risk beyond the ordinary owner-involvement expected at this size. No other friction point surfaced in open discovery either.

**Diagnosis:** The evidence supports the client's own low-urgency framing throughout — a genuinely low-volume, well-handled process with no material cost currently being incurred.

**Decision Framework Outcome:** AI Suitability Test: frequency and volume condition applies directly — 5-10 enquiries a week, personally handled without backlog, does not justify the complexity or cost of any build. Anti-sales check: recommending anything here would fail "would I recommend this without commercial interest" cleanly — there is no real problem to solve yet. Outcome: **No Action / Monitor and Revisit**, with a stated, concrete trigger for revisiting: if enquiry volume roughly doubles, or if the owner's personal availability changes (e.g. taking on outside work, health, family circumstances), the same friction point should be re-examined at that point, not before.

**Prescription Report Summary:** States plainly and confidently that no intervention is recommended at this time, explains the evidence supporting that (current volume, no backlog, no missed enquiries), and gives the specific, concrete conditions under which this should be revisited — so the "no" reads as a genuine, useful answer rather than a shrug.

**Lessons Learned to Capture:** This case is a clean confirmation that the AI Suitability Test's frequency/volume condition works as intended even under commercial pressure to find something to recommend — worth no methodology change, but worth keeping as a strong internal reference example for training future consultants on what a well-reasoned "no" looks like when nothing else in the business points toward a problem.

---

## Cross-Case Summary

Across the five cases: two AI Implementation outcomes (one clean, Case 1; one narrowly scoped with explicit boundaries, Case 4), one Process/Operational Change outcome (Case 2), one mixed outcome combining No Action and a scoped AI Implementation within the same engagement (Case 3, demonstrating the per-friction-point principle working as intended), and one full No Action outcome (Case 5). No case produced an AI recommendation without it surviving the full Decision Framework and Anti-Sales Checks — and two cases (2 and 5) produced a "no" delivered with the same evidentiary weight as a "yes," which was the entire point of building `Prescription_Decision_Framework.md` section 6.

## Consolidated Findings for Lessons Learned

Two items are logged as one-off observations, watched but not promoted (Case 1's "clean" hypothesis-matches-evidence pattern, and Case 3's "wrong problem entirely" failure mode, distinct from Case 2's "right problem, wrong fix" pattern). One item — the GreenEdge/Marlow & Co. repeated-fix pattern — now has two independent instances and is flagged as a genuine candidate for consultant training emphasis, not a document change. One item — Case 4's need for an explicit "Boundaries" field on high-risk AI recommendations — is logged as a single-instance candidate for a future `Prescription_Report_Template.md` update, pending a second real-world instance before promotion, per Governance.md's repeated-pattern rule.
