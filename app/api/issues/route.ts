import { NextResponse } from 'next/server';
import { demoIssues } from '@/lib/issue-data';
import { z } from 'zod';

const newIssueSchema = z.object({
  title: z.string().trim().min(3).max(120),
  description: z.string().trim().min(5).max(2000)
});

export async function GET() {
  return NextResponse.json({ data: demoIssues, count: demoIssues.length });
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = newIssueSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid issue data', details: parsed.error.flatten() }, { status: 400 });
  }
  // This starter validates requests but intentionally avoids pretending in-memory data is persistent.
  return NextResponse.json({ message: 'Validation passed. Connect a database to save this issue.', issue: parsed.data }, { status: 202 });
}
