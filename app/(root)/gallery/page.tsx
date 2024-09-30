import { Container, GalleryWrapper, NewsWrapper, Title } from '@/shared/components/shared';

export default async function Gallery() {
  return (
    <Container>
      <Title text={'Галерея'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
      <GalleryWrapper />
    </Container>
  );
}
