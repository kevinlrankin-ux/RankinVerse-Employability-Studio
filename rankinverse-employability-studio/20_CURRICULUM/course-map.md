# course-map.md
# RankinVerse Employability Studio
# Status: Draft v0.1
# Delivery Model: Google Site front end + Google Workspace assets + per-student provisioning
# Repo Role: Standalone product repo only
# Vendor Repo Policy: All existing library repos treated as read-only vendor references; no modification, no direct integration

---

## 1. Project Definition

**RankinVerse Employability Studio** is a standalone, Google Workspace-delivered course experience designed to prepare students for workplace entry, workplace conduct, and early leadership expectations.

The course is organized for delivery through a **Google Site** with linked Google Slides, Docs, Forms, Sheets, and media assets. The student experience should feel guided and interactive, while the instructional tone varies by module:

- **Compliance / safety / conduct modules** should be dry, procedural, and source-grounded.
- **Employability / judgment / leadership modules** should remain structured, practical, and workplace-focused.

This project does **not** alter, embed into, or depend on modification of any current repo in the existing library. All existing repos are treated as vendor repos.

---

## 2. Delivery Architecture

### Student-facing delivery
- Google Site as the main front door
- One launch link or button per student
- Personalized student workspace provisioned in Google Suite
- Module pages with linked Slides, Docs, Forms, and resources

### Instructor-facing delivery
- Facilitator guidance
- Progress tracking
- Completion checkpoints
- Source registry and module status tracking

### Runtime intent
The platform should support a single launch experience:
- student enters through Site
- student is routed to assigned materials
- progress is tracked centrally
- materials remain portable and deterministic

---

## 3. Course Design Principles

1. **Workplace realism over generic inspiration**  
   The course should teach what employability looks like in real settings.

2. **Dry where policy requires it**  
   Harassment, reporting, retaliation, safety, and rights content should read like formal workforce-preparation material.

3. **Clear distinction between law, policy, and local program expectations**  
   Source-grounded content must be identifiable as such. Program-defined content should be labeled accordingly.

4. **No playful tone in compliance content**  
   Especially for harassment, retaliation, reporting, discrimination, and safety topics.

5. **Interactive structure, not entertainment structure**  
   The platform may be visually engaging, but the instructional core remains inspectable and serious.

6. **Portable product repo**  
   This repo packages the product. It does not reconfigure your existing ecosystem.

---

## 4. Source Grounding Status Model

Each module should carry one of the following tags:

- `SOURCE_GROUNDED`  
  Built directly from uploaded source material in this conversation.

- `PROGRAM_DEFINED`  
  Built from your intended workforce-preparation model and internal instructional design choices.

- `NEEDS_SOURCE_UPLOAD`  
  Important topic identified, but additional source material is needed if you want the module to be externally grounded in the same way as compliance modules.

---

## 5. Current Source Base

The following uploaded materials currently support the course:

### Anti-discrimination / harassment / workplace rights
- **Title VII of the Civil Rights Act of 1964** — legal baseline for unlawful employment discrimination and retaliation. It prohibits discrimination based on race, color, religion, sex, and national origin, and prohibits retaliation for opposing unlawful practices or participating in proceedings.
- **Sexual Harassment.docx** — training-style definitions and reporting framing for sexual harassment, hostile environment, unwelcome conduct, and employer response expectations.
- **Best Practices for Eradicating Religious Discrimination in the Workplace.docx** — complaint procedures, prevention, accommodation, and anti-retaliation framing.

### Safety / reporting / responsibilities
- **3439AT-A-GLANCE.pdf** — OSHA rights, employer responsibilities, reporting, and anti-retaliation framing.
- **Introduction to OSHA.pptx** and **Introduction to OSHA (1).pptx** — worker rights, employer duties, reporting pathways, OSHA structure, and safety expectations.
- **OSHA-10 - Emergency Action Plans and Fire Protection(1).pptx** — emergency planning and reporting structure.
- **Excavations.pptx** — hazard recognition, responsibilities, safe work expectations.
- **Safety for Electricians - 1 update.pptx** — electrical safety responsibilities and control measures.
- **Struck-By Hazards (1).pptx** — worksite hazard awareness and worker protections.
- **Chapter 10 Sign, Signals, and Barricades - QR.pptx** — work-zone controls and signaling responsibilities.
- **Chapter 13 Process Safety Management of Highly Hazardous Chemicals - QR.pptx** — procedures, training, contractors, incident investigation, emergency planning.
- **Chapter 6 Hazardous Waste Operations and Emergency Response - QR (1).pptx** — PPE, monitoring, response, training, worker protection.

