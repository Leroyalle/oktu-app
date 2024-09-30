import { Container, SimilarLinks, Title } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function StructurePage() {
  return (
    <Container className="px-[10px]">
      <Title
        text={'Сведения об образовательной организации'}
        size="2xl"
        className={'mt-4 mb-12 pageTitle'}
      />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
