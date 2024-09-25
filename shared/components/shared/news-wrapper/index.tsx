'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './NewsWrapper.module.scss';
import { NewsSection } from '../news-section';
import { useNewsData } from '@/shared/hooks';
import { useInView } from 'react-intersection-observer';
import { Api } from '@/shared/services/api-client';
import { useNewsStore } from '@/shared/store';
import { Skeleton } from '../../ui';

interface Props {
  className?: string;
}

export const NewsWrapper: React.FC<Props> = ({ className }) => {
  const { newsStore, ref } = useNewsData();

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
      {/* TODO: анимация при загрузке */}
      <div ref={ref} />
    </section>
  );
};
