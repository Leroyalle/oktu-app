import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './ItemsWithTitle.module.scss';

interface Props {
  title: string;
  items: string[];
  className?: string;
}

export const ItemsWithTitle: React.FC<Props> = ({ title, items, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <strong>{title}</strong>
      <ul className={styles.wrapper}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
