# Burn Rate and Runway Skill

## Purpose
Calculate how quickly a business is using cash and estimate how long it can operate before corrective action is required.

## When to use this skill
Use when the user asks about burn rate, runway, survival timeline, cash crunch risk, or how long current cash will last.

## Required inputs
- Current cash balance
- Monthly cash inflows
- Monthly cash outflows
- Payroll, contractor costs, debt payments, rent, subscriptions, owner draws
- Upcoming large expenses or expected inflows
- Period covered by historical data

## Process steps
1. Identify current cash balance.
2. Calculate gross burn from total monthly cash outflows.
3. Calculate net burn as cash outflows minus cash inflows.
4. Estimate runway as cash balance divided by net monthly burn.
5. Categorize burn drivers by essential, strategic, optional, wasteful, and timing-sensitive spend.
6. Assign a runway risk level.
7. Recommend revenue, cost, timing, and funding-readiness actions.

## Output format
- Burn and runway summary
- Gross burn, net burn, and runway
- Main burn drivers
- Risk level
- Runway extension plan
- Assumptions and missing data

## Assumptions handling
If cash balance or inflow timing is missing, request it when necessary. If proceeding anyway, clearly mark the result as directional.

## Safety/compliance rules
Do not promise survival, funding, or turnaround outcomes. Do not recommend nonpayment, misrepresentation, or unsafe financial shortcuts.

## Example user prompts
- "Calculate my burn rate and runway."
- "How long can I survive with $40K in cash and $12K monthly burn?"
- "What should I cut first to extend runway?"

## Example output skeleton
```md
## Burn Rate and Runway Summary
| Metric | Value | Notes |
## Burn Drivers
## Risk Level
## 30-Day Runway Extension Plan
## Assumptions and Missing Data
```

## Related API endpoints if applicable
- `POST /api/calculate-cash-runway`
- `POST /api/analyze-burn-rate`

## Related templates if applicable
- `templates/cost-leak-report.md`
- `templates/weekly-financial-review.md`
