import { ContactsBlock, Container, Title, AnimateBlock } from '@/shared/components/shared';

export const revalidate = 360;
export default async function ContactsPage() {
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title text={'Контакты ОКТУ'} size="2xl" className={'mt-4 mb-8'} />
        <ContactsBlock />
      </AnimateBlock>
    </Container>
  );
}
