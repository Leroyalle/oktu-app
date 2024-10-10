import { Container, NewsWrapper, Title } from '@/shared/components/shared';
import { Suspense } from 'react';

export default async function News() {
  return (
    <Container className="px-[10px]">
      <Title text={'Новости'} size="2xl" className={'mt-4 mb-4 pageTitle'} />
      <Suspense>
        <NewsWrapper />
      </Suspense>
    </Container>
  );
}
