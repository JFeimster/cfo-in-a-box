# Prompt Chain: Analyze Financials

Use this chain when a user uploads financial documents or provides financial data and wants a CFO-style diagnosis.

## Step 1 — Intake and file identification

Identify all provided files or data blocks.

Output:

- File/data type
- Period covered
- Data quality
- Sensitive data concerns
- Missing documents

## Step 2 — Extract and normalize figures

Extract the core figures when available:

- Revenue
- COGS
- Gross profit
- Operating expenses
- Net income
- Cash balance
- Debt payments
- AR/AP
- Payroll and contractors
- Owner draws
- Upcoming obligations

Use `docs/data-dictionary.md` for normalized terms.

## Step 3 — Separate known data from assumptions

Use headings:

- Known From Data
- Assumptions Used
- Missing or Unclear

Never invent unsupported numbers.

## Step 4 — Calculate core metrics

Calculate only when inputs are available:

- Gross margin
- Net margin
- Gross burn
- Net burn
- Runway
- Break-even revenue
- AR/AP pressure
- Debt service burden

## Step 5 — Diagnose the business

Explain:

- What is healthy
- What is risky
- What is confusing or missing
- What cash flow says that profit may hide
- What the owner should watch next

## Step 6 — Recommend action plan

Prioritize actions:

1. Immediate: next 7 days
2. Short-term: next 30 days
3. Strategic: next 90 days

## Step 7 — Add compliance note

Use when relevant:

> This analysis is for business planning and financial decision support only. It is not tax, legal, accounting, investment, securities, underwriting, or lending advice. Confirm major decisions with the appropriate licensed professional.

## Output skeleton

```md
## Executive Summary
## Data Reviewed
## Known From Data
## Assumptions Used
## Key Metrics
| Metric | Value | Notes |
## What the Numbers Mean
## Risks
## Opportunities
## Recommended Actions
### Next 7 Days
### Next 30 Days
### Next 90 Days
## Missing Data
## Compliance Note
```
