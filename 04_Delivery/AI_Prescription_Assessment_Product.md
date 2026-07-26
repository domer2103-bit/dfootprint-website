# The AI Prescription Assessment — Product Design

> **Layer:** Delivery | **Purpose:** The first commercial, client-facing product built on AI Prescription.md — defines what's sold, delivered, and priced, without altering the underlying methodology | **Status:** Active — source of truth | **Owner:** Founder | **Version:** 1.0

This document turns AI Prescription.md (the internal methodology) into something a client can actually buy. The methodology itself is unchanged — this is the commercial wrapper around it.

## 1. What Does the Client Buy?

**The AI Prescription Assessment** — a fixed-scope, fixed-price diagnostic engagement, sold entirely on its own, with no obligation to buy anything further. The client is buying clarity about where their time and attention are being lost, and a written, prioritised roadmap of what to do about it — not a sales conversation dressed up as a consultation, and not an AI build.

Sold as a standalone product, the same way a doctor charges for a diagnostic appointment regardless of whether treatment follows. This is deliberate, and matches the Diagnosis stage of AI Prescription.md, which requires the diagnosis to be paid and independent of any implementation decision.

**What's explicitly excluded:** no automation is built, configured, or delivered as part of the Assessment. If implementation follows, it's a separate, subsequently-scoped engagement.

## 2. Before the Engagement

**Step 1 — Awareness and booking.** Client finds Digital Footprint, books the Assessment, pays upfront (a real financial commitment matters here — it signals the client is taking the process seriously, and it funds the consultant's time regardless of outcome).

**Step 2 — Business Health Check.** A short, AI-assisted intake, completed asynchronously before any live session (per AI Prescription.md section 1). The client answers a handful of natural-language prompts — written or voice — describing their business, their frustrations, and what they've already tried. No forms to fill in line by line. Output is a structured summary of hypotheses, reviewed by the consultant before the live session, never shown to the client as conclusions.

**Step 3 — Scheduling the diagnosis.** The consultant identifies, from the Health Check, who else in the business should ideally be part of the diagnosis session (per the multi-perspective principle in AI Prescription.md v1.1) and asks the client to include them if practical.

## 3. What Happens During the Assessment

A structured, in-person or video diagnosis session (typically 60–90 minutes, scaled to business size), run as an active investigation, not a chat. The consultant:

Walks through the hypotheses from the Health Check, one at a time, testing each with the diagnosis questions from AI Prescription.md section 2 (is this really the root problem, what evidence supports this, what happens if we do nothing).

Asks to see the actual process where possible, not just hear it described — a sample quote, a real support inbox, a shift handover, whatever is relevant. Evidence beats description.

Talks to more than one person when arranged, comparing what the owner says against what the team on the ground says.

Treats any specific solution the client asks for as a hypothesis to test, not a brief to fulfil (per AI Prescription.md v1.1).

Does not offer conclusions or recommendations live, in the room — the diagnosis session gathers evidence; the prescription is built afterward, deliberately, not improvised on the spot.

## 4. What Information Is Collected

Business context (from the Health Check). Each friction point raised, with the evidence gathered for or against it being the real root cause. Notes on who was interviewed and their perspective. Systems, tools, and existing processes observed directly. For each friction point: whether it passes or fails the AI Suitability Test, and why (referencing the five conditions in AI Prescription.md section 3).

This becomes the working file behind the client's eventual report — and, stripped of anything client-identifying, feeds the Lessons Learned reflection loop afterward.

## 5. What the Consultant Is Doing Behind the Scenes

After the session, away from the client, the consultant does the actual diagnostic work: applies the AI Suitability Test to each friction point individually, scores each surviving opportunity against the six prioritisation factors (AI Prescription.md section 4), sequences them into a roadmap (what first, what later, what not yet), calculates a rough ROI estimate for anything time-saving using ROI_Calculator.md, and cross-references the Automation Catalog for anything that matches an existing product versus anything genuinely novel.

Every friction point is assigned its own outcome (implement with Digital Footprint / client implements internally / process fix without AI / referral elsewhere / monitor and revisit), per the v1.1 update — the client should never receive a single verdict for the whole business, only a clear call for each identified issue.

## 6. What the Client Receives

**The Prescription Report** — a short, plain-language written document, not a slide deck full of jargon (per writing-style.md). For each friction point identified: what was found, the evidence behind it, and the recommended outcome. Where AI is recommended: which Automation Catalog product, roughly what it would cost and save, and where it sits in the sequence. Where AI is not recommended: what to do instead, and why that's the right call, stated as plainly and confidently as a "yes."

**A debrief walkthrough** — a short call or meeting to go through the report together, not just an email drop, so the client understands the reasoning, not just the conclusion.

**No pressure toward implementation.** The report stands alone. If the client wants Digital Footprint to implement any part of it, that becomes a new, separately scoped conversation — not an assumed next step.

## 7. Making the Value Obvious Even When the Answer Is "Don't Implement AI"

This is the hardest part of selling a genuinely independent diagnosis, and it needs to be designed for deliberately, not left to hope.

**Reframe what's being sold from the outset.** The Assessment is marketed and priced as clarity, not as a stepping stone to a sale — closer to "find out exactly what's costing you time and what (if anything) is worth fixing with AI" than "see if AI can help your business." The doctor's-diagnostic framing should show up in the marketing language itself, not just internal thinking (see brand-guidelines.md, "AI Prescription Guy" positioning).

**Make the deliverable valuable on its own terms, regardless of outcome.** Even a "do nothing yet" or "fix your process, not your tech" verdict comes with real, usable output the client keeps forever: a documented account of where their time actually goes (often something owners have never had written down), evidence-backed findings rather than guesses, and a rough baseline ROI figure for each friction point even if no build follows — so they know exactly what it would be worth to fix later.

**State the honest-outcome possibility upfront, and treat it as a selling point, not a risk to hide.** Tell the client plainly, before they pay, that the Assessment might conclude they don't need AI or don't need Digital Footprint further — and frame this explicitly as the reason the diagnosis is trustworthy (see Company Philosophy.md, Principle 3 and Principle 8). A diagnosis that can never say no isn't a diagnosis.

**Track and share the "no" rate over time.** As real engagements accumulate, the fact that some real percentage of Assessments conclude "wait" or "not this" or "go elsewhere" becomes proof of independence that can be shown to future clients — this is a credibility asset, not something to minimise (see Governance.md section 1, and the "quality of the no's" principle in Company Philosophy.md).

**Price it low enough to be a low-risk yes, high enough to be taken seriously.** The fee should feel like a genuine but small commitment — enough that the client engages properly and the consultant's time is respected, low enough that saying "no, don't build anything" doesn't feel like a wasted purchase even if that's the only outcome.

## Relationship to the Methodology

Nothing in this document changes AI Prescription.md. This is entirely the commercial packaging: what gets sold, what happens when, and how the value of an honest "no" gets made obvious to a paying client. If anything learned from running this product repeatedly suggests a methodology change, that goes through the existing Governance.md promotion path (Lessons Learned → pattern recognition → AI Prescription.md update), not a direct edit here.
