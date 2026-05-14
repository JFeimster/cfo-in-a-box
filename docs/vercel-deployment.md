# Vercel Deployment

CFO-in-a-Box deploys as a standard Next.js App Router project on Vercel.

## Deployment assumptions

- Repo: `JFeimster/cfo-in-a-box`
- Framework preset: Next.js
- Build command: `npm run build`
- Output: default Next.js output
- API routes: `app/api/`
- No-auth MVP: no required production secrets for v1

## Initial setup

1. Connect the GitHub repo to Vercel.
2. Select the `main` branch for production.
3. Use the Next.js framework preset.
4. Keep default install/build settings unless the repo changes.
5. Deploy.
6. Confirm `/`, `/privacy`, `/terms`, `/api/health`, and the GPT Action routes work.

## Environment variables

The no-auth MVP should not require environment variables.

For future integrations:

- Add secrets only in Vercel project settings.
- Never commit secrets to GitHub.
- Document variable names, not values.
- Use preview/prod separation where needed.

## GPT Actions deployment path

After Vercel deploys:

1. Copy the production domain.
2. Update `openapi.yaml` server URL only after the deployment target is approved.
3. Import `openapi.yaml` into the Custom GPT Actions builder.
4. Confirm authentication is set to none for v1.
5. Test each action from the GPT builder.
6. Confirm privacy policy URL points to `/privacy`.

## Vercel-safe practices

- Do not add server-side secrets unless an integration explicitly needs them.
- Do not log user financial inputs unnecessarily.
- Keep no-auth actions limited to user-provided summary inputs.
- Avoid writing sensitive data to persistent storage by default.
- Use synthetic data in examples and previews.

## Deployment validation checklist

After deployment, test:

```text
/
/privacy
/terms
/api/health
/api/cfo-in-a-box/calculate-cash-runway
/api/cfo-in-a-box/score-funding-readiness
/api/cfo-in-a-box/generate-cash-flow-forecast
/api/cfo-in-a-box/detect-expense-leaks
```

For POST routes, test with valid JSON payloads.

## Troubleshooting

### Build fails

Run locally:

```bash
npm install
npm run lint
npm run build
```

### API route works locally but not on Vercel

Check:

- Route path under `app/api/`.
- Runtime assumptions.
- Environment variables.
- Build output logs.
- OpenAPI path mismatch.

### GPT Action fails

Check:

- `openapi.yaml` server URL.
- Path and operationId.
- Request body schema.
- Response shape.
- Privacy URL.
- Auth set to none for v1.
