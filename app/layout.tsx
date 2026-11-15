import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dhruvi Upadhyay | Software Developer Portfolio',
  description: 'Portfolio of Dhruvi Upadhyay — B.Tech Information Technology student, full-stack developer and EIL Web Developer Intern.',
  keywords: ['Dhruvi Upadhyay', 'B.Tech IT', 'Software Developer', 'Web Developer', 'Next.js', 'React'],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
