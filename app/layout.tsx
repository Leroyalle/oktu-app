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
        <link data-rh="true" rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="8k1dAd-CfBfTsAJnPfoILmWQGwyromzRPiIjMVLSRy4"
        />
        <meta name="yandex-verification" content="9778a5f10f6d8fd4" />
      </Head>
      <body className={`${nunito.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
