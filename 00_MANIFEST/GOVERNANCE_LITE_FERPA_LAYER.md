# Governance Lite FERPA Layer

## Purpose

This document adds a governance-lite layer to the Electrical Trades Program Operating System.

The goal is to make privacy, student-data protection, teacher review, and FERPA-aware design visible in the project decisions from the beginning.

Governance should not be added later as a cleanup task.

Governance should be caked into the way the system is designed, built, tested, and expanded.

## Plain-Language Position

The project is not just trying to automate classroom work.

It is trying to build a responsible teacher-facing operating system for an Electrical Trades program.

That means the system should help the instructor work more effectively while protecting student information, preserving teacher judgment, and respecting school and district technology rules.

## Scope

This governance-lite layer applies to:

- teacher-facing AI agent decisions
- assignment generation
- Google Workspace asset creation
- progress tracking
- student work artifacts
- course and module documentation
- future integrations
- future student-facing feature discussions

## Important Limit

This document is not legal advice.

It is a project governance artifact designed to keep decisions aligned with FERPA-aware practice, district review, and responsible instructional design.

District policy, approved vendor agreements, and official legal guidance control if they differ from this document.

## Primary FERPA Anchors

This governance layer is based on the following FERPA concepts:

- FERPA gives parents certain rights related to education records, including access, amendment, and some control over disclosure of personally identifiable information from education records. Rights transfer to an eligible student when the student turns 18 or enters a postsecondary institution.
- Education records are records directly related to a student and maintained by an educational agency, institution, or party acting for the agency or institution.
- Personally identifiable information includes direct identifiers, indirect identifiers, and combinations of information that could reasonably identify a student.
- Disclosure includes permitting access to or releasing, transferring, or communicating personally identifiable information from education records by oral, written, electronic, or other means.
- School officials, including teachers, may access education records when the agency or institution has determined they have legitimate educational interests.
- Contractors or other outside parties may be treated as school officials only under defined conditions, including institutional-service purpose, direct control by the agency or institution, and limits on use and redisclosure.
- Reasonable methods should be used so school officials access only the education records for which they have legitimate educational interests.
- Studies or research-style disclosures require tighter conditions, including purpose, scope, duration, limited identification, and destruction of information when no longer needed.

Reference sources:

- U.S. Department of Education, Protecting Student Privacy, What is FERPA? https://studentprivacy.ed.gov/faq/what-ferpa
- U.S. Department of Education, Protecting Student Privacy, What is an education record? https://studentprivacy.ed.gov/faq/what-education-record
- eCFR, 34 CFR Part 99, Family Educational Rights and Privacy https://www.ecfr.gov/current/title-34/subtitle-A/part-99
- eCFR, 34 CFR 99.31, prior consent exceptions and school official conditions https://www.ecfr.gov/current/title-34/subtitle-A/part-99/subpart-D/section-99.31

---

# Governance-Lite Comparative Table

