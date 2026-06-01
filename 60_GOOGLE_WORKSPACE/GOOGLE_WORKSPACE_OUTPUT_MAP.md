# Google Workspace Output Map

## Purpose

This document maps the Electrical Trades Program OS outputs to Google Workspace tools.

The goal is to keep the system practical for a school environment that already uses Google tools.

## Core Principle

The operating system should create useful instructional structures first.

Google Workspace tools should then carry those structures into classroom use.

## Output Types

| OS Output | Google Workspace Tool | Purpose |
|---|---|---|
| Teacher Dashboard | Google Site or Apps Script Web App | Main instructor entry point. |
| Course Index | Google Sheet or Apps Script config | Stores course list and course metadata. |
| Assignment Draft | Google Doc | Student-facing assignment sheet after teacher review. |
| Rubric | Google Doc or Google Sheet | Teacher review and scoring structure. |
| Reflection Prompt | Google Form or Google Doc section | Student reflection or exit check. |
| Safety Check | Google Form, Doc section, or checklist | Captures pre-task safety thinking. |
| Assignment Tracker | Google Sheet | Tracks assignment status and readiness. |
| Audit Log | Google Sheet | Records creation, review, approval, and export actions. |
| Mini-Lesson | Google Slides | Short visual support for an assignment or topic. |
| Program Source Registry | Google Sheet | Tracks source material and status. |
| Governance Registry | Google Sheet or Markdown | Tracks tool approval, sharing category, and review status. |

## First MVP Google Assets

The first visible MVP should be able to produce or simulate:

1. Teacher dashboard page
2. Course index sheet
3. Assignment builder form or interface
4. Draft assignment Google Doc structure
5. Program tracker sheet
6. Audit log sheet

## Teacher-Facing Workflow

```text
Teacher Dashboard
-> Select Course
-> Start Assignment Builder
-> Generate Draft
-> Review Draft
-> Mark Ready
-> Record in Tracker
-> Record in Audit Log
```

## Google Doc Assignment Structure

Each generated Google Doc should include:

- assignment title
- course and unit
- technical skill
- student task
- materials and tools
- safety lens
- leadership lens
- executive-function scaffold
- documentation habit
- rubric
- reflection prompt
- teacher review status or footer note

## Google Sheet Tracker Tabs

Recommended first tabs:

1. Courses
2. Assignments
3. Lenses
4. Review Queue
5. Audit Log
6. Settings

## Sharing Categories

| Category | Meaning |
|---|---|
| Teacher-only | Drafts, review notes, trackers, audit logs. |
| Student-viewable | Reviewed assignments, forms, slides, and resources. |
| Facilitator-only | Program setup, governance, deployment, and source records. |
| Public-safe | Non-sensitive templates and program summaries. |
| Restricted | Anything needing district or administrative review. |

## MVP Rule

The first build may use manual Google Docs and Sheets before full Apps Script automation.

The workflow must still preserve:

- teacher review
- no direct student-facing AI
- no real student data in the public repo
- clear sharing categories
- visible audit trail

## End-User Test

The instructor should be able to look at this map and understand where each generated item will live in Google Workspace.
