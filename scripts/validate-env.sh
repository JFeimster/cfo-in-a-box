#!/usr/bin/env bash
set -u

pass() { printf '\033[0;32m[PASS]\033[0m %s\n' "$1"; }
warn() { printf '\033[0;33m[WARN]\033[0m %s\n' "$1"; }

echo "CFO-in-a-Box environment validation"
echo "-----------------------------------"

# No-auth MVP currently requires no production secrets.
REQUIRED=()

# Future placeholders. Keep names documented here without requiring them yet.
FUTURE_OPTIONAL=(
  "NEXT_PUBLIC_SITE_URL"
  "OPENAI_API_KEY"
  "HUBSPOT_ACCESS_TOKEN"
  "GOOGLE_CLIENT_ID"
  "GOOGLE_CLIENT_SECRET"
  "NOTION_API_KEY"
  "N8N_WEBHOOK_URL"
)

if [ "${#REQUIRED[@]}" -eq 0 ]; then
  pass "No required environment variables for the no-auth MVP."
fi

for name in "${REQUIRED[@]}"; do
  if [ -n "${!name:-}" ]; then
    pass "$name is set."
  else
    warn "$name is missing."
  fi
done

echo "Future optional variables are not required and values will not be printed:"
for name in "${FUTURE_OPTIONAL[@]}"; do
  if [ -n "${!name:-}" ]; then
    warn "$name is set in this shell. Value intentionally hidden. Confirm it is not committed."
  else
    pass "$name not set."
  fi
done

echo "-----------------------------------"
pass "Environment validation complete."
exit 0
