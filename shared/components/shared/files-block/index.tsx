import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FilesBlock.module.scss';
import { FilesItem } from '../files-item';
import { File } from '@prisma/client';

interface Props {
  title?: string;
  items: File[];
  className?: string;
}

export const FilesBlock: React.FC<Props> = ({ title, items, className }) => {
  if (!items || items.length === 0) {
    return;
  }

  return (
    <div className={cn(styles.root, className)}>
      {title && <h3>{title}</h3>}
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <FilesItem name={item.name} href={item.href} iconUrl={item.iconUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};
