# Eight-Week Vertical Slice Work Breakdown Structure

## Project

RankinVerse Employability Studio / Electrical Trades Program Operating System

## Purpose

This document defines an eight-week phased build plan for turning the current project into a visible, testable, teacher-facing Electrical Trades program operating system.

Each phase is a vertical slice. That means each week should produce something usable enough to see, test, and interact with from the end-user perspective.

The primary end user for this build is the instructor.

The AI agent remains teacher-facing only.

## Build Philosophy

The goal is not to build a large invisible backend first.

The goal is to build thin, complete slices of the operating system that can be inspected, tested, improved, and trusted.

Each weekly slice should include:

- a user-facing workflow
- a working Google Workspace artifact or prototype
- a clear data structure
- a teacher review point
- quality checks
- documentation
- a test from the instructor perspective

## Quality Standard

A phase is not complete just because files exist.

A phase is complete when the instructor can look at it and answer:

- What does this do?
- Where do I click or work?
- What classroom problem does this solve?
- What does it produce?
- Can I test it with a real or sample assignment?
- Does it protect the teacher-facing AI boundary?
- Does it support the long-term program operating system?

## Eight-Week Outcome

By the end of eight weeks, the project should have a visible, testable MVP that allows the instructor to:

1. open the program operating system
2. view the Electrical Trades course spine
3. select a course or unit
4. generate or prepare an assignment structure
5. embed safety, leadership, and executive-function supports
6. review the output before use
7. create Google Workspace-ready materials
8. track the assignment/module structure
9. experience the system from the teacher/end-user perspective

---

# Phase 1 / Week 1: Operating System Foundation

## Vertical Slice Goal

Create the visible foundation for the Electrical Trades program operating system.

The instructor should be able to open the repo/site structure and understand the program spine, AI boundary, and build direction.

## WBS

### 1.1 Confirm Product Boundary

- Lock teacher-facing AI agent decision
- Confirm student-facing AI is out of scope for the current build
- Confirm teacher review is required before generated materials are used

### 1.2 Define Program Spine

- Capture core courses
- Capture patched-in fundamentals
- Define cross-course lenses
- Establish operating-system language

### 1.3 Define User Roles

- Instructor
- Student
- Program administrator / facilitator
- Future employer or advisory-board viewer

### 1.4 Define MVP Success

- Create visible teacher workflow
- Produce assignment-ready materials
- Support Google Workspace delivery
- Protect the teacher-facing AI boundary

## Deliverables

- `DECISION_TEACHER_FACING_AI_AGENT.md`
- `ELECTRICAL_TRADES_PROGRAM_MAP.md`
- This eight-week WBS document
- Initial README update or project-positioning note

## End-User Test

Instructor can open the project and explain the intended operating system in plain language within five minutes.

## Acceptance Criteria

- Course spine is documented
- AI boundary is documented
- Eight-week plan exists
- Current branch contains the planning foundation

---

# Phase 2 / Week 2: Teacher Dashboard Prototype

## Vertical Slice Goal

Create a simple teacher-facing dashboard concept that becomes the main entry point for the operating system.

The instructor should be able to see where courses, assignments, safety routines, and workflow tools will live.

## WBS

### 2.1 Dashboard Information Architecture

- Define dashboard sections
- Define course navigation
- Define quick actions
- Define recent or active work area

### 2.2 Google Workspace Landing Structure

- Design Google Site or Apps Script Web App entry point
- Define links to Sheets, Docs, Slides, Forms, and assignment generator
- Define facilitator-only sections

### 2.3 Dashboard Data Model

- Define dashboard settings schema
- Define course index schema
- Define active module or active assignment schema

### 2.4 Teacher Workflow Wireframe

- Create plain-language teacher workflow
- Identify minimum clicks for building an assignment
- Identify review checkpoint before publishing

## Deliverables

- Teacher dashboard map
- Dashboard wireframe document
- Course index schema
- Google Workspace landing-page plan

## End-User Test

Instructor can look at the dashboard plan and know where to start, where courses live, and how to begin creating materials.

## Acceptance Criteria

- Dashboard has a clear teacher-first structure
- Navigation is understandable without technical explanation
- Student-facing AI is not introduced
- Dashboard supports the long-term program OS direction

---

# Phase 3 / Week 3: Assignment Compiler MVP

## Vertical Slice Goal

Create the first working version of the assignment compiler.

The instructor should be able to start with a technical task and produce a structured assignment that includes safety, leadership, executive-function, and reflection elements.

## WBS

