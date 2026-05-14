# Codex Operating Instructions

Use this file when OpenAI Codex or a similar coding agent works inside this repo.

## Mission

Help develop CFO-in-a-Box safely and efficiently without leaking secrets, inventing architecture, or turning a focused repo task into a wandering software safari.

## Before changing files

1. Read `README.md`.
2. Read `AGENTS.md`.
3. Inspect the files you plan to modify.
4. Check `openapi.yaml` before changing API routes.
5. Check `package.json` before assuming commands.
6. Keep work on a scoped branch.

## Scope discipline

Codex should only change files needed for the task. Do not perform broad formatting passes, dependency upgrades, route rewrites, design-system swaps, or folder migrations unless explicitly requested.

Good task scope:

- Add one API route and matching OpenAPI path.
- Update one calculator and its documentation.
- Add evals for a specific action.
- Improve one workflow doc.

Bad task scope:

- Rewrite the app structure.
- Change branding sitewide while fixing a route bug.
- Add auth, database, or background jobs without approval.
- Rename the repo or split the API into another repo.

## Security rules

Never create, print, commit, or log:

- API keys.
- Tokens.
- OAuth credentials.
- Webhook secrets.
- Database URLs.
- Private keys.
- Client financial data.
- Production `.env` values.

Do not add `.env.local` or real financial exports to Git.

## Compliance rules

CFO-in-a-Box provides financial planning and decision support only.

Do not add copy or code comments implying:

- Guaranteed funding approval.
- Underwriting decisions.
- Certified accounting advice.
- Tax, legal, investment, securities, or lending approval advice.

Funding readiness scores must be framed as planning tools, not approvals.

## API route rules

- Keep API routes inside `app/api/`.
- Keep CFO actions under `app/api/cfo-in-a-box/`.
- Prefer no-auth actions for MVP calculators, diagnostics, scoring engines, generators, and scenario models.
- Reuse logic from `lib/`.
- Keep responses structured and predictable.
- Return warnings when data is incomplete.

## OpenAPI rules

When changing action behavior:

1. Update the API route.
2. Update `openapi.yaml`.
3. Ensure `operationId` is stable and descriptive.
4. Confirm request/response shapes are compatible with Custom GPT Actions.
5. Do not change the OpenAPI server URL unless the deployment target is approved.

## Testing expectations

Run what is available and relevant:

```bash
npm run lint
npm run build
```

Health checks:

```bash
pwsh ./scripts/dev-healthcheck.ps1
bash ./scripts/dev-healthcheck.sh
```

If commands cannot be run, say exactly why.

## Diff summary format

When done, summarize:

- Files changed.
- Why they changed.
- Tests run.
- Compliance/security checks.
- Any follow-up work.

## Preferred branch names

- `feature/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

## Codex prompt starter

```text
Read README.md, AGENTS.md, CODEX.md, package.json, and the target files first. Keep the change scoped. Do not add secrets or real client data. Do not imply guaranteed funding approval or regulated advice. If changing an API route, update openapi.yaml and relevant docs/evals. Summarize the diff and tests run.
```
