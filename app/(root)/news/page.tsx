import { Container, NewsWrapper, Title } from '@/shared/components/shared';

export default async function News() {
  return (
    <Container>
      <Title text={'Новости'} size="2xl" className={'mt-4 mb-12 ml-[10px]'} />
      {/* TODO: добавить поиск */}
      <NewsWrapper />
    </Container>
  );
}
