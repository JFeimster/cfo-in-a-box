# Funding Document Checklist Skill

## Purpose
Generate a practical checklist of financial and business documents commonly needed for funding preparation.

## When to use this skill
Use when the user asks what documents they need for funding, lender review, investor conversations, business credit prep, or a funding readiness package.

## Required inputs
- Business type and industry
- Funding goal and amount requested
- Time in business
- Revenue range and cash flow trend
- Existing debt
- Documents already available
- Target funding type if known

## Process steps
1. Identify the funding goal and likely documentation needs.
2. Separate already available documents from missing documents.
3. Prioritize documents by urgency and usefulness.
4. Add cleanup notes for stale, inconsistent, or incomplete records.
5. Create a 7/30/90-day document preparation plan.
6. Include funding readiness disclaimer.

## Output format
- Checklist summary
- Documents available
- Documents missing
- Priority cleanup list
- 7/30/90-day preparation plan
- Disclaimer

## Assumptions handling
If the funding type is unknown, create a general funding-readiness checklist and mark any provider-specific requirements as unknown.

## Safety/compliance rules
Do not imply that collecting documents guarantees approval. Do not present provider-specific underwriting requirements unless provided by the user or an authoritative source.

## Example user prompts
- "What documents do I need before applying for funding?"
- "Build a funding prep checklist for my business."
- "What am I missing for lender readiness?"

## Example output skeleton
```md
## Funding Document Checklist
### Already Available
### Missing / Needed
### Cleanup Priorities
### 7-Day Plan
### 30-Day Plan
### 90-Day Plan
### Disclaimer
```

## Related API endpoints if applicable
- `POST /api/generate-funding-document-checklist`

## Related templates if applicable
- `templates/funding-readiness-report.md`
