# apps-script-architecture.md
# RankinVerse Employability Studio
# Status: Draft v0.1
# Purpose: Define the Apps Script architecture for student provisioning, launch routing, and progress tracking

---

## 1. Architecture Purpose

The Apps Script layer is the runtime engine behind the Google Site launch flow.

Its responsibilities are to:
- receive launch requests from the Google Site
- identify whether the user is a new or returning student
- provision student-specific Google Workspace assets
- route the student to the correct next location
- update central progress records
- expose a small, inspectable set of deterministic functions

---

## 2. Runtime Role

### Front end
- Google Site

### Execution layer
- Google Apps Script Web App

### Data layer
- Google Sheets
- Google Drive
- Google Forms

### Content layer
- Google Docs
- Google Slides
- Google Site pages

---

## 3. Recommended Project File Structure

```text
40_APPS_SCRIPT/
  Code.gs
  appsscript.json
  config/
    constants.gs
    module-config.gs
    sheet-schema.gs
  launch/
    web-entry.gs
    route-student.gs
    launch-service.gs
  provisioning/
    provision-student.gs
    copy-templates.gs
    folder-service.gs
  progress/
    progress-service.gs
    completion-service.gs
    module-status-service.gs
  roster/
    roster-service.gs
  site/
    site-link-service.gs
  utils/
    result.gs
    validators.gs
    logging.gs
    ids.gs
```
