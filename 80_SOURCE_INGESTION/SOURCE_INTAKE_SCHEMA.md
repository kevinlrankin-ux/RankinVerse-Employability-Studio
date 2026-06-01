# Source Intake Schema

## Purpose

This document defines a simple intake structure for future course materials, policies, requisitions, advisory committee materials, recruiting documents, and program records.

The goal is to prepare for large-scale source ingestion without turning the product repo into an unreviewed document pile.

## Boundary

The product repo should receive clean, reviewed, non-sensitive outputs.

Raw ingestion work may belong in a separate source-ingestion repo.

## Intake Principle

Classify before using.

Before a document supports the operating system, the project should know what the document is, what it supports, and whether it is safe to use.

## Minimum Intake Fields

| Field | Purpose |
|---|---|
| Source ID | Unique identifier for the source. |
| Title | Plain-language source title. |
| Source Type | Course material, policy, requisition, advisory, recruiting, assessment, procedure, or other. |
| Course Relevance | Related course or program area. |
| Program Use | How the source may support the OS. |
| Sensitivity Level | Public-safe, internal, restricted, student-record risk, or unknown. |
| Student Data Present | Yes, no, or unknown. |
| Public Repo Safe | Yes, no, or unknown. |
| Approved Downstream Use | How the source may be used. |
| Source Status | Raw, reviewed, approved, needs redaction, or do not use. |
| Summary | Short plain-language description. |
| Tags | Search and grouping tags. |
| Review Notes | Human review notes. |
| Last Reviewed | Review date. |

## Source Types

- course material
- lesson plan
- assignment
- assessment
- rubric
- safety policy
- district policy
- program policy
- requisition
- advisory committee material
- recruiting material
- employer-facing material
- apprenticeship material
- meeting notes
- reference document
- other

## Sensitivity Levels

| Level | Meaning |
|---|---|
| Public-safe | Can safely appear in a public-facing summary. |
| Internal | Useful for program work but not intended for broad public release. |
| Restricted | Needs careful handling or approval before use. |
| Student-record risk | May contain student information or student work. |
| Unknown | Must be reviewed before downstream use. |

## Approved Downstream Uses

- assignment generation
- source reference
- policy reference
- recruiting
- advisory summary
- requisition planning
- archive only
- do not use

## Ingestion Flow

```text
Raw Source
-> Intake Record
-> Sensitivity Check
-> Source Type Classification
-> Summary
-> Approved Use Decision
-> Clean Registry Entry
-> Product OS Consumption
```

## Future Repo Fit

A future source-ingestion repo may handle raw document processing, classification, summaries, and clean registry export.

The product repo should consume only reviewed outputs.

## End-User Test

The instructor should be able to look at a source intake record and answer:

- What is this document?
- What course or program area does it support?
- Is it safe to use?
- Is it safe for the product repo?
- What can it help generate or organize?
- Does it need review before use?
