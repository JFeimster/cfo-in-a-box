# AI Agent Workflow

This guide explains how to use ChatGPT, Codex, Copilot, Jules, or similar AI agents safely inside CFO-in-a-Box.

## Default rule

AI agents are helpers, not repo monarchs. Keep them scoped, supervised, and boring around secrets.

## Required context packet

Give any agent:

1. Repo URL.
2. Task objective.
3. Files in scope.
4. Files out of scope.
5. Compliance rules.
6. Security rules.
7. Expected output.
8. Whether it may write files.
9. Whether it may open a PR.

## Files agents should read first

- `README.md`
- `AGENTS.md`
- `CONTEXT.md`
- Relevant skill files under `skills/`
- Relevant docs under `docs/`
- `openapi.yaml` for action work
- `package.json` for commands

## ChatGPT workflow

Use ChatGPT for:

- Planning.
- Prompt chains.
- Documentation drafts.
- Code review.
- OpenAPI reasoning.
- Eval design.
- Compliance review.

Ask for proposed file lists before major writes.

## Codex workflow

Use Codex for:

- Focused implementation.
- Small route additions.
- Test/eval generation.
- Scoped refactors.

Codex should follow `CODEX.md`.

## Copilot workflow

Use Copilot for:

- Inline code assistance.
- Boilerplate.
- Small function generation.
- Documentation expansion.

Copilot should follow `GITHUB_COPILOT.md`.

## Jules workflow

Jules requires explicit approval before use.

If approved, Jules should follow `JULES.md` and open a reviewable PR.

## Agent red lines

Agents must not:

- Create secrets.
- Request production credentials.
- Commit `.env.local`.
- Commit client financial records.
- Add auth or integrations without approval.
- Promise funding approval.
- Provide regulated professional advice.
- Rename the repo.
- Create a separate API repo.

## Good agent prompt

```text
Use the GitHub connector for JFeimster/cfo-in-a-box. Read README.md, AGENTS.md, package.json, openapi.yaml, and the target files first. Work on a scoped branch. Do not add secrets or real client data. Keep API routes in app/api/. Do not imply guaranteed funding approval or regulated advice. Show the proposed file list before major writes. Summarize files changed, tests run, and compliance/security checks.
```

## Review checklist

Before accepting agent work:

- Diff is scoped.
- No secrets.
- No client data.
- No guaranteed funding language.
- No regulated advice claims.
- Tests were run or limitations disclosed.
- OpenAPI matches API changes.
- Docs match actual repo behavior.
