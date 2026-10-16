import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'ICTDF Informa - Edição 01',
  description:
    'Newsletter corporativa do ICTDF com matéria da semana, editorias e comunicados de Gestão de Pessoas.',
  openGraph: {
    title: 'ICTDF Informa - Edição 01',
    description:
      'Newsletter com matéria da semana, editorias e comunicados internos.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICTDF Informa - Edição 01',
    description:
      'Newsletter com matéria da semana, editorias e comunicados internos.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
