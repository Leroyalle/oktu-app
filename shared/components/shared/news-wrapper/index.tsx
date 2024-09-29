'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './NewsWrapper.module.scss';
import { NewsSection } from '../news-section';
import { useNewsData } from '@/shared/hooks';
import { useInView } from 'react-intersection-observer';
import { Api } from '@/shared/services/api-client';
import { useNewsStore } from '@/shared/store';
import { Button, Skeleton } from '../../ui';
import { useRouter } from 'next/navigation';
import { PaginationButtons } from '../pagination-buttons';

interface Props {
  className?: string;
}

export const NewsWrapper: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { newsStore, onChangePage, page } = useNewsData();

  if (newsStore.loading) {
    return (
      <div className={cn(styles.skeletonWrapper, className)}>
        {...Array(6)
          .fill(0)
          .map((_, i) => <Skeleton key={i} className={styles.skeleton} />)}
      </div>
    );
  }

  return (
    <section className={cn(styles.root, className)}>
      <NewsSection items={newsStore.items} loading={newsStore.loading} />

      <PaginationButtons
        disabledPrev={page <= 1}
        disabledNext={page >= newsStore.totalPages}
        onClick={onChangePage}
      />
    </section>
  );
};
