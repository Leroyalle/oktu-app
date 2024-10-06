import { prisma } from '@/prisma/prisma-client';
import {
  AnimateBlock,
  Container,
  SimilarLinks,
  StudentsWrapper,
  Title,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function StudentsPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 14,
    },
  });
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title text={'Студентам'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
        <StudentsWrapper files={files} />
        <div className="pb-[80px] max-w-[1200px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
