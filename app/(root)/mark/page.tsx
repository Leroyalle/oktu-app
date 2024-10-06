import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  SimilarLinks,
  MarkWrapper,
  Title,
  AnimateBlock,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function AntiCorrPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 23,
    },
  });
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title
          text={'Независимая оценка качества оказания услуг'}
          size="2xl"
          className={'mt-4 mb-12 pageTitle'}
        />
        <MarkWrapper files={files} />
        <div className="pb-[80px] max-w-[1200px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
