# Project Charter

## Project Name

RankinVerse Employability Studio / Electrical Trades Program Operating System

## Plain-Language Summary

This project is building a teacher-facing operating system for an Electrical Trades program.

The goal is not simply to automate small classroom tasks.

The goal is to help the instructor design, organize, deliver, review, and improve a full Electrical Trades program with consistency, safety, leadership, executive-function support, and workplace readiness built into the normal rhythm of instruction.

## What We Are Building

We are building a Google-native instructional operating layer that helps the instructor manage:

- curriculum structure
- course materials
- assignments
- rubrics
- safety routines
- leadership prompts
- executive-function scaffolds
- progress structures
- Google Workspace assets
- program documentation
- advisory and employer-facing materials
- recruiting and career-readiness pathways

The system should eventually feel like a complete program cockpit for the instructor.

## Who It Serves First

The first user is the instructor.

The AI agent is teacher-facing only for the current build.

Students may eventually interact with materials produced by the system, but the AI agent itself is not a student-facing chatbot, tutor, companion, or automated decision-maker in this phase.

## Why Teacher-Facing First

Teacher-facing first keeps the project safer, cleaner, and easier to review.

This approach:

- protects student information
- preserves teacher judgment
- avoids unreviewed student-facing AI interaction
- supports district-reviewable workflows
- makes the system useful before it becomes complex
- keeps the instructor in control of classroom materials

## Core Courses

The operating system is being built around the actual Electrical Trades course spine:

1. DC Theory
2. Conduit Bending
3. Wire Applications
4. Code and Practices
5. OSHA-10hr
6. Print Reading
7. Studio 5000 / Emulate 3D

## Patched-In Fundamentals

The system should also weave the following fundamentals throughout the program:

1. Leadership
2. Motors
3. AC Theory

These fundamentals should not only live as separate topics. They should appear inside assignments, labs, reflections, planning routines, troubleshooting work, and career-readiness structures.

## Instructional Grammar

Every assignment should be able to carry more than technical content.

The preferred assignment pattern is:

Technical Skill
+ Safety Awareness
+ Leadership Practice
+ Executive-Function Support
+ Documentation Habit
+ Reflection
= Workforce-Forming Assignment

This is the instructional grammar of the project.

The district or institution may choose the platform, but this project defines the instructional grammar.

## AI Role

AI is a support layer, not the operating system itself.

The AI agent may help the teacher:

- draft assignments
- generate rubrics
- create safety checks
- embed leadership prompts
- embed executive-function supports
- prepare reflection prompts
- organize modules
- prepare Google Docs, Slides, Forms, and Sheets structures
- summarize non-sensitive source material
- support teacher review workflows

The teacher remains the decision-maker.

Generated materials are drafts until reviewed.

## What This Project Is Not

This project is not:

- a student-facing AI chatbot
- an automated grading system
- a replacement for teacher judgment
- a way to bypass district technology rules
- a public storage location for student data
- a dumping ground for unreviewed documents
- a generic LMS clone

## Governance Principle

The project adopts the following language as part of its identity:

> Governance is not the brake.
> Governance is the frame that allows the work to grow without losing trust.

Governance should be caked into the system from the beginning.

It should appear in:

- teacher-facing AI boundaries
- data minimization
- FERPA-aware design
- audit logs
- review statuses
- public repo hygiene
- access and sharing rules
- approved-tool registries
- vendor repo extraction rules
- future student-facing AI gates

## Repository Boundary

This repository is the product repo.

It should contain the clean operating-system layer:

- product decisions
- curriculum maps
- assignment compiler structures
- governance documents
- teacher workflows
- Google Workspace plans
- Apps Script prototypes
- templates and schemas

Existing memory or ingestion repositories are treated as vendor repos.

Useful patterns may be extracted, but the product repo should not become tangled with raw ingestion artifacts or unrelated repo structures.

## Source and Memory Strategy

The project may later use additional repos for:

- document ingestion
- source classification
- knowledge registry work
- advisory committee records
- requisitions
- recruiting materials
- policies
- course-material indexing

The product repo should consume clean, reviewed, non-sensitive outputs from those systems.

It should not store real student data, credentials, private records, grades, behavior notes, IEP/504 information, protected records, or district-sensitive material.

## Eight-Week Build Commitment

The current build will proceed through eight vertical slices.

Each slice should produce something visible, testable, and useful from the instructor perspective.

The goal is that within eight weeks the instructor can:

1. open the system
2. see the program structure
3. select a course or unit
4. generate or prepare an assignment structure
5. embed safety, leadership, and executive-function supports
6. review the output before use
7. create Google Workspace-ready materials
8. track assignment or module status
9. experience the system from the teacher/end-user perspective

## Definition of a Good Vertical Slice

A phase is only successful if the instructor can answer:

- What does this do?
- Where do I click or work?
- What classroom problem does this solve?
- What does it produce?
- Can I test it with a real or sample assignment?
- Does it protect the teacher-facing AI boundary?
- Does it support the long-term program operating system?

## Near-Term MVP

The first usable MVP should include:

- teacher dashboard map
- course spine
- assignment compiler schema
- safety lens library
- leadership lens library
- executive-function lens library
- Conduit Bending course slice
- DC Theory course slice
- assignment review workflow
- program tracker schema
- audit log schema
- governance-lite layer

## Long-Term Vision

The long game is a complete Electrical Trades program operating system.

The system should eventually help operate the program across curriculum, labs, safety, employability, leadership, executive-function development, documentation, program memory, advisory materials, recruiting, and career pathways.

It should make the classroom easier to run without making the work smaller.

It should help the instructor hold the whole program in view.

## Working Rule

Do not build sideways.

Build visible vertical slices that move the instructor closer to seeing, testing, and operating the Electrical Trades Program OS.

The project should grow through classroom usefulness, not hidden complexity.
