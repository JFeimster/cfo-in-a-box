# Document Intake Normalization Skill

## Purpose
Identify, summarize, and normalize messy financial documents into a consistent structure for CFO-in-a-Box analysis.

## When to use this skill
Use when the user uploads financial documents, exports, spreadsheets, PDFs, screenshots, bank data, accounting reports, or mixed files that need cleanup before analysis.

## Required inputs
- Uploaded files or pasted financial data
- Business name or anonymized label
- Period covered
- Analysis goal
- Any known accounting system or export source

## Process steps
1. Identify each file type and likely source.
2. Summarize what each document appears to contain.
3. Extract core fields: revenue, expenses, cash, AR, AP, debt, payroll, owner draws, COGS, gross profit, net income.
4. Normalize fields into the CFO-in-a-Box data dictionary.
5. Flag duplicates, missing dates, unsupported formats, unclear categories, and sensitive data.
6. Produce a clean intake summary and missing-data checklist.

## Output format
- Files reviewed
- Extracted data summary
- Normalized fields
- Data quality issues
- Missing-data checklist
- Recommended next workflow

## Assumptions handling
If fields cannot be identified confidently, mark them as unknown. Never force ambiguous transactions into a category without noting uncertainty.

## Safety/compliance rules
Do not expose sensitive identifiers. Recommend redaction for account numbers, SSNs, EINs, full bank details, full tax returns, and personal addresses unless strictly necessary.

## Example user prompts
- "Normalize these files before analysis."
- "Tell me what’s in these uploads and what’s missing."
- "Convert this messy export into CFO-in-a-Box inputs."

## Example output skeleton
```md
## Document Intake Summary
| File | Type | Period | Useful Data | Issues |
## Normalized Fields
## Data Quality Flags
## Missing Data Checklist
## Recommended Next Workflow
```

## Related API endpoints if applicable
- `POST /api/normalize-financial-input`

## Related templates if applicable
- `schemas/financial-input.schema.json`
- `docs/data-dictionary.md`
