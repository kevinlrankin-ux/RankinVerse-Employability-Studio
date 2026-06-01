# Live Google Sheet Setup Checklist

## Purpose

This checklist makes the first live Google Sheet MVP test easier when the instructor has access to a laptop, desktop, Chromebook, or full browser.

The phone-friendly work can continue in GitHub.

The live Apps Script setup should happen later in a full Google Sheets web environment.

## Goal

Create a working teacher-facing Google Sheet prototype for the Electrical Trades Program OS.

## What the Prototype Should Do

The first live prototype should let the instructor:

1. open a Google Sheet
2. see the Electrical Trades OS custom menu
3. run workbook setup
4. create required tabs
5. seed starter course and lens data
6. run a health check
7. create sample assignment drafts
8. open the assignment builder sidebar
9. create a custom draft record
10. generate a teacher-reviewable Google Doc from an assignment row
11. rebuild the Review Queue
12. rebuild the Program Tracker
13. see audit log entries

## Required Prototype Files

Copy these files into a bound Apps Script project:

- `40_APPS_SCRIPT/prototypes/ELECTRICAL_TRADES_OS_MENU.gs`
- `40_APPS_SCRIPT/prototypes/SETUP_WORKBOOK.gs`
- `40_APPS_SCRIPT/prototypes/ASSIGNMENT_BUILDER_PROTOTYPE.gs`
- `40_APPS_SCRIPT/prototypes/ASSIGNMENT_BUILDER_SIDEBAR_SERVER.gs`
- `40_APPS_SCRIPT/prototypes/ASSIGNMENT_BUILDER_SIDEBAR.html`
- `40_APPS_SCRIPT/prototypes/GOOGLE_DOC_GENERATOR_PROTOTYPE.gs`
- `40_APPS_SCRIPT/prototypes/REVIEW_QUEUE_AND_TRACKER_PROTOTYPE.gs`

## Setup Steps

### Step 1: Create Google Sheet

Create a new Google Sheet named:

`Electrical Trades Program OS - Teacher Dashboard MVP`

### Step 2: Open Apps Script

In the Google Sheet, open:

`Extensions -> Apps Script`

### Step 3: Add Script Files

Create or paste the `.gs` and `.html` files listed above.

Use matching file names where possible.

### Step 4: Save Project

Save the Apps Script project.

Suggested project name:

`Electrical Trades Program OS MVP`

### Step 5: Reload Sheet

Reload the Google Sheet.

The menu should appear:

`Electrical Trades OS`

### Step 6: Run Setup Workbook

Use menu:

`Electrical Trades OS -> Setup Workbook`

Expected result:

Required tabs are created and starter data is seeded.

### Step 7: Run Health Check

Use menu:

`Electrical Trades OS -> Run Health Check`

Expected result:

Health check passes if all MVP sheets exist.

### Step 8: Create Sample Drafts

Use menu:

- `Create Sample Conduit Draft`
- `Create Sample DC Theory Draft`

Expected result:

Draft assignment rows appear in the Assignments tab.

Audit rows appear in the Audit Log tab.

### Step 9: Open Assignment Builder Sidebar

Use menu:

`Electrical Trades OS -> Build Assignment Draft`

Expected result:

Sidebar opens with course, title, topic, technical skill, lens, documentation, and reflection fields.

### Step 10: Create Custom Draft

Complete the sidebar and select:

`Create Draft Record`

Expected result:

A new draft row appears in Assignments.

A new audit row appears in Audit Log.

### Step 11: Generate Google Doc

Select an assignment row in the Assignments tab.

Use menu:

`Electrical Trades OS -> Generate Google Doc From Selected Assignment`

Expected result:

A teacher-reviewable Google Doc is created.

The Google Doc link is written back to the selected assignment row.

An audit row is added.

### Step 12: Rebuild Review Queue and Program Tracker

Use menu:

- `Electrical Trades OS -> Rebuild Review Queue`
- `Electrical Trades OS -> Rebuild Program Tracker`

Expected result:

Review Queue and Program Tracker tabs update from the Assignments tab.

## Pass Criteria

The live prototype passes if:

- menu appears
- workbook setup works
- health check works
- starter courses appear
- starter lenses appear
- sample drafts can be created
- sidebar opens
- custom draft can be created
- Google Doc can be generated from a selected assignment row
- review queue can be rebuilt
- program tracker can be rebuilt
- audit log records creation and export events
- all generated work remains draft / teacher-only by default

## Fail Notes

Record any issue in the test log:

- menu did not appear
- authorization failed
- setup failed
- missing tabs
- sidebar failed
- draft did not write
- Google Doc did not generate
- Google Doc link did not write back
- review queue did not rebuild
- program tracker did not rebuild
- audit row missing
- confusing workflow
- too many clicks
- unclear teacher value

## Current Boundary Reminder

This is a teacher-facing prototype.

It does not publish to students.

It does not connect to Google Classroom.

It does not grade students.

It does not require real student data.

Generated records remain drafts until teacher review.
