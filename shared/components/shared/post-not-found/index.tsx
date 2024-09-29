'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './PostNotFound.module.scss';
import { Button } from '../../ui';
import { Title } from '../title';
import { useRouter } from 'next/navigation';
import { Paragraph } from '../paragraph';
import { Undo2 } from 'lucide-react';

interface Props {
  className?: string;
}

export const PostNotFound: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cn(styles.root, className)}>
      <div>
        <Title text={'Кажется, пост еще не написан...😥'} size={'sm'} />
        <Paragraph text={'Скорее всего администрация уже работает над этим'} />
      </div>
      <Button onClick={() => router.back()}>
        Вернуться назад <Undo2 />
      </Button>
    </div>
  );
};
