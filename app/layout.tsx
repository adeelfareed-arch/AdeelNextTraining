import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adeel Next Part 1',
  description: 'A personal Next.js and TypeScript learning playground by Adeel.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="shell">
    <nav className="nav" aria-label="Main navigation">
      <Link className="brand" href="/">Adeel Next Part 1</Link>
      <Link href="/issues">Issues demo</Link>
      <a href="/api/issues">API example</a>
    </nav>
    {children}
  </div></body></html>;
}
