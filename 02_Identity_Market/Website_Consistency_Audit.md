# Website Consistency Audit — Pre-Build

> **Layer:** Identity & Market | **Purpose:** Audit record of the final pre-build consistency review of dfootprint.co.uk | **Status:** Active — audit record, point-in-time | **Owner:** Founder | **Version:** 1.0

This is a record, not a strategy document. No copy has been rewritten as part of this audit — findings and recommendations only.

## 1. Audit Scope

Documents reviewed: `Company Philosophy.md`, `Brand_Experience_Guide.md`, `Website_Strategy.md`, `Website_Content_Architecture.md`, `Website_Copy_v1.md`, `Pricing_Strategy.md`, `AI Prescription.md`.

## 2. Findings

**Finding 1 — Home page has three equal-weight CTAs instead of the intended staged journey.**
Severity: Medium.
Reason: `Website_Build_Specification.md` section 6 specifies Home should carry exactly two distinct, clearly-weighted CTAs (an Understanding-stage action and a Trust-ready action), not three flat, equal buttons. Three equal options reads closer to a conventional agency homepage than the deliberate staged journey defined in `Website_Strategy.md` section 5.
Recommended action: Reduce to two CTAs, with one visually or textually weighted as primary.
Status: Not applied.

**Finding 2 — Commercial CTA appears too frequently across pages.**
Severity: Low-Medium.
Reason: A "Book Your Assessment" or equivalent commercial CTA appears as a secondary action on nearly every page (Home, How It Works, Who It Helps, About, Resources). Individually honest and non-pushy, but in aggregate this risks feeling like a funnel to a visitor reading several pages in sequence, in tension with `Brand_Experience_Guide.md` section 5's trust standards.
Recommended action: Consider letting at least one page (most naturally Resources) end without a commercial CTA, just an invitation to ask a question.
Status: Not applied.

**Finding 3 — Pricing accuracy confirmed, but post-founding-client handling needs clarification.**
Severity: Medium-High (functional gap, not a tone issue).
Reason: The £197 figure, "first five clients" framing, and inclusions/exclusions all match `Pricing_Strategy.md` correctly on the Assessment page. However, no page states what happens if a visitor inquires after the first five founding slots are filled — whether they're waitlisted, quoted the future range, or turned away.
Recommended action: Add a line to the Assessment page covering this scenario, consistent with `Pricing_Strategy.md` section 4's rule against dishonestly extending founding pricing.
Status: Not applied.

**Finding 4 — Methodology alignment confirmed.**
Severity: None (verification, not an issue).
Reason: Diagnosis-before-prescription and "AI may not be the answer" are both stated consistently across Home, Assessment, and How It Works. Evidence-based recommendations are implied correctly without exposing internal methodology jargon (AI Suitability Test, prioritisation factors), matching `Website_Content_Architecture.md`'s instruction to keep internal terms out of public copy.
Recommended action: None required.
Status: Confirmed, no action needed.

**Finding 5 — Founder story line about "trading hours for money forever" needs review.**
Severity: Medium.
Reason: The About page line "doing work that actually helps people, instead of trading hours for money forever" centres the founder's personal financial motivation on a client-facing trust page, risking a read that the business exists primarily to serve the founder's own trajectory rather than the client's problem — in tension with the "client problems are more important than technology" principle. Not a data-privacy issue (no identifying details are exposed); the conflict is tonal.
Recommended action: Trim or reframe this line; the CNC job, early mornings, and non-technical starting point already build genuine trust without it. This kind of personal-motivation framing fits `00 Vision.md` (internal) better than public copy.
Status: Not applied.

**Finding 6 — Missing information.**
Severity: Mixed, itemised below.

*Turnaround time* (Medium): How It Works doesn't state how long the process takes end to end, despite internal estimates existing in `11 SOP.md` and `AI_Prescription_Pilot_Playbook.md`. Recommended action: add a rough timeframe to How It Works or the Assessment page. Status: Not applied.

*What happens after the first five founding clients* (Medium-High): see Finding 3. Status: Not applied.

*Session format* (Low): whether the diagnosis session happens by video, phone, or in person isn't stated anywhere. Recommended action: clarify on the Assessment or How It Works page. Status: Not applied.

*Geographic scope* (Low-Medium): nothing states whether Digital Footprint works UK-wide, locally only, or remotely, despite the brand's local-business framing. Recommended action: clarify, likely on Who It Helps or Contact. Status: Not applied.

*Cancellation/rescheduling expectations* (Low): since payment happens upfront, no page addresses what happens if a client needs to cancel or reschedule. Recommended action: address before real payments begin, likely in Terms rather than main copy. Status: Not applied.

## 3. Decision Notes

No fixes have been applied as part of this audit. This document exists specifically to separate three different kinds of follow-up, so they aren't accidentally conflated or resolved with the same urgency or process:

**Evidence-based improvements** — findings grounded directly in an existing source-of-truth document being contradicted or under-specified (Findings 1, 3, and the missing-information items). These should be corrected before build, since they represent the copy failing to match a decision that's already been made elsewhere in the system.

**Copy preference** — findings that are a matter of tone or emphasis rather than a contradiction of an existing rule (Finding 2, Finding 5). These are recommended, not mandatory, and should be weighed by the founder's own judgement rather than treated as automatic corrections.

**Strategic decisions** — none identified in this audit; every finding here can be resolved by editing copy to match existing strategy documents, without requiring a new Decision Framework analysis. If a future audit surfaces something that would require changing `Pricing_Strategy.md`, `Website_Strategy.md`, or similar, that is a different category of follow-up and should go through `decision_framework.md`, not be treated as a copy fix.

## 4. Governance Note

Any changes made in response to this audit must preserve: diagnosis before prescription, no hype, no pressure tactics, founder voice, and clarity before technology. A fix that resolves a finding above by introducing urgency language, a corporate tone, or a claim not backed by evidence would be trading one inconsistency for a worse one, and should be rejected even if it technically closes the finding.
