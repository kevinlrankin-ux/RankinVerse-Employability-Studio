# Next Build Backlog

## Purpose

This backlog defines the next practical build steps after the current vertical slice.

The goal is to keep the project moving through visible teacher-facing usefulness.

## Immediate Next Step

Test the Google Sheet MVP with Apps Script.

## Backlog Items

### 1. Live Google Sheet MVP Test

Create a real Google Sheet and copy in the prototype Apps Script files.

Test:

- setup workbook
- custom menu
- health check
- sample assignment drafts
- sidebar assignment draft
- audit log entry

Output:

- test notes
- bugs
- usability notes
- next changes

### 2. Review Assignment Packs

Review the two current assignment packs:

- Conduit Bending: Basic 90-Degree Bend
- DC Theory: Ohm's Law Relationship and Circuit Reasoning

Decide:

- keep
- revise
- simplify
- make more classroom-real
- prepare as Google Docs

### 3. Build Google Doc Generator

Create an Apps Script function that turns an assignment row into a draft Google Doc.

Default rules:

- generated Doc is teacher-only
- review status remains draft
- tracker records Google Doc link
- audit log records export

### 4. Automate Review Queue

Create a review queue view from assignments with status:

- draft
- needs review
- needs revision

### 5. Update Program Tracker Automatically

When a draft is created, update Program Tracker with:

- course
- assignment title
- lens flags
- review status
- governance status
- next action

### 6. Add Wire Applications Course Slice

Create the third proof course slice.

Suggested starter assignment:

Basic conductor identification, preparation, and termination practice.

### 7. Add Print Reading Course Slice

Create a proof slice for interpreting symbols, locating information, and translating a drawing into a work plan.

### 8. Add Source Ingestion Pilot

Use a small set of non-sensitive sample documents or summaries.

Test:

- source intake record
- source registry entry
- approved downstream use
- connection to course or assignment

### 9. Create Google Site Front-Door Mockup

Create a simple Google Site structure or static outline:

- Home
- Teacher Dashboard
- Course Spine
- Assignment Builder
- Review Queue
- Governance

### 10. Create Week 4 Build Plan

Translate Conduit Bending slice into a more complete course module.

Include:

- unit structure
- assignment sequence
- safety routines
- common errors
- assessment moments
- Google Workspace assets

## Priority Order

1. Live Google Sheet MVP Test
2. Assignment pack review
3. Google Doc generator
4. Review queue automation
5. Program tracker automation
6. Wire Applications slice
7. Print Reading slice
8. Source ingestion pilot
9. Google Site front-door mockup
10. Week 4 Conduit Bending expansion

## Build Rule

Do not add complexity unless it makes the teacher-facing workflow more visible, testable, or useful.