### Statistical support
- **Table_E1c._Charge_Receipts_and_Resolutions_by_Type_(All_Statutes), FY 1997 - FY 2024.xlsx**  
  Uploaded and potentially useful for charts or statistics, but not yet analyzed for inclusion in this draft.

---

## 6. Course Structure Overview

The course is organized into two major strands:

### Strand A — Compliance Core
Modules in this strand are formal, procedural, and source-grounded.

### Strand B — Employability Core
Modules in this strand are practical, workplace-facing, and behavior-centered. Some are source-grounded, some are program-defined, and some need more uploaded source material if you want them externally anchored.

---

## 7. Full Module Map

### Module 01 — Worker Rights and Employer Responsibilities
**Status:** `SOURCE_GROUNDED`

**Purpose**  
Introduce the basic structure of workplace rights, employer responsibilities, employee responsibilities, reporting rights, and non-retaliation.

**Primary outcomes**
- Students identify basic worker rights.
- Students identify core employer responsibilities.
- Students understand that reporting safety concerns is protected.
- Students understand that workplaces operate under formal obligations, not just informal expectations.

**Delivery tone**  
Dry, direct, procedural.

### Module 02 — Reporting Hazards, Complaints, and Non-Retaliation
**Status:** `SOURCE_GROUNDED`

**Purpose**  
Teach that workers have the right to report hazards, violations, and prohibited conduct, and that retaliation for protected reporting is prohibited.

**Primary outcomes**
- Students know what can be reported.
- Students understand the difference between reporting and retaliation.
- Students learn that reporting systems exist for a reason.
- Students recognize that silence can increase risk.

**Delivery tone**  
Formal and compliance-oriented.

### Module 03 — Workplace Harassment and Sexual Harassment
**Status:** `SOURCE_GROUNDED`

**Purpose**  
Provide a dry, policy-style module on prohibited conduct, reporting expectations, employer response, and anti-retaliation.

**Primary outcomes**
- Students identify harassment and sexual harassment as prohibited workplace conduct.
- Students distinguish unwelcome conduct from acceptable professional conduct.
- Students understand reporting pathways.
- Students understand retaliation protections.

**Delivery tone**  
Dry. Neutral. Compliance-style. No humor. No ambiguity.

**Required content characteristics**
- clear definitions
- prohibited conduct examples
- reporting procedures
- non-retaliation language
- expected professional conduct
- workplace-specific scenarios

### Module 04 — Emergency Action, Fire Protection, and Prepared Response
**Status:** `SOURCE_GROUNDED`

**Purpose**  
Introduce emergency procedures, evacuation expectations, planning, and response basics.

**Primary outcomes**
- Students understand why emergency plans exist.
- Students identify expected employee actions in emergencies.
- Students recognize that safety procedures must be followed consistently.

**Delivery tone**  
Procedural and instructional.

### Module 05 — Worksite Awareness, Hazards, and Safe Conduct
**Status:** `SOURCE_GROUNDED`

**Purpose**  
Teach that safe behavior, hazard recognition, signs, barricades, equipment awareness, and procedural compliance are part of employability.

**Primary outcomes**
- Students identify common hazard-control expectations.
- Students understand that safety signs and controls are not optional.
- Students connect professional conduct to hazard reduction.
- Students recognize the link between attentiveness and workplace safety.

**Delivery tone**  
Direct, practical, worksite-centered.

### Module 06 — Attendance, Reliability, and Work Readiness
**Status:** `NEEDS_SOURCE_UPLOAD`

**Purpose**  
Teach that attendance, punctuality, readiness, and consistent participation directly affect trust, workflow, safety, and employability.

### Module 07 — Conflict in the Workplace
**Status:** `PROGRAM_DEFINED`

