# Dashboard Data Model

## Purpose

This document defines the basic data the teacher dashboard needs in order to function as the front door of the Electrical Trades Program OS.

The first version can be represented in Google Sheets, JSON-like configuration, or Apps Script constants.

## Dashboard Objects

The dashboard needs five main object types:

1. Course
2. Assignment
3. Lens
4. Tracker Item
5. Review Status

## Course Object

| Field | Purpose |
|---|---|
| Course ID | Short identifier such as DC_THEORY or CONDUIT_BENDING. |
| Course Title | Human-readable course name. |
| Course Type | Theory, lab, safety, code, print reading, controls, mixed. |
| Active | Whether the course is currently visible in the dashboard. |
| Priority | Build or display order. |
| Notes | Short instructor note about the course role. |

## Assignment Object

| Field | Purpose |
|---|---|
| Assignment ID | Unique assignment identifier. |
| Course ID | Course this assignment belongs to. |
| Title | Assignment title. |
| Unit or Topic | Where it fits in the course. |
| Technical Skill | Main skill or concept. |
| Safety Lens | Safety lens applied. |
| Leadership Lens | Leadership lens applied. |
| Executive-Function Lens | Executive-function lens applied. |
| Review Status | Draft, needs review, ready, etc. |
| Google Asset Link | Link to generated or prepared Google file. |
| Next Action | What should happen next. |

## Lens Object

| Field | Purpose |
|---|---|
| Lens ID | Unique lens identifier. |
| Lens Type | Safety, leadership, executive-function. |
| Lens Name | Plain-language name. |
| Best Used For | Course or assignment types where this lens fits. |
| Student Prompt | Prompt that can be embedded into assignments. |
| Instructor Note | Guidance for teacher use. |

## Tracker Item Object

| Field | Purpose |
|---|---|
| Item ID | Assignment or artifact identifier. |
| Item Type | Assignment, rubric, form, slide deck, etc. |
| Course | Related course. |
| Status | Current readiness status. |
| Governance Status | Clear, needs review, restricted, not for public repo. |
| Source Status | Source-grounded, program-defined, needs source upload. |
| Last Updated | Last update date. |
| Next Action | Next recommended action. |

## Review Status Object

Recommended statuses:

- draft
- needs review
- reviewed
- ready for classroom use
- used in class
- needs revision
- archived

## First Dashboard Views

The MVP dashboard should be able to show:

1. All courses
2. Active course slices
3. Draft assignments
4. Assignments ready for classroom use
5. Assignments missing safety lens
6. Assignments missing leadership lens
7. Assignments missing executive-function lens
8. Governance needs review
9. Next build actions

## End-User Test

The instructor should be able to look at the dashboard data and understand what courses exist, what assignments are being built, what is ready, and what needs attention next.
