# Pilot Execution Dashboard

> **Layer:** Operations (working document, not source of truth) | **Purpose:** The day-to-day operational tracker used while running the first pilot clients — row-level logging, not aggregate metrics | **Status:** Active — structure ready, no data yet | **Owner:** Founder | **Version:** 1.0

This is the working tool the founder actually updates day to day while running outreach and Assessments, per `Founder_Outreach_System.md` and `AI_Prescription_Pilot_Playbook.md`. It logs individual leads, conversations, and pipeline entries. Aggregate metrics and the overall success-signal read still live in `Validation_Dashboard.md` — this document feeds that one, it doesn't replace it. No data has been entered yet; this is the empty structure, ready to use.

## Outreach Tracking

One row per person/business approached: name/business, source (personal network / cold / referral), date first approached, method (in person, message, call), status (not yet contacted / contacted, no reply / conversation had / declined / booked).

## Conversation Tracking

One entry per real conversation, cross-referenced to a `Client_Conversation_Capture_Template.md` record: date, business, friction point named (if any), reaction to the diagnosis-first framing, objection raised (if any, per `Founder_Outreach_System.md` section 7), outcome (booked / declined / follow up later).

## Assessment Pipeline

One row per business that's booked or further along, tracked through the exact stages in `AI_Prescription_Pilot_Playbook.md` section 5: Agreement signed & paid → Intake sent → Intake completed → Preparation Brief done → Interview session held → Analysis complete → Report sent → Debrief held → Outcome (Implementation / Process Change / Referral / No Action, per friction point) → Client decision on next step.

For each: date entered the stage, date left the stage (to compare against the time estimates in the Playbook), any blocker or delay noted.

## Learning Capture

Quick-reference log of every reflection completed (per `AI Prescription.md` section 8 and `Post_Conversation_Review_Process.md`): pilot business, date, one-line summary of the finding, classified as one-off observation or (if a second instance) flagged for Lessons Learned. Full detail lives in `13 Lessons Learned.md` and the relevant `Client_Template.md` record — this is an index pointing to those, not a duplicate of their content.

## Founder Metrics

Hours spent per pilot, actual vs. the Playbook's estimate (section 5 table). Total pilots active, completed, declined, or stalled at any given time. Personal read on energy/sustainability of the pace — a subjective but honest weekly note on whether the 2-3 hour/day budget is holding up in practice.

## Weekly Review Structure

A short weekly check-in (15-20 minutes), not a formal report: How many outreach conversations happened this week, versus the plan in `AI_Prescription_Pilot_Playbook.md` section 10? How many Assessments moved forward a stage? Any objection or reaction that's now shown up more than once — flag immediately for Lessons Learned review, don't wait for the Phase 1 review point to notice. Is the weekly pace realistic given the day job, or does next week's plan need adjusting? Update `Validation_Dashboard.md`'s aggregate figures from this week's rows above.

## Relationship to Validation_Dashboard.md

This document is the log. `Validation_Dashboard.md` is the summary read on success signals (payment friction, unprompted next-step interest, reaction to "no AI needed" findings) drawn from this log. Update this dashboard first, roll the relevant totals into `Validation_Dashboard.md` weekly, per the review structure above.
