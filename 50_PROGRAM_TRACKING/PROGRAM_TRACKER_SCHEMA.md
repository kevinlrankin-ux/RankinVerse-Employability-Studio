# Program Tracker Schema

## Purpose

The Program Tracker gives the instructor a simple way to see what exists, what is ready, what needs review, and what should be built next.

The tracker should support the Electrical Trades Program OS as a working program cockpit, not just a spreadsheet of files.

## Primary User

Instructor.

## Tracker Grain

One row should represent one assignment, module, lesson pack, or workflow artifact.

## Recommended Columns

| Column | Purpose |
|---|---|
| Item ID | Unique identifier for the assignment or artifact. |
| Item Type | Assignment, module, rubric, safety check, form, slide deck, tracker, policy note, recruiting item, advisory item. |
| Course | Course connected to the item. |
| Unit or Topic | Where the item fits inside the course. |
| Title | Plain-language item title. |
| Technical Skill | Primary skill, concept, or practice. |
| Safety Lens | Safety habit or check included. |
| Leadership Lens | Leadership or workplace behavior included. |
| Executive-Function Lens | Planning, sequencing, organization, or self-check support included. |
| Documentation Habit | What students record, label, explain, calculate, or submit. |
| Google Doc Link | Link to assignment or teacher document. |
| Google Form Link | Link to check, reflection, or assessment form. |
| Google Slides Link | Link to mini-lesson or support deck. |
| Google Sheet Link | Link to tracker, rubric, or scoring sheet. |
| Review Status | Draft, needs review, reviewed, ready, used, needs revision, archived. |
| Teacher Approved | Yes or no. |
| Governance Status | Clear, needs review, restricted, not for public repo. |
| Source Status | Source-grounded, program-defined, needs source upload. |
| Last Updated | Date of last update. |
| Next Action | What should happen next. |

## Review Status Values

- draft
- needs review
- reviewed
- ready for classroom use
- used in class
- needs revision
- archived

## Governance Status Values

- clear
- needs review
- restricted
- not for public repo

## Source Status Values

- source-grounded
- program-defined
- needs source upload

## Quality Flags

Useful flags for dashboard views:

- Missing safety lens
- Missing leadership lens
- Missing executive-function scaffold
- Missing rubric
- Missing teacher review
- Missing Google asset link
- Ready for classroom use
- Needs revision

## End-User Test

The instructor should be able to open the tracker and answer:

- What exists?
- What is ready?
- What still needs review?
- What course is underbuilt?
- Which assignments are missing safety, leadership, or executive-function supports?
- What should I build next?

## MVP Tracker Views

Recommended first views:

1. All Items
2. Draft Assignments
3. Ready for Classroom Use
4. Needs Review
5. By Course
6. Missing Safety Lens
7. Missing Leadership Lens
8. Missing Executive-Function Lens
9. Governance Needs Review
10. Next Build Actions
