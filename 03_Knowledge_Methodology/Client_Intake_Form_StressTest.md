# Client Intake Form v2.0 — Stress Test

> **Layer:** Knowledge & Methodology | **Purpose:** Three fictional scenarios testing whether Client_Intake_Form.md v2.0 produces a genuinely useful hypothesis, without ever diagnosing on its own | **Status:** Active — reference material, not a source of truth | **Owner:** Founder | **Version:** 1.0

Tests the intake instrument itself, and the AI Preparation Layer designed in `AI_Assisted_Intake_System_Design.md`, against three deliberately different business realities. None of these scenarios are diagnosed here — the "AI Preparation Layer" outputs below are hypotheses and flagged questions only, exactly as that document specifies. A full diagnosis only happens live, in a real Assessment session.

---

## Scenario 1: Thornbury Lettings — Where AI May Genuinely Be Appropriate

**Background:** Residential letting and property management agency, 12 staff, managing around 300 tenancies. Owner still involved daily. Office admin team handles maintenance requests, mostly by email and phone.

### Completed Intake Answers

A1: "We manage rental properties for landlords — find tenants, collect rent, and handle maintenance and repairs."
A2: 6-15.
A3: Yes, hands-on every day.
B1: "Answering maintenance emails. We get the same kind of message all day — 'my boiler's broken,' 'the tap's leaking' — and someone has to read it, work out which contractor to send, and reply."
B2: 4.
B3: "Honestly, getting maintenance requests off my inbox and into someone else's hands faster."
C1: "We're constantly behind on replying to tenants about repairs. Landlords get annoyed, tenants get annoyed, and it's always the office staff doing the same admin over and over."
C2: "We tried a shared inbox so more people could see requests, but it just meant more people ignoring them, thinking someone else would deal with it."
C3: "Honestly, probably nothing catastrophic — we'd just keep being a bit slow and occasionally get a bad review."
D1: "The two office staff who handle maintenance know which contractor does what — if they were both away, we'd be stuck."
D2: 3.
E1: "Property management software for tenancies and rent, plus a shared email inbox and a spreadsheet for contractor contacts."
E2: Yes, often — "we re-type the same tenant and property details into emails to contractors every time."
F1: "Maybe some kind of AI that reads the emails and sorts them out? Not sure exactly."
F2: "We're generally open to trying new things if it actually saves time."

### What the AI Preparation Layer Should Identify

Group B1, C1, and F1 into the Business_Problems.md category "Customer Support" (and note overlap with "Email Overload"). Flag a contradiction between B2 (high burden, 4/5) and C3 (low stated consequence, "probably nothing catastrophic") — the client rates the daily frustration highly but doesn't see serious business risk, worth testing which is closer to reality. Flag C2 as evidence of a process attempt that failed for people/ownership reasons (shared inbox diffusion of responsibility), not a tooling gap — worth investigating whether that same dynamic would undermine any new system too. Note D2 (3/5, moderate) as a foundations check — not a blocker, but not fully ready either. Note E2's "Yes, often" as a specific, testable evidence request for the session.

### What the Consultant Should Investigate

Ask to see real examples of maintenance emails and how they're currently triaged, live. Test whether the underlying issue is really volume/speed (an AI-suitable, high-frequency, understood, low-judgement task) or whether it's the same responsibility-diffusion problem that broke the shared inbox before — if so, any AI system risks the same fate unless ownership is fixed first. Ask who decides which contractor to send for a given issue, and whether that judgement is simple enough to support with AI or genuinely needs a person's local knowledge. Test D1's single-point-of-failure risk directly with both staff members present if possible.

### Assumptions That Must Be Avoided

Do not assume F1's own suggestion ("some kind of AI that reads emails") is the correct scope — it must be tested per AI Prescription.md v1.1, not accepted as the brief. Do not assume the AI Suitability Test has been passed just because this looks like a strong candidate on paper — the process-not-understood and judgement conditions still need live testing, given the E2 and C2 answers. Do not assume the previous failed fix (shared inbox) means "nothing will work" — that's a hypothesis about root cause, not a conclusion.

