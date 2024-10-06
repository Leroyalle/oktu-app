import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  Title,
  SimilarLinks,
  ObjectsInfoBlock,
  AnimateBlock,
} from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function EducationPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 5,
    },
  });
  return (
    <Container className="px-[10px] pageTitle">
      <AnimateBlock>
        <Title
          text={'Материально-техническое обеспечение и оснащенность образовательного процесса. '}
          size="2xl"
          className={'mt-4 mb-12 pageTitle'}
        />
        <div className="pb-[40px]">
          <ObjectsInfoBlock files={files} />
        </div>
        <Title text={'Другие сведения'} size={'xl'} className="mb-8 pageSubtitle" />
        <div className="pb-[80px] max-w-[1200px]">
          <SimilarLinks items={navigationData.bottom[0].links} />
        </div>
      </AnimateBlock>
    </Container>
  );
}
