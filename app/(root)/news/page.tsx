import { prisma } from '@/prisma/prisma-client';
import { Container, Title } from '@/shared/components/shared';
import { NewsWrapper } from '@/shared/components/shared';
import { Suspense } from 'react';

export default async function News() {
  const tags = await prisma.tag.findMany({
    where: {
      posts: {
        some: {},
      },
    },
  });
  return (
    <Container className="px-[10px]">
      <Title text={'Новости'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
      <Suspense>
        <NewsWrapper tags={tags} />
      </Suspense>
    </Container>
  );
}
