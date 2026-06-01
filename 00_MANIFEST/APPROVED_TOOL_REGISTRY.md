# Approved Tool Registry

## Purpose

The Approved Tool Registry tracks which tools are allowed to support the Electrical Trades Program OS and what each tool is allowed to do.

This keeps the system useful without allowing tool sprawl.

## Current Build Position

The current build is teacher-facing.

The registry should start simple and become more detailed as the system moves toward Google Workspace automation.

## Registry Columns

| Column | Purpose |
|---|---|
| Tool Name | Name of the tool or platform. |
| Tool Category | AI, Google Workspace, repository, automation, design, data, other. |
| Approved Use | What the tool may be used for. |
| Not Approved For | What the tool should not be used for. |
| Data Allowed | What kind of information may be used with the tool. |
| Data Not Allowed | What kind of information should not be used with the tool. |
| Review Status | Proposed, approved, needs review, not approved. |
| Notes | Short usage notes. |

## Starter Registry

| Tool | Category | Approved Use | Not Approved For | Review Status |
|---|---|---|---|---|
| GitHub | Repository | Product docs, schemas, templates, non-sensitive program architecture | Real student data, credentials, restricted records | Approved for product repo work |
| Google Docs | Google Workspace | Assignment sheets, rubrics, teacher-reviewed student materials | Unreviewed automated publishing | Proposed |
| Google Sheets | Google Workspace | Trackers, course index, review queue, audit log | Broad sharing without review | Proposed |
| Google Forms | Google Workspace | Reflections, checks, simple responses | Sensitive student records without district review | Proposed |
| Google Slides | Google Workspace | Mini-lessons and visual supports | Compliance content with unclear or playful framing | Proposed |
| Apps Script | Automation | Teacher-facing workflow automation | Unreviewed student-facing automation | Proposed |
| Gemini | AI | Teacher-side drafting if approved by institution | Student-facing chatbot in current build | Needs local approval |

## Use Rule

Do not assume a tool is approved just because it is technically available.

A tool should have a defined use, boundary, and review status before it becomes part of the OS workflow.

## End-User Test

The instructor should be able to look at the registry and understand:

- what tools are being used
- what each tool is for
- what each tool is not for
- what still needs review
