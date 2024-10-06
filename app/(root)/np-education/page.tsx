import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  SimilarLinks,
  NpEducationWrapper,
  Title,
  AnimateBlock,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function NpEducationPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 20,
    },
  });
  const blocks = await prisma.npEducation.findMany();
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title
          text={'Национальный проект "Образование"'}
          size="2xl"
          className={'mt-4 mb-12 pageTitle'}
        />
        <NpEducationWrapper files={files} blocks={blocks} />
        <div className="pb-[80px] max-w-[1200px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