**Purpose**  
Teach students how to identify, de-escalate, and respond professionally to conflict with coworkers, supervisors, and team members.

### Module 08 — Teamwork and Shared Responsibility
**Status:** `PROGRAM_DEFINED`

**Purpose**  
Teach that workplace success depends on contribution, handoffs, dependability, situational awareness, and respect for shared work.

### Module 09 — Cost of Labor, Time, and Materials
**Status:** `NEEDS_SOURCE_UPLOAD`

**Purpose**  
Teach that labor time, wasted motion, errors, damaged materials, and rework all carry real cost.

### Module 10 — Professional Conduct and Workplace Standards
**Status:** `PROGRAM_DEFINED`

**Purpose**  
Teach students how expectations around behavior, language, presentation, boundaries, and judgment affect employability and workplace trust.

### Module 11 — Leadership and Initiative
**Status:** `PROGRAM_DEFINED`

**Purpose**  
Teach leadership as responsibility, steadiness, initiative, and problem response rather than title alone.

### Module 12 — Digital Citizenship and Reputation
**Status:** `PROGRAM_DEFINED`

**Purpose**  
Teach that online behavior, communication habits, and digital traces affect employability and trust.

### Module 13 — Career Readiness and Interview Practice
**Status:** `PROGRAM_DEFINED`

**Purpose**  
Prepare students to present themselves effectively, explain workplace behaviors, and demonstrate readiness for hiring conversations.

---

## 8. Recommended Phase 1 Launch Set

For a first release, prioritize the modules with strongest source grounding:

1. Worker Rights and Employer Responsibilities  
2. Reporting Hazards, Complaints, and Non-Retaliation  
3. Workplace Harassment and Sexual Harassment  
4. Emergency Action, Fire Protection, and Prepared Response  
5. Worksite Awareness, Hazards, and Safe Conduct

---

## 9. Recommended Phase 2 Build Set

Once Phase 1 is stable, add:

6. Attendance, Reliability, and Work Readiness  
7. Conflict in the Workplace  
8. Teamwork and Shared Responsibility  
9. Cost of Labor, Time, and Materials  
10. Professional Conduct and Workplace Standards

---

## 10. Recommended Phase 3 Build Set

Then add:

11. Leadership and Initiative  
12. Digital Citizenship and Reputation  
13. Career Readiness and Interview Practice

---

## 11. Google Site Structure Recommendation

### Main navigation
- Home
- Start Here
- Modules
- Scenarios
- Progress
- Resources
- RankinVerse Guides
- Facilitator Portal

---

## 12. Visual / Narrative Layer

RankinVerse assets should support engagement and thematic consistency without weakening the seriousness of compliance content.

### Use RankinVerse for:
- visual identity
- module icons
- trait guides
- transition pages
- student motivation and continuity

### Do not use RankinVerse to:
- joke about harassment
- stylize retaliation content
- soften reporting requirements
- make safety or legal content ambiguous

---

## 13. Content Tone Rules by Module Type

### Compliance modules
- dry
- neutral
- procedural
- direct
- plain language
- no irony
- no character banter inside core instructional text

### Employability modules
- practical
- structured
- concrete
- scenario-based
- still serious
- may use limited narrative framing around the edges

---

## 14. Pending Source Requests

To make the full course equally source-grounded, the most valuable additional uploads would be:

1. attendance or punctuality policy materials
2. workforce readiness or employability standards documents
3. labor cost / estimating / productivity training materials
4. school or district conduct expectations
5. employer handbook or apprenticeship onboarding material
6. business case material on rework, waste, and manpower cost

---

## 15. Next Build Artifacts Recommended

Build these next:

1. `module-index.json`
2. `site-map.md`
3. `student-launch-flow.md`
4. `google-assets.manifest.json`
5. `module-03-harassment-page.md`
6. `module-01-rights-and-responsibilities-page.md`

---

## 16. Draft Positioning Statement

**RankinVerse Employability Studio** is a standalone Google Workspace-based learning platform that prepares students for employment by teaching workplace rights, safety, conduct, reporting, reliability, accountability, and early leadership through structured modules, interactive scenarios, and source-grounded instructional content.
