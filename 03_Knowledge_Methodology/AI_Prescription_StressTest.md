# AI Prescription — Stress Test

> **Layer:** Knowledge & Methodology | **Purpose:** Fictional case studies used to pressure-test AI Prescription.md before relying on it with real clients | **Status:** Active — reference material, not a source of truth | **Owner:** Founder | **Version:** 1.0

Three fictional businesses run through the full AI Prescription methodology. Deliberately chosen so not every outcome ends in an AI build — if this exercise recommended AI every time, the methodology would have failed its own test.

---

## Case 1: Bright Spark Electrical — Local Service Business (8 employees)

Domestic and small commercial electrical contractor. Owner-operator plus 6 electricians and 1 office admin.

### Intake Hypothesis (Business Health Check)

Owner describes frustration with "always on the phone" and "quotes take forever." Mentions missed calls during jobs, and that invoicing happens "whenever there's time," often weeks late. Possible friction points flagged for investigation, not yet conclusions: call handling, quoting speed, invoicing delay. Question to investigate: is the real problem call volume, or is it that quoting is slow because pricing isn't standardised?

### Diagnosis

Root problem test applied: the owner and admin were interviewed separately. The office admin describes quoting as "different every time — depends which electrician did the site visit, they all price things their own way." This contradicts the owner's assumption that quoting is slow because of admin workload — it's actually slow because there's no standard pricing structure to quote from. Evidence: three quotes for near-identical jobs, sampled, varied by 40%. What happens if nothing changes: missed jobs from slow quotes, and undercharging on some jobs without anyone noticing. Is AI the right intervention? Only after pricing is standardised — an AI proposal generator would just automate inconsistent numbers faster.

Missed calls are a separate, real problem: 12 missed calls logged in one week during a busy period, at least 4 were new enquiries that went to a competitor (confirmed via follow-up messages left).

### Friction Points Identified

1. Inconsistent, slow quoting (root cause: no standard pricing, not admin capacity)
2. Missed incoming calls during working hours
3. Delayed invoicing (root cause: no trigger point — invoicing happens "when there's time" with no process)

### AI Suitability Test Applied

**Quoting:** Process not understood/standardised — condition 1 triggered. AI rejected for now. First intervention is a standard price list and quote template, a process fix, not AI.

**Missed calls:** Passes the test — process is understood (answer, note details, callback), frequency is high (daily), consequence of automating is low-risk (an AI receptionist can take a message and flag urgency without needing judgement on anything sensitive). AI appropriate.

**Invoicing delay:** Frequency is real but root cause is a missing trigger, not missing technology — condition 1 again, partially. Recommend a simple process rule first (invoice within 24 hours of job completion), automation can support it later once the habit exists.

### Prioritisation (six factors)

Missed calls ranks first: high impact (lost leads directly cost revenue), low effort (Automation_Catalog AI Receptionist product fits directly), high business readiness (phone-based process is already simple), strong trust-building value (fast, visible win), doesn't depend on anything else, low risk (message-taking, not decision-making).

Quoting standardisation ranks second: high impact but must happen before any AI on top of it; it's a process/consulting fix, not a build, so low cost to the client but requires their time and buy-in.

Invoicing ranks third: real but smaller impact than the other two, and depends on the process habit being established first.

### Prescription (Roadmap)

**First:** Deploy AI Receptionist for missed-call capture and triage (matches Automation_Catalog entry directly).

**Second:** Standardise pricing and build a quote template — explicitly recommended as consulting/process work, not a paid AI build. Client may do this themselves.

**Not yet:** Any invoicing automation, until the 24-hour invoicing habit is established manually for at least a month.

### Success Measurement

Level 1: missed calls converted to booked jobs, tracked monthly. Level 2: owner reports whether evenings are less interrupted by callback catch-up. Level 3: whether pricing consistency holds three months later without oversight.

### Lessons for the Methodology

