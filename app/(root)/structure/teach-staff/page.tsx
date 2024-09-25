import { prisma } from '@/prisma/prisma-client';
import {
  DirectionTable as Direction,
  Container,
  Title,
  SimilarLinks,
  TechStaffTable,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function StaffPage() {
  const items = await prisma.teachStaff.findMany();
  return (
    <Container>
      <Title text={'Педагогический состав'} size="2xl" className={'mt-4 mb-12'} />
      <div className="px-[10px] pb-[40px] max-w-[1200px]">
        <TechStaffTable items={items} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8" />
      <div className="px-[10px] pb-[80px] max-w-[1200px] ">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
