import './globals.scss';
import { Nunito, Inter } from 'next/font/google';
import { Providers } from '@/shared/components/shared';
import Head from 'next/head';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link data-rh="true" rel="icon" href="/assets/logo.jpg" />
      </Head>
      <body className={`${nunito.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
