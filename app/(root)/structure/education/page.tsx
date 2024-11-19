import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  Title,
  SimilarLinks,
  EducationInfoBlock,
  AnimateBlock,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function EducationPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 4,
    },
  });

  const manyFiles = await prisma.file.findMany({
    where: {
      category: {
        in: [4, 26, 27],
      },
    },
  });

  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title
          text={'Сведения об образовательных программах, реализуемых в ГАПОУ КО "ОКТУ"'}
          size="2xl"
          className={'mt-4 mb-12 pageTitle'}
        />
        <div className="pl-[15px] pb-[40px]">
          <EducationInfoBlock files={manyFiles} />
        </div>
        <Title text={'Другие сведения'} size={'xl'} className="mb-8 pageSubtitle" />
        <div className="pb-[80px] max-w-[1200px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
