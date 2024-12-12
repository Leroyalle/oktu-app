import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  Departments,
  QuoteBlock,
  MainSlider,
  TitlesBlock,
  AnimateBlock,
  Faq,
} from '@/shared/components/shared';
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const DynamicGosWidget = dynamic(() => import('../../shared/components/shared/gos-widget'), {
  ssr: false,
});

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
  const faq = await prisma.fAQ.findMany({
    where: {
      onMain: true,
    },
  });

  const lastPost = await prisma.post.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <Container>
      <AnimateBlock>
        <MainSlider items={mainSliderData} lastPost={lastPost} />
        <AnimateBlock className="mt-20">
          <QuoteBlock quote={quote} />
        </AnimateBlock>
        <AnimateBlock className="mt-20">
          <DynamicGosWidget />
        </AnimateBlock>
        <AnimateBlock className="mt-20">
          <Departments items={departments} />
        </AnimateBlock>
        <AnimateBlock className="mt-36 mb-20">
          <TitlesBlock items={titles} />
        </AnimateBlock>
        <AnimateBlock className="mt-36 mb-20">
          <Faq title="Часто задаваемые вопросы" items={faq} hasLink />
        </AnimateBlock>
      </AnimateBlock>
    </Container>
  );
}
