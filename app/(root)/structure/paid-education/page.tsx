import { prisma } from '@/prisma/prisma-client';
import { Container, Title, SimilarLinks, PaidEducationInfoBlock } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function PaidEducationPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 7,
    },
  });
  const tableItems = await prisma.paidEducation.findMany();

  return (
    <Container className="px-[10px] pageTitle">
      <Title
        text={'Платные образовательные услуги'}
        size="2xl"
        className={'mt-4 mb-12 pageTitle'}
      />
      <div className="pb-[40px]">
        <PaidEducationInfoBlock items={tableItems} files={files} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8 pageSubtitle" />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
