import { ContactsBlock, Container, Title } from '@/shared/components/shared';

export default async function ContactsPage() {
  return (
    // TODO: паддинг при уменьшении ширины
    <Container>
      <Title text={'Контакты ОКТУ'} size="2xl" className={'mt-4 mb-8'} />
      <ContactsBlock />
    </Container>
  );
}
