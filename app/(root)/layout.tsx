import { Footer, Header } from '@/shared/components/shared';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ГАПОУ КО "ОКТУ"',
  description:
    'Государственное автономное профессиональное образовательное учреждение Калужской области «Обнинский колледж технологий и услуг» (ГАПОУ КО "ОКТУ")',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
