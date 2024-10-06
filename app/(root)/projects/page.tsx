import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  SimilarLinks,
  AntiCorrWrapper,
  Title,
  ProjectsWrapper,
  AnimateBlock,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function ProjectsPage() {
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title text={'Все проекты'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
        <ProjectsWrapper className="my-8" />
        <div className="pb-[80px] max-w-[1200px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
