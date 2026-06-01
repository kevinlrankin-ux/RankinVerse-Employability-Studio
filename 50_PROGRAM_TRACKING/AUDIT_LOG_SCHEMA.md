# Audit Log Schema

## Purpose

The audit log records how instructional materials are generated, reviewed, approved, and prepared for use.

The goal is trust, not bureaucracy.

The instructor should be able to see what was created, what lens choices were used, and whether the material was reviewed before classroom use.

## Primary User

Instructor.

## Why This Matters

The Electrical Trades Program OS uses a teacher-facing AI support layer.

That means generated materials should remain visible, reviewable, and traceable.

The audit log helps show that:

- the teacher remains in control
- generated materials are reviewed before use
- safety, leadership, and executive-function supports are intentional
- governance is part of the workflow
- the public repo does not store real student data

## Recommended Columns

| Column | Purpose |
|---|---|
| Audit ID | Unique record ID. |
| Timestamp | When the item was created or updated. |
| Created By | Instructor or system role. |
| Item ID | Related assignment, module, or artifact ID. |
| Item Title | Plain-language title. |
| Course | Related course. |
| Unit or Topic | Related unit or topic. |
| Action | Created, revised, reviewed, approved, archived, exported. |
| Tool Used | Manual, template, Apps Script, Gemini-assisted, other approved tool. |
| Safety Lens Used | Safety lens applied. |
| Leadership Lens Used | Leadership lens applied. |
| Executive-Function Lens Used | Executive-function lens applied. |
| Source Status | Source-grounded, program-defined, needs source upload. |
| Review Status | Draft, needs review, reviewed, ready, used, needs revision, archived. |
| Teacher Approved | Yes or no. |
| Student-Facing AI Used | Current default is no. |
| Student Personal Data Required | Current default is no. |
| Sharing Category | Teacher-only, student-viewable, facilitator-only, public-safe. |
| Notes | Short explanation or next step. |

## Current Defaults

| Field | Default |
|---|---|
| Student-Facing AI Used | No |
| Student Personal Data Required | No |
| Teacher Approved | No until reviewed |
| Sharing Category | Teacher-only until reviewed |
| Audit Required | Yes |

## Sharing Categories

- Teacher-only
- Student-viewable
- Facilitator-only
- Public-safe
- Restricted

## Actions

- created
- revised
- reviewed
- approved
- exported
- used in class
- needs revision
- archived

## End-User Test

The instructor should be able to look at an audit row and answer:

- What was created?
- Which course does it belong to?
- Was it reviewed?
- Is it ready for classroom use?
- Which safety, leadership, and executive-function lenses were included?
- Was student-facing AI used?
- Is this safe to share with students or keep teacher-only?

## Build Note

The first version can be a Google Sheet.

Later versions can be populated by Apps Script when assignments are generated, reviewed, exported, or marked ready.
