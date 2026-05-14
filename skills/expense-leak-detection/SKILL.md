# Expense Leak Detection Skill

## Purpose
Identify unnecessary, duplicated, excessive, mistimed, low-ROI, or risky expenses that weaken cash flow and margins.

## When to use this skill
Use when the user asks what to cut, where cash is leaking, how to reduce burn, or how to clean up expenses without damaging revenue.

## Required inputs
- Expense detail by category and vendor
- Recurring subscriptions
- Payroll and contractor spend
- Marketing spend and performance context
- Debt payments, fees, rent, inventory, software, insurance, professional services
- Time period reviewed

## Process steps
1. Categorize expenses as essential, strategic, optional, wasteful, negotiable, or timing-sensitive.
2. Identify duplicate vendors, unused tools, recurring subscriptions, high-fee services, weak ROI spend, and avoidable charges.
3. Estimate savings where the data supports it.
4. Flag cuts that could hurt revenue, operations, compliance, or customer experience.
5. Prioritize actions by speed, savings impact, risk, and difficulty.
6. Create a 30-day cleanup plan.

## Output format
- Expense leak summary
- Expense categories
- Top opportunities table
- Estimated savings
- Risk notes
- 30-day cleanup plan
- Assumptions and missing data

## Assumptions handling
Do not estimate savings without enough detail. If vendor purpose is unclear, mark it for owner review instead of blindly recommending cancellation.

## Safety/compliance rules
Do not recommend cutting legally required, compliance-critical, payroll-tax, insurance, or core operating obligations without professional review.

## Example user prompts
- "Find my cost leaks."
- "What expenses should I cut first?"
- "Review this expense export and build a cleanup plan."

## Example output skeleton
```md
## Expense Leak Summary
| Opportunity | Monthly Amount | Suggested Action | Risk | Priority |
## Quick Wins
## Strategic Reviews
## Cuts to Avoid Without More Context
## 30-Day Cleanup Plan
```

## Related API endpoints if applicable
- `POST /api/detect-expense-leaks`

## Related templates if applicable
- `templates/cost-leak-report.md`
