import { prisma } from '@/prisma/prisma-client';
import { Container, StudentsInfoBlock, Title } from '@/shared/components/shared';

export default async function Students() {
  const files = await prisma.file.findMany({
    where: {
      category: 14,
    },
  });

  return (
    <Container className="px-[10px]">
      <Title text={'Студентам'} size={'2xl'} className="pageTitle" />
      <StudentsInfoBlock files={files} />
    </Container>
  );
}
