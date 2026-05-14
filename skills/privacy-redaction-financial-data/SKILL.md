# Privacy Redaction for Financial Data Skill

## Purpose
Protect sensitive personal, business, and financial data before analysis, documentation, sharing, or repo-safe sample creation.

## When to use this skill
Use when files or prompts include bank statements, tax records, payroll, client lists, account numbers, IDs, addresses, EINs, SSNs, credit reports, loan documents, or private customer/vendor data.

## Required inputs
- Source text, file, or dataset to review
- Intended use: analysis, sample, report, upload, repo doc, or client-facing memo
- Whether synthetic replacement values are acceptable

## Process steps
1. Identify sensitive fields.
2. Redact or replace direct identifiers.
3. Preserve analytical usefulness where possible.
4. Label redacted fields consistently.
5. Warn if the material should not be committed to the repo.
6. Recommend safer synthetic examples for documentation and evals.

## Output format
- Redaction summary
- Sensitive data found
- Redacted version or redaction instructions
- Safe-to-use status
- Remaining risks

## Assumptions handling
If sensitive data may exist but is not visible, advise the user to verify before sharing or committing.

## Safety/compliance rules
Never commit real client financial data, account numbers, SSNs, EINs, API keys, OAuth tokens, bank credentials, or private customer/vendor lists. Do not display secrets back to the user.

## Example user prompts
- "Redact this bank export before I use it as a sample."
- "Is this safe to commit to GitHub?"
- "Create a synthetic version of this financial dataset."

## Example output skeleton
```md
## Redaction Summary
## Sensitive Data Found
## Redacted Fields
## Safe-to-Use Status
## Remaining Risks
## Recommended Next Step
```

## Related API endpoints if applicable
- `POST /api/redact-financial-data`

## Related templates if applicable
- `docs/sample-inputs.md`
- `evals/cfo-in-a-box-core-evals.json`
