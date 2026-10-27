import Link from 'next/link';

export default function HomePage() {
  return <main>
    <section className="panel">
      <span className="pill">Personal learning project</span>
      <h1>Adeel&apos;s Next.js playground</h1>
      <p className="muted">A clean-room learning implementation for practising the core ideas behind full-stack Next.js: App Router, layouts, server components, route handlers, data modelling, validation, authentication concepts, and deployment.</p>
      <p><Link href="/issues">Open the issue tracker demo →</Link></p>
    </section>
    <section className="panel"><h2>Learning goals</h2><ul>
      <li>Understand file-system routing and shared layouts.</li>
      <li>Separate server-rendered UI from interactive client UI.</li>
      <li>Design a small API and validate incoming data.</li>
      <li>Connect a data model using Prisma when a database is configured.</li>
      <li>Document decisions and extend the starter with original features.</li>
    </ul></section>
  </main>;
}
