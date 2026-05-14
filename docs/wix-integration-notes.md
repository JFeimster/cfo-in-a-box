# Wix Integration Notes

Wix should be used as the marketing and conversion shell. Vercel should host the product app, calculators, GPT Actions API, OpenAPI schema, and future widgets.

Recommended setup:

- `distilledfunding.com` on Wix
- `api.distilledfunding.com` or `cfo-in-a-box.vercel.app` on Vercel

Avoid breaking the main Wix domain. Use a subdomain for the API/product app.

Wix may be useful for:

- Private group
- Pricing plans
- Events
- Bookings
- CRM/member workflows

Vercel is cleaner for:

- GPT Actions
- Calculators
- API routes
- OpenAPI schema
- Future widgets

Do not use Wix as the calculator/API backend unless a Wix-native member, CMS, booking, or pricing-plan workflow requires it.
