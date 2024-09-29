import { prisma } from '@/prisma/prisma-client';
import { Container, PostWrapper, Title } from '@/shared/components/shared';
import { notFound } from 'next/navigation';

export default async function PostPage({ params: { id } }: { params: { id: number } }) {
  const data = await prisma.post.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      postItem: true,
    },
  });
  if (!data || !data.postItem) {
    return notFound();
  }

  return (
    <Container>
      <PostWrapper item={data} />
    </Container>
  );
}
