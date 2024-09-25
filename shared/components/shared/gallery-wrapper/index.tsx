'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './GalleryWrapper.module.scss';
import { GallerySection } from '../gallery-section';
import { useGalleryData } from '@/shared/hooks/use-gallery-data';
import { Skeleton } from '../../ui';

interface Props {
  className?: string;
}

export const GalleryWrapper: React.FC<Props> = ({ className }) => {
  const { galleryStore, ref } = useGalleryData();

  if (galleryStore.loading) {
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
      <GallerySection items={galleryStore.items} />
      <div ref={ref} />
    </section>
  );
};
