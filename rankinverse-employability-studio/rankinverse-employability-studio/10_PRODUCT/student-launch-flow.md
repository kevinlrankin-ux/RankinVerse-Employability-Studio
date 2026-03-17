# student-launch-flow.md
# RankinVerse Employability Studio
# Status: Draft v0.1
# Purpose: Define the per-student launch and provisioning flow from the Google Site

---

# 1. Launch System Overview

RankinVerse Employability Studio is delivered through a **Google Site front end** that launches a **per-student Google Workspace learning environment**.

The launch flow must accomplish three goals:

1. Provide a **single clear entry point for students**
2. Provision or connect the student to their **personal workspace**
3. Track progress in a **central instructor progress sheet**

---

# 2. Primary Launch Entry

### Student Entry Location
Google Site page: `Start Here`

Primary button: `Start My Studio`

Button behavior: `Google Site → Apps Script Web App → Student Workspace Provisioning`

---

# 3. First-Time Student Launch Flow

When a student clicks **Start My Studio** for the first time:

### Step 1 — Authentication
Student is authenticated through Google Workspace.

### Step 2 — Student Lookup
Apps Script checks the **Master Roster Sheet** named `EmployabilityStudio_Roster`.

If student exists: load existing workspace.  
If student does not exist: create new student record.

### Step 3 — Workspace Provisioning
- create student folder
- copy template workbook
- copy learning deck
- copy scenario workbook
- create progress row
- route to first enabled module

---

# 4. Return Student Flow

If the student already exists:
- identify student in roster
- retrieve workspace folder
- retrieve progress row
- return current or next module link

---

# 5. Module Launch Flow

Each module page includes `Start Module`, which opens corresponding module assets.

Completion can be triggered by:
- Google Form submission
- Apps Script event handler
- manual instructor fallback

---

# 6. Phase Control

By default the system enables **Phase 1 modules only**:
- M01
- M02
- M03
- M04
- M05

Phase 2 and Phase 3 can be enabled later via settings.
