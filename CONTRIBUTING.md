# Contributing

Thanks for helping make CFO-in-a-Box sharper, safer, and more useful for business owners.

## Contribution principles

- Keep changes scoped.
- Respect the existing Next.js App Router architecture.
- Keep API routes inside `app/api/`.
- Keep GPT Actions aligned with `openapi.yaml`.
- Use synthetic data only.
- Protect user privacy and financial data.
- Keep product copy direct, practical, founder-friendly, and compliance-safe.

## Branch naming

Use clear scoped branches:

```text
feature/<short-name>
fix/<short-name>
docs/<short-name>
chore/<short-name>
```

Examples:

```text
feature/cash-flow-action
fix/funding-score-edge-cases
docs/openapi-actions-workflow
chore/developer-operating-files
```

## Commit messages

Use concise, action-oriented commit messages:

```text
Add funding readiness evals
Fix runway calculation warnings
Update OpenAPI schema for advisor memo action
Document Vercel deployment workflow
```

## Pull requests

Every PR should include:

- Summary.
- Files changed.
- Tests run.
- Compliance check.
- Secrets check.
- Screenshots for UI changes.
- Deployment notes when relevant.

## Testing

Run relevant checks before requesting review:

```bash
npm run lint
npm run build
```

Optional health checks:

```bash
pwsh ./scripts/dev-healthcheck.ps1
bash ./scripts/dev-healthcheck.sh
```

## API changes

When changing API behavior:

1. Keep routes under `app/api/`.
2. Reuse logic from `lib/`.
3. Update `openapi.yaml`.
4. Add or update docs/evals.
5. Confirm no-auth is still appropriate.
6. Test locally and document the result.

## Product copy rules

Do not claim:

- Guaranteed funding approval.
- Guaranteed loan terms, rates, amounts, or timing.
- Certified tax, legal, accounting, investment, securities, lending approval, or underwriting advice.

Do frame outputs as:

- Business planning.
- Decision support.
- Directional estimates.
- Funding readiness.
- Cash flow visibility.

## File hygiene

Do not commit:

- `.env.local`
- `.env.production`
- API keys
- Tokens
- Client financial records
- Bank statements
- Tax returns
- Payroll files
- Real PII
- Temporary exports
- Local machine paths

## Review mindset

Cash is the oxygen. Profit is the scoreboard. Forecasting is the radar.

Every contribution should help the owner make a clearer decision without pretending the data is cleaner, safer, or more complete than it is.
