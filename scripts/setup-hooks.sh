#!/usr/bin/env bash
# Install the repo's git hooks. Runs automatically via the package.json
# "prepare" script on pnpm install; safe to re-run any time.
set -euo pipefail

if [ ! -d .git ]; then
  # e.g. CI checkout without git metadata — nothing to do
  exit 0
fi

cp scripts/pre-commit-hook.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
echo "git hooks installed (pre-commit: format + lint + typecheck)"
