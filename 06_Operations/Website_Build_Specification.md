# Website Build Specification — dfootprint.co.uk v1

> **Layer:** Operations (working document, not source of truth) | **Purpose:** Buildable specification for a developer or AI coding agent to build the first version of the site — no copy, no visual design | **Status:** Active | **Owner:** Founder | **Version:** 1.0

Translates `Website_Strategy.md` into build requirements. No headlines, body copy, or visual design decisions are made here — those are separate, later tasks. Wherever this spec references content, it describes what the content must accomplish, not what it should say.

## 1. Website Goals

Establish Digital Footprint as a diagnosis-first practice, not a generic AI agency. Move a skeptical visitor through understanding and trust before any conversion ask, per `Website_Strategy.md` section 5. Generate qualified conversations (bookings or contact), not raw traffic or email list volume. Support the founder's actual working capacity (2-3 hours/day) — the site must not create an operational burden (e.g. a complex CMS, a lead volume the founder can't personally respond to) beyond what a solo operator can sustain.

## 2. Required Pages

Home. AI Prescription Assessment. How It Works. Who It Helps. About Founder. Resources (index page plus individual article template). Contact / Book Conversation. Plus standard utility pages: Privacy Policy, Terms (required for UK data capture and payment handling).

## 3. Page Purpose

As defined in full in `Website_Strategy.md` section 3 — each page's purpose, visitor question answered, trust problem solved, and desired next action are specified there and must be followed exactly; this build spec does not restate them, only implements them.

## 4. User Journey

Implements `Website_Strategy.md` section 5 directly: Home → (Understanding: How It Works and/or Who It Helps) → (Trust: About Founder and/or Resources) → AI Prescription Assessment → Contact / Book Conversation. Navigation must make this path easy to follow in order but must not force a linear click-through — a visitor already primed for trust (e.g. arriving via a referral or LinkedIn post) should be able to reach the Assessment or Contact page directly from Home without friction.

## 5. Required Sections on Each Page

**Home:** clear statement of the core promise (diagnosis before prescription). A visible, non-buried mention that the outcome may be "no AI needed" — this must not be placed only in small print or a footer. Three clear routing options matching the journey stage a visitor might be in (How It Works / Who It Helps / Book a Conversation). No client logos or testimonial section until real ones exist (leave the section out entirely rather than using placeholders).

