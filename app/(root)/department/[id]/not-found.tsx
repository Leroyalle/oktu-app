import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Container } from '../../../../shared/components/shared/container';
import { PageNotFound } from '@/shared/components/shared';

interface Props {
  className?: string;
}

export default function NotFound({ className }: Props) {
  return (
    <Container className={cn('flex items-center justify-center', className)}>
      <PageNotFound
        title={'Кажется, описание еще не готово...😥'}
        text={'Скорее всего администрация уже работает над этим'}
      />
    </Container>
  );
}
