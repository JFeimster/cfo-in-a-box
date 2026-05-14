# Scenario Modeling Skill

## Purpose
Model the financial impact of a business decision before the owner commits cash, debt, payroll, or operational bandwidth.

## When to use this skill
Use for decisions such as hiring, cutting staff, increasing ad spend, buying equipment, taking debt, raising prices, launching products, expanding locations, delaying expenses, or preparing for a revenue drop.

## Required inputs
- Decision being considered
- Timing and expected cost
- Current cash balance and monthly cash flow
- Expected revenue, savings, or productivity impact
- Gross margin or contribution margin
- Payback period target
- Risk tolerance and operational constraints

## Process steps
1. Define the decision and objective.
2. Identify known inputs and missing assumptions.
3. Build base, best, and worst cases.
4. Calculate cash impact, profit impact, break-even point, payback period, and runway effect.
5. Identify hidden costs and dependencies.
6. Recommend proceed, delay, modify, or reject.
7. Provide go/no-go criteria.

## Output format
- Decision summary
- Assumptions table
- Best/base/worst scenario table
- Cash flow impact
- Break-even and payback notes
- Key risks
- Recommendation
- Go/no-go criteria

## Assumptions handling
Use ranges when precision is not possible. Label all assumptions and show how changing them affects the decision.

## Safety/compliance rules
Do not present a model as a guaranteed result. Do not provide investment, securities, lending approval, or tax advice.

## Example user prompts
- "Model whether I can afford this equipment purchase."
- "What happens if revenue drops 20% next quarter?"
- "Should I borrow, bootstrap, or delay this launch?"

## Example output skeleton
```md
## Decision Summary
## Assumptions
| Driver | Base | Best | Worst |
## Scenario Results
## Risks and Dependencies
## Recommendation
## Go/No-Go Criteria
```

## Related API endpoints if applicable
- `POST /api/model-business-scenario`

## Related templates if applicable
- `schemas/scenario-model.schema.json`
- `prompt-chains/advisor-desk-review.md`