### 3.1 Assignment Schema

Define required assignment fields:

- title
- course
- unit or topic
- technical skill
- materials/tools
- student task
- safety lens
- leadership lens
- executive-function scaffold
- documentation requirement
- reflection prompt
- rubric criteria
- teacher notes

### 3.2 Lens Libraries

Create reusable lens libraries for:

- safety awareness
- leadership practice
- executive-function scaffolds
- workplace communication
- reflection prompts

### 3.3 Template Renderer

Define how assignment data becomes:

- Google Doc assignment sheet
- rubric
- student reflection
- teacher checklist

### 3.4 Review Workflow

Add teacher review status:

- draft
- reviewed
- ready for classroom use
- archived

## Deliverables

- Assignment schema
- Lens library drafts
- Assignment template
- Rubric template
- Teacher review workflow

## End-User Test

Instructor can enter or select a task such as "conduit bend layout" and see a complete assignment structure produced for review.

## Acceptance Criteria

- Assignment output includes more than technical content
- Safety, leadership, and executive-function supports are embedded naturally
- Teacher review is required before classroom use
- Output is clear enough to use as a Google Doc draft

---

# Phase 4 / Week 4: First Course Slice - Conduit Bending

## Vertical Slice Goal

Build one course-specific vertical slice using Conduit Bending as the test course.

The instructor should be able to see how one real course becomes part of the operating system.

## WBS

### 4.1 Course Structure

- Define Conduit Bending units
- Define core skills
- Define safety routines
- Define common errors
- Define assessment moments

### 4.2 Sample Assignment Pack

Create one complete assignment pack:

- student assignment
- rubric
- safety pre-check
- leadership/team-role prompt
- executive-function planning prompt
- reflection prompt

### 4.3 Google Workspace Output Plan

Map the assignment pack to:

- Google Doc
- Google Form
- Google Sheet tracking row
- optional Google Slides mini-lesson

### 4.4 Teacher Test Script

Create a test script for the instructor to walk through the assignment from creation to review.

## Deliverables

- Conduit Bending course slice
- One complete assignment pack
- Test script
- Google Workspace mapping

## End-User Test

Instructor can review the Conduit Bending slice and determine whether the assignment is usable, teachable, and aligned with classroom reality.

## Acceptance Criteria

- One course has a visible working slice
- Assignment feels realistic for an Electrical Trades classroom
- Safety and planning are embedded without feeling forced
- Teacher can judge quality before expanding to other courses

---

# Phase 5 / Week 5: Second Course Slice - DC Theory

## Vertical Slice Goal

Build a second course-specific vertical slice using DC Theory.

This tests whether the operating system works for theory-based instruction as well as hands-on lab instruction.

## WBS

### 5.1 Course Structure

- Define DC Theory units
- Define key concepts
- Define measurement and troubleshooting skills
- Define common misconceptions
- Define formative checks

### 5.2 Sample Assignment Pack

Create one complete DC Theory assignment pack:

- student task
- guided calculation or reasoning activity
- safety or meter-use awareness check
- executive-function problem-solving scaffold
- leadership or peer-explanation prompt
- reflection prompt
- rubric

### 5.3 Compare Against Conduit Slice

Identify what stays consistent across courses and what must adapt by course type.

### 5.4 Assignment Compiler Refinement

Update assignment schema and lens libraries based on differences between lab-based and theory-based courses.

## Deliverables

- DC Theory course slice
- One complete assignment pack
- Course-type comparison notes
- Updated assignment compiler notes

## End-User Test

Instructor can use the same operating-system workflow to prepare a DC Theory assignment and compare it against the Conduit Bending workflow.

## Acceptance Criteria

- System supports theory-based instruction
- Assignment compiler is not limited to lab tasks
- Cross-course lenses still work naturally
- Differences between course types are documented

---

# Phase 6 / Week 6: Progress, Tracking, and Program View

## Vertical Slice Goal

Create a simple program tracking layer.

The instructor should be able to see courses, assignments, statuses, and next actions from a program-management perspective.

## WBS

### 6.1 Tracking Schema

Define fields for:

- course
- unit
- assignment
- status
- date created
- review status
- Google Doc link
- Google Form link
- safety lens used
- leadership lens used
- executive-function lens used

### 6.2 Google Sheet Prototype

Design the program tracker sheet structure.

### 6.3 Instructor Progress View

Define a teacher-facing view showing:

- assignments in draft
- assignments ready for use
- course coverage
- missing materials
- next build priorities

### 6.4 Quality Review Flags

