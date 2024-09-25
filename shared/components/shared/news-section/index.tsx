import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './NewsSection.module.scss';
import { Post } from '@prisma/client';
import { NewsItem } from '../news-item';

interface Props {
  items: Post[];
  loading: boolean;
  className?: string;
}

export const NewsSection: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      {items.map((item) => (
        <NewsItem
          key={item.id}
          id={item.id}
          name={item.name}
          shortDescription={item.shortDescription}
          imageUrl={item.imageUrl}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
};
