# Jules Operating Instructions

Jules-style asynchronous coding workflows are not the default workflow for this repo.

## Approval requirement

Do not use Jules or any asynchronous autonomous coding agent unless Jason explicitly approves it for the specific task.

No approval means no Jules. The robot does not get keys to the forklift because it looked confident. 🧯

## When Jules may be appropriate

Jules may be useful for:

- Well-scoped documentation expansion.
- Small API route additions with clear acceptance criteria.
- Test/eval generation.
- Refactoring a known narrow module.
- Repetitive repo hygiene tasks.

Jules is not appropriate for:

- Secrets, credentials, or production environment setup.
- Payment, auth, OAuth, database, or customer data work without human review.
- Broad architecture decisions.
- Repo splitting or renaming.
- Legal, tax, accounting, investment, securities, lending approval, or underwriting advice.
- Anything involving real client financial records.

## Required task packet

Every approved Jules task should include:

1. Repo: `JFeimster/cfo-in-a-box`.
2. Branch name.
3. Exact files or folders in scope.
4. Files or folders out of scope.
5. Expected behavior.
6. Commands to run.
7. Compliance/security constraints.
8. PR expectations.

## Branch naming

Use scoped branch names:

- `docs/<task-name>`
- `feature/<task-name>`
- `fix/<task-name>`
- `chore/<task-name>`

Never work directly on `main`.

## Pull request expectations

A Jules PR must include:

- Summary.
- Files changed.
- Tests run.
- Screenshots for UI changes.
- OpenAPI notes for API changes.
- Compliance check.
- Secrets check.
- Known limitations.

## Human review requirements

A human must review before merge if the task touches:

- API behavior.
- Financial formulas.
- Funding readiness scoring.
- OpenAPI schema.
- Privacy or terms copy.
- Authentication or integrations.
- Any data-handling behavior.

## Completion checklist

Before Jules marks a task complete:

- No secrets committed.
- No real client data committed.
- No guaranteed funding language added.
- No regulated advice claims added.
- API routes remain under `app/api/`.
- `openapi.yaml` is updated when actions change.
- Build/lint were run or limitations are disclosed.
