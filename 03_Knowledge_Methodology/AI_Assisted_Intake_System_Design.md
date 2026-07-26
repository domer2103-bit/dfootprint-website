# AI-Assisted Diagnostic Intake System — Design

> **Layer:** Knowledge & Methodology | **Purpose:** Design (not build) for an AI-assisted layer on top of the existing Client Intake Form, to help consultants prepare sharper investigation questions before the diagnosis session | **Status:** Active — design spec, no software built yet | **Owner:** Founder | **Version:** 1.0

This document extends `Client_Intake_Form.md` and `Assessment_Interview_Guide.md`, and is governed entirely by AI Prescription.md. It designs how AI can help a consultant *prepare* for diagnosis — it does not diagnose, and this restriction is the single most important design constraint in the whole document. "The intake creates a hypothesis. The diagnosis discovers the reality" applies just as strictly to an AI-assisted intake as to the manual one already built.

## 1. Client Questionnaire Structure

Same underlying structure as `Client_Intake_Form.md` — business context, friction in the client's own words, time and effort, systems and tools, any specific request, anything else — but designed to be answered more naturally: short prompts, voice or text responses accepted, no pressure to write formally. The AI's role starts after submission, not during it — the AI does not conduct the intake conversation itself in this version; it processes what the client already gave in their own words.

## 2. Data Collected

Raw client responses, verbatim, per question. Any attached documents or examples the client provided. Metadata: business size/industry if stated, how long each response took to answer (a very fast, thin answer versus a long, detailed one is itself signal about how much the client has already reflected on the problem). Nothing is collected that isn't already asked for in the existing Client Intake Form — this system processes existing inputs more usefully, it doesn't expand what's asked of the client.

## 3. How AI Should Analyse Responses

The AI's job is organisation and structuring, not judgement. Specifically, it should: group raw answers into the friction-point categories already defined in `Business_Problems.md`, wherever a clear match exists, and flag anything that doesn't fit an existing category rather than forcing one. It should extract and preserve exact client phrases (feeding the same discipline as Section A of `Client_Conversation_Capture_Template.md`) rather than paraphrasing them into generic business language. It should note internal inconsistencies in the client's own answers — for example, a client who says quoting is "not really a problem" in one answer but describes losing a job over quote delay in another — as these are exactly the kind of contradiction the diagnosis stage needs to test.

The AI should never rank friction points by importance, never suggest which is the "real" problem, and never apply the AI Suitability Test (AI Prescription.md section 3) — that's diagnosis work, reserved for the consultant, in person, with evidence.

## 4. How Interview Questions Should Be Generated

For each identified friction point, the AI generates candidate investigation questions modelled directly on the existing `Assessment_Interview_Guide.md` structure: a request to see real evidence ("what would show me this happening"), a question testing who else is involved, and a root-cause probe drawn from AI Prescription.md section 2's diagnosis questions (is this really the root problem, what would happen if nothing changed). Generated questions are candidates, not a script — the consultant reviews and edits them before the session, exactly as they would prepare manually today, just starting from a stronger first draft instead of a blank page.

Where the client made a specific request (e.g. named "AI" or a particular tool), the AI must generate at least one question that treats the request as a hypothesis to test, per the existing v1.1 principle in AI Prescription.md — the system should never simply pass a request through as a scoped requirement.

## 5. How Assumptions Should Be Flagged

Every output the AI produces is labelled by type, matching the same fact/assumption separation already established in `Client_Conversation_Capture_Template.md`: what the client stated directly (near-verbatim), what the AI inferred from the pattern of answers (clearly marked as an inference, with a stated confidence level), and what remains genuinely unknown and needs to be asked live. Nothing produced by the AI is allowed to be presented to the consultant, or ever to the client, as a confirmed fact — the output format itself should make it visually or structurally obvious which category each item falls into, so a rushed consultant can't accidentally treat an inference as a finding.

## 6. How Outputs Connect to AI Prescription Methodology

The AI's output becomes the consultant's preparation material for SOP section 2 (Consultant Preparation Steps) — it does not skip or replace that step, it makes it faster and sharper. The output feeds directly into a pre-filled draft of the "hypotheses identified" and "who else should be included" fields already defined at the bottom of `Client_Intake_Form.md`. The consultant reviews, edits, and takes ownership of this material before the Assessment session — nothing generated by the AI enters the session, the report, or a Client Record without a human review step in between.

## 7. What Must Remain Human Judgement

Everything the diagnosis actually depends on: applying the root-cause questions live, with real evidence, in conversation. Applying the AI Suitability Test (the five rejection conditions) to any friction point. Scoring anything against the six prioritisation factors. Deciding the per-friction-point outcome. Writing and standing behind the Prescription Report. Conducting the debrief. None of this is delegated to the AI-assisted intake system at any point — its entire purpose is to make the human diagnosis sharper and faster to prepare for, never to substitute for it.

## Explicit Boundary Statement

If at any point this system's output starts to resemble a diagnosis or a recommendation — a ranked list of "real" problems, a suggested solution, a suitability judgement — that is a design failure, not a feature, and should be corrected immediately rather than adopted because it seemed useful. This boundary should be checked deliberately whenever the system is eventually built, not assumed to hold on its own.
