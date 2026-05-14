# Business Credit Readiness Skill

## Purpose
Assess operational and documentation factors that may affect business credit readiness without making credit approval claims.

## When to use this skill
Use when the user asks whether the business is ready for business credit, credit lines, vendor accounts, tradelines, or funding conversations tied to business profile quality.

## Required inputs
- Legal business name and age, if safely provided
- Industry, revenue, cash flow trend, and bank activity summary
- Existing debt and payment obligations
- Business address/phone/web presence status
- Business bank account status
- Financial documents available
- Requested credit or funding purpose

## Process steps
1. Review documentation and operational readiness factors.
2. Identify business profile gaps.
3. Review cash flow and debt capacity inputs at a high level.
4. Create a readiness score or checklist if requested.
5. Recommend profile cleanup, documentation improvements, and financial discipline actions.
6. Add clear non-approval language.

## Output format
- Business credit readiness summary
- Strengths
- Gaps
- Readiness checklist
- 30/60/90-day improvement plan
- Disclaimer

## Assumptions handling
Do not infer credit bureau data, scores, payment history, or approval odds unless the user provides them. Mark unknowns clearly.

## Safety/compliance rules
Do not guarantee credit approval, tradeline reporting, credit score improvement, or lender outcomes. Do not advise misrepresentation or synthetic credit behavior.

## Example user prompts
- "Am I ready for business credit?"
- "What do I need before applying for a business line of credit?"
- "Create a 90-day business credit readiness plan."

## Example output skeleton
```md
## Business Credit Readiness Summary
## Strengths
## Gaps
## Readiness Checklist
## 30/60/90-Day Plan
## Disclaimer
```

## Related API endpoints if applicable
- `POST /api/score-business-credit-readiness`
- `POST /api/score-funding-readiness`

## Related templates if applicable
- `templates/funding-readiness-report.md`
