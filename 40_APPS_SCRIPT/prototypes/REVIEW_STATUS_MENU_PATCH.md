# Review Status Menu Patch Notes

## Purpose

This note explains how the review status prototype should be added to the Google Sheet custom menu during live MVP testing.

The review functions already exist in:

`40_APPS_SCRIPT/prototypes/REVIEW_STATUS_PROTOTYPE.gs`

## Required File

Add this file to the Apps Script project during setup:

- `40_APPS_SCRIPT/prototypes/REVIEW_STATUS_PROTOTYPE.gs`

## Menu Items to Add

Add these items to the custom menu after the Google Doc generation item:

```javascript
.addItem('Mark Selected Assignment Ready', 'markSelectedAssignmentReady')
.addItem('Mark Selected Assignment Needs Revision', 'markSelectedAssignmentNeedsRevision')
.addItem('Archive Selected Assignment', 'archiveSelectedAssignment')
```

## Intended Workflow

```text
Select assignment row
-> Generate Google Doc
-> Review assignment
-> Mark Ready or Needs Revision
-> Rebuild Review Queue
-> Rebuild Program Tracker
-> Confirm Audit Log entry
```

## Teacher-Facing Meaning

This closes the first review loop.

Drafts do not become classroom-ready automatically.

The instructor must mark the assignment ready.

## Test Notes

During live testing, confirm:

- selected row review status updates
- teacher approved field updates
- next action updates
- audit log records the status change
- review queue changes after rebuild
- tracker changes after rebuild
