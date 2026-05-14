# VS Code Setup

This repo includes shared VS Code recommendations in `.vscode/`.

## Recommended extensions

Install recommended workspace extensions when prompted, especially:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitHub Actions
- Markdown linting
- YAML support
- PowerShell

## Terminal

Use the integrated terminal.

Recommended shells:

- Windows: PowerShell 7+
- macOS/Linux: bash or zsh

Do not add personal machine paths to workspace settings.

## Common tasks

Use **Terminal > Run Task** for:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- PowerShell healthcheck
- Bash healthcheck

## Copilot workflow

Before using Copilot Chat, open these files in context:

- `README.md`
- `AGENTS.md`
- `GITHUB_COPILOT.md`
- Target files you plan to change

Ask Copilot for narrow changes. Do not let it rewrite architecture unless that is the explicit task.

## Formatting

Project settings are intentionally moderate:

- Format on save enabled.
- TypeScript preferences set for clean imports.
- Markdown word wrap enabled.
- Tailwind class completions supported.

## Workspace hygiene

Do not commit:

- Editor-specific personal settings.
- Local paths.
- `.env.local`.
- Scratch financial files.
- Real client records.

## Suggested workflow

1. Pull latest `main`.
2. Create a scoped branch.
3. Run `npm install` if needed.
4. Run healthcheck.
5. Make the smallest useful change.
6. Run lint/build when relevant.
7. Open PR with security/compliance checklist complete.