The Business Health Check hypothesis (slow quoting = admin overload) was wrong, and the diagnosis only caught it by interviewing a second person, not just the owner. **This suggests the Diagnosis stage should require, wherever possible, input from more than one person in the business, not just the decision-maker who commissioned the assessment.** That's a real gap AI Prescription.md doesn't currently state explicitly.

---

## Case 2: Halloway & Reed — Professional Services (22 employees, small accountancy practice)

Two partners, 14 accountants/bookkeepers, 4 admin staff, 2 IT/ops.

### Intake Hypothesis

Partners describe "we're drowning in client onboarding paperwork" and want "an AI to handle client emails." Possible friction flagged: onboarding admin, email volume, knowledge scattered across staff.

### Diagnosis

Root problem test applied: asked the partners to walk through onboarding step by step, live. They couldn't — the process differs by which accountant handles it, and there's no written checklist. Evidence: three staff members gave three different answers when asked "what's the first thing you do with a new client." What happens if nothing changes: onboarding stays inconsistent and error-prone regardless of any tool layered on top. Is AI the right intervention for onboarding? No — condition 1 (process not understood) clearly triggered, and this is more severe than in Case 1: there isn't even a rough shared process to standardise, let alone automate.

The "AI to handle client emails" request, on investigation, turns out to mean something narrower and more legitimate: routine status-update emails ("has my return been filed yet") make up roughly 60% of inbound email volume, are low-judgement, and follow a predictable pattern.

### Friction Points Identified

1. Client onboarding has no defined process (root cause, not yet solvable by AI)
2. Routine status-update emails consume significant staff time
3. Client knowledge (preferences, history, prior issues) lives in individual staff members' heads, not shared systems

### AI Suitability Test Applied

**Onboarding:** Condition 1 triggered hard — no process exists to automate. Rejected for AI. Recommend the partners commission a documented onboarding SOP first, which Digital Footprint can help design as a process-consulting engagement, separate from any AI build.

**Status-update emails:** Passes the test — clearly understood, low-judgement, high frequency, and consequences of a wrong or delayed reply are minor and correctable. AI appropriate (AI Email Assistant / AI Receptionist-equivalent).

**Client knowledge in people's heads:** Partially passes — this is exactly what an AI Internal Knowledge Assistant is for, but condition 4 (foundations not ready) applies: nothing is written down yet, so there's nothing for an AI to be grounded on. The AI can't be built until the knowledge exists somewhere first.

### Prioritisation

Status-update email handling ranks first: understood process, low risk, fast to deploy, immediate visible relief, doesn't depend on anything else.

Onboarding SOP design ranks second: high long-term impact, but this is process consulting, not a technology build, and should be explicitly billed and delivered as such.

Knowledge capture ranks third and is explicitly sequenced after onboarding SOP work, since the two overlap — building the onboarding SOP will naturally surface a lot of the same knowledge needed to eventually ground an Internal Knowledge Assistant.

### Prescription (Roadmap)

**First:** AI Email Assistant for routine status-update queries only, explicitly scoped to exclude anything requiring judgement (fee disputes, complaints, anything with legal or compliance sensitivity).

**Second:** Documented onboarding SOP, delivered as a standalone process-consulting engagement, not an AI product.

**Not yet:** Any AI Internal Knowledge Assistant — flagged as a strong future opportunity once the SOP work has produced enough written material to ground it on.

### Success Measurement

Level 1: reduction in staff hours spent on routine email replies, tracked monthly. Level 2: whether accountants report having more uninterrupted focus time for actual client work. Level 3: whether onboarding becomes consistent across different staff members handling new clients, measured by spot-checking three onboardings six months later.

### Lessons for the Methodology

The initial request ("an AI to handle client emails") was almost accepted at face value before digging in — it turned out to be half-right (status updates, yes) and half-wrong (anything requiring judgement, no). **This suggests AI Prescription.md should explicitly warn that client-requested solutions need the same skepticism as client-reported problems — a specific request is itself just another hypothesis to test, not a scoped brief to fulfil.** That's currently implied but not stated directly in the document.

