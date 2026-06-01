# Apps Script MVP Plan

## Purpose

This document defines the first Apps Script MVP for the Electrical Trades Program OS.

The goal is not to automate everything at once.

The goal is to create a small teacher-facing workflow that can eventually connect the dashboard, assignment builder, Google Docs, tracker, and audit log.

## MVP Boundary

The Apps Script layer is teacher-facing for the current build.

It should support instructor workflow and teacher review.

It should not create a student-facing AI chatbot.

## First Workflow

```text
Teacher opens dashboard
-> selects course
-> selects or enters assignment topic
-> chooses lenses
-> generates draft assignment structure
-> reviews output
-> marks assignment ready or needs revision
-> tracker updates
-> audit log updates
```

## MVP Functions

### 1. getCourseIndex

Returns the available Electrical Trades courses.

Used by:

- dashboard course cards
- course selector
- assignment builder

### 2. getLensLibrary

Returns safety, leadership, and executive-function lenses.

Used by:

- assignment builder
- template renderer

### 3. buildAssignmentDraft

Creates a structured draft assignment from teacher inputs.

Inputs:

- course
- unit or topic
- technical skill
- safety lens
- leadership lens
- executive-function lens
- teacher notes

Output:

- draft assignment object

### 4. renderAssignmentDoc

Turns a reviewed assignment object into a Google Doc structure.

First version may create a draft document or produce a copy-ready text block.

### 5. recordTrackerRow

Adds or updates an assignment row in the program tracker.

### 6. recordAuditEvent

Adds a row to the audit log when an assignment is created, reviewed, approved, exported, or archived.

### 7. updateReviewStatus

Updates teacher review status.

Statuses:

- draft
- needs review
- reviewed
- ready for classroom use
- used in class
- needs revision
- archived

## First Data Sources

The first version can use Google Sheets tabs:

- Courses
- Lenses
- Assignments
- Review Queue
- Audit Log
- Settings

## Teacher Review Rule

No generated assignment is considered ready until the teacher marks it ready.

Default review status is draft.

## Governance Defaults

- student-facing AI used: no
- student personal data required: no
- teacher approved: no until reviewed
- sharing category: teacher-only until reviewed

## First Interactive Prototype

The first interactable prototype can be either:

1. Apps Script Web App with simple HTML form
2. Google Sheet with custom menu and sidebar
3. Google Site linked to Apps Script Web App

Recommended first option:

Google Sheet + Apps Script custom menu/sidebar.

Why:

- fast to test
- easy to inspect
- teacher-friendly
- directly connected to tracker and audit tabs

## Custom Menu Draft

Menu name:

Electrical Trades OS

Menu actions:

- Open Teacher Dashboard
- Build Assignment Draft
- Review Queue
- Add Course Note
- View Audit Log
- Run Health Check

## End-User Test

The instructor should be able to:

1. open the Google Sheet
2. use the custom menu
3. start an assignment draft
4. choose course and lenses
5. see the draft output
6. mark the draft needs review or ready
7. see tracker and audit log rows update

## Build Rule

Start with the smallest useful workflow.

Do not automate beyond the point where the instructor can still understand and trust the system.
