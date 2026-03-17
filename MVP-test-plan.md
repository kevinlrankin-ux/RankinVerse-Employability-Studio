# MVP-test-plan.md
# RankinVerse Employability Studio
# Status: Draft v0.1

---

## 1. Purpose

This document defines the MVP verification sequence for the RankinVerse Employability Studio runtime and Google Site delivery model.

The purpose of this test plan is to verify that:

- Google assets are configured correctly
- Apps Script setup runs successfully
- new student provisioning works
- returning student routing works
- module completion updates progress correctly
- Phase 1 modules can be launched in sequence

---

## 2. MVP test scope

### In scope
- Apps Script setup
- roster sheet validation
- progress sheet validation
- settings sheet validation
- workspace dependency checks
- new student launch flow
- returning student flow
- mark-complete flow
- Phase 1 module routing

### Out of scope
- full Phase 2 and Phase 3 rollout
- advanced analytics
- Google Classroom integration
- certificate issuance
- branching scenario engine beyond simple routing

---

## 3. Preconditions

Before testing, confirm:

- all placeholder IDs have been replaced
- Google Site is published or publishable
- Apps Script web app is deployed
- root Drive folders exist
- template Docs and Slides exist
- roster, progress, and settings sheets exist
- user accounts are within the intended Google Workspace access model

---

## 4. Setup tests

### Test 4.1 - setupSheetsOnly()
Expected:
- roster schema ensured
- progress schema ensured
- settings schema ensured

Pass criteria:
- all three return ok = true

### Test 4.2 - setupSettingsOnly()
Expected:
- default settings are written
- runtime settings can be loaded

Pass criteria:
- settings exist for phase enablement and default entry page

### Test 4.3 - verifyDependenciesOnly()
Expected:
- students root folder accessible
- templates folder accessible
- workbook template accessible
- learning deck template accessible
- scenario workbook template accessible

Pass criteria:
- all dependency checks return true

### Test 4.4 - setupAll()
Expected:
- consolidated readiness result returns success

Pass criteria:
- final setup object returns ok = true

---

## 5. New student provisioning tests

### Test 5.1 - start flow for a new student
Action:
- open `WEB_APP_URL?action=start` using a student account not yet in the roster

Expected:
- new roster row created
- new progress row created
- new student folder created
- workbook copied
- learning deck copied
- scenario workbook copied
- student redirected to first enabled module

Pass criteria:
- all records and copied files exist
- redirect lands on M01

### Test 5.2 - folder naming
Expected:
- folder name matches student display name pattern

Pass criteria:
- folder appears in Students root folder with expected name

---

## 6. Returning student tests

### Test 6.1 - continue flow for existing student
Action:
- open `WEB_APP_URL?action=continue`

Expected:
- existing roster row reused
- no duplicate folder created
- progress record loaded
- student redirected to first incomplete enabled module

Pass criteria:
- no duplicate assets created
- correct next module is returned

---

## 7. Progress tracking tests

### Test 7.1 - mark M01 complete
Action:
- open `WEB_APP_URL?action=mark_complete&module_id=M01&student_email=student@example.org`

Expected:
- `M01_status = complete`
- `M01_completed_at` has timestamp
- `current_module = M02`

Pass criteria:
- progress sheet updates correctly

### Test 7.2 - mark multiple modules complete in order
Action:
- mark M02, M03, M04, M05 complete sequentially

Expected:
- each status becomes complete
- each completion timestamp is recorded
- current module advances appropriately

Pass criteria:
- all updates match expected order

---

## 8. Phase enablement tests

### Test 8.1 - default phase visibility
Expected:
- Phase 1 enabled
- Phase 2 disabled
- Phase 3 disabled

Pass criteria:
- only M01-M05 are routed as active modules

### Test 8.2 - enable Phase 2 in settings
Action:
- set `phase_2_enabled = true`

Expected:
- M06-M10 become eligible after Phase 1 modules

Pass criteria:
- next module resolution includes Phase 2 modules

---

## 9. Site routing tests

### Test 9.1 - Start My Studio button
Expected:
- Start button launches Apps Script start flow

### Test 9.2 - Continue My Studio button
Expected:
- Continue button launches Apps Script continue flow

### Test 9.3 - direct module route
Action:
- open `WEB_APP_URL?action=open_module&module_id=M03`

Expected:
- module page URL resolves correctly if enabled

Pass criteria:
- redirect matches configured Site path

---

## 10. Compliance content checks

For M01-M05, verify that pages are:

- dry
- direct
- low-decoration
- not playful

For M03 specifically, verify:
- no humor
- no banter
- no narrative softening of policy language

Pass criteria:
- module presentation matches compliance intent

---

## 11. Failure tests

### Test 11.1 - invalid module ID
Action:
- open `WEB_APP_URL?action=open_module&module_id=BAD`

Expected:
- structured error result returned

### Test 11.2 - missing email for mark_complete
Action:
- open `WEB_APP_URL?action=mark_complete&module_id=M01`

Expected:
- structured error result returned

### Test 11.3 - missing template ID
Action:
- temporarily break one template ID and run dependency check

Expected:
- dependency validation fails cleanly

---

## 12. Final MVP go-live criteria

The MVP is ready for Phase 1 use when:

- setupAll() returns success
- one new-student test passes
- one returning-student test passes
- one full Phase 1 progress cycle passes
- Google Site buttons route correctly
- M01-M05 pages are present and usable
- placeholder IDs are fully replaced

---

## 13. Test evidence to retain

Capture and retain:

- setup output JSON
- screenshot of roster row
- screenshot of progress row
- screenshot of student folder contents
- screenshot of successful module redirect
- notes on any failures and fixes
