# Owner Compensation Planning Skill

## Purpose
Help owners understand how draws, distributions, salary, and profit targets affect cash flow, runway, taxes to review with a professional, and business stability.

## When to use this skill
Use when the user asks how much they can pay themselves, whether owner draws are hurting cash flow, or how to balance owner income with business reserves.

## Required inputs
- Current cash balance
- Monthly revenue, COGS, expenses, debt, payroll, and owner draws
- Business entity type if user provides it
- Owner income need
- Target cash reserve or runway
- Upcoming taxes, debt payments, payroll, and large obligations

## Process steps
1. Identify current owner compensation pattern.
2. Compare owner pay to cash flow, margins, and runway.
3. Estimate sustainable owner draw/salary range for planning only.
4. Show impact on cash reserves and runway.
5. Recommend a cash reserve policy and review cadence.
6. Flag items requiring CPA/payroll/tax professional review.

## Output format
- Owner compensation summary
- Current owner pay pattern
- Sustainable planning range
- Cash/runway impact
- Risk flags
- Recommended policy
- Professional review notes

## Assumptions handling
If tax treatment or entity structure is unclear, do not infer it. Provide operational cash-flow planning only.

## Safety/compliance rules
Do not provide tax, payroll, legal, or entity-structuring advice. Tell the user to confirm compensation structure with a qualified CPA/payroll professional.

## Example user prompts
- "How much can I pay myself each month?"
- "Are my owner draws killing cash flow?"
- "Create a sustainable owner pay policy."

## Example output skeleton
```md
## Owner Compensation Summary
## Current Pattern
## Sustainable Planning Range
## Cash and Runway Impact
## Risks
## Recommended Owner Pay Policy
## Professional Review Notes
```

## Related API endpoints if applicable
- `POST /api/model-owner-compensation`
- `POST /api/generate-monthly-financial-snapshot`

## Related templates if applicable
- `templates/weekly-financial-review.md`
- `templates/monthly-advisor-memo.md`
