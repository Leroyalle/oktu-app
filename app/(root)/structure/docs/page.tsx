import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  Title,
  SimilarLinks,
  EducationInfoBlock,
  DocsInfoBlock,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function DocsPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 3,
    },
  });
  const otherFiles = await prisma.file.findMany({
    where: {
      category: 0,
    },
  });
  return (
    <Container>
      <Title text={'Документы'} size="2xl" className={'mt-4 mb-12'} />
      <div className="px-[10px] pb-[40px]">
        <DocsInfoBlock files={files} otherFiles={otherFiles} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8" />
      <div className="px-[10px] pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
