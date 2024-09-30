import React, { Suspense } from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './NewsContentWrapper.module.scss';
import { NewsSection } from '../news-section';
import { useNewsData } from '@/shared/hooks';
import { Skeleton } from '../../ui';
import { PaginationButtons } from '../pagination-buttons';
import { Tag } from '@prisma/client';

interface Props {
  className?: string;
}

export const NewsContentWrapper: React.FC<Props> = ({ className }) => {
  const { newsStore, onChangePage } = useNewsData();

  if (newsStore.loading) {
    return (
      <div className={styles.root}>
        <div className={cn(styles.skeletonWrapper, className)}>
          {...Array(6)
            .fill(0)
            .map((_, i) => <Skeleton key={i} className={styles.skeleton} />)}
        </div>
      </div>
    );
  }

  return (
    <section className={cn(styles.root, className)}>
      <Suspense>
        <NewsSection items={newsStore.items} loading={newsStore.loading} />
      </Suspense>
      {newsStore.totalPages > 1 && (
        <div className="mt-[50px]">
          <PaginationButtons
            page={newsStore.page}
            totalPage={newsStore.totalPages}
            disabledPrev={newsStore.page <= 1}
            disabledNext={newsStore.page >= newsStore.totalPages}
            onClick={onChangePage}
          />
        </div>
      )}
    </section>
  );
};
