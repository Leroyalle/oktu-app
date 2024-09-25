import { prisma } from '@/prisma/prisma-client';
import { Container, Title } from '@/shared/components/shared';
import { notFound } from 'next/navigation';

export default async function NewsPage({ params: { id } }: { params: { id: number } }) {
  const data = await prisma.post.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      postItem: true,
    },
  });
  if (!data) {
    return notFound();
  }
  return (
    <Container>
      <Title text={data.name} size="2xl" className={'mt-4 mb-12'} />
    </Container>
  );
}