---

## Case 3: Marden Fabrication — Small Manufacturing (38 employees)

Sheet metal fabrication and folding, similar in nature to the founder's own day-job industry. Production floor of 28, plus scheduling, sales, and admin staff.

### Intake Hypothesis

Owner describes frustration with "production scheduling is a nightmare" and "quality issues keep slipping through." Mentions a whiteboard-based scheduling system and paper quality checklists. Possible friction flagged: scheduling chaos, quality control gaps, and — mentioned almost as an aside — "our review score online has been dropping and I don't know why."

### Diagnosis

Root problem test applied for scheduling: walked the floor, reviewed how jobs actually get sequenced. The whiteboard system is genuinely workable day-to-day, but breaks down specifically when a machine goes down or a rush job comes in — there's no defined re-sequencing process, just improvisation by whoever's in the office that day. Evidence: two separate incidents in the past month where two operators worked from different versions of "today's plan" because the whiteboard was updated but not communicated. What happens if nothing changes: continued occasional double-booking of machine time, but this is intermittent, not constant.

Root problem test applied for quality: paper checklists are completed but rarely reviewed — they're filed, not analysed. On inspection, the actual defect rate isn't unusually high for the industry; what's missing is visibility, not prevention. The owner's sense that "quality issues keep slipping through" turned out to be about not knowing about problems until a customer complained, not about more defects happening.

Reviews: on investigation, the drop in review score coincides almost exactly with a change in delivery lead times three months ago, not quality at all — customers are complaining about slow turnaround, and leaving reviews about that, worded in ways that read as quality complaints on the surface.

### Friction Points Identified

1. Machine re-sequencing during disruptions lacks a defined process (intermittent, not constant)
2. Quality data is collected but not reviewed or used (visibility gap, not a defect-rate problem)
3. Declining reviews are actually a delivery-time problem misread as a quality problem
4. (Underlying, newly surfaced) Delivery lead times have quietly increased — the real root issue behind #3

### AI Suitability Test Applied

