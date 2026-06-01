# Sharing and Access Matrix

## Purpose

This matrix defines the default audience for major Electrical Trades Program OS artifacts.

The goal is to prevent accidental over-sharing as the system grows into Google Workspace, Apps Script, dashboards, trackers, and source registries.

## Default Rule

Start more private than public.

Move an artifact to a broader audience only after review.

## Access Categories

| Category | Meaning |
|---|---|
| Teacher-only | Only the instructor or authorized builder should access it. |
| Facilitator-only | Instructor plus approved program or administrative support. |
| Student-viewable | Reviewed materials intended for student use. |
| Public-safe | Safe to place in a public repo or public-facing summary. |
| Restricted | Needs special review before use or sharing. |

## Matrix

| Artifact Type | Default Category | Notes |
|---|---|---|
| Project charter | Public-safe | Contains project identity and direction, not student-specific data. |
| Course index | Public-safe | Program structure only. |
| Teacher dashboard map | Public-safe | Product design artifact. |
| Teacher workflow wireframe | Public-safe | Product design artifact. |
| Assignment schema | Public-safe | Template structure only. |
| Lens libraries | Public-safe | Reusable instructional prompts. |
| Assignment template | Public-safe | Generic template. |
| Draft assignment pack | Teacher-only | Review before classroom use. |
| Reviewed assignment pack | Student-viewable | Only after teacher approval. |
| Rubric template | Public-safe | Generic template. |
| Rubric for active class | Teacher-only | May become student-viewable after teacher review. |
| Program tracker | Teacher-only | May include internal workflow status. |
| Audit log | Teacher-only | Internal review and trust record. |
| Source intake record | Facilitator-only | May include review notes. |
| Source registry summary | Facilitator-only | Can become public-safe only after review. |
| Approved-tool registry | Public-safe | Shows intended tool boundaries. |
| Governance documents | Public-safe | Keep plain and non-student-specific. |
| Raw course documents | Restricted | Store outside the public product repo unless reviewed. |
| Raw policy documents | Restricted | Review before public or downstream use. |
| Requisition materials | Facilitator-only | May become internal planning material. |
| Advisory committee materials | Facilitator-only | Summarize before broader sharing. |
| Recruiting materials | Facilitator-only | Review before public release. |
| Student work | Restricted | Do not place in public repo. |
| Grades or progress records | Restricted | Do not place in public repo. |

## Google Workspace Implication

When this project becomes interactive in Google Workspace, sharing settings should follow this matrix.

Suggested defaults:

- Drafts: teacher-only
- Trackers: teacher-only
- Audit logs: teacher-only
- Student materials: student-viewable only after review
- Public summaries: public-safe only after review
- Raw documents: restricted until classified

## End-User Test

The instructor should be able to look at an artifact and know who should be allowed to see it by default.
