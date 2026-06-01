# Google Doc Generator Plan

## Purpose

The Google Doc Generator turns an assignment draft record into a teacher-reviewable Google Doc.

This is the next practical step after the Google Sheet MVP can create assignment rows.

## Current Boundary

Generated Docs are teacher-only drafts by default.

A generated Doc is not ready for classroom use until the instructor reviews and approves it.

## Generator Inputs

The generator should read from the Assignments tab:

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

## Generator Output

One Google Doc containing:

1. Assignment title
2. Course and unit/topic
3. Technical skill
4. Student task
5. Materials and tools placeholder
6. Safety lens
7. Leadership lens
8. Executive-function scaffold
9. Documentation habit
10. Rubric placeholder
11. Reflection prompt
12. Teacher notes placeholder
13. Governance footer

## Recommended Menu Action

Add menu item:

`Generate Google Doc From Active Assignment Row`

## Workflow

```text
Teacher selects an assignment row
-> Menu: Generate Google Doc
-> Script reads row values
-> Script creates Google Doc
-> Script writes Doc URL back to Assignments tab
-> Script writes audit log entry
```

## Default Controls

- Review status remains draft
- Teacher approved remains no
- Sharing category remains teacher-only
- Audit log records document creation

## End-User Test

The instructor should be able to:

1. create an assignment draft
2. select the assignment row
3. generate a Google Doc
4. open the Doc
5. see a readable assignment structure
6. confirm the Doc URL appears in the Assignments tab
7. confirm an audit log entry was created

## Pass Criteria

The generator passes if the Doc is clear enough for teacher review and editing.

It does not need to be beautiful in the first version.

It needs to be usable.
