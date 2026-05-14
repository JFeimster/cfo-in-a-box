# Git Workflow

Use this workflow for human and AI-assisted development.

## Default flow

```text
main -> scoped branch -> focused commits -> pull request -> review -> merge
```

Never work directly on `main` for meaningful changes.

## Branch naming

```text
feature/<short-description>
fix/<short-description>
docs/<short-description>
chore/<short-description>
```

Examples:

```text
feature/funding-readiness-route
docs/openapi-actions-workflow
fix/runway-zero-expense-edge-case
chore/developer-ai-agent-operating-files
```

## Commit standards

Use concise action-oriented commits:

```text
Add funding readiness report template
Update OpenAPI schema for cash forecast action
Fix burn rate warning thresholds
Document local development workflow
```

## Pull request checklist

Every PR should answer:

- What changed?
- Why did it change?
- Which files were touched?
- What tests were run?
- Were secrets checked?
- Was compliance-safe language preserved?
- Are screenshots included for UI changes?
- Are deployment notes included when relevant?

## API PR rules

If a PR changes `app/api/`:

1. Update `openapi.yaml` if the action is GPT-facing.
2. Add/update docs.
3. Add/update evals when behavior changes.
4. Confirm no-auth remains appropriate.
5. Test locally.

## Documentation PR rules

Docs should be:

- Practical.
- Direct.
- Copy/paste-friendly where useful.
- Consistent with compliance guardrails.
- Free of fake guarantees or regulated advice claims.

## Merge discipline

Do not merge if:

- Secrets are present.
- Real client data is present.
- Funding approval is promised.
- Regulated advice is claimed.
- API and OpenAPI are misaligned.
- The change includes unrelated refactors.
