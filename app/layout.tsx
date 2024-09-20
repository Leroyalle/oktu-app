import './globals.css';
import { Nunito, Inter } from 'next/font/google';
import { Providers } from '@/shared/components/shared';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// TODO: добавить метадату в лайаутах
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
