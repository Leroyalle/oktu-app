import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './GalleryItem.module.scss';
import Image from 'next/image';
import { ImageItem } from '@prisma/client';

interface Props {
  name: string;
  items: ImageItem[];
  createdAt: Date;
  className?: string;
}

export const GalleryItem: React.FC<Props> = ({ name, items, createdAt, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.wrapper}>
        {items.map((item) => (
          <div key={item.id} className={styles.imageInner}>
            <img src={item.imageUrl} alt={name} width={300} height={300} />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{new Date(createdAt).toLocaleDateString()}</span>
        <span className={styles.name}>
          {name.length > 150 ? name.substring(0, 150) + '...' : name}
        </span>
      </div>
    </div>
  );
};
