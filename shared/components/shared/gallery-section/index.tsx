import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './GallerySection.module.scss';
import { GalleryItem } from '../gallery-item';
import { ImageWithItems } from '@/@types/dataDTO';

interface Props {
  items: ImageWithItems[];
  className?: string;
}

export const GallerySection: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      {items?.map((item) => (
        <GalleryItem
          key={item.id}
          name={item.name}
          items={item.imageItem}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
};
