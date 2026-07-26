# Business DNA Framework

> **Layer:** Knowledge & Methodology | **Purpose:** The schema every client's Business DNA is captured against | **Status:** Active — source of truth | **Owner:** Founder | **Version:** 2.0 (supersedes Business_DNA_Schema.md, archived)

The single onboarding framework every Digital Footprint client completes. It exists to answer one question completely: what would an AI system need to know to act as a competent, trusted extension of this business? Every AI Prescription, every automation, every assistant we build is grounded in this document. If an AI gives a wrong, generic, or off-brand answer later, the fix is almost always here, not in a prompt.

## Design Notes (Why It's Structured This Way)

The original working list (Identity, Mission, Services, Pricing, Customers, Tone of Voice, Opening Hours, Software, Staff, FAQs, Sales Process, Marketing, Operations, Pain Points, Goals, Competitors, Files, Documents, Knowledge, Workflows) had real overlap. Files, Documents, and Knowledge all answer "what does the business already know or have written down" — splitting them three ways means the same document gets logged in three places and goes stale in two of them. Software and Operations both describe how work actually gets done, just from different angles. Staff and Sales Process both partly describe people and responsibility.

This version collapses those into 9 sections, each with a single clear job, and each tagged with the AI systems that actually depend on it — so nothing is collected "just in case."

## 1. Identity & Offering

**Why it matters:** This is the ground truth of who the business is and what it actually sells. Every other section refers back to this one — pricing, marketing, and FAQs are meaningless without a clear offering to anchor them.

**Questions to ask:** What's the legal and trading name? Where do you operate? What's your one-sentence founding story? What do you sell, in plain terms? What do you explicitly not do? How is each service or product priced, and how is pricing structured (fixed, hourly, quoted, package)? What do you never negotiate on?

**Fields to store:** business_name, trading_name, locations[], founding_story, services[] (name, description, inclusions, exclusions), pricing_model, price_list[], non_negotiables[]

**AI systems that use this:** AI Receptionist, AI Proposal Generator, AI Lead Qualification, AI Content Engine, AI Internal Knowledge Assistant

## 2. Voice & Positioning

**Why it matters:** Any AI that writes or speaks on the business's behalf needs to sound like the business, not like a generic assistant. This is the difference between an automation clients trust and one that embarrasses them.

**Questions to ask:** How would you describe your tone in three words? What phrases do you use often? What phrases would you never use? Who are your competitors, and how do you want to be positioned against them? Can you show me a message or piece of content that sounds exactly like you?

**Fields to store:** tone_descriptors[], preferred_phrases[], avoided_phrases[], competitors[] (name, perceived strength, perceived weakness), positioning_statement, voice_sample_text

**AI systems that use this:** AI Content Engine, AI Email Assistant, AI Review Assistant, AI Follow-up, AI Receptionist

## 3. Customers

**Why it matters:** An AI qualifying leads, following up, or answering support queries needs to know who a "good" customer looks like versus who to deprioritise, and what customers actually care about.

**Questions to ask:** Who is your typical customer? Are there distinct customer segments? Where do most customers come from? What do customers complain about most? What do they compliment most? What does a great-fit lead look like, and what does a poor-fit one look like?

**Fields to store:** customer_segments[] (description, typical needs), lead_sources[], common_complaints[], common_praise[], good_fit_criteria[], poor_fit_criteria[]

**AI systems that use this:** AI Lead Qualification, AI Follow-up, AI CRM Assistant, AI Receptionist

## 4. People & Access

**Why it matters:** An automation that doesn't know who's responsible for what, or oversteps a boundary a staff member should own, causes more damage than the manual process it replaced. This section is about authority and escalation, not just an org chart.

**Questions to ask:** How many staff, and what are their roles? Who is the escalation point for pricing questions, complaints, and urgent issues? Are there things an AI assistant should never do without human approval (e.g. quote a price, promise a refund, book outside certain hours)? Who owns each software tool/account?

**Fields to store:** staff[] (name, role, escalation_topics[]), hard_boundaries[] (things AI must never do unsupervised), tool_owners{}

