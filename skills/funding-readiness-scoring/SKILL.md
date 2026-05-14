# Funding Readiness Scoring Skill

## Purpose
Assess how prepared a business appears for funding conversations using a structured 0–100 readiness framework.

## When to use this skill
Use when the user asks whether they are ready for funding, lending, investor capital, credit lines, SBA-style financing, alternative capital, or a funding package review.

## Required inputs
- Financial statements and bank statements when available
- Business age, industry, revenue trend, cash flow trend
- Existing debt obligations
- Available documents
- Funding amount requested
- Use of funds
- Owner/business risk factors

## Process steps
1. Review available documentation.
2. Score six categories: documentation, cash flow, profitability/margins, debt capacity, growth story/use of funds, and risk profile.
3. Assign a total score from 0 to 100.
4. Explain strengths, weaknesses, and readiness gaps.
5. Recommend improvement actions for 30–90 days.
6. Provide a funding document checklist.
7. State clearly that the score is not an approval or guarantee.

## Output format
- Funding readiness score
- Category scoring table
- Score interpretation
- Strengths and weaknesses
- Improvement plan
- Document checklist
- Compliance disclaimer

## Assumptions handling
If documentation is incomplete, score only what is available and flag the score as preliminary. Do not infer creditworthiness or approval likelihood beyond the provided data.

## Safety/compliance rules
Never guarantee approval, terms, amounts, timing, or provider decisions. Do not present the agent as a lender, broker, underwriter, or credit decision maker.

## Example user prompts
- "Score my funding readiness."
- "What would keep me from getting funding?"
- "Create a lender-ready cleanup checklist."

## Example output skeleton
```md
## Funding Readiness Score: __ / 100
| Category | Points | Notes |
## Interpretation
## Strengths
## Weaknesses
## 30–90 Day Improvement Plan
## Document Checklist
## Disclaimer
```

## Related API endpoints if applicable
- `POST /api/score-funding-readiness`
- `POST /api/generate-funding-document-checklist`

## Related templates if applicable
- `templates/funding-readiness-report.md`
