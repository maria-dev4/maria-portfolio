import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const head = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-head',
  display: 'swap',
});

export const metadata = {
  title: 'Maria | Full Stack Developer (MERN)',
  description:
    'Portfolio of Maria, a MERN stack developer in training who builds responsive, real-data web apps with Next.js and React.',
  openGraph: {
    title: 'Maria | Full Stack Developer (MERN)',
    description:
      'Live projects, skills and contact details of Maria, a MERN stack developer in training.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>{children}</body>
    </html>
  );
}
