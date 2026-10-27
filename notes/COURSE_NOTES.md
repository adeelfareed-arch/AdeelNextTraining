# Adeel's Next.js Part 1 — Study Notes

These notes are a practical topic map for learning full-stack Next.js. They summarize general framework concepts; they are not a verbatim reproduction of course material.

## 1. What Next.js adds to React
React provides a component model for user interfaces. Next.js adds routing conventions, server rendering, server-side data access patterns, route handlers, build optimizations, and deployment conventions. Pick the rendering strategy that fits the data and user experience rather than forcing every page into one mode.

## 2. App Router and project structure
- `app/layout.tsx` defines shared UI such as navigation and metadata.
- `app/page.tsx` maps to `/`.
- `app/issues/page.tsx` maps to `/issues`.
- `app/issues/[id]/page.tsx` maps a dynamic URL segment to a page.
- `app/api/issues/route.ts` defines HTTP handlers for `/api/issues`.
- Shared code belongs in ordinary folders such as `lib/` and `components/`.

**Exercise:** add `/about`, then add a shared component and use it on both `/` and `/issues`.

## 3. Server and Client Components
App Router components are Server Components by default. They are useful for rendering data and reducing browser JavaScript. A Client Component uses the `"use client"` directive when it needs state, event handlers, effects, or browser-only APIs. Keep the client boundary as small as practical. Never put secrets in code sent to the browser.

**Exercise:** create a client-side filter for issues, keeping the initial list rendering on the server.

## 4. Routing, links, and not-found states
Use Next.js `Link` for internal navigation. Dynamic route segments should be validated before using them as identifiers. Use `notFound()` when a requested record doesn't exist. Add loading and error UI for pages that depend on slower data sources.

**Exercise:** try `/issues/999` and confirm that it returns a not-found page. Add a status filter through query parameters.

## 5. Styling
Global CSS is appropriate for resets, tokens, and app-wide defaults. CSS Modules keep styles scoped to a component. Utility CSS frameworks can speed up consistent layout, but don't replace understanding the CSS box model, responsive layout, and accessible focus states.

**Exercise:** make the issue list usable on a narrow mobile screen and add a visible keyboard-focus style.

## 6. Data fetching, caching, and rendering
Decide whether data can be static, should be refreshed periodically, or must be read dynamically for each request. Cache behavior depends on the Next.js version and the fetch/API options in use; verify it against the version in `package.json`. Avoid assuming every server fetch is either always cached or always fresh.

**Exercise:** document the freshness requirement for each data source before choosing caching behavior.

## 7. Route handlers and API design
A route handler exports methods such as `GET` and `POST`. Return meaningful HTTP status codes and JSON shapes. Validate request bodies at the boundary, reject malformed input, and do not trust client-provided IDs or permissions. The included POST endpoint uses Zod and intentionally does not claim to persist records.

**Exercise:** add `PATCH` and `DELETE` only after defining ownership, validation, and persistence rules.

## 8. Database integration with Prisma
The schema in `prisma/schema.prisma` describes an `Issue` model and status enum. A schema alone does not create a running database. Set `DATABASE_URL`, generate the Prisma client, and apply migrations or push the schema to a development database. Use migrations for controlled changes in shared environments.

**Exercise:** replace the in-memory demo list with Prisma queries and handle database errors safely.

## 9. Forms and validation
Validate on the client to give fast feedback and on the server to enforce correctness. Client validation is for user experience, not security. Display field-level errors, preserve valid user input after an error, disable duplicate submissions when appropriate, and report success only after the server confirms it.

**Exercise:** build a create-issue form that reuses the Zod constraints and displays validation messages.

## 10. Authentication and authorization
Authentication answers “who is this user?” Authorization answers “may this user perform this action?” Protect server-side data access and mutations, not merely links or UI components. Store secrets in environment variables, configure trusted redirect URLs, and never commit tokens or `.env` files. OAuth and credentials flows require provider configuration and careful session handling.

**Exercise:** write down the access rules for viewing, creating, editing, and deleting issues before implementing login.

## 11. File uploads and email
For uploads, decide allowed types, size limits, storage destination, and whether uploaded content is public. Prefer direct-to-storage upload flows where suitable and validate upload signatures/metadata server-side. For email, separate reusable templates from delivery logic and use environment variables for provider credentials. Never expose private API keys in client components.

**Exercise:** write a threat checklist for a hypothetical attachment upload before implementing it.

## 12. Performance and SEO
Use meaningful metadata, descriptive page titles, optimized images, and semantic HTML. Avoid shipping unnecessary client JavaScript. Measure performance before optimizing; large bundles, waterfalls, and unbounded queries are common causes of slow pages.

**Exercise:** inspect the production build and add metadata to the issue detail route.

## 13. Deployment and troubleshooting
A production deployment needs a reproducible install/build, correctly configured environment variables, a reachable database, and a plan for schema changes. Test with a production build locally. Read the first meaningful error in the terminal; later errors may be consequences of the first failure.

**Exercise:** create a deployment checklist and record the exact fix for each issue you encounter.

## 14. Personal progress log
For each session, record:
- What feature I implemented
- What concept it demonstrates
- One bug or design decision I worked through
- One thing I can explain without looking at the notes
- Next task

This log should reflect actual work completed, not simulated historical commits.
