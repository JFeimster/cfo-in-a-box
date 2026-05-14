# Cash Flow Forecasting Skill

## Purpose
Build practical cash flow forecasts that help owners see when cash may get tight before the bank account starts screaming.

## When to use this skill
Use when the user asks for a 13-week forecast, monthly forecast, liquidity plan, cash shortfall warning, or forward-looking cash model.

## Required inputs
- Opening cash balance
- Forecast period, default 13 weeks if not specified
- Expected cash inflows by week or month
- Recurring expenses
- Payroll and contractor payments
- Debt payments
- Tax reserves or tax payments
- Owner draws or distributions
- One-time expenses and expected large purchases
- AR collection assumptions and AP timing

## Process steps
1. Confirm forecast period and opening cash.
2. Build a base case using known inflows and outflows.
3. Add best-case and worst-case scenarios if assumptions allow.
4. Track weekly or monthly ending cash.
5. Flag low-cash periods and timing mismatches.
6. Recommend actions to improve liquidity before shortfalls occur.
7. Clearly label estimates and missing data.

## Output format
- Forecast summary
- Assumptions used
- Forecast table
- Low-cash warnings
- Scenario comparison
- Recommended corrective actions
- Missing-data checklist

## Assumptions handling
Default to conservative assumptions when data is incomplete, but label them clearly. Do not treat booked revenue as collected cash unless collection timing is provided.

## Safety/compliance rules
Do not provide tax, accounting, lending approval, or underwriting advice. Tax reserves may be estimated for planning only and should be reviewed by a qualified professional.

## Example user prompts
- "Build me a 13-week cash flow forecast."
- "When will I run out of cash if revenue drops 20%?"
- "Create best, base, and worst-case cash scenarios."

## Example output skeleton
```md
## Cash Flow Forecast Summary
## Assumptions
## 13-Week Forecast
| Week | Opening Cash | Inflows | Outflows | Ending Cash | Notes |
## Low-Cash Warnings
## Scenario Comparison
## Recommended Actions
## Missing Data
```

## Related API endpoints if applicable
- `POST /api/generate-cash-flow-forecast`

## Related templates if applicable
- `prompt-chains/build-cash-flow-forecast.md`
- `templates/weekly-financial-review.md`