Add flags for:

- needs safety check
- needs rubric
- needs teacher review
- needs Google asset link
- ready for classroom use

## Deliverables

- Program tracker schema
- Google Sheet prototype plan
- Instructor progress view document
- Quality review flag definitions

## End-User Test

Instructor can look at the tracker and understand what exists, what is missing, what is ready, and what should be built next.

## Acceptance Criteria

- Tracker supports teacher workflow
- Quality status is visible
- System avoids hidden complexity
- Tracking helps operate the program, not just store data

---

# Phase 7 / Week 7: Google Workspace Interaction Prototype

## Vertical Slice Goal

Create the first interactive Google Workspace workflow plan or Apps Script prototype.

The instructor should be able to interact with a simple workflow that prepares or routes assignment materials.

## WBS

### 7.1 Apps Script Workflow Definition

Define teacher actions:

- select course
- select assignment type
- choose lenses
- generate draft material
- review draft
- mark ready

### 7.2 Google Doc Builder Plan

Define how assignment data becomes a Google Doc.

### 7.3 Google Form Builder Plan

Define how selected checks or reflections become a Google Form.

### 7.4 Audit Log

Define audit fields:

- generated date
- generated by
- course
- assignment title
- lenses used
- review status
- student-facing AI used: no
- teacher approved: yes/no

## Deliverables

- Apps Script interaction plan
- Google Doc builder plan
- Google Form builder plan
- Audit log schema
- Optional starter Apps Script files

## End-User Test

Instructor can follow the planned workflow and understand what clicking each step would produce.

## Acceptance Criteria

- Workflow is teacher-facing
- Workflow is Google-native
- Outputs are reviewable before use
- Audit log supports trust and quality control

---

# Phase 8 / Week 8: End-to-End Teacher Experience MVP

## Vertical Slice Goal

Deliver a visible, testable end-to-end MVP from the instructor perspective.

The instructor should be able to experience the operating system from entry point to generated classroom-ready material.

## WBS

### 8.1 End-to-End Flow

The MVP should support this flow:

1. Open teacher dashboard or project entry point
2. Select course
3. Select or create assignment topic
4. Apply safety, leadership, and executive-function lenses
5. Generate assignment draft
6. Review output
7. Mark ready for classroom use
8. Record assignment in tracker

### 8.2 MVP Content Set

Minimum content set:

- Conduit Bending assignment pack
- DC Theory assignment pack
- one safety lens library
- one leadership lens library
- one executive-function lens library
- one tracker schema
- one teacher review workflow

### 8.3 End-User Testing

Run the MVP from the teacher perspective using sample tasks.

Document:

- what worked
- what was confusing
- what felt useful
- what felt unnecessary
- what should be improved before expansion

### 8.4 Next Build Decision

At the end of Week 8, decide whether the next phase should focus on:

- more courses
- deeper Apps Script automation
- Google Classroom integration
- Gemini-assisted drafting
- student progress views
- advisory-board/employer-facing materials

## Deliverables

- End-to-end MVP walkthrough
- Test notes
- MVP content set
- Next build decision memo

## End-User Test

Instructor can complete a full workflow and produce a classroom-ready assignment draft from the system.

## Acceptance Criteria

- Project is visible and interactive from the teacher perspective
- At least two course slices are represented
- Assignment compiler works across at least one lab course and one theory course
- Teacher review remains central
- AI agent remains teacher-facing only
- System clearly points toward a full Electrical Trades program operating system

---

# Master WBS Summary

## 1.0 Foundation

- decision records
- course spine
- AI boundary
- eight-week plan

## 2.0 Teacher Dashboard

- dashboard map
- navigation structure
- course index
- teacher workflow

## 3.0 Assignment Compiler

- assignment schema
- lens libraries
- templates
- review status

## 4.0 Course Slice 1

- Conduit Bending course structure
- assignment pack
- test script

## 5.0 Course Slice 2

- DC Theory course structure
- assignment pack
- course-type comparison

## 6.0 Program Tracking

- tracker schema
- quality flags
- instructor progress view

## 7.0 Google Workspace Interaction

- Apps Script workflow
- Doc builder plan
- Form builder plan
- audit log

## 8.0 End-to-End MVP

- teacher walkthrough
- test notes
- MVP content set
- next build decision

---

# Build Rule

Do not build sideways.

Each phase must produce a usable vertical slice that moves the teacher closer to seeing, testing, and operating the Electrical Trades program OS.

The operating system should grow through visible classroom usefulness, not through hidden complexity.
