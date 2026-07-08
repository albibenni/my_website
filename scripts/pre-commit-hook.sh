#!/usr/bin/env bash
# Pre-commit hook: format, lint and typecheck before every commit.
# Prettier fixes are re-staged automatically; a lint or typecheck
# failure aborts the commit.
set -euo pipefail

if git diff --cached --diff-filter=ACMR --quiet; then
  exit 0
fi

pnpm run format
pnpm run lint
pnpm run check

git diff --cached --name-only --diff-filter=ACMR -z |
  xargs -0 git add
