# Google Sheet Blueprint

## Purpose

This blueprint defines the first Google Sheet structure for the Electrical Trades Program OS.

The first interactable MVP can begin as a Google Sheet with tabs, a custom Apps Script menu, and a teacher-facing assignment builder workflow.

## Why Google Sheets First

Google Sheets is a strong first MVP surface because it is:

- easy to inspect
- easy to test
- familiar in Google Workspace
- connected to Apps Script
- useful for dashboards, trackers, audit logs, settings, and source registries

## Workbook Name

Suggested name:

`Electrical Trades Program OS - Teacher Dashboard`

## Recommended Tabs

1. Dashboard
2. Courses
3. Assignments
4. Lens Library
5. Review Queue
6. Program Tracker
7. Audit Log
8. Source Registry
9. Tool Registry
10. Settings

---

# Tab 1: Dashboard

## Purpose

Teacher-facing front page.

## Suggested Sections

- Current phase
- Next recommended action
- Course cards
- Draft assignment count
- Ready assignment count
- Needs review count
- Missing lens flags
- Governance reminders

## Example Fields

| Field | Example |
|---|---|
| Current Phase | Week 2-3 Vertical Slice |
| Next Action | Review Conduit Bending assignment pack |
| Draft Assignments | 2 |
| Ready Assignments | 0 |
| Needs Review | 2 |
| Governance Reminder | Teacher review before classroom use |

---

# Tab 2: Courses

## Purpose

Stores the course spine.

## Columns

- Course ID
- Course Title
- Course Type
- Active
- Priority
- Course Notes
- Next Build Action

---

# Tab 3: Assignments

## Purpose

Stores assignment records.

## Columns

- Assignment ID
- Title
- Course ID
- Unit or Topic
- Technical Skill
- Assignment Type
- Safety Lens
- Leadership Lens
- Executive-Function Lens
- Documentation Habit
- Reflection Prompt
- Review Status
- Teacher Approved
- Google Doc Link
- Next Action

---

# Tab 4: Lens Library

## Purpose

Stores reusable safety, leadership, and executive-function lenses.

## Columns

- Lens ID
- Lens Type
- Lens Name
- Best Used For
- Student Prompt
- Instructor Note
- Active

---

# Tab 5: Review Queue

## Purpose

Shows items that need instructor review.

## Columns

- Item ID
- Item Type
- Course
- Title
- Review Status
- Next Action
- Last Updated

---

# Tab 6: Program Tracker

## Purpose

Shows what exists and what is ready across the program.

## Columns

- Item ID
- Item Type
- Course
- Unit or Topic
- Title
- Safety Lens Included
- Leadership Lens Included
- Executive-Function Lens Included
- Review Status
- Governance Status
- Source Status
- Last Updated
- Next Action

---

# Tab 7: Audit Log

## Purpose

Records creation, review, and approval activity.

## Columns

- Audit ID
- Timestamp
- Action
- Item ID
- Item Title
- Course
- Tool Used
- Review Status
- Teacher Approved
- Sharing Category
- Notes

---

# Tab 8: Source Registry

## Purpose

Tracks reviewed source materials that may support the OS.

## Columns

- Source ID
- Title
- Source Type
- Related Course
- Summary
- Source Status
- Use Level
- Approved Uses
- Tags
- Last Reviewed
- Notes

---

# Tab 9: Tool Registry

## Purpose

Tracks approved tools and their allowed uses.

## Columns

- Tool Name
- Tool Category
- Approved Use
- Not Approved For
- Data Allowed
- Data Not Allowed
- Review Status
- Notes

---

# Tab 10: Settings

## Purpose

Stores system settings for the first Apps Script MVP.

## Columns

- Setting Key
- Setting Value
- Notes

## Starter Settings

| Setting Key | Setting Value | Notes |
|---|---|---|
| active_phase | week_2_3_vertical_slice | Current build phase. |
| default_review_status | draft | New assignments start as draft. |
| teacher_facing_ai_only | true | Boundary for current build. |
| require_teacher_approval | true | No draft is ready until reviewed. |
| default_sharing_category | teacher-only | Drafts stay private by default. |

## End-User Test

The instructor should be able to open the workbook and understand where the dashboard, courses, assignments, lenses, review queue, tracker, audit log, sources, tools, and settings live.
