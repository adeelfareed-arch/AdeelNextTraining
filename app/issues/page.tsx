import Link from 'next/link';
import { demoIssues } from '@/lib/issue-data';

export default function IssuesPage() {
  // This is a Server Component: it can render data without shipping this code to the browser.
  return <main><section className="panel">
    <h1>Issue tracker</h1>
    <p className="muted">Sample records are currently in memory, so changes will not persist between restarts.</p>
    {demoIssues.map((issue) => <article key={issue.id} style={{ padding: '14px 0', borderTop: '1px solid #e5e9f0' }}>
      <h2 style={{ marginBottom: 6, fontSize: 18 }}><Link href={`/issues/${issue.id}`}>{issue.title}</Link></h2>
      <p className="muted">{issue.description}</p><span className="pill">{issue.status.replace('_', ' ')}</span>
    </article>)}
  </section></main>;
}
