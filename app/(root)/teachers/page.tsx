import { prisma } from '@/prisma/prisma-client';
import { Container, SimilarLinks, TeachersWrapper, Title } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function TeachersPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 16,
    },
  });
  return (
    <Container className="px-[10px]">
      <Title text={'Педагогам'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
      <TeachersWrapper files={files} />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
