# AI Prescription Assessment — Specification

> **Layer:** Delivery | **Purpose:** The operational specification of the Assessment — scope, boundaries, and exactly what happens after each recommendation type | **Status:** Active | **Owner:** Founder | **Version:** 1.0

A practical reference, not a new framework — draws directly on `AI_Prescription_Assessment_Product.md` (what's sold), `AI_Prescription_Client_Experience.md` (how it feels), and `Prescription_Decision_Framework.md` (how outcomes are decided). This document exists to answer, in one place, exactly what happens operationally once a recommendation has been made — which none of the existing documents spell out in full.

## What the Assessment Is

A fixed-scope, fixed-price diagnostic engagement. The consultant investigates where a business is losing time, capability, or money to repetitive or poorly-understood work, and determines — per friction point, using evidence gathered live — whether AI, a process change, training, a referral, or no action is the right response. No automation is built as part of the Assessment itself.

## Who It Is For

Businesses matching `ideal_client.md`: roughly 5-50 employees, owner still involved in daily operations, no in-house IT department, open to an honest outside look at where time is being lost.

## What Problem It Solves

The business owner doesn't currently have a reliable, independent way to know whether AI would genuinely help them, or whether their instinct about what's wrong is even correct. The Assessment replaces guessing (theirs or a vendor's) with an evidence-based answer, delivered in writing, regardless of what that answer turns out to be.

## Exact Client Journey

Booking and payment → Client Intake Form (`Client_Intake_Form.md`) → Preparation Brief prepared (`Client_Preparation_Brief.md`) → Assessment Interview (`Assessment_Interview_Method.md` / `Assessment_Interview_Guide.md`) → Analysis (`Prescription_Decision_Framework.md`) → Prescription Report delivered (`Prescription_Report_Template.md`) → Debrief call (`Debrief_Call_Structure.md`) → Client decides next step. Full stage-by-stage timing is defined in `AI_Prescription_Pilot_Playbook.md` section 5.

## Deliverables

A written Prescription Report covering every friction point investigated, each with its finding, evidence, and recommendation. A debrief conversation to walk through it. Nothing else is included in the Assessment fee — no build, no implementation, no ongoing support.

## Boundaries

The Assessment does not diagnose or recommend anything for a friction point without evidence gathered live meeting the bar set in `Assessment_Interview_Method.md` section 7. It does not treat a client's specific request as a scoped brief — every request is tested as a hypothesis, per AI Prescription.md v1.1. It does not offer conclusions during the live session. It does not proceed to implementation automatically — that is always a separate, subsequently scoped decision, never an assumed continuation. It does not cover friction points outside Digital Footprint's expertise beyond identifying that a referral is needed.

## What Happens When the Recommendation Is AI Implementation

The Report names the specific Automation Catalog product (or flags it as a novel build candidate), a conservative cost/benefit estimate from `ROI_Calculator.md`, and where it sits in the sequence (first / later / not yet), per `Prescription_Decision_Framework.md`. At the debrief, the client is told plainly that implementation is a separate, newly-scoped engagement — pricing and timeline for the build are discussed only if the client wants to proceed, not assumed or pre-quoted in the Report itself. If the client wants to proceed, a new agreement is drawn up covering the build specifically; the Assessment engagement is considered complete regardless of this decision.

## What Happens When the Recommendation Is Process Change (or Training)

The Report states plainly what should change and why, with no AI or software attached to the recommendation. The client is told this is something they, or their team, can act on directly, without needing Digital Footprint further — this is stated as a genuine option, not a soft deflection. If the client asks for help implementing the process or training change itself, that can be scoped as a separate, non-technology consulting engagement, distinct from any Automation Catalog build.

## What Happens When the Recommendation Is No Action

The Report states this plainly and confidently, with the evidence behind it and a concrete, named condition for revisiting (e.g. a specific volume threshold, a specific change in circumstances), per the Case 5 example in `Full_System_StressTest.md`. No further engagement is proposed or expected. The client is told the engagement is complete, and that Digital Footprint may check in respectfully at a sensible future point, not immediately or repeatedly, consistent with `AI_Prescription_Client_Experience.md` section 8.

## What the Client Owns After Completion

The full written Prescription Report, unconditionally, regardless of outcome or whether any further engagement follows. Any baseline figures calculated (time spent, rough costs) that they can reuse or reference independently. The right to implement any recommendation themselves, with no obligation to use Digital Footprint. No ongoing data, system, or account is created or retained by Digital Footprint as part of the Assessment itself — anything of that kind only exists if a separate implementation engagement follows.

## Underlying Principles (Not New — Restated for Reference)

Diagnose before prescribe. Client requests are hypotheses, not instructions. A "no AI needed" outcome is a successful diagnosis, not a failed engagement.
