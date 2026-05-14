# Advisor Memo Generation Skill

## Purpose
Convert financial analysis into an advisor-ready memo for founders, operators, review calls, or human-in-the-loop Advisor Desk workflows.

## When to use this skill
Use when the user needs a board-style memo, owner update, financial decision memo, monthly advisor note, or concise executive summary for review.

## Required inputs
- Financial snapshot or analysis results
- Current goals and concerns
- Key metrics and trend notes
- Risks, opportunities, and recommended actions
- Any decisions requiring owner/advisor review

## Process steps
1. Define memo audience and purpose.
2. Summarize the financial position in plain English.
3. Highlight the most important metrics.
4. Identify risks and decisions needed.
5. Recommend action priorities.
6. Add assumptions, missing data, and compliance language.
7. Keep the memo concise enough for a busy owner to actually read.

## Output format
- Subject / memo title
- Executive summary
- Key metrics
- What changed
- Risks
- Recommended actions
- Advisor notes
- Assumptions and limitations

## Assumptions handling
Do not overstate certainty. If the memo is based on partial information, label it as preliminary or directional.

## Safety/compliance rules
Do not provide tax, legal, accounting, investment, securities, lending approval, or underwriting advice. Use professional review language for regulated issues.

## Example user prompts
- "Turn this analysis into an advisor memo."
- "Create a monthly CFO memo for my business."
- "Write a decision memo for whether I should hire."

## Example output skeleton
```md
# Advisor Memo
## Executive Summary
## Key Metrics
## What Changed
## Risks and Watch Items
## Recommended Actions
## Advisor Notes
## Assumptions and Limitations
```

## Related API endpoints if applicable
- `POST /api/generate-monthly-advisor-memo`

## Related templates if applicable
- `templates/monthly-advisor-memo.md`
- `prompt-chains/advisor-desk-review.md`