---

## Scenario 2: Marlow & Co. Creative — Owner Believes They Need AI, Real Issue Is Process/People

**Background:** Small marketing and design agency, 15 staff, project-based client work. Owner used to run every project personally; now delegates, but describes ongoing chaos around deadlines.

### Completed Intake Answers

A1: "We're a creative agency — branding, websites, and marketing campaigns for small and medium businesses."
A2: 6-15.
A3: Yes, but less than I used to.
B1: "Chasing people internally to find out if things are actually on track. I spend a lot of time asking 'where are we with X' in Slack."
B2: 5.
B3: "Not having to personally check on every project to know if it's going to be late."
C1: "Projects run late constantly and I only find out near the deadline, not early enough to fix it. It feels like nobody owns getting things over the line except me."
C2: "We tried a project management tool about a year ago. Everyone filled it in for the first two weeks, then it fell apart — people just stopped updating it."
C3: "We'd keep losing client trust and probably lose a couple of clients over it within the year."
D1: "Honestly, probably everything — I still end up being the one who notices when something's slipping."
D2: 4.
E1: "We use [a project management tool], Slack, email, and Google Drive for files."
E2: Occasionally — "sometimes stuff gets discussed in Slack and never makes it into the project tool."
F1: "I think we need some kind of AI project manager — something that can track everything automatically and tell me what's actually late without me having to ask."
F2: "I know a project management tool isn't a new idea for us, but I think the problem is we need something smarter than what we tried before."

### What the AI Preparation Layer Should Identify

Group B1, C1, and F1 under "Reporting" and "Internal Documentation" categories, but flag this cluster prominently for root-cause testing given C2. Flag a strong contradiction-adjacent pattern: the client already tried a very similar fix (a project management tool) and it failed for adoption reasons (C2: "people just stopped updating it"), yet F1 proposes essentially the same category of solution again, just "smarter." This repetition is exactly the kind of pattern AI Prescription.md section 2 exists to catch — flag it as the single highest-priority item to test live, not proceed past. Flag D1 ("probably everything") as revealing the owner may be the single point of failure for the whole business's visibility into progress, which is a management/accountability finding, not a technology one.

### What the Consultant Should Investigate

Ask directly why the previous project management tool adoption failed — was it lack of accountability (no one was responsible for updating it), lack of a habit/process for using it, or something about the tool itself. This is the central diagnostic question for this business. Ask who is accountable, by name or role, for each project's deadline — if the honest answer is "no one, ultimately, except me," that's a management/ownership gap no tool will fix on its own, AI or otherwise, per AI Prescription.md's "process is not understood" and judgement conditions. Ask what would need to be true for a new system to actually get used this time, distinct from what the system does.

### Assumptions That Must Be Avoided