**AI Prescription Assessment:** what it is, what it costs (or a clear pricing statement, even if "contact for founding-client rate" during pilot phase), what happens at each stage (brief version of `AI Prescription.md`'s sequence), and an explicit, prominent statement that "you don't need AI" is a possible and successful outcome. A single clear call to action (see section 6).

**How It Works:** a plain-language, step-by-step visual or list of the diagnose-before-prescribe sequence. No AI Suitability Test jargon by name — the underlying idea (sometimes the answer is no, and that's found out honestly) explained in plain terms.

**Who It Helps:** a description of the target business profile, built from `ideal_client.md`, that lets a visitor self-assess without needing to talk to the founder first. Should include an honest note on who this probably isn't for, not just who it's for.

**About Founder:** founder background and story, drawn from `about-founder.md`, written to build personal trust rather than corporate credibility.

**Resources (index):** a list of published articles/content, filterable or simply listed if volume is low initially. No article pages exist yet at launch unless content already exists — the index and template must support zero-to-many entries without needing a rebuild.

**Resources (article template):** a single reusable template for any future article — must support plain text, headings, and basic formatting; no complex layout requirements.

**Contact / Book Conversation:** the lowest-friction path to starting a real conversation — a short form (see section 7) plus, if feasible, an optional direct booking link for a call.

**Privacy Policy / Terms:** standard, legally necessary pages — content to be drafted separately, but the pages must exist and be linked from the site footer before any form goes live, since forms will capture personal data.

## 6. Calls to Action

Exactly one primary call to action per page, never competing calls to action stacked together. Home: "Learn how it works" (Understanding-stage visitor) and "Book a conversation" (Trust-ready visitor) as two distinct, clearly weighted options, not equal-weight buttons competing for the same click. AI Prescription Assessment page: "Book your Assessment" or "Start a conversation" as the single primary action. How It Works / Who It Helps / About Founder / Resources: a single secondary call to action pointing toward the Assessment or Contact page, not a hard sell — phrased as a natural next step, not a pop-up or interruption. No countdown timers, no fake urgency, no exit-intent pop-ups — these contradict the "trust before technology" and "no exaggerated claims" constraints directly.

## 7. Forms Needed

**Contact / Start a Conversation form** (on the Contact page, and optionally embedded or linked from Home and the Assessment page): name, business name, email, phone (optional), a short free-text field ("what's been on your mind about your business lately?" — deliberately open, not a lead-qualifying interrogation at this stage, consistent with `Founder_Outreach_System.md`'s non-manipulative approach).

**Assessment booking form** (only if online payment/booking is implemented in v1; otherwise this stage happens via direct conversation with the founder, and the form above is sufficient for v1). If built: name, business name, email, phone, preferred contact time, and payment integration (see section 10).

No Client Intake Form (`Client_Intake_Form.md`) is built into the website in v1 — that stays a document sent directly to booked clients, not a public-facing website form, since it's part of the paid engagement, not the lead capture step.

## 8. Data Captured

Name, business name, email, phone (optional), free-text message, timestamp, and source page (which page the form was submitted from, for basic attribution). No data beyond what's needed to start a conversation is captured at this stage — no unnecessary profiling fields, no forced account creation, no newsletter opt-in bundled into the contact form by default (a separate, clearly optional checkbox if a mailing list is wanted later). All captured data handled per UK GDPR requirements — consent language and a link to the Privacy Policy required at the point of submission.

## 9. Future Integrations to Consider

n8n (already in use by the founder, per `about-founder.md`) as the automation layer connecting form submissions to the founder's actual workflow (e.g. notification, logging into `Pilot_Execution_Dashboard.md` or a CRM equivalent) — not built in v1, but the form should be built in a way that makes a webhook or API connection straightforward later, not requiring a rebuild. Booking/calendar tool integration (e.g. for scheduling the Assessment interview directly) — a "nice to have" for v1, a near-term priority for v2 once volume justifies it. Payment processing for the Assessment fee — required only if online payment is part of v1's Assessment booking flow; otherwise deferred to a direct invoice process during the pilot phase, consistent with `AI_Prescription_Pilot_Playbook.md`'s manual, low-volume operation. Analytics — lightweight, privacy-respecting analytics only (page views, form submissions), not intrusive tracking that would contradict the trust-first positioning.

## 10. Technical Requirements

Hosted on the founder's existing Hostinger infrastructure, per `08 Technology Stack.md` (currently empty, should be updated once the stack is finalised — see note below). Mobile-first responsive design — the target client (small business owner, often not desk-bound) is likely to visit on a phone. Fast page load — no heavy, unnecessary frameworks or asset bloat; a static or lightly dynamic site is preferable to a complex CMS given the low initial page count and solo maintenance. Simple content management — the founder (non-technical background) must be able to add or edit a Resources article without needing developer help for routine updates; a lightweight CMS or markdown-based content system is preferable to a fully custom build requiring ongoing developer involvement. Accessibility basics (readable contrast, sensible heading structure, alt text support) — not an extensive audit requirement for v1, but not ignored either. No login system, user accounts, or client portal in v1 — entirely out of scope until implementation/subscription products (per `Website_Strategy.md` section 7) make one necessary.

**Note:** `08 Technology Stack.md` should be updated with the final confirmed stack (hosting, CMS choice, form/automation tooling) once build decisions are made — this document specifies requirements, not the final chosen stack, and the two should not drift out of sync.

## Constraints Restated for the Builder

The site must never read as a generic AI agency — no stock AI imagery clichés (glowing brains, robot hands), no generic AI marketing language anywhere in structure or placeholder copy. The Assessment is the entry point to any paid engagement — no page should offer a shortcut to "just build me something" bypassing the diagnosis. Trust and education content (How It Works, Who It Helps, About Founder, Resources) must be reachable and prominent, not buried beneath a hard sell. "No AI needed" must appear as a stated, valid, successful outcome on at least the Home and Assessment pages, not only in internal documentation. No exaggerated claims, fabricated statistics, fake testimonials, or fake urgency tactics anywhere on the site.
