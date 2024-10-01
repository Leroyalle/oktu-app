import { prisma } from '@/prisma/prisma-client';
import {
  DirectionTable as Direction,
  Container,
  Title,
  SimilarLinks,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function DirectionPage() {
  const items = await prisma.direction.findMany();
  return (
    <Container className="px-[10px]">
      <Title text={'Руководство'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
      <div className="px-[10px] pb-[40px] ">
        <Direction items={items} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8 pageSubtitle" />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
