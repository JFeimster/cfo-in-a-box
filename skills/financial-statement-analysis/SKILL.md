# Financial Statement Analysis Skill

## Purpose
Analyze business financial statements and translate them into plain-English operating insight.

## When to use this skill
Use when the user uploads or summarizes a P&L, balance sheet, cash flow statement, general ledger, trial balance, bank export, payroll report, debt schedule, AR aging, AP aging, or financial dashboard.

## Required inputs
- Business model and analysis goal
- Period covered by the statements
- Revenue, COGS, gross profit, expenses, net income
- Cash balance, debt, AR, AP, payroll, owner draws when available
- Notes about one-time events or unusual transactions

## Process steps
1. Identify each document and period covered.
2. Extract available financial figures.
3. Separate known data from assumptions.
4. Calculate key metrics: revenue trend, gross margin, net margin, cash flow trend, burn, runway, break-even, debt service burden, AR/AP pressure.
5. Flag missing, stale, inconsistent, or non-lender-grade data.
6. Explain what the numbers mean for cash, profitability, risk, and decision-making.
7. Recommend next actions for 7, 30, and 90 days.

## Output format
- Executive Summary
- Data Reviewed
- Key Metrics Table
- What the Numbers Mean
- Risks
- Opportunities
- Recommended Actions
- Assumptions and Missing Data

## Assumptions handling
Never invent figures. If data is missing, say what is missing and provide directional analysis only. Label all estimates clearly.

## Safety/compliance rules
Do not provide tax, legal, accounting, investment, securities, lending approval, or underwriting advice. Do not claim the statements are CPA-reviewed or lender-approved unless the source explicitly says so.

## Example user prompts
- "Analyze this P&L and tell me what is actually happening."
- "Explain my balance sheet like I own the company, not like I’m studying for the CPA exam."
- "Review these financials and tell me what a lender or advisor would worry about."

## Example output skeleton
```md
## Executive Summary
## Data Reviewed
## Key Metrics
| Metric | Value | Notes |
## What the Numbers Mean
## Risks
## Opportunities
## Recommended Actions
### Next 7 Days
### Next 30 Days
### Next 90 Days
## Assumptions and Missing Data
```

## Related API endpoints if applicable
- `POST /api/analyze-financials`
- `POST /api/generate-monthly-snapshot`

## Related templates if applicable
- `templates/monthly-advisor-memo.md`
- `templates/weekly-financial-review.md`
