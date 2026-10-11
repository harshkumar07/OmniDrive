# OmniDrive

**One place to manage your Google Drive accounts.**

OmniDrive is a web application concept for browsing and managing files across multiple separately authorized Google Drive accounts. Google Drive remains the source of truth for files.

> **Current status:** Initial UI scaffold. The dashboard uses mock data. Google OAuth, database persistence, file operations, and production security controls are not implemented yet.

## Product and security principles

- Connected Google accounts are private to the OmniDrive user who connected them.
- No user can access another user's accounts or files by guessing an ID or URL.
- The MVP does not include user-to-user file sharing.
- Any future sharing must require an explicit owner action for a specific file/folder and recipient, with narrow permissions and revocation.
- Google Drive's own permissions and API policies always apply.
- A combined storage summary is informational; it does not merge account quotas or authorize quota circumvention.
- OAuth secrets and tokens must remain server-side and must never be committed or sent to the browser.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the system architecture, data model, trust boundaries, security rules, and implementation plan.

## Tech stack

- Next.js App Router + TypeScript
- React
- PostgreSQL + Drizzle ORM (planned; not connected yet)
- Google Drive API + OAuth 2.0 (planned; not connected yet)
- Zod for validation
- ESLint + TypeScript checks

## Local development

Requirements: Node.js supported by the selected Next.js release and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The first dashboard is intentionally backed by static mock data, so no Google credentials or database are required to run the UI.

## Available checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Roadmap

1. Establish the UI and application foundation.
2. Add validated server-side configuration and PostgreSQL schema/migrations.
3. Implement OmniDrive authentication and strict per-user authorization.
4. Implement one Google Drive connection with secure OAuth state handling and encrypted token persistence.
5. Add multiple connections, account management, and provider error states.
6. Add paginated file browsing, search, and per-account storage reporting.
7. Add uploads only to a user-selected connected account.
8. Complete cross-user isolation, OAuth, and end-to-end tests before deployment.

Do not describe the app as production-secure until the controls and tests above have actually been implemented and verified.