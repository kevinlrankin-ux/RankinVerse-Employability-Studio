# README-deployment.md
# RankinVerse Employability Studio
# Status: Draft v0.1
# Purpose: Deployment guide for Google Site + Google Apps Script MVP

---

## 1. What this project is

**RankinVerse Employability Studio** is a standalone Google Workspace-delivered course platform.

It uses:
- **Google Site** as the student-facing front end
- **Google Apps Script** as the launch and provisioning runtime
- **Google Sheets** for roster, progress, and settings
- **Google Drive** for student folders and templates
- **Google Docs / Slides** for student learning assets

---

## 2. MVP backend files

```text
Code.gs
constants.gs
module-config.gs
sheet-schema.gs
settings-service.gs
roster-service.gs
progress-service.gs
workspace-service.gs
setup-service.gs
```

---

## 3. Google assets you must create before deployment

### A. Google Site
Create one Google Site for the student-facing experience.

### B. Google Sheets
Create three spreadsheets or one spreadsheet with three tabs.

Required sheets:
- `EmployabilityStudio_Roster`
- `EmployabilityStudio_Progress`
- `EmployabilityStudio_Settings`

### C. Google Drive folders
Create:
- root project folder
- students folder
- templates folder
- media folder

Suggested structure:

```text
RankinVerse Employability Studio/
  Students/
  Templates/
  Media/
```

---

## 4. IDs and values you must replace

Before deployment, replace all placeholders in your Apps Script files.

### In `constants.gs`
Replace:
- `REPLACE_WITH_GOOGLE_SITE_BASE_URL`
- `REPLACE_WITH_ROOT_FOLDER_ID`
- `REPLACE_WITH_STUDENTS_FOLDER_ID`
- `REPLACE_WITH_TEMPLATES_FOLDER_ID`
- `REPLACE_WITH_MEDIA_FOLDER_ID`
- `REPLACE_WITH_STUDENT_WORKBOOK_DOC_ID`
- `REPLACE_WITH_LEARNING_DECK_SLIDES_ID`
- `REPLACE_WITH_SCENARIO_WORKBOOK_DOC_ID`
- `REPLACE_WITH_ROSTER_SPREADSHEET_ID`
- `REPLACE_WITH_PROGRESS_SPREADSHEET_ID`
- `REPLACE_WITH_SETTINGS_SPREADSHEET_ID`

---

## 5. First-run setup steps

After IDs are replaced, run these functions from Apps Script.

### Recommended order
```javascript
setupSheetsOnly()
setupSettingsOnly()
verifyDependenciesOnly()
setupAll()
```

### Simplest option
```javascript
setupAll()
```

---

## 6. Deploying the Apps Script web app

Deploy as Web App with:
- Execute as: **User deploying**
- Who has access: **Domain** or intended Workspace audience

Copy the Web App URL and wire it to Site buttons.

---

## 7. Wiring the Google Site buttons

### Start button
`WEB_APP_URL?action=start`

### Continue button
`WEB_APP_URL?action=continue`

### Open specific module
`WEB_APP_URL?action=open_module&module_id=M03`

---

## 8. Recommended MVP launch scope

Launch only Phase 1 first:
- M01
- M02
- M03
- M04
- M05

---

## 9. Deployment summary

```text
Create Google assets
↓
Replace placeholder IDs
↓
Create Apps Script project
↓
Paste backend files
↓
Run setupAll()
↓
Deploy web app
↓
Wire Site buttons
↓
Test new student flow
↓
Test returning student flow
↓
Launch Phase 1
```
