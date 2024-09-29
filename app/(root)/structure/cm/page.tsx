import { prisma } from '@/prisma/prisma-client';
import { Container, Title, SimilarLinks, CmInfoBlock } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function CmPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 2,
    },
  });
  return (
    <Container className="px-[10px]">
      <Title
        text={'Структура и органы управления образовательной организацией'}
        size="2xl"
        className={'mt-4 mb-12 pageTitle'}
      />
      <div className="pb-[40px]">
        <CmInfoBlock files={files} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8 pageSubtitle" />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
