import { prisma } from '@/prisma/prisma-client';
import { Container, SimilarLinks, AntiCorrWrapper, Title } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function AntiCorrPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 22,
    },
  });
  return (
    <Container className="px-[10px]">
      <Title text={'Противодействие коррупции'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
      <AntiCorrWrapper files={files} />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
