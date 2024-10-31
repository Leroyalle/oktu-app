import { prisma } from '@/prisma/prisma-client';
import { AnimateBlock, Container, PostWrapper } from '@/shared/components/shared';
import { notFound } from 'next/navigation';

export default async function PostPage({ params: { id } }: { params: { id: number } }) {
  const data = await prisma.post.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      postItem: {
        include: {
          postImageCarousel: true,
        },
      },
    },
  });

  if (!data || !data.postItem) {
    return notFound();
  }

  return (
    <Container>
      <AnimateBlock>
        <PostWrapper item={data} />
      </AnimateBlock>
    </Container>
  );
}
