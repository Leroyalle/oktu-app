import { prisma } from '@/prisma/prisma-client';
import { Container, Direction, MainSlider, NavBar } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export default async function Home() {
  const mainSliderData = await prisma.mainSliderData.findMany({
    include: {
      link: true,
    },
  });

  return (
    <Container>
      <div className="my-5 flex justify-center items-center">
        <NavBar items={navigationData.bottom} color={'text-black hover:text-blue-700'} />
      </div>
      {/* TODO: изменить текст внутри слайдера */}
      <MainSlider items={mainSliderData} />
      <div className="mt-8">
        <Direction />
      </div>
      <div className="pb-[50%]"></div>
    </Container>
  );
}
