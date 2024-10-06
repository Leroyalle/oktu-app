import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  Title,
  SimilarLinks,
  TechStaffTable,
  AnimateBlock,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function StaffPage() {
  const items = await prisma.teachStaff.findMany();
  const files = await prisma.file.findMany({
    where: {
      category: 25,
    },
  });
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title text={'Педагогический состав'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
        <div className="pb-[40px] max-w-[1200px]">
          <TechStaffTable files={files} items={items} />
        </div>
        <Title text={'Другие сведения'} size={'xl'} className="mb-8 pageSubtitle" />
        <div className="pb-[80px] max-w-[1200px] ">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
