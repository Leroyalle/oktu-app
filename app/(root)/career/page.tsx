import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  SimilarLinks,
  Title,
  AnimateBlock,
  CareerWrapper,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function CareerPage() {
  const manyFiles = await prisma.file.findMany({
    where: {
      category: {
        in: [28, 29, 30],
      },
    },
  });
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title text={'Центр карьеры'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
        <CareerWrapper files={manyFiles} />
        <div className="pb-[80px] max-w-[1200px] mt-[80px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
