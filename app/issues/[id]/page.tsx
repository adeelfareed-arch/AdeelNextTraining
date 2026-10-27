import Link from 'next/link';
import { notFound } from 'next/navigation';
import { demoIssues } from '@/lib/issue-data';

export default function IssueDetailPage({ params }: { params: { id: string } }) {
  const issueId = Number(params.id);
  const issue = demoIssues.find((item) => item.id === issueId);
  if (!issue) notFound();
  return <main><section className="panel">
    <p><Link href="/issues">← All issues</Link></p>
    <span className="pill">{issue.status.replace('_', ' ')}</span>
    <h1>{issue.title}</h1><p className="muted">{issue.description}</p>
    <p className="muted">Record #{issue.id}. This dynamic route demonstrates reading a URL segment and selecting the matching record.</p>
  </section></main>;
}
