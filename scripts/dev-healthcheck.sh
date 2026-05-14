#!/usr/bin/env bash
set -u

HAS_FAILURE=0

pass() { printf '\033[0;32m[PASS]\033[0m %s\n' "$1"; }
warn() { printf '\033[0;33m[WARN]\033[0m %s\n' "$1"; }
fail() { printf '\033[0;31m[FAIL]\033[0m %s\n' "$1"; HAS_FAILURE=1; }

echo "CFO-in-a-Box developer healthcheck"
echo "------------------------------------"

if command -v node >/dev/null 2>&1; then
  pass "Node installed: $(node --version)"
else
  fail "Node is not installed or not on PATH."
fi

if command -v npm >/dev/null 2>&1; then
  pass "npm installed: $(npm --version)"
else
  fail "npm is not installed or not on PATH."
fi

if [ -f "package.json" ]; then
  pass "package.json exists."
else
  fail "package.json missing. Run from repo root."
fi

if [ -d "app" ]; then
  pass "app directory exists."
else
  fail "app directory missing."
fi

if [ -d "app/api" ]; then
  pass "app/api directory exists."
else
  warn "app/api directory missing. This is expected only before API routes exist."
fi

if [ -f "openapi.yaml" ]; then
  pass "openapi.yaml exists."
else
  warn "openapi.yaml missing. GPT Actions may not be configured yet."
fi

if [ -f ".env.local" ]; then
  warn ".env.local exists locally. Confirm it is ignored and never committed."
else
  warn ".env.local not found. This is okay for the no-auth MVP."
fi

TRACKED_FILES=""
if command -v git >/dev/null 2>&1; then
  TRACKED_FILES="$(git ls-files 2>/dev/null || true)"
  pass "Git is available and tracked files were scanned."
else
  warn "Git command not available; skipping tracked-file scan."
fi

if [ -n "$TRACKED_FILES" ]; then
  printf "%s\n" "$TRACKED_FILES" | grep -Ei '(^|/)\.env$|(^|/)\.env\.local$|(^|/)\.env\.production$|secret|secrets|credential|credentials|private-key|id_rsa|bank-statement|tax-return|payroll-export' | while read -r match; do
    warn "Review tracked file with sensitive-looking name: $match"
  done
fi

if [ -d "node_modules" ]; then
  pass "node_modules exists."
else
  warn "node_modules missing. Run npm install before local development."
fi

echo "------------------------------------"
if [ "$HAS_FAILURE" -ne 0 ]; then
  fail "Healthcheck completed with failures."
  exit 1
fi

pass "Healthcheck completed. Review warnings above before committing."
exit 0
