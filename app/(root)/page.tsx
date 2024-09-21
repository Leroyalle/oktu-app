import {
  Container,
  Departments,
  QuoteBlock,
  MainSlider,
  TitlesBlock,
} from '@/shared/components/shared';
import { useData } from '@/shared/hooks';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export default async function Home() {
  const { mainSliderData, departments, quote, titles } = await useData();

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
      {/* <div className="pb-[50%]"/> */}
    </Container>
  );
}
