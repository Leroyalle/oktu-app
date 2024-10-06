import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  SimilarLinks,
  ProfessionalsWrapper,
  Title,
  AnimateBlock,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function ProfessionalsPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 18,
    },
  });
  const blocks = await prisma.professionals.findMany();
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title text={'ФП Профессионалитет'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
        <ProfessionalsWrapper files={files} blocks={blocks} />
        <div className="pb-[80px] max-w-[1200px] mt-[80px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
