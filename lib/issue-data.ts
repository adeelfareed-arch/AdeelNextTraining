/** Small in-memory dataset for the starter demo. Replace with Prisma queries for persistence. */
export type IssueStatus = 'OPEN' | 'IN_PROGRESS' | 'CLOSED';
export type Issue = { id: number; title: string; description: string; status: IssueStatus };

export const demoIssues: Issue[] = [
  { id: 1, title: 'Document the App Router', description: 'Explain how folders, pages, and layouts map to routes.', status: 'OPEN' },
  { id: 2, title: 'Add persistent storage', description: 'Connect the issue list to a database using Prisma.', status: 'IN_PROGRESS' },
  { id: 3, title: 'Review accessibility', description: 'Check semantic HTML, keyboard navigation, and labels.', status: 'CLOSED' }
];