Do not assume F1's "AI project manager" framing means AI is the answer just because the client is confident about it — this is precisely the scenario AI Prescription.md v1.1's "client requests are hypotheses" principle was written for. Do not assume the previous tool failed because it "wasn't smart enough" (the client's own explanation in F2) without testing whether it actually failed for accountability reasons instead — a smarter tool used the same way will likely fail the same way. Do not assume the owner's constant checking-in (B1) is solvable by better reporting alone if the underlying issue is that no one but the owner feels ownership of deadlines.

---

## Scenario 3: Hallgate Joinery — Where AI Is Not Currently Appropriate

**Background:** Small bespoke joinery workshop, 7 staff, custom furniture and fitted units made to order. Owner-founder, hands-on in the workshop most days.

### Completed Intake Answers

A1: "We make bespoke furniture and fitted joinery — kitchens, wardrobes, that kind of thing — all made to order."
A2: 6-15.
A3: Yes, hands-on every day.
B1: "Probably going back and forth with customers on measurements and design changes before we can even start a job. Every job is different so there's a lot of back-and-forth."
B2: 3.
B3: "The costing and pricing side — working out a fair quote for a custom job always takes me longer than I'd like."
C1: "Honestly, I think we just need another pair of hands. We're stretched thin and everything takes longer than it should because there's not enough of us."
C2: "Not really tried anything specific — it's more that we've been busy and haven't had time to fix anything."
C3: "We'd probably just keep turning down jobs we don't have capacity for."
D1: "Everything, if I'm honest — I do the design consultations, the quoting, and a lot of the actual building."
D2: 4.
E1: "Not much beyond email, a spreadsheet for job tracking, and WhatsApp for the team."
E2: Not sure.
F1: "I don't really know if AI is relevant to us, to be honest. I saw something about it online and thought I'd ask, but we're pretty hands-on and old-school here."
F2: "Not really — just that we're a small, busy team and I'm not sure this is even the right kind of help for us."

### What the AI Preparation Layer Should Identify

Group C1 under a category that doesn't cleanly match any existing Business_Problems.md entry — flag explicitly as "does not fit existing category" per Evidence_Extraction_Framework.md, since the client's own stated root cause is understaffing, not a process or technology gap. Flag D2 (4/5, mostly in people's heads) and E1 (minimal systems) together as a foundations-readiness concern for any future AI recommendation, regardless of which friction point is eventually investigated. Note that F1 and F2 show low technology confidence and an explicit, unprompted doubt about fit ("not sure this is even the right kind of help for us") — this should be flagged for the consultant to address directly and honestly in the session, not glossed over.

### What the Consultant Should Investigate

Take C1 at face value as a real possibility to test, not dismiss it because it doesn't sound like an AI Prescription case — ask what "another pair of hands" would actually change, and whether time is being lost anywhere that isn't fundamentally a staffing question (for example, the quoting frustration in B3 might be separable from the general capacity complaint in C1). Ask to see how quoting is actually done today, since B3 hints at a real, specific friction point distinct from the general "we're understaffed" framing in C1 — worth testing whether quoting itself has a fixable root cause. Ask directly and honestly whether this business is a good fit for Digital Footprint at all, given F1/F2's own doubt — per AI Prescription.md, "the client needs a different solution outside our expertise" and "the correct decision is to wait or do nothing" are both legitimate, successful outcomes here.

### Assumptions That Must Be Avoided

Do not force this business into an AI recommendation because Digital Footprint's own commercial interest would prefer a "yes" outcome — this is exactly the scenario Company Philosophy.md Principle 3 and the AI Prescription Assessment's "quality of the no's" tracking exist for. Do not assume "we just need another pair of hands" is definitely correct either — it's the client's own hypothesis and deserves the same scrutiny as any other, per AI Prescription.md v1.1, even though it points away from Digital Footprint's usual offer. Do not assume low digital-system usage (E1) and low tech confidence (F1) mean this client wouldn't benefit from anything — a narrow, well-scoped process fix (e.g. a simple quoting template) may still be a legitimate, honest recommendation, distinct from a "no AI, no fix at all" conclusion.

---

## What This Stress Test Confirms About the Intake Instrument

The questionnaire successfully produced testable, non-diagnostic hypotheses in all three cases without ever tipping into a conclusion. Scenario 1 shows the instrument can surface a genuinely strong candidate while still flagging a real contradiction (B2 vs C3) that needs live testing before anyone gets excited about a build. Scenario 2 shows the instrument can catch a client confidently requesting the same category of fix that already failed for non-technology reasons — the repetition flag is the single most valuable output the AI Preparation Layer produced in this whole exercise. Scenario 3 shows the instrument does not force every client toward an AI-shaped answer — the client's own doubt about fit came through clearly, and the correct preparation response was to flag it for an honest conversation, not to manufacture enthusiasm.

## Notes for the Methodology (Watch, Not Act On Yet)

Per Post_Conversation_Review_Process.md, none of these are real conversations, so none of this feeds Lessons Learned directly. But one pattern worth watching for once real intakes happen: in two of three scenarios (2 and 3), the client's own stated theory in F1 was either a repeat of a previously failed fix or an explicit expression of doubt — worth watching whether real clients show this pattern often enough to warrant a dedicated follow-up question in a future version of the questionnaire.
