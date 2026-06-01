# Week 2-3 Teacher Walkthrough Test

## Purpose

This test checks whether the first teacher-facing vertical slice makes sense from the instructor perspective.

It covers the dashboard map, assignment compiler, course index, lens libraries, first assignment packs, tracker schema, audit log schema, and Google Workspace output map.

## Test User

Instructor.

## Test Goal

The instructor should be able to understand the OS flow without needing technical explanation.

## Walkthrough Scenario

You are preparing an assignment for either:

1. Conduit Bending: Basic 90-Degree Bend
2. DC Theory: Ohm's Law Relationship and Circuit Reasoning

## Step 1: Open the Project Charter

File:

`00_MANIFEST/PROJECT_CHARTER.md`

Teacher check:

- Can I tell what this project is building?
- Do I understand that the first user is the instructor?
- Is the teacher-facing AI boundary clear?
- Does the long-term OS vision make sense?

Pass condition:

The project direction is understandable in plain language.

## Step 2: Open the Teacher Dashboard Map

File:

`10_PRODUCT/TEACHER_DASHBOARD_MAP.md`

Teacher check:

- Do I know where I would start?
- Can I see my courses?
- Can I see where assignments are built?
- Can I see where review happens?
- Can I see where governance appears?

Pass condition:

The dashboard feels like a useful instructor cockpit.

## Step 3: Open the Course Index

File:

`20_CURRICULUM/COURSE_INDEX.md`

Teacher check:

- Does this course list match my actual program?
- Are the course types recognizable?
- Are Conduit Bending and DC Theory correctly prioritized as proof courses?

Pass condition:

The program spine feels real, not generic.

## Step 4: Open the Assignment Schema

File:

`30_ASSIGNMENT_COMPILER/ASSIGNMENT_SCHEMA.md`

Teacher check:

- Are the required assignment fields useful?
- Do the fields support technical skill, safety, leadership, planning, documentation, and reflection?
- Are the review statuses understandable?

Pass condition:

The schema feels like it could produce a usable assignment.

## Step 5: Review the Lens Libraries

Files:

- `30_ASSIGNMENT_COMPILER/lens-libraries/SAFETY_LENS_LIBRARY.md`
- `30_ASSIGNMENT_COMPILER/lens-libraries/LEADERSHIP_LENS_LIBRARY.md`
- `30_ASSIGNMENT_COMPILER/lens-libraries/EXECUTIVE_FUNCTION_LENS_LIBRARY.md`

Teacher check:

- Are these prompts realistic?
- Do they fit naturally into Electrical Trades assignments?
- Do they avoid feeling like unrelated add-ons?

Pass condition:

The lenses feel practical enough to embed into daily work.

## Step 6: Review the Conduit Bending Assignment Pack

File:

`20_CURRICULUM/assignment-packs/CONDUIT_BENDING_BASIC_90_ASSIGNMENT_PACK.md`

Teacher check:

- Is this a usable Conduit Bending assignment draft?
- Is safety embedded naturally?
- Is the leadership prompt practical?
- Is the planning scaffold useful?
- Could this become a Google Doc quickly?

Pass condition:

The assignment feels classroom-ready after teacher review and edits.

## Step 7: Review the DC Theory Assignment Pack

File:

`20_CURRICULUM/assignment-packs/DC_THEORY_OHMS_LAW_ASSIGNMENT_PACK.md`

Teacher check:

- Is this a usable DC Theory assignment draft?
- Does it support reasoning, not just calculation?
- Does the safety lens work for theory instruction?
- Does peer explanation fit the task?

Pass condition:

The OS works for theory instruction, not only lab work.

## Step 8: Review the Tracker and Audit Schemas

Files:

- `50_PROGRAM_TRACKING/PROGRAM_TRACKER_SCHEMA.md`
- `50_PROGRAM_TRACKING/AUDIT_LOG_SCHEMA.md`

Teacher check:

- Can I tell what exists, what is ready, and what needs review?
- Can I track safety, leadership, and executive-function integration?
- Can I see how teacher approval stays visible?

Pass condition:

The tracking layer supports program operation rather than just file storage.

## Step 9: Review the Google Workspace Map

File:

`60_GOOGLE_WORKSPACE/GOOGLE_WORKSPACE_OUTPUT_MAP.md`

Teacher check:

- Do I understand where the assignment, rubric, form, tracker, and audit log would live?
- Does the map fit a Google-native school environment?

Pass condition:

The OS has a practical path into Google Docs, Forms, Sheets, Slides, and Sites.

## Final Pass Criteria

The Week 2-3 vertical slice passes if the instructor can say:

- I can see the OS front door.
- I can see the assignment builder logic.
- I can see two real course examples.
- I can see governance in the workflow.
- I can imagine testing this in Google Workspace.

## Notes for Revision

Use this section during review:

- What felt useful?
- What felt too heavy?
- What felt missing?
- What should be simpler?
- What would make this easier to test from a phone or school laptop?
