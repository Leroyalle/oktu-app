import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './SimilarLinks.module.scss';

interface Props {
  items: {
    name: string;
    href: string;
  }[];
  className?: string;
}

export const SimilarLinks: React.FC<Props> = ({ items, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
