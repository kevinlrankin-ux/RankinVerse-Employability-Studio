# Teacher Dashboard Map

## Purpose

This document defines the first visible teacher-facing entry point for the Electrical Trades Program Operating System.

The dashboard is the instructor cockpit.

It should help the teacher see the program, choose a course, build or review assignments, check safety and leadership integration, and understand what needs attention next.

## Primary User

Instructor.

The dashboard is not a student-facing AI interface.

## Dashboard Promise

When the instructor opens the dashboard, they should immediately understand:

- what courses are in the program
- what assignments or modules exist
- what needs to be built next
- what is ready for classroom use
- what still needs review
- where safety, leadership, and executive-function supports are being embedded
- what Google Workspace materials are connected

## Dashboard Sections

### 1. Program Overview

Purpose:

Show the instructor the full Electrical Trades program at a glance.

Should include:

- core course list
- patched-in fundamentals
- active build phase
- current vertical slice status
- next recommended action

### 2. Course Spine

Purpose:

Let the instructor select a course and enter that course's workspace.

Courses:

- DC Theory
- Conduit Bending
- Wire Applications
- Code and Practices
- OSHA-10hr
- Print Reading
- Studio 5000 / Emulate 3D

Patched-in fundamentals:

- Leadership
- Motors
- AC Theory

### 3. Assignment Builder

Purpose:

Start a teacher-facing workflow for creating or improving an assignment.

Minimum workflow:

1. Select course
2. Select unit or topic
3. Define technical skill
4. Select safety lens
5. Select leadership lens
6. Select executive-function scaffold
7. Generate draft structure
8. Review output
9. Mark ready or send back for revision

### 4. Assignment Review Queue

Purpose:

Prevent generated material from going directly to classroom use without instructor review.

Statuses:

- draft
- needs review
- reviewed
- ready for classroom use
- used in class
- needs revision
- archived

### 5. Safety Integration

Purpose:

Make safety visible across the program, not trapped inside OSHA-10hr only.

Should show:

- assignments missing safety lens
- safety routines already used
- upcoming safety emphasis
- hazard prediction prompts
- PPE or procedure checks
- reporting or stop-work reminders where appropriate

### 6. Leadership and Employability Integration

Purpose:

Show where students are practicing workplace behaviors inside technical tasks.

Should show:

- assignments with leadership prompts
- team-role opportunities
- communication prompts
- responsibility checkpoints
- peer-check routines
- professionalism connections

### 7. Executive-Function Supports

Purpose:

Make self-management and planning visible inside the work.

Should show:

- planning prompts
- time estimates
- sequencing checks
- material-readiness checks
- troubleshooting steps
- reflection and self-check moments

### 8. Google Workspace Materials

Purpose:

Connect the operating system to actual deliverable classroom materials.

Should link or track:

- Google Docs
- Google Slides
- Google Forms
- Google Sheets
- Google Drive folders
- future Google Classroom links if approved

### 9. Governance and Trust

Purpose:

Keep governance visible in the workflow.

Should show:

- teacher-facing AI boundary
- no real student data in public repo rule
- review status
- approved-tool status
- audit log status
- FERPA-aware reminders
- sharing/access category

### 10. Next Build Actions

Purpose:

Keep the project moving vertically, not sideways.

Should show:

- current week / phase
- next artifact to create
- next course slice
- next quality review
- blockers or missing source materials

## Plain-Language Dashboard Layout

```text
Electrical Trades Program OS

[Program Overview]
Current phase: Week 2 - Teacher Dashboard Prototype
Next action: Build Assignment Compiler MVP

[Course Spine]
DC Theory | Conduit Bending | Wire Applications | Code and Practices
OSHA-10hr | Print Reading | Studio 5000 / Emulate 3D

[Build an Assignment]
Course -> Topic -> Technical Skill -> Safety Lens -> Leadership Lens -> EF Scaffold -> Draft

[Review Queue]
Drafts | Needs Review | Ready for Classroom Use | Needs Revision

[Program Quality]
Safety Embedded | Leadership Embedded | EF Embedded | Google Asset Linked | Teacher Approved

[Governance]
Teacher-facing AI only | No real student data | Review before use | Audit log planned
```

## End-User Test

The instructor should be able to look at this dashboard map and answer:

- Where do I start?
- Where are my courses?
- Where do I build an assignment?
- Where do I review before use?
- Where does governance show up?
- How does this become a real operating system?

## Week 2 Acceptance Criteria

- Dashboard is teacher-facing
- Courses are visible
- Assignment builder entry is visible
- Review queue is visible
- Governance is visible
- Google Workspace role is visible
- The dashboard supports the eight-week vertical slice plan