**Scheduling disruption handling:** Frequency is genuinely low — this happens a handful of times a month, not daily. Condition 3 triggered (frequency too low to justify a full scheduling AI system). Rejected as a build; recommend a simple written escalation rule instead (who re-sequences, how it's communicated) — a process fix, free to implement.

**Quality data visibility:** Passes the test — the checklists already exist (foundations are actually ready, unusually), frequency is high (every job), the task is low-judgement (aggregating and flagging patterns, not making quality calls), and the consequence of getting it slightly wrong is low (a human still reviews flagged items). AI appropriate — but modest: this is closer to a simple reporting automation than a sophisticated AI system, and should be scoped and priced accordingly, not oversold.

**Delivery lead time (the real root issue):** This is an operations/capacity problem, not a technology problem at all — condition 1 and condition 2 both apply loosely (the process for why lead times crept up isn't understood yet, and fixing it involves judgement calls about capacity and staffing that shouldn't be handed to a system). Firmly outside AI Prescription's remit; recommend the client investigate production capacity separately, possibly outside Digital Footprint's expertise entirely (outcome 3 from the Diagnosis stage: "client needs a different solution outside our expertise").

### Prioritisation

Quality data visibility ranks first: understood, ready foundations, low risk, fast win, and directly answers the owner's stated worry even though the real cause of low-hanging fruit here is different from what they assumed.

Scheduling escalation rule ranks second: real but low-frequency, cheap to fix without any build at all.

Delivery lead time investigation ranks third in sequence but is actually the most consequential finding — flagged prominently in the prescription as the issue actually driving the reviews problem, even though it's explicitly not something Digital Footprint will build a solution for.

### Prescription (Roadmap)

**First:** A lightweight quality-data reporting tool that surfaces patterns from the existing paper checklists (digitised entry plus simple flagging), scoped modestly — this is a reporting aid, not an AI quality-control system.

**Second:** A written escalation rule for machine disruption re-sequencing — a one-page process document, not a technology build.

**Not our expertise / do differently:** Investigate why delivery lead times have increased — recommend the client bring in operations/capacity expertise, since this is the actual driver of the reviews problem and sits outside what Digital Footprint diagnoses or builds.

### Success Measurement

Level 1: whether quality issues are caught internally before reaching the customer, tracked over the following quarter. Level 2: whether the owner reports less anxiety about "not knowing what's going wrong." Level 3: whether the business becomes less dependent on the owner personally noticing problems, since the reporting tool surfaces them for anyone to see.

### Lessons for the Methodology

The most valuable finding in this case (declining reviews are actually a delivery-time problem) was outside the scope of anything Digital Footprint would build, and the correct, honest prescription was to point the client elsewhere. **This confirms the methodology can produce a "no, look elsewhere" outcome even deep into a promising-looking engagement, not just at the initial diagnosis stage — AI Prescription.md should be explicit that outcome 3 (referral outside our expertise) can surface at any point, not only as a first-pass conclusion.**

---

## Critique of AI Prescription.md

**What worked:** The five AI-suitability conditions did real work in all three cases and were not rubber-stamped — they rejected AI outright for quoting (Case 1), onboarding (Case 2), and scheduling plus lead-time investigation (Case 3), while still finding genuine, modestly-scoped AI fits elsewhere. The six prioritisation factors also did real work — in every case, the highest-ROI-sounding opportunity was not simply crowned the first move; sequencing logic (readiness, risk, trust-building) changed the order in a defensible way. The "hypothesis vs. reality" distinction between intake and diagnosis caught a wrong assumption in every single case, which is exactly the failure mode the methodology was designed to prevent.

**What was unclear or missing, surfaced by running real cases:**

The document doesn't currently say who should be interviewed during diagnosis. Case 1 only worked because a second person (the admin) was consulted, not just the owner. Recommend adding a rule: diagnosis should include at least one person who isn't the decision-maker who commissioned it, wherever the business size allows it.

The document treats the client's own stated request (e.g. "I want an AI for X") the same as any other intake hypothesis, but doesn't say so explicitly. Case 2 showed a specific, named request can be half-right and half-wrong, and needs the same skepticism as a vague complaint. Recommend adding a line making this explicit, since consultants under time pressure will otherwise be tempted to just scope what was asked for.

The document's four diagnosis outcomes are written as if they're chosen once, near the start. Case 3 showed an engagement can produce a "refer elsewhere" outcome for one thread of the investigation while producing a legitimate build for another thread, mid-process, not just as an initial branch. Recommend clarifying that outcomes are assigned per friction point, not once per engagement.

**What would break if another consultant used this today:** the AI Suitability Test conditions are well defined, but the prioritisation factors (impact, effort, readiness, trust-building, dependency, risk) are named without any scoring method — three different consultants could weigh them differently and reach different sequencing for the same client. This didn't break the exercise here because one person (with the whole Philosophy and Vision in mind) applied consistent judgement throughout, but at 50 employees this is the most likely point of real inconsistency. Recommend a follow-up task: define a simple relative scoring approach (even just high/medium/low per factor) so prioritisation becomes checkable, not just a judgement call each time.

## Recommended Follow-Up (per Governance.md promotion path)

These three findings are repeat-pattern enough after just three test cases to justify direct promotion into AI Prescription.md v1.1, rather than waiting for real client repetition: multi-person diagnosis interviews where possible, explicit skepticism toward client-stated requests, and outcome assignment per friction point rather than per engagement. The scoring-method gap for prioritisation factors should go into `13 Lessons Learned.md` as an open item rather than being resolved here, since it needs more thought than this stress test alone can settle.
