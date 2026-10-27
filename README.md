# Adeel Next Part 1

A personal, independently written Next.js learning playground. It is inspired by the topics covered in the public [Next.js course playground](https://github.com/mosh-hamedani/next-course), but this repository is a small original starter rather than a disguised copy of that source.

## Stack
- Next.js App Router and React
- TypeScript
- Zod request validation
- Prisma schema as a starting point for persistence

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Try `/issues`, `/issues/1`, and `/api/issues`.

## API smoke test

```bash
curl http://localhost:3000/api/issues
curl -X POST http://localhost:3000/api/issues \
  -H 'Content-Type: application/json' \
  -d '{"title":"Add a feature","description":"A sufficiently detailed description."}'
```

The POST route validates input but does not persist it yet. That is intentional: the Prisma schema is supplied as the next exercise, not as a claim that a database is already connected.

## Suggested next steps
1. Configure a PostgreSQL database and `DATABASE_URL` in `.env`.
2. Run `npx prisma generate` and `npx prisma db push`.
3. Add a Prisma client helper and replace the demo array with database queries.
4. Add a form with client-side validation and useful error messages.
5. Add authentication only after configuring OAuth/credentials and session secrets.
6. Add tests, accessibility checks, and deployment configuration.

## Learning notes
See [`notes/COURSE_NOTES.md`](notes/COURSE_NOTES.md) for topic summaries, concepts, and exercises. These are study notes, not a transcript of the paid course.