| Governance Area | FERPA-Relevant Concern | Project Decision Already Made | Current Control | Future Work Control | Status |
|---|---|---|---|---|---|
| AI agent audience | Student-facing AI could create uncontrolled collection, disclosure, or automated interaction involving student information. | The AI agent is teacher-facing only for the current build. | Decision record locks the agent as an instructor support tool, not a student chatbot or tutor. | Any future learner-facing AI requires a separate decision record and explicit review. | Locked |
| Teacher judgment | Automated tools can appear to make instructional or evaluative decisions without human review. | The teacher remains the decision-maker. | Generated materials are drafts for teacher review. | Add review statuses such as draft, reviewed, ready for classroom use, and archived. | Active |
| Student PII use | PII includes direct and indirect identifiers and combinations that could identify a student. | The first build avoids sending student PII to AI systems. | Assignment generation is based on course, topic, skill, and template data rather than individual student records. | Add audit field: `student_pii_sent_to_ai: false`. | Active |
| Education records | Education records are directly related to students and maintained by the school or party acting for it. | Program tracker and progress structures must be treated as sensitive instructional records. | Progress tracking is instructor-facing and stored in controlled Google Workspace structures. | Add access-control review before live student data is used. | Planned |
| Disclosure | Disclosure includes permitting access to or electronic communication of PII from education records. | The system should not disclose student records to external tools by default. | Teacher-facing draft generation uses non-student-specific instructional inputs. | Any integration that touches student records requires a vendor/tool review step. | Active |
| School official / legitimate interest | Teachers may access records when they have a legitimate educational interest, according to school or district rules. | Instructor access is tied to operating the program and supporting instruction. | Teacher dashboard is designed around instructor workflow, not broad public access. | Define role-based views for instructor, student, facilitator, and advisory/employer-facing audiences. | Planned |
| Outside tools and vendors | Contractors or outside tools may be treated as school officials only under defined conditions and controls. | Gemini or any AI tool should be treated as a service layer, not the core authority of the system. | The OS is built around schemas, templates, review workflows, and Google Workspace assets. | Add approved-tool registry with tool name, approved use, data allowed, data prohibited, and review date. | Planned |
| Data minimization | FERPA-aware design should limit unnecessary student information. | The assignment compiler uses the least amount of information needed to generate instructional materials. | Technical skill, course, unit, safety lens, leadership lens, and executive-function lens are enough for generation. | Add data classification labels: no student data, limited classroom data, education record, restricted. | Planned |
| Google Workspace boundary | Workspace tools can contain education records depending on what is stored in them. | Google Workspace is the operating environment, but content must still be governed. | Sheets, Docs, Forms, and Drive assets are teacher-controlled and reviewed before use. | Add folder and sharing rules for templates, teacher drafts, student materials, and progress records. | Planned |
| Assignment generation | Generated assignments should not require student-specific data. | Assignments are generated from curriculum structures and teacher-selected lenses. | The Assignment Compiler MVP is course/topic based. | Add warning if prompt includes student names, grades, behavior notes, IEP/504 details, discipline, or other sensitive records. | Planned |
| Rubrics and grading | Grades and assessment data can become education records. | Rubrics may be generated, but grading remains teacher-controlled. | Generated rubrics are templates, not final automated evaluations. | Add rule: no automated grading without separate governance review. | Active |
| Student work artifacts | Student submissions, reflections, forms, and assessments can become education records. | Student work should live inside approved school-controlled systems. | First build focuses on teacher-generated materials and not student-facing AI interaction. | Add student-work storage map and retention guidance. | Planned |
| Audit log | Good governance requires traceability of generated materials and decisions. | Add an audit log to record what was generated and reviewed. | WBS includes audit log planning. | Fields should include course, assignment, lenses used, generated date, review status, teacher approved, and AI/PII flags. | Planned |
| Access control | FERPA calls for reasonable methods to ensure access only where legitimate educational interest exists. | The teacher dashboard and program tracker should not be broadly open. | Access is intended for instructor/facilitator use. | Add sharing matrix for teacher-only, student-viewable, facilitator-only, and public/advisory-safe materials. | Planned |
| Directory information | Directory information has special rules and still depends on school designation and opt-out procedures. | The system will not rely on directory information assumptions. | Student names/emails are not needed for assignment generation. | If roster/progress features use names or emails, mark them as controlled data and follow district rules. | Planned |
| Source-grounded compliance content | Safety and workplace-rights content should remain inspectable and not distorted by AI. | Compliance modules stay dry, procedural, and source-grounded. | Existing course map separates source-grounded modules from program-defined modules. | Add source registry field to every generated compliance/safety asset. | Active |
| Future student-facing features | Future AI features could increase privacy and governance risk. | Future learner-facing AI is out of scope unless explicitly reopened. | Teacher-facing boundary is locked. | Require decision record, risk review, district-policy check, tool approval, data-flow map, and pilot test before reconsideration. | Locked |
| Employer/advisory materials | Employer-facing or advisory-board materials should not reveal individual student records. | Advisory/employer-facing views should be program-level unless separately approved. | Current OS direction includes future advisory materials but not student-specific sharing. | Add redaction rule and aggregate-only reporting pattern. | Planned |
| Program analytics | Analytics can become sensitive when connected to identifiable students. | Early analytics should focus on program coverage and assignment readiness, not student profiling. | Tracker initially supports assignment status and course coverage. | Any student-level analytics requires separate governance and access review. | Planned |
| Retention and deletion | Student information should not be kept longer than necessary for the purpose. | The project will distinguish drafts, templates, live materials, and records. | No retention system is finalized yet. | Add retention notes for drafts, templates, student work, progress records, and audit logs. | Planned |
| Public repo hygiene | A public GitHub repo must not contain student data, private records, credentials, or district-sensitive information. | The repo stores product architecture, templates, and non-student-specific materials only. | Current content is program design and template-oriented. | Add `.gitignore`, secrets guidance, sample-data rule, and no-real-student-data rule. | Active |

---

# Governance Caked Into Project Decisions

## Decision 1: Teacher-Facing Agent

Governance meaning:

The system supports the teacher without opening a direct AI channel to students.

Why it matters:

This reduces student-data exposure, preserves teacher judgment, and keeps the first build easier to review.

## Decision 2: Assignment Compiler Instead of Student Chatbot

Governance meaning:

The main AI-supported workflow generates teacher-reviewed instructional materials instead of interacting with students directly.

Why it matters:

The system can improve assignment quality without collecting student conversations or creating new student records through AI chat.

## Decision 3: Google-Native Operating Layer

Governance meaning:

The project works through school-manageable Google Workspace assets instead of scattering content across disconnected tools.

Why it matters:

Centralized school-controlled assets are easier to review, permission, audit, and maintain.

## Decision 4: Teacher Review Before Classroom Use

Governance meaning:

Generated materials do not go directly to students without instructor review.

Why it matters:

This protects instructional quality, catches errors, and prevents AI output from becoming unreviewed classroom policy or assessment material.

## Decision 5: No Real Student Data in the Public Repo

Governance meaning:

The repository stores architecture, templates, schemas, and sample structures only.

Why it matters:

A public repo should never become a container for identifiable student information, student work, grades, behavior records, private classroom data, credentials, or protected records.

## Decision 6: Vertical Slice Build Plan

Governance meaning:

Each phase must produce something visible and testable, including quality and review checkpoints.

Why it matters:

Governance stays connected to actual workflows instead of becoming a separate policy document nobody uses.

---

# Minimum Governance Controls for the MVP

Before the Week 8 MVP is considered ready, the project should include:

1. Teacher-facing AI boundary document
2. Governance-lite FERPA layer
3. Assignment schema with data-minimization assumptions
4. Teacher review status field
5. Audit log schema
6. Public repo hygiene rule
7. Approved-tool registry placeholder
8. No-real-student-data rule
9. Sharing matrix draft
10. Future learner-facing AI decision gate

---

# Future Governance Artifacts

Recommended next governance artifacts:

- `APPROVED_TOOL_REGISTRY.md`
- `DATA_CLASSIFICATION_MATRIX.md`
- `SHARING_AND_ACCESS_MATRIX.md`
- `PUBLIC_REPO_HYGIENE_RULES.md`
- `AUDIT_LOG_SCHEMA.md`
- `FUTURE_STUDENT_FACING_AI_REVIEW_GATE.md`

---

# Working Principle

Governance is not the brake on the project.

Governance is the frame that allows the project to grow without losing trust.

The system should be useful, inspectable, teacher-controlled, student-protective, and ready for future review.
