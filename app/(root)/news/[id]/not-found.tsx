import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Container } from '../../../../shared/components/shared/container';
import { PostNotFound } from '@/shared/components/shared';

interface Props {
  className?: string;
}
// FIXME: ПРИ ПЕРЕХОДЕ НАЗАД ПРИХОДИТСЯ ЗАНОВО СКРОЛЛИТЬ}
export default function NotFound({ className }: Props) {
  return (
    <Container className={cn('flex items-center justify-center', className)}>
      <PostNotFound />
    </Container>
  );
}
