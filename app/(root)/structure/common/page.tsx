import { prisma } from '@/prisma/prisma-client';
import { Container, Title, SimilarLinks, CommonInfoBlock } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function CommonPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 1,
    },
  });
  return (
    <Container>
      <Title text={'Основные сведения'} size="2xl" className={'mt-4 mb-12'} />
      <div className="px-[10px] pb-[40px]">
        <CommonInfoBlock files={files} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8" />
      <div className="px-[10px] pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
