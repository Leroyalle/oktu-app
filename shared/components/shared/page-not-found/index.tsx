'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './PageNotFound.module.scss';
import { Button } from '../../ui';
import { Title } from '../title';
import { useRouter } from 'next/navigation';
import { Paragraph } from '../paragraph';
import { Undo2 } from 'lucide-react';

interface Props {
  title: string;
  text: string;
  className?: string;
}

export const PageNotFound: React.FC<Props> = ({ title, text, className }) => {
  const router = useRouter();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cn(styles.root, className)}>
      <div>
        <Title text={title} size={'sm'} />
        <Paragraph text={text} />
      </div>
      <Button onClick={() => router.back()}>
        Вернуться назад <Undo2 />
      </Button>
    </div>
  );
};
