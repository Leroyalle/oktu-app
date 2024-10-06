import { prisma } from '@/prisma/prisma-client';
import {
  AnimateBlock,
  Container,
  SimilarLinks,
  SscWrapper,
  Title,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function SscPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 21,
    },
  });
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title
          text={'Студенческий спортивный клуб'}
          size="2xl"
          className={'mt-4 mb-12 pageTitle'}
        />
        <SscWrapper files={files} />
        <div className="pb-[80px] max-w-[1200px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
