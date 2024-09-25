import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FilesBlock.module.scss';
import { FilesItem } from '../files-item';

interface Props {
  items: {
    name: string;
    href: string;
    iconUrl: string;
  }[];
  className?: string;
}

export const FilesBlock: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn(styles.root, className)}>
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
