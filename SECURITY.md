# Security Policy

CFO-in-a-Box handles financial planning workflows. Treat security and privacy like product features, not chores someone left in the sink.

## Supported scope

This policy applies to:

- Source code.
- API routes.
- OpenAPI schemas.
- Docs.
- Templates.
- Evals.
- Scripts.
- Future integrations.

## Secrets policy

Never commit:

- API keys.
- OAuth credentials.
- Tokens.
- Webhook signing secrets.
- Database URLs.
- Private keys.
- Production `.env` files.
- Real customer credentials.

Use local `.env.local` for development secrets only. Use Vercel environment variables for deployed secrets.

## Financial data policy

Never commit real client:

- Bank statements.
- Tax returns.
- Payroll files.
- Accounting exports.
- Credit reports.
- Debt schedules.
- AR/AP aging reports.
- Personally identifiable information.

Use synthetic data for examples, tests, screenshots, templates, and evals.

## PII handling

If a workflow receives PII or sensitive financial data:

1. Use only what is needed.
2. Do not store it in the repo.
3. Redact identifiers in examples.
4. Avoid logging sensitive fields.
5. Prefer summarized inputs for no-auth actions.

## API action exposure

No-auth actions should be limited to:

- Calculators.
- Diagnostics.
- Scoring engines.
- Template generators.
- Scenario models.
- Structured report builders using user-provided inputs.

Do not expose actions that require private account access, bank data access, CRM access, email access, Drive access, or write permissions without explicit auth and human approval.

## Dependency hygiene

- Avoid adding new dependencies unless the value is clear.
- Prefer built-in platform capabilities when practical.
- Review dependency licenses and maintenance posture before adding.
- Run `npm audit` manually when dependency risk is relevant.

## Vulnerability reporting

For vulnerabilities, open a private/security-appropriate channel with the repo owner rather than posting sensitive details publicly in an issue.

Include:

- Summary.
- Affected files/routes.
- Reproduction steps.
- Impact.
- Suggested fix.
- Whether secrets or data may be exposed.

## Security review triggers

Require extra review for changes touching:

- Auth.
- OAuth.
- Webhooks.
- File uploads.
- External integrations.
- Data storage.
- Logging.
- API route exposure.
- OpenAPI schema authentication.
- Privacy or terms pages.

## Compliance-sensitive claims

Security review should also flag copy or outputs that imply:

- Guaranteed funding approval.
- Underwriting decisions.
- Tax, legal, accounting, investment, securities, lending approval, or professional advice.

## Incident response basics

If a secret is accidentally committed:

1. Revoke it immediately.
2. Remove it from the repo.
3. Rotate any related credentials.
4. Review logs and deployment environments.
5. Document what happened and how it was fixed.

Do not merely delete the line and pretend the raccoon did not knock over the trash can.
