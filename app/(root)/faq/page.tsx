import { prisma } from '@/prisma/prisma-client';
import { Container, Title, AnimateBlock, Faq } from '@/shared/components/shared';

export const revalidate = 360;
export default async function EnrolleePage() {
  const faq = await prisma.fAQ.findMany();
  return (
    <Container className="px-[10px]">
      <AnimateBlock>
        <Title text={'Часто задаваемые вопросы'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
        <Faq items={faq} className="mb-[80px]" />
      </AnimateBlock>
    </Container>
  );
}
