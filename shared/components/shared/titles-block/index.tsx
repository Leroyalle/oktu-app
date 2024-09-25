import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TitlesSection } from '@prisma/client';
import styles from './TitlesBlock.module.scss';
import { TitlesBlockItem } from '../titles-block-item';

interface Props {
  items: TitlesSection[];
  className?: string;
}

export const TitlesBlock: React.FC<Props> = ({ items, className }) => {
  if (!items) {
    return;
  }
  return (
    <article className={cn(styles.root, className)}>
      <ul>
        {items.map((item, index) => (
          <TitlesBlockItem
            key={item.id}
            name={item.name}
            href={item.href}
            imageUrl={item.imageUrl}
            className={`block ${index % 5 <= 1 ? 'w-1/2' : 'w-1/3'} p-3`}
          />
        ))}
      </ul>
    </article>
  );
};
