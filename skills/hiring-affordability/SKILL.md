# Hiring Affordability Skill

## Purpose
Evaluate whether a business can afford a new hire, contractor, or role expansion without creating cash flow damage.

## When to use this skill
Use when the user asks whether they can hire, replace a role, add contractors, increase payroll, or delay hiring.

## Required inputs
- Role type and expected start date
- Salary, hourly rate, contractor fee, or retainer
- Payroll taxes, benefits, tools, training, equipment, recruiting, and management costs
- Current cash balance, revenue, gross margin, monthly expenses, and runway
- Expected revenue, capacity, or efficiency impact
- Ramp period and payback expectations

## Process steps
1. Estimate fully loaded cost.
2. Model timing of cash outflows.
3. Estimate expected contribution or capacity increase.
4. Calculate break-even revenue or savings needed.
5. Compare impact on runway and cash flow.
6. Build best/base/worst cases.
7. Recommend hire now, delay, reduce scope, contract first, or reject.

## Output format
- Hiring decision summary
- Fully loaded cost estimate
- Break-even requirement
- Cash/runway impact
- Scenario table
- Risks and dependencies
- Recommendation

## Assumptions handling
If payroll burden or benefits are unknown, use a clearly labeled planning range and recommend professional payroll review before committing.

## Safety/compliance rules
Do not provide employment law, payroll tax, or HR compliance advice. Do not guarantee the hire will create revenue.

## Example user prompts
- "Can I afford to hire a salesperson?"
- "Model a $65K operations hire."
- "Should I hire full-time or use a contractor first?"

## Example output skeleton
```md
## Hiring Affordability Summary
## Fully Loaded Cost
## Break-Even Requirement
## Cash and Runway Impact
## Scenario Table
## Recommendation
## Next Actions
```

## Related API endpoints if applicable
- `POST /api/model-hiring-affordability`
- `POST /api/model-business-scenario`

## Related templates if applicable
- `schemas/scenario-model.schema.json`
