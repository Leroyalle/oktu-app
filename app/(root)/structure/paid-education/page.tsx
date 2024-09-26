import { prisma } from '@/prisma/prisma-client';
import { Container, Title, SimilarLinks, PaidEducationInfoBlock } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function PaidEducationPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 7,
    },
  });
  const tableItems = await prisma.paidEducation.findMany();

  return (
    <Container>
      <Title text={'Платные образовательные услуги'} size="2xl" className={'mt-4 mb-12'} />
      <div className="px-[10px] pb-[40px]">
        <PaidEducationInfoBlock items={tableItems} files={files} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8" />
      <div className="px-[10px] pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
