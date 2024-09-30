import { ContactsBlock, Container, Title } from '@/shared/components/shared';

export default async function ContactsPage() {
  return (
    <Container>
      <Title text={'Контакты ОКТУ'} size="2xl" className={'mt-4 mb-8 pageTitle'} />
      <ContactsBlock />
    </Container>
  );
}
