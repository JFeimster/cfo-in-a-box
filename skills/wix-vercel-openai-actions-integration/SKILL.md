# Wix, Vercel, and OpenAI Actions Integration Skill

## Purpose
Guide safe integration planning between Wix marketing/conversion flows, Vercel-hosted Next.js API routes, and OpenAI GPT Actions.

## When to use this skill
Use when building or documenting GPT Actions, no-auth calculators, public lead magnets, Wix embeds, Vercel API routes, OpenAPI schemas, privacy/terms pages, or future integration workflows.

## Required inputs
- Desired user flow
- Action name and purpose
- Inputs and outputs
- Authentication requirement: none, API key, or OAuth
- Vercel route path
- OpenAPI operation ID
- Wix embed or CTA destination if applicable
- Privacy/terms requirements

## Process steps
1. Define the front-end entry point: Wix page, GPT, embedded tool, or product app.
2. Define the API route and whether it is no-auth.
3. Define request and response payloads.
4. Map the endpoint to OpenAPI schema.
5. Add privacy and compliance language.
6. Identify data storage rules and sensitive data restrictions.
7. Recommend testing and evals.
8. Document handoff steps for deployment.

## Output format
- Integration summary
- Flow diagram in text
- Endpoint map
- Data handling notes
- Compliance notes
- Testing checklist
- Deployment checklist

## Assumptions handling
If connector capabilities, API methods, or platform limits are unknown, verify before implementation. Do not invent credentials, secret names, or vendor-specific capabilities.

## Safety/compliance rules
Do not create, expose, or commit secrets. Do not store client financial data unless explicitly designed and approved. Do not imply GPT Actions produce lender decisions or regulated advice.

## Example user prompts
- "Map this GPT Action to a Vercel API route."
- "Create a Wix-to-Vercel-to-OpenAI Actions integration plan."
- "Document the no-auth action setup for funding readiness scoring."

## Example output skeleton
```md
## Integration Summary
## User Flow
Wix/GPT -> Vercel API -> Response -> Report/CTA
## Endpoint Map
| Action | Route | Auth | Inputs | Outputs |
## Data Handling
## Compliance Notes
## Testing Checklist
## Deployment Checklist
```

## Related API endpoints if applicable
- `GET /privacy`
- `GET /terms`
- `POST /api/*`

## Related templates if applicable
- `docs/integration-map.md`
- `schemas/*.schema.json`
