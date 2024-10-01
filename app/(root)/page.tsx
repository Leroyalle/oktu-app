import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  Departments,
  QuoteBlock,
  MainSlider,
  TitlesBlock,
} from '@/shared/components/shared';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export const revalidate = 40;
export default async function Home() {
  const mainSliderData = await prisma.mainSliderData.findMany({
    include: {
      link: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  const departments = await prisma.department.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  const quote = await prisma.quote.findFirst({
    include: {
      link: true,
    },
  });
  const titles = await prisma.titlesSection.findMany();

  return (
    <Container>
      <MainSlider items={mainSliderData} />
      <div className="mt-20">
        <QuoteBlock quote={quote} />
      </div>
      <div className="mt-20">
        <Departments items={departments} />
      </div>
      <div className="mt-36 mb-20">
        <TitlesBlock items={titles} />
      </div>
    </Container>
  );
}
