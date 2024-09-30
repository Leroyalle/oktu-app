import { prisma } from '@/prisma/prisma-client';
import { Container, SimilarLinks, ParentsWrapper, Title } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function ParentsPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 17,
    },
  });
  return (
    <Container className="px-[10px]">
      <Title text={'Родителям'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
      <ParentsWrapper files={files} />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
