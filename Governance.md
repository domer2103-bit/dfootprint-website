# Governance

> **Layer:** OS-level (applies across all layers) | **Purpose:** Rules that keep the Digital Footprint OS clean and non-duplicated | **Status:** Active — source of truth | **Owner:** Founder | **Version:** 1.0

The rules that keep the Digital Footprint Operating System from becoming a messy pile of files again — designed to still work with 50 employees and 10 years of history, but simple enough to actually follow today with a team of one.

## 1. Document Ownership

Every source-of-truth document has exactly one named owner. Today, that's the founder for all nine source-of-truth documents (Vision, Company Philosophy, Decision Framework, Writing Style, Business DNA Framework, AI Prescription, ROI Calculator, SOP, Automation Catalog). As the team grows, ownership can be delegated one document at a time, but a document is never left ownerless, and it is never owned by more than one person at once.

**Owner:** the only person who can make a direct edit to a source-of-truth document. Responsible for reviewing suggested changes and deciding whether they get promoted in.

**Editors:** nobody, by default, other than the owner. This isn't about hierarchy for its own sake — it's the only way to guarantee the document never forks into two versions.

**Suggesters:** anyone in the company can propose a change to any document, at any time, through the Lessons Learned intake (see section 4). A suggestion is not a change until the owner accepts it.

Non-source-of-truth documents (Roadmap, Meeting Notes, Business Ideas, client records) can have broader edit access, since they're working documents rather than policy — but even these should have one accountable owner who's responsible for keeping them tidy.

## 2. The One-Fact-One-File Rule

Before writing anything down, ask: does a document already exist that owns this topic? If yes, the information goes there — as an edit or addition, not a new file. If genuinely no document owns it, that's the only case where a new document is justified.

To decide where a fact belongs, ask which layer it lives in (Principles, Identity & Market, Knowledge & Methodology, Delivery, Client Records) and then check whether an existing document in that layer already covers it. Two documents should never be able to both claim to be the answer to the same question — if that's ever found, it's an error to fix immediately, not a style choice to leave alone.

## 3. New Document Creation

Create a new document only when: the information doesn't fit any existing document without distorting its purpose, the information will be referenced repeatedly (not a one-off note), and it clearly belongs to one of the five layers with a named owner from day one.

Do not create a new document when: it's a one-time decision or note (goes in Meeting Notes or Roadmap instead), it's a smaller version or "draft" of something that already exists (edit the existing one instead), or it's client-specific detail (goes into that client's record, not a new general document).

Any new document must be logged in a running index (see section 6) at the moment it's created, stating its layer, its owner, and which existing document it was checked against before being created.

## 4. Knowledge Promotion

New knowledge enters the system through exactly one door: `13 Lessons Learned.md`. After every client engagement, and whenever something surprising or repeated happens, it gets logged there as a raw entry — what happened, what we expected, what we'd do differently.

Promotion happens on a schedule, not ad hoc. At each review cycle (see section 5), the owner of Lessons Learned goes through new entries and asks: has this happened more than once? If a lesson repeats, it stops being a lesson and becomes a required update to a permanent document — the SOP, the Philosophy, the Business DNA Framework, or the Automation Catalog, whichever it belongs to under the one-fact-one-file rule. The lesson entry is then marked as promoted and left in place as a record of why the change was made, but the live instruction moves into the permanent document. No one edits a source-of-truth document directly from a raw, unreviewed lesson — even the founder.

## 5. Review Cycles

**Monthly:** Roadmap, Meeting Notes, Lessons Learned (the promotion review described above happens here at minimum).

**Quarterly:** Business DNA Framework, Automation Catalog, ROI Calculator, SOP, AI Prescription methodology — the load-bearing middle layer that should stay current with real delivery experience without changing so often it becomes unstable. This is also when the full document index is audited for duplication.

**Annually:** Vision, Company Philosophy, Decision Framework, Mission, Brand Guidelines — the foundational layer. These should be genuinely stable; if one needs changing more than once a year, that's a signal something deeper is unresolved, not just due for an update.

**Rarely / event-triggered only:** About Founder, Writing Style — reviewed when something materially changes (a new person joins whose voice matters, a real repositioning), not on a fixed clock.

## 6. Version Control

Every source-of-truth document keeps a short changelog at its own bottom — date, what changed, why, and which Lessons Learned entry (if any) triggered it. Not a full audit trail, just enough that anyone opening the document in five years can see it evolved deliberately rather than by accident.

A running document index — one single file listing every document, its layer, its owner, and its last review date — is the map of the whole system. This index is itself a source-of-truth document, owned by the founder (or, at 50 people, whoever holds the Chief Knowledge Officer-equivalent role), and is the first place anyone checks before creating something new.

## 7. Decision Making

Important decisions must not live only in a conversation, a chat thread, or someone's memory. Any decision that changes how the company operates — pricing, positioning, a new standing rule, a change to who a client should be — gets run through `decision_framework.md`, and the outcome gets written down in two places: the Meeting Notes entry for that day (the raw record of the conversation and reasoning), and, if it's a lasting rule, the relevant permanent document (via the same promotion path as section 4, not a shortcut around it).

The test for whether a decision was "real": if someone asks in six months why we do something a certain way, there should be a written answer to point to, not just "I remember we talked about it."

## Summary Rule

If in doubt: check the index, check the layer, check the owner, log it in Lessons Learned before it becomes permanent. The system stays clean not because everyone remembers every rule, but because there's always exactly one obvious next step, and it's usually "write it in the one place that already owns this."
