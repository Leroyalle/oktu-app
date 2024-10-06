import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './SimilarLinks.module.scss';
import { AnimateBlock } from '../animate-block';

interface Props {
  items: {
    name: string;
    href: string;
  }[];
  className?: string;
}

export const SimilarLinks: React.FC<Props> = ({ items, className }) => {
  return (
    <AnimateBlock>
      <section className={cn(styles.root, 'similarLinks', className)}>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </AnimateBlock>
  );
};
