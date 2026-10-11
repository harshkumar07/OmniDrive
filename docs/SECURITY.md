# OmniDrive Security Baseline

**Status:** Requirements for implementation; not a certification that the application is already secure.

## Security invariant

A request is allowed only when the authenticated OmniDrive user owns the connected Google account/resource, or a future, explicitly implemented sharing grant authorizes that exact recipient, resource, and action—and Google Drive's own permissions also allow the operation. The MVP has no sharing feature, so only the owner path is permitted.

## Required controls before connecting real accounts

- Use a vetted server-side authentication/session implementation. Secure cookies must be HttpOnly, Secure in production, and configured with an appropriate SameSite policy.
- Bind every connected account to the authenticated user ID. Derive identity from the validated server session, never from a client-supplied user ID.
- Scope every database query and provider operation to the authorized owner. An account ID, file ID, route, or URL is an identifier—not permission.
- Validate OAuth state, callback URI, authorization result, requested scopes, and the provider account identity. Use PKCE where supported by the selected flow.
- Keep Google client secrets, access tokens, and refresh tokens server-side. Encrypt persisted tokens using authenticated encryption and a key stored separately from the database.
- Never expose tokens through browser state, API responses, URLs, analytics, or logs. Redact authorization codes, cookies, and provider error payloads.
- Apply request validation, CSRF/origin protections where applicable, rate limits, timeouts, and bounded provider concurrency.
- Treat cached metadata, search results, quota snapshots, thumbnails, downloads, and upload destinations as protected resources.
- Fail closed when ownership, token status, scopes, or permission checks cannot be confirmed.
- Provide account disconnect/revocation and a data-retention/deletion policy before public release.

## Cross-user tests required

Use two test users, A and B, with separate connected accounts and mock files. Verify that B cannot:

- List or search A's files or accounts.
- Fetch metadata by guessing/copying A's account ID or file ID.
- Preview or download A's files.
- Upload to A's account or alter A's data.
- Read cached metadata or storage snapshots belonging to A.
- Learn private resource names through error messages.

Repeat tests with unauthenticated requests, expired sessions, revoked tokens, insufficient scopes, and invalid/replayed OAuth state. Unauthorized resources should normally return a generic not-found response when revealing existence would leak private information.

## Sharing is deliberately excluded from the MVP

If sharing is approved later, it needs a separate threat model and implementation. The owner must explicitly select a file/folder and verified recipient, choose minimum permissions, confirm the grant, and be able to revoke it. Folder inheritance and Google Drive's effective permissions must be considered. An OmniDrive grant must never bypass Google Drive's permissions or silently change native Drive sharing settings.

## Release gate

Do not connect personal/production Google accounts or advertise production security until the authentication, token encryption, ownership enforcement, cross-user tests, dependency checks, OAuth consent disclosures, and Google policy requirements have been implemented and reviewed.
