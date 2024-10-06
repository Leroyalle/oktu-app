import { prisma } from '@/prisma/prisma-client';
import { AnimateBlock, ContactUs, Container, DepartmentWrapper } from '@/shared/components/shared';
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
  if (!data || !data.departmentItem) {
    return notFound();
  }
  return (
    <Container>
      <AnimateBlock>
        <DepartmentWrapper item={data} />
        <ContactUs name={data.name} />
      </AnimateBlock>
    </Container>
  );
}
