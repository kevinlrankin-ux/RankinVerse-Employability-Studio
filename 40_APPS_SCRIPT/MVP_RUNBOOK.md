# Apps Script MVP Runbook

## Purpose

This runbook explains how to test the first Google Sheet + Apps Script version of the Electrical Trades Program OS.

This is not the full product.

This is the first interactable teacher-facing skeleton.

## MVP Surface

Google Sheet with Apps Script.

## Prototype Files

- `40_APPS_SCRIPT/prototypes/ELECTRICAL_TRADES_OS_MENU.gs`
- `40_APPS_SCRIPT/prototypes/SETUP_WORKBOOK.gs`
- `40_APPS_SCRIPT/prototypes/ASSIGNMENT_BUILDER_PROTOTYPE.gs`

## What This Prototype Does

The prototype supports:

- creating the workbook tabs
- seeding starter dashboard values
- seeding course records
- seeding starter lens records
- adding a custom menu
- creating sample assignment draft records
- writing audit log entries
- checking whether required tabs exist

## What This Prototype Does Not Do Yet

It does not yet:

- generate Google Docs
- publish assignments
- connect to Google Classroom
- use student-facing AI
- grade students
- collect student records
- create a full sidebar UI

## Setup Steps

1. Create a new Google Sheet.
2. Open Extensions > Apps Script.
3. Add the prototype `.gs` files.
4. Save the Apps Script project.
5. Reload the Google Sheet.
6. Use the custom menu named `Electrical Trades OS`.
7. Run workbook setup.
8. Run health check.
9. Create sample assignment drafts.
10. Review the Assignments and Audit Log tabs.

## Expected Tabs

The setup script should create:

- Dashboard
- Courses
- Assignments
- Lens Library
- Review Queue
- Program Tracker
- Audit Log
- Source Registry
- Tool Registry
- Settings

## First Teacher Test

After setup, the instructor should be able to:

1. open the dashboard tab
2. see the active phase and next action
3. open the Courses tab
4. see the Electrical Trades course spine
5. open the Lens Library tab
6. see starter safety, leadership, and executive-function lenses
7. create a sample Conduit Bending draft
8. create a sample DC Theory draft
9. confirm the drafts appear in Assignments
10. confirm creation events appear in Audit Log

## Pass Criteria

The MVP passes if the instructor can say:

- I can open the workbook.
- I can see the program structure.
- I can create sample assignment draft records.
- I can see that the drafts are not automatically approved.
- I can see audit log entries.
- I understand how this becomes a teacher-facing OS.

## Current Default Controls

- New assignments start as draft.
- Teacher approval starts as no.
- Sharing category starts as teacher-only.
- Generated or seeded content is not ready for classroom use until reviewed.

## Next Prototype Step

Build a teacher-facing sidebar or simple form for creating custom assignment drafts instead of only sample drafts.
