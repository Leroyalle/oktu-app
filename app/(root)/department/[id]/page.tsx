import { prisma } from '@/prisma/prisma-client';
import { Container, Title } from '@/shared/components/shared';
import { notFound } from 'next/navigation';

export default async function Department({ params: { id } }: { params: { id: number } }) {
  const data = await prisma.department.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      departmentItem: true,
    },
  });
  if (!data) {
    return notFound();
  }
  return (
    // TODO: добавпить кнопку вернуться назад
    <Container>
      <Title text={data.name} size="2xl" className={'mt-4 mb-12'} />
    </Container>
  );
}
