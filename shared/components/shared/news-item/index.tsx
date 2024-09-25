import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './NewsItem.module.scss';
import Link from 'next/link';

interface Props {
  id: number;
  name: string;
  shortDescription: string;
  imageUrl: string;
  createdAt: Date;
  className?: string;
}

export const NewsItem: React.FC<Props> = ({
  id,
  name,
  shortDescription,
  imageUrl,
  createdAt,
  className,
}) => {
  return (
    <article className={cn(styles.root, className)}>
      <Link href={`/news/${id}`} className={styles.wrapper}>
        <img src={imageUrl} alt={name} />
        <div className={styles.content}>
          <span className={styles.date}>{new Date(createdAt).toLocaleDateString()}</span>
          <span className={styles.name}>{name}</span>
          <p>{shortDescription.substring(0, 200) + '...'}</p>
        </div>
      </Link>
    </article>
  );
};
