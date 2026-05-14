# Monthly Financial Snapshot Skill

## Purpose
Create a monthly CFO-style financial summary that turns messy activity into a clear operating picture.

## When to use this skill
Use when the user asks for a monthly report, Founder OS snapshot, financial health summary, dashboard narrative, or owner update.

## Required inputs
- Current month and comparison period
- Revenue, COGS, gross profit, expenses, net income
- Cash balance, AR/AP, debt, payroll, owner draws
- Forecast vs actual where available
- Key wins, risks, and upcoming obligations

## Process steps
1. Normalize the period and inputs.
2. Summarize monthly financial performance.
3. Compare to prior month, budget, or forecast when available.
4. Highlight key metrics and risks.
5. Explain what changed and why it matters.
6. Recommend next-month actions.
7. Flag missing data.

## Output format
- Executive summary
- Key metrics table
- Month-over-month notes
- Cash flow and runway notes
- Risks and opportunities
- Next-month priorities
- Missing data

## Assumptions handling
Do not fabricate comparisons. If prior-period or budget data is unavailable, state that the snapshot is current-period only.

## Safety/compliance rules
This is planning and decision support only. Do not provide certified accounting, audit, tax, investment, or lending approval advice.

## Example user prompts
- "Create my monthly financial snapshot."
- "Summarize this month for my Founder OS dashboard."
- "Give me a plain-English monthly finance report."

## Example output skeleton
```md
## Monthly Financial Snapshot
## Key Metrics
| Metric | Current Month | Prior Month | Notes |
## What Changed
## Risks
## Opportunities
## Next-Month Priorities
## Missing Data
```

## Related API endpoints if applicable
- `POST /api/generate-monthly-financial-snapshot`

## Related templates if applicable
- `templates/monthly-advisor-memo.md`