**AI systems that use this:** AI Receptionist, AI Appointment Booking, AI CRM Assistant, AI Proposal Generator

## 5. Operating Systems

**Why it matters:** Any automation has to plug into the tools the business already runs on. This section is the technical map — without it, integration work has to be reverse-engineered from scratch on every project.

**Questions to ask:** What software runs the business day to day (CRM, booking, accounting, communications, website)? What are the opening hours, including seasonal or emergency variations? Are there any systems that don't talk to each other today that should?

**Fields to store:** software_stack[] (tool_name, purpose, integration_notes), opening_hours{}, seasonal_variations[], known_integration_gaps[]

**AI systems that use this:** AI Appointment Booking, AI CRM Assistant, all integration-dependent products

## 6. Sales & Marketing Motion

**Why it matters:** Follow-up and lead qualification tools need to know the actual path a lead takes to becoming a customer, not an idealised version of it — including where leads currently fall through the cracks.

**Questions to ask:** Walk me through what happens from first contact to closed sale, step by step. Where do leads usually drop off? What's the average time to close? What marketing channels are you using now, and what's worked or failed? Do you have brand assets ready (logo, colours, existing content) to draw from?

**Fields to store:** sales_process_steps[], drop_off_points[], average_time_to_close, active_marketing_channels[], past_campaigns[] (what worked/failed), brand_assets_location

**AI systems that use this:** AI Lead Qualification, AI Follow-up, AI Content Engine, AI Proposal Generator

## 7. Knowledge Base

**Why it matters:** This is the business's accumulated expertise and reference material in one place — the FAQs, policies, and "things everyone who works here just knows" that an AI needs in order to answer questions correctly instead of plausibly.

**Questions to ask:** What are the questions customers ask most, and what's the business's preferred answer to each? What written policies exist (terms, cancellation, warranty)? What industry or technical knowledge exists only in people's heads, not on paper? Where are the key existing documents stored?

**Fields to store:** faqs[] (question, preferred_answer), policy_documents[] (name, location, summary), tacit_knowledge[], document_inventory[] (name, location, last_updated)

**AI systems that use this:** AI Internal Knowledge Assistant, AI Receptionist, AI Email Assistant, AI Review Assistant

## 8. Processes & Pain Points

**Why it matters:** This is where the actual automation opportunities live. Documenting a process as it really works today — not the tidy version — is what makes the later ROI Calculator numbers honest instead of guessed.

**Questions to ask:** Which processes take the most time or cause the most stress? Walk me through one of them step by step, exactly as it happens today. How often does it occur, and roughly how long does each occurrence take? Who currently does it? What have you already tried to fix it?

**Fields to store:** processes[] (name, steps[], frequency, time_per_occurrence, current_owner, prior_fix_attempts[]), pain_points_ranked[] (mapped to Business_Problems.md categories)

**AI systems that use this:** Every product in the Automation Catalog draws its starting spec from here; the ROI Calculator uses these fields directly

## 9. Goals & Trajectory

**Why it matters:** The same automation looks different depending on whether a business wants to grow headcount or deliberately stay small. This section keeps every recommendation aligned with where the client actually wants to go, not a generic "scale up" assumption.

**Questions to ask:** What does the business want in the next 3, 6, and 12 months? What does growth mean to you specifically? What are you explicitly not trying to do? What would make this engagement a clear success a year from now?

**Fields to store:** goals_3mo, goals_6mo, goals_12mo, growth_definition, explicit_non_goals[], success_criteria

**AI systems that use this:** Informs prioritisation across all products; reviewed at each engagement milestone

## How This Gets Used

Completed during the Diagnosis stage of every engagement, ideally with the business owner directly rather than a delegate, since a lot of this — especially Voice, Knowledge, and Processes — lives in their head. Treat thin or skipped sections as a signal to go back and ask more, not a gap to fill with assumptions. This document should be revisited at least once a year or whenever a client's business changes meaningfully, since stale Business DNA produces stale, wrong-sounding AI output.
