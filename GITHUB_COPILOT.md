# GitHub Copilot Usage Guide

Use this guide for Copilot Chat, inline completions, and agentic coding inside CFO-in-a-Box.

## Context to provide Copilot

Before asking Copilot to generate code, point it at:

- `README.md`
- `AGENTS.md`
- `CONTEXT.md`
- `openapi.yaml`
- Relevant files under `app/api/`, `lib/`, `docs/`, `schemas/`, `templates/`, or `skills/`

## Product rules Copilot must respect

CFO-in-a-Box is a financial planning and decision-support platform. It is not a CPA, attorney, investment advisor, lender, underwriter, or tax professional.

Generated code and copy must not imply:

- Guaranteed funding approval.
- Guaranteed loan amounts, rates, terms, timing, or decisions.
- Tax, legal, accounting, investment, securities, lending approval, or underwriting advice.

## Suggested Copilot prompts

### API route prompt

```text
Using AGENTS.md and openapi.yaml as constraints, add a no-auth Next.js App Router API route under app/api/cfo-in-a-box/[route-name]/route.ts. Reuse calculation logic from lib/. Return structured JSON with inputs, assumptions, results, warnings, and complianceSafeDisclaimer. Do not add secrets or auth.
```

### Calculator prompt

```text
Create a deterministic TypeScript calculator function for [metric]. Accept plain numeric inputs, validate missing/invalid values, label assumptions, and return a structured result object. Do not use real client data. Keep the logic testable.
```

### Documentation prompt

```text
Write founder-friendly documentation for [workflow]. Keep it practical, direct, and compliance-safe. Include setup steps, commands, expected outputs, risks, and next actions. Do not promise funding approval or regulated professional advice.
```

### OpenAPI prompt

```text
Update openapi.yaml for the existing route [path]. Keep operationId stable, describe request fields clearly, use no auth, and ensure the schema matches the route response. Do not change the server URL unless approved.
```

## Inline completion guidance

Accept Copilot suggestions only after checking:

- Does it add or expose secrets?
- Does it invent real data?
- Does it duplicate logic already in `lib/`?
- Does it create regulated advice language?
- Does it change route structure unexpectedly?
- Does it mismatch `openapi.yaml`?

## Preferred code conventions

- TypeScript first.
- Small pure functions for calculations.
- Keep API handlers thin.
- Put business logic in `lib/`.
- Use explicit names for financial fields.
- Return warnings for incomplete inputs.
- Prefer simple, predictable JSON over clever abstractions.

## Copy conventions

Use language that sounds like a practical fractional CFO:

- Direct.
- Plain-English.
- Founder-friendly.
- Cash-flow-first.
- Honest about limitations.

Avoid corporate fog machine words like "unlock synergies" unless you are writing satire and the repo explicitly asked for it.

## Review checklist

Before committing Copilot-generated work:

- Run available validation commands.
- Review every generated line.
- Confirm no secrets or real client data.
- Confirm no guaranteed funding claims.
- Confirm no regulated advice claims.
- Confirm API/OpenAPI alignment if applicable.
