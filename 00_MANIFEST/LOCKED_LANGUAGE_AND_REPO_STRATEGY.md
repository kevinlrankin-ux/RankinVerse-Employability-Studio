# Locked Language and Repository Strategy

## Locked Project Language

The following language is adopted as part of the project identity:

> Governance is not the brake.
> Governance is the frame that allows the work to grow without losing trust.

Expanded form:

> Governance is not the brake on the project.
> Governance is the frame that allows the project to grow without losing trust.

## Meaning

This project is ambitious by design.

It aims to become a complete Electrical Trades program operating system, not a small classroom utility.

Because of that, governance must be treated as part of the build, not as an obstacle to the build.

The system should be:

- useful
- inspectable
- teacher-controlled
- student-protective
- FERPA-aware
- district-reviewable
- Google-native where appropriate
- capable of growing without losing trust

## Design Principle

Governance should be caked into project decisions.

It should appear in:

- the teacher-facing AI boundary
- data-minimization decisions
- audit logs
- assignment review status
- public repo hygiene
- approved-tool registries
- sharing and access matrices
- future student-facing AI gates
- vendor repo extraction rules

Governance is not a separate layer added after the product becomes complex.

Governance is part of the operating system.

---

# Vendor Repo Strategy

## Context

There is an existing memory repository that uses an ingestion process to convert course and program documents into PowerShell-based recall artifacts.

That memory repository may contain useful patterns for handling large volumes of program material, including:

- course materials
- requisitions
- advisory committee materials
- policy documents
- recruiting materials
- program documentation
- historical records
- operational notes
- source materials for future curriculum and workflow generation

## Boundary Decision

The memory repository is treated as a vendor repo.

That means:

- it is not directly modified by this project by default
- it is not assumed to be part of the product runtime
- it is not blindly integrated
- it can be studied for reusable concepts, patterns, schemas, and workflows
- useful ideas can be extracted into clean, purpose-built repos or modules

## Extraction Principle

Extract patterns, not entanglement.

The Electrical Trades Program OS should borrow what is useful without becoming dependent on a fragile or unrelated repository structure.

Useful extraction targets may include:

- ingestion patterns
- document classification patterns
- query and recall patterns
- automation patterns
- metadata schemas
- memory indexing concepts
- source registry structures
- document-to-structured-data workflows

## Possible Repository Architecture

The long-term project may benefit from more than one repo.

A possible structure:

### 1. Product Repo

`RankinVerse-Employability-Studio`

Role:

- Electrical Trades Program OS product layer
- teacher dashboard
- assignment compiler
- curriculum map
- Google Workspace workflows
- governance docs
- Apps Script prototypes
- user-facing operating model

### 2. Memory / Source Processing Repo

Possible future repo:

`ElectricalTrades-Source-Ingestion`

Role:

- document ingestion
- source classification
- metadata extraction
- source registry creation
- curriculum evidence indexing
- approved source preparation
- safe transformation of course documents into structured references

### 3. Program Knowledge Registry Repo

Possible future repo:

`ElectricalTrades-Knowledge-Registry`

Role:

- clean source registry
- course material catalog
- advisory committee records catalog
- requisition and policy index
- recruiting material index
- program history and decision logs
- non-student-specific institutional memory

## Data Boundary

No real student records should be placed in a public repo.

No private district data, credentials, protected records, student work, grades, behavior notes, IEP/504 information, or personally identifiable student information should be committed to this project repository.

If future ingestion handles sensitive documents, the ingestion system must include data classification before materials are used downstream.

## Integration Rule

The product repo should not depend on raw memory artifacts directly.

Instead, the product repo should consume clean, reviewed, non-sensitive outputs such as:

- course maps
- approved assignment templates
- source registry entries
- curriculum metadata
- policy summaries
- advisory-board topic summaries
- requisition category structures
- recruiting message libraries

## Governance Fit

This repo strategy supports the locked governance language.

Governance is the frame that allows the project to grow.

By separating product, ingestion, and knowledge registry concerns, the project can scale without turning one repo into an unreviewable pile of files.

## Working Rule

Treat existing memory infrastructure as a source of reusable intelligence, not as the operating system itself.

The Electrical Trades Program OS should remain clean, inspectable, and teacher-facing.

If additional repos are needed, create them intentionally around clear responsibilities.
